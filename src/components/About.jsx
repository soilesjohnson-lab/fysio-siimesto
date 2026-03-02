import { useState } from "react";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="w-full bg-[#f9f8f6]">

      {/* Kuva */}
      <div className="relative h-[500px] md:h-[650px] w-full overflow-hidden">
        <img
          src="/soile.jpg"
          alt="Soile - Fysio Siimestö"
          className="w-full h-full object-cover object-[center_50%]"
        />
        <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
      </div>

      {/* Sisältö */}
      <div className="relative -mt-40 md:-mt-56 px-6 pb-24 flex justify-center">
        <div className="w-full max-w-3xl bg-white p-10 md:p-20 shadow-xl text-center">

          {/* Otsikko */}
          <h2 className="title-style">
            Lämmin kohtaaminen, <br /> yksilöllinen hoito
          </h2>

          {/* Teksti */}
          <div className="relative mt-10">
            <div
              className={`space-y-6 text-sm md:text-base font-light tracking-wide text-gray-600 leading-relaxed text-left md:text-center transition-all duration-500 ${
                expanded
                  ? "max-h-[2000px]"
                  : "max-h-[300px] overflow-hidden"
              }`}
            >
              <p>Olen Soile Siimestö-Johnson, fysioterapeutti, psykofyysinen fysioterapeutti ja personal trainer. Työssäni minua ohjaa ajatus siitä, että kestävä toimintakyky, jaksaminen ja hyvinvointi rakentuvat kehon ja hermoston kautta – lempeästi, kuunnellen ja kokonaisuutta kunnioittaen.</p>
              <p>Minulla on myös omakohtaista kokemusta liiallisesta kuormittumisesta, niin fyysisestä kuin psyykkisestä. Olen kulkenut pitkän matkan esimerkiksi pitkäaikaisesta unettomuudesta kohti tasapainoisempaa arkea.</p>
              <p>Aiemmin yritin ratkaista kuormitusta tekemällä enemmän ja ponnistelemalla. Vasta kun opin kuuntelemaan kehoa, syntyi tilaa aidolle palautumiselle.</p>
              <p>Työskentelen työikäisten ja ikääntyvien kanssa. Kohtaan jokaisen asiakkaan yksilöllisesti, lämmöllä ja rauhassa.</p>
              <p>Vapaa-ajallani liikun monipuolisesti: kestävyysurheilua, joogaa ja kuntosaliharjoittelua.</p>
              <p>Haluan auttaa sinua löytämään tasapainoa ja elämäniloa.</p>
            </div>

            {!expanded && (
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
            )}
          </div>

          {/* Nappi */}
          <div className="pt-10">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-block pb-1 border-b border-gray-900 text-[11px] tracking-[0.3em] uppercase font-medium transition-all duration-300 hover:opacity-50 hover:scale-105 cursor-pointer"
            >
              {expanded ? "Sulje" : "Lue koko tarinani"}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}