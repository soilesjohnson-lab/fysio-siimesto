import { NavLink } from 'react-router-dom';
// Tuodaan offerings-data takaisin, jotta voimme käyttää sitä fallbackina
import { offerings } from "../data/offerings.js";

export default function Approach({ data }) {
  // Tarkistetaan onko meillä dynaamista dataa Sanitysta
  const hasData = data?.servicesList && data.servicesList.length > 0;
  
  // Käytetään joko Sanityn listaa tai staattista offerings-listaa fallbackina
  const displayItems = hasData ? data.servicesList : offerings;

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">

        {/* Otsikko - Korjattu fallbackilla */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-2xl md:text-4xl font-light text-[#1a1a1a] leading-tight">
            {data?.approachTitleLine1 || "Kehon voimaa, palautumista"}
            <br className="hidden md:block" />
            {data?.approachTitleLine2 || "ja kokonaisvaltaista tasapainoa."}
          </h2>
        </div>

        {/* Nostot */}
        <div className="grid md:grid-cols-3 gap-16 md:gap-12">
          {displayItems.map((item, index) => (
            <div key={item.title || index} className="flex flex-col items-center text-center space-y-6">
              <div className="w-px h-12 bg-gray-200"></div>
              
              <h3 className="text-[11px] tracking-[0.3em] uppercase font-semibold text-[#1a1a1a]"> 
                {item.title} 
              </h3>
              
              <div className="space-y-2">
                <p className="text-gray-900 font-medium leading-relaxed"> 
                  {item.benefit} 
                </p>
                <p className="text-gray-500 text-sm leading-relaxed font-light tracking-wide italic"> 
                  {item.result} 
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Piilotettu SEO-teksti - Nostaa sanamäärää entisestään */}
        {!hasData && (
          <div className="sr-only">
            <h3>Fysioterapeuttinen lähestymistapani</h3>
            <p>
              Fysio Siimestön toiminta perustuu yksilölliseen ja laadukkaaseen kohtaamiseen. 
              Tarjoan fysioterapiaa, joka keskittyy hermoston rauhoittamiseen, kivun hallintaan 
              ja fyysisen toimintakyvyn palauttamiseen. Erityisosaamiseni psykofyysisessä 
              fysioterapiassa auttaa unettomuuden, stressin ja uupumuksen hoidossa Joensuussa.
            </p>
          </div>
        )}

        {/* CTA-painike */}
        <div className="mt-20 text-center">
          <NavLink 
            to="/services" 
            className="group relative inline-block px-12 py-5 bg-[#1a1a1a] text-white text-[10px] tracking-[0.4em] uppercase transition-all hover:bg-gray-800"
          > 
            Tutustu palveluihin 
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-gray-300 group-hover:w-12 transition-all"></span>
          </NavLink>
        </div>
      </div>
    </section>
  );
}