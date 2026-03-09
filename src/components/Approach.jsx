import { NavLink } from 'react-router-dom';
import { offerings } from "../components/data/Offerings";

export default function Approach() {

  const links = [
    { to: '/services', label: 'Palvelut' }
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">

        {/* Otsikko */}
        <div className="text-center mb-20 space-y-4">
          {/* <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400 font-light block"> Fysio Siimestö </span> */}
          <h2 className="text-2xl md:text-4xl font-light text-[#1a1a1a] leading-tight"> Kehon voimaa, palautumista ja <br className="hidden md:block" /> tasapainoa. </h2>
        </div>

        {/* Nostot */}
        <div className="grid md:grid-cols-3 gap-16 md:gap-12">
          {offerings.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-6">
              <div className="w-px h-12 bg-gray-200"></div> {/* Pystyviiva */}
              
              <h3 className="text-[11px] tracking-[0.3em] uppercase font-semibold text-[#1a1a1a]"> {item.title} </h3>
              
              <div className="space-y-2">
                <p className="text-gray-900 font-medium leading-relaxed"> {item.benefit} </p>
                <p className="text-gray-500 text-sm leading-relaxed font-light tracking-wide italic"> {item.result} </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA-nappi */}
        <div className="mt-20 text-center">
          <NavLink to="/services" className="group relative inline-block px-12 py-5 bg-[#1a1a1a] text-white text-[10px] tracking-[0.4em] uppercase transition-all hover:bg-gray-800"> Tutustu palveluihin <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-gray-300 group-hover:w-12 transition-all"></span></NavLink>
        </div>
      </div>
    </section>
  );
}