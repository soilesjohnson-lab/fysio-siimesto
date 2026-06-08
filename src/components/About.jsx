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
      
      {/* Henkilökuva */}
      <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] overflow-hidden">
        <img
          src={urlFor(data.aboutImage)
            .width(1600)
            .quality(75)
            .auto("format")
            .fit("max")
            .url()}
          srcSet={`
            ${urlFor(data.aboutImage).width(800).url()} 800w,
            ${urlFor(data.aboutImage).width(1200).url()} 1200w,
            ${urlFor(data.aboutImage).width(1600).url()} 1600w
          `}
          sizes="100vw"
          alt="Fysioterapeutti Soile Siimestö-Johnson Joensuu"
          className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
          loading="lazy"
        />
      </div>

      {/* Sisältö */}
      <div className="relative -mt-24 md:-mt-40 lg:-mt-56 flex justify-center px-6 pb-24">
        <div className="w-full max-w-3xl bg-white p-6 md:p-12 lg:p-20 shadow-xl text-center z-10">

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
              type="button"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              aria-controls="story-content"
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