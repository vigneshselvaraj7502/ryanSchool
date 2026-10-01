import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import AnimatedCounter from '../components/AnimatedCounter';

export default function HomePage() {
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
    <div className="homepage-page">
      {/* Section 2: Hero Section (PDF Section 5.2) */}
    <section className="relative bg-gradient-to-b from-[#FAF8F4] via-[#F1EAF7]/50 to-[#FAF8F4] pt-8 pb-16 lg:py-20 overflow-hidden border-b border-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left: Headline & Call To Action */}
                <div className="lg:col-span-6 space-y-6 text-center lg:text-left reveal-on-scroll">
                    <div className="inline-flex items-center gap-2 bg-[#F1EAF7] border border-purple-200 px-4 py-1.5 rounded-full shadow-sm">
                        <img src="/assets/pencil.gif" alt="Writing & Phonics" className="w-5 h-5 object-contain" />
                        <span className="text-xs font-bold uppercase tracking-wider text-[#4B1F6F]">Admissions Open For Academic Year 2026-27</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#4B1F6F] leading-tight tracking-tight">
                        Dream. Learn.<br />
                        <span className="text-[#D4A72C] font-serif italic">Explore.</span> Shine.
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Inspiring young minds to learn, explore, and shine through CBSE curriculum, Montessori foundations, and joyful activity-based discovery.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                        <a href="#welcome" className="btn-purple text-base w-full sm:w-auto">
                            Explore Ryans Academy <i className="fa-solid fa-arrow-right text-xs"></i>
                        </a>
                        <button className=" btn-gold text-base w-full sm:w-auto" onClick={() => openModal("Play Group", "enquiry")}>
                            Admissions Open <i className="fa-solid fa-sparkles text-xs"></i>
                        </button>
                    </div>

                    {/* Trust Stats Bar */}
                    <div className="pt-6 grid grid-cols-3 gap-4 border-t border-purple-100 max-w-md mx-auto lg:mx-0">
                        <div>
                            <span className="block text-2xl sm:text-3xl font-extrabold text-[#4B1F6F]"><AnimatedCounter target={10} prefix="" suffix="+" /></span>
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Years of Legacy</span>
                        </div>
                        <div>
                            <span className="block text-2xl sm:text-3xl font-extrabold text-[#4B1F6F]"><AnimatedCounter target={10} prefix="1:" suffix="" /></span>
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Teacher Ratio</span>
                        </div>
                        <div>
                            <span className="block text-2xl sm:text-3xl font-extrabold text-[#D4A72C]"><AnimatedCounter target={100} prefix="" suffix="%" /></span>
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Holistic Care</span>
                        </div>
                    </div>
                </div>

                {/* Right: Large Real Student Photograph Showcase */}
                <div className="lg:col-span-6 relative">
                    <div className="relative mx-auto max-w-md lg:max-w-none">
                        {/* Decorative Backdrop Elements */}
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#F3D98B]/40 rounded-3xl -rotate-6 filter blur-xl"></div>
                        <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#4B1F6F]/10 rounded-full filter blur-xl"></div>
                        
                        {/* Main Hero Image (Real Ryans Academy Students) */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white hero-img-glow animate-float-gentle">
                            <img src="/assets/DSC_0868.jpg" alt="Ryans Academy Students in uniform" className="w-full h-[380px] sm:h-[460px] object-cover object-top hover:scale-105 transition-transform duration-700" />
                            {/* Overlay Pill */}
                            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-purple-50 shadow-lg flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-[#4B1F6F] text-white flex items-center justify-center font-bold">
                                        <i className="fa-solid fa-award text-base text-[#D4A72C]"></i>
                                    </div>
                                    <div>
                                        <p className="font-bold text-xs text-[#4B1F6F] leading-tight">PREMIUM LEARNING</p>
                                        <p className="text-[11px] text-gray-500 font-medium">Joyful Childhood Environment</p>
                                    </div>
                                </div>
                                <span className="bg-[#F1EAF7] text-[#4B1F6F] text-[11px] font-extrabold px-3 py-1 rounded-full">CBSE Aligned</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Section 3: Quick Highlights (PDF Section 5.3 - Upgraded Luxury Showcase) */}
    <section className="py-12 lg:py-14 bg-gradient-to-b from-[#FAF8F4] via-white to-[#FAF8F4] relative z-20 -mt-6 sm:-mt-8 overflow-hidden">
        {/* Ambient Decorative Blooms */}
        <div className="absolute top-1/2 -left-20 w-64 h-64 bg-[#D4A72C]/10 rounded-full filter blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -right-20 w-64 h-64 bg-[#4B1F6F]/10 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Highlight 1: CBSE Curriculum */}
                <div className="highlight-card-luxury p-6 sm:p-7 reveal-on-scroll stagger-1 group">
                    <div className="highlight-accent-bar bg-gradient-to-r from-[#4B1F6F] via-[#6B3A8D] to-[#834aa7]"></div>
                    <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4B1F6F] to-[#6B3A8D] text-white flex items-center justify-center text-2xl shadow-lg shadow-purple-950/20 highlight-icon flex-shrink-0">
                            <i className="fa-solid fa-book-open-reader"></i>
                        </div>
                        <div className="flex-1">
                            <span className="text-[9.5px] font-black uppercase tracking-wider text-[#4B1F6F] bg-[#F1EAF7] px-2.5 py-0.5 rounded-full inline-block mb-1.5 border border-purple-200/50">
                                Academic Rigor
                            </span>
                            <h4 className="font-extrabold text-base text-[#4B1F6F] mb-1 group-hover:text-[#6B3A8D] transition-colors">
                                CBSE Curriculum
                            </h4>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium mt-3">
                        Structured conceptual foundations preparing children with global academic rigor and analytical confidence.
                    </p>
                    <div className="pt-3 border-t border-purple-50 mt-auto">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#4B1F6F]">
                            <i className="fa-solid fa-circle-check text-[#D4A72C] text-xs"></i> NCERT Aligned • Global Benchmarks
                        </span>
                    </div>
                </div>

                {/* Highlight 2: Activity-Based Learning */}
                <div className="highlight-card-luxury p-6 sm:p-7 reveal-on-scroll stagger-2 group">
                    <div className="highlight-accent-bar bg-gradient-to-r from-[#D4A72C] via-[#F3D98B] to-[#E67E22]"></div>
                    <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4A72C] to-[#E67E22] text-white flex items-center justify-center text-2xl shadow-lg shadow-amber-500/25 highlight-icon flex-shrink-0">
                            <i className="fa-solid fa-shapes"></i>
                        </div>
                        <div className="flex-1">
                            <span className="text-[9.5px] font-black uppercase tracking-wider text-[#D4A72C] bg-[#FDF8E7] px-2.5 py-0.5 rounded-full inline-block mb-1.5 border border-amber-200/50">
                                Hands-on STEM
                            </span>
                            <h4 className="font-extrabold text-base text-[#4B1F6F] mb-1 group-hover:text-[#D4A72C] transition-colors">
                                Activity-Based Learning
                            </h4>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium mt-3">
                        Hands-on sensory exploration, science curiosity wonder labs, and collaborative imaginative play.
                    </p>
                    <div className="pt-3 border-t border-amber-50 mt-auto">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#D4A72C]">
                            <i className="fa-solid fa-circle-check text-[#4B1F6F] text-xs"></i> Sensory Kits • Curiosity Labs
                        </span>
                    </div>
                </div>

                {/* Highlight 3: Montessori Approach */}
                <div className="highlight-card-luxury p-6 sm:p-7 reveal-on-scroll stagger-3 group">
                    <div className="highlight-accent-bar bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#A855F7]"></div>
                    <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#9333EA] text-white flex items-center justify-center text-2xl shadow-lg shadow-purple-600/25 highlight-icon flex-shrink-0">
                            <i className="fa-solid fa-puzzle-piece"></i>
                        </div>
                        <div className="flex-1">
                            <span className="text-[9.5px] font-black uppercase tracking-wider text-[#7C3AED] bg-purple-50 px-2.5 py-0.5 rounded-full inline-block mb-1.5 border border-purple-200/50">
                                Self-Directed
                            </span>
                            <h4 className="font-extrabold text-base text-[#4B1F6F] mb-1 group-hover:text-[#7C3AED] transition-colors">
                                Montessori Approach
                            </h4>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium mt-3">
                        Self-paced discovery nurturing natural curiosity, deep focus, spatial logic, and fine motor skills.
                    </p>
                    <div className="pt-3 border-t border-purple-50 mt-auto">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#7C3AED]">
                            <i className="fa-solid fa-circle-check text-[#D4A72C] text-xs"></i> Child-Centric Learning Stations
                        </span>
                    </div>
                </div>

                {/* Highlight 4: Holistic Development */}
                <div className="highlight-card-luxury p-6 sm:p-7 reveal-on-scroll stagger-4 group">
                    <div className="highlight-accent-bar bg-gradient-to-r from-[#059669] via-[#10B981] to-[#34D399]"></div>
                    <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#059669] to-[#10B981] text-white flex items-center justify-center text-2xl shadow-lg shadow-emerald-500/25 highlight-icon flex-shrink-0">
                            <i className="fa-solid fa-seedling"></i>
                        </div>
                        <div className="flex-1">
                            <span className="text-[9.5px] font-black uppercase tracking-wider text-[#059669] bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-1.5 border border-emerald-200/50">
                                Mind & Character
                            </span>
                            <h4 className="font-extrabold text-base text-[#4B1F6F] mb-1 group-hover:text-[#059669] transition-colors">
                                Holistic Development
                            </h4>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium mt-3">
                        Balanced emotional, physical vitality, creative expression, and social empathy for every learner.
                    </p>
                    <div className="pt-3 border-t border-emerald-50 mt-auto">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#059669]">
                            <i className="fa-solid fa-circle-check text-[#D4A72C] text-xs"></i> Sports, Arts & Values Integrated
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Section 4: Welcome to Ryans Academy (PDF Section 5.4) */}
    <section className="py-16 bg-[#FAF8F4] reveal-on-scroll" id="welcome">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Split Layout: Real Student Photograph */}
                <div className="lg:col-span-5 order-2 lg:order-1">
                    <div className="relative">
                        <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                            <img src="/assets/DSC_0857.jpg" alt="Ryans Academy welcoming environment" className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-[#4B1F6F] text-white p-5 rounded-2xl shadow-xl hidden sm:block max-w-[200px]">
                            <p className="text-xs font-semibold text-[#F3D98B] uppercase tracking-wider mb-1">Our Philosophy</p>
                            <p className="text-sm font-bold leading-snug">"Premium Learning. Joyful Childhood."</p>
                        </div>
                    </div>
                </div>

                {/* Split Layout: Short Introduction & Button */}
                <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                    <span className="purple-badge inline-flex items-center gap-2">
                        <img src="/assets/welcome.gif" alt="Welcome" className="w-5 h-5 object-contain" />
                        Welcome to Ryans Academy
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B1F6F] leading-tight">
                        Where Curiosity Blossoms Into Lifelong Excellence
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                        At Ryans Academy, we believe education should ignite wonder while building solid cognitive and character foundations. Our campus harmoniously pairs academic discipline with creative warmth, empowering children to think critically, speak confidently, and express joyfully.
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                        With modern child-centric classrooms, experienced educators, activity centers, and CBSE curriculum alignment, Ryans Academy provides the safe, enriching environment parents trust and children love.
                    </p>
                    <div className="pt-2 flex flex-wrap gap-4 items-center">
                        <Link to="/about" className="btn-purple">
                            Discover Our School <i className="fa-solid fa-arrow-right text-xs"></i>
                        </Link>
                        <button className=" btn-outline-gold" onClick={() => openModal("Play Group", "visit")}>
                            <i className="fa-regular fa-calendar-check"></i> Schedule Campus Tour
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Section: 6 Core Pillars of Ryans Academy (User-Requested 3D Clay Interactive Section) */}
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-[#FAF8F4] via-white to-[#FAF8F4] border-b border-purple-100/60" id="pillars">
        {/* Subtle Playful Doodle Background Pattern */}
        <div className="absolute inset-0 bg-repeat opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'url(\'/assets/kids_doodles_bg.jpg\')', backgroundSize: '380px' }}></div>

        {/* Ambient Glow Elements */}
        <div className="absolute top-1/2 left-4 w-72 h-72 bg-[#D4A72C]/10 rounded-full filter blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 right-4 w-72 h-72 bg-[#4B1F6F]/10 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-14 reveal-on-scroll">
                <span className="gold-badge mb-3 animate-pulse-subtle">
                    <i className="fa-solid fa-shapes text-[10px]"></i> Foundational Excellence
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4B1F6F] leading-tight">
                    Why Choose <span className="text-[#D4A72C] font-serif italic">Ryans Academy?</span>
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed font-medium">
                    Six core pillars of care, playful exploration, and inspiring mentorship that build happy, confident young achievers.
                </p>
            </div>

            {/* 6 Interactive 3D Pillars Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                {/* Pillar 1: Safe & Secure Environment */}
                <div className="pillar-card reveal-on-scroll stagger-1">
                    <div className="pillar-icon-wrapper animate-pillar-float-1">
                        <img src="/assets/pillar_1.png" alt="Safe & Secure Environment" className="pillar-icon-img" loading="lazy" />
                    </div>
                    <h3 className="font-extrabold text-xs sm:text-sm tracking-wide text-[#4B1F6F] uppercase mb-1.5 leading-snug">
                        Safe & Secure<br />Environment
                    </h3>
                    <p className="text-[11px] sm:text-xs text-gray-500 font-medium leading-relaxed">
                        A safe and caring environment for your child.
                    </p>
                </div>

                {/* Pillar 2: Play Based Learning */}
                <div className="pillar-card reveal-on-scroll stagger-2">
                    <div className="pillar-icon-wrapper animate-pillar-float-2">
                        <img src="/assets/pillar_2.png" alt="Play Based Learning" className="pillar-icon-img" loading="lazy" />
                    </div>
                    <h3 className="font-extrabold text-xs sm:text-sm tracking-wide text-[#D97706] uppercase mb-1.5 leading-snug">
                        Play Based<br />Learning
                    </h3>
                    <p className="text-[11px] sm:text-xs text-gray-500 font-medium leading-relaxed">
                        Learning through play, fun and exploration.
                    </p>
                </div>

                {/* Pillar 3: Experienced Teachers */}
                <div className="pillar-card reveal-on-scroll stagger-3">
                    <div className="pillar-icon-wrapper animate-pillar-float-3">
                        <img src="/assets/pillar_3.png" alt="Experienced Teachers" className="pillar-icon-img" loading="lazy" />
                    </div>
                    <h3 className="font-extrabold text-xs sm:text-sm tracking-wide text-[#E11D48] uppercase mb-1.5 leading-snug">
                        Experienced<br />Teachers
                    </h3>
                    <p className="text-[11px] sm:text-xs text-gray-500 font-medium leading-relaxed">
                        Trained and loving teachers who nurture growth.
                    </p>
                </div>

                {/* Pillar 4: Creative Activities */}
                <div className="pillar-card reveal-on-scroll stagger-4">
                    <div className="pillar-icon-wrapper animate-pillar-float-4">
                        <img src="/assets/pillar_4.png" alt="Creative Activities" className="pillar-icon-img" loading="lazy" />
                    </div>
                    <h3 className="font-extrabold text-xs sm:text-sm tracking-wide text-[#059669] uppercase mb-1.5 leading-snug">
                        Creative<br />Activities
                    </h3>
                    <p className="text-[11px] sm:text-xs text-gray-500 font-medium leading-relaxed">
                        Art, music, dance and activities for holistic growth.
                    </p>
                </div>

                {/* Pillar 5: Individual Attention */}
                <div className="pillar-card reveal-on-scroll stagger-5">
                    <div className="pillar-icon-wrapper animate-pillar-float-5">
                        <img src="/assets/pillar_5.png" alt="Individual Attention" className="pillar-icon-img" loading="lazy" />
                    </div>
                    <h3 className="font-extrabold text-xs sm:text-sm tracking-wide text-[#7C3AED] uppercase mb-1.5 leading-snug">
                        Individual<br />Attention
                    </h3>
                    <p className="text-[11px] sm:text-xs text-gray-500 font-medium leading-relaxed">
                        Personal care and attention to every child.
                    </p>
                </div>

                {/* Pillar 6: Modern Facilities */}
                <div className="pillar-card reveal-on-scroll stagger-6">
                    <div className="pillar-icon-wrapper animate-pillar-float-6">
                        <img src="/assets/pillar_6.png" alt="Modern Facilities" className="pillar-icon-img" loading="lazy" />
                    </div>
                    <h3 className="font-extrabold text-xs sm:text-sm tracking-wide text-[#0284C7] uppercase mb-1.5 leading-snug">
                        Modern<br />Facilities
                    </h3>
                    <p className="text-[11px] sm:text-xs text-gray-500 font-medium leading-relaxed">
                        Bright classrooms and child-friendly infrastructure.
                    </p>
                </div>
            </div>
        </div>
    </section>

    {/* Section 6 (Unique Feature 1): "Every Child Has a Unique Spark" (PDF Section 6) */}
    <section className="py-16 bg-[#F1EAF7]/60 border-y border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="gold-badge mb-3">Unique Development Program</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B1F6F]">Every Child Has a Unique Spark</h2>
                <p className="text-gray-600 text-sm sm:text-base mt-3">We recognize and nurture the distinct strengths, interests, and natural abilities of each child.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Spark Selector Buttons */}
                <div className="lg:col-span-5 space-y-3.5">
                    {/* Tab 1: Creative Child */}
                    <button className="spark-tab-btn active group" data-target="spark-creative">
                        <div className="spark-icon-box bg-gradient-to-br from-[#D4A72C] to-[#E67E22] text-white shadow-md shadow-amber-500/25">
                            <i className="fa-solid fa-palette"></i>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                                <span className="text-[9px] font-black uppercase tracking-wider text-[#D4A72C] bg-[#FDF8E7] px-2 py-0.5 rounded-full inline-block border border-amber-200/50">
                                    Visual Arts
                                </span>
                            </div>
                            <h4 className="font-extrabold text-sm sm:text-base text-[#4B1F6F] leading-tight group-hover:text-[#D4A72C] transition-colors">
                                The Creative Child
                            </h4>
                            <p className="text-[11px] sm:text-xs text-gray-500 font-medium truncate mt-0.5">
                                Fine arts, imaginative crafts, story illustration
                            </p>
                        </div>
                        <i className="fa-solid fa-chevron-right spark-chevron"></i>
                    </button>

                    {/* Tab 2: Curious Learner */}
                    <button className="spark-tab-btn group" data-target="spark-curious">
                        <div className="spark-icon-box bg-gradient-to-br from-[#4B1F6F] to-[#6B3A8D] text-white shadow-md shadow-purple-900/25">
                            <i className="fa-solid fa-atom"></i>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                                <span className="text-[9px] font-black uppercase tracking-wider text-[#4B1F6F] bg-[#F1EAF7] px-2 py-0.5 rounded-full inline-block border border-purple-200/50">
                                    STEM & Wonder
                                </span>
                            </div>
                            <h4 className="font-extrabold text-sm sm:text-base text-[#4B1F6F] leading-tight group-hover:text-[#6B3A8D] transition-colors">
                                The Curious Learner
                            </h4>
                            <p className="text-[11px] sm:text-xs text-gray-500 font-medium truncate mt-0.5">
                                Science discovery, math puzzles, nature labs
                            </p>
                        </div>
                        <i className="fa-solid fa-chevron-right spark-chevron"></i>
                    </button>

                    {/* Tab 3: Confident Speaker */}
                    <button className="spark-tab-btn group" data-target="spark-speaker">
                        <div className="spark-icon-box bg-gradient-to-br from-[#E11D48] to-[#F43F5E] text-white shadow-md shadow-rose-500/25">
                            <i className="fa-solid fa-microphone-lines"></i>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                                <span className="text-[9px] font-black uppercase tracking-wider text-[#E11D48] bg-rose-50 px-2 py-0.5 rounded-full inline-block border border-rose-200/50">
                                    Speech & Phonics
                                </span>
                            </div>
                            <h4 className="font-extrabold text-sm sm:text-base text-[#4B1F6F] leading-tight group-hover:text-[#E11D48] transition-colors">
                                The Confident Speaker
                            </h4>
                            <p className="text-[11px] sm:text-xs text-gray-500 font-medium truncate mt-0.5">
                                Phonics, public speaking, show-and-tell
                            </p>
                        </div>
                        <i className="fa-solid fa-chevron-right spark-chevron"></i>
                    </button>

                    {/* Tab 4: Active Child */}
                    <button className="spark-tab-btn group" data-target="spark-active">
                        <div className="spark-icon-box bg-gradient-to-br from-[#059669] to-[#10B981] text-white shadow-md shadow-emerald-500/25">
                            <i className="fa-solid fa-person-running"></i>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                                <span className="text-[9px] font-black uppercase tracking-wider text-[#059669] bg-emerald-50 px-2 py-0.5 rounded-full inline-block border border-emerald-200/50">
                                    Vitality & Sports
                                </span>
                            </div>
                            <h4 className="font-extrabold text-sm sm:text-base text-[#4B1F6F] leading-tight group-hover:text-[#059669] transition-colors">
                                The Active Child
                            </h4>
                            <p className="text-[11px] sm:text-xs text-gray-500 font-medium truncate mt-0.5">
                                Athletics, gross motor skills, teamwork sports
                            </p>
                        </div>
                        <i className="fa-solid fa-chevron-right spark-chevron"></i>
                    </button>

                    {/* Tab 5: Talented Performer */}
                    <button className="spark-tab-btn group" data-target="spark-performer">
                        <div className="spark-icon-box bg-gradient-to-br from-[#7C3AED] to-[#9333EA] text-white shadow-md shadow-purple-600/25">
                            <i className="fa-solid fa-masks-theater"></i>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                                <span className="text-[9px] font-black uppercase tracking-wider text-[#7C3AED] bg-purple-50 px-2 py-0.5 rounded-full inline-block border border-purple-200/50">
                                    Stage Poise & Rhythm
                                </span>
                            </div>
                            <h4 className="font-extrabold text-sm sm:text-base text-[#4B1F6F] leading-tight group-hover:text-[#7C3AED] transition-colors">
                                The Talented Performer
                            </h4>
                            <p className="text-[11px] sm:text-xs text-gray-500 font-medium truncate mt-0.5">
                                Dance, rhythm, theatre, stage expression
                            </p>
                        </div>
                        <i className="fa-solid fa-chevron-right spark-chevron"></i>
                    </button>
                </div>

                {/* Right: Spark Details Cards with Real School Imagery */}
                <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-purple-100 shadow-md">
                    {/* Detail 1: Creative Child */}
                    <div id="spark-creative" className="spark-detail-content space-y-4">
                        <div className="h-64 sm:h-72 rounded-2xl overflow-hidden mb-4">
                            <img src="/assets/kids_art_painting.jpg" alt="Art painting at Ryans" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#4B1F6F]">Nurturing the Creative Child</h3>
                        <p className="text-sm text-gray-600 leading-relaxed font-medium">Through guided painting, sculpture, and multi-sensory materials, children learn to translate their innermost thoughts and emotions into creative expressions. We cultivate original thinking rather than rote repetition.</p>
                        <ul className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-700 pt-2">
                            <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Freeform Canvas Art</li>
                            <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Clay & Origami Crafting</li>
                            <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Annual Art Showcase</li>
                            <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Sensory Texture Exploration</li>
                        </ul>
                    </div>

                    {/* Detail 2: Curious Learner */}
                    <div id="spark-curious" className="spark-detail-content hidden space-y-4">
                        <div className="h-64 sm:h-72 rounded-2xl overflow-hidden mb-4">
                            <img src="/assets/DSC_0162.jpg" alt="Curious science and discovery" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#4B1F6F]">Igniting the Curious Learner</h3>
                        <p className="text-sm text-gray-600 leading-relaxed font-medium">Children are natural scientists. Our STEM discovery corners, nature observation modules, and interactive lab sessions encourage students to ask 'why' and test their ideas with confidence.</p>
                        <ul className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-700 pt-2">
                            <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Wonder Lab Experiments</li>
                            <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Math Manipulatives</li>
                            <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Abacus Foundations</li>
                            <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Botanical Garden Walks</li>
                        </ul>
                    </div>

                    {/* Detail 3: Confident Speaker */}
                    <div id="spark-speaker" className="spark-detail-content hidden space-y-4">
                        <div className="h-64 sm:h-72 rounded-2xl overflow-hidden mb-4">
                            <img src="/assets/DSC_0312.jpg" alt="Public speaking and presentation" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#4B1F6F]">Empowering the Confident Speaker</h3>
                        <p className="text-sm text-gray-600 leading-relaxed font-medium">Strong communication opens every door in life. Ryans Academy introduces structured phonetics, daily circle-time sharing, and stage presentation from the early years.</p>
                        <ul className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-700 pt-2">
                            <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Jolly Phonics Curriculum</li>
                            <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Show & Tell Sessions</li>
                            <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Morning Assembly Podiums</li>
                            <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Recitation & Debates</li>
                        </ul>
                    </div>

                    {/* Detail 4: Active Child */}
                    <div id="spark-active" className="spark-detail-content hidden space-y-4">
                        <div className="h-64 sm:h-72 rounded-2xl overflow-hidden mb-4">
                            <img src="/assets/sports (4).jpg" alt="Active sports and athletics" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#4B1F6F]">Energizing the Active Child</h3>
                        <p className="text-sm text-gray-600 leading-relaxed font-medium">Physical vitality supports sharp intellects. Our sports curriculum emphasizes gross motor coordination, balance, athletic sportsmanship, and outdoor agility.</p>
                        <ul className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-700 pt-2">
                            <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Structured PE Drills</li>
                            <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Annual Sports Velocity Fest</li>
                            <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Safe Playground Play</li>
                            <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Yoga & Aerobics</li>
                        </ul>
                    </div>

                    {/* Detail 5: Talented Performer */}
                    <div id="spark-performer" className="spark-detail-content hidden space-y-4">
                        <div className="h-64 sm:h-72 rounded-2xl overflow-hidden mb-4">
                            <img src="/assets/westerndance.jpg" alt="Talented stage performers" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#4B1F6F]">Inspiring the Talented Performer</h3>
                        <p className="text-sm text-gray-600 leading-relaxed font-medium">Through classical, western, and theatrical performances in grand events like RYANOVA, every child gains stage poise, rhythmic awareness, and radiant confidence.</p>
                        <ul className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-700 pt-2">
                            <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Annual RYANOVA Gala</li>
                            <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Dance & Rhythm Classes</li>
                            <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Musical Expressions</li>
                            <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Skits & Dramatic Play</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Section 5: Our Programs (PDF Section 5.5) */}
    <section className="py-16 bg-white border-t border-purple-50" id="programs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                <div>
                    <span className="purple-badge mb-2">Age-Specific Excellence</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B1F6F]">Our Academic Programs</h2>
                    <p className="text-gray-600 text-sm sm:text-base mt-2">Comprehensive learning stages tailored to each critical developmental milestone.</p>
                </div>
                <Link to="/programs" className="btn-outline-purple text-xs font-bold mt-4 md:mt-0 self-start md:self-auto">
                    View Full Curriculum <i className="fa-solid fa-arrow-right ml-1"></i>
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {/* Program 1: Play Group */}
                <div className="premium-card card-interactive-lift overflow-hidden flex flex-col reveal-on-scroll">
                    <div className="h-44 overflow-hidden relative">
                        <img src="/assets/playgroup.jpg" alt="Play Group at Ryans" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        <span className="absolute top-3 left-3 bg-[#4B1F6F] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full">1.5 – 2.5 Yrs</span>
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                        <h4 className="font-bold text-lg text-[#4B1F6F] mb-1">Play Group</h4>
                        <p className="text-xs text-gray-600 mb-4 leading-relaxed font-medium flex-grow">Sensory exploration, gentle socialization, joyful rhyme sessions, and gross motor play.</p>
                        <Link to="/programs#playgroup" className="text-xs font-bold text-[#D4A72C] hover:text-[#4B1F6F] transition flex items-center gap-1 mt-auto">
                            Learn More <i className="fa-solid fa-chevron-right text-[10px]"></i>
                        </Link>
                    </div>
                </div>

                {/* Program 2: Pre-KG */}
                <div className="premium-card card-interactive-lift overflow-hidden flex flex-col reveal-on-scroll">
                    <div className="h-44 overflow-hidden relative">
                        <img src="/assets/nursery.jpg" alt="Pre-KG at Ryans" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        <span className="absolute top-3 left-3 bg-[#4B1F6F] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full">2.5 – 3.5 Yrs</span>
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                        <h4 className="font-bold text-lg text-[#4B1F6F] mb-1">Pre-KG</h4>
                        <p className="text-xs text-gray-600 mb-4 leading-relaxed font-medium flex-grow">Vocabulary expansion, self-expression, color recognition, and Montessori manipulative tools.</p>
                        <Link to="/programs#prekg" className="text-xs font-bold text-[#D4A72C] hover:text-[#4B1F6F] transition flex items-center gap-1 mt-auto">
                            Learn More <i className="fa-solid fa-chevron-right text-[10px]"></i>
                        </Link>
                    </div>
                </div>

                {/* Program 3: LKG */}
                <div className="premium-card card-interactive-lift overflow-hidden flex flex-col reveal-on-scroll">
                    <div className="h-44 overflow-hidden relative">
                        <img src="/assets/juniorkg.jpg" alt="LKG at Ryans" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        <span className="absolute top-3 left-3 bg-[#4B1F6F] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full">3.5 – 4.5 Yrs</span>
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                        <h4 className="font-bold text-lg text-[#4B1F6F] mb-1">LKG</h4>
                        <p className="text-xs text-gray-600 mb-4 leading-relaxed font-medium flex-grow">Foundational phonics reading, writing readiness, pre-math logic, and creative storytelling.</p>
                        <Link to="/programs#lkg" className="text-xs font-bold text-[#D4A72C] hover:text-[#4B1F6F] transition flex items-center gap-1 mt-auto">
                            Learn More <i className="fa-solid fa-chevron-right text-[10px]"></i>
                        </Link>
                    </div>
                </div>

                {/* Program 4: UKG */}
                <div className="premium-card card-interactive-lift overflow-hidden flex flex-col reveal-on-scroll">
                    <div className="h-44 overflow-hidden relative">
                        <img src="/assets/seniorkg.jpg" alt="UKG at Ryans" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        <span className="absolute top-3 left-3 bg-[#4B1F6F] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full">4.5 – 5.5 Yrs</span>
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                        <h4 className="font-bold text-lg text-[#4B1F6F] mb-1">UKG</h4>
                        <p className="text-xs text-gray-600 mb-4 leading-relaxed font-medium flex-grow">Sentence construction, mental arithmetic, science exploration, and school readiness habits.</p>
                        <Link to="/programs#ukg" className="text-xs font-bold text-[#D4A72C] hover:text-[#4B1F6F] transition flex items-center gap-1 mt-auto">
                            Learn More <i className="fa-solid fa-chevron-right text-[10px]"></i>
                        </Link>
                    </div>
                </div>

                {/* Program 5: Graders */}
                <div className="premium-card card-interactive-lift overflow-hidden flex flex-col reveal-on-scroll">
                    <div className="h-44 overflow-hidden relative">
                        <img src="/assets/DSC_0001.jpg" alt="Primary Graders at Ryans" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        <span className="absolute top-3 left-3 bg-[#D4A72C] text-[#3b2408] text-[10px] font-extrabold px-2.5 py-1 rounded-full">Primary CBSE</span>
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                        <h4 className="font-bold text-lg text-[#4B1F6F] mb-1">Graders</h4>
                        <p className="text-xs text-gray-600 mb-4 leading-relaxed font-medium flex-grow">CBSE curriculum syllabus, computer science, Abacus math, leadership, and sports mastery.</p>
                        <Link to="/programs#graders" className="text-xs font-bold text-[#D4A72C] hover:text-[#4B1F6F] transition flex items-center gap-1 mt-auto">
                            Learn More <i className="fa-solid fa-chevron-right text-[10px]"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Section 7: Campus & Facilities (PDF Section 5.7) - Curated Preview */}
    <section className="py-16 bg-[#FAF8F4]" id="facilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                <div>
                    <span className="purple-badge mb-2">Safe & Stimulating Infrastructure</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B1F6F]">Campus & Facilities</h2>
                    <p className="text-gray-600 text-sm sm:text-base mt-2">Built specifically for young learners with round-the-clock safety, natural daylight, and ergonomic comfort.</p>
                </div>
                <Link to="/facilities" className="btn-outline-purple text-xs font-bold mt-4 md:mt-0 self-start md:self-auto">
                    Explore All 6 Facilities <i className="fa-solid fa-arrow-right ml-1"></i>
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Facility 1: Classrooms */}
                <div className="premium-card card-interactive-lift overflow-hidden group reveal-on-scroll">
                    <div className="h-52 overflow-hidden img-zoom-container">
                        <img src="/assets/DSC_0534.jpg" alt="Ryans Academy Classrooms" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                        <h4 className="font-bold text-lg text-[#4B1F6F] mb-2">Smart Modern Classrooms</h4>
                        <p className="text-xs text-gray-600 leading-relaxed font-medium">Airy, natural daylight-filled learning spaces equipped with ergonomic, child-safe furniture and multimedia visual boards.</p>
                    </div>
                </div>

                {/* Facility 2: Activity Areas */}
                <div className="premium-card card-interactive-lift overflow-hidden group reveal-on-scroll">
                    <div className="h-52 overflow-hidden img-zoom-container">
                        <img src="/assets/juniorkg_play.jpg" alt="Ryans Indoor Activity Arenas" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                        <h4 className="font-bold text-lg text-[#4B1F6F] mb-2">Indoor Activity Arenas</h4>
                        <p className="text-xs text-gray-600 leading-relaxed font-medium">Padded playrooms, role-play corners, musical stages, and creative craft tables for daily collaborative play.</p>
                    </div>
                </div>

                {/* Facility 3: Playground */}
                <div className="premium-card card-interactive-lift overflow-hidden group reveal-on-scroll">
                    <div className="h-52 overflow-hidden img-zoom-container">
                        <img src="/assets/kids_park_play.jpg" alt="Ryans Playground" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                        <h4 className="font-bold text-lg text-[#4B1F6F] mb-2">Safe Outdoor Playgrounds</h4>
                        <p className="text-xs text-gray-600 leading-relaxed font-medium">Safe shock-absorbent turf, slides, climbing arches, sandboxes, and running tracks under constant teacher supervision.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Section 8 & 10: Life at Ryans - Curated Photo Showcase */}
    <section className="py-16 bg-white" id="gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                <div>
                    <span className="gold-badge mb-2">Vibrant Moments</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B1F6F]">Life at Ryans Academy</h2>
                    <p className="text-gray-600 text-sm sm:text-base mt-2">Activities, sports, celebrations, and friendships that shape joyful childhood memories.</p>
                </div>
                <Link to="/gallery" className="btn-outline-purple text-xs font-bold mt-4 md:mt-0 self-start md:self-auto">
                    View Complete Gallery <i className="fa-solid fa-images ml-1"></i>
                </Link>
            </div>

            {/* Sleek 4-Photo Showcase Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" id="gallery-grid">
                {/* Image 1 */}
                <div className="gallery-item h-56" data-category="events" data-title="Annual Day & Celebrations">
                    <img src="/assets/anual1.png" alt="Annual Day gala celebration" className="w-full h-full object-cover" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Annual Day Gala</p>
                            <p className="text-[10px] text-purple-200">Stage Performance</p>
                        </div>
                    </div>
                </div>

                {/* Image 2 */}
                <div className="gallery-item h-56" data-category="sports" data-title="Sports Day Velocity Fest">
                    <img src="/assets/sports (1).jpg" alt="Sports events" className="w-full h-full object-cover" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Velocity Fest</p>
                            <p className="text-[10px] text-purple-200">Track & Field Athletics</p>
                        </div>
                    </div>
                </div>

                {/* Image 3 */}
                <div className="gallery-item h-56" data-category="activities" data-title="Creative Arts Workshop">
                    <img src="/assets/jkg_arts.jpg" alt="Creative arts workshop" className="w-full h-full object-cover" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Art & Painting</p>
                            <p className="text-[10px] text-purple-200">Color Explorations</p>
                        </div>
                    </div>
                </div>

                {/* Image 4 */}
                <div className="gallery-item h-56" data-category="campus" data-title="Classroom Interactive Learning">
                    <img src="/assets/DSC_0014.jpg" alt="Classroom learning" className="w-full h-full object-cover" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Active Classrooms</p>
                            <p className="text-[10px] text-purple-200">Collaborative Discovery</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Infinite Continuous Photo Stream Marquee */}
            <div className="mt-10 reveal-on-scroll">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#D4A72C] animate-ping"></span>
                        <span className="text-xs font-extrabold uppercase tracking-wider text-[#4B1F6F]">Live Photo Stream • Ryans Academy In Motion</span>
                    </div>
                    <span className="text-[11px] text-gray-500 font-medium hidden sm:inline"><i className="fa-solid fa-hand-pointer text-[#D4A72C] mr-1"></i> Hover to pause stream</span>
                </div>
                <div className="marquee-container rounded-2xl py-2 shadow-inner bg-[#FAF8F4]/80 p-2 border border-purple-100">
                    <div className="marquee-track">
                        <div className="marquee-item"><img src="/assets/DSC_0013.jpg" alt="Students in Classroom" loading="lazy" /></div>
                        <div className="marquee-item"><img src="/assets/sports (3).jpg" alt="Sports Day Athletics" loading="lazy" /></div>
                        <div className="marquee-item"><img src="/assets/DSC_0151.jpg" alt="Curiosity & STEM Lab" loading="lazy" /></div>
                        <div className="marquee-item"><img src="/assets/anual2.png" alt="Annual Cultural Day" loading="lazy" /></div>
                        <div className="marquee-item"><img src="/assets/DSC_0208.jpg" alt="Collaborative Learning" loading="lazy" /></div>
                        <div className="marquee-item"><img src="/assets/kids_slide_play.jpg" alt="Joyful Outdoor Playground" loading="lazy" /></div>
                        <div className="marquee-item"><img src="/assets/sports (4).jpg" alt="Team Sports Games" loading="lazy" /></div>
                        <div className="marquee-item"><img src="/assets/DSC_0269.jpg" alt="Montessori Activity Corner" loading="lazy" /></div>
                        <div className="marquee-item"><img src="/assets/anual3.png" alt="RYANOVA Stage Performance" loading="lazy" /></div>
                        <div className="marquee-item"><img src="/assets/DSC_0300.jpg" alt="Interactive Classroom" loading="lazy" /></div>
                        <div className="marquee-item"><img src="/assets/sports (6).jpg" alt="Velocity Sprint Races" loading="lazy" /></div>
                        <div className="marquee-item"><img src="/assets/kids_sand_play.jpg" alt="Outdoor Sensory Sand Play" loading="lazy" /></div>
                        <div className="marquee-item"><img src="/assets/DSC_0898.jpg" alt="School Assembly & Discipline" loading="lazy" /></div>
                        <div className="marquee-item"><img src="/assets/sports (7).jpg" alt="Relay Champions" loading="lazy" /></div>
                        <div className="marquee-item"><img src="/assets/DSC_0922.jpg" alt="Happy Ryans Scholars" loading="lazy" /></div>
                        <div className="marquee-item"><img src="/assets/daycare_meals.jpg" alt="Nourishing Daycare & Meals" loading="lazy" /></div>
                    </div>
                    <div className="marquee-track" aria-hidden="true">
                        <div className="marquee-item"><img src="/assets/DSC_0013.jpg" alt="Students in Classroom" loading="lazy" /></div>
                        <div className="marquee-item"><img src="/assets/sports (3).jpg" alt="Sports Day Athletics" loading="lazy" /></div>
                        <div className="marquee-item"><img src="/assets/DSC_0151.jpg" alt="Curiosity & STEM Lab" loading="lazy" /></div>
                        <div className="marquee-item"><img src="/assets/anual2.png" alt="Annual Cultural Day" loading="lazy" /></div>
                        <div className="marquee-item"><img src="/assets/DSC_0208.jpg" alt="Collaborative Learning" loading="lazy" /></div>
                        <div className="marquee-item"><img src="/assets/kids_slide_play.jpg" alt="Joyful Outdoor Playground" loading="lazy" /></div>
                        <div className="marquee-item"><img src="/assets/sports (4).jpg" alt="Team Sports Games" loading="lazy" /></div>
                        <div className="marquee-item"><img src="/assets/DSC_0269.jpg" alt="Montessori Activity Corner" loading="lazy" /></div>
                        <div className="marquee-item"><img src="/assets/anual3.png" alt="RYANOVA Stage Performance" loading="lazy" /></div>
                        <div className="marquee-item"><img src="/assets/DSC_0300.jpg" alt="Interactive Classroom" loading="lazy" /></div>
                        <div className="marquee-item"><img src="/assets/sports (6).jpg" alt="Velocity Sprint Races" loading="lazy" /></div>
                        <div className="marquee-item"><img src="/assets/kids_sand_play.jpg" alt="Outdoor Sensory Sand Play" loading="lazy" /></div>
                        <div className="marquee-item"><img src="/assets/DSC_0898.jpg" alt="School Assembly & Discipline" loading="lazy" /></div>
                        <div className="marquee-item"><img src="/assets/sports (7).jpg" alt="Relay Champions" loading="lazy" /></div>
                        <div className="marquee-item"><img src="/assets/DSC_0922.jpg" alt="Happy Ryans Scholars" loading="lazy" /></div>
                        <div className="marquee-item"><img src="/assets/daycare_meals.jpg" alt="Nourishing Daycare & Meals" loading="lazy" /></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Extraordinary Showcase: The Ryans Distinction (Signature Experiential Learning) */}
    <section className="py-20 bg-gradient-to-b from-[#FAF8F4] via-[#F1EAF7]/40 to-[#FAF8F4] relative overflow-hidden" id="distinction">
        {/* Floating decorative ambient blur circles */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#D4A72C]/15 rounded-full filter blur-3xl animate-float-gentle pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#4B1F6F]/10 rounded-full filter blur-3xl animate-float-inverse pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
                <span className="gold-badge mb-3 animate-pulse-subtle">
                    <i className="fa-solid fa-crown text-[10px]"></i> Beyond Traditional Schooling
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4B1F6F] leading-tight tracking-tight">
                    The <span className="text-[#D4A72C] font-serif italic">Extraordinary</span> Ryans Experience
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed font-medium">
                    Where world-class holistic modules, experiential discovery hubs, and joyful mentorship inspire young minds to soar.
                </p>
            </div>

            {/* Extraordinary Interactive Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
                {/* Card 1: Dual-Brain Abacus & Mental Agility */}
                <div className="extraordinary-card p-7 flex flex-col justify-between reveal-on-scroll stagger-1 glow-shimmer">
                    <div>
                        <div className="h-48 rounded-2xl overflow-hidden mb-5 img-zoom-container relative shadow-md">
                            <img src="/assets/DSC_0151.jpg" alt="Science Discovery and Experimentation" className="w-full h-full object-cover" />
                            <span className="absolute top-3 left-3 bg-[#4B1F6F] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                Discovery Labs
                            </span>
                        </div>
                        <div className="flex items-center gap-3.5 mb-3">
                            <div className="w-12 h-12 rounded-2xl bg-[#F1EAF7] text-[#4B1F6F] flex items-center justify-center text-xl extraordinary-icon flex-shrink-0">
                                <i className="fa-solid fa-atom text-[#D4A72C]"></i>
                            </div>
                            <div>
                                <span className="text-[10px] font-extrabold text-[#D4A72C] uppercase tracking-wider">Hands-on STEM</span>
                                <h3 className="font-bold text-lg text-[#4B1F6F] leading-snug">Curiosity & Wonder Labs</h3>
                            </div>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed font-medium mb-4">
                            Early science exploration, interactive nature tables, and safe hands-on experiments that transform abstract questions into thrilling discoveries.
                        </p>
                    </div>
                    <div className="pt-4 border-t border-purple-50 flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-purple-900/60">Sensory STEM • Math Labs</span>
                        <Link to="/academics" className="text-xs font-bold text-[#4B1F6F] hover:text-[#D4A72C] transition flex items-center gap-1">
                            Explore <i className="fa-solid fa-arrow-right text-[10px]"></i>
                        </Link>
                    </div>
                </div>

                {/* Card 2: Velocity Sports Carnival & Motor Mastery */}
                <div className="extraordinary-card p-7 flex flex-col justify-between reveal-on-scroll stagger-2 glow-shimmer">
                    <div>
                        <div className="h-48 rounded-2xl overflow-hidden mb-5 img-zoom-container relative shadow-md">
                            <img src="/assets/sports3.png" alt="Annual Velocity Fest Sports" className="w-full h-full object-cover" />
                            <span className="absolute top-3 left-3 bg-[#D4A72C] text-[#3b2408] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm inline-flex items-center gap-1.5">
                                <img src="/assets/animated.gif" alt="Athletic Agility" className="w-4 h-4 object-contain" />
                                Annual Velocity Fest
                            </span>
                        </div>
                        <div className="flex items-center gap-3.5 mb-3">
                            <div className="w-12 h-12 rounded-2xl bg-[#FDF8E7] text-[#D4A72C] flex items-center justify-center text-xl extraordinary-icon flex-shrink-0">
                                <i className="fa-solid fa-medal text-[#4B1F6F] transition-colors duration-300"></i>
                            </div>
                            <div>
                                <span className="text-[10px] font-extrabold text-[#4B1F6F] uppercase tracking-wider">Athletic Excellence</span>
                                <h3 className="font-bold text-lg text-[#4B1F6F] leading-snug">Sportsmanship & Vitality</h3>
                            </div>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed font-medium mb-4">
                            Structured track & field athletics, gymnastic agility drills, team relays, and yoga that build physical endurance, grit, and fair play.
                        </p>
                    </div>
                    <div className="pt-4 border-t border-purple-50 flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-purple-900/60">Track & Field • Yoga Drills</span>
                        <Link to="/activities" className="text-xs font-bold text-[#4B1F6F] hover:text-[#D4A72C] transition flex items-center gap-1">
                            Explore <i className="fa-solid fa-arrow-right text-[10px]"></i>
                        </Link>
                    </div>
                </div>

                {/* Card 3: Grand Stage & RYANOVA Cultural Expression */}
                <div className="extraordinary-card p-7 flex flex-col justify-between reveal-on-scroll stagger-3 glow-shimmer">
                    <div>
                        <div className="h-48 rounded-2xl overflow-hidden mb-5 img-zoom-container relative shadow-md">
                            <img src="/assets/anual2.png" alt="RYANOVA Annual Day Cultural Gala" className="w-full h-full object-cover" />
                            <span className="absolute top-3 left-3 bg-[#4B1F6F] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                RYANOVA Gala
                            </span>
                        </div>
                        <div className="flex items-center gap-3.5 mb-3">
                            <div className="w-12 h-12 rounded-2xl bg-[#F1EAF7] text-[#4B1F6F] flex items-center justify-center text-xl extraordinary-icon flex-shrink-0">
                                <i className="fa-solid fa-masks-theater text-[#D4A72C]"></i>
                            </div>
                            <div>
                                <span className="text-[10px] font-extrabold text-[#D4A72C] uppercase tracking-wider">Performing Arts</span>
                                <h3 className="font-bold text-lg text-[#4B1F6F] leading-snug">Stage Poise & Creative Gala</h3>
                            </div>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed font-medium mb-4">
                            Annual mega-stage galas, dramatic musical pantomimes, choir performances, and speech podiums ensuring 100% stage participation for all children.
                        </p>
                    </div>
                    <div className="pt-4 border-t border-purple-50 flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-purple-900/60">Dance • Drama • Stage Poise</span>
                        <Link to="/events" className="text-xs font-bold text-[#4B1F6F] hover:text-[#D4A72C] transition flex items-center gap-1">
                            Explore <i className="fa-solid fa-arrow-right text-[10px]"></i>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Extraordinary Interactive Banner: School Visit Callout */}
            <div className="bg-gradient-to-r from-[#4B1F6F] via-[#6B3A8D] to-[#4B1F6F] rounded-3xl p-8 sm:p-10 shadow-2xl text-white relative overflow-hidden reveal-on-scroll">
                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#D4A72C]/20 rounded-full filter blur-xl pointer-events-none"></div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-8 space-y-2">
                        <span className="bg-[#D4A72C] text-[#3b2408] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                            Interactive Campus Tours Available
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Witness The Ryans Magic in Real Time</h3>
                        <p className="text-purple-100 text-xs sm:text-sm max-w-xl font-medium leading-relaxed">
                            Bring your child for an interactive guided walkthrough. Explore our sensory play areas, smart classrooms, and joyful outdoor playgrounds today.
                        </p>
                    </div>
                    <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:items-end">
                        <button className=" btn-gold text-xs sm:text-sm py-3 px-6 shadow-lg w-full sm:w-auto" onClick={() => openModal("Play Group", "visit")}>
                            <i className="fa-solid fa-calendar-check"></i> Book Campus Tour
                        </button>
                        <a href="tel:+919840012345" className="btn-outline-gold text-xs py-2.5 px-5 border-white text-white hover:bg-white hover:text-[#4B1F6F] text-center w-full sm:w-auto">
                            <i className="fa-solid fa-phone"></i> Call: +91 98400 12345
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Section 11: Parent Testimonials (PDF Section 5.11) */}
    <section className="py-16 bg-[#F1EAF7]/40 border-y border-purple-100" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="gold-badge mb-3">Parent Trust & Feedback</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B1F6F]">What Parents Say About Ryans</h2>
                <p className="text-gray-600 text-sm sm:text-base mt-2">Genuine reviews from our Ryans Academy family who have seen their children flourish.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Testimonial 1 */}
                <div className="bg-white p-7 rounded-3xl border border-purple-100 shadow-md flex flex-col justify-between card-interactive-lift reveal-on-scroll">
                    <div>
                        <div className="flex text-[#D4A72C] gap-1 text-sm mb-4">
                            <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed font-medium mb-6 italic">
                            "Enrolling our daughter at Ryans Academy was the best decision. Her vocabulary, table manners, and enthusiasm for going to school every single morning are heartwarming. The teachers genuinely care!"
                        </p>
                    </div>
                    <div className="flex items-center gap-3 pt-4 border-t border-purple-50">
                        <div className="w-10 h-10 rounded-full bg-[#4B1F6F] text-white font-bold flex items-center justify-center text-sm">
                            SK
                        </div>
                        <div>
                            <h5 className="font-bold text-sm text-[#4B1F6F]">Mrs. Shanthi Kumar</h5>
                            <p className="text-[11px] text-gray-500 font-medium">Mother of Ananya (UKG)</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-white p-7 rounded-3xl border border-purple-100 shadow-md flex flex-col justify-between card-interactive-lift reveal-on-scroll">
                    <div>
                        <div className="flex text-[#D4A72C] gap-1 text-sm mb-4">
                            <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed font-medium mb-6 italic">
                            "The balance between CBSE academic syllabus and extracurriculars like Abacus and Velocity Fest sports is outstanding. Ryans develops complete children, not just exam-takers."
                        </p>
                    </div>
                    <div className="flex items-center gap-3 pt-4 border-t border-purple-50">
                        <div className="w-10 h-10 rounded-full bg-[#D4A72C] text-[#3b2408] font-bold flex items-center justify-center text-sm">
                            VR
                        </div>
                        <div>
                            <h5 className="font-bold text-sm text-[#4B1F6F]">Dr. Venkat Raman</h5>
                            <p className="text-[11px] text-gray-500 font-medium">Father of Rohan (Grader 2)</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-white p-7 rounded-3xl border border-purple-100 shadow-md flex flex-col justify-between card-interactive-lift reveal-on-scroll">
                    <div>
                        <div className="flex text-[#D4A72C] gap-1 text-sm mb-4">
                            <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed font-medium mb-6 italic">
                            "The infrastructure is immaculate and child-safe. From clean playgrounds to attentive teachers and regular communication through WhatsApp, we always feel peace of mind."
                        </p>
                    </div>
                    <div className="flex items-center gap-3 pt-4 border-t border-purple-50">
                        <div className="w-10 h-10 rounded-full bg-[#4B1F6F] text-white font-bold flex items-center justify-center text-sm">
                            PJ
                        </div>
                        <div>
                            <h5 className="font-bold text-sm text-[#4B1F6F]">Mrs. Priya Joseph</h5>
                            <p className="text-[11px] text-gray-500 font-medium">Mother of Kevin (Pre-KG)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Section 13: Admissions CTA Section (PDF Section 5.13) */}
    <section className="py-16 bg-gradient-to-r from-[#4B1F6F] via-[#6B3A8D] to-[#4B1F6F] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
            <span className="bg-[#D4A72C] text-[#3b2408] text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                Admissions Open 2026-27
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                Begin Your Child's Journey With Us
            </h2>
            <p className="text-purple-100 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
                Take the first step towards joyful learning, character building, and academic excellence. Schedule a personalized campus walk or apply online in just a few clicks.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button className=" btn-gold text-base py-3.5 px-8" onClick={() => openModal("Play Group", "enquiry")}>
                    <i className="fa-solid fa-file-lines"></i> Apply Now
                </button>
                <button className=" btn-outline-gold text-base py-3.5 px-8 border-white text-white hover:bg-white hover:text-[#4B1F6F]" onClick={() => openModal("Play Group", "visit")}>
                    <i className="fa-solid fa-calendar-check"></i> Book a School Visit
                </button>
            </div>
        </div>
    </section>

    {/* Section 14: Contact & Footer (PDF Section 5.14) */}
    </div>
  );
}
