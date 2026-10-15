import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import AnimatedCounter from '../components/AnimatedCounter';

export default function DaycarePage() {
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
    <div className="daycarepage-page">
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

    {/* Infants Day Care Page Hero (Dynamic Video Background) */}
    <section className="reveal-on-scroll relative py-24 px-6 sm:px-16 overflow-hidden border-b-8 border-brand-yellow">
        {/* Widescreen Video/GIF Background Layer */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img src="/assets/gif/hero.gif" alt="Infants Classroom Loop" className="w-full h-full object-cover scale-105 filter blur-[1px]" />
        </div>
        {/* Premium Dark Purple Backdrop Overlay for High Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#381c65]/90 via-[#4c2882]/85 to-[#381c65]/90 z-10"></div>

        {/* Floating playful particles */}
        <div className="absolute top-[15%] left-[8%] text-brand-yellow opacity-40 text-3xl animate-float-slow z-20"><i className="fa-solid fa-shapes"></i></div>
        <div className="absolute bottom-[15%] right-[8%] text-[#fa8295] opacity-40 text-4xl animate-float-medium z-20"><i className="fa-solid fa-face-smile"></i></div>

        <div className="max-w-[1000px] w-full mx-auto text-center relative z-20">
            <span className="font-script text-brand-yellow text-[3.2rem] leading-none mb-3 inline-block transform -rotate-1">Home Away From Home</span>
            <h2 className="font-display text-4xl sm:text-6xl text-white font-black uppercase tracking-tight leading-none mb-6">
                Infants Day Care
            </h2>
            {/* Playful divider */}
            <svg className="w-36 h-3 text-brand-yellow fill-none stroke-current my-6 mx-auto" strokeWidth="3.5" strokeLinecap="round" viewBox="0 0 100 10">
                <path d="M5 5 Q20 1 35 5 T65 5 T95 5" />
            </svg>
            <p className="text-purple-100 font-semibold text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
                A secure, nurturing and loving daycare program designed around your baby's individual patterns and development milestones.
            </p>
        </div>
    </section>

    {/* SECTION 1: Core Philosophy */}
    <section className="reveal-on-scroll max-w-[1240px] w-full mx-auto px-6 sm:px-16 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Details */}
            <div className="lg:col-span-7">
                <span className="font-script text-[#fa8295] text-[2.4rem] block mb-1">Tender Loving Care</span>
                <h3 className="font-display text-2xl sm:text-3xl text-brand-purple font-black uppercase tracking-tight mb-6">Our Infants Program</h3>
                <div className="text-gray-600 font-semibold text-sm sm:text-base leading-relaxed space-y-6">
                    <p>
                        Our infants program is designed to offer your baby a <strong className="text-brand-purple">home away from home</strong>. Your baby will thrive in an atmosphere of tender loving care and comfort offered from experienced, caring teachers.
                    </p>
                    <p>
                        Throughout the day, babies are given individual attention, cuddled, hugged, rocked, walked, played with and talked to. <strong className="text-[#fa8295]">Music</strong> is a vital part of the Infant Room and will be heard constantly, filling their days with joy and auditory stimulation.
                    </p>
                </div>
            </div>
            {/* Right Column: Main Sleeping Baby Cutout (baby_sleeping_cutout.png) */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
                {/* Floating decorative elements */}
                <div className="absolute -top-6 -left-4 text-purple-200 opacity-60 text-4xl animate-float-slow"><i className="fa-solid fa-cloud"></i></div>
                <div className="absolute -bottom-4 -right-4 text-[#fa8295] opacity-20 text-3xl animate-float-medium"><i className="fa-solid fa-star"></i></div>
                
                <img src="/assets/baby_sleeping_cutout.png" alt="Sleeping Baby" className="w-full max-w-[360px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(76,40,130,0.08)] animate-float-slow hover:scale-[1.03] transition-transform duration-500" />
            </div>
        </div>
    </section>



    {/* SECTION 3: Communication & Schedules (Daily routines) */}
    <section className="reveal-on-scroll border-y border-purple-50 py-20 relative z-10 overflow-hidden" style={{ backgroundImage: 'url(\'/assets/DSC_0057.jpg\')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        {/* Soft high-contrast overlay for text legibility */}
        <div className="absolute inset-0 bg-[#fffdf5]/85 z-0"></div>
        <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-16 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="font-script text-brand-orange text-[2.4rem] block mb-1">Daily Routines</span>
                <h3 className="font-display text-2xl sm:text-3xl text-brand-purple font-black uppercase">Morning Arrival & Pick Up Reports</h3>
                <div className="w-20 h-1 bg-[#fa8295] mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Morning card */}
                <div className="lg:col-span-4 bg-white border border-[#FDE68A]/80 rounded-[3.5rem_3.5rem_2.5rem_3.5rem] p-6 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="bg-[#FFFBEB] text-[#D97706] w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm"><i className="fa-solid fa-cloud-sun"></i></div>
                        <h4 className="font-display text-brand-purple text-xl font-black mb-4">Morning Routine (Arrival)</h4>
                        <p className="text-gray-500 text-sm font-semibold leading-relaxed">
                            In the morning of arrival time the parent will give the teacher a <strong className="text-brand-purple">verbal report</strong> of any changes in the infant's routine or schedule, any special needs they may have for the day or problems encountered during the night that may have a negative influence on the baby's day.
                        </p>
                    </div>
                </div>

                {/* Center Column: Baby Eating Cutout */}
                <div className="lg:col-span-4 flex flex-col items-center justify-center relative my-6 lg:my-0">
                    <img src="/assets/baby_eating_cutout.png" alt="Baby Eating Cutout" className="w-full max-w-[260px] h-auto object-contain drop-shadow-[0_15px_30px_rgba(76,40,130,0.1)] animate-float-medium hover:scale-[1.03] transition-transform duration-500" />
                </div>

                {/* Evening card */}
                <div className="lg:col-span-4 bg-white border border-[#FECACA]/80 rounded-[3rem_4.5rem_3.5rem_3rem] p-6 shadow-sm flex flex-col justify-between">
                    <div>
                        <div className="bg-[#FFF5F5] text-[#E11D48] w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm"><i className="fa-solid fa-file-invoice"></i></div>
                        <h4 className="font-display text-brand-purple text-xl font-black mb-4">Afternoon Routine (Pick Up)</h4>
                        <p className="text-gray-500 text-sm font-semibold leading-relaxed">
                            Parents will be given a <strong className="text-brand-purple">written report</strong> of the Infant's Daily Activities, Intake and Output, and events that may have occurred during the course of the day when they pick their child up in the afternoon.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* SECTION: Baby Sensory Garden (Magic Touch + Bubble Pop) */}
    <section className="reveal-on-scroll max-w-[1240px] w-full mx-auto px-6 sm:px-16 py-16 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-script text-[#fa8295] text-3xl">Sensory Play</span>
            <h3 className="font-display text-2xl sm:text-3xl text-brand-purple font-black uppercase">Baby Sensory Garden</h3>
            <p className="text-gray-500 text-xs sm:text-sm font-semibold mt-2">Tap anywhere to create magical sparkles ✨ and pop the floating bubbles! A calming sensory experience for your little one.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Side: Sensory Canvas Frame */}
            <div className="lg:col-span-7 w-full flex justify-center">
                <div className="relative w-full aspect-[4/3] bg-white border-[14px] border-[#f5f0ff] rounded-[3.5rem] shadow-xl overflow-hidden p-2">
                    <div id="sensory-garden-container" className="relative w-full h-full rounded-[2.8rem] overflow-hidden shadow-inner cursor-pointer" style={{ background: 'linear-gradient(135deg, #f5f3ff 0%, #edd8ff 100%)' }}>
                    </div>
                </div>
            </div>

            {/* Right Side: Description Card */}
            <div className="lg:col-span-5 space-y-6">
                <div className="bg-white border-2 border-purple-50 rounded-[3rem_4.5rem_3.5rem_3rem] p-8 shadow-sm">
                    <h4 className="font-display text-brand-purple text-lg font-black mb-3">🌸 Magic Touch + Bubble Pop</h4>
                    <p className="text-gray-500 text-sm font-semibold leading-relaxed mb-4">
                        Watch colorful bubbles drift gently across the garden. Tap them to pop with a burst of sparkles! Touch any empty area to create magical star trails that follow your finger.
                    </p>
                    <p className="text-gray-500 text-sm font-semibold leading-relaxed mb-4">
                        This calming sensory activity is designed for infants to develop <strong className="text-brand-purple">hand-eye coordination</strong>, <strong className="text-[#fa8295]">visual tracking</strong>, and <strong className="text-brand-orange">cause-and-effect</strong> understanding.
                    </p>
                    <div className="flex flex-wrap items-center gap-3 mt-4">
                        <span className="bg-purple-50 text-brand-purple font-black text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full">✨ Touch Sparkles</span>
                        <span className="bg-pink-50 text-[#fa8295] font-black text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full">🫧 Bubble Pop</span>
                        <span className="bg-yellow-50 text-brand-orange font-black text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full">🌈 Color Trails</span>
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
                    <img src="/assets/DSC_0108.jpg" alt="Montessori Activity Routine" className="w-full h-full object-cover hover:scale-[1.02] transition duration-500" />
                </div>
            </div>
        </div>

        {/* Carousel Row with Scrapbook Cards */}
        <div className="relative z-10 max-w-6xl mx-auto mt-12 pb-8">
            
             {/* Cards Grid / Carousel Track */}
            <div id="curriculum-carousel-track" className="flex lg:grid lg:grid-cols-4 gap-8 w-full overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-none scroll-smooth relative z-10 py-6 px-4 items-stretch justify-items-center">
                
                {/* Card 1: Tummy Time (Purple Theme) */}
                <div className="snap-center shrink-0 w-[290px] sm:w-[310px] lg:w-full max-w-[320px] bg-white border-2 border-dashed border-purple-300 rounded-[2.5rem] p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center relative lg:translate-y-4 h-full">
                    {/* Washi Tape */}
                    <div className="absolute -top-3 bg-purple-100 text-purple-700 text-[10px] font-black tracking-widest px-6 py-1.5 rotate-[-3deg] uppercase rounded shadow-sm border border-purple-200/50">
                        Milestone 01
                    </div>
                    
                    {/* Icon / Number Circle */}
                    <div className="w-16 h-16 rounded-full bg-purple-50 border-2 border-purple-200 flex items-center justify-center text-brand-purple text-2xl font-black mb-4 shadow-inner mt-4">
                        <i className="fa-solid fa-baby"></i>
                    </div>
                    
                    <h4 className="font-display text-brand-purple text-lg font-black mb-3">Tummy Time</h4>
                    <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
                        Guided in our loving arms, your little one gently encourages their warm backs during floor playtime to build neck and core strength. We laugh, cheer, and clap at every little push-up.
                    </p>
                </div>

                {/* Card 2: Baby Sign & Speech (Yellow Theme) */}
                <div className="snap-center shrink-0 w-[290px] sm:w-[310px] lg:w-full max-w-[320px] bg-white border-2 border-dashed border-amber-300 rounded-[2.5rem] p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center relative lg:-translate-y-4 h-full">
                    {/* Washi Tape */}
                    <div className="absolute -top-3 bg-amber-100 text-amber-850 text-[10px] font-black tracking-widest px-6 py-1.5 rotate-[3deg] uppercase rounded shadow-sm border border-amber-200/50">
                        Milestone 02
                    </div>
                    
                    {/* Icon / Number Circle */}
                    <div className="w-16 h-16 rounded-full bg-amber-50 border-2 border-amber-200 flex items-center justify-center text-amber-600 text-2xl font-black mb-4 shadow-inner mt-4">
                        <i className="fa-solid fa-comments"></i>
                    </div>
                    
                    <h4 className="font-display text-amber-700 text-lg font-black mb-3">Sign &amp; Speech</h4>
                    <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
                        With soft whispers and warm smiles, our teachers guide your infant through baby signs and gentle verbal mimics, helping them communicate their needs before they can speak.
                    </p>
                </div>

                {/* Card 3: Visual Wonders (Green Theme) */}
                <div className="snap-center shrink-0 w-[290px] sm:w-[310px] lg:w-full max-w-[320px] bg-white border-2 border-dashed border-green-300 rounded-[2.5rem] p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center relative lg:translate-y-4 h-full">
                    {/* Washi Tape */}
                    <div className="absolute -top-3 bg-green-100 text-green-800 text-[10px] font-black tracking-widest px-6 py-1.5 rotate-[-2deg] uppercase rounded shadow-sm border border-green-200/50">
                        Milestone 03
                    </div>
                    
                    {/* Icon / Number Circle */}
                    <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center text-green-600 text-2xl font-black mb-4 shadow-inner mt-4">
                        <i className="fa-solid fa-eye"></i>
                    </div>
                    
                    <h4 className="font-display text-green-700 text-lg font-black mb-3">Visual Wonders</h4>
                    <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
                        We open their eyes to the beautiful world. Holding colorful wooden toys and pointing to bright picture books, teachers stimulate your baby's natural wonder and curiosity.
                    </p>
                </div>

                {/* Card 4: Motor Journeys (Pink Theme) */}
                <div className="snap-center shrink-0 w-[290px] sm:w-[310px] lg:w-full max-w-[320px] bg-white border-2 border-dashed border-rose-300 rounded-[2.5rem] p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center relative lg:-translate-y-4 h-full">
                    {/* Washi Tape */}
                    <div className="absolute -top-3 bg-rose-100 text-rose-800 text-[10px] font-black tracking-widest px-6 py-1.5 rotate-[2deg] uppercase rounded shadow-sm border border-rose-200/50">
                        Milestone 04
                    </div>
                    
                    {/* Icon / Number Circle */}
                    <div className="w-16 h-16 rounded-full bg-rose-50 border-2 border-rose-200 flex items-center justify-center text-rose-600 text-2xl font-black mb-4 shadow-inner mt-4">
                        <i className="fa-solid fa-child-reaching"></i>
                    </div>
                    
                    <h4 className="font-display text-rose-700 text-lg font-black mb-3">Motor Journeys</h4>
                    <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
                        Tenderly guided by reassuring hands, babies grasp soft textures, balance stacking cups, and crawl through safe play gyms, building the confidence to explore their surroundings.
                    </p>
                </div>

            </div>
        </div>
 

    </section>

       {/* SECTION 5: Safety & Safe Sleep practices */}
    <section className="reveal-on-scroll max-w-[1200px] w-full mx-auto px-6 sm:px-16 pb-20 relative z-10 overflow-visible">
        <div className="bg-white border-2 border-purple-50 rounded-[3.5rem] p-10 sm:p-12 shadow-xl relative overflow-visible">
            
            {/* Floating top-right illustration */}
            <img src="/assets/moon_cloud_shield.png" alt="Moon Cloud Shield" className="absolute -top-12 -right-6 w-28 sm:w-36 h-auto drop-shadow-md z-20 pointer-events-none" />
            
            <div className="flex items-center gap-5 mb-10">
                <div className="relative w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center border-2 border-purple-100 shadow-inner shrink-0">
                    <i className="fa-solid fa-shield-halved text-[#7c3aed] text-3xl"></i>
                    <div className="absolute -top-1 -right-1 text-purple-300 text-xs animate-pulse"><i className="fa-solid fa-star"></i></div>
                </div>
                <div>
                    <h3 className="font-display text-2xl sm:text-3xl text-brand-purple font-black uppercase tracking-tight">Safety, Security &amp; Cleanliness</h3>
                    <p className="text-gray-400 text-xs sm:text-sm font-semibold mt-1">Stringent standards exceeding Government &amp; Local guidelines</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mt-6">
                {/* Column 1: Space & Laundering */}
                <div className="bg-[#FAF8FF] border border-purple-100/50 rounded-[2.5rem] p-8 shadow-sm flex flex-col justify-between relative overflow-visible pb-16">
                    <div>
                        {/* Header Pill */}
                        <div className="inline-flex items-center gap-2 bg-white border border-purple-100 px-4 py-2 rounded-full shadow-sm">
                            <i className="fa-solid fa-bed text-[#7c3aed]"></i>
                            <span className="text-[#7c3aed] font-black text-sm tracking-tight">Space &amp; Laundering</span>
                        </div>
                        
                        {/* Heart Divider */}
                        <div className="flex items-center gap-1.5 w-full my-6">
                            <div className="h-[1px] bg-purple-200 flex-1"></div>
                            <i className="fa-solid fa-heart text-purple-300 text-[10px]"></i>
                            <div className="h-[1px] bg-purple-200 flex-1"></div>
                        </div>

                        {/* Checked list items */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-[#7c3aed] text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5"><i className="fa-solid fa-check"></i></div>
                                <p className="text-gray-600 text-xs sm:text-sm font-semibold leading-relaxed">Separate and appropriate designated areas are provided for sleeping, eating, and diapering.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-[#7c3aed] text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5"><i className="fa-solid fa-check"></i></div>
                                <p className="text-gray-600 text-xs sm:text-sm font-semibold leading-relaxed">Each infant has their own designated crib with sheets laundered weekly.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-[#7c3aed] text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5"><i className="fa-solid fa-check"></i></div>
                                <p className="text-gray-600 text-xs sm:text-sm font-semibold leading-relaxed">Exceeds Local, State, and Indian Government Guidelines.</p>
                            </div>
                        </div>
                    </div>
                    {/* Bottom left offset illustration */}
                    <img src="/assets/laundry_towels.png" alt="Laundry &amp; Towels" className="absolute -bottom-6 -left-4 w-24 h-auto drop-shadow-md z-20 pointer-events-none" />
                </div>

                {/* Column 2: Safe Sleep Practices */}
                <div className="bg-[#FFF9FA] border border-pink-100/50 rounded-[2.5rem] p-8 shadow-sm flex flex-col justify-between relative overflow-visible pb-16">
                    <div>
                        {/* Header Pill */}
                        <div className="inline-flex items-center gap-2 bg-white border border-pink-100 px-4 py-2 rounded-full shadow-sm">
                            <i className="fa-solid fa-moon text-rose-500"></i>
                            <span className="text-rose-600 font-black text-sm tracking-tight">Safe Sleep Practices</span>
                        </div>
                        
                        {/* Heart Divider */}
                        <div className="flex items-center gap-1.5 w-full my-6">
                            <div className="h-[1px] bg-rose-200 flex-1"></div>
                            <i className="fa-solid fa-heart text-rose-300 text-[10px]"></i>
                            <div className="h-[1px] bg-rose-200 flex-1"></div>
                        </div>

                        {/* Checked list items */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-rose-400 text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5"><i className="fa-solid fa-check"></i></div>
                                <p className="text-gray-600 text-xs sm:text-sm font-semibold leading-relaxed">Strict compliance with international &amp; national safe sleep recommendations.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-rose-400 text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5"><i className="fa-solid fa-check"></i></div>
                                <p className="text-gray-600 text-xs sm:text-sm font-semibold leading-relaxed">No crib bumper pads, no loose blankets, and no toys inside sleep cribs.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-rose-400 text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5"><i className="fa-solid fa-check"></i></div>
                                <p className="text-gray-600 text-xs sm:text-sm font-semibold leading-relaxed">Infants are put to sleep alone and always placed on their backs in their assigned space.</p>
                            </div>
                        </div>
                    </div>
                    {/* Bottom right offset illustration */}
                    <img src="/assets/teddy_heart.png" alt="Sleeping Teddy Bear" className="absolute -bottom-6 -right-4 w-28 h-auto drop-shadow-md z-20 pointer-events-none" />
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
