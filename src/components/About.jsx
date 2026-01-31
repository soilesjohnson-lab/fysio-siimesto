export default function About() {
  const titleStyle = {
    fontFamily: "'Montserrat', sans-serif",
    letterSpacing: '0.2em', // Hieman enemmän ilmaa otsikkoon
    lineHeight: '1.2'
  };

  return (
    <section className="relative flex flex-col items-center">
      {/* 1. Yläosa: Henkilökuva */}
      <div className="w-full h-[500px] md:h-[700px] relative overflow-hidden">
        <img 
          src="/soile.jpg" 
          alt="Soile - Fysio Siimestö" 
          className="w-full h-full object-cover object-[center_20%]" // Säätää kuvan fokusta hieman ylemmäs
        />
        {/* Tummennuskerros, jos haluat kuvan ja tekstin väliin kontrastia (valinnainen) */}
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      {/* 2. Alaosa: Perinteinen taustaväri */}
      {/* Käytetään pehmeää hiekan tai luonnonvalkoisen sävyä, joka sopii "Siimestö" -teemaan */}
      <div className="w-full h-[400px] md:h-[500px] bg-[#f9f8f6]"></div>

      {/* 3. Keskellä leijuva tekstilaatikko */}
      <div className="absolute top-[60%] md:top-4/6 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-3xl bg-white p-10 md:p-20 shadow-xl z-10 text-center">
        <span className="block text-[10px] tracking-[0.4em] uppercase text-gray-400 font-light mb-6">
          Fysioterapeutti & Omistaja
        </span>
        
        <h2 className="text-2xl md:text-3xl uppercase font-light mb-10" style={titleStyle}>
          Lämmin kohtaaminen, <br />
          yksilöllinen hoito
        </h2>

        <div className="space-y-6 text-sm md:text-base font-light tracking-wide text-gray-600 leading-relaxed">
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.</p>
        </div>

        <div className="pt-10">
          <a 
            href="/contact" 
            className="inline-block pb-1 border-b border-gray-900 text-[11px] tracking-[0.3em] uppercase font-medium hover:opacity-50 transition-opacity"
          >
            Lue koko tarinani
          </a>
        </div>
      </div>
    </section>
  );
}