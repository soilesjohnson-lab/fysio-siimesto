import { useEffect, useState } from 'react';
import { client } from '../sanityClient';
import ServiceCard from '../components/ServiceCard';
import scrollToTop from "../hooks/scrollToTop";
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/services', label: 'Palvelut' }
];

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        // Hae palvelut Sanitystä orderIndexin mukaan
        const query = `*[_type == "service"] | order(orderIndex asc){
          _id,
          name,
          description,
          options,
          "image": image.asset->url,
          orderIndex
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

  scrollToTop();

  return (
    <div className="bg-white min-h-screen py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Otsikko */}
        <div className="mb-20 text-center">
          <h1 className="text-2xl md:text-3xl uppercase font-light" style={titleStyle}>
            Palvelumme
          </h1>
          <div className="mt-4 h-[1px] w-12 bg-gray-200 mx-auto"></div>
        </div>

        {/* Kortit */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {loading
            ? Array(6).fill(0).map((_, idx) => (
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
                  id={service._id}
                  title={service.name}
                  description={service.description}
                  image={service.image}
                  options={service.options ?? []}
                />
              ))}
        </div>

        {/* Maksutavat ja korvaukset */}
        <div className="mt-24 max-w-3xl mx-auto text-center">
          <h2 className="text-xl uppercase tracking-[0.3em] text-gray-900 mb-6">
            Maksutavat ja korvaukset
          </h2>

          <p className="text-gray-700 mb-3">
            Fysioterapiasta on mahdollista saada <strong>Kela-korvaus 15 €</strong>.
          </p>

          <p className="text-gray-700 mb-6">
            Meillä käy maksuvälineenä myös ePassi ja Edenred.
          </p>

          <p className="text-sm text-gray-500 mb-8">
            Koti- ja laitoskuntoutuksesta voi olla mahdollista hakea kotitalousvähennystä.
          </p>

          {/* Logot */}
          <div className="flex justify-center items-center gap-8">
            <img src="/logos/epassi.svg" alt="ePassi maksutapa" className="h-10" />
            <img src="/logos/edenred.svg" alt="Edenred maksutapa" className="h-10" />
          </div>

          {/* CTA-nappi */}
          <div className="mt-20 text-center">
            <NavLink to="/services" className="group relative inline-block px-12 py-5 bg-[#1a1a1a] text-white text-[10px] tracking-[0.4em] uppercase transition-all hover:bg-gray-800"> Varaa aika <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-gray-300 group-hover:w-12 transition-all"></span></NavLink>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;