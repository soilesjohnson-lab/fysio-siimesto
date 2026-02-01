import Hero from '../components/Hero';
import Approach from '../components/Approach';
import About from '../components/About';

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <Approach />
      <About />

      {/* Pieni "quote" tai välilause ennen footeria */}
      <section className="py-24 bg-[#f9f8f6] text-center px-6">
        <p className="text-lg md:text-xl italic font-light text-gray-500 max-w-2xl mx-auto leading-relaxed">
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat."
        </p>
      </section>
    </div>
  );
}