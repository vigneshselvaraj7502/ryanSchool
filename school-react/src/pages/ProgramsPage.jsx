import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import AnimatedCounter from '../components/AnimatedCounter';

export default function ProgramsPage() {
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
    <div className="programspage-page">
      {/* Banner */}
    <section className="reveal-on-scroll py-12 bg-gradient-to-r from-[#4B1F6F] via-[#6B3A8D] to-[#4B1F6F] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
            <div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 mb-2">
                    <img src="/assets/book1.gif" alt="Animated Book" className="w-4 h-4 object-contain" />
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#F3D98B]">Structured Learning Pathways</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">Our Academic Programs</h1>
                <p className="text-purple-200 text-sm mt-2">Comprehensive curriculum from Play Group to Graders CBSE.</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-200">
                <Link to="/" className="hover:text-white transition">Home</Link>
                <span>/</span>
                <span className="text-[#D4A72C]">Programs</span>
            </div>
        </div>
    </section>

    {/* Interactive Program Pathway Navigator */}
    <section className="bg-white/95 backdrop-blur-md border-b border-purple-100/80 sticky top-[68px] z-30 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-1">
                <a href="#playgroup" className="program-nav-pill">
                    <span className="program-nav-step">1</span>
                    <span className="program-nav-title">Play Group</span>
                    <span className="program-nav-age">1.5 - 2.5 Yrs</span>
                </a>
                <div className="hidden sm:block text-purple-300 text-xs"><i className="fa-solid fa-arrow-right"></i></div>
                <a href="#prekg" className="program-nav-pill">
                    <span className="program-nav-step">2</span>
                    <span className="program-nav-title">Pre-KG</span>
                    <span className="program-nav-age">2.5 - 3.5 Yrs</span>
                </a>
                <div className="hidden sm:block text-purple-300 text-xs"><i className="fa-solid fa-arrow-right"></i></div>
                <a href="#lkg" className="program-nav-pill">
                    <span className="program-nav-step">3</span>
                    <span className="program-nav-title">LKG</span>
                    <span className="program-nav-age">3.5 - 4.5 Yrs</span>
                </a>
                <div className="hidden sm:block text-purple-300 text-xs"><i className="fa-solid fa-arrow-right"></i></div>
                <a href="#ukg" className="program-nav-pill">
                    <span className="program-nav-step">4</span>
                    <span className="program-nav-title">UKG</span>
                    <span className="program-nav-age">4.5 - 5.5 Yrs</span>
                </a>
                <div className="hidden sm:block text-purple-300 text-xs"><i className="fa-solid fa-arrow-right"></i></div>
                <a href="#graders" className="program-nav-pill">
                    <span className="program-nav-step">5</span>
                    <span className="program-nav-title">Graders</span>
                    <span className="program-nav-age">Primary CBSE</span>
                </a>
            </div>
        </div>
    </section>

    {/* Program 1: Play Group */}
    <section className="reveal-on-scroll py-16 bg-white border-b border-purple-50 scroll-mt-24" id="playgroup">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 order-2 lg:order-1 space-y-5">
                    <div className="inline-flex items-center gap-2">
                        <span className="purple-badge pulse-badge"><i className="fa-solid fa-baby mr-1.5 text-[#D4A72C]"></i> Age: 1.5 – 2.5 Years</span>
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#4B1F6F] bg-[#F1EAF7] px-2.5 py-1 rounded-full border border-purple-200/50">Stage 01 • Foundation</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B1F6F] leading-tight">Play Group Program</h2>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                        The Play Group program at Ryans Academy marks a gentle, joyful bridge between home and the broader world. In a bright, cushioned space, toddlers discover sensory textures, rhythm, gross motor balance, and gentle socialization under the loving care of trained early childhood facilitators.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <div className="program-milestone-pill">
                            <i className="fa-solid fa-circle-check"></i>
                            <span>Sensory Texture Play</span>
                        </div>
                        <div className="program-milestone-pill">
                            <i className="fa-solid fa-circle-check"></i>
                            <span>Rhymes & Story Circles</span>
                        </div>
                        <div className="program-milestone-pill">
                            <i className="fa-solid fa-circle-check"></i>
                            <span>Fine Motor Sorting</span>
                        </div>
                        <div className="program-milestone-pill">
                            <i className="fa-solid fa-circle-check"></i>
                            <span>1:6 Facilitator Ratio</span>
                        </div>
                    </div>
                    <div className="pt-4 flex flex-wrap gap-4 items-center">
                        <button className=" btn-gold text-xs inline-flex items-center gap-2" onClick={() => openModal("Play Group", "enquiry")}>
                            <span>Enquire for Play Group</span>
                            <i className="fa-solid fa-arrow-right text-[11px]"></i>
                        </button>
                        <button className=" btn-outline-purple text-xs" onClick={() => openModal("Play Group", "visit")}>
                            <i className="fa-solid fa-calendar-check text-[11px]"></i>
                            <span>Visit Classroom</span>
                        </button>
                    </div>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                    <div className="program-photo-frame program-float-1 h-[360px] sm:h-[400px]">
                        <img src="/assets/playgroup.jpg" alt="Play Group at Ryans Academy" />
                        <div className="program-floating-tag">
                            <i className="fa-solid fa-shapes text-[#F3D98B]"></i>
                            <span>Sensory & Motor Discovery</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Program 2: Pre-KG */}
    <section className="reveal-on-scroll py-16 bg-[#FAF8F4] border-b border-purple-50 scroll-mt-24" id="prekg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6">
                    <div className="program-photo-frame program-float-2 h-[360px] sm:h-[400px]">
                        <img src="/assets/nursery.jpg" alt="Pre-KG at Ryans Academy" />
                        <div className="program-floating-tag">
                            <i className="fa-solid fa-palette text-[#F3D98B]"></i>
                            <span>Montessori Pre-Literacy</span>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-6 space-y-5">
                    <div className="inline-flex items-center gap-2">
                        <span className="gold-badge pulse-badge"><i className="fa-solid fa-child-reaching mr-1.5 text-[#4B1F6F]"></i> Age: 2.5 – 3.5 Years</span>
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#D4A72C] bg-[#FDF8E7] px-2.5 py-1 rounded-full border border-amber-200/50">Stage 02 • Readiness</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B1F6F] leading-tight">Pre-KG Program</h2>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                        Pre-KG builds expressive language, associative understanding, and self-confidence. Children engage with Montessori materials to understand dimensions, colors, sounds, and social routines while developing early pre-literacy readiness.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <div className="program-milestone-pill">
                            <i className="fa-solid fa-circle-check"></i>
                            <span>Phonetic Sound Association</span>
                        </div>
                        <div className="program-milestone-pill">
                            <i className="fa-solid fa-circle-check"></i>
                            <span>Montessori Cylinders & Rods</span>
                        </div>
                        <div className="program-milestone-pill">
                            <i className="fa-solid fa-circle-check"></i>
                            <span>Creative Color Wheel Art</span>
                        </div>
                        <div className="program-milestone-pill">
                            <i className="fa-solid fa-circle-check"></i>
                            <span>Daily Circle-Time Sharing</span>
                        </div>
                    </div>
                    <div className="pt-4 flex flex-wrap gap-4 items-center">
                        <button className=" btn-gold text-xs inline-flex items-center gap-2" onClick={() => openModal("Pre-KG", "enquiry")}>
                            <span>Enquire for Pre-KG</span>
                            <i className="fa-solid fa-arrow-right text-[11px]"></i>
                        </button>
                        <button className=" btn-outline-purple text-xs" onClick={() => openModal("Pre-KG", "visit")}>
                            <i className="fa-solid fa-calendar-check text-[11px]"></i>
                            <span>Visit Classroom</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Program 3: LKG */}
    <section className="reveal-on-scroll py-16 bg-white border-b border-purple-50 scroll-mt-24" id="lkg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 order-2 lg:order-1 space-y-5">
                    <div className="inline-flex items-center gap-2">
                        <span className="purple-badge pulse-badge"><i className="fa-solid fa-shapes mr-1.5 text-[#D4A72C]"></i> Age: 3.5 – 4.5 Years</span>
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#4B1F6F] bg-[#F1EAF7] px-2.5 py-1 rounded-full border border-purple-200/50">Stage 03 • Discovery</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B1F6F] leading-tight">Junior Kindergarten (LKG)</h2>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                        In LKG, children transition into structured pre-writing patterns, letter-sound blends, mathematical counting logic, and environmental exploration. The focus is on independent confidence and cognitive curiosity.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <div className="program-milestone-pill">
                            <i className="fa-solid fa-circle-check"></i>
                            <span>Jolly Phonics Letter Blends</span>
                        </div>
                        <div className="program-milestone-pill">
                            <i className="fa-solid fa-circle-check"></i>
                            <span>Math Number Quantities</span>
                        </div>
                        <div className="program-milestone-pill">
                            <i className="fa-solid fa-circle-check"></i>
                            <span>Science Nature Modules</span>
                        </div>
                        <div className="program-milestone-pill">
                            <i className="fa-solid fa-circle-check"></i>
                            <span>Recitation & Show-and-Tell</span>
                        </div>
                    </div>
                    <div className="pt-4 flex flex-wrap gap-4 items-center">
                        <button className=" btn-gold text-xs inline-flex items-center gap-2" onClick={() => openModal("LKG", "enquiry")}>
                            <span>Enquire for LKG</span>
                            <i className="fa-solid fa-arrow-right text-[11px]"></i>
                        </button>
                        <button className=" btn-outline-purple text-xs" onClick={() => openModal("LKG", "visit")}>
                            <i className="fa-solid fa-calendar-check text-[11px]"></i>
                            <span>Visit Classroom</span>
                        </button>
                    </div>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                    <div className="program-photo-frame program-float-1 h-[360px] sm:h-[400px]">
                        <img src="/assets/juniorkg.jpg" alt="LKG at Ryans Academy" />
                        <div className="program-floating-tag">
                            <i className="fa-solid fa-spell-check text-[#F3D98B]"></i>
                            <span>Jolly Phonics & Numbers</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Program 4: UKG */}
    <section className="reveal-on-scroll py-16 bg-[#FAF8F4] border-b border-purple-50 scroll-mt-24" id="ukg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6">
                    <div className="program-photo-frame program-float-2 h-[360px] sm:h-[400px]">
                        <img src="/assets/seniorkg.jpg" alt="UKG at Ryans Academy" />
                        <div className="program-floating-tag">
                            <i className="fa-solid fa-book-open-reader text-[#F3D98B]"></i>
                            <span>Primary CBSE Readiness</span>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-6 space-y-5">
                    <div className="inline-flex items-center gap-2">
                        <span className="gold-badge pulse-badge"><i className="fa-solid fa-book-open mr-1.5 text-[#4B1F6F]"></i> Age: 4.5 – 5.5 Years</span>
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#D4A72C] bg-[#FDF8E7] px-2.5 py-1 rounded-full border border-amber-200/50">Stage 04 • Mastery</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B1F6F] leading-tight">Senior Kindergarten (UKG)</h2>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                        UKG prepares young learners for primary CBSE grade school. Students build fluency in sentence reading, creative story writing, mental addition/subtraction, beginner Hindi/Tamil languages, and logical deduction.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <div className="program-milestone-pill">
                            <i className="fa-solid fa-circle-check"></i>
                            <span>Fluent Early Reader Books</span>
                        </div>
                        <div className="program-milestone-pill">
                            <i className="fa-solid fa-circle-check"></i>
                            <span>Mathematical Word Logic</span>
                        </div>
                        <div className="program-milestone-pill">
                            <i className="fa-solid fa-circle-check"></i>
                            <span>Environmental Studies (EVS)</span>
                        </div>
                        <div className="program-milestone-pill">
                            <i className="fa-solid fa-circle-check"></i>
                            <span>Primary Readiness Habits</span>
                        </div>
                    </div>
                    <div className="pt-4 flex flex-wrap gap-4 items-center">
                        <button className=" btn-gold text-xs inline-flex items-center gap-2" onClick={() => openModal("UKG", "enquiry")}>
                            <span>Enquire for UKG</span>
                            <i className="fa-solid fa-arrow-right text-[11px]"></i>
                        </button>
                        <button className=" btn-outline-purple text-xs" onClick={() => openModal("UKG", "visit")}>
                            <i className="fa-solid fa-calendar-check text-[11px]"></i>
                            <span>Visit Classroom</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Program 5: Graders */}
    <section className="reveal-on-scroll py-16 bg-white scroll-mt-24" id="graders">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 order-2 lg:order-1 space-y-5">
                    <div className="inline-flex items-center gap-2">
                        <span className="purple-badge pulse-badge"><i className="fa-solid fa-graduation-cap mr-1.5 text-[#D4A72C]"></i> Primary CBSE Curriculum</span>
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#4B1F6F] bg-[#F1EAF7] px-2.5 py-1 rounded-full border border-purple-200/50">Stage 05 • Leadership</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B1F6F] leading-tight">Graders (Primary School)</h2>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                        Our Primary Graders program combines CBSE academic syllabus with computer science literacy, Abacus mental arithmetic, sports competition, and leadership initiatives. Students develop deep discipline and high academic aptitude.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <div className="program-milestone-pill">
                            <i className="fa-solid fa-circle-check"></i>
                            <span>CBSE Core Subjects (Eng, Math, Sci)</span>
                        </div>
                        <div className="program-milestone-pill">
                            <i className="fa-solid fa-circle-check"></i>
                            <span>Abacus Mental Calculation</span>
                        </div>
                        <div className="program-milestone-pill">
                            <i className="fa-solid fa-circle-check"></i>
                            <span>Computer Lab Coding Basics</span>
                        </div>
                        <div className="program-milestone-pill">
                            <i className="fa-solid fa-circle-check"></i>
                            <span>Velocity Fest Sports Athletics</span>
                        </div>
                    </div>
                    <div className="pt-4 flex flex-wrap gap-4 items-center">
                        <button className=" btn-gold text-xs inline-flex items-center gap-2" onClick={() => openModal("Graders", "enquiry")}>
                            <span>Enquire for Graders</span>
                            <i className="fa-solid fa-arrow-right text-[11px]"></i>
                        </button>
                        <button className=" btn-outline-purple text-xs" onClick={() => openModal("Graders", "visit")}>
                            <i className="fa-solid fa-calendar-check text-[11px]"></i>
                            <span>Visit Classroom</span>
                        </button>
                    </div>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2">
                    <div className="program-photo-frame program-float-1 h-[360px] sm:h-[400px]">
                        <img src="/assets/DSC_0001.jpg" alt="Graders at Ryans Academy" />
                        <div className="program-floating-tag">
                            <i className="fa-solid fa-graduation-cap text-[#F3D98B]"></i>
                            <span>CBSE Academic Excellence</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Interactive Pathway Synergy Feature Bar */}
    <section className="reveal-on-scroll py-14 bg-gradient-to-r from-[#4B1F6F] via-[#5e268c] to-[#4B1F6F] text-white border-t border-purple-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#F3D98B]">Holistic Pedagogical Continuum</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Why Ryans Structured Pathway Works</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-all hover:-translate-y-1.5 duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4A72C] to-[#E67E22] text-white flex items-center justify-center text-xl mb-4 shadow-md shadow-amber-500/20">
                        <i className="fa-solid fa-stairs"></i>
                    </div>
                    <h4 className="font-bold text-lg text-white mb-2">Zero-Stress Continuity</h4>
                    <p className="text-xs text-purple-200 leading-relaxed font-medium">Each level builds effortlessly on prior milestones, preventing early academic fatigue and instilling joyful curiosity.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-all hover:-translate-y-1.5 duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4B1F6F] to-[#7C3AED] text-white flex items-center justify-center text-xl mb-4 shadow-md shadow-purple-900/30">
                        <i className="fa-solid fa-brain"></i>
                    </div>
                    <h4 className="font-bold text-lg text-white mb-2">Dual Brain Stimulation</h4>
                    <p className="text-xs text-purple-200 leading-relaxed font-medium">Bead math calculations, phonics phonetics, and motor sensory apparatus harmonize logical and creative intelligence.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-all hover:-translate-y-1.5 duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#059669] to-[#10B981] text-white flex items-center justify-center text-xl mb-4 shadow-md shadow-emerald-500/20">
                        <i className="fa-solid fa-heart-pulse"></i>
                    </div>
                    <h4 className="font-bold text-lg text-white mb-2">Whole-Child Wellbeing</h4>
                    <p className="text-xs text-purple-200 leading-relaxed font-medium">Physical athletics, stage articulation, emotional kindness, and healthy dining habits form our everyday campus life.</p>
                </div>
            </div>
        </div>
    </section>

    {/* Footer */}
    </div>
  );
}
