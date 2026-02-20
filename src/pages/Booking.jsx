import scrollToTop from "../hooks/scrollToTop";

export default function Booking() {

  scrollToTop();

  return (
    <div className="bg-white min-h-screen py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Otsikko */}
        <div className="mb-20 text-center">
          <h1 className="section-title"> Varaa aika </h1>
          <div className="mt-4 h-[1px] w-12 bg-gray-200 mx-auto"></div>
        </div>

        {/* Iframe */}
        <div className="w-full h-screen">
          <iframe src="https://varaa.timma.fi/testi123?embed=true" title="Timma ajanvaraus" className="w-full h-full border-none" allow="payment" loading="lazy"/>
        </div>
      </div>
    </div>
  );
}
