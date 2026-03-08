import scrollToTop from "../hooks/scrollToTop";

export default function PrivacyPolicy() {
  scrollToTop();

  // Etusivun tyyliä mukaileva leipäteksti
  const bodyTextStyle = "text-sm md:text-base font-light tracking-wide text-gray-600 leading-relaxed";
  
  // Montserrat-tyylit otsikoille ja detaljeille
  const montserratStyle = { fontFamily: "'Montserrat', sans-serif" };

  return (
    <div className="bg-white min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Otsikko - Montserrat */}
        <div className="mb-20 text-center border-gray-50 pb-6">
          <h1 className="section-title">Tietosuoja ja evästeet</h1>
          <div className="mt-4 h-[1px] w-12 bg-gray-200 mx-auto mb-6"></div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-medium" style={montserratStyle}>
            Päivitetty: 8.3.2026
          </p>
        </div>

        {/* Johdanto - Etusivun tyyli */}
        <div className="mb-20 w-fit mx-auto max-w-3xl">
          <p className={bodyTextStyle}>
            Tämä sivusto on teknisesti staattinen, emmekä kerää tai tallenna henkilötietojasi suoraan sivuston kautta. 
            Käytämme kuitenkin kolmannen osapuolen palveluita mahdollistaaksemme yhteydenoton ja ajanvarauksen.
          </p>
        </div>

        <div className="space-y-20">
          {/* Sektio 1 */}
          <section className="max-w-3xl mx-auto">
            <h3 className="text-xs tracking-[0.3em] uppercase font-semibold mb-6 text-gray-800" style={montserratStyle}>
              1. Yhteydenottolomake (Formspree)
            </h3>
            <p className={`${bodyTextStyle} mb-6`}>
              Kun lähetät viestin yhteydenottolomakkeella, antamasi tiedot (nimi, sähköposti, viesti) välitetään <strong>Formspree.io</strong>-palvelun kautta sähköpostiimme. 
              Tietoja käytetään vain viestiisi vastaamiseen. Tiedot eivät tallennu tämän sivuston palvelimelle.
            </p>
            <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noreferrer" 
               className="text-[10px] tracking-[0.2em] uppercase underline underline-offset-5 text-gray-400 hover:text-gray-800 transition-colors" style={montserratStyle}>
              Lue lisää: Formspree Privacy Policy
            </a>
          </section>

          {/* Sektio 2 */}
          <section className="max-w-3xl mx-auto">
            <h3 className="text-xs tracking-[0.3em] uppercase font-semibold mb-6 text-gray-800" style={montserratStyle}>
              2. Ajanvaraus (Timma)
            </h3>
            <p className={`${bodyTextStyle} mb-6`}>
              Ajanvaraussivu käyttää upotettua <strong>Timma-palvelua</strong>. Kun varaat ajan, annat tietosi suoraan Timman järjestelmään. 
              Me pääsemme näkemään nämä tiedot Timman hallintapaneelin kautta voidaksemme toteuttaa tilatun palvelun.
            </p>
            <a href="https://www.timma.fi/privacy" target="_blank" rel="noreferrer" 
               className="text-[10px] tracking-[0.2em] uppercase underline underline-offset-5 text-gray-400 hover:text-gray-800 transition-colors" style={montserratStyle}>
              Lue lisää: Timma Privacy Policy
            </a>
          </section>

          {/* Sektio 3 */}
          <section className="max-w-3xl mx-auto">
            <h3 className="text-xs tracking-[0.3em] uppercase font-semibold mb-6 text-gray-800" style={montserratStyle}>
              3. Karttapalvelu (Google Maps)
            </h3>
            <p className={`${bodyTextStyle} mb-6`}>
              Sivustolla on upotettu Google Maps -kartta sijaintimme näyttämiseksi. Google saattaa kerätä tietoja, kuten IP-osoitteesi tai sijaintisi, jos selaimesi lataa karttaelementin.
            </p>
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" 
               className="text-[10px] tracking-[0.2em] uppercase underline underline-offset-5 text-gray-400 hover:text-gray-800 transition-colors" style={montserratStyle}>
              Lue lisää: Google Privacy Policy
            </a>
          </section>

          {/* Sektio 4 */}
          <section className="max-w-3xl mx-auto pb-20">
            <h3 className="text-xs tracking-[0.3em] uppercase font-semibold mb-6 text-gray-800" style={montserratStyle}>
              4. Evästeet
            </h3>
            <p className={bodyTextStyle}>
              Sivusto ei aseta markkinointi- tai seurantaevästeitä. Kolmannen osapuolen upotukset, kuten Timma tai Google Maps saattavat kuitenkin asettaa teknisiä evästeitä, jotka ovat välttämättömiä kyseisten palveluiden toiminnalle.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}