import { useState } from "react";
import scrollToTop from "../hooks/scrollToTop";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "", // honeypot
  });

  const [status, setStatus] = useState(""); // "" | "sent" | "error"
  const [zoomedImage, setZoomedImage] = useState(null);

  const textStyle = {
    fontFamily: "'Montserrat', sans-serif",
    color: "#777777",
  };

  scrollToTop();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.company) {
      // Honeypot täytetty → botti
      setStatus("error");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xpqywgkl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "", company: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

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

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Honeypot kenttä */}
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                style={{ display: "none" }}
                autoComplete="off"
              />

              <input
                type="text"
                name="name"
                placeholder="Nimi"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pb-3 bg-transparent border-b border-gray-200 text-[11px] tracking-widest outline-none focus:border-gray-500 transition-colors font-light"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              />

              <input
                type="email"
                name="email"
                placeholder="Sähköposti"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pb-3 bg-transparent border-b border-gray-200 text-[11px] tracking-widest outline-none focus:border-gray-500 transition-colors font-light"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              />

              <textarea
                name="message"
                placeholder="Miten voimme auttaa?"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full pb-3 bg-transparent border-b border-gray-200 text-[11px] tracking-widest outline-none focus:border-gray-500 transition-colors font-light resize-none"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              ></textarea>

              <button
                type="submit"
                className="inline-block px-10 py-4 bg-[#4a4a4a] text-white text-[10px] tracking-[0.3em] uppercase font-medium rounded-sm hover:bg-[#262626] transition-all duration-300 mt-4"
              >
                Lähetä viesti
              </button>

              {status === "sent" && (
                <p className="text-green-600 text-[11px] mt-2">
                  Kiitos viestistäsi! Otamme yhteyttä mahdollisimman pian.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-[11px] mt-2">
                  Viestin lähettäminen epäonnistui. Yritä uudelleen.
                </p>
              )}
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

            <div className="relative w-full pb-[60%] overflow-hidden rounded-sm grayscale-[0.5] hover:grayscale-0 transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d948.2894790911687!2d29.773324193769117!3d62.611034912366016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469b865fbf57aab5%3A0x870eaefd3ea08ba2!2sTeollisuuskatu%2011%2C%2080100%20Joensuu!5e1!3m2!1sfi!2sfi!4v1770414935106!5m2!1sfi!2sfi"
                title="Fysio Siimestö"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <h3
              className="text-xs tracking-[0.3em] uppercase font-semibold mt-20 text-gray-800"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Saapumisohjeet
            </h3>

            <div className="bg-gray-50 border border-gray-200 rounded-md p-6 text-[11px] tracking-widest outline-none font-light space-y-4">
              <p style={textStyle}>
                Toimipiste on samassa rakennuksessa kuin Sohvin valinta, mutta toisella puolella. Parkkipaikkoja löytyy myös Sohvin valinnan edestä.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                {/* Kuva 1 */}
                <figure className="w-full sm:w-1/2 cursor-pointer">
                  <div
                    className="relative rounded-sm overflow-hidden group"
                    onClick={() => setZoomedImage("/signs.jpg")}
                  >
                    <img
                      src="/signs.jpg"
                      alt="Käännös tieltä"
                      className="w-full object-cover aspect-[4/3] rounded-sm transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="text-[10px] text-gray-600 mt-1 text-center">
                    Käännös tieltä
                  </figcaption>
                </figure>

                {/* Kuva 2 */}
                <figure className="w-full sm:w-1/2 cursor-pointer">
                  <div
                    className="relative rounded-sm overflow-hidden group"
                    onClick={() => setZoomedImage("/door.jpg")}
                  >
                    <img
                      src="/door.jpg"
                      alt="Oven sijainti"
                      className="w-full object-cover aspect-[4/3] rounded-sm transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="text-[10px] text-gray-600 mt-1 text-center">
                    Sisäänkäynti
                  </figcaption>
                </figure>
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
            <img
              src={zoomedImage}
              alt="Zoomed"
              className="max-h-[90%] max-w-[90%] rounded-md shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}