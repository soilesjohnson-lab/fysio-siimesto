import React from 'react';

export default function About() {
  const titleStyle = {
    fontFamily: "'Montserrat', sans-serif",
    letterSpacing: '0.2em',
    lineHeight: '1.2'
  };

  return (
    <section className="grid grid-cols-1 w-full bg-[#f9f8f6]">
      {/* 1. TAUSTAKUVA-ALUE */}
      {/* Asetetaan kuva alkamaan ensimmäisestä rivistä. Korkeus on esim. 600px */}
      <div className="row-start-1 col-start-1 h-[500px] md:h-[650px] w-full overflow-hidden">
        <img 
          src="/soile.jpg" 
          alt="Soile - Fysio Siimestö" 
          className="w-full h-full object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      {/* 2. SISÄLTÖALUE */}
      {/* Tämä kerros on myös row-start-1. Käytetään paddingia (pt), jotta laatikko alkaa kuvan päältä */}
      <div className="row-start-1 col-start-1 flex flex-col items-center pt-[350px] md:pt-[450px] px-6 pb-24">
        
        {/* VALKOINEN TEKSTILAATIKKO */}
        {/* Nyt tämä on tavallinen div (ei absolute), joten se venyttää koko sectionia! */}
        <div className="w-full max-w-3xl bg-white p-10 md:p-20 shadow-xl text-center z-10">
          <span className="block text-[10px] tracking-[0.4em] uppercase text-gray-400 font-light mb-6">
            Fysioterapeutti & Omistaja
          </span>
          
          <h2 className="text-xl md:text-3xl uppercase font-light mb-10" style={titleStyle}>
            Lämmin kohtaaminen, <br />
            yksilöllinen hoito
          </h2>

          <div className="space-y-6 text-sm md:text-base font-light tracking-wide text-gray-600 leading-relaxed text-left md:text-center">
            <p>Olen Soile Siimestö-Johnson, fysioterapeutti, psykofyysinen fysioterapeutti ja personal trainer. Työssäni minua ohjaa ajatus siitä, että kestävä toimintakyky, jaksaminen ja hyvinvointi rakentuvat kehon ja hermoston kautta – lempeästi, kuunnellen ja kokonaisuutta kunnioittaen.</p>
            <p>Minulla on myös omakohtaista kokemusta liiallisesta kuormittumisesta, niin fyysisestä kuin psyykkisestä. Olen kulkenut pitkän matkan esimerkiksi pitkäaikaisesta unettomuudesta kohti tasapainoisempaa arkea. Tuo matka on opettanut minulle, kuinka suuri merkitys palautumisella, hermoston rauhoittumisella ja kehollisella turvan tunteella on hyvinvoinnille – eikä vain levon, vaan myös toimintakyvyn ja arjessa jaksamisen kannalta.</p>
            <p>Aiemmin yritin ratkaista kuormitusta ennen kaikkea tekemällä enemmän ja ponnistelemalla eteenpäin. Vasta kun opin kuuntelemaan kehoa ja huomioimaan hermoston tarpeet, syntyi tilaa aidolle palautumiselle ja armollisuudelle. Tämä kokemus on vahvasti läsnä myös tavassani kohdata asiakkaani.</p>
            <p>Työskentelen työikäisten ja ikääntyvien kanssa, ja minulla on runsaasti kokemusta myös ikääntyneiden ja muistisairaiden fysioterapian toteuttamisesta. Kohtaan jokaisen asiakkaan yksilöllisesti, lämmöllä ja rauhassa – tavoitteena on parantaa toimintakykyä, lievittää kipua ja tukea arjessa selviytymistä ilman liiallisen suorittamisen painetta.</p>
            <p>Vapaa-ajallani liikun monipuolisesti: harrastan kestävyysurheilua, joogaa ja kuntosaliharjoittelua. Lisäksi nautin lukemisesta ja koiran kanssa ulkoilusta. Oma liikkumiseni perustuu nykyään samaan ajatukseen kuin työni: kehoa kuunnellen, palautumista kunnioittaen ja kokonaisuutta tukien.</p>
            <p>Haluan auttaa sinua löytämään tasapainoa, palautumista ja armollisuutta keholle ja mielelle – niin, että jaksaminen vahvistuu ja arjessa suoriutuminen helpottuu. Ja ennen kaikkea, haluan auttaa sinua löytämään elämäniloa.</p>
          </div>

          {/* <div className="pt-10">
            <a 
              href="/contact" 
              className="inline-block pb-1 border-b border-gray-900 text-[11px] tracking-[0.3em] uppercase font-medium hover:opacity-50 transition-opacity"
            >
              Lue koko tarinani
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}