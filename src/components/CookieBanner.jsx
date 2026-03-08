import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-50 bg-opacity-90 border border-gray-200 px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center sm:space-x-4 space-y-2 sm:space-y-0 shadow-sm z-50 font-raleway text-gray-800 text-sm max-w-md w-[90%]">
      
      <span className="text-center sm:text-left">
        Tämä sivusto käyttää <strong>Timma-ajanvarausta</strong> ja <strong>Google reCAPTCHA</strong>. 
        Jatkamalla hyväksyt <a href="/privacy-policy" className="underline hover:text-gray-600">tietosuojaselosteen</a>.
      </span>

      <button
        onClick={acceptCookies}
        className="bg-[#1a1a1a] text-white px-4 py-1 rounded-full text-xs uppercase tracking-wide hover:bg-gray-800 transition"
      >
        Hyväksy
      </button>
    </div>
  );
}