import React from 'react';

export default function Contact() {
  const textStyle = {
    fontFamily: "'Montserrat', sans-serif",
    color: "#777777",
  };

  const titleStyle = {
    fontFamily: "'Montserrat', sans-serif",
    letterSpacing: '0.3em',
    color: '#1a1a1a'
  };

  return (
    /* Tausta pidetään puhtaana valkoisena */
    <div className="bg-white min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Otsikko-osio */}
        <div className="mb-20 text-center">
          <h2 className="text-2xl md:text-3xl uppercase font-light" style={titleStyle}>
            Ota yhteyttä
          </h2>
          <div className="mt-4 h-[1px] w-12 bg-gray-200 mx-auto mb-6"></div>
          <p className="text-sm tracking-widest uppercase font-light max-w-md mx-auto leading-relaxed" style={textStyle}>
            Jätä viesti alla tai ota yhteyttä suoraan puhelimitse tai sähköpostilla.
          </p>
        </div>

        {/* Pääsisältö ilman raskaita laatikoita */}
        <div className="grid md:grid-cols-2 gap-20">
          
          {/* Viestilomake - Minimalistiset inputit */}
          <div className="space-y-8">
            <h3 className="text-xs tracking-[0.3em] uppercase font-semibold mb-10 text-gray-800" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Jätä viesti
            </h3>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="NIMESI"
                className="w-full pb-3 bg-transparent border-b border-gray-200 text-[11px] tracking-widest outline-none focus:border-gray-500 transition-colors uppercase font-light"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              />
              <input
                type="email"
                placeholder="SÄHKÖPOSTI"
                className="w-full pb-3 bg-transparent border-b border-gray-200 text-[11px] tracking-widest outline-none focus:border-gray-500 transition-colors uppercase font-light"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              />
              <textarea
                placeholder="MITEN VOIMME AUTTAA?"
                rows="4"
                className="w-full pb-3 bg-transparent border-b border-gray-200 text-[11px] tracking-widest outline-none focus:border-gray-500 transition-colors uppercase font-light resize-none"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              ></textarea>
              
              <button className="inline-block px-10 py-4 bg-[#4a4a4a] text-white text-[10px] tracking-[0.3em] uppercase font-medium rounded-sm hover:bg-[#262626] transition-all duration-300 mt-4">
                Lähetä viesti
              </button>
            </form>
          </div>

          {/* Sijainti ja yhteystiedot */}
          <div className="space-y-8">
            <h3 className="text-xs tracking-[0.3em] uppercase font-semibold mb-10 text-gray-800" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Vastaanotto
            </h3>
            
            {/* Kartta - Suoraviivaisempi tyyli */}
            <div className="relative w-full pb-[60%] overflow-hidden rounded-sm grayscale-[0.5] hover:grayscale-0 transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1883.2104523098553!2d29.7715!3d62.6001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjLCsDM2JzAwLjQiTiAyOcKwNDYnMTcuNCJF!5e0!3m2!1sfi!2sfi!4v161234567890"
                title="Fysio Siimestö"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              />
            </div>

            {/* Yhteystiedot tekstinä */}
            <div className="pt-6 space-y-4">
              <div className="text-[11px] tracking-[0.2em] uppercase font-light leading-relaxed" style={textStyle}>
                <p className="text-gray-900 font-medium mb-1">Fysio Siimestö</p>
                <p>Teollisuuskatu 11, 80100 Joensuu</p>
                <div className="h-[1px] w-8 bg-gray-100 my-4"></div>
                <p>Puh: 040 123 4567</p>
                <p>Email: info@fysiosiimesto.fi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}