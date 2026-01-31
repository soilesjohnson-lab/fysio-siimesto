import React from 'react';

const offerings = [
  {
    title: "Kokonaisvaltainen Fysioterapia",
    benefit: "Vapaudu kivusta ja jännityksestä,",
    result: "jotta voit liikkua vapaasti ja nauttia aktiivisesta arjesta ilman rajoitteita.",
  },
  {
    title: "Psykofyysinen Lähestymistapa",
    benefit: "Vahvista hermostollista turvaa ja läsnäoloa,",
    result: "jotta voit hallita stressiä paremmin ja löytää pysyvän tasapainon kehon ja mielen välille.",
  },
  {
    title: "Rentouttavat Hoidot",
    benefit: "Anna itsellesi lupa pysähtyä lämmön äärelle,",
    result: "jotta palautumisesi syvenee ja mielesi saa kaipaamansa hiljaisuuden.",
  }
];

export default function Approach() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        {/* Otsikko-osa Mirkan tyyliin */}
        <div className="text-center mb-20 space-y-4">
          <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400 font-light block">
            Fysio Siimestö
          </span>
          <h2 className="text-2xl md:text-4xl font-light text-[#1a1a1a] leading-tight">
            Syvää mielenrauhaa ja <br className="hidden md:block" /> 
            kestävää kehollista voimaa
          </h2>
        </div>

        {/* Nostot */}
        <div className="grid md:grid-cols-3 gap-16 md:gap-12">
          {offerings.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-6">
              <div className="w-px h-12 bg-gray-200"></div> {/* Pystyviiva koristeena */}
              
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

        {/* CTA-nappi */}
        <div className="mt-20 text-center">
          <a 
            href="https://vello.fi/fysiosiimesto" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block px-12 py-5 bg-[#1a1a1a] text-white text-[10px] tracking-[0.4em] uppercase transition-all hover:bg-gray-800"
          >
            Varaa aikasi tästä
            {/* Pieni korostusviiva napin alla */}
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-gray-300 group-hover:w-12 transition-all"></span>
          </a>
        </div>
      </div>
    </section>
  );
}