import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Tarkistetaan onko käyttäjä jo hyväksynyt ehdot
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Pieni viive näyttämiseen, jotta sivu ehtii latautua
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white border border-gray-100 p-6 flex flex-col items-center shadow-xl z-[100] max-w-lg w-[90%] rounded-sm animate-fade-in">

      <div className="text-center space-y-3 mb-6">
        <h4 className="text-[10px] tracking-[0.3em] uppercase font-semibold text-gray-800" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Tietosuoja & Evästeet
        </h4>
        <p className="text-[11px] leading-relaxed text-gray-500 tracking-wider font-light" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Käytämme sivustolla kolmannen osapuolen palveluita (kuten <strong>Timma</strong> ja <strong>Google Maps</strong>) sujuvan käyttökokemuksen varmistamiseksi. 
          Jatkamalla sivuston käyttöä hyväksyt <a href="/tietosuoja" className="underline hover:text-gray-800 transition-colors">tietosuojaselosteemme</a>.
        </p>
      </div>

      <button
        onClick={acceptCookies}
        className="px-10 py-3 bg-[#4a4a4a] text-white text-[9px] tracking-[0.3em] uppercase font-medium rounded-sm hover:bg-[#262626] transition-all duration-300 w-full sm:w-auto cursor-pointer"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        Hyväksy
      </button>
    </div>
  );
}