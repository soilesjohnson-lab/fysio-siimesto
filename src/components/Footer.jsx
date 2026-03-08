export default function Footer() {
  const textStyle = {
    fontFamily: "'Montserrat', sans-serif",
    color: "#b0b0b0",
  };

  const iconStyle = {
    stroke: "#b0b0b0",
    strokeWidth: 1.1,
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  return (
    <footer className="bg-[#3a3a3a] pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-10">

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">

          {/* Vasen: Yhteystiedot */}
          <div className="text-center md:text-left md:w-1/3">
            <p className="text-[11px] font-medium mb-1" style={textStyle}>Fysio Siimestö</p>
            <p className="text-[11px]" style={textStyle}>Teollisuuskatu 11, 80100 Joensuu</p>
            <p className="text-[11px]" style={textStyle}>+358 40 123 4567</p>
            <p className="text-[11px]" style={textStyle}>info@fysiosiimesto.fi</p>
          </div>

          {/* Keskellä: Some-ikonit + copyright */}
          <div className="flex flex-col items-center md:w-1/3">
            <div className="flex space-x-12 mb-8">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="hover:opacity-40 transition-all duration-300"
                {...iconStyle}
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>

              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="hover:opacity-40 transition-all duration-300"
                {...iconStyle}
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>

              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="hover:opacity-40 transition-all duration-300"
                {...iconStyle}
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
            <div className="text-[10px]" style={textStyle}>
              © {new Date().getFullYear()} Fysio Siimestö
            </div>
          </div>

          {/* Oikea kolumni: tietosuojaseloste-linkki */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-2 md:mt-12 items-center">
            <a
              href="/privacy-policy"
              className="text-[11px] hover:underline"
              style={textStyle}
            >
              Tietosuojaseloste
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}