import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import AnimatedCounter from '../components/AnimatedCounter';

export default function EventsPage() {
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
    <div className="eventspage-page">
      {/* Banner */}
    <section className="reveal-on-scroll py-14 anim-aurora-bg text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
            <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#F3D98B] bg-white/10 px-3 py-1 rounded-full border border-white/20 inline-block mb-2">Milestones & Festivities</span>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-1">Featured Events & <span className="text-shimmer-gold font-serif italic">Celebrations</span></h1>
                <p className="text-purple-200 text-sm mt-2">Home of Velocity Fest, RYANOVA, and vibrant cultural galas.</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-200 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
                <Link to="/" className="hover:text-white transition">Home</Link>
                <span>/</span>
                <span className="text-[#D4A72C]">Events</span>
            </div>
        </div>
    </section>

    {/* Velocity Fest Section (PDF Section 5.9) */}
    <section className="reveal-on-scroll py-16 bg-white border-b border-purple-50" id="velocity">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-5">
                    <span className="gold-badge">Annual Sports Carnival</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B1F6F]">Velocity Fest: Championing Youth Athletics</h2>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                        Velocity Fest is the pinnacle athletic celebration at Ryans Academy. The campus bursts with color as students represent their respective school houses in track sprints, obstacle dashes, march past drills, aerobics, and parent-teacher tug-of-war contests.
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                        Velocity Fest honors the Olympic spirit: fostering healthy competition, graceful winning, resilience in defeat, and the thrill of pushing personal boundaries.
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-xs font-bold text-gray-700 pt-2">
                        <div className="flex items-center gap-2"><i className="fa-solid fa-trophy text-[#D4A72C]"></i> House Championship Cup</div>
                        <div className="flex items-center gap-2"><i className="fa-solid fa-medal text-[#D4A72C]"></i> Individual Athlete Medals</div>
                        <div className="flex items-center gap-2"><i className="fa-solid fa-flag text-[#D4A72C]"></i> Grand House March Past</div>
                        <div className="flex items-center gap-2"><i className="fa-solid fa-heart text-[#D4A72C]"></i> 100% Student Participation</div>
                    </div>
                </div>
                <div className="lg:col-span-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                            <img src="/assets/sports (3).jpg" alt="Velocity Fest Sports Day" className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                            <img src="/assets/sports (1).jpg" alt="Velocity Fest Athletics" className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                            <img src="/assets/sports (2).jpg" alt="Velocity Fest Relay" className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                            <img src="/assets/sports (4).jpg" alt="Velocity Fest Medals" className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* RYANOVA Section (PDF Section 5.9) */}
    <section className="reveal-on-scroll py-16 bg-[#FAF8F4]" id="ryanova">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 order-2 lg:order-1">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                            <img src="/assets/anual1.png" alt="RYANOVA Annual Day Gala" className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                            <img src="/assets/anual2.png" alt="Traditional Dance Recital" className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                            <img src="/assets/anual3.png" alt="Grand Choir Ensemble" className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                            <img src="/assets/DSC_0318.jpg" alt="Annual Awards & Accolades" className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
                    <span className="purple-badge">Annual Cultural Extravaganza</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B1F6F]">RYANOVA: A Symphony of Youthful Brilliance</h2>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                        RYANOVA is Ryans Academy's grand annual cultural festival. An evening illuminated by professional stage lights, state-of-the-art acoustics, and thousands of cheering parents, where our students blossom as confident actors, dancers, musicians, and orators.
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                        Themes rotate annually around cultural heritage, environmental conservation, world peace, and Indian unity, instilling profound moral depth into artistic presentations.
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-xs font-bold text-gray-700 pt-2">
                        <div className="flex items-center gap-2"><i className="fa-solid fa-masks-theater text-[#D4A72C]"></i> Full Theatrical Plays</div>
                        <div className="flex items-center gap-2"><i className="fa-solid fa-music text-[#D4A72C]"></i> Multi-Lingual Choirs</div>
                        <div className="flex items-center gap-2"><i className="fa-solid fa-wand-magic-sparkles text-[#D4A72C]"></i> Classical & Fusion Dance</div>
                        <div className="flex items-center gap-2"><i className="fa-solid fa-award text-[#D4A72C]"></i> Annual Academic Honor Roll</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Section 3: Convocation & Little Scholars Graduation */}
    <section className="reveal-on-scroll py-16 bg-white border-b border-purple-50" id="convocation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-5">
                    <span className="gold-badge anim-ring-gold">Academic Milestone</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B1F6F]">Convocation: Celebrating Our Little Graduates</h2>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                        A milestone celebration honoring our Senior KG scholars as they step forward into primary CBSE Grade 1. Dressed in ceremonial gowns and mortarboards, each child receives their graduation diploma before proud families and mentors.
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                        With valedictory speeches, graduation songs, and heartfelt reflections, Convocation instills lifelong pride, confidence, and scholarly ambition.
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-xs font-bold text-gray-700 pt-2">
                        <div className="flex items-center gap-2"><i className="fa-solid fa-graduation-cap text-[#D4A72C]"></i> 100% Graduation Success</div>
                        <div className="flex items-center gap-2"><i className="fa-solid fa-scroll text-[#D4A72C]"></i> Official Diplomas Awarded</div>
                        <div className="flex items-center gap-2"><i className="fa-solid fa-microphone text-[#D4A72C]"></i> Scholar Valedictory Speeches</div>
                        <div className="flex items-center gap-2"><i className="fa-solid fa-star text-[#D4A72C]"></i> Ready for Primary CBSE</div>
                    </div>
                </div>
                <div className="lg:col-span-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white anim-tilt-card card-shine-effect">
                            <img src="/asssssetss_opt/convocation/convocation_01.jpg" alt="Convocation Ceremony" className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white anim-tilt-card card-shine-effect">
                            <img src="/asssssetss_opt/convocation/convocation_05.jpg" alt="Graduate Robes" className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white anim-tilt-card card-shine-effect">
                            <img src="/asssssetss_opt/convocation/convocation_08.jpg" alt="Diploma Presentation" className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white anim-tilt-card card-shine-effect">
                            <img src="/asssssetss_opt/convocation/convocation_12.jpg" alt="Scholar Tributes" className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Section 4: Colours Day Kindergarten Sensory Carnival */}
    <section className="reveal-on-scroll py-16 bg-[#FAF8F4] border-b border-purple-50" id="colours">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 order-2 lg:order-1">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white anim-tilt-card card-shine-effect">
                            <img src="/asssssetss_opt/colours_day/colours_day_05.jpg" alt="Yellow Day Sunshine" className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white anim-tilt-card card-shine-effect">
                            <img src="/asssssetss_opt/colours_day/colours_day_10.jpg" alt="Tactile Arts" className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white anim-tilt-card card-shine-effect">
                            <img src="/asssssetss_opt/colours_day/colours_day_15.jpg" alt="Sensory Stations" className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white anim-tilt-card card-shine-effect">
                            <img src="/asssssetss_opt/colours_day/colours_day_20.jpg" alt="Collaborative Murals" className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
                    <span className="purple-badge">Sensory Wonder Carnival</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B1F6F]">Colours Day: An Explosion of Joy & Creativity</h2>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                        Colours Day brings the rainbow directly into our classrooms! A celebration of sensory discovery where toddlers and kindergarteners explore colors through themed costumes, finger painting, collaborative murals, and tactile sorting games.
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                        These vibrant celebrations foster fine motor coordination, associative thinking, peer socialization, and pure artistic expression in an immersive, laughter-filled setting.
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-xs font-bold text-gray-700 pt-2">
                        <div className="flex items-center gap-2"><i className="fa-solid fa-palette text-[#D4A72C]"></i> Sensory Finger-Painting</div>
                        <div className="flex items-center gap-2"><i className="fa-solid fa-shirt text-[#D4A72C]"></i> Themed Color Dress Days</div>
                        <div className="flex items-center gap-2"><i className="fa-solid fa-shapes text-[#D4A72C]"></i> Tactile Sensory Stations</div>
                        <div className="flex items-center gap-2"><i className="fa-solid fa-face-smile text-[#D4A72C]"></i> Joyful Social Memories</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Dynamic Upcoming Events & Academic Calendar */}
    {/* Dynamic Upcoming Events & Academic Calendar (Luxury Interactive Showcase) */}
    <section className="reveal-on-scroll py-16 lg:py-20 bg-gradient-to-b from-white via-[#FAF8F4] to-white border-t border-purple-50 relative overflow-hidden">
        {/* Ambient Decorative Blooms */}
        <div className="absolute top-1/2 -left-20 w-64 h-64 bg-[#D4A72C]/10 rounded-full filter blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -right-20 w-64 h-64 bg-[#4B1F6F]/10 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
                <span className="purple-badge mb-3">Academic Calendar</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B1F6F]">Upcoming Events & Dates</h2>
                <p className="text-gray-600 text-sm sm:text-base mt-2">Keep track of key dates, exhibitions, holidays, and celebrations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Event 1 */}
                <div className="event-calendar-card reveal-on-scroll stagger-1 group">
                    <div className="academic-domain-accent bg-gradient-to-r from-[#4B1F6F] via-[#6B3A8D] to-[#834aa7]"></div>
                    <div className="event-date-badge bg-gradient-to-b from-[#4B1F6F] to-[#6B3A8D] text-white">
                        <span className="block text-[11px] font-black uppercase tracking-wider text-purple-200">MAR</span>
                        <span className="block text-3xl font-extrabold text-[#F3D98B] leading-none my-1">28</span>
                        <span className="block text-[9px] font-bold text-purple-200/90 uppercase">2026</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-[9px] font-black uppercase tracking-wider text-[#D4A72C] bg-[#FDF8E7] px-2.5 py-0.5 rounded-full border border-amber-200/50 shadow-sm">
                                Campus Exhibition
                            </span>
                        </div>
                        <h4 className="font-extrabold text-base sm:text-lg text-[#4B1F6F] group-hover:text-[#6B3A8D] transition-colors leading-snug">
                            Wonder Lab Science Expo
                        </h4>
                        <p className="text-xs text-gray-500 leading-relaxed font-medium mt-1 mb-3">
                            Students present working STEM models, robotics trials, and live experiments.
                        </p>
                        <div className="pt-2.5 border-t border-purple-50 flex items-center justify-between text-[11px] font-bold text-[#4B1F6F]">
                            <span className="inline-flex items-center gap-1"><i className="fa-regular fa-clock text-[#D4A72C]"></i> 09:30 AM</span>
                            <span className="text-[#D4A72C] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-bold">Details <i className="fa-solid fa-arrow-right text-[10px]"></i></span>
                        </div>
                    </div>
                </div>

                {/* Event 2 */}
                <div className="event-calendar-card reveal-on-scroll stagger-2 group">
                    <div className="academic-domain-accent bg-gradient-to-r from-[#D4A72C] via-[#F3D98B] to-[#E67E22]"></div>
                    <div className="event-date-badge bg-gradient-to-b from-[#D4A72C] to-[#E67E22] text-white">
                        <span className="block text-[11px] font-black uppercase tracking-wider text-amber-100">APR</span>
                        <span className="block text-3xl font-extrabold text-white leading-none my-1">10</span>
                        <span className="block text-[9px] font-bold text-amber-100/90 uppercase">2026</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-[9px] font-black uppercase tracking-wider text-[#4B1F6F] bg-[#F1EAF7] px-2.5 py-0.5 rounded-full border border-purple-200/50 shadow-sm">
                                Parent-Teacher Meet
                            </span>
                        </div>
                        <h4 className="font-extrabold text-base sm:text-lg text-[#4B1F6F] group-hover:text-[#D4A72C] transition-colors leading-snug">
                            Term Evaluation Review
                        </h4>
                        <p className="text-xs text-gray-500 leading-relaxed font-medium mt-1 mb-3">
                            One-on-one progress dialogues, art portfolios, and academic rubric reviews.
                        </p>
                        <div className="pt-2.5 border-t border-amber-50 flex items-center justify-between text-[11px] font-bold text-[#D4A72C]">
                            <span className="inline-flex items-center gap-1 text-[#4B1F6F]"><i className="fa-regular fa-clock text-[#D4A72C]"></i> All Day Slots</span>
                            <span className="text-[#D4A72C] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-bold">Details <i className="fa-solid fa-arrow-right text-[10px]"></i></span>
                        </div>
                    </div>
                </div>

                {/* Event 3 */}
                <div className="event-calendar-card reveal-on-scroll stagger-3 group">
                    <div className="academic-domain-accent bg-gradient-to-r from-[#059669] via-[#10B981] to-[#34D399]"></div>
                    <div className="event-date-badge bg-gradient-to-b from-[#059669] to-[#10B981] text-white">
                        <span className="block text-[11px] font-black uppercase tracking-wider text-emerald-100">MAY</span>
                        <span className="block text-3xl font-extrabold text-[#F3D98B] leading-none my-1">05</span>
                        <span className="block text-[9px] font-bold text-emerald-100/90 uppercase">2026</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-[9px] font-black uppercase tracking-wider text-[#059669] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/50 shadow-sm">
                                Summer Enrichment
                            </span>
                        </div>
                        <h4 className="font-extrabold text-base sm:text-lg text-[#4B1F6F] group-hover:text-[#059669] transition-colors leading-snug">
                            Ryans Summer Camp 2026
                        </h4>
                        <p className="text-xs text-gray-500 leading-relaxed font-medium mt-1 mb-3">
                            Exciting modules in robotics, abacus mental math, swimming, fine arts & drama.
                        </p>
                        <div className="pt-2.5 border-t border-emerald-50 flex items-center justify-between text-[11px] font-bold text-[#059669]">
                            <span className="inline-flex items-center gap-1 text-[#4B1F6F]"><i className="fa-regular fa-clock text-[#059669]"></i> 3-Week Camp</span>
                            <span className="text-[#059669] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-bold">Details <i className="fa-solid fa-arrow-right text-[10px]"></i></span>
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
