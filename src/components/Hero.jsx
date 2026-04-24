import { NavLink } from 'react-router-dom';
import { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "../sanityClient";

const builder = createImageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default function Hero({ data }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      
      {/* Kuva */}
      <img
        src={
          data?.image
            ? urlFor(data.image)
                .width(2000)
                .quality(100)
                .fit("max")
                .url()
            : "/hero.jpg"
        }
        alt={data?.title || "Fysio Siimestö - Fysioterapiaa Joensuussa"}
        className="absolute inset-0 w-full h-full object-cover brightness-[0.9] pointer-events-none"
      />

      {/* Tekstisisältö */}
      <div className="relative z-10 max-w-4xl px-8">

        {/* Pääotsikko */}
        <h1 className="hero-title relative text-white">
          {/* Yksilöllistä fysioterapiaa jaksamista ja palautumista tukien */}
          {/* {data.title} */}
          {data?.title || "Yksilöllistä fysioterapiaa jaksamista ja palautumista tukien"}
        </h1>

        {/* Alaotsikko */}
        <p className="hero-subtext relative text-white/90">
          {/* Tarjoan perinteistä ja psykofyysistä fysioterapiaa, joka huomioi sinut kokonaisuutena. */}
          {/* {data.subtitle} */}
          {data?.subtitle || "Tarjoan perinteistä ja psykofyysistä fysioterapiaa, joka huomioi sinut kokonaisuutena."}
        </p>

        {/* Painike */}
        <div className="flex justify-center relative mt-6">
          <NavLink 
            to="/booking" 
            className="px-12 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-white hover:text-gray-900 transition-all duration-500 rounded-sm"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Varaa aika
          </NavLink>
        </div>
      </div>
    </section>
  );
}