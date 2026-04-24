import { useState } from "react";
import { PortableText } from "@portabletext/react";
import { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "../sanityClient";

const builder = createImageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function About({ data }) {
  const [expanded, setExpanded] = useState(false);

  if (!data) return null;

  return (
    <section className="grid grid-cols-1 w-full bg-[#f9f8f6]">
      
      {/* Henkilökuva */}
      <div className="row-start-1 col-start-1 h-[500px] md:h-[650px] w-full overflow-hidden relative">
        <img
          src={
            urlFor(data.aboutImage)
            .width(1600)
            .quality(100)
            .fit("max")
            .url()
          }
          alt="Fysioterapeuttin Soile Siimestö-Johnson"
          className="absolute top-0 left-0 h-full w-full object-cover origin-left scale-110"
        />
      </div>

      {/* Sisältö */}
      <div className="row-start-1 col-start-1 flex flex-col items-center pt-[350px] md:pt-[450px] px-6 pb-24">
        <div className="w-full max-w-3xl bg-white p-10 md:p-20 shadow-xl text-center z-10">

          {/* Otsikko */}
          <h2 className="title-style">
            {/* {data.aboutTitle} */}
            {data.aboutTitle || "Kokonaisvaltaista fysioterapiaa Joensuussa"}
          </h2>

          {/* Teksti */}
          <div className="relative">
            <div
              className={`space-y-6 text-sm md:text-base font-light tracking-wide text-gray-600 leading-relaxed text-left md:text-center transition-all duration-500 ${
                expanded ? "max-h-[2000px]" : "max-h-[300px] overflow-hidden"
              }`}
            >
              <PortableText value={data.aboutContent} />
            </div>

            {!expanded && (
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
            )}
          </div>

          {/* Painike */}
          <div className="pt-10">
            <button
              onClick={() => setExpanded(!expanded)}
              className="cursor-pointer inline-block pb-1 border-b border-gray-900 text-[11px] tracking-[0.3em] uppercase font-medium hover:opacity-50 transition-opacity"
            >
              {expanded ? "Sulje" : "Lue koko tarinani"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}