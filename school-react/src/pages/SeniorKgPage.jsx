import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import AnimatedCounter from '../components/AnimatedCounter';

export default function SeniorKgPage() {
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
    <div className="seniorkgpage-page">
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
                <Link to="/juniorkg" className="pl-3 hover:text-brand-purple">Junior KG (3-4 Years)</Link>
                <Link to="/seniorkg" className="pl-3 text-brand-purple font-black">Senior KG (4-5 Years)</Link>
            </div>
            <Link to="/facilities" className="hover:text-brand-purple py-1 border-b border-gray-50">Facilities</Link>
            <Link to="/#testimonials" className="hover:text-brand-purple py-1 border-b border-gray-50">Testimonials</Link>
            <Link to="/contact" className="hover:text-brand-purple py-1">Admission</Link>
        </nav>
    </div>
    <div id="mobile-overlay" className="fixed inset-0 bg-black/30 z-40 hidden transition-opacity lg:hidden"></div>

    {/* Senior KG Page Hero (Dynamic Video Background) */}
    <section className="reveal-on-scroll relative py-24 px-6 sm:px-16 overflow-hidden border-b-8 border-brand-yellow">
        {/* Widescreen Video/GIF Background Layer */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img src="/assets/gif/hero.gif" alt="Senior KG Classroom Loop" className="w-full h-full object-cover scale-105 filter blur-[1px]" />
        </div>
        {/* Premium Dark Purple Backdrop Overlay for High Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#381c65]/90 via-[#4c2882]/85 to-[#381c65]/90 z-10"></div>

        {/* Floating playful particles */}
        <div className="absolute top-[15%] left-[8%] text-brand-yellow opacity-40 text-3xl animate-float-slow z-20"><i className="fa-solid fa-shapes"></i></div>
        <div className="absolute bottom-[15%] right-[8%] text-[#fa8295] opacity-40 text-4xl animate-float-medium z-20"><i className="fa-solid fa-face-smile"></i></div>

        <div className="max-w-[1000px] w-full mx-auto text-center relative z-20">
            <span className="font-script text-brand-yellow text-[3.2rem] leading-none mb-3 inline-block transform -rotate-1">Ready For School</span>
            <h2 className="font-display text-4xl sm:text-6xl text-white font-black uppercase tracking-tight leading-none mb-6">
                Senior KG
            </h2>
            {/* Playful divider */}
            <svg className="w-36 h-3 text-brand-yellow fill-none stroke-current my-6 mx-auto" strokeWidth="3.5" strokeLinecap="round" viewBox="0 0 100 10">
                <path d="M5 5 Q20 1 35 5 T65 5 T95 5" />
            </svg>
            <p className="text-purple-100 font-semibold text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                Our Senior Kindergarten program recognizes that children will soon be entering schools that have a range of expectations for a child's social and academic performance. Our comprehensive program places a clear emphasis on strong language, reading, writing, and mathematics skills.
            </p>
        </div>
    </section>

    {/* NEW SECTION: Senior KG Focus */}
    <section className="reveal-on-scroll max-w-[1340px] w-full mx-auto px-6 sm:px-16 py-20 relative z-10">
        <div className="text-center mb-16">
            <span className="font-script text-brand-orange text-3xl sm:text-4xl inline-block mb-2">Primary School Readiness</span>
            <h3 className="font-display text-4xl sm:text-5xl text-brand-purple font-black uppercase tracking-tight">Senior KG Focus</h3>
            {/* Playful divider */}
            <svg className="w-28 h-3 mx-auto mt-4 text-brand-orange fill-none stroke-current" strokeWidth="3" strokeLinecap="round" viewBox="0 0 100 10">
                <path d="M5 5 Q20 1 35 5 T65 5 T95 5" />
            </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Advantage 1 */}
            <div className="bg-gradient-to-br from-white to-rose-50/50 border border-rose-100 rounded-[2.5rem] p-8 shadow-[0_15px_30px_rgba(244,63,94,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(244,63,94,0.08)] transition-all duration-300 text-center group relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-rose-500/5 rounded-full -z-10 group-hover:scale-125 transition-transform duration-500"></div>
                <div className="w-16 h-16 mx-auto bg-rose-500 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-md transform group-hover:rotate-6 transition-transform">
                    <i className="fa-solid fa-pen-nib"></i>
                </div>
                <h4 className="font-display text-xl text-brand-purple font-black mb-3">Reading & Writing</h4>
                <p className="text-gray-500 font-semibold text-[13px] leading-relaxed">Advanced phonics, sight words, and structured writing practice for fluency.</p>
            </div>

            {/* Advantage 2 */}
            <div className="bg-gradient-to-br from-white to-indigo-50/50 border border-indigo-100 rounded-[2.5rem] p-8 shadow-[0_15px_30px_rgba(99,102,241,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(99,102,241,0.08)] transition-all duration-300 text-center group relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-indigo-500/5 rounded-full -z-10 group-hover:scale-125 transition-transform duration-500"></div>
                <div className="w-16 h-16 mx-auto bg-indigo-500 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-md transform group-hover:-rotate-6 transition-transform">
                    <i className="fa-solid fa-superscript"></i>
                </div>
                <h4 className="font-display text-xl text-brand-purple font-black mb-3">Advanced Math</h4>
                <p className="text-gray-500 font-semibold text-[13px] leading-relaxed">Addition, subtraction concepts, and complex pattern recognition.</p>
            </div>

            {/* Advantage 3 */}
            <div className="bg-gradient-to-br from-white to-emerald-50/50 border border-emerald-100 rounded-[2.5rem] p-8 shadow-[0_15px_30px_rgba(16,185,129,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(16,185,129,0.08)] transition-all duration-300 text-center group relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-emerald-500/5 rounded-full -z-10 group-hover:scale-125 transition-transform duration-500"></div>
                <div className="w-16 h-16 mx-auto bg-emerald-500 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-md transform group-hover:rotate-6 transition-transform">
                    <i className="fa-solid fa-flask"></i>
                </div>
                <h4 className="font-display text-xl text-brand-purple font-black mb-3">Science Discovery</h4>
                <p className="text-gray-500 font-semibold text-[13px] leading-relaxed">Simple experiments and nature exploration to understand the world.</p>
            </div>

            {/* Advantage 4 */}
            <div className="bg-gradient-to-br from-white to-amber-50/50 border border-amber-100 rounded-[2.5rem] p-8 shadow-[0_15px_30px_rgba(245,158,11,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(245,158,11,0.08)] transition-all duration-300 text-center group relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-amber-500/5 rounded-full -z-10 group-hover:scale-125 transition-transform duration-500"></div>
                <div className="w-16 h-16 mx-auto bg-amber-500 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-md transform group-hover:-rotate-6 transition-transform">
                    <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <h4 className="font-display text-xl text-brand-purple font-black mb-3">School Readiness</h4>
                <p className="text-gray-500 font-semibold text-[13px] leading-relaxed">Focus on independence, attention span, and following complex instructions.</p>
            </div>
        </div>
    </section>

    {/* NEW SECTION: Daily Routine (Zig-Zag Blocks Theme) */}
    <section className="reveal-on-scroll bg-[#fcfaf7] py-20 relative z-10 overflow-hidden">
        <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-16">
            <div className="text-center mb-16">
                <span className="font-script text-indigo-400 text-3xl sm:text-4xl inline-block mb-2">Preparing for the Future</span>
                <h3 className="font-display text-4xl sm:text-5xl text-brand-purple font-black uppercase tracking-tight mb-4">Senior KG Routine</h3>
            </div>
            
            <div className="flex flex-col gap-8 md:gap-12 relative z-10">
                {/* Routine 1 */}
                <div className="flex flex-col md:flex-row items-center gap-8 bg-white border border-indigo-50 rounded-[3rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow">
                    <div className="w-24 h-24 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 border border-indigo-100">
                        <span className="font-display text-5xl font-black text-indigo-400">1</span>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <p className="text-indigo-400 font-bold text-xs uppercase tracking-wider mb-2">9:00 AM</p>
                        <h4 className="font-display text-2xl text-brand-purple font-black mb-2">Assembly & Reading</h4>
                        <p className="text-gray-500 font-medium text-sm leading-relaxed max-w-2xl">Morning assembly sets the tone for the day, followed immediately by structured reading groups where children practice sight words and phonics.</p>
                    </div>
                </div>

                {/* Routine 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-8 bg-white border border-emerald-50 rounded-[3rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow">
                    <div className="w-24 h-24 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
                        <span className="font-display text-5xl font-black text-emerald-400">2</span>
                    </div>
                    <div className="flex-1 text-center md:text-right">
                        <p className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">10:30 AM</p>
                        <h4 className="font-display text-2xl text-brand-purple font-black mb-2">Math & Science</h4>
                        <p className="text-gray-500 font-medium text-sm leading-relaxed max-w-2xl md:ml-auto">Interactive math problems using physical objects, and hands-on science experiments that encourage curiosity and hypothesis testing.</p>
                    </div>
                </div>

                {/* Routine 3 */}
                <div className="flex flex-col md:flex-row items-center gap-8 bg-white border border-amber-50 rounded-[3rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow">
                    <div className="w-24 h-24 rounded-full bg-amber-50 flex items-center justify-center shrink-0 border border-amber-100">
                        <span className="font-display text-5xl font-black text-amber-400">3</span>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <p className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">12:00 PM</p>
                        <h4 className="font-display text-2xl text-brand-purple font-black mb-2">Lunch & Independence</h4>
                        <p className="text-gray-500 font-medium text-sm leading-relaxed max-w-2xl">Fostering social skills and independence during mealtime, followed by self-directed play where children choose their own learning stations.</p>
                    </div>
                </div>

                {/* Routine 4 */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-8 bg-white border border-rose-50 rounded-[3rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow">
                    <div className="w-24 h-24 rounded-full bg-rose-50 flex items-center justify-center shrink-0 border border-rose-100">
                        <span className="font-display text-5xl font-black text-rose-400">4</span>
                    </div>
                    <div className="flex-1 text-center md:text-right">
                        <p className="text-rose-400 font-bold text-xs uppercase tracking-wider mb-2">1:30 PM</p>
                        <h4 className="font-display text-2xl text-brand-purple font-black mb-2">Project Work & Dismissal</h4>
                        <p className="text-gray-500 font-medium text-sm leading-relaxed max-w-2xl md:ml-auto">Collaborative group projects that build teamwork, wrapping up the day with preparations for the transition to primary school.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    {/* SECTION 2: Interactive 3D Playroom (Three.js) */}
    <section className="reveal-on-scroll max-w-[1240px] w-full mx-auto px-6 sm:px-16 py-10 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-script text-[#fa8295] text-3xl">Interactive Fun</span>
            <h3 className="font-display text-2xl sm:text-3xl text-brand-purple font-black uppercase">Playroom Simulation</h3>
            <p className="text-gray-500 text-xs sm:text-sm font-semibold mt-2">Select a color, pick your brush thickness, and paint on our playroom drawing table! Tap or click to paint inside the templates.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Side: Canvas */}
            <div className="lg:col-span-7">
                <div id="three-canvas-container" className="shadow-lg border border-purple-100/50">
                    {/* Canvas will be appended here by JS */}
                </div>
            </div>

            {/* Right Side: Learning through Play Details */}
            <div className="lg:col-span-5 space-y-6">
                <div className="bg-white border-2 border-purple-50 rounded-[3rem_4.5rem_3.5rem_3rem] p-8 shadow-sm">
                    <h4 className="font-display text-brand-purple text-lg font-black mb-3">Sky-Rocketed Creativity</h4>
                    <p className="text-gray-500 text-sm font-semibold leading-relaxed mb-4">
                        Senior KG children have sky-rocketed creativity. They enjoy singing, dancing, and drawing. Their art work is not copied but of their own design and interests.
                    </p>
                    <p className="text-gray-500 text-sm font-semibold leading-relaxed">
                        Choose from butterflies, teddy bears, flowers, and sun templates. Select your favorite colors and brush sizes, then paint away!
                    </p>
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
                <h3 className="font-display text-3xl sm:text-4xl text-brand-purple font-black uppercase tracking-tight">
                    Development &amp; Milestones
                </h3>
                <svg className="w-24 h-3 text-[#fa8295] fill-none stroke-current my-4 mx-auto lg:mx-0" strokeWidth="3" strokeLinecap="round" viewBox="0 0 100 10">
                    <path d="M5 5 Q20 1 35 5 T65 5 T95 5" />
                </svg>
                <p className="text-gray-500 text-sm font-semibold leading-relaxed max-w-md mx-auto lg:mx-0">
                    Building self-confidence, pre-academic literacy, and social compassion.
                </p>
            </div>
            
            {/* Right Side: Big, Widescreen Senior KG Image */}
            <div className="lg:col-span-7 flex justify-center">
                <div className="rounded-[45%_55%_45%_55%_/_50%_50%_40%_40%] overflow-hidden border-8 border-white shadow-2xl w-full max-w-xl h-64 md:h-72 bg-white relative">
                    <img src="/assets/seniorkg_play.jpg" alt="Senior KG Children Learning" className="w-full h-full object-cover hover:scale-[1.02] transition duration-500" />
                </div>
            </div>
        </div>

        {/* Carousel Row with Scrapbook Cards */}
        <div className="relative z-10 max-w-6xl mx-auto mt-12 pb-8">
            
             {/* Cards Grid / Carousel Track */}
            <div id="curriculum-carousel-track" className="flex lg:grid lg:grid-cols-4 gap-8 w-full overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-none scroll-smooth relative z-10 py-6 px-4 items-stretch justify-items-center">
                
                {/* Card 1: Humor & Silliness (Purple Theme) */}
                <div className="snap-center shrink-0 w-[290px] sm:w-[310px] lg:w-full max-w-[320px] bg-white border-2 border-dashed border-purple-300 rounded-[2.5rem] p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center relative lg:translate-y-4 h-full">
                    {/* Washi Tape */}
                    <div className="absolute -top-3 bg-purple-100 text-purple-700 text-[10px] font-black tracking-widest px-6 py-1.5 rotate-[-3deg] uppercase rounded shadow-sm border border-purple-200/50">
                        Milestone 01
                    </div>
                    
                    {/* Icon / Number Circle */}
                    <div className="w-16 h-16 rounded-full bg-purple-50 border-2 border-purple-200 flex items-center justify-center text-brand-purple text-2xl font-black mb-4 shadow-inner mt-4">
                        <i className="fa-solid fa-face-laugh-squint"></i>
                    </div>
                    
                    <h4 className="font-display text-brand-purple text-lg font-black mb-3">Humor &amp; Silliness</h4>
                    <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
                        Boisterous four-year-olds who have discovered humor, telling jokes and being silly. They love jokes that do not make sense to adults, but children think are hilarious.
                    </p>
                </div>

                {/* Card 2: Self-Confidence (Yellow Theme) */}
                <div className="snap-center shrink-0 w-[290px] sm:w-[310px] lg:w-full max-w-[320px] bg-white border-2 border-dashed border-amber-300 rounded-[2.5rem] p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center relative lg:-translate-y-4 h-full">
                    {/* Washi Tape */}
                    <div className="absolute -top-3 bg-amber-100 text-amber-850 text-[10px] font-black tracking-widest px-6 py-1.5 rotate-[3deg] uppercase rounded shadow-sm border border-amber-200/50">
                        Milestone 02
                    </div>
                    
                    {/* Icon / Number Circle */}
                    <div className="w-16 h-16 rounded-full bg-amber-50 border-2 border-amber-200 flex items-center justify-center text-amber-600 text-2xl font-black mb-4 shadow-inner mt-4">
                        <i className="fa-solid fa-medal"></i>
                    </div>
                    
                    <h4 className="font-display text-amber-700 text-lg font-black mb-3">Self-Confidence</h4>
                    <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
                        Willing to try new adventures. Exude self-confidence, love to show off, and organize groups in expeditions of dare and daunt.
                    </p>
                </div>

                {/* Card 3: Compassion & Control (Green Theme) */}
                <div className="snap-center shrink-0 w-[290px] sm:w-[310px] lg:w-full max-w-[320px] bg-white border-2 border-dashed border-green-300 rounded-[2.5rem] p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center relative lg:translate-y-4 h-full">
                    {/* Washi Tape */}
                    <div className="absolute -top-3 bg-green-100 text-green-800 text-[10px] font-black tracking-widest px-6 py-1.5 rotate-[-2deg] uppercase rounded shadow-sm border border-green-200/50">
                        Milestone 03
                    </div>
                    
                    {/* Icon / Number Circle */}
                    <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center text-green-600 text-2xl font-black mb-4 shadow-inner mt-4">
                        <i className="fa-solid fa-heart-pulse"></i>
                    </div>
                    
                    <h4 className="font-display text-green-700 text-lg font-black mb-3">Compassion &amp; Control</h4>
                    <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
                        Express feelings, console others in distress, suggest ways to resolve conflict, and learn to compromise for the group's happiness.
                    </p>
                </div>

                {/* Card 4: Pre-Academics (Pink Theme) */}
                <div className="snap-center shrink-0 w-[290px] sm:w-[310px] lg:w-full max-w-[320px] bg-white border-2 border-dashed border-rose-300 rounded-[2.5rem] p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center relative lg:-translate-y-4 h-full">
                    {/* Washi Tape */}
                    <div className="absolute -top-3 bg-rose-100 text-rose-800 text-[10px] font-black tracking-widest px-6 py-1.5 rotate-[2deg] uppercase rounded shadow-sm border border-rose-200/50">
                        Milestone 04
                    </div>
                    
                    {/* Icon / Number Circle */}
                    <div className="w-16 h-16 rounded-full bg-rose-50 border-2 border-rose-200 flex items-center justify-center text-rose-600 text-2xl font-black mb-4 shadow-inner mt-4">
                        <i className="fa-solid fa-calculator"></i>
                    </div>
                    
                    <h4 className="font-display text-rose-700 text-lg font-black mb-3">Pre-Academics</h4>
                    <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
                        Associate letters with sounds, spell simple 3-letter words, write numbers, count objects, and comprehend size and measurement concepts.
                    </p>
                </div>

            </div>
        </div>
    </section>

    {/* SECTION 4: Interactive Curriculum Map Showcase */}
    <section className="reveal-on-scroll bg-gradient-to-b from-white to-[#fffdf7] py-24 relative z-10 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-purple-100/40 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-16 relative">
            
            {/* Section Header */}
            <div className="text-center mb-20">
                <span className="font-script text-[#fa8295] text-[2.4rem] block mb-1">Our Curriculum</span>
                <h3 className="font-display text-3xl sm:text-4xl text-brand-purple font-black uppercase tracking-tight">
                    Senior KG Learning Adventure Map
                </h3>
                <div className="w-24 h-1 bg-[#fa8295] mx-auto mt-4 rounded-full"></div>
                <p className="text-gray-500 text-sm sm:text-base font-semibold max-w-xl mx-auto mt-4">
                    Follow our interactive learning path designed to support and nurture every milestone of your child's developing mind and body!
                </p>
            </div>

            {/* The Map Container */}
            <div className="relative max-w-4xl mx-auto py-12">
                
                {/* Winding SVG Path Line (Desktop and Large Screens) */}
                <div className="absolute inset-0 w-full h-full hidden md:block pointer-events-none z-0">
                    <svg className="w-full h-full" viewBox="0 0 800 1000" fill="none" preserveAspectRatio="none">
                        {/* Winding dashed road path */}
                        <path d="M 400,50 C 650,150 650,250 400,300 C 150,350 150,450 400,500 C 650,550 650,650 400,700 C 150,750 150,850 400,900" 
                              stroke="#e9d5ff" 
                              strokeWidth="12" 
                              strokeLinecap="round" 
                              stroke-dasharray="16 12" />
                        
                        {/* Inner colored pathway */}
                        <path d="M 400,50 C 650,150 650,250 400,300 C 150,350 150,450 400,500 C 650,550 650,650 400,700 C 150,750 150,850 400,900" 
                              stroke="#fca5a5" 
                              strokeWidth="4" 
                              strokeLinecap="round" 
                              stroke-dasharray="6 8" />
                    </svg>
                </div>

                {/* Winding SVG Path Line (Mobile and Small Screens - Vertical straight line) */}
                <div className="absolute inset-y-0 left-8 sm:left-12 w-2 h-full md:hidden pointer-events-none z-0">
                    <svg className="w-full h-full" viewBox="0 0 10 1000" fill="none" preserveAspectRatio="none">
                        <line x1="5" y1="0" x2="5" y2="1000" stroke="#e9d5ff" strokeWidth="6" stroke-dasharray="10 8" />
                    </svg>
                </div>

                {/* Map Milestones (Zigzag Layout) */}
                <div className="space-y-16 md:space-y-24 relative z-10">
                    
                    {/* Step 1: Self-Reliance */}
                    <div className="flex flex-col md:flex-row items-center md:justify-start relative">
                        {/* Path Marker */}
                        <div className="absolute left-8 sm:left-12 md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-purple-500 border-4 border-white shadow-lg text-white flex items-center justify-center font-bold text-lg z-20 group hover:scale-110 transition duration-300">
                            <i className="fa-solid fa-child"></i>
                        </div>
                        {/* Left-aligned Card */}
                        <div className="ml-20 sm:ml-28 md:ml-0 md:w-[42%] bg-white border-2 border-dashed border-purple-200 rounded-[2rem] p-6 shadow-md hover:shadow-xl transition duration-300 relative group cursor-pointer hover:-translate-y-1">
                            <div className="absolute -top-3 left-6 bg-purple-100 text-purple-700 text-[10px] font-black px-4 py-1 uppercase rounded tracking-wider">Adventure 01</div>
                            <h4 className="font-display text-brand-purple text-lg font-black mb-2 mt-2">Self-Reliance &amp; Focus</h4>
                            <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
                                Encouraging independent decision-making, exploring new experiences, and taking pride in being class leaders. Nurturing self-help routines and focus periods.
                            </p>
                        </div>
                    </div>

                    {/* Step 2: Advanced Literacy */}
                    <div className="flex flex-col md:flex-row items-center md:justify-end relative">
                        {/* Path Marker */}
                        <div className="absolute left-8 sm:left-12 md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-amber-400 border-4 border-white shadow-lg text-white flex items-center justify-center font-bold text-lg z-20 group hover:scale-110 transition duration-300">
                            <i className="fa-solid fa-pen-nib"></i>
                        </div>
                        {/* Right-aligned Card */}
                        <div className="ml-20 sm:ml-28 md:mr-0 md:w-[42%] bg-white border-2 border-dashed border-amber-200 rounded-[2rem] p-6 shadow-md hover:shadow-xl transition duration-300 relative group cursor-pointer hover:-translate-y-1">
                            <div className="absolute -top-3 left-6 bg-amber-100 text-amber-700 text-[10px] font-black px-4 py-1 uppercase rounded tracking-wider">Adventure 02</div>
                            <h4 className="font-display text-amber-700 text-lg font-black mb-2 mt-2">Advanced Literacy</h4>
                            <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
                                Mastering phonetic spelling, writing simple three-letter words, reading simple sentences, and communicating thoughts in paragraphs.
                            </p>
                        </div>
                    </div>

                    {/* Step 3: Math & Logic */}
                    <div className="flex flex-col md:flex-row items-center md:justify-start relative">
                        {/* Path Marker */}
                        <div className="absolute left-8 sm:left-12 md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-green-500 border-4 border-white shadow-lg text-white flex items-center justify-center font-bold text-lg z-20 group hover:scale-110 transition duration-300">
                            <i className="fa-solid fa-calculator"></i>
                        </div>
                        {/* Left-aligned Card */}
                        <div className="ml-20 sm:ml-28 md:ml-0 md:w-[42%] bg-white border-2 border-dashed border-green-200 rounded-[2rem] p-6 shadow-md hover:shadow-xl transition duration-300 relative group cursor-pointer hover:-translate-y-1">
                            <div className="absolute -top-3 left-6 bg-green-100 text-green-700 text-[10px] font-black px-4 py-1 uppercase rounded tracking-wider">Adventure 03</div>
                            <h4 className="font-display text-green-700 text-lg font-black mb-2 mt-2">Mathematical Logic</h4>
                            <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
                                Sorting shapes, arithmetic basics, counting up to higher numbers, and applying logical reasoning to everyday problem solving.
                            </p>
                        </div>
                    </div>

                    {/* Step 4: Environmental Academics */}
                    <div className="flex flex-col md:flex-row items-center md:justify-end relative">
                        {/* Path Marker */}
                        <div className="absolute left-8 sm:left-12 md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-pink-500 border-4 border-white shadow-lg text-white flex items-center justify-center font-bold text-lg z-20 group hover:scale-110 transition duration-300">
                            <i className="fa-solid fa-earth-americas"></i>
                        </div>
                        {/* Right-aligned Card */}
                        <div className="ml-20 sm:ml-28 md:mr-0 md:w-[42%] bg-white border-2 border-dashed border-rose-200 rounded-[2rem] p-6 shadow-md hover:shadow-xl transition duration-300 relative group cursor-pointer hover:-translate-y-1">
                            <div className="absolute -top-3 left-6 bg-rose-100 text-rose-700 text-[10px] font-black px-4 py-1 uppercase rounded tracking-wider">Adventure 04</div>
                            <h4 className="font-display text-rose-700 text-lg font-black mb-2 mt-2">Primary School Readiness</h4>
                            <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
                                Enhancing social science, geographic layouts, natural cycles, and community functions. Nurturing empathy and high readiness for formal schools.
                            </p>
                        </div>
                    </div>

                    {/* Step 5: Creative Mastery */}
                    <div className="flex flex-col md:flex-row items-center md:justify-start relative">
                        {/* Path Marker */}
                        <div className="absolute left-8 sm:left-12 md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-blue-500 border-4 border-white shadow-lg text-white flex items-center justify-center font-bold text-lg z-20 group hover:scale-110 transition duration-300">
                            <i className="fa-solid fa-wand-magic-sparkles"></i>
                        </div>
                        {/* Left-aligned Card */}
                        <div className="ml-20 sm:ml-28 md:ml-0 md:w-[42%] bg-white border-2 border-dashed border-blue-200 rounded-[2rem] p-6 shadow-md hover:shadow-xl transition duration-300 relative group cursor-pointer hover:-translate-y-1">
                            <div className="absolute -top-3 left-6 bg-blue-100 text-blue-700 text-[10px] font-black px-4 py-1 uppercase rounded tracking-wider">Adventure 05</div>
                            <h4 className="font-display text-blue-700 text-lg font-black mb-2 mt-2">Creative Mastery</h4>
                            <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
                                Painting complex scenes, sculpting clay modeling, team-building skits, and public reciting of stories. Nurturing creative leadership.
                            </p>
                        </div>
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
