import React, { useState } from "react";

export default function About() {
  
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="grid grid-cols-1 w-full bg-[#f9f8f6]">
      
      {/* Taustakuva */}
      <div className="row-start-1 col-start-1 h-[500px] md:h-[650px] w-full overflow-hidden relative">
        <img src="/soile.jpg" alt="Soile - Fysio Siimestö" className="w-full h-full object-cover object-[center_20%]"/>
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      {/* Sisältöalue */}
      <div className="row-start-1 col-start-1 flex flex-col items-center pt-[350px] md:pt-[450px] px-6 pb-24">
        
        <div className="w-full max-w-3xl bg-white p-10 md:p-20 shadow-xl text-center z-10">
          
          {/* <span className="block text-[10px] tracking-[0.4em] uppercase text-gray-400 font-light mb-6"> Fysioterapeutti & Omistaja </span> */}

          {/* Otsikko */}
          <h2 className="title-style"> Lämmin kohtaaminen, <br /> yksilöllinen hoito </h2>

          {/* Teksti */}
          <div className="relative">
            <div className={`space-y-6 text-sm md:text-base font-light tracking-wide text-gray-600 leading-relaxed text-left md:text-center transition-all duration-500 ${expanded ? "max-h-[2000px]" : "max-h-[300px] overflow-hidden"}`}>
              <p>Olen Soile Siimestö-Johnson, fysioterapeutti, psykofyysinen fysioterapeutti ja personal trainer. Työssäni minua ohjaa ajatus siitä, että kestävä toimintakyky, jaksaminen ja hyvinvointi rakentuvat kehon ja hermoston kautta – lempeästi, kuunnellen ja kokonaisuutta kunnioittaen.</p>
              <p>Minulla on myös omakohtaista kokemusta liiallisesta kuormittumisesta, niin fyysisestä kuin psyykkisestä. Olen kulkenut pitkän matkan esimerkiksi pitkäaikaisesta unettomuudesta kohti tasapainoisempaa arkea. Tuo matka on opettanut minulle, kuinka suuri merkitys palautumisella, hermoston rauhoittumisella ja kehollisella turvan tunteella on hyvinvoinnille – eikä vain levon, vaan myös toimintakyvyn ja arjessa jaksamisen kannalta.</p>
              <p>Aiemmin yritin ratkaista kuormitusta ennen kaikkea tekemällä enemmän ja ponnistelemalla eteenpäin. Vasta kun opin kuuntelemaan kehoa ja huomioimaan hermoston tarpeet, syntyi tilaa aidolle palautumiselle ja armollisuudelle. Tämä kokemus on vahvasti läsnä myös tavassani kohdata asiakkaani.</p>
              <p>Työskentelen työikäisten ja ikääntyvien kanssa, ja minulla on runsaasti kokemusta myös ikääntyneiden ja muistisairaiden fysioterapian toteuttamisesta. Kohtaan jokaisen asiakkaan yksilöllisesti, lämmöllä ja rauhassa – tavoitteena on parantaa toimintakykyä, lievittää kipua ja tukea arjessa selviytymistä ilman liiallisen suorittamisen painetta.</p>
              <p>Vapaa-ajallani liikun monipuolisesti: harrastan kestävyysurheilua, joogaa ja kuntosaliharjoittelua. Lisäksi nautin lukemisesta ja koiran kanssa ulkoilusta. Oma liikkumiseni perustuu nykyään samaan ajatukseen kuin työni: kehoa kuunnellen, palautumista kunnioittaen ja kokonaisuutta tukien.</p>
              <p>Haluan auttaa sinua löytämään tasapainoa, palautumista ja armollisuutta keholle ja mielelle – niin, että jaksaminen vahvistuu ja arjessa suoriutuminen helpottuu. Ja ennen kaikkea, haluan auttaa sinua löytämään elämäniloa.</p>
            </div>

            {/* Gradient fade */}
            {!expanded && ( <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div> )}
          </div>

          {/* Nappi */}
          <div className="pt-10">
            <button onClick={() => setExpanded(!expanded)} className="inline-block pb-1 border-b border-gray-900 text-[11px] tracking-[0.3em] uppercase font-medium hover:opacity-50 transition-opacity"> {expanded ? "Sulje" : "Lue koko tarinani"} </button>
          </div>
        </div>
      </div>
    </section>
  );
}