import Hero from '../components/Hero';
import Approach from '../components/Approach';
import About from '../components/About';

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <Approach />
      <About />
    </div>
  );
}