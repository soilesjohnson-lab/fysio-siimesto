import { useState } from "react";
import { PortableText } from "@portabletext/react";
import { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "../sanityClient";

const builder = createImageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function About({ data }) {
  const [expanded, setExpanded] = useState(false);

  if (!data) return null;

  return (
    <section className="grid grid-cols-1 w-full bg-[#f9f8f6]">
      
      {/* Henkilökuva - Optimoitu WebP ja laatu */}
      <div className="row-start-1 col-start-1 h-[500px] md:h-[650px] w-full overflow-hidden relative">
        <img
          src={
            urlFor(data.aboutImage)
            .width(1600)
            .quality(75)
            .auto('format')
            .fit("max")
            .url()
          }
          alt="Fysioterapeutti Soile Siimestö-Johnson Joensuu"
          className="absolute top-0 left-0 h-full w-full object-cover origin-left scale-110"
          loading="lazy"
        />
      </div>

      {/* Sisältö */}
      <div className="row-start-1 col-start-1 flex flex-col items-center pt-[350px] md:pt-[450px] px-6 pb-24">
        <div className="w-full max-w-3xl bg-white p-10 md:p-20 shadow-xl text-center z-10">

          {/* Otsikko */}
          <h2 className="text-2xl md:text-3xl font-light uppercase tracking-widest mb-8 text-[#1a1a1a]">
            {data?.aboutTitle || "Lämmin kohtaaminen ja yksilöllinen hoito Joensuussa"}
          </h2>

          {/* Teksti */}
          <div className="relative">
            <div
              className={`space-y-6 text-sm md:text-base font-light tracking-wide text-gray-600 leading-relaxed text-left md:text-center transition-all duration-500 ${
                expanded ? "max-h-[3000px]" : "max-h-[400px] overflow-hidden"
              }`}
            >
              {data.aboutContent ? (
                <PortableText value={data.aboutContent} />
              ) : (
                <div className="space-y-6">
                  <p>
                    Olen <strong>Soile Siimestö-Johnson</strong>, fysioterapeutti, psykofyysinen fysioterapeutti ja personal trainer. 
                    Työssäni minua ohjaa ajatus siitä, että kestävä toimintakyky, jaksaminen ja hyvinvointi rakentuvat kehon, mielen ja hermoston tasapainosta – lempeästi, kuunnellen ja kokonaisuutta kunnioittaen.
                  </p>
                  <p>
                    Minulla on omakohtaista kokemusta liiallisesta kuormittumisesta ja unettomuudesta. Tuo matka on opettanut minulle, kuinka suuri merkitys palautumisella, hermoston rauhoittumisella ja kehollisella turvan tunteella on hyvinvoinnille.
                  </p>
                  <p>
                    Työskentelen kaikenikäisten kanssa Joensuussa, ja minulla on runsaasti kokemusta myös ikääntyneiden, muistisairaiden sekä neurologisen fysioterapian toteuttamisesta. Kohtaan jokaisen asiakkaan yksilöllisesti, lämmöllä ja rauhassa.
                  </p>
                  
                  {/* Piilotettu SEO-teksti (sr-only) nostaa sanamäärää robotille, 
                      mutta ei sotke fallback-näkymän ulkoasua */}
                  <div className="sr-only">
                    <p>Aiemmin yritin selvitä kuormituksesta lisäämällä tekemistä. Vähitellen opin kuitenkin kuuntelemaan kehoa ja tunnistamaan, mitä hermosto todella tarvitsee. Tämä kokemus näkyy vahvasti tavassani kohdata asiakkaani.</p>
                    <p>Vapaa-ajallani harrastan kestävyysurheilua, joogaa ja kuntosaliharjoittelua. Oma liikkumiseni perustuu samaan ajatukseen kuin työni: kehoa kuunnellen ja palautumista kunnioittaen.</p>
                    <p>Haluan auttaa sinua löytämään tasapainoa, palautumista ja armollisuutta keholle ja mielelle – niin, että jaksaminen vahvistuu ja arjessa suoriutuminen helpottuu.</p>
                  </div>
                </div>
              )}
            </div>

            {!expanded && (
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
            )}
          </div>

          {/* Painike */}
          <div className="pt-10">
            <button
              onClick={() => setExpanded(!expanded)}
              className="cursor-pointer inline-block pb-1 border-b border-gray-900 text-[11px] tracking-[0.3em] uppercase font-medium hover:opacity-50 transition-opacity"
            >
              {expanded ? "Sulje" : "Lue koko tarinani"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}