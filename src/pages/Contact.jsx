import React, { useState } from "react";
import scrollToTop from "../hooks/scrollToTop";

export default function Contact() {
  const [zoomedImage, setZoomedImage] = useState(null);
  const textStyle = {
    fontFamily: "'Montserrat', sans-serif",
    color: "#777777",
  };

  scrollToTop();

  return (
    <div className="bg-white min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Otsikko */}
        <div className="mb-20 text-center">
          <h2 className="section-title">Ota yhteyttä</h2>
          <div className="mt-4 h-[1px] w-12 bg-gray-200 mx-auto mb-6"></div>
          <p className="text-style">
            Täytä lomake ottaaksesi yhteyttä tai tutustu ohjeisiin vastaanotolle.
          </p>
        </div>

        {/* Pääsisältö */}
        <div className="grid md:grid-cols-2 gap-20">

          {/* Viestilomake */}
          <div className="space-y-8">
            <h3
              className="text-xs tracking-[0.3em] uppercase font-semibold mb-10 text-gray-800"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
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

          {/* Vastaanotto ja ohjeet */}
          <div className="space-y-8">

            <h3
              className="text-xs tracking-[0.3em] uppercase font-semibold mb-10 text-gray-800"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Vastaanotto
            </h3>

            {/* Kartta */}
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

            {/* Tekstiohje ja kuvat */}
            <div className="bg-gray-50 border border-gray-200 rounded-md p-6 text-[11px] tracking-[0.2em] font-light space-y-4">
              <p style={textStyle}>
                Toimipiste on samassa rakennuksessa kuin <strong>Sohvin valinta</strong>, mutta toisella puolella.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                {/* Kuva 1 */}
                <figure className="relative w-full sm:w-1/2 cursor-pointer overflow-hidden rounded-sm group">
                  {/* Klikattava kuva */}
                  <img
                    src="/signs.jpg"
                    alt="Käännös tieltä"
                    className="w-full object-cover aspect-[4/3] rounded-sm transition-transform duration-300 group-hover:scale-105"
                    onClick={() => setZoomedImage("/signs.jpg")}
                  />

                  {/* Hover overlay: EI ota vastaan hiiritapahtumia */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m-7-7h14" />
                    </svg>
                  </div>

                  <figcaption className="text-[10px] text-gray-600 mt-1 text-center">
                    Käännös tieltä
                  </figcaption>
                </figure>

                {/* Kuva 2 */}
                  <figure className="relative w-full sm:w-1/2 cursor-pointer overflow-hidden rounded-sm group">
                    <img
                      src="/door.jpg"
                      alt="Oven sijainti"
                      className="w-full object-cover aspect-[4/3] rounded-sm transition-transform duration-300 group-hover:scale-105"
                      onClick={() => setZoomedImage("/door.jpg")}
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m-7-7h14" />
                      </svg>
                    </div>
                    <figcaption className="text-[10px] text-gray-600 mt-1 text-center">
                      Sisäänkäynti
                    </figcaption>
                  </figure>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Lightbox modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={() => setZoomedImage(null)}
        >
          <img src={zoomedImage} alt="Zoomed" className="max-h-[90%] max-w-[90%] rounded-md shadow-lg" />
        </div>
      )}
    </div>
  );
}