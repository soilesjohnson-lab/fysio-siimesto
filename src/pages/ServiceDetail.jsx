// pages/ServiceDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { client } from "../sanityClient";

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const query = `*[_type == "service" && _id == $id][0]{
          _id,
          name,
          description,
          content,
          options,
          "image": image.asset->url
        }`;
        const data = await client.fetch(query, { id });
        setService(data);
      } catch (error) {
        console.error("Virhe palvelun haussa:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  if (loading) return <div className="text-center py-20">Ladataan...</div>;
  if (!service) return <div className="text-center py-20">Palvelua ei löytynyt</div>;

  const textStyle = { fontFamily: "'Montserrat', sans-serif", color: "#333" };

  return (
    <div className="bg-white min-h-screen">
      {/* Full-width hero image */}
      {service.image && (
        <div className="w-full h-[400px] md:h-[500px] relative overflow-hidden">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div> {/* kevyesti tummentaa tekstiä varten */}
          <h1 className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-4xl md:text-5xl font-light uppercase text-center px-4">
            {service.name}
          </h1>
        </div>
      )}

      {/* Content area */}
      <div className="max-w-3xl mx-auto py-16 px-6 space-y-12">
        {service.description && (
          <p className="text-gray-700 leading-relaxed text-lg" style={textStyle}>
            {service.description}
          </p>
        )}

        {service.content && (
            <div className="space-y-6 text-gray-800" style={textStyle}>
                {service.content.split("\n").map((line, idx) => {
                const trimmed = line.trim();
                if (!trimmed) return null; // ohita tyhjät rivit

                if (trimmed.startsWith("## ")) {
                    return (
                    <h3 key={idx} className="text-xl font-semibold mt-8">
                        {trimmed.replace("## ", "")}
                    </h3>
                    );
                }

                if (trimmed.startsWith("- ")) {
                    return (
                    <ul key={idx} className="list-disc list-inside ml-6">
                        <li>{trimmed.replace(/^- /, "")}</li>
                    </ul>
                    );
                }

                return <p key={idx}>{trimmed}</p>;
                })}
            </div>
        )}

        {service.options && service.options.length > 0 && (
          <div className="mt-12 space-y-3">
            <h2 className="text-2xl font-medium mb-4" style={textStyle}>
              Vaihtoehdot
            </h2>
            <ul className="divide-y divide-gray-200">
              {service.options.map((opt, idx) => (
                <li key={idx} className="flex justify-between py-3">
                  <span>{opt.time} min</span>
                  <span>{opt.price} €</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/booking"
            className="inline-block px-10 py-4 bg-gray-800 text-white font-medium uppercase rounded-lg hover:bg-gray-900 transition-colors duration-200"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Varaa aika
          </Link>
        </div>

        {/* Takaisin */}
        <div className="text-center mt-8">
          <Link
            to="/services"
            className="inline-block text-gray-600 text-[10px] tracking-[0.2em] uppercase hover:underline"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            &larr; Takaisin palveluihin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;