export default function Hero() {
  const titleStyle = {
    fontFamily: "'Montserrat', sans-serif",
    letterSpacing: '0.02em',
    lineHeight: '1.2'
  };

  const subTextStyle = {
    fontFamily: "'Montserrat', sans-serif",
    letterSpacing: '0.05em',
    color: 'rgba(255, 255, 255, 0.9)'
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      
      {/* Kuva */}
      <img 
        src="/hero.jpg" 
        alt="Hero" 
        className="absolute inset-0 w-full h-full object-cover brightness-[0.65]"
      />
    
      {/* Tekstisisältö */}
      <div className="relative z-10 max-w-4xl px-8">

        {/* Pääotsikko */}
        <h1 
          className="text-4xl md:text-6xl font-bold text-white mb-8" 
          style={titleStyle}
        >
          Fysioterapia, jossa keho ja mieli kohtaavat
        </h1>

        {/* Leipäteksti */}
        <p 
          className="max-w-2xl mx-auto text-base md:text-xl font-light leading-relaxed mb-12" 
          style={subTextStyle}
        >
          Tarjoamme perinteistä ja psykofyysistä fysioterapiaa, joka huomioi sinut kokonaisuutena.
        </p>

        {/* Nappi */}
        <div className="flex justify-center">
          <a 
            href="/booking" 
            className="px-12 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-white hover:text-gray-900 transition-all duration-500 rounded-sm"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Varaa aika
          </a>
        </div>
      </div>
    </section>
  );
}