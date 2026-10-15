import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import AnimatedCounter from '../components/AnimatedCounter';

export default function PrincipalPage() {
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
    }, { threshold: 0.01, rootMargin: '100px 0px 100px 0px' });

    reveals.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="principalpage-page">
      {/* Banner */}
    <section className="reveal-on-scroll py-12 bg-gradient-to-r from-[#4B1F6F] via-[#6B3A8D] to-[#4B1F6F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#F3D98B]">Leadership Address</span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">Principal's Message</h1>
                <p className="text-purple-200 text-sm mt-2">A message from Mrs. Lynda Jennifer, Principal & Correspondent.</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-200">
                <Link to="/" className="hover:text-white transition">Home</Link>
                <span>/</span>
                <span className="text-[#D4A72C]">Principal's Desk</span>
            </div>
        </div>
    </section>

    {/* Detailed Principal Address */}
    <section className="reveal-on-scroll py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#FAF8F4] rounded-3xl p-8 sm:p-14 border border-purple-100 shadow-lg">
                <div className="flex flex-col items-center text-center mb-10">
                    <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-[#D4A72C] shadow-xl mb-6 bg-purple-50 hero-img-glow animate-float-gentle">
                        <img src="/assets/founder_cutout.png" alt="Mrs. Lynda Jennifer, Principal" className="w-full h-full object-cover object-top" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4B1F6F]">Mrs. Lynda Jennifer</h2>
                    <p className="text-xs sm:text-sm font-bold text-[#D4A72C] tracking-widest uppercase mt-1">Principal & Correspondent, Ryans Academy</p>
                    <div className="w-24 h-1 bg-[#D4A72C] rounded-full mt-4"></div>
                </div>

                <div className="prose max-w-none text-gray-700 text-sm sm:text-base leading-relaxed space-y-6 font-medium">
                    <p className="text-lg sm:text-xl font-bold text-[#4B1F6F] italic">
                        "Welcome to Ryans Academy, an educational home built with profound love, purpose, and the unwavering conviction that every child is born with genius."
                    </p>
                    <p>
                        When parents place their most precious treasure in our care, they are trusting us with their hopes and dreams. At Ryans Academy, we honor this sacred trust every single day. We understand that true education goes far beyond standard rote textbooks. It is the art of kindling imagination, cultivating integrity, and providing children with the emotional wings to soar.
                    </p>
                    <p>
                        Our design philosophy—<strong>PREMIUM LEARNING. JOYFUL CHILDHOOD.</strong>—is woven into every corner of our institution. We embrace the structured clarity of the CBSE curriculum while infusing the self-directed sensory wonders of the Montessori method. We provide high-tech computer education, mental math through Abacus, creative fine arts, and vibrant athletic programs like Velocity Fest and RYANOVA.
                    </p>
                    <p>
                        Most importantly, we ensure that no child feels lost in a crowd. Every child has a unique spark—whether in analytical science, expressive speech, performing arts, or outdoor sportsmanship. Our teachers are chosen not only for their academic qualifications, but for their deep patience, emotional intelligence, and genuine empathy.
                    </p>
                    <p>
                        I invite you to visit our campus, feel the warm rhythm of our classrooms, meet our dedicated mentors, and experience the Ryans Academy difference for yourself.
                    </p>
                    <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-purple-200">
                        <div>
                            <p className="font-serif italic font-bold text-lg text-[#4B1F6F]">Lynda Jennifer</p>
                            <p className="text-xs text-gray-500 font-bold uppercase">Principal & Correspondent</p>
                        </div>
                        <div className="flex gap-3">
                            <button className=" btn-gold text-xs py-2.5 px-5" onClick={() => openModal("Play Group", "visit")}>Book Principal Interaction</button>
                            <Link to="/contact" className="btn-outline-purple text-xs py-2.5 px-5">Contact Office</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Footer */}
    </div>
  );
}
