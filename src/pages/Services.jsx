import React, { useEffect, useState } from 'react';
import { client } from '../sanityClient';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const query = `*[_type == "service"]{
          _id,
          name,
          description,
          options,
          "image": image.asset->url
        }`;
        const data = await client.fetch(query);
        setServices(data);
      } catch (error) {
        console.error('Virhe palveluiden haussa:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Tyylivakio otsikolle
  const titleStyle = {
    fontFamily: "'Montserrat', sans-serif",
    letterSpacing: '0.3em',
    color: '#1a1a1a'
  };

  return (
    /* Tausta pidetään raikkaana ja ilmavana */
    <div className="bg-white min-h-screen py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Otsikko: minimalistinen ja ilmava */}
        <div className="mb-20 text-center">
          <h1 className="text-2xl md:text-3xl uppercase font-light" style={titleStyle}>
            Palvelumme
          </h1>
          <div className="mt-4 h-[1px] w-12 bg-gray-200 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {loading
            ? Array(6).fill(0).map((_, idx) => (
                /* Skeleton vastaamaan uutta korttityyliä: rounded-sm, ei paksuja varjoja */
                <div
                  key={idx}
                  className="bg-gray-50 rounded-sm shadow-sm animate-pulse h-[550px]"
                >
                  <div className="h-56 bg-gray-200 w-full" />
                  <div className="p-8 space-y-4">
                    <div className="h-6 bg-gray-200 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 rounded w-full" />
                    <div className="h-4 bg-gray-200 rounded w-5/6" />
                    <div className="pt-10 space-y-2">
                      <div className="h-3 bg-gray-200 rounded w-full" />
                      <div className="h-3 bg-gray-200 rounded w-full" />
                    </div>
                  </div>
                </div>
              ))
            : services.map((service) => (
                <ServiceCard
                  key={service._id}
                  title={service.name}
                  description={service.description}
                  image={service.image}
                  options={service.options ?? []}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Services;