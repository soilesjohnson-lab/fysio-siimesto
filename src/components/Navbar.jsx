import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { to: '/', label: 'Etusivu', end: true },
    { to: '/services', label: 'Palvelut' },
    { to: '/booking', label: 'Ajanvaraus' },
    { to: '/contact', label: 'Ota yhteyttä' }
  ];

  const textStyle = {
    fontFamily: "'Montserrat', sans-serif",
    color: "#777777",
  };

  return (
    /* Tausta */
    <nav className="bg-white border-b border-gray-50 sticky top-0 z-50 shadow-[0_11px_16px_-4px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex items-center justify-between h-26">

          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Fysio Siimestö"
                className="h-10 w-auto"
              />
            </NavLink>
          </div>

          {/* Linkit */}
          <div className="hidden md:flex items-center space-x-12">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `text-[11px] uppercase tracking-[0.25em] font-medium transition-all duration-300 relative group ${
                    isActive ? 'text-gray-950' : 'text-gray-400 hover:text-gray-600'
                  }`
                }
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {link.label}
                {/* Alleviivaus-hover */}
                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-800 transition-all duration-300 group-hover:w-full`}></span>
              </NavLink>
            ))}
          </div>

          {/* Burger menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-500 focus:outline-none"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                {isOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobiili menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-50 px-10 py-10 animate-fadeIn">
          <div className="flex flex-col space-y-8">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-[0.3em] font-light transition-all ${
                    isActive ? 'text-gray-900' : 'text-gray-400'
                  }`
                }
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}