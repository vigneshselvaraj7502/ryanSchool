import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import AnimatedCounter from '../components/AnimatedCounter';

export default function PlaygroupPage() {
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
    <div className="playgrouppage-page">
      {/* Mobile Drawer Container */}
    <div id="mobile-drawer" className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl z-50 transform translate-x-full transition-transform duration-300 ease-in-out lg:hidden flex flex-col p-6">
        <div className="flex justify-between items-center mb-8 border-b pb-4">
            <span className="font-display text-xl text-brand-purple font-bold">RYANS MENU</span>
            <button id="close-drawer-btn" className="text-brand-purple p-2 hover:bg-gray-100 rounded-full">
                <i className="fa-solid fa-xmark text-xl"></i>
            </button>
        </div>
        <nav className="flex flex-col gap-4 font-bold text-gray-700 text-[15px]">
            <Link to="/">Home</Link>
            <Link to="/about"><span className="whitespace-nowrap inline-block">About Us</span></Link>
            <div className="flex flex-col gap-2 py-1">
                <span className="text-brand-purple font-black uppercase text-[10px] tracking-wider">Programs</span>
                <Link to="/daycare" className="pl-3 hover:text-brand-purple">Day Care (Infants)</Link>
                <Link to="/playgroup" className="pl-3 hover:text-brand-purple">Play Group (Toddlers)</Link>
                <Link to="/nursery" className="pl-3 hover:text-brand-purple">Nursery (2-3 Years)</Link>
                <Link to="/juniorkg" className="pl-3 hover:text-brand-purple">Junior KG (3-4 Years)</Link>
                <Link to="/seniorkg" className="pl-3 hover:text-brand-purple">Senior KG (4-5 Years)</Link>
            </div>
            <Link to="/facilities">Facilities</Link>
            <Link to="/#testimonials">Testimonials</Link>
            <Link to="/contact">Admission</Link>
        </nav>
    </div>
    {/* Drawer Dark Overlay */}
    <div id="mobile-overlay" className="fixed inset-0 bg-black/40 z-40 hidden lg:hidden"></div>

    {/* Play Group Page Hero (Dynamic Video Background) */}
    <section className="reveal-on-scroll relative py-24 px-6 sm:px-16 overflow-hidden border-b-8 border-brand-yellow">
        {/* Widescreen Video/GIF Background Layer */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img src="/assets/gif/hero.gif" alt="Playgroup Classroom Loop" className="w-full h-full object-cover scale-105 filter blur-[1px]" />
        </div>
        {/* Premium Dark Purple Backdrop Overlay for High Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#381c65]/90 via-[#4c2882]/85 to-[#381c65]/90 z-10"></div>

        {/* Floating playful particles */}
        <div className="absolute top-[15%] left-[8%] text-brand-yellow opacity-40 text-3xl animate-float-slow z-20"><i className="fa-solid fa-shapes"></i></div>
        <div className="absolute bottom-[15%] right-[8%] text-[#fa8295] opacity-40 text-4xl animate-float-medium z-20"><i className="fa-solid fa-face-smile"></i></div>

        <div className="max-w-[1000px] w-full mx-auto text-center relative z-20">
            <span className="font-script text-brand-yellow text-[3.2rem] leading-none mb-3 inline-block transform -rotate-1">Exploring Together</span>
            <h2 className="font-display text-4xl sm:text-6xl text-white font-black uppercase tracking-tight leading-none mb-6">
                Play Group
            </h2>
            {/* Playful divider */}
            <svg className="w-36 h-3 text-brand-yellow fill-none stroke-current my-6 mx-auto" strokeWidth="3.5" strokeLinecap="round" viewBox="0 0 100 10">
                <path d="M5 5 Q20 1 35 5 T65 5 T95 5" />
            </svg>
            <p className="text-purple-100 font-semibold text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                Designed to meet the developmental needs of precocious, active, and ever-aware toddlers aged 18 to 25 months old. Here, we welcome first words, guide tiny steps, and celebrate a world full of early wonders.
            </p>
        </div>
    </section>

    {/* SECTION 1: Nurturing Play Group Care & Core Philosophy (Editorial Collage Style) */}
    <section className="reveal-on-scroll w-full bg-[#FAF2ED] py-24 relative overflow-hidden z-10 border-b border-purple-50">
        
        {/* Big text wall backdrop (tilted/layered in the background) */}
        <div className="absolute inset-x-0 top-12 z-0 pointer-events-none select-none text-center px-4 max-w-5xl mx-auto">
            <h4 className="font-display text-[2rem] sm:text-[4.2rem] font-black text-brand-purple/5 uppercase tracking-widest leading-none">
                Nurturing <span className="text-[#fa8295]/5">/</span> Playful <span className="text-[#fa8295]/5">/</span> Secure <span className="text-[#fa8295]/5">/</span> Happy <span className="text-[#fa8295]/5">/</span> Active <span className="text-[#fa8295]/5">/</span> Loved <span className="text-[#fa8295]/5">/</span> Exploring <span className="text-[#fa8295]/5">/</span> Imaginative
            </h4>
        </div>

        <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-16 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Left Flanking Column: Nurturing Overview */}
                <div className="md:col-span-4 text-center md:text-right flex flex-col items-center md:items-end order-2 md:order-1 mt-8 md:mt-0">
                    <div className="bg-white p-3.5 rounded-2xl shadow-sm mb-4 border border-purple-50 card-interactive-lift">
                        <i className="fa-solid fa-shapes text-xl text-[#fa8295]"></i>
                    </div>
                    <span className="text-xs font-black tracking-widest text-[#fa8295] uppercase mb-2">This Program Caters</span>
                    <p className="text-gray-600 text-xs sm:text-sm font-semibold leading-relaxed max-w-xs">
                        Toddlers aged 18–25 months who are exploring their widening world. We focus on keeping the child happy, engaged, and secure in a warm classroom.
                    </p>
                </div>

                {/* Center Column: Overlapping Toddler Cutout Pop-Out */}
                <div className="md:col-span-4 flex flex-col items-center justify-center relative min-h-[360px] order-1 md:order-2">
                    {/* Background glowing spotlight */}
                    <div className="absolute w-64 h-64 rounded-full bg-brand-yellow/10 filter blur-3xl z-0 animate-pulse"></div>
                    {/* Decorative floating elements */}
                    <div className="absolute top-2 left-6 text-3xl animate-float-slow z-20 select-none">🎈</div>
                    <div className="absolute bottom-6 right-6 text-3xl animate-float-medium z-20 select-none">🧸</div>
                    
                    {/* Circular framed backup photo representing caregivers */}
                    <div className="absolute w-44 h-44 rounded-full border-4 border-white overflow-hidden shadow-md bg-purple-50 z-0 opacity-40 translate-y-[-30px]">
                        <img src="/assets/caring_teacher_toddler.jpg" alt="Caregiver Portrait" className="w-full h-full object-cover" />
                    </div>

                    {/* The Happy Toddler cutout popping out in front (The focal point!) */}
                    <div className="w-[280px] h-[280px] z-10 relative transform hover:scale-[1.04] transition duration-500 cursor-pointer drop-shadow-[0_20px_40px_rgba(76,40,130,0.18)]">
                        <img src="/assets/happy_toddler_cutout.png" alt="Happy Toddler Playing" className="w-full h-full object-contain" />
                    </div>
                </div>

                {/* Right Flanking Column: Nurturing Pillars */}
                <div className="md:col-span-4 text-center md:text-left flex flex-col items-center md:items-start order-3 mt-8 md:mt-0">
                    <div className="bg-white p-3.5 rounded-2xl shadow-sm mb-4 border border-purple-50 card-interactive-lift">
                        <i className="fa-solid fa-hand-holding-heart text-xl text-brand-purple"></i>
                    </div>
                    <span className="text-xs font-black tracking-widest text-brand-purple uppercase mb-2">Our Core Cornerstones</span>
                    <p className="text-gray-600 text-xs sm:text-sm font-semibold leading-relaxed max-w-xs">
                        Warm nurturing interactions with caregivers, days spent in a home-like environment for learning, individualized attention and meaningful partnerships with parents.
                    </p>
                </div>

            </div>
        </div>
    </section>

    {/* SECTION 2: Interactive Color Hunt Game */}
    <section className="reveal-on-scroll max-w-[1240px] w-full mx-auto px-6 sm:px-16 py-10 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-script text-[#fa8295] text-3xl">Interactive Fun</span>
            <h3 className="font-display text-2xl sm:text-3xl text-brand-purple font-black uppercase">Color Hunt Adventure</h3>
            <p className="text-gray-500 text-xs sm:text-sm font-semibold mt-2">Help the teddy bear find all the toys of the matching color! Tap them before they float away.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Side: Canvas Frame */}
            <div className="lg:col-span-7 w-full flex justify-center">
                <div className="relative w-full aspect-[4/3] bg-white border-[14px] border-[#f5f0ff] rounded-[3.5rem] shadow-xl overflow-hidden p-2">
                    <div id="color-hunt-container" className="relative w-full h-full rounded-[2.8rem] overflow-hidden shadow-inner cursor-pointer" style={{ background: 'linear-gradient(135deg, #fdfbf7 0%, #fffbeb 100%)' }}>
                    </div>
                </div>
            </div>

            {/* Right Side: Game Details */}
            <div className="lg:col-span-5 space-y-6">
                <div className="bg-white border-2 border-purple-50 rounded-[3rem_4.5rem_3.5rem_3rem] p-8 shadow-sm">
                    <h4 className="font-display text-brand-purple text-lg font-black mb-3">🎨 Play &amp; Learn Colors</h4>
                    <p className="text-gray-500 text-sm font-semibold leading-relaxed mb-4">
                        Color Hunt is a playful sensory game built specifically for our playgroup toddlers (ages 2-3) to learn primary colors in an engaging way.
                    </p>
                    <p className="text-gray-500 text-sm font-semibold leading-relaxed mb-4">
                        Tapping the correct colors helps infants build <strong className="text-brand-purple">visual association</strong>, <strong className="text-brand-orange">hand-eye coordination</strong>, and cognitive response.
                    </p>
                    <div className="flex flex-wrap items-center gap-3 mt-4">
                        <span className="bg-purple-50 text-brand-purple font-black text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full">✨ Color Match</span>
                        <span className="bg-pink-50 text-[#fa8295] font-black text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full">🧸 Toy Taps</span>
                        <span className="bg-yellow-50 text-brand-orange font-black text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full">🎯 Motor Skills</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* SECTION 3: Developmental Phases */}
    <section className="reveal-on-scroll border-y border-purple-50 py-20 relative z-10 overflow-hidden" style={{ backgroundImage: 'url(\'/assets/kids_blocks_play.jpg\')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        {/* Soft high-contrast overlay for text legibility */}
        <div className="absolute inset-0 bg-[#fffdf5]/85 z-0"></div>
        <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-16 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="font-script text-brand-orange text-[2.4rem] block mb-1">Outward Phase</span>
                <h3 className="font-display text-2xl sm:text-3xl text-brand-purple font-black uppercase">Rapid Toddler Development</h3>
                <div className="w-20 h-1 bg-[#fa8295] mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
                {/* Development card */}
                <div className="bg-white border border-[#FDE68A]/80 rounded-[3.5rem_3.5rem_2.5rem_3.5rem] p-8 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="bg-[#FFFBEB] text-[#D97706] w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm"><i className="fa-solid fa-child-reaching"></i></div>
                        <h4 className="font-display text-brand-purple text-xl font-black mb-4">Growing Skills</h4>
                        <p className="text-gray-500 text-sm sm:text-base font-semibold leading-relaxed">
                            The Toddler begins a rapid development in their physical, cognitive, social and linguistic skills. Socially a toddler may begin asserting his individual needs, thoughts and preferences. 
                        </p>
                    </div>
                </div>

                {/* Independence card */}
                <div className="bg-white border border-[#FECACA]/80 rounded-[3rem_4.5rem_3.5rem_3rem] p-8 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="bg-[#FFF5F5] text-[#E11D48] w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm"><i className="fa-solid fa-arrows-spin"></i></div>
                        <h4 className="font-display text-brand-purple text-xl font-black mb-4">stubborn Independence</h4>
                        <p className="text-gray-500 text-sm sm:text-base font-semibold leading-relaxed">
                            During this outward phase of development, he is caught uncomfortably between infancy and personhood; he may swing rapidly between clingy behaviors and stubborn independence.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* SECTION 4: Early Learning Curriculum (Milestones) */}
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
                <span className="font-script text-[#fa8295] text-[2.4rem] block mb-1">Our Curriculum</span>
                <h3 className="font-display text-3xl sm:text-4xl text-brand-purple font-black uppercase leading-tight">
                    Development & Milestones
                </h3>
                <svg className="w-24 h-3 text-[#fa8295] fill-none stroke-current my-4 mx-auto lg:mx-0" strokeWidth="3" strokeLinecap="round" viewBox="0 0 100 10">
                    <path d="M5 5 Q20 1 35 5 T65 5 T95 5" />
                </svg>
                <p className="text-gray-500 text-sm font-semibold leading-relaxed max-w-md mx-auto lg:mx-0">
                    Nurturing little minds through play, learning and real-world experiences.
                </p>
            </div>
            
            {/* Right Side: Big, Widescreen Teacher & Toddlers Image */}
            <div className="lg:col-span-7 flex justify-center">
                <div className="rounded-[45%_55%_45%_55%_/_50%_50%_40%_40%] overflow-hidden border-8 border-white shadow-2xl w-full max-w-xl h-64 md:h-72 bg-white relative">
                    <img src="/assets/playgroup_curriculum.jpg" alt="Teacher and Playgroup Toddlers" className="w-full h-full object-cover hover:scale-[1.02] transition duration-500" />
                </div>
            </div>
        </div>

        {/* Carousel Row with Scrapbook Cards */}
        <div className="relative z-10 max-w-6xl mx-auto mt-12 pb-8">
            
             {/* Cards Grid / Carousel Track */}
            <div id="curriculum-carousel-track" className="flex lg:grid lg:grid-cols-4 gap-8 w-full overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-none scroll-smooth relative z-10 py-6 px-4 items-stretch justify-items-center">
                
                {/* Card 1: Physical Skills (Purple Theme) */}
                <div className="snap-center shrink-0 w-[290px] sm:w-[310px] lg:w-full max-w-[320px] bg-white border-2 border-dashed border-purple-300 rounded-[2.5rem] p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center relative lg:translate-y-4 h-full">
                    {/* Washi Tape */}
                    <div className="absolute -top-3 bg-purple-100 text-purple-700 text-[10px] font-black tracking-widest px-6 py-1.5 rotate-[-3deg] uppercase rounded shadow-sm border border-purple-200/50">
                        Milestone 01
                    </div>
                    
                    {/* Icon / Number Circle */}
                    <div className="w-16 h-16 rounded-full bg-purple-50 border-2 border-purple-200 flex items-center justify-center text-brand-purple text-2xl font-black mb-4 shadow-inner mt-4">
                        <i className="fa-solid fa-child"></i>
                    </div>
                    
                    <h4 className="font-display text-brand-purple text-lg font-black mb-3">Physical Skills</h4>
                    <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
                        Refining gross and fine motor skills. Jumping, running, balancing, building tall block towers, and coloring outlines.
                    </p>
                </div>

                {/* Card 2: Cognitive Skills (Yellow Theme) */}
                <div className="snap-center shrink-0 w-[290px] sm:w-[310px] lg:w-full max-w-[320px] bg-white border-2 border-dashed border-amber-300 rounded-[2.5rem] p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center relative lg:-translate-y-4 h-full">
                    {/* Washi Tape */}
                    <div className="absolute -top-3 bg-amber-100 text-amber-850 text-[10px] font-black tracking-widest px-6 py-1.5 rotate-[3deg] uppercase rounded shadow-sm border border-amber-200/50">
                        Milestone 02
                    </div>
                    
                    {/* Icon / Number Circle */}
                    <div className="w-16 h-16 rounded-full bg-amber-50 border-2 border-amber-200 flex items-center justify-center text-amber-600 text-2xl font-black mb-4 shadow-inner mt-4">
                        <i className="fa-solid fa-puzzle-piece"></i>
                    </div>
                    
                    <h4 className="font-display text-amber-700 text-lg font-black mb-3">Cognitive Skills</h4>
                    <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
                        Acquiring early logical and sorting skills. Sorting by shape and color, solving basic puzzles, and counting simple objects.
                    </p>
                </div>

                {/* Card 3: Social Skills (Green Theme) */}
                <div className="snap-center shrink-0 w-[290px] sm:w-[310px] lg:w-full max-w-[320px] bg-white border-2 border-dashed border-green-300 rounded-[2.5rem] p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center relative lg:translate-y-4 h-full">
                    {/* Washi Tape */}
                    <div className="absolute -top-3 bg-green-100 text-green-800 text-[10px] font-black tracking-widest px-6 py-1.5 rotate-[-2deg] uppercase rounded shadow-sm border border-green-200/50">
                        Milestone 03
                    </div>
                    
                    {/* Icon / Number Circle */}
                    <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center text-green-600 text-2xl font-black mb-4 shadow-inner mt-4">
                        <i className="fa-solid fa-users"></i>
                    </div>
                    
                    <h4 className="font-display text-green-700 text-lg font-black mb-3">Social Skills</h4>
                    <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
                        Learning early preschool sharing, cooperative group playtime, expressing affection appropriately, and handling tiny conflicts.
                    </p>
                </div>

                {/* Card 4: Linguistic Skills (Pink Theme) */}
                <div className="snap-center shrink-0 w-[290px] sm:w-[310px] lg:w-full max-w-[320px] bg-white border-2 border-dashed border-rose-300 rounded-[2.5rem] p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center relative lg:-translate-y-4 h-full">
                    {/* Washi Tape */}
                    <div className="absolute -top-3 bg-rose-100 text-rose-800 text-[10px] font-black tracking-widest px-6 py-1.5 rotate-[2deg] uppercase rounded shadow-sm border border-rose-200/50">
                        Milestone 04
                    </div>
                    
                    {/* Icon / Number Circle */}
                    <div className="w-16 h-16 rounded-full bg-rose-50 border-2 border-rose-200 flex items-center justify-center text-rose-600 text-2xl font-black mb-4 shadow-inner mt-4">
                        <i className="fa-solid fa-quote-left"></i>
                    </div>
                    
                    <h4 className="font-display text-rose-700 text-lg font-black mb-3">Linguistic Skills</h4>
                    <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
                        Rapid vocabulary growth, speaking in 2-3 word phrases, listening to kids bedtime stories, and reciting basic rhymes.
                    </p>
                </div>

            </div>
        </div>
 

    </section>

    {/* SECTION 4.5: Play & Activity Gallery */}
    <section className="reveal-on-scroll max-w-[1240px] w-full mx-auto px-6 sm:px-16 py-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-script text-brand-orange text-[2.4rem] block mb-1">Toddler Adventures</span>
            <h3 className="font-display text-2xl sm:text-3xl text-brand-purple font-black uppercase">Colorful Play & Activities</h3>
            <p className="text-gray-500 text-xs sm:text-sm font-semibold mt-2">A glimpse into a day full of interactive games, park adventures, and creative arts.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-10 items-stretch mt-16">
            
            {/* Row 1 Left: Park Adventures (Widescreen, tilted slightly left) */}
            <div className="lg:col-span-7 flex flex-col justify-between group bg-white border-8 border-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:rotate-0 transition-all duration-300 transform -rotate-[1.5deg] relative">
                {/* Polaroid Washi Tape Overlay */}
                <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 w-28 h-8 bg-yellow-100/60 backdrop-blur-[2px] border border-yellow-200/50 rotate-[-3deg] z-30 shadow-sm pointer-events-none"></div>
                
                {/* Floating Doodle Cloud */}
                <div className="absolute -bottom-4 -right-4 text-[#fa8295] text-3xl z-20 animate-float-slow select-none"><i className="fa-solid fa-cloud"></i></div>

                <div className="overflow-hidden h-72 sm:h-96 rounded-t-xl relative">
                    <img src="/assets/kids_park_play.jpg" alt="Toddlers Playing in Park" className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-500" />
                    <span className="absolute top-4 left-4 bg-brand-purple text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">Park Slide & Swings</span>
                </div>
                <div className="p-6 bg-white rounded-b-3xl">
                    <h4 className="font-display text-brand-purple text-xl font-black mb-2">Outdoor Park Adventures</h4>
                    <p className="text-gray-500 text-sm font-semibold leading-relaxed">Hear the sweet giggles floating through the warm sunshine as caregivers guide their steady steps down the slides. Held safely, they learn to run, slide, and explore the fresh green grass with eyes full of pure wonder.</p>
                </div>
            </div>

            {/* Row 1 Right: Circle Games (Tall card, tilted slightly right) */}
            <div className="lg:col-span-5 flex flex-col justify-between group bg-white border-8 border-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:rotate-0 transition-all duration-300 transform rotate-[2deg] relative">
                {/* Polaroid Washi Tape Overlay */}
                <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 w-28 h-8 bg-yellow-100/60 backdrop-blur-[2px] border border-yellow-200/50 rotate-[3deg] z-30 shadow-sm pointer-events-none"></div>
                
                {/* Floating Doodle Music Note */}
                <div className="absolute -top-4 -left-4 text-[#D97706] text-3xl z-20 animate-float-medium select-none"><i className="fa-solid fa-music"></i></div>

                <div className="overflow-hidden h-72 sm:h-96 rounded-t-xl relative">
                    <img src="/assets/kids_chairs_game.jpg" alt="Toddlers Playing Chairs" className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-500" />
                    <span className="absolute top-4 left-4 bg-[#D97706] text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">Musical Chairs</span>
                </div>
                <div className="p-6 bg-white rounded-b-3xl">
                    <h4 className="font-display text-[#D97706] text-xl font-black mb-2">Toddler Circle Games</h4>
                    <p className="text-gray-500 text-sm font-semibold leading-relaxed">Little hands clap together in happy rhythm as warm smiles welcome them to the circle. Guided by their teacher's soft singing, they play games, learning to share and make their very first friends.</p>
                </div>
            </div>

            {/* Row 2 Left: Messy Art (Tall card, tilted slightly left) */}
            <div className="lg:col-span-5 flex flex-col justify-between group bg-white border-8 border-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:rotate-0 transition-all duration-300 transform -rotate-[2deg] relative">
                {/* Polaroid Washi Tape Overlay */}
                <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 w-28 h-8 bg-yellow-100/60 backdrop-blur-[2px] border border-yellow-200/50 rotate-[-2deg] z-30 shadow-sm pointer-events-none"></div>
                
                {/* Floating Doodle Palette/Brush */}
                <div className="absolute -bottom-4 -left-4 text-green-500 text-3xl z-20 animate-float-slow select-none"><i className="fa-solid fa-palette"></i></div>

                <div className="overflow-hidden h-72 sm:h-96 rounded-t-xl relative">
                    <img src="/assets/kids_art_painting.jpg" alt="Toddlers Painting" className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-500" />
                    <span className="absolute top-4 left-4 bg-[#16A34A] text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">Fingerpaint</span>
                </div>
                <div className="p-6 bg-white rounded-b-3xl">
                    <h4 className="font-display text-[#16A34A] text-xl font-black mb-2">Messy Finger Painting</h4>
                    <p className="text-gray-500 text-sm font-semibold leading-relaxed">Messy, paint-covered fingers bring bright giggles! Toddlers happily stamp their tiny hands onto paper to create artwork for mommy and daddy, building the confidence to explore.</p>
                </div>
            </div>

            {/* Row 2 Right: Sandbox (Widescreen, tilted slightly right) */}
            <div className="lg:col-span-7 flex flex-col justify-between group bg-white border-8 border-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:rotate-0 transition-all duration-300 transform rotate-[1.5deg] relative">
                {/* Polaroid Washi Tape Overlay */}
                <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 w-28 h-8 bg-yellow-100/60 backdrop-blur-[2px] border border-yellow-200/50 rotate-[2deg] z-30 shadow-sm pointer-events-none"></div>
                
                {/* Floating Doodle Sun */}
                <div className="absolute -top-4 -right-4 text-yellow-400 text-4xl z-20 animate-float-medium select-none"><i className="fa-solid fa-sun"></i></div>

                <div className="overflow-hidden h-72 sm:h-96 rounded-t-xl relative">
                    <img src="/assets/kids_sand_play.jpg" alt="Toddlers in Sandpit" className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-500" />
                    <span className="absolute top-4 left-4 bg-[#E11D48] text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">Sandbox Castles</span>
                </div>
                <div className="p-6 bg-white rounded-b-3xl">
                    <h4 className="font-display text-[#E11D48] text-xl font-black mb-2">Sandbox Castles & Trucks</h4>
                    <p className="text-gray-500 text-sm font-semibold leading-relaxed">Happy little builders sit side-by-side, sharing toy trucks and patting warm sand into castles. Together, they laugh as their towers tumble, learning the simple joy of sharing under reassuring watch.</p>
                </div>
            </div>

        </div>
    </section>

    {/* SECTION 5: Detailed Milestones Expanded */}
    <section className="reveal-on-scroll max-w-[1240px] w-full mx-auto px-6 sm:px-16 pb-20 relative z-10 overflow-visible">
        <div className="bg-white border-2 border-purple-50 rounded-[3.5rem] p-10 sm:p-12 shadow-xl relative overflow-visible">
            
            {/* Floating top-right illustration */}
            <img src="/assets/play_blocks_plane.png" alt="Building Blocks &amp; Plane" className="absolute -top-12 -right-6 w-32 sm:w-40 h-auto drop-shadow-md z-20 pointer-events-none" />
            
            <div className="flex items-center gap-5 mb-10">
                <div className="relative w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center border-2 border-purple-100 shadow-inner shrink-0">
                    <i className="fa-solid fa-child text-[#7c3aed] text-3xl"></i>
                    <div className="absolute -top-1 -right-1 text-purple-300 text-xs animate-pulse"><i className="fa-solid fa-star"></i></div>
                </div>
                <div>
                    <h3 className="font-display text-2xl sm:text-3xl text-brand-purple font-black uppercase tracking-tight">Development Details</h3>
                    <p className="text-gray-400 text-xs sm:text-sm font-semibold mt-1">Acquiring primary physical, social, and mental concepts</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                {/* Column 1: Physical Refining */}
                <div className="bg-[#FFFBF7] border border-amber-100/50 rounded-[2.5rem] p-8 shadow-sm flex flex-col justify-between relative overflow-visible pb-12 pt-10">
                    <div>
                        {/* Header Pill */}
                        <div className="inline-flex items-center gap-2 bg-white border border-amber-100 px-4 py-2 rounded-full shadow-sm">
                            <i className="fa-solid fa-dumbbell text-amber-500"></i>
                            <span className="text-amber-600 font-black text-sm tracking-tight">Physical refining</span>
                        </div>
                        
                        {/* Heart Divider */}
                        <div className="flex items-center gap-1.5 w-full my-6">
                            <div className="h-[1px] bg-amber-200 flex-1"></div>
                            <i className="fa-solid fa-heart text-amber-300 text-[10px]"></i>
                            <div className="h-[1px] bg-amber-200 flex-1"></div>
                        </div>

                        <p className="text-gray-600 text-xs sm:text-sm font-semibold leading-relaxed">
                            Stacking two to four blocks, scribbling, turning pages of a book, and using a spoon with help. Toddlers are capable of exercising the gross motor muscles necessary to run, walk up stairs with help and climb onto a curb. Some show symptoms of bowel control; however, most are not yet ready for toilet training.
                        </p>
                    </div>
                    {/* Absolute illustration */}
                    <img src="/assets/baby_shoe.png" alt="Baby Shoe" className="absolute -top-6 right-6 w-20 h-auto drop-shadow-sm pointer-events-none" />
                </div>

                {/* Column 2: Social Interaction */}
                <div className="bg-[#FFF9FA] border border-pink-100/50 rounded-[2.5rem] p-8 shadow-sm flex flex-col justify-between relative overflow-visible pb-12 pt-10">
                    <div>
                        {/* Header Pill */}
                        <div className="inline-flex items-center gap-2 bg-white border border-pink-100 px-4 py-2 rounded-full shadow-sm">
                            <i className="fa-solid fa-users text-rose-500"></i>
                            <span className="text-rose-600 font-black text-sm tracking-tight">Social interaction</span>
                        </div>
                        
                        {/* Heart Divider */}
                        <div className="flex items-center gap-1.5 w-full my-6">
                            <div className="h-[1px] bg-rose-200 flex-1"></div>
                            <i className="fa-solid fa-heart text-rose-300 text-[10px]"></i>
                            <div className="h-[1px] bg-rose-200 flex-1"></div>
                        </div>

                        <p className="text-gray-600 text-xs sm:text-sm font-semibold leading-relaxed">
                            Socially, the Toddler begins to engage other children in play and, on a very limited basis, begins to share toys. They assert individual needs, thoughts, and preferences, juggled between clingy behaviors and stubborn independence.
                        </p>
                    </div>
                    {/* Absolute illustration (Reuse teddy bear) */}
                    <img src="/assets/teddy_heart.png" alt="Teddy &amp; Heart" className="absolute -top-6 right-6 w-20 h-auto drop-shadow-sm pointer-events-none" />
                </div>

                {/* Column 3: Cognitive Learning */}
                <div className="bg-[#FAF8FF] border border-purple-100/50 rounded-[2.5rem] p-8 shadow-sm flex flex-col justify-between relative overflow-visible pb-12 pt-10">
                    <div>
                        {/* Header Pill */}
                        <div className="inline-flex items-center gap-2 bg-white border border-purple-100 px-4 py-2 rounded-full shadow-sm">
                            <i className="fa-solid fa-brain text-[#7c3aed]"></i>
                            <span className="text-[#7c3aed] font-black text-sm tracking-tight">Cognitive learning</span>
                        </div>
                        
                        {/* Heart Divider */}
                        <div className="flex items-center gap-1.5 w-full my-6">
                            <div className="h-[1px] bg-purple-200 flex-1"></div>
                            <i className="fa-solid fa-heart text-purple-300 text-[10px]"></i>
                            <div className="h-[1px] bg-purple-200 flex-1"></div>
                        </div>

                        <p className="text-gray-600 text-xs sm:text-sm font-semibold leading-relaxed">
                            Toddlers learn mental skills that are used in the process of acquiring knowledge (memoring, perception, and imitation). These are developed by showing affection, listening to the toddler or looking at pictures and through imitation. They are able to identify body parts, three dimensions and say “my” or “mine”.
                        </p>
                    </div>
                    {/* Absolute illustration */}
                    <img src="/assets/open_book.png" alt="Open Book" className="absolute -top-6 right-6 w-20 h-auto drop-shadow-sm pointer-events-none" />
                </div>

                {/* Column 4: Linguistic Growth */}
                <div className="bg-[#F4FAF6] border border-green-100/50 rounded-[2.5rem] p-8 shadow-sm flex flex-col justify-between relative overflow-visible pb-12 pt-10">
                    <div>
                        {/* Header Pill */}
                        <div className="inline-flex items-center gap-2 bg-white border border-green-100 px-4 py-2 rounded-full shadow-sm">
                            <i className="fa-solid fa-message text-green-500"></i>
                            <span className="text-green-600 font-black text-sm tracking-tight">Linguistic growth</span>
                        </div>
                        
                        {/* Heart Divider */}
                        <div className="flex items-center gap-1.5 w-full my-6">
                            <div className="h-[1px] bg-green-200 flex-1"></div>
                            <i className="fa-solid fa-heart text-green-300 text-[10px]"></i>
                            <div className="h-[1px] bg-green-200 flex-1"></div>
                        </div>

                        <p className="text-gray-600 text-xs sm:text-sm font-semibold leading-relaxed">
                            Linguistically, the Toddler begins a rapid acquisition of words. With the help of love or baby sign language, they may actually begin posing in sentences and are able to adequately express their wants and needs to caregivers.
                        </p>
                    </div>
                    {/* Absolute CSS ABC Speech Bubble (Scale for perfect placement) */}
                    <div className="absolute -top-6 right-6 pointer-events-none select-none scale-[0.85]">
                        <div className="relative bg-[#80deea] text-white font-black text-xs px-3.5 py-1.5 rounded-2xl shadow-sm flex items-center justify-center">
                            abc
                            <div className="absolute -bottom-1 right-3 w-2.5 h-2.5 bg-[#80deea] rotate-45 rounded-sm"></div>
                        </div>
                        <div className="absolute -right-2 -bottom-4 bg-[#ffb74d] px-2 py-0.5 rounded-xl shadow-sm flex gap-0.5 items-center justify-center scale-90">
                            <span className="w-1 h-1 rounded-full bg-white"></span>
                            <span className="w-1 h-1 rounded-full bg-white"></span>
                            <span className="w-1 h-1 rounded-full bg-white"></span>
                            <div className="absolute -bottom-0.5 left-2 w-1.5 h-1.5 bg-[#ffb74d] rotate-45 rounded-sm"></div>
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
