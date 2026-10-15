import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { openModal } = useModal();
  const location = useLocation();

  // Close mobile drawer on route navigation
  useEffect(() => {
    setIsDrawerOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Programs', path: '/programs' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Activities', path: '/activities' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#4B1F6F] text-white text-xs py-2 px-4 sm:px-8 border-b border-purple-900/30 overflow-hidden w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center flex-wrap gap-4 text-[13px] min-w-0">
            <span className="flex items-center gap-1.5 text-purple-200">
              <i className="fa-solid fa-graduation-cap text-[#D4A72C]"></i>
              <strong className="text-white">Admissions Open 2026-27:</strong> Play Group to Graders
            </span>
            <span className="hidden sm:inline text-purple-400">|</span>
            <span className="hidden sm:flex items-center gap-1.5 text-purple-200">
              <i className="fa-solid fa-location-dot text-[#D4A72C]"></i>
              Madhavaram, Chennai
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-[12px] flex-wrap justify-center flex-shrink-0">
            <a href="tel:+919840012345" className="text-purple-200 hover:text-white transition flex items-center gap-1">
              <i className="fa-solid fa-phone text-[#D4A72C]"></i> +91 98400 12345
            </a>
            <span className="text-purple-400 hidden xs:inline">|</span>
            <a href="mailto:admissions@ryansacademy.in" className="text-purple-200 hover:text-white transition hidden xs:flex items-center gap-1">
              <i className="fa-solid fa-envelope text-[#D4A72C]"></i> admissions@ryansacademy.in
            </a>
          </div>
        </div>
      </div>

      {/* Main Frosted Navigation Island Header */}
      <header id="navbar" className="sticky top-0 z-40 transition-all duration-300 w-full overflow-hidden sm:overflow-visible">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2 lg:gap-3">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0 group">
            <img
              src="/assets/logo.png"
              alt="Ryans Academy Logo"
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain transition-transform group-hover:scale-105 flex-shrink-0"
            />
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-base sm:text-lg lg:text-xl text-[#4B1F6F] tracking-tight leading-tight whitespace-nowrap">
                RYANS ACADEMY
              </span>
              <span className="hidden xl:block text-[10px] uppercase font-bold tracking-widest text-[#D4A72C] whitespace-nowrap">
                CBSE • Montessori • Experiential
              </span>
            </div>
          </Link>

          {/* Desktop Frosted Capsule Navigation Island */}
          <nav className="hidden lg:flex items-center flex-shrink min-w-0">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? 'nav-active'
                    : ''
                }
              >
                <span>{link.name}</span>
              </NavLink>
            ))}
          </nav>

          {/* Right Action Button & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <button
              onClick={() => openModal('Play Group', 'enquiry')}
              className="hidden sm:inline-flex btn-gold text-xs py-2.5 px-3.5 sm:px-4 lg:px-5 flex-shrink-0 whitespace-nowrap shadow-md shadow-amber-500/20"
            >
              <span>Enquire Now</span>
              <i className="fa-solid fa-paper-plane text-xs"></i>
            </button>

            {/* Mobile Menu Button (strictly hidden on desktop) */}
            <button
              id="mobile-menu-btn"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="lg:hidden p-2 rounded-xl text-[#4B1F6F] hover:bg-purple-50 transition flex-shrink-0"
              aria-label="Toggle Menu"
            >
              <i className="fa-solid fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col p-6 ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center pb-4 border-b border-purple-100">
          <span className="font-heading font-extrabold text-base text-[#4B1F6F]">RYANS ACADEMY</span>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="text-gray-500 hover:text-[#4B1F6F] p-2 rounded-full"
            aria-label="Close Menu"
          >
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>

        <nav className="flex flex-col gap-2.5 py-6 font-semibold text-gray-700 text-sm overflow-y-auto">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `py-2 px-3 rounded-xl transition ${
                  isActive
                    ? 'bg-[#4B1F6F] text-white font-bold'
                    : 'hover:bg-purple-50 hover:text-[#4B1F6F]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto pt-4 border-t border-purple-100 space-y-2">
          <button
            onClick={() => {
              setIsDrawerOpen(false);
              openModal('Play Group', 'enquiry');
            }}
            className="btn-gold w-full py-3 text-sm justify-center shadow-md shadow-amber-500/20"
          >
            Enquire Now
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}
    </>
  );
}
