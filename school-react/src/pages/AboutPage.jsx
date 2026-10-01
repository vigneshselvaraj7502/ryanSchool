import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import AnimatedCounter from '../components/AnimatedCounter';

export default function AboutPage() {
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
    <div className="aboutpage-page">
      {/* Breadcrumb & Hero Banner */}
    <section className="py-14 lg:py-20 bg-gradient-to-r from-[#4B1F6F] via-[#6B3A8D] to-[#4B1F6F] text-white relative overflow-hidden">
        {/* Ambient decorative shapes */}
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#D4A72C]/15 rounded-full filter blur-2xl animate-float-gentle pointer-events-none"></div>
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/10 rounded-full filter blur-2xl animate-float-inverse pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="reveal-on-scroll">
                    <span className="bg-[#D4A72C] text-[#3b2408] text-[11px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm inline-flex items-center gap-1.5 mb-3">
                        <i className="fa-solid fa-sparkles text-[10px]"></i> Our Story & Purpose
                    </span>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                        About <span className="text-[#F3D98B] font-serif italic">Ryans Academy</span>
                    </h1>
                    <p className="text-purple-100 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed font-medium">
                        Where intellectual curiosity, compassionate mentorship, and joyful discovery empower every child to thrive from their earliest steps.
                    </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-purple-200 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 self-start md:self-auto">
                    <Link to="/" className="hover:text-white transition"><i className="fa-solid fa-house text-[11px]"></i> Home</Link>
                    <span className="text-purple-300">/</span>
                    <span className="text-[#F3D98B]"><span className="whitespace-nowrap inline-block">About Us</span></span>
                </div>
            </div>
        </div>
    </section>

    {/* Section 1: The Ryans Academy Legacy & Story with Animated Stats */}
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Left: Inspiring Narrative */}
                <div className="lg:col-span-6 space-y-6 reveal-on-scroll">
                    <div className="inline-flex items-center gap-2 bg-[#F1EAF7] border border-purple-200 px-4 py-1.5 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-[#4B1F6F]"></span>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#4B1F6F]">A Decade of Transformative Education</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4B1F6F] leading-tight tracking-tight">
                        Nurturing Confident, Happy Learners Since 2015
                    </h2>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                        Founded with an unwavering vision to redefine early learning, Ryans Academy has grown into a vibrant, beloved academic home for hundreds of families. Our guiding ethos is simple yet profound: <strong className="text-[#4B1F6F]">"PREMIUM LEARNING. JOYFUL CHILDHOOD."</strong>
                    </p>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                        We believe schooling should never feel like a high-stress assembly line. At Ryans, we combine the global structure of <strong className="text-[#4B1F6F]">CBSE curriculum</strong> with the self-paced, sensory exploration of <strong className="text-[#4B1F6F]">Montessori methodology</strong>. Every corner is designed to inspire wonder, critical thinking, and kind social habits.
                    </p>

                    {/* Responsive Animated Trust Metric Counters */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                        <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-purple-100 text-center card-interactive-lift">
                            <span className="block text-2xl sm:text-3xl font-extrabold text-[#4B1F6F]"><AnimatedCounter target={10} prefix="" suffix="+" /></span>
                            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mt-1 block">Years Legacy</span>
                        </div>
                        <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-purple-100 text-center card-interactive-lift">
                            <span className="block text-2xl sm:text-3xl font-extrabold text-[#D4A72C]"><AnimatedCounter target={1500} prefix="" suffix="+" /></span>
                            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mt-1 block">Happy Alumni</span>
                        </div>
                        <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-purple-100 text-center card-interactive-lift">
                            <span className="block text-2xl sm:text-3xl font-extrabold text-[#4B1F6F]"><AnimatedCounter target={10} prefix="1:" suffix="" /></span>
                            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mt-1 block">Teacher Ratio</span>
                        </div>
                        <div className="p-4 rounded-2xl bg-[#FAF8F4] border border-purple-100 text-center card-interactive-lift">
                            <span className="block text-2xl sm:text-3xl font-extrabold text-[#D4A72C]"><AnimatedCounter target={100} prefix="" suffix="%" /></span>
                            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mt-1 block">Child Safety</span>
                        </div>
                    </div>

                    <div className="pt-2 flex flex-wrap gap-4 items-center">
                        <button className=" btn-gold" onClick={() => openModal("Play Group", "visit")}>
                            <i className="fa-solid fa-calendar-check text-xs"></i> Schedule Campus Tour
                        </button>
                        <Link to="/facilities" className="btn-outline-purple">
                            Explore Campus <i className="fa-solid fa-arrow-right text-xs ml-1"></i>
                        </Link>
                    </div>
                </div>

                {/* Right: High-Resolution Visual Composition with Floating Accent */}
                <div className="lg:col-span-6 relative reveal-on-scroll stagger-2">
                    <div className="relative mx-auto max-w-lg lg:max-w-none">
                        {/* Ambient backdrop glow */}
                        <div className="absolute -top-6 -right-6 w-48 h-48 bg-[#F3D98B]/30 rounded-3xl filter blur-xl"></div>
                        <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#4B1F6F]/10 rounded-full filter blur-xl"></div>

                        {/* Main Image */}
                        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white hero-img-glow img-zoom-container">
                            <img src="/assets/DSC_0898.jpg" alt="Ryans Academy classroom experience" className="w-full h-[400px] sm:h-[460px] object-cover" />
                        </div>

                        {/* Floating Floating Badge Pill */}
                        <div className="absolute -bottom-6 right-4 sm:-bottom-8 sm:right-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-purple-100 shadow-xl max-w-[280px] animate-float-gentle">
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded-xl bg-[#4B1F6F] text-white flex items-center justify-center font-bold flex-shrink-0">
                                    <i className="fa-solid fa-heart text-base text-[#D4A72C]"></i>
                                </div>
                                <div>
                                    <p className="font-extrabold text-xs text-[#4B1F6F] leading-tight">Child-First Pedagogy</p>
                                    <p className="text-[11px] text-gray-500 font-medium">Safe, joyful and nurturing spaces for every stage</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Section 2: Vision, Mission & Core Values with Interactive Value Cards */}
    <section className="py-16 lg:py-20 bg-[#FAF8F4] border-y border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 reveal-on-scroll">
                <span className="gold-badge mb-3">Guiding Principles</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B1F6F]">Vision, Mission & Core Values</h2>
                <p className="text-gray-600 text-sm sm:text-base mt-2">The compass that directs every lesson, interaction, and policy at Ryans Academy.</p>
            </div>

            {/* Vision & Mission Dual Pillars (Luxury Showcase) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Vision Card */}
                <div className="vision-mission-card reveal-on-scroll stagger-1 group">
                    <div className="vision-mission-accent bg-gradient-to-r from-[#D4A72C] via-[#F3D98B] to-[#E67E22]"></div>
                    <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#D4A72C]/10 rounded-full filter blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
                    
                    <div className="flex items-start justify-between gap-4 mb-4 relative z-10">
                        <div className="vision-mission-icon bg-gradient-to-br from-[#D4A72C] to-[#E67E22] text-white shadow-xl shadow-amber-500/30">
                            <i className="fa-solid fa-eye"></i>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#D4A72C] bg-[#FDF8E7] px-3.5 py-1 rounded-full border border-amber-200/60 shadow-sm">
                            Where We Are Headed
                        </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#4B1F6F] mb-3 group-hover:text-[#D4A72C] transition-colors relative z-10">Our Vision</h3>
                    <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed font-medium mb-6 relative z-10">
                        To be a premier center of transformative childhood education where every child is empowered to dream courageously, explore fearlessly, and shine as an empathetic, resilient global citizen grounded in timeless moral values.
                    </p>

                    <div className="pt-4 border-t border-amber-100/60 mt-auto flex flex-wrap items-center gap-3 relative z-10">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4B1F6F]">
                            <i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Courageous Dreamers
                        </span>
                        <span className="text-gray-300">•</span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4B1F6F]">
                            <i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Resilient Citizens
                        </span>
                        <span className="text-gray-300">•</span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4B1F6F]">
                            <i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Timeless Values
                        </span>
                    </div>
                </div>

                {/* Mission Card */}
                <div className="vision-mission-card reveal-on-scroll stagger-2 group">
                    <div className="vision-mission-accent bg-gradient-to-r from-[#4B1F6F] via-[#6B3A8D] to-[#834aa7]"></div>
                    <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#4B1F6F]/10 rounded-full filter blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>

                    <div className="flex items-start justify-between gap-4 mb-4 relative z-10">
                        <div className="vision-mission-icon bg-gradient-to-br from-[#4B1F6F] to-[#6B3A8D] text-white shadow-xl shadow-purple-900/30">
                            <i className="fa-solid fa-bullseye"></i>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#4B1F6F] bg-[#F1EAF7] px-3.5 py-1 rounded-full border border-purple-200/60 shadow-sm">
                            What We Do Every Day
                        </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#4B1F6F] mb-3 group-hover:text-[#6B3A8D] transition-colors relative z-10">Our Mission</h3>
                    <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed font-medium mb-6 relative z-10">
                        To cultivate joyful, hands-on learning through rigorous CBSE curriculum, child-centric Montessori autonomy, creative arts, and caring mentors within an exceptionally safe, modern, and inspiring school ecosystem.
                    </p>

                    <div className="pt-4 border-t border-purple-100/60 mt-auto flex flex-wrap items-center gap-3 relative z-10">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4B1F6F]">
                            <i className="fa-solid fa-circle-check text-[#D4A72C]"></i> CBSE Rigor
                        </span>
                        <span className="text-gray-300">•</span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4B1F6F]">
                            <i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Montessori Independence
                        </span>
                        <span className="text-gray-300">•</span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4B1F6F]">
                            <i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Nurturing Mentors
                        </span>
                    </div>
                </div>
            </div>

            {/* Core Values 4-Grid (Luxury Hover Animation) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Value 1 */}
                <div className="value-card-luxury reveal-on-scroll stagger-1 group">
                    <div className="academic-domain-accent bg-gradient-to-r from-[#E11D48] to-[#F43F5E]"></div>
                    <div className="value-icon bg-gradient-to-br from-[#E11D48] to-[#F43F5E] text-white shadow-md shadow-rose-500/25">
                        <i className="fa-solid fa-hand-holding-heart"></i>
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#E11D48] bg-rose-50 px-2 py-0.5 rounded-full inline-block mb-1.5 border border-rose-200/50 self-start">
                        Moral Foundation
                    </span>
                    <h4 className="font-extrabold text-base text-[#4B1F6F] mb-1.5 group-hover:text-[#E11D48] transition-colors">Integrity & Kindness</h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium mb-3 flex-grow">Treating peers and elders with deep empathy, truthfulness, and generous hearts in every circumstance.</p>
                    <div className="pt-2.5 border-t border-rose-50 mt-auto">
                        <span className="text-[11px] font-bold text-[#E11D48] inline-flex items-center gap-1">
                            <i className="fa-solid fa-check text-[10px]"></i> Empathy & Respect
                        </span>
                    </div>
                </div>

                {/* Value 2 */}
                <div className="value-card-luxury reveal-on-scroll stagger-2 group">
                    <div className="academic-domain-accent bg-gradient-to-r from-[#D4A72C] to-[#E67E22]"></div>
                    <div className="value-icon bg-gradient-to-br from-[#D4A72C] to-[#E67E22] text-white shadow-md shadow-amber-500/25">
                        <i className="fa-solid fa-lightbulb"></i>
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#D4A72C] bg-[#FDF8E7] px-2 py-0.5 rounded-full inline-block mb-1.5 border border-amber-200/50 self-start">
                        Inquiry & Growth
                    </span>
                    <h4 className="font-extrabold text-base text-[#4B1F6F] mb-1.5 group-hover:text-[#D4A72C] transition-colors">Fearless Curiosity</h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium mb-3 flex-grow">Encouraging children to ask "why", conduct hands-on trials, and view mistakes as stepping stones to mastery.</p>
                    <div className="pt-2.5 border-t border-amber-50 mt-auto">
                        <span className="text-[11px] font-bold text-[#D4A72C] inline-flex items-center gap-1">
                            <i className="fa-solid fa-check text-[10px]"></i> Questioning Spirit
                        </span>
                    </div>
                </div>

                {/* Value 3 */}
                <div className="value-card-luxury reveal-on-scroll stagger-3 group">
                    <div className="academic-domain-accent bg-gradient-to-r from-[#4B1F6F] to-[#6B3A8D]"></div>
                    <div className="value-icon bg-gradient-to-br from-[#4B1F6F] to-[#6B3A8D] text-white shadow-md shadow-purple-900/25">
                        <i className="fa-solid fa-award"></i>
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#4B1F6F] bg-[#F1EAF7] px-2 py-0.5 rounded-full inline-block mb-1.5 border border-purple-200/50 self-start">
                        Merit & Grit
                    </span>
                    <h4 className="font-extrabold text-base text-[#4B1F6F] mb-1.5 group-hover:text-[#6B3A8D] transition-colors">Personal Excellence</h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium mb-3 flex-grow">Inspiring each student to discover their unique strengths and achieve their personal best without unhealthy rivalry.</p>
                    <div className="pt-2.5 border-t border-purple-50 mt-auto">
                        <span className="text-[11px] font-bold text-[#4B1F6F] inline-flex items-center gap-1">
                            <i className="fa-solid fa-check text-[10px]"></i> Striving for Best
                        </span>
                    </div>
                </div>

                {/* Value 4 */}
                <div className="value-card-luxury reveal-on-scroll stagger-4 group">
                    <div className="academic-domain-accent bg-gradient-to-r from-[#059669] to-[#10B981]"></div>
                    <div className="value-icon bg-gradient-to-br from-[#059669] to-[#10B981] text-white shadow-md shadow-emerald-500/25">
                        <i className="fa-solid fa-face-smile"></i>
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#059669] bg-emerald-50 px-2 py-0.5 rounded-full inline-block mb-1.5 border border-emerald-200/50 self-start">
                        Happiness & Wonder
                    </span>
                    <h4 className="font-extrabold text-base text-[#4B1F6F] mb-1.5 group-hover:text-[#059669] transition-colors">Joyful Childhood</h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium mb-3 flex-grow">Preserving the innocence, laughter, and playful discovery that every child deserves during formative years.</p>
                    <div className="pt-2.5 border-t border-emerald-50 mt-auto">
                        <span className="text-[11px] font-bold text-[#059669] inline-flex items-center gap-1">
                            <i className="fa-solid fa-check text-[10px]"></i> Laughter & Play
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Section 3: The Ryans Learning Framework (4 Pillars) */}
    <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 reveal-on-scroll">
                <span className="purple-badge mb-3">Holistic Pedagogy</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B1F6F]">How We Educate Differently</h2>
                <p className="text-gray-600 text-sm sm:text-base mt-2">A balanced triad of academic excellence, sensory exploration, and emotional character.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Pillar 1: CBSE Academic Rigor */}
                <div className="premium-card p-8 flex flex-col justify-between card-interactive-lift reveal-on-scroll stagger-1">
                    <div>
                        <div className="w-12 h-12 rounded-2xl bg-[#F1EAF7] text-[#4B1F6F] flex items-center justify-center text-2xl mb-5">
                            <i className="fa-solid fa-graduation-cap text-[#D4A72C]"></i>
                        </div>
                        <h3 className="text-xl font-bold text-[#4B1F6F] mb-3">Structured CBSE Rigor</h3>
                        <p className="text-xs text-gray-600 leading-relaxed font-medium mb-4">
                            Aligned with India's premier academic board to ensure seamless continuity, strong mathematical reasoning, phonics-based language mastery, and global competitiveness.
                        </p>
                        <ul className="space-y-2 text-xs font-semibold text-gray-700">
                            <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Strong Literacy & Jolly Phonics</li>
                            <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Concept-Driven Mathematics</li>
                            <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Continuous Assessment & Feedback</li>
                        </ul>
                    </div>
                    <div className="pt-6 mt-6 border-t border-purple-50">
                        <Link to="/academics" className="text-xs font-bold text-[#4B1F6F] hover:text-[#D4A72C] transition flex items-center gap-1.5">
                            Learn About Curriculum <i className="fa-solid fa-arrow-right text-[10px]"></i>
                        </Link>
                    </div>
                </div>

                {/* Pillar 2: Montessori Independence */}
                <div className="premium-card p-8 flex flex-col justify-between card-interactive-lift reveal-on-scroll stagger-2">
                    <div>
                        <div className="w-12 h-12 rounded-2xl bg-[#FDF8E7] text-[#D4A72C] flex items-center justify-center text-2xl mb-5">
                            <i className="fa-solid fa-shapes text-[#4B1F6F]"></i>
                        </div>
                        <h3 className="text-xl font-bold text-[#4B1F6F] mb-3">Montessori Exploration</h3>
                        <p className="text-xs text-gray-600 leading-relaxed font-medium mb-4">
                            Self-directed activity, hands-on manipulative tools, and collaborative problem-solving empower children to make decisions with inner confidence and concentration.
                        </p>
                        <ul className="space-y-2 text-xs font-semibold text-gray-700">
                            <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Sensorial Development Apparatus</li>
                            <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Motor Precision & Coordination</li>
                            <li className="fa-solid fa-circle-check text-[#D4A72C] flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Autonomous Pace & Discovery</li>
                        </ul>
                    </div>
                    <div className="pt-6 mt-6 border-t border-purple-50">
                        <Link to="/programs" className="text-xs font-bold text-[#4B1F6F] hover:text-[#D4A72C] transition flex items-center gap-1.5">
                            Explore Class Stages <i className="fa-solid fa-arrow-right text-[10px]"></i>
                        </Link>
                    </div>
                </div>

                {/* Pillar 3: Life Skills & Creativity */}
                <div className="premium-card p-8 flex flex-col justify-between card-interactive-lift reveal-on-scroll stagger-3">
                    <div>
                        <div className="w-12 h-12 rounded-2xl bg-[#F1EAF7] text-[#4B1F6F] flex items-center justify-center text-2xl mb-5">
                            <i className="fa-solid fa-palette text-[#D4A72C]"></i>
                        </div>
                        <h3 className="text-xl font-bold text-[#4B1F6F] mb-3">Arts, Abacus & Sports</h3>
                        <p className="text-xs text-gray-600 leading-relaxed font-medium mb-4">
                            A complete human being requires emotional expression and physical vitality. We integrate Abacus mental math, classical and western dance, athletics, and theater.
                        </p>
                        <ul className="space-y-2 text-xs font-semibold text-gray-700">
                            <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Dual-Brain Abacus Program</li>
                            <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Velocity Fest Annual Athletics</li>
                            <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> RYANOVA Cultural Stage Nights</li>
                        </ul>
                    </div>
                    <div className="pt-6 mt-6 border-t border-purple-50">
                        <Link to="/activities" className="text-xs font-bold text-[#4B1F6F] hover:text-[#D4A72C] transition flex items-center gap-1.5">
                            View All Activities <i className="fa-solid fa-arrow-right text-[10px]"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Section 4: Leadership Spotlight (Mrs. Lynda Jennifer) */}
    <section className="py-20 bg-gradient-to-b from-[#FAF8F4] via-white to-[#FAF8F4] relative overflow-hidden border-t border-purple-100" id="leadership">
        {/* Ambient Decorative Blooms */}
        <div className="absolute top-1/3 -left-24 w-80 h-80 bg-[#D4A72C]/10 rounded-full filter blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-24 w-80 h-80 bg-[#4B1F6F]/10 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="relative rounded-[2.5rem] p-8 sm:p-12 lg:p-14 bg-gradient-to-br from-white via-[#FAF8F4] to-[#F1EAF7]/40 border-2 border-purple-100 shadow-2xl overflow-hidden card-interactive-lift reveal-on-scroll">
                {/* Top Decorative Gold Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#4B1F6F] via-[#D4A72C] to-[#4B1F6F]"></div>

                {/* Watermark Quotation Graphic */}
                <div className="absolute -top-6 -right-6 text-[#D4A72C]/10 text-9xl font-serif select-none pointer-events-none">
                    <i className="fa-solid fa-quote-right"></i>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    {/* Photo Column: Luxury Gold Frame & Dynamic Floating Aura */}
                    <div className="lg:col-span-4 flex flex-col items-center text-center">
                        <div className="relative inline-block mx-auto mb-6">
                            {/* Dual-Ring Luxury Frame with Ambient Glow */}
                            <div className="leadership-aura-ring animate-float-gentle">
                                <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-full overflow-hidden border-4 border-white shadow-inner bg-gradient-to-b from-purple-50 to-white">
                                    <img src="/assets/founder_cutout.png" alt="Mrs. Lynda Jennifer - Principal & Correspondent" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
                                </div>
                            </div>

                            {/* "Leadership Desk" Floating Pill */}
                            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#4B1F6F] to-[#6B3A8D] text-white py-1.5 px-5 rounded-full shadow-xl border border-purple-300/30 whitespace-nowrap flex items-center gap-1.5">
                                <i className="fa-solid fa-feather-pointed text-[#F3D98B] text-xs"></i>
                                <span className="text-xs font-bold text-[#F3D98B] tracking-wide">Leadership Desk</span>
                            </div>

                            {/* Verified Vision Badge */}
                            <div className="absolute top-2 right-0 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-lg border border-[#D4A72C]/40 flex items-center gap-1.5">
                                <i className="fa-solid fa-award text-[#D4A72C] text-xs"></i>
                                <span className="text-[10px] font-extrabold text-[#4B1F6F] tracking-tight">20+ Yrs Vision</span>
                            </div>
                        </div>

                        {/* Name & Credentials */}
                        <h3 className="font-heading font-black text-2xl text-[#4B1F6F] tracking-tight">Mrs. Lynda Jennifer</h3>
                        <p className="text-xs font-extrabold text-[#D4A72C] uppercase tracking-[0.18em] mt-1">Principal & Correspondent</p>
                        
                        <div className="flex items-center justify-center flex-wrap gap-2 mt-3">
                            <span className="bg-[#F1EAF7] text-[#4B1F6F] text-[10px] font-extrabold px-3 py-1 rounded-full border border-purple-200/50">M.A., M.Ed.</span>
                            <span className="bg-[#FDF8E7] text-[#8a6813] text-[10px] font-extrabold px-3 py-1 rounded-full border border-amber-200/50">Child Development Mentor</span>
                        </div>
                    </div>

                    {/* Narrative Column: Visionary Quote & Guiding Principles */}
                    <div className="lg:col-span-8 space-y-6">
                        {/* Eyebrow Badge */}
                        <div className="flex items-center gap-2">
                            <span className="gold-badge animate-pulse-subtle inline-flex items-center gap-1.5">
                                <i className="fa-solid fa-crown text-[10px]"></i> Visionary Leadership
                            </span>
                            <span className="text-xs text-purple-900/40 font-semibold">• Ryans Academy Chennai</span>
                        </div>

                        {/* Highlighted Quote Block */}
                        <blockquote className="border-l-4 border-[#D4A72C] pl-5 sm:pl-6 my-2 bg-gradient-to-r from-[#FDF8E7]/50 via-transparent to-transparent py-2 rounded-r-2xl">
                            <p className="font-serif italic text-2xl sm:text-3xl text-[#4B1F6F] font-bold leading-snug tracking-tight">
                                "Every child is endowed with <span className="text-[#D4A72C] underline decoration-[#D4A72C]/40 underline-offset-4">boundless potential</span> waiting to be lovingly awakened."
                            </p>
                        </blockquote>

                        {/* Prose Paragraphs */}
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                            Education is not merely preparing a child for examinations; it is about preparing a child for life. When we give young minds the safety to explore, the creative freedom to question, and the warmth of genuine encouragement, their potential becomes limitless.
                        </p>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                            Under Mrs. Lynda Jennifer's dedicated stewardship, Ryans Academy has consistently set the benchmark for holistic child development in Chennai, seamlessly combining modern pedagogical standards with deep compassion and community trust.
                        </p>

                        {/* 3 Micro-Feature Badges */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/90 border border-purple-100/80 shadow-sm">
                                <div className="w-9 h-9 rounded-xl bg-purple-50 text-[#4B1F6F] flex items-center justify-center text-sm flex-shrink-0">
                                    <i className="fa-solid fa-heart"></i>
                                </div>
                                <div>
                                    <p className="text-xs font-extrabold text-[#4B1F6F] leading-tight">Nurturing Care</p>
                                    <p className="text-[10px] text-gray-500 font-medium">100% Loving Climate</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/90 border border-purple-100/80 shadow-sm">
                                <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#D4A72C] flex items-center justify-center text-sm flex-shrink-0">
                                    <i className="fa-solid fa-compass"></i>
                                </div>
                                <div>
                                    <p className="text-xs font-extrabold text-[#4B1F6F] leading-tight">Holistic Growth</p>
                                    <p className="text-[10px] text-gray-500 font-medium">CBSE & Montessori</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/90 border border-purple-100/80 shadow-sm">
                                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-sm flex-shrink-0">
                                    <i className="fa-solid fa-shield-halved"></i>
                                </div>
                                <div>
                                    <p className="text-xs font-extrabold text-[#4B1F6F] leading-tight">Trusted Benchmark</p>
                                    <p className="text-[10px] text-gray-500 font-medium">Community Endorsed</p>
                                </div>
                            </div>
                        </div>

                        {/* Signature & Interactive Action Buttons */}
                        <div className="pt-4 border-t border-purple-100/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div>
                                    <p className="font-serif italic font-bold text-xl text-[#4B1F6F] leading-tight">Lynda Jennifer</p>
                                    <p className="text-[10px] text-[#D4A72C] uppercase tracking-widest font-extrabold">Founder & Principal</p>
                                </div>
                                <span className="text-purple-200 hidden sm:inline">|</span>
                                <span className="text-[11px] text-gray-500 font-medium hidden sm:flex items-center gap-1">
                                    <i className="fa-solid fa-circle-check text-emerald-500 text-xs"></i> Official Address
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-3 items-center">
                                <Link to="/principal" className="btn-gold text-xs py-2.5 px-5 shadow-sm">
                                    Read Complete Message <i className="fa-solid fa-arrow-right text-xs ml-1"></i>
                                </Link>
                                <button className=" btn-outline-gold text-xs py-2.5 px-5" onClick={() => openModal("Play Group", "visit")}>
                                    <i className="fa-regular fa-handshake"></i> Meet the Principal
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Section 5: Admissions Invitation Banner */}
    <section className="py-14 bg-gradient-to-r from-[#4B1F6F] via-[#6B3A8D] to-[#4B1F6F] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 reveal-on-scroll">
            <span className="bg-[#D4A72C] text-[#3b2408] text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                Admissions Open 2026-27
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Experience the Ryans Difference Firsthand</h2>
            <p className="text-purple-100 text-sm sm:text-base font-medium leading-relaxed">
                Take a guided walk through our classrooms, playgrounds, and activity centers. Let our educators show you how your child will flourish.
            </p>
            <div className="pt-3 flex flex-wrap justify-center gap-4">
                <button className=" btn-gold text-sm" onClick={() => openModal("Play Group", "enquiry")}>
                    <i className="fa-solid fa-paper-plane"></i> Enquire Now
                </button>
                <button className=" btn-outline-gold text-sm border-white text-white hover:bg-white hover:text-[#4B1F6F]" onClick={() => openModal("Play Group", "visit")}>
                    <i className="fa-solid fa-calendar-check"></i> Book Campus Tour
                </button>
            </div>
        </div>
    </section>

    {/* Footer */}
    </div>
  );
}
