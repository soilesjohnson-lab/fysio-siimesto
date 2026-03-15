import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../data/NavLinks.js';
import NavItem from './NavItem.jsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <nav className="font-[Montserrat] bg-white border-b border-gray-50 sticky top-0 z-50 shadow-[0_11px_16px_-4px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex items-center justify-between h-26">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img src="/logo.png" alt="Fysio Siimestö" className="h-10 w-auto" />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <NavItem key={link.to} {...link} />
            ))}
          </div>

          {/* Burger menu */}
          <button onClick={toggleMenu} className="md:hidden text-gray-500 focus:outline-none">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              {isOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-50 px-10 py-10 animate-fadeIn">
          <div className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <NavItem key={link.to} {...link} mobile onClick={() => setIsOpen(false)} />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
