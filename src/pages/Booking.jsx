import { useState, useEffect } from "react";
import { loadTimmaWidget } from "../utils";
import SEO from '../components/SEO';

export default function Booking() {
  // Skrollaus ylös sivun latautuessa
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [consent, setConsent] = useState(localStorage.getItem("cookieConsent"));

  // Kuunnellaan evästeasetusten muutoksia (esim. jos hyväksytään muualla)
  useEffect(() => {
    const handler = () => setConsent(localStorage.getItem("cookieConsent"));
    window.addEventListener("cookieChanged", handler);
    return () => window.removeEventListener("cookieChanged", handler);
  }, []);

  // Ladataan Timma heti kun suostumus on ok
  useEffect(() => {
    if (consent === "true") {
      const timer = setTimeout(() => {
        loadTimmaWidget();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [consent]);

  return (
    <>
      <SEO 
        title="Ajanvaraus" 
        description="Varaa aikasi fysioterapiaan tai hierontaan helposti verkossa." 
        path="/booking" 
      />

      <div className="bg-white pt-24 pb-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Otsikko - tiivistetty mb-20 -> mb-8 */}
          <div className="mb-8 text-center">
            <h1 className="section-title">Varaa aika</h1>
            <div className="mt-4 h-[1px] w-12 bg-gray-200 mx-auto"></div>
          </div>

          {consent === "true" ? (
            /* TÄRKEÄÄ: Ei korkeusasetuksia tässä divissä. 
              Vain leveys, jotta utils.js määrittää korkeuden.
            */
            <div id="timma-booking-widget" className="w-full" />
          ) : (
            /* Evästekysely - näytetään vain jos ei hyväksyntää */
            <div className="w-full py-20 flex flex-col items-center justify-center bg-gray-50 border border-gray-200 rounded-sm p-6 text-center">
              <p className="text-[11px] text-gray-600 font-light mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Varaus-widget ei ole käytössä ilman evästeiden hyväksyntää. <br />
                Jatkamalla sivuston käyttöä hyväksyt <a 
                  href="/privacy-policy" 
                  className="underline hover:text-gray-800 transition-colors"
                >
                  tietosuojaselosteen
                </a>.
              </p>

              <button
                onClick={() => {
                  localStorage.setItem("cookieConsent", "true");
                  window.dispatchEvent(new Event("cookieChanged"));
                }}
                className="px-10 py-3 border-2 border-[#4a4a4a] text-[#4a4a4a] text-[9px] tracking-[0.3em] uppercase font-medium rounded-sm hover:bg-[#262626] hover:text-white transition-all duration-300 w-full sm:w-auto cursor-pointer"
              >
                Hyväksy evästeet ja varaa
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}