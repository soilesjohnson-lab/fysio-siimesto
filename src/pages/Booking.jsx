export default function Booking() {

  // Tyylivakio otsikolle
  const titleStyle = {
    fontFamily: "'Montserrat', sans-serif",
    letterSpacing: '0.3em',
    color: '#1a1a1a'
  };

  /* Scrollaa sivun alkuun kun sivulle kirjaudutaan */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
        /* Tausta pidetään raikkaana ja ilmavana */
    <div className="bg-white min-h-screen py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Otsikko: minimalistinen ja ilmava */}
        <div className="mb-20 text-center">
          <h1 className="text-2xl md:text-3xl uppercase font-light" style={titleStyle}>
            Varaa aika
          </h1>
          <div className="mt-4 h-[1px] w-12 bg-gray-200 mx-auto"></div>
        </div>

        <div className="w-full h-screen">
          <iframe
            src="https://varaa.timma.fi/testi123?embed=true"
            title="Timma ajanvaraus"
            className="w-full h-full border-none"
            allow="payment"
            loading="lazy"
          />
        </div>

      </div>
    </div>
  );
}
