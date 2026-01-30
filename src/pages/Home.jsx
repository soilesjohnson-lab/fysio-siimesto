import Hero from '../components/Hero';

export default function Home() {
  const titleStyle = {
    fontFamily: "'Montserrat', sans-serif",
    letterSpacing: '0.3em',
    color: '#1a1a1a'
  };

  const textStyle = {
    fontFamily: "'Montserrat', sans-serif",
    color: '#4a4a4a',
    lineHeight: '1.8'
  };

  return (
    <div className="bg-white min-h-screen">
      <Hero />

      {/* Esittelyosio */}
      <section className="py-32 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          
          {/* Kuvaosio */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-sm">
              <img 
                src="/soile.jpg" 
                alt="Yrittäjän nimi" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Tekstiosio */}
          <div className="space-y-8">
            <span className="block text-[10px] tracking-[0.4em] uppercase text-gray-400 font-light">
              Fysioterapeutti & Omistaja
            </span>
            
            <h2 className="text-2xl md:text-3xl uppercase font-light" style={titleStyle}>
              Lämmin kohtaaminen, <br />
              yksilöllinen hoito
            </h2>

            <div className="space-y-6 text-sm md:text-base font-light tracking-wide" style={textStyle}>
              <p>
                Olen [Nimesi], Fysio Siimestön perustaja. Intohimonani on auttaa ihmisiä löytämään tasapaino kehon ja mielen välillä. 
                Uskon, että jokainen kipu ja jännitys on viesti, jota meidän on opittava kuuntelemaan.
              </p>
              <p>
                Psykofyysisen lähestymistavan kautta pureudumme pintaa syvemmälle, 
                yhdistäen perinteisen fysioterapian asiantuntemuksen ja lempeän läsnäolon.
              </p>
            </div>

            <div className="pt-6">
              <a 
                href="/contact" 
                className="inline-block pb-1 border-b border-gray-900 text-[11px] tracking-[0.3em] uppercase font-medium hover:opacity-50 transition-opacity"
              >
                Lue lisää minusta
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pieni "quote" tai välilause ennen footeria */}
      <section className="py-24 bg-[#f9f8f6] text-center px-6">
        <p className="text-lg md:text-xl italic font-light text-gray-500 max-w-2xl mx-auto leading-relaxed">
          "Hyvinvointi ei ole vain kivun puutetta, vaan kykyä elää vapaasti ja nauttia jokaisesta liikkeestä."
        </p>
      </section>
    </div>
  );
}