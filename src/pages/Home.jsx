import Hero from '../components/Hero';
import Approach from '../components/Approach';
import About from '../components/About';
import { useEffect, useState } from "react";
import { client } from "../sanityClient";
import SEO from '../components/SEO';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    client.fetch(`*[_type == "home"][0]{
      title,
      subtitle,
      image,
      approachTitleLine1,
      approachTitleLine2,
      servicesList,
      aboutTitle,
      aboutContent,
      aboutImage
    }`).then((res) => {
      console.log("SANITY DATA:", res);
      setData(res);
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen bg-white animate-pulse">
        <div className="h-screen bg-gray-100" />
      </div>
    );
  }

  return (
    <>
      <SEO 
          title="Etusivu" 
          description="Asiantuntevaa fysioterapiaa, hierontaa ja kuntoutusta Lieksassa. Tervetuloa Fysiosii-mesto-vastaanotolle." 
          path="/" 
        />

      <div className="bg-white min-h-screen">
        <Hero data={data} />
        <Approach data={data} />
        <About data={data} />
      </div>
    </>
  );
}