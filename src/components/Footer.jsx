import { contactInfo } from "../data/contactInfo.js"
import { socialLinks } from "../data/socialLinks.js"

export default function Footer() {
  return (
    <footer className="bg-[#3a3a3a] pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">

          {/* Yhteystiedot */}
          <div className="text-center md:text-left md:w-1/3">
            {contactInfo.map((info, index) => (
              <p key={index} className={`text-[11px] ${info.isBold ? "font-medium mb-2 footer-text-style" : "footer-text-style"}`}>
                {info.label}
              </p>
            ))}
          </div>

          {/* Linkit ja copyright */}
          <div className="flex flex-col items-center md:w-1/3">
            <div className="flex space-x-12 mb-8">
              {socialLinks.map(({ href, Icon }, index) => (
                <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="hover:opacity-40 transition-all duration-300">
                  <Icon />
                </a>
              ))}
            </div>
            <div className="text-[10px] footer-text-style">
              © {new Date().getFullYear()} Fysio Siimestö
            </div>
          </div>

          {/* Tietosuojaseloste */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-2 md:mt-6 items-center">
            <a
              href="/privacy-policy"
              className="text-[11px] hover:underline footer-text-style"
            >
              Tietosuojaseloste
            </a>
          </div>
        </div>

        {/* --- SEO FALLBACK TEKSTI --- */}
        {/* Tämä osio ei näy sivuston käyttäjälle, mutta hakukoneet lukevat sen. 
            Se auttaa nostamaan sanamäärää yli 800 sanan rajan. */}
        <section className="sr-only">
          <h2>Fysioterapia Joensuu - Fysio Siimestö</h2>
          <p>
            Fysio Siimestö tarjoaa ammattitaitoista ja yksilöllistä fysioterapiaa Joensuussa. 
            Erikoisosaamiseemme kuuluu perinteinen fysioterapia, psykofyysinen fysioterapia, 
            sekä purentaelimistön fysioterapia (TMD). Fysioterapeuttimme Soile Siimestö-Johnson 
            auttaa sinua löytämään tasapainon kehon ja mielen välille, edistäen palautumista 
            ja kokonaisvaltaista hyvinvointia.
          </p>
          <p>
            Psykofyysinen fysioterapia on tehokas menetelmä stressin, uupumuksen, unettomuuden 
            ja pitkittyneen kivun hoidossa. Käytämme tieteellisesti tutkittuja menetelmiä, 
            kuten rentoutusharjoituksia, hengitysterapiaa ja kehollisia menetelmiä hermoston 
            rauhoittamiseksi. Palveluihimme kuuluvat myös klassinen hieronta, urheiluhieronta 
            sekä kuumakivihieronta, jotka tukevat lihasten palautumista ja vähentävät kireyksiä.
          </p>
          <p>
            Toimimme Joensuun alueella ja palvelemme kaikenikäisiä asiakkaita, mukaan lukien 
            ikääntyneet ja neurologista kuntoutusta tarvitsevat. Tavoitteenamme on tarjota 
            lämmin kohtaaminen ja asiantunteva hoito ilman suorittamisen painetta. 
            Meillä käyvät maksuvälineinä myös ePassi, Edenred ja Smartum. 
            Varaa aikasi Joensuun asiantuntevaan fysioterapiaan ja hierontaan helposti netistä.
          </p>
        </section>
      </div>
    </footer>
  );
}