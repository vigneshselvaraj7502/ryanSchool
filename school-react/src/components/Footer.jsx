import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#29252B] text-gray-300 pt-16 pb-24 sm:pb-12 border-t border-gray-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          {/* Col 1: School Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/logo.png"
                alt="Ryans Academy Logo"
                className="h-12 w-auto object-contain bg-white rounded-xl p-1"
              />
              <div>
                <span className="font-heading font-extrabold text-lg text-white block">RYANS ACADEMY</span>
                <span className="text-[10px] text-[#D4A72C] font-semibold tracking-wider uppercase block">
                  Excellence in Early Education
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed font-normal">
              Nurturing confident, creative, and curious learners through CBSE rigor, Montessori independence, and experiential discovery.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D4A72C] hover:text-[#4B1F6F] flex items-center justify-center text-sm transition-all" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D4A72C] hover:text-[#4B1F6F] flex items-center justify-center text-sm transition-all" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D4A72C] hover:text-[#4B1F6F] flex items-center justify-center text-sm transition-all" aria-label="YouTube">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4 border-l-2 border-[#D4A72C] pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="hover:text-[#D4A72C] transition">About Ryans Academy</Link></li>
              <li><Link to="/academics" className="hover:text-[#D4A72C] transition">Academics & Pedagogy</Link></li>
              <li><Link to="/programs" className="hover:text-[#D4A72C] transition">Programs (Play Group to Graders)</Link></li>
              <li><Link to="/facilities" className="hover:text-[#D4A72C] transition">Campus Facilities</Link></li>
              <li><Link to="/gallery" className="hover:text-[#D4A72C] transition">Photo Gallery & Events</Link></li>
              <li><Link to="/admissions" className="hover:text-[#D4A72C] transition">Admissions 2026-27</Link></li>
            </ul>
          </div>

          {/* Col 3: Programs & Stages */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4 border-l-2 border-[#D4A72C] pl-2.5">
              Our Programs
            </h4>
            <ul className="space-y-2.5">
              <li><Link to="/programs#playgroup" className="hover:text-[#D4A72C] transition">Play Group (1.5 – 2.5 Yrs)</Link></li>
              <li><Link to="/programs#prekg" className="hover:text-[#D4A72C] transition">Pre-KG (2.5 – 3.5 Yrs)</Link></li>
              <li><Link to="/programs#lkg" className="hover:text-[#D4A72C] transition">Junior KG / LKG (3.5 – 4.5 Yrs)</Link></li>
              <li><Link to="/programs#ukg" className="hover:text-[#D4A72C] transition">Senior KG / UKG (4.5 – 5.5 Yrs)</Link></li>
              <li><Link to="/programs#graders" className="hover:text-[#D4A72C] transition">Graders (Primary CBSE)</Link></li>
              <li><Link to="/daycare" className="hover:text-[#D4A72C] transition">Daycare & Extended Support</Link></li>
            </ul>
          </div>

          {/* Col 4: Campus Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4 border-l-2 border-[#D4A72C] pl-2.5">
              Campus Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <i className="fa-solid fa-location-dot text-[#D4A72C] mt-1"></i>
                <span>No. 12, School Road, Madhavaram, Chennai - 600060, Tamil Nadu</span>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="fa-solid fa-phone text-[#D4A72C]"></i>
                <a href="tel:+919840012345" className="hover:text-white transition">+91 98400 12345</a>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="fa-solid fa-envelope text-[#D4A72C]"></i>
                <a href="mailto:admissions@ryansacademy.in" className="hover:text-white transition">admissions@ryansacademy.in</a>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="fa-solid fa-clock text-[#D4A72C]"></i>
                <span>Mon – Sat: 8:30 AM – 5:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & YAALE TECHNOLOGIES Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-gray-400">
            &copy; {currentYear} Ryans Academy. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-[11px] font-medium">Developed by</span>
            <a
              href="https://yaaletech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/95 hover:bg-white px-3 py-1.5 rounded-xl shadow-sm hover:shadow-md transition-all group"
              title="Yaale Technologies"
            >
              <img
                src="/assets/yaale_logo.png"
                alt="Yaale Technologies Logo"
                className="h-5 w-auto object-contain group-hover:scale-105 transition-transform"
              />
              <span className="text-[11px] font-extrabold tracking-tight text-[#006766] group-hover:text-[#004d4c] uppercase">
                YAALE TECHNOLOGIES
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
