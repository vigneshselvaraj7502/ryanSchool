import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import AnimatedCounter from '../components/AnimatedCounter';

export default function NewsPage() {
  const { openModal } = useModal();

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="newspage-page">
      {/* Banner */}
    <section className="reveal-on-scroll py-12 bg-gradient-to-r from-[#4B1F6F] via-[#6B3A8D] to-[#4B1F6F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#F3D98B]">Official Bulletins</span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">News & Announcements</h1>
                <p className="text-purple-200 text-sm mt-2">Latest admissions alerts, academic circulars, and event notifications.</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-200">
                <Link to="/" className="hover:text-white transition">Home</Link>
                <span>/</span>
                <span className="text-[#D4A72C]">News</span>
            </div>
        </div>
    </section>

    {/* Circulars Grid */}
    <section className="reveal-on-scroll py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Circular 1 */}
                <div className="p-8 rounded-3xl bg-[#FAF8F4] border-l-4 border-[#D4A72C] shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between text-xs font-bold text-gray-500 mb-3">
                            <span className="bg-[#FDF8E7] text-[#D4A72C] px-3 py-1 rounded-full uppercase tracking-wider">Admissions</span>
                            <span>March 15, 2026</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#4B1F6F] mb-3">Enrollment Window for AY 2026-27</h3>
                        <p className="text-xs text-gray-600 leading-relaxed font-medium mb-4">
                            The admissions counter is officially open for all programs from Play Group to Graders. Parents are requested to secure their preferred batch timing early due to limited classroom seating.
                        </p>
                    </div>
                    <div className="pt-4 border-t border-purple-50 flex items-center justify-between">
                        <span className="text-xs font-semibold text-gray-500">Circular #ADM-26-01</span>
                        <Link to="/admissions" className="text-xs font-bold text-[#4B1F6F] hover:text-[#D4A72C]">Apply Online →</Link>
                    </div>
                </div>

                {/* Circular 2 */}
                <div className="p-8 rounded-3xl bg-[#FAF8F4] border-l-4 border-[#4B1F6F] shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between text-xs font-bold text-gray-500 mb-3">
                            <span className="bg-[#F1EAF7] text-[#4B1F6F] px-3 py-1 rounded-full uppercase tracking-wider">Academics</span>
                            <span>April 02, 2026</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#4B1F6F] mb-3">Annual Term End Review & Portfolio Day</h3>
                        <p className="text-xs text-gray-600 leading-relaxed font-medium mb-4">
                            Parents are cordially invited to review their child's holistic developmental portfolio, art journals, and Abacus progress with class teachers. Time slots will be assigned via WhatsApp.
                        </p>
                    </div>
                    <div className="pt-4 border-t border-purple-50 flex items-center justify-between">
                        <span className="text-xs font-semibold text-gray-500">Circular #ACD-26-04</span>
                        <Link to="/contact" className="text-xs font-bold text-[#4B1F6F] hover:text-[#D4A72C]">Schedule Slot →</Link>
                    </div>
                </div>

                {/* Circular 3 */}
                <div className="p-8 rounded-3xl bg-[#FAF8F4] border-l-4 border-[#D4A72C] shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between text-xs font-bold text-gray-500 mb-3">
                            <span className="bg-[#FDF8E7] text-[#D4A72C] px-3 py-1 rounded-full uppercase tracking-wider">Summer Camp</span>
                            <span>April 20, 2026</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#4B1F6F] mb-3">Ryans Super-Kids Summer Fest 2026</h3>
                        <p className="text-xs text-gray-600 leading-relaxed font-medium mb-4">
                            A 4-week non-stop vacation camp featuring robotics logic, western dance, public speaking theatre, clay sculpture, and athletic games. Open to Ryans students and siblings.
                        </p>
                    </div>
                    <div className="pt-4 border-t border-purple-50 flex items-center justify-between">
                        <span className="text-xs font-semibold text-gray-500">Circular #ACT-26-02</span>
                        <button className=" text-xs font-bold text-[#4B1F6F] hover:text-[#D4A72C]" onClick={() => openModal("Play Group", "enquiry")}>Register Child →</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Footer */}
    </div>
  );
}
