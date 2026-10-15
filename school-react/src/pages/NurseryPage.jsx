import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import AnimatedCounter from '../components/AnimatedCounter';

export default function NurseryPage() {
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
    <div className="nurserypage-page">
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
                <Link to="/nursery" className="pl-3 text-brand-purple font-black font-semibold">Nursery (2-3 Years)</Link>
                <Link to="/juniorkg" className="pl-3 hover:text-brand-purple">Junior KG (3-4 Years)</Link>
                <Link to="/seniorkg" className="pl-3 hover:text-brand-purple">Senior KG (4-5 Years)</Link>
            </div>
            <Link to="/facilities" className="hover:text-brand-purple py-1 border-b border-gray-50">Facilities</Link>
            <Link to="/#testimonials" className="hover:text-brand-purple py-1 border-b border-gray-50">Testimonials</Link>
            <Link to="/contact" className="hover:text-brand-purple py-1">Admission</Link>
        </nav>
    </div>
    <div id="mobile-overlay" className="fixed inset-0 bg-black/30 z-40 hidden transition-opacity lg:hidden"></div>

    {/* Nursery Page Hero (Dynamic Video Background) */}
    <section className="reveal-on-scroll relative py-24 px-6 sm:px-16 overflow-hidden border-b-8 border-brand-yellow">
        {/* Widescreen Video/GIF Background Layer */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img src="/assets/gif/hero.gif" alt="Nursery Classroom Loop" className="w-full h-full object-cover scale-105 filter blur-[1px]" />
        </div>
        {/* Premium Dark Purple Backdrop Overlay for High Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#381c65]/90 via-[#4c2882]/85 to-[#381c65]/90 z-10"></div>

        {/* Floating playful particles */}
        <div className="absolute top-[15%] left-[8%] text-brand-yellow opacity-40 text-3xl animate-float-slow z-20"><i className="fa-solid fa-shapes"></i></div>
        <div className="absolute bottom-[15%] right-[8%] text-[#fa8295] opacity-40 text-4xl animate-float-medium z-20"><i className="fa-solid fa-face-smile"></i></div>

        <div className="max-w-[1000px] w-full mx-auto text-center relative z-20">
            <span className="font-script text-brand-yellow text-[3.2rem] leading-none mb-3 inline-block transform -rotate-1">Exploring Together</span>
            <h2 className="font-display text-4xl sm:text-6xl text-white font-black uppercase tracking-tight leading-none mb-6">
                Nursery Program
            </h2>
            {/* Playful divider */}
            <svg className="w-36 h-3 text-brand-yellow fill-none stroke-current my-6 mx-auto" strokeWidth="3.5" strokeLinecap="round" viewBox="0 0 100 10">
                <path d="M5 5 Q20 1 35 5 T65 5 T95 5" />
            </svg>
            <p className="text-purple-100 font-semibold text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                Our Two Year Old Program is designed to meet the needs of the intensely independent and determined two year old. Two year olds are full of enthusiasm and will practice an activity over and over until they have mastered the task at hand.
            </p>
        </div>
    </section>

    {/* NEW SECTION: Core Advantages */}
    <section className="reveal-on-scroll max-w-[1340px] w-full mx-auto px-6 sm:px-16 py-20 relative z-10">
        <div className="text-center mb-16">
            <span className="font-script text-[#fa8295] text-3xl sm:text-4xl inline-block mb-2">How We Teach</span>
            <h3 className="font-display text-4xl sm:text-5xl text-brand-purple font-black uppercase tracking-tight">Our Process</h3>
            {/* Playful divider */}
            <svg className="w-28 h-3 mx-auto mt-4 text-brand-yellow fill-none stroke-current" strokeWidth="3" strokeLinecap="round" viewBox="0 0 100 10">
                <path d="M5 5 Q20 1 35 5 T65 5 T95 5" />
            </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Advantage 1 */}
            <div className="bg-gradient-to-br from-white to-purple-50/50 border border-purple-100 rounded-[2.5rem] p-8 shadow-[0_15px_30px_rgba(76,40,130,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(76,40,130,0.08)] transition-all duration-300 text-center group relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-brand-purple/5 rounded-full -z-10 group-hover:scale-125 transition-transform duration-500"></div>
                <div className="w-16 h-16 mx-auto bg-brand-purple rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-md transform group-hover:rotate-6 transition-transform">
                    <i className="fa-solid fa-seedling"></i>
                </div>
                <h4 className="font-display text-xl text-brand-purple font-black mb-3">Holistic Growth</h4>
                <p className="text-gray-500 font-semibold text-[13px] leading-relaxed">Fostering cognitive, emotional, and social development in a nurturing space.</p>
            </div>

            {/* Advantage 2 */}
            <div className="bg-gradient-to-br from-white to-orange-50/50 border border-orange-100 rounded-[2.5rem] p-8 shadow-[0_15px_30px_rgba(255,138,0,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,138,0,0.08)] transition-all duration-300 text-center group relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-brand-orange/5 rounded-full -z-10 group-hover:scale-125 transition-transform duration-500"></div>
                <div className="w-16 h-16 mx-auto bg-brand-orange rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-md transform group-hover:-rotate-6 transition-transform">
                    <i className="fa-solid fa-shield-halved"></i>
                </div>
                <h4 className="font-display text-xl text-brand-purple font-black mb-3">Safe Environment</h4>
                <p className="text-gray-500 font-semibold text-[13px] leading-relaxed">Secure, child-proof classrooms designed for fearless exploration and fun.</p>
            </div>

            {/* Advantage 3 */}
            <div className="bg-gradient-to-br from-white to-pink-50/50 border border-pink-100 rounded-[2.5rem] p-8 shadow-[0_15px_30px_rgba(250,130,149,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(250,130,149,0.08)] transition-all duration-300 text-center group relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#fa8295]/5 rounded-full -z-10 group-hover:scale-125 transition-transform duration-500"></div>
                <div className="w-16 h-16 mx-auto bg-[#fa8295] rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-md transform group-hover:rotate-6 transition-transform">
                    <i className="fa-solid fa-chalkboard-user"></i>
                </div>
                <h4 className="font-display text-xl text-brand-purple font-black mb-3">Expert Educators</h4>
                <p className="text-gray-500 font-semibold text-[13px] leading-relaxed">Trained professionals who guide and nurture with endless love and patience.</p>
            </div>

            {/* Advantage 4 */}
            <div className="bg-gradient-to-br from-white to-green-50/50 border border-green-100 rounded-[2.5rem] p-8 shadow-[0_15px_30px_rgba(22,163,74,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(22,163,74,0.08)] transition-all duration-300 text-center group relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-green-500/5 rounded-full -z-10 group-hover:scale-125 transition-transform duration-500"></div>
                <div className="w-16 h-16 mx-auto bg-[#16a34a] rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-md transform group-hover:-rotate-6 transition-transform">
                    <i className="fa-solid fa-cubes"></i>
                </div>
                <h4 className="font-display text-xl text-brand-purple font-black mb-3">Play-Based Learning</h4>
                <p className="text-gray-500 font-semibold text-[13px] leading-relaxed">An interactive curriculum that makes daily learning a joyful adventure.</p>
            </div>
        </div>
    </section>

    {/* NEW SECTION: Daily Routine (Yellow Theme) */}
    <section className="reveal-on-scroll bg-brand-yellow-light/60 border-y border-yellow-100 py-20 relative z-10 overflow-hidden">
        {/* Yellow blobs background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/20 rounded-full blur-[80px] -z-10 mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-300/20 rounded-full blur-[60px] -z-10 mix-blend-multiply"></div>

        <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-16 text-center">
            <span className="font-script text-brand-orange text-3xl sm:text-4xl inline-block mb-2">A Day in the Life</span>
            <h3 className="font-display text-4xl sm:text-5xl text-brand-purple font-black uppercase tracking-tight mb-16">Daily Routine</h3>
            
            <div className="relative">
                {/* Connecting Line */}
                <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-1 bg-dashed -translate-y-1/2 z-0 border-t-[3px] border-dashed border-brand-orange/30"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                    {/* Routine 1 */}
                    <div className="bg-white/90 backdrop-blur-sm border-2 border-brand-yellow rounded-[2rem] p-6 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-16 h-16 mx-auto bg-brand-yellow rounded-full flex items-center justify-center text-brand-purple-dark text-3xl mb-4 shadow-sm">
                            <i className="fa-solid fa-sun"></i>
                        </div>
                        <h4 className="font-display text-lg text-brand-purple font-black mb-1">Morning Circle</h4>
                        <p className="font-bold text-xs uppercase tracking-wider text-brand-orange mb-3">9:00 AM</p>
                        <p className="text-gray-500 font-semibold text-sm leading-relaxed">Greetings, songs, and setting the theme for the day.</p>
                    </div>

                    {/* Routine 2 */}
                    <div className="bg-white/90 backdrop-blur-sm border-2 border-brand-yellow rounded-[2rem] p-6 shadow-lg hover:-translate-y-2 transition-transform duration-300 md:mt-12">
                        <div className="w-16 h-16 mx-auto bg-brand-yellow rounded-full flex items-center justify-center text-brand-purple-dark text-3xl mb-4 shadow-sm">
                            <i className="fa-solid fa-shapes"></i>
                        </div>
                        <h4 className="font-display text-lg text-brand-purple font-black mb-1">Activity Time</h4>
                        <p className="font-bold text-xs uppercase tracking-wider text-brand-orange mb-3">10:00 AM</p>
                        <p className="text-gray-500 font-semibold text-sm leading-relaxed">Hands-on learning, art, crafts, and sensory play.</p>
                    </div>

                    {/* Routine 3 */}
                    <div className="bg-white/90 backdrop-blur-sm border-2 border-brand-yellow rounded-[2rem] p-6 shadow-lg hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-16 h-16 mx-auto bg-brand-yellow rounded-full flex items-center justify-center text-brand-purple-dark text-3xl mb-4 shadow-sm">
                            <i className="fa-solid fa-apple-whole"></i>
                        </div>
                        <h4 className="font-display text-lg text-brand-purple font-black mb-1">Snack & Rest</h4>
                        <p className="font-bold text-xs uppercase tracking-wider text-brand-orange mb-3">11:30 AM</p>
                        <p className="text-gray-500 font-semibold text-sm leading-relaxed">Healthy snacks followed by quiet time and story reading.</p>
                    </div>

                    {/* Routine 4 */}
                    <div className="bg-white/90 backdrop-blur-sm border-2 border-brand-yellow rounded-[2rem] p-6 shadow-lg hover:-translate-y-2 transition-transform duration-300 md:mt-12">
                        <div className="w-16 h-16 mx-auto bg-brand-yellow rounded-full flex items-center justify-center text-brand-purple-dark text-3xl mb-4 shadow-sm">
                            <i className="fa-solid fa-puzzle-piece"></i>
                        </div>
                        <h4 className="font-display text-lg text-brand-purple font-black mb-1">Free Play</h4>
                        <p className="font-bold text-xs uppercase tracking-wider text-brand-orange mb-3">1:00 PM</p>
                        <p className="text-gray-500 font-semibold text-sm leading-relaxed">Outdoor park time, puzzles, and socializing before home.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>


    {/* SECTION 2: Interactive Fun - Shape Match (New UI) */}
    <section className="reveal-on-scroll max-w-[1240px] w-full mx-auto px-6 sm:px-16 py-16 relative z-10">
        {/* Title Area */}
        <div className="text-center mb-10">
            <span className="font-script text-[#fa8295] text-3xl">Interactive Fun</span>
            <h3 className="font-display text-4xl sm:text-5xl text-brand-purple font-black uppercase mt-1 mb-3">Shape Match Adventure</h3>
            <p className="text-gray-500 text-sm sm:text-base font-medium">Help find all the matching shapes! Tap them before they float away.</p>
        </div>

        

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-[1100px] mx-auto">
            {/* Left Side: Game Canvas (7 cols) */}
            <div className="lg:col-span-7 xl:col-span-8">
                <div className="bg-gradient-to-br from-purple-100 via-white to-pink-100 p-3 sm:p-4 rounded-[2.5rem] shadow-sm">
                    <div className="bg-brand-bg rounded-[2rem] border border-purple-100 h-[400px] relative overflow-hidden flex flex-col p-6">
                        
                        {/* Top Bar inside Canvas */}
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 flex justify-between items-center gap-4 w-full px-6 max-w-sm z-20">
                            <div className="flex-1 bg-blue-100 text-blue-600 font-bold py-2.5 px-6 rounded-full text-center border-2 border-blue-400 shadow-sm whitespace-nowrap text-sm sm:text-base" id="shape-game-target-pill">
                                Find the Shape!
                            </div>
                            <div className="bg-purple-100 text-purple-600 font-bold py-2.5 px-4 rounded-full border-2 border-purple-200 flex items-center justify-center gap-1 shadow-sm w-20 shrink-0">
                                ⭐ <span id="shape-game-stars">0</span>
                            </div>
                        </div>
                        
                        {/* Game Board */}
                        <div id="shape-game-board" className="w-full h-full relative mt-12 z-10">
                            {/* Bubbles injected here */}
                        </div>

                        {/* Reward Screen inside Canvas */}
                        <div id="shape-game-reward" className="hidden absolute inset-0 z-30 flex-col items-center justify-center bg-brand-bg/95 backdrop-blur-sm animate-pop-in rounded-[2rem]">
                            {/* Dynamic content */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Learn & Play Info Box (5 cols) */}
            <div className="lg:col-span-5 xl:col-span-4">
                <div className="bg-white rounded-[2rem] p-8 shadow-[0_10px_40px_rgb(0,0,0,0.05)] border border-purple-50 h-full flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-xl">
                            🧩
                        </div>
                        <h4 className="font-display text-brand-purple text-xl font-black">Play & Learn Shapes</h4>
                    </div>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed mb-4">
                        Shape Match is a playful sensory game built specifically for our playgroup toddlers (ages 2-3) to learn primary shapes in an engaging way.
                    </p>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed mb-8">
                        Tapping the correct shapes helps infants build <strong className="text-brand-purple">visual association</strong>, <strong className="text-orange-500">hand-eye coordination</strong>, and cognitive response.
                    </p>
                    
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                        <span className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-purple-50 text-purple-600 uppercase tracking-wider flex items-center gap-1"><span className="opacity-50">🧩</span> SHAPE MATCH</span>
                        <span className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-rose-50 text-rose-600 uppercase tracking-wider flex items-center gap-1"><span className="opacity-50">👆</span> TOY TAPS</span>
                        <span className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 uppercase tracking-wider flex items-center gap-1"><span className="opacity-50">🎯</span> MOTOR SKILLS</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

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
                    Nurturing independent thinkers through trial-and-error discovery and language exploration.
                </p>
            </div>
            
            {/* Right Side: Big, Widescreen Teacher & Toddlers Image */}
            <div className="lg:col-span-7 flex justify-center">
                <div className="rounded-[45%_55%_45%_55%_/_50%_50%_40%_40%] overflow-hidden border-8 border-white shadow-2xl w-full max-w-xl h-64 md:h-72 bg-white relative">
                    <img src="/assets/nursery.jpg" alt="Teacher Teaching Nursery Kids" className="w-full h-full object-cover hover:scale-[1.02] transition duration-500" />
                </div>
            </div>
        </div>

        {/* Carousel Row with Scrapbook Cards */}
        <div className="relative z-10 max-w-6xl mx-auto mt-12 pb-8">
            
             {/* Cards Grid / Carousel Track */}
            <div id="curriculum-carousel-track" className="flex lg:grid lg:grid-cols-4 gap-8 w-full overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-none scroll-smooth relative z-10 py-6 px-4 items-stretch justify-items-center">
                
                {/* Card 1: Enthusiasm & Grit (Purple Theme) */}
                <div className="snap-center shrink-0 w-[290px] sm:w-[310px] lg:w-full max-w-[320px] bg-white border-2 border-dashed border-purple-300 rounded-[2.5rem] p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center relative lg:translate-y-4 h-full">
                    {/* Washi Tape */}
                    <div className="absolute -top-3 bg-purple-100 text-purple-700 text-[10px] font-black tracking-widest px-6 py-1.5 rotate-[-3deg] uppercase rounded shadow-sm border border-purple-200/50">
                        Milestone 01
                    </div>
                    
                    {/* Icon / Number Circle */}
                    <div className="w-16 h-16 rounded-full bg-purple-50 border-2 border-purple-200 flex items-center justify-center text-brand-purple text-2xl font-black mb-4 shadow-inner mt-4">
                        <i className="fa-solid fa-star"></i>
                    </div>
                    
                    <h4 className="font-display text-brand-purple text-lg font-black mb-3">Enthusiasm &amp; Grit</h4>
                    <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
                        Practice activities over and over until they have mastered the task at hand. They will not give up and solve problems using trial-and-error.
                    </p>
                </div>

                {/* Card 2: Social Play (Yellow Theme) */}
                <div className="snap-center shrink-0 w-[290px] sm:w-[310px] lg:w-full max-w-[320px] bg-white border-2 border-dashed border-amber-300 rounded-[2.5rem] p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center relative lg:-translate-y-4 h-full">
                    {/* Washi Tape */}
                    <div className="absolute -top-3 bg-amber-100 text-amber-850 text-[10px] font-black tracking-widest px-6 py-1.5 rotate-[3deg] uppercase rounded shadow-sm border border-amber-200/50">
                        Milestone 02
                    </div>
                    
                    {/* Icon / Number Circle */}
                    <div className="w-16 h-16 rounded-full bg-amber-50 border-2 border-amber-200 flex items-center justify-center text-amber-600 text-2xl font-black mb-4 shadow-inner mt-4">
                        <i className="fa-solid fa-users"></i>
                    </div>
                    
                    <h4 className="font-display text-amber-700 text-lg font-black mb-3">Social Play</h4>
                    <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
                        Beginning to take interest in other children. Learning how to cooperate, share, and express affection appropriately.
                    </p>
                </div>

                {/* Card 3: Pre-Reading (Green Theme) */}
                <div className="snap-center shrink-0 w-[290px] sm:w-[310px] lg:w-full max-w-[320px] bg-white border-2 border-dashed border-green-300 rounded-[2.5rem] p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center relative lg:translate-y-4 h-full">
                    {/* Washi Tape */}
                    <div className="absolute -top-3 bg-green-100 text-green-800 text-[10px] font-black tracking-widest px-6 py-1.5 rotate-[-2deg] uppercase rounded shadow-sm border border-green-205/50">
                        Milestone 03
                    </div>
                    
                    {/* Icon / Number Circle */}
                    <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center text-green-600 text-2xl font-black mb-4 shadow-inner mt-4">
                        <i className="fa-solid fa-book-open"></i>
                    </div>
                    
                    <h4 className="font-display text-green-700 text-lg font-black mb-3">Pre-Reading</h4>
                    <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
                        Pretending to read, looking through familiar books, singing the A-B-C song, and starting to scribble letter shapes.
                    </p>
                </div>

                {/* Card 4: Language Skills (Pink Theme) */}
                <div className="snap-center shrink-0 w-[290px] sm:w-[310px] lg:w-full max-w-[320px] bg-white border-2 border-dashed border-rose-300 rounded-[2.5rem] p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center relative lg:-translate-y-4 h-full">
                    {/* Washi Tape */}
                    <div className="absolute -top-3 bg-rose-100 text-rose-800 text-[10px] font-black tracking-widest px-6 py-1.5 rotate-[2deg] uppercase rounded shadow-sm border border-rose-200/50">
                        Milestone 04
                    </div>
                    
                    {/* Icon / Number Circle */}
                    <div className="w-16 h-16 rounded-full bg-rose-50 border-2 border-rose-200 flex items-center justify-center text-rose-600 text-2xl font-black mb-4 shadow-inner mt-4">
                        <i className="fa-solid fa-comments"></i>
                    </div>
                    
                    <h4 className="font-display text-rose-700 text-lg font-black mb-3">Language Skills</h4>
                    <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
                        Rapid speech and vocabulary growth, formulating short sentences, expressing complex ideas, and following directions.
                    </p>
                </div>

            </div>
        </div>
    </section>

    {/* SECTION 4: Horizontal Scrolling Storybook Curriculum */}
    <section className="reveal-on-scroll py-24 relative z-10 overflow-hidden" style={{ backgroundImage: 'url(\'/assets/gif/herotwo.gif\')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        {/* Semi-transparent overlay to ensure readability over the GIF */}
        <div className="absolute inset-0 bg-[#fffdf7]/80 backdrop-blur-[2px] z-0"></div>
        
        {/* Storybook Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
            <svg className="absolute top-10 left-[10%] w-24 h-12 opacity-30" viewBox="0 0 80 40" fill="#e9d5ff"><ellipse cx="30" cy="25" rx="28" ry="14"/><ellipse cx="55" cy="20" rx="22" ry="12"/><ellipse cx="40" cy="15" rx="18" ry="10"/></svg>
            <svg className="absolute bottom-20 right-[15%] w-32 h-16 opacity-30" viewBox="0 0 80 40" fill="#fde68a"><ellipse cx="30" cy="25" rx="28" ry="14"/><ellipse cx="55" cy="20" rx="22" ry="12"/><ellipse cx="40" cy="15" rx="18" ry="10"/></svg>
        </div>

        <div className="w-full relative">
            
            {/* Section Header */}
            <div className="text-center mb-12 px-6">
                <span className="font-script text-[#fa8295] text-[2.4rem] block mb-1">Our Curriculum</span>
                <h3 className="font-display text-3xl sm:text-5xl text-brand-purple font-black uppercase tracking-tight mb-4">
                    The Nursery Storybook
                </h3>
                <p className="text-gray-500 text-sm sm:text-base font-medium max-w-2xl mx-auto">
                    Swipe through our magical learning adventures! Every page is a new chapter in your child's growth. 📖✨
                </p>
            </div>

            {/* Horizontal Scrolling Storybook Container */}
            {/* Tailwind note: we use styles to hide scrollbar if plugins aren't loaded */}
            
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 sm:gap-10 px-[10vw] md:px-[25vw] pb-12 pt-6 hide-scroll relative z-10" style={{ scrollPaddingLeft: '10vw', scrollPaddingRight: '10vw' }}>

                {/* Page 1 */}
                <div className="snap-center shrink-0 w-[80vw] md:w-[50vw] bg-white rounded-[2rem] sm:rounded-[3rem] shadow-xl overflow-hidden border-4 border-purple-100 flex flex-col group transition-transform duration-300 hover:-translate-y-2">
                    <div className="h-48 sm:h-64 bg-gradient-to-br from-purple-100 to-fuchsia-100 flex items-center justify-center p-6 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,#fff_20%,transparent_100%)]"></div>
                        <img src="/assets/sports (4).jpg" alt="Gross Motor Mastery" className="w-full h-full object-cover relative z-10 group-hover:scale-110 transition duration-500" />
                        <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-purple-600 text-xs font-black px-4 py-2 rounded-full shadow-sm uppercase tracking-wider">Chapter 1</div>
                    </div>
                    <div className="p-6 sm:p-10 flex flex-col flex-1">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-2xl">🏃‍♂️</span>
                            <h4 className="font-display text-brand-purple text-2xl sm:text-3xl font-black">Gross Motor Mastery</h4>
                        </div>
                        <div className="w-16 h-1.5 bg-purple-300 rounded-full mb-4"></div>
                        <p className="text-gray-500 text-sm sm:text-base font-medium leading-relaxed">
                            Running, jumping, balancing, and coordinated playground games! We help toddlers gain muscular control and indulge in physical play suited with speed and confidence.
                        </p>
                    </div>
                </div>

                {/* Page 2 */}
                <div className="snap-center shrink-0 w-[80vw] md:w-[50vw] bg-white rounded-[2rem] sm:rounded-[3rem] shadow-xl overflow-hidden border-4 border-amber-100 flex flex-col group transition-transform duration-300 hover:-translate-y-2">
                    <div className="h-48 sm:h-64 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center p-6 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,#fff_20%,transparent_100%)]"></div>
                        <img src="/assets/palette_icon.png" alt="Fine Motor & Creativity" className="h-full object-contain relative z-10 group-hover:scale-110 transition duration-500" />
                        <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-amber-600 text-xs font-black px-4 py-2 rounded-full shadow-sm uppercase tracking-wider">Chapter 2</div>
                    </div>
                    <div className="p-6 sm:p-10 flex flex-col flex-1">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-2xl">🎨</span>
                            <h4 className="font-display text-amber-600 text-2xl sm:text-3xl font-black">Fine Motor &amp; Creativity</h4>
                        </div>
                        <div className="w-16 h-1.5 bg-amber-300 rounded-full mb-4"></div>
                        <p className="text-gray-500 text-sm sm:text-base font-medium leading-relaxed">
                            Finger painting, block-building, puzzle-solving, and playdough modeling. Nurturing wrist dexterity, finger-pincher grasp, and spatial coordination.
                        </p>
                    </div>
                </div>

                {/* Page 3 */}
                <div className="snap-center shrink-0 w-[80vw] md:w-[50vw] bg-white rounded-[2rem] sm:rounded-[3rem] shadow-xl overflow-hidden border-4 border-green-100 flex flex-col group transition-transform duration-300 hover:-translate-y-2">
                    <div className="h-48 sm:h-64 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center p-6 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,#fff_20%,transparent_100%)]"></div>
                        <img src="/assets/open_book.png" alt="Language & Storytelling" className="h-full object-contain relative z-10 group-hover:scale-110 transition duration-500" />
                        <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-green-700 text-xs font-black px-4 py-2 rounded-full shadow-sm uppercase tracking-wider">Chapter 3</div>
                    </div>
                    <div className="p-6 sm:p-10 flex flex-col flex-1">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-2xl">🗣️</span>
                            <h4 className="font-display text-green-700 text-2xl sm:text-3xl font-black">Language &amp; Storytelling</h4>
                        </div>
                        <div className="w-16 h-1.5 bg-green-300 rounded-full mb-4"></div>
                        <p className="text-gray-500 text-sm sm:text-base font-medium leading-relaxed">
                            Circle-time songs, phonics exploration, interactive storytelling, and conversational play. Kids express, explore ideas and expand their speech patterns rapidly.
                        </p>
                    </div>
                </div>

                {/* Page 4 */}
                <div className="snap-center shrink-0 w-[80vw] md:w-[50vw] bg-white rounded-[2rem] sm:rounded-[3rem] shadow-xl overflow-hidden border-4 border-rose-100 flex flex-col group transition-transform duration-300 hover:-translate-y-2">
                    <div className="h-48 sm:h-64 bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center p-6 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,#fff_20%,transparent_100%)]"></div>
                        <img src="/assets/teddy_heart.png" alt="Social Connection" className="h-full object-contain relative z-10 group-hover:scale-110 transition duration-500" />
                        <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-rose-600 text-xs font-black px-4 py-2 rounded-full shadow-sm uppercase tracking-wider">Chapter 4</div>
                    </div>
                    <div className="p-6 sm:p-10 flex flex-col flex-1">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-2xl">🤝</span>
                            <h4 className="font-display text-rose-600 text-2xl sm:text-3xl font-black">Social Connection</h4>
                        </div>
                        <div className="w-16 h-1.5 bg-rose-300 rounded-full mb-4"></div>
                        <p className="text-gray-500 text-sm sm:text-base font-medium leading-relaxed">
                            Empathetic sharing, taking turns, peer play, and vocabulary for emotions. Supporting children as they bond, compromise, and collaborate.
                        </p>
                    </div>
                </div>

                {/* Page 5 */}
                <div className="snap-center shrink-0 w-[80vw] md:w-[50vw] bg-white rounded-[2rem] sm:rounded-[3rem] shadow-xl overflow-hidden border-4 border-blue-100 flex flex-col group transition-transform duration-300 hover:-translate-y-2">
                    <div className="h-48 sm:h-64 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center p-6 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,#fff_20%,transparent_100%)]"></div>
                        <img src="/assets/baby_shoe.png" alt="Creative & Musical Play" className="h-full object-contain relative z-10 group-hover:scale-110 transition duration-500" />
                        <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-blue-700 text-xs font-black px-4 py-2 rounded-full shadow-sm uppercase tracking-wider">Chapter 5</div>
                    </div>
                    <div className="p-6 sm:p-10 flex flex-col flex-1">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-2xl">🎵</span>
                            <h4 className="font-display text-blue-700 text-2xl sm:text-3xl font-black">Creative &amp; Musical Play</h4>
                        </div>
                        <div className="w-16 h-1.5 bg-blue-300 rounded-full mb-4"></div>
                        <p className="text-gray-500 text-sm sm:text-base font-medium leading-relaxed">
                            Music, dancing, classroom baking, dramatic dress-up play, and artistic crafts. Helping toddlers unlock their natural curiosity and creative self-expression.
                        </p>
                    </div>
                </div>

            </div>
            
            {/* Scroll Instruction */}
            <div className="text-center mt-4">
                <p className="text-gray-400 font-medium text-sm flex items-center justify-center gap-2">
                    <i className="fa-solid fa-arrow-left-long"></i> Swipe to explore <i className="fa-solid fa-arrow-right-long"></i>
                </p>
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
