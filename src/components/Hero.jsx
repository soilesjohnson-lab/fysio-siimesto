import { NavLink } from 'react-router-dom';

export default function Hero() {

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      
      {/* Kuva */}
      <img
        src="/hero.jpg"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.75] pointer-events-none"
      />
    
      {/* Tekstisisältö */}
      <div className="relative z-10 max-w-4xl px-8">

        {/* Pääotsikko */}
        <h1 className="hero-title"> Yksilöllistä fysioterapiaa jaksamista ja palautumista tukien </h1>

        {/* Alaotsikko */}
        <p className="hero-subtext"> Tarjoan perinteistä ja psykofyysistä fysioterapiaa, joka huomioi sinut kokonaisuutena. </p>

        {/* Nappi */}
        <div className="flex justify-center">
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