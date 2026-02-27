import Hero from '../components/Hero';
import Approach from '../components/Approach';
import About from '../components/About';
import scrollToTop from "../hooks/scrollToTop";

export default function Home() {

  scrollToTop();
  
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <Approach />
      <About />
    </div>
  );
}