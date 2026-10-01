import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import AnimatedCounter from '../components/AnimatedCounter';

export default function JuniorKgPage() {
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
    <div className="juniorkgpage-page">
      {/* Mobile Drawer Container */}
    <div id="mobile-drawer" className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl z-50 transform translate-x-full transition-transform duration-300 ease-in-out lg:hidden flex flex-col p-6">
        <div className="flex justify-between items-center mb-8 border-b pb-4">
            <span className="font-display text-xl text-brand-purple font-bold">RYANS MENU</span>
            <button id="close-drawer-btn" className="text-gray-500 hover:text-brand-purple p-1"><i className="fa-solid fa-xmark text-2xl"></i></button>
        </div>
        <nav className="flex flex-col gap-4 font-bold text-sm text-gray-700">
            <Link to="/" className="hover:text-brand-purple py-1 border-b border-gray-50">Home</Link>
            <Link to="/about" className="hover:text-brand-purple py-1 border-b border-gray-50"><span className="whitespace-nowrap inline-block">About Us</span></Link>
            <div className="flex flex-col gap-2 py-1">
                <span className="text-brand-purple font-black uppercase text-[10px] tracking-wider">Programs</span>
                <Link to="/daycare" className="pl-3 hover:text-brand-purple">Day Care (Infants)</Link>
                <Link to="/playgroup" className="pl-3 hover:text-brand-purple">Play Group (Toddlers)</Link>
                <Link to="/nursery" className="pl-3 hover:text-brand-purple">Nursery (2-3 Years)</Link>
                <Link to="/juniorkg" className="pl-3 text-brand-purple font-black">Junior KG (3-4 Years)</Link>
                <Link to="/seniorkg" className="pl-3 hover:text-brand-purple">Senior KG (4-5 Years)</Link>
            </div>
            <Link to="/facilities" className="hover:text-brand-purple py-1 border-b border-gray-50">Facilities</Link>
            <Link to="/#testimonials" className="hover:text-brand-purple py-1 border-b border-gray-50">Testimonials</Link>
            <Link to="/contact" className="hover:text-brand-purple py-1">Admission</Link>
        </nav>
    </div>
    <div id="mobile-overlay" className="fixed inset-0 bg-black/30 z-40 hidden transition-opacity lg:hidden"></div>

    {/* Junior KG Page Hero (Dynamic Video Background) */}
    <section className="reveal-on-scroll relative py-24 px-6 sm:px-16 overflow-hidden border-b-8 border-brand-yellow">
        {/* Widescreen Video/GIF Background Layer */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img src="/assets/gif/hero.gif" alt="Junior KG Classroom Loop" className="w-full h-full object-cover scale-105 filter blur-[1px]" />
        </div>
        {/* Premium Dark Purple Backdrop Overlay for High Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#381c65]/90 via-[#4c2882]/85 to-[#381c65]/90 z-10"></div>

        {/* Floating playful particles */}
        <div className="absolute top-[15%] left-[8%] text-brand-yellow opacity-40 text-3xl animate-float-slow z-20"><i className="fa-solid fa-shapes"></i></div>
        <div className="absolute bottom-[15%] right-[8%] text-[#fa8295] opacity-40 text-4xl animate-float-medium z-20"><i className="fa-solid fa-face-smile"></i></div>

        <div className="max-w-[1000px] w-full mx-auto text-center relative z-20">
            <span className="font-script text-brand-yellow text-[3.2rem] leading-none mb-3 inline-block transform -rotate-1">Learning & Growing</span>
            <h2 className="font-display text-4xl sm:text-6xl text-white font-black uppercase tracking-tight leading-none mb-6">
                Junior KG
            </h2>
            {/* Playful divider */}
            <svg className="w-36 h-3 text-brand-yellow fill-none stroke-current my-6 mx-auto" strokeWidth="3.5" strokeLinecap="round" viewBox="0 0 100 10">
                <path d="M5 5 Q20 1 35 5 T65 5 T95 5" />
            </svg>
            <p className="text-purple-100 font-semibold text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                Our Three-Year-Old Program is designed to meet the needs of inquisitive three-year-olds. They watch and listen to everything that goes on around them, asking questions about the things they see and do not understand.
            </p>
        </div>
    </section>

    {/* NEW SECTION: Junior KG Focus */}
    <section className="reveal-on-scroll max-w-[1340px] w-full mx-auto px-6 sm:px-16 py-20 relative z-10">
        <div className="text-center mb-16">
            <span className="font-script text-[#4facfe] text-3xl sm:text-4xl inline-block mb-2">Our Approach</span>
            <h3 className="font-display text-4xl sm:text-5xl text-brand-purple font-black uppercase tracking-tight">Junior KG Focus</h3>
            {/* Playful divider */}
            <svg className="w-28 h-3 mx-auto mt-4 text-[#4facfe] fill-none stroke-current" strokeWidth="3" strokeLinecap="round" viewBox="0 0 100 10">
                <path d="M5 5 Q20 1 35 5 T65 5 T95 5" />
            </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Advantage 1 */}
            <div className="bg-gradient-to-br from-white to-blue-50/50 border border-blue-100 rounded-[2.5rem] p-8 shadow-[0_15px_30px_rgba(79,172,254,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(79,172,254,0.08)] transition-all duration-300 text-center group relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-500/5 rounded-full -z-10 group-hover:scale-125 transition-transform duration-500"></div>
                <div className="w-16 h-16 mx-auto bg-[#4facfe] rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-md transform group-hover:rotate-6 transition-transform">
                    <i className="fa-solid fa-book-open"></i>
                </div>
                <h4 className="font-display text-xl text-brand-purple font-black mb-3">Phonics & Reading</h4>
                <p className="text-gray-500 font-semibold text-[13px] leading-relaxed">Introducing letters, phonics, and early reading skills through engaging stories.</p>
            </div>

            {/* Advantage 2 */}
            <div className="bg-gradient-to-br from-white to-teal-50/50 border border-teal-100 rounded-[2.5rem] p-8 shadow-[0_15px_30px_rgba(20,184,166,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(20,184,166,0.08)] transition-all duration-300 text-center group relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-teal-500/5 rounded-full -z-10 group-hover:scale-125 transition-transform duration-500"></div>
                <div className="w-16 h-16 mx-auto bg-teal-500 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-md transform group-hover:-rotate-6 transition-transform">
                    <i className="fa-solid fa-calculator"></i>
                </div>
                <h4 className="font-display text-xl text-brand-purple font-black mb-3">Math & Logic</h4>
                <p className="text-gray-500 font-semibold text-[13px] leading-relaxed">Understanding numbers, counting, and basic math concepts through hands-on play.</p>
            </div>

            {/* Advantage 3 */}
            <div className="bg-gradient-to-br from-white to-purple-50/50 border border-purple-100 rounded-[2.5rem] p-8 shadow-[0_15px_30px_rgba(168,85,247,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(168,85,247,0.08)] transition-all duration-300 text-center group relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-purple-500/5 rounded-full -z-10 group-hover:scale-125 transition-transform duration-500"></div>
                <div className="w-16 h-16 mx-auto bg-purple-500 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-md transform group-hover:rotate-6 transition-transform">
                    <i className="fa-solid fa-palette"></i>
                </div>
                <h4 className="font-display text-xl text-brand-purple font-black mb-3">Creative Arts</h4>
                <p className="text-gray-500 font-semibold text-[13px] leading-relaxed">Encouraging limitless imagination through art, music, and interactive role-playing.</p>
            </div>

            {/* Advantage 4 */}
            <div className="bg-gradient-to-br from-white to-yellow-50/50 border border-yellow-100 rounded-[2.5rem] p-8 shadow-[0_15px_30px_rgba(234,179,8,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(234,179,8,0.08)] transition-all duration-300 text-center group relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-yellow-500/5 rounded-full -z-10 group-hover:scale-125 transition-transform duration-500"></div>
                <div className="w-16 h-16 mx-auto bg-yellow-400 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-md transform group-hover:-rotate-6 transition-transform">
                    <i className="fa-solid fa-users"></i>
                </div>
                <h4 className="font-display text-xl text-brand-purple font-black mb-3">Social Independence</h4>
                <p className="text-gray-500 font-semibold text-[13px] leading-relaxed">Building self-confidence, sharing habits, and teamwork in a structured environment.</p>
            </div>
        </div>
    </section>

    {/* NEW SECTION: Daily Routine (Timeline Theme) */}
    <section className="reveal-on-scroll bg-gradient-to-b from-blue-50/50 to-white py-20 relative z-10 overflow-hidden">
        <div className="max-w-[1000px] w-full mx-auto px-6 sm:px-16">
            <div className="text-center mb-16">
                <span className="font-script text-blue-500 text-3xl sm:text-4xl inline-block mb-2">Step by Step</span>
                <h3 className="font-display text-4xl sm:text-5xl text-brand-purple font-black uppercase tracking-tight mb-4">Junior KG Routine</h3>
            </div>
            
            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-blue-200 before:to-transparent">
                
                {/* Timeline Item 1 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    {/* Icon */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-white text-sm z-10">
                        <i className="fa-solid fa-sun"></i>
                    </div>
                    {/* Card */}
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-[2rem] shadow-sm border border-blue-50 group-hover:-translate-y-1 transition-transform duration-300 card-interactive-lift">
                        <div className="flex flex-col mb-1">
                            <span className="text-blue-500 font-bold text-xs uppercase tracking-wider mb-1">9:00 AM</span>
                            <h4 className="font-display text-lg text-brand-purple font-black">Arrival & Phonics</h4>
                        </div>
                        <p className="text-gray-500 font-semibold text-sm leading-relaxed">Morning welcome, alphabet songs, and introducing fun phonic sounds.</p>
                    </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    {/* Icon */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-teal-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-white text-sm z-10">
                        <i className="fa-solid fa-shapes"></i>
                    </div>
                    {/* Card */}
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-[2rem] shadow-sm border border-teal-50 group-hover:-translate-y-1 transition-transform duration-300 card-interactive-lift">
                        <div className="flex flex-col mb-1">
                            <span className="text-teal-500 font-bold text-xs uppercase tracking-wider mb-1">10:00 AM</span>
                            <h4 className="font-display text-lg text-brand-purple font-black">Math & Logic Play</h4>
                        </div>
                        <p className="text-gray-500 font-semibold text-sm leading-relaxed">Counting games, sorting objects, and shape recognition activities.</p>
                    </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    {/* Icon */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-orange-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-white text-sm z-10">
                        <i className="fa-solid fa-apple-whole"></i>
                    </div>
                    {/* Card */}
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-[2rem] shadow-sm border border-orange-50 group-hover:-translate-y-1 transition-transform duration-300 card-interactive-lift">
                        <div className="flex flex-col mb-1">
                            <span className="text-orange-400 font-bold text-xs uppercase tracking-wider mb-1">11:30 AM</span>
                            <h4 className="font-display text-lg text-brand-purple font-black">Lunch & Quiet Time</h4>
                        </div>
                        <p className="text-gray-500 font-semibold text-sm leading-relaxed">Nutritious meals followed by relaxing storytime and rest.</p>
                    </div>
                </div>

                {/* Timeline Item 4 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    {/* Icon */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-purple-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-white text-sm z-10">
                        <i className="fa-solid fa-paintbrush"></i>
                    </div>
                    {/* Card */}
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-[2rem] shadow-sm border border-purple-50 group-hover:-translate-y-1 transition-transform duration-300 card-interactive-lift">
                        <div className="flex flex-col mb-1">
                            <span className="text-purple-500 font-bold text-xs uppercase tracking-wider mb-1">1:00 PM</span>
                            <h4 className="font-display text-lg text-brand-purple font-black">Creative Arts & Dismissal</h4>
                        </div>
                        <p className="text-gray-500 font-semibold text-sm leading-relaxed">Painting, crafting, and a fun goodbye circle before heading home.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    {/* SECTION 2: Interactive Fun - Alphabet Hunt (New UI) */}
    <section className="reveal-on-scroll max-w-[1240px] w-full mx-auto px-6 sm:px-16 py-16 relative z-10">
        {/* Title Area */}
        <div className="text-center mb-10">
            <span className="font-script text-[#fa8295] text-3xl">Interactive Fun</span>
            <h3 className="font-display text-4xl sm:text-5xl text-brand-purple font-black uppercase mt-1 mb-3">Alphabet Hunt Adventure</h3>
            <p className="text-gray-500 text-sm sm:text-base font-medium">Help find all the matching letters! Tap them before they float away.</p>
        </div>

        

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-[1100px] mx-auto">
            {/* Left Side: Game Canvas (7 cols) */}
            <div className="lg:col-span-7 xl:col-span-8">
                <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-blue-50 p-2 sm:p-3 rounded-[2.5rem] shadow-sm">
                    <div className="bg-[#fcfaf7] rounded-[2rem] border border-purple-100/50 h-[400px] relative overflow-hidden flex flex-col p-6">
                        
                        {/* Top Bar inside Canvas */}
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 flex justify-between items-center gap-4 w-full px-6 max-w-sm z-20">
                            <div className="flex-1 bg-blue-100 text-blue-600 font-bold py-2.5 px-6 rounded-full text-center border-2 border-blue-400 shadow-sm whitespace-nowrap text-sm sm:text-base" id="game-target-pill">
                                Find the Letter!
                            </div>
                            <div className="bg-purple-100 text-purple-600 font-bold py-2.5 px-4 rounded-full border-2 border-purple-200 flex items-center justify-center gap-1 shadow-sm w-20 shrink-0">
                                ⭐ <span id="game-stars">0</span>
                            </div>
                        </div>
                        
                        {/* Game Board */}
                        <div id="game-board" className="w-full h-full relative mt-12 z-10">
                            {/* Bubbles injected here */}
                        </div>

                        {/* Reward Screen inside Canvas */}
                        <div id="game-reward" className="hidden absolute inset-0 z-30 flex-col items-center justify-center bg-brand-bg/95 backdrop-blur-sm animate-pop-in rounded-[2rem]">
                            {/* Dynamic content */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Learn & Play Info Box (5 cols) */}
            <div className="lg:col-span-5 xl:col-span-4">
                <div className="bg-white rounded-[2rem] p-8 shadow-[0_10px_40px_rgb(0,0,0,0.05)] border border-purple-50 h-full flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-xl bg-blue-500 text-white flex items-center justify-center font-black text-[10px] tracking-widest shadow-md">
                            abc
                        </div>
                        <h4 className="font-display text-brand-purple text-xl font-black">Play & Learn Letters</h4>
                    </div>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed mb-4">
                        Alphabet Hunt is a playful sensory game built specifically for our Junior KG kids to learn the alphabet in an engaging way.
                    </p>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed mb-8">
                        Tapping the correct letters helps children build <strong className="text-brand-purple">visual association</strong>, <strong className="text-orange-500">hand-eye coordination</strong>, and early vocabulary.
                    </p>
                    
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                        <span className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-purple-50 text-purple-600 uppercase tracking-wider flex items-center gap-1"><span className="opacity-50">🔤</span> LETTER MATCH</span>
                        <span className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-rose-50 text-rose-600 uppercase tracking-wider flex items-center gap-1"><span className="opacity-50">👆</span> ACTIVE TAPS</span>
                        <span className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 uppercase tracking-wider flex items-center gap-1"><span className="opacity-50">🎯</span> VOCABULARY</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* SECTION 3: Developmental Phases (Cloud Cards Carousel) */}
    {/* SECTION 3: Developmental Phases (Milestones) */}
    <section className="reveal-on-scroll max-w-[1340px] w-full mx-auto px-6 sm:px-16 py-24 relative overflow-hidden bg-brand-bg">
        
        {/* Decorative colored waves at the bottom background */}
        <div className="absolute bottom-0 inset-x-0 h-24 w-full opacity-60 z-0 pointer-events-none flex items-end">
            <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
                <path d="M0,60 C360,110 720,20 1080,70 C1260,95 1350,75 1440,60 L1440,120 L0,120 Z" fill="#FAF5FF" />
                <path d="M0,75 C360,125 720,35 1080,85 C1260,110 1350,90 1440,75 L1440,120 L0,120 Z" fill="#FFFBEB" opacity="0.75" />
                <path d="M0,90 C360,140 720,50 1080,100 C1260,125 1350,105 1440,90 L1440,120 L0,120 Z" fill="#F0FDF4" opacity="0.6" />
                <path d="M0,105 C360,155 720,65 1080,115 C1260,140 1350,120 1440,105 L1440,120 L0,120 Z" fill="#FFF5F5" opacity="0.4" />
            </svg>
        </div>

        {/* Upper Grid: Title and Widescreen Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10 mb-16">
            {/* Left Side: Title */}
            <div className="lg:col-span-5 text-center lg:text-left">
                <span className="font-script text-[#fa8295] text-[2.4rem] block mb-1">Milestones &amp; Growth</span>
                <h3 className="font-display text-3xl sm:text-4xl text-brand-purple font-black uppercase leading-tight">
                    Development &amp; Milestones
                </h3>
                <svg className="w-24 h-3 text-[#fa8295] fill-none stroke-current my-4 mx-auto lg:mx-0" strokeWidth="3" strokeLinecap="round" viewBox="0 0 100 10">
                    <path d="M5 5 Q20 1 35 5 T65 5 T95 5" />
                </svg>
                <p className="text-gray-500 text-sm font-semibold leading-relaxed max-w-md mx-auto lg:mx-0">
                    Nurturing cooperative play, expanding vocabularies, and sparking vivid imaginations.
                </p>
            </div>
            
            {/* Right Side: Big, Widescreen Junior KG Image */}
            <div className="lg:col-span-7 flex justify-center">
                <div className="rounded-[45%_55%_45%_55%_/_50%_50%_40%_40%] overflow-hidden border-8 border-white shadow-2xl w-full max-w-xl h-64 md:h-72 bg-white relative">
                    <img src="/assets/juniorkg_play.jpg" alt="Junior KG Children Playing" className="w-full h-full object-cover hover:scale-[1.02] transition duration-500" />
                </div>
            </div>
        </div>

        {/* Carousel Row with Scrapbook Cards */}
        <div className="relative z-10 max-w-6xl mx-auto mt-12 pb-8">
            
             {/* Cards Grid / Carousel Track */}
            <div id="curriculum-carousel-track" className="flex lg:grid lg:grid-cols-4 gap-8 w-full overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-none scroll-smooth relative z-10 py-6 px-4 items-stretch justify-items-center">
                
                {/* Card 1: Cooperative Play (Purple Theme) */}
                <div className="snap-center shrink-0 w-[290px] sm:w-[310px] lg:w-full max-w-[320px] bg-white border-2 border-dashed border-purple-300 rounded-[2.5rem] p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center relative lg:translate-y-4 h-full">
                    {/* Washi Tape */}
                    <div className="absolute -top-3 bg-purple-100 text-purple-700 text-[10px] font-black tracking-widest px-6 py-1.5 rotate-[-3deg] uppercase rounded shadow-sm border border-purple-200/50">
                        Milestone 01
                    </div>
                    
                    {/* Icon / Number Circle */}
                    <div className="w-16 h-16 rounded-full bg-purple-50 border-2 border-purple-200 flex items-center justify-center text-brand-purple text-2xl font-black mb-4 shadow-inner mt-4">
                        <i className="fa-solid fa-users"></i>
                    </div>
                    
                    <h4 className="font-display text-brand-purple text-lg font-black mb-3">Cooperative Play</h4>
                    <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
                        Begin to develop cooperative social skills, sharing toys, taking turns, and learning to tolerate minor delays in gratification.
                    </p>
                </div>

                {/* Card 2: Imagination (Yellow Theme) */}
                <div className="snap-center shrink-0 w-[290px] sm:w-[310px] lg:w-full max-w-[320px] bg-white border-2 border-dashed border-amber-300 rounded-[2.5rem] p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center relative lg:-translate-y-4 h-full">
                    {/* Washi Tape */}
                    <div className="absolute -top-3 bg-amber-100 text-amber-850 text-[10px] font-black tracking-widest px-6 py-1.5 rotate-[3deg] uppercase rounded shadow-sm border border-amber-200/50">
                        Milestone 02
                    </div>
                    
                    {/* Icon / Number Circle */}
                    <div className="w-16 h-16 rounded-full bg-amber-50 border-2 border-amber-200 flex items-center justify-center text-amber-600 text-2xl font-black mb-4 shadow-inner mt-4">
                        <i className="fa-solid fa-wand-magic-sparkles"></i>
                    </div>
                    
                    <h4 className="font-display text-amber-700 text-lg font-black mb-3">Imagination</h4>
                    <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
                        Extremely creative. Enjoy making up fun stories, pretending, role-playing, and acting out books or television characters.
                    </p>
                </div>

                {/* Card 3: Adventurous (Green Theme) */}
                <div className="snap-center shrink-0 w-[290px] sm:w-[310px] lg:w-full max-w-[320px] bg-white border-2 border-dashed border-green-300 rounded-[2.5rem] p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center relative lg:translate-y-4 h-full">
                    {/* Washi Tape */}
                    <div className="absolute -top-3 bg-green-100 text-green-800 text-[10px] font-black tracking-widest px-6 py-1.5 rotate-[-2deg] uppercase rounded shadow-sm border border-green-200/50">
                        Milestone 03
                    </div>
                    
                    {/* Icon / Number Circle */}
                    <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center text-green-600 text-2xl font-black mb-4 shadow-inner mt-4">
                        <i className="fa-solid fa-compass"></i>
                    </div>
                    
                    <h4 className="font-display text-green-700 text-lg font-black mb-3">Adventurous</h4>
                    <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
                        Highly curious about objects, asking questions about everything they see, and trying out exciting activities.
                    </p>
                </div>

                {/* Card 4: Cooperative (Pink Theme) */}
                <div className="snap-center shrink-0 w-[290px] sm:w-[310px] lg:w-full max-w-[320px] bg-white border-2 border-dashed border-rose-300 rounded-[2.5rem] p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center relative lg:-translate-y-4 h-full">
                    {/* Washi Tape */}
                    <div className="absolute -top-3 bg-rose-100 text-rose-800 text-[10px] font-black tracking-widest px-6 py-1.5 rotate-[2deg] uppercase rounded shadow-sm border border-rose-200/50">
                        Milestone 04
                    </div>
                    
                    {/* Icon / Number Circle */}
                    <div className="w-16 h-16 rounded-full bg-rose-50 border-2 border-rose-200 flex items-center justify-center text-rose-600 text-2xl font-black mb-4 shadow-inner mt-4">
                        <i className="fa-solid fa-face-smile-beam"></i>
                    </div>
                    
                    <h4 className="font-display text-rose-700 text-lg font-black mb-3">Cooperative</h4>
                    <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
                        Feel a strong need to please adults, cooperatively following routines and imitating daily behavior/vocabulary patterns.
                    </p>
                </div>

            </div>
        </div>
    </section>

    {/* SECTION 4: Modern Bento Box Curriculum Showcase */}
    <section className="reveal-on-scroll py-24 relative z-10 overflow-hidden" style={{ backgroundImage: 'url(\'/assets/juniorkg_bento_bg.jpg\')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        {/* Glassmorphism overlay reduced for better image visibility */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] z-0"></div>
        
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/30 rounded-full blur-[80px] pointer-events-none z-0"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-300/30 rounded-full blur-[100px] pointer-events-none z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-300/20 rounded-full blur-[120px] pointer-events-none skew-y-12 z-0"></div>
        
        <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-16 relative z-10">
            
            {/* Section Header */}
            <div className="text-center mb-16 relative">
                <span className="inline-block px-4 py-1.5 bg-white shadow-sm border border-gray-100 rounded-full text-[#fa8295] font-bold text-sm tracking-widest uppercase mb-4">
                    <i className="fa-solid fa-sparkles mr-1"></i> Our Curriculum
                </span>
                <h3 className="font-display text-4xl sm:text-5xl text-slate-800 font-black tracking-tight mb-4">
                    Junior KG <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Adventures</span>
                </h3>
                <p className="text-slate-500 text-base sm:text-lg font-medium max-w-2xl mx-auto">
                    A modern, structured, and playful learning ecosystem designed to nurture every milestone of your child's developing mind.
                </p>
            </div>

            {/* Bento Box Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                
                {/* Tile 1: KG Readiness (Wide Card) */}
                <div className="md:col-span-2 bg-gradient-to-br from-purple-100 to-white backdrop-blur-xl border-4 border-white/60 rounded-[2.5rem] p-8 shadow-[0_10px_30px_rgb(168,85,247,0.15)] hover:shadow-[0_20px_40px_rgb(168,85,247,0.25)] transition-all duration-500 group relative overflow-hidden flex flex-col sm:flex-row items-center gap-8 cursor-pointer hover:-translate-y-2">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-300/30 rounded-full blur-2xl group-hover:bg-purple-400/40 transition duration-500 pointer-events-none"></div>
                    <div className="absolute bottom-4 right-4 opacity-10 text-8xl rotate-12 pointer-events-none">🎒</div>
                    
                    <div className="flex-shrink-0 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white flex items-center justify-center shadow-[0_8px_20px_rgb(168,85,247,0.2)] group-hover:scale-110 group-hover:rotate-[10deg] transition-all duration-500 border-4 border-purple-200 overflow-hidden">
                        <img src="/assets/jkg_readiness.jpg" alt="KG Readiness" className="w-full h-full object-cover mix-blend-multiply" />
                    </div>
                    <div className="flex-1 text-center sm:text-left relative z-10">
                        <span className="inline-block px-4 py-1.5 bg-purple-500 text-white text-xs font-black uppercase tracking-widest rounded-full mb-3 shadow-md">Adventure 01</span>
                        <h4 className="font-display text-purple-900 text-3xl font-black mb-3">KG Readiness &amp; Transition</h4>
                        <p className="text-purple-700/80 text-sm sm:text-base font-semibold leading-relaxed">
                            Preparing little ones for a smooth transition from playgroups to formal schooling with fun daily routines, emotional guidance, and confidence building.
                        </p>
                    </div>
                </div>

                {/* Tile 2: Language & Phonics (Tall Card) */}
                <div className="md:col-span-1 md:row-span-2 bg-gradient-to-b from-amber-300 to-orange-400 border-4 border-white/60 rounded-[2.5rem] p-8 shadow-[0_10px_30px_rgb(245,158,11,0.2)] hover:shadow-[0_20px_40px_rgb(245,158,11,0.3)] transition-all duration-500 group relative overflow-hidden flex flex-col justify-between text-white cursor-pointer hover:-translate-y-2">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.4),transparent_70%)] pointer-events-none"></div>
                    <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/20 rounded-full blur-xl pointer-events-none"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 text-9xl -rotate-12 pointer-events-none font-bold">A B C</div>
                    
                    <div>
                        <div className="flex justify-between items-start mb-8 relative z-10">
                            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-[0_8px_20px_rgb(0,0,0,0.1)] border-2 border-white/50 group-hover:scale-110 group-hover:-rotate-[10deg] transition-all duration-500 overflow-hidden">
                                <img src="/assets/jkg_language.jpg" alt="Language" className="w-full h-full object-cover mix-blend-multiply p-1" />
                            </div>
                            <span className="inline-block px-3 py-1 bg-black/10 backdrop-blur-sm text-white text-xs font-black uppercase tracking-wider rounded-full shadow-inner">Adv 02</span>
                        </div>
                        <h4 className="font-display text-3xl font-black mb-4 relative z-10 leading-tight drop-shadow-sm">Language &amp;<br />Phonics</h4>
                    </div>
                    <p className="text-amber-50 text-sm sm:text-base font-semibold leading-relaxed relative z-10">
                        Discovering alphabets, funny sounds, phonics blends, and early writing skills. We build robust reading habits through magical story times!
                    </p>
                </div>

                {/* Tile 3: Mathematics (Square Card) */}
                <div className="md:col-span-1 bg-gradient-to-br from-emerald-100 to-white backdrop-blur-xl border-4 border-white/60 rounded-[2.5rem] p-8 shadow-[0_10px_30px_rgb(16,185,129,0.15)] hover:shadow-[0_20px_40px_rgb(16,185,129,0.25)] transition-all duration-500 group relative overflow-hidden flex flex-col cursor-pointer hover:-translate-y-2">
                    <div className="absolute bottom-4 right-4 opacity-10 text-7xl -rotate-12 pointer-events-none">🎲</div>
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-[0_8px_20px_rgb(16,185,129,0.2)] border-2 border-emerald-200 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-[15deg] overflow-hidden">
                            <img src="/assets/jkg_math.jpg" alt="Math" className="w-full h-full object-cover mix-blend-multiply p-1" />
                        </div>
                        <span className="inline-block px-3 py-1 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-wider rounded-full">Adv 03</span>
                    </div>
                    <h4 className="font-display text-emerald-900 text-2xl font-black mb-3">Early Math</h4>
                    <p className="text-emerald-700/80 text-sm font-semibold leading-relaxed">
                        Introducing number systems, spatial understanding, fun patterns, and geometric shapes using physical building blocks.
                    </p>
                </div>

                {/* Tile 4: Science & Environment (Square Card) */}
                <div className="md:col-span-1 bg-gradient-to-br from-rose-100 to-white backdrop-blur-xl border-4 border-white/60 rounded-[2.5rem] p-8 shadow-[0_10px_30px_rgb(244,63,94,0.15)] hover:shadow-[0_20px_40px_rgb(244,63,94,0.25)] transition-all duration-500 group relative overflow-hidden flex flex-col cursor-pointer hover:-translate-y-2">
                    <div className="absolute bottom-4 right-4 opacity-10 text-7xl rotate-12 pointer-events-none">🌱</div>
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-[0_8px_20px_rgb(244,63,94,0.2)] border-2 border-rose-200 group-hover:scale-110 transition-transform duration-500 group-hover:-rotate-[15deg] overflow-hidden">
                            <img src="/assets/jkg_science.jpg" alt="Science" className="w-full h-full object-cover mix-blend-multiply p-1" />
                        </div>
                        <span className="inline-block px-3 py-1 bg-rose-500 text-white text-[10px] font-black uppercase tracking-wider rounded-full">Adv 04</span>
                    </div>
                    <h4 className="font-display text-rose-900 text-2xl font-black mb-3">Science &amp; Env</h4>
                    <p className="text-rose-700/80 text-sm font-semibold leading-relaxed">
                        Exploring fuzzy animals, sunny weather systems, and simple kitchen science to nurture natural inquisitiveness.
                    </p>
                </div>

                {/* Tile 5: Creative Explorations (Full Width Card) */}
                <div className="md:col-span-3 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 border-4 border-white/60 rounded-[2.5rem] p-8 sm:p-10 shadow-[0_15px_40px_rgb(192,132,252,0.3)] hover:shadow-[0_25px_50px_rgb(192,132,252,0.4)] transition-all duration-500 group relative overflow-hidden flex flex-col sm:flex-row items-center gap-8 text-white mt-2 cursor-pointer hover:-translate-y-2">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4yKSIvPjwvc3ZnPg==')] pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-[80px] pointer-events-none"></div>
                    <div className="absolute top-1/2 left-[10%] opacity-20 text-6xl pointer-events-none -translate-y-1/2 -rotate-12">🎵</div>
                    <div className="absolute top-1/2 right-[10%] opacity-20 text-6xl pointer-events-none -translate-y-1/2 rotate-12">🖍️</div>
                    
                    <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.15)] border-4 border-white/50 group-hover:scale-110 group-hover:rotate-[20deg] transition-all duration-500 z-10 overflow-hidden">
                        <img src="/assets/jkg_arts.jpg" alt="Creative Arts" className="w-full h-full object-cover mix-blend-multiply p-2" />
                    </div>
                    <div className="flex-1 text-center sm:text-left relative z-10">
                        <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
                            <span className="inline-block px-4 py-1.5 bg-white/20 text-white text-xs font-black uppercase tracking-wider rounded-full backdrop-blur-md shadow-sm border border-white/30">Adventure 05</span>
                            <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-black uppercase shadow-sm animate-pulse">The Grand Finale!</span>
                        </div>
                        <h4 className="font-display text-3xl sm:text-4xl font-black mb-3 drop-shadow-md">Creative Arts &amp; Collaboration</h4>
                        <p className="text-white/90 text-sm sm:text-base font-semibold leading-relaxed max-w-3xl drop-shadow-sm">
                            Encouraging messy artistic play, musical fun, classroom theater, and cooperative group projects. Children build solid social ties, learn to express themselves playfully, and unlock their inner creativity!
                        </p>
                    </div>
                </div>

            </div>

        </div>
    </section>

    {/* TRUST PHRASE BANNER */}
    <section className="reveal-on-scroll max-w-[1240px] w-full mx-auto my-12 rounded-[3.5rem] overflow-hidden bg-brand-purple text-white p-8 sm:p-12 text-center shadow-lg relative z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple via-brand-purple-dark to-brand-purple opacity-90 z-0"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
            <h4 className="font-poster text-[18px] sm:text-2xl tracking-wide font-bold italic text-brand-yellow leading-tight mb-4">
                "By Word ! By Faith ! Through Love !"
            </h4>
            <p className="text-purple-100 text-sm sm:text-base font-semibold leading-relaxed">
                To Pronounce and Proclaim the truth of knowledge and wisdom and facilitate to deliver and renew the strength of the Young Ones to " Arise and Shine ".
            </p>
        </div>
    </section>

    {/* Footer Section */}
    </div>
  );
}
