import { contactInfo } from "../data/contactInfo.js"
import { socialLinks } from "../data/socialLinks.js"

export default function Footer() {
  return (
    <footer className="bg-[#3a3a3a] pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">

          {/* Yhteystiedot */}
          <div className="text-center md:text-left md:w-1/3">
            {contactInfo.map((info, index) => (
              <p key={index} className={`text-[11px] ${info.isBold ? "font-medium mb-2 footer-text-style" : "footer-text-style"}`}>
                {info.label}
              </p>
            ))}
          </div>

          {/* Linkit ja copyright */}
          <div className="flex flex-col items-center md:w-1/3">
            <div className="flex space-x-12 mb-8">
              {socialLinks.map(({ href, Icon }, index) => (
                <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="hover:opacity-40 transition-all duration-300">
                  <Icon />
                </a>
              ))}
            </div>
            <div className="text-[10px] footer-text-style">
              © {new Date().getFullYear()} Fysio Siimestö
            </div>
          </div>

          {/* Tietosuojaseloste */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-2 md:mt-6 items-center">
            <a
              href="/privacy-policy"
              className="text-[11px] hover:underline footer-text-style"
            >
              Tietosuojaseloste
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}