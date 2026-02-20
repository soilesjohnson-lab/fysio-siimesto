import React from 'react';
import scrollToTop from "../hooks/scrollToTop";

export default function Contact() {
  const textStyle = {
    fontFamily: "'Montserrat', sans-serif",
    color: "#777777",
  };

  scrollToTop();

  return (
    /* Tausta pidetään puhtaana valkoisena */
    <div className="bg-white min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Otsikko */}
        <div className="mb-20 text-center">
          <h2 className="section-title"> Ota yhteyttä </h2>
          <div className="mt-4 h-[1px] w-12 bg-gray-200 mx-auto mb-6"></div>
          <p className="text-style"> Jätä viesti alla tai ota yhteyttä suoraan puhelimitse tai sähköpostilla. </p>
        </div>

        {/* Pääsisältö */}
        <div className="grid md:grid-cols-2 gap-20">
          
          {/* Viestilomake */}
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
            
            {/* Sijainti */}
            <div className="relative w-full pb-[60%] overflow-hidden rounded-sm grayscale-[0.5] hover:grayscale-0 transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d948.2894790911687!2d29.773324193769117!3d62.611034912366016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469b865fbf57aab5%3A0x870eaefd3ea08ba2!2sTeollisuuskatu%2011%2C%2080100%20Joensuu!5e1!3m2!1sfi!2sfi!4v1770414935106!5m2!1sfi!2sfi"
                title="Fysio Siimestö"
                className="absolute top-0 left-0 w-full h-full border-0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Yhteystiedot */}
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