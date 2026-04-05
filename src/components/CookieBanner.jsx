import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      const consent = localStorage.getItem("cookieConsent");

      if (!consent) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    const timer = setTimeout(checkConsent, 1000);

    window.addEventListener("cookieChanged", checkConsent);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("cookieChanged", checkConsent);
    };
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    window.dispatchEvent(new Event("cookieChanged"));

    loadAnalytics();
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    window.dispatchEvent(new Event("cookieChanged"));
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
          Jatkamalla sivuston käyttöä hyväksyt <a href="/privacy-policy" className="underline hover:text-gray-800 transition-colors">tietosuojaselosteemme</a>.
        </p>
      </div>

      <div className="flex gap-3 w-full justify-center">
        <button
          onClick={acceptCookies}
          className="px-10 py-3 bg-[#4a4a4a] text-white text-[9px] tracking-[0.3em] uppercase font-medium rounded-sm hover:bg-[#262626] transition-all duration-300 w-full sm:w-auto cursor-pointer"
          style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Hyväksy
        </button>
        <button
          onClick={rejectCookies}
          className="px-10 py-3 border-2 border-[#4a4a4a] text-[#4a4a4a] text-[9px] tracking-[0.3em] uppercase font-medium rounded-sm hover:bg-[#262626] hover:text-white transition-all duration-300 w-full sm:w-auto cursor-pointer"
          style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Hylkää
        </button>
      </div>
    </div>
  );
}