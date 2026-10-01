import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import AnimatedCounter from '../components/AnimatedCounter';

export default function FacilitiesPage() {
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
    <div className="facilitiespage-page">
      {/* Banner */}
    <section className="reveal-on-scroll py-12 bg-gradient-to-r from-[#4B1F6F] via-[#6B3A8D] to-[#4B1F6F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#F3D98B]">World-Class Infrastructure</span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">Campus & Facilities</h1>
                <p className="text-purple-200 text-sm mt-2">A safe, child-friendly campus engineered for curiosity and comfort.</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-200">
                <Link to="/" className="hover:text-white transition">Home</Link>
                <span>/</span>
                <span className="text-[#D4A72C]">Facilities</span>
            </div>
        </div>
    </section>

    {/* Facilities Detailed Grid (PDF Section 5.7) */}
    {/* Facilities Detailed Grid (Luxury Modern Showcase) */}
    <section className="reveal-on-scroll py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Facility 1: Classrooms */}
            <div className="facility-showcase-card group">
                <div className="academic-domain-accent bg-gradient-to-r from-[#4B1F6F] via-[#6B3A8D] to-[#834aa7]"></div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-6 space-y-5">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4B1F6F] to-[#6B3A8D] text-white flex items-center justify-center text-xl shadow-md shadow-purple-900/20">
                                <i className="fa-solid fa-chalkboard-user"></i>
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#4B1F6F] bg-[#F1EAF7] px-3.5 py-1 rounded-full border border-purple-200/50 shadow-sm">
                                Primary Learning Environments
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4B1F6F] leading-tight group-hover:text-[#6B3A8D] transition-colors">
                            Child-Centric Modern Classrooms
                        </h2>
                        <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed font-medium">
                            Our classrooms are thoughtfully configured with natural lighting, rounded child-friendly furnishings, anti-skid flooring, and interactive audiovisual boards. Each room features dedicated reading pockets and Montessori manipulative corners.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700 bg-[#FAF8F4] p-2.5 rounded-xl border border-purple-50">
                                <i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Non-Toxic Ergonomic Furniture
                            </div>
                            <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700 bg-[#FAF8F4] p-2.5 rounded-xl border border-purple-50">
                                <i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Interactive Smart Boards
                            </div>
                            <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700 bg-[#FAF8F4] p-2.5 rounded-xl border border-purple-50">
                                <i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Natural Sunlight & Cross Air
                            </div>
                            <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700 bg-[#FAF8F4] p-2.5 rounded-xl border border-purple-50">
                                <i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Free Collaborative Layout
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-6">
                        <div className="facility-photo-frame h-80 sm:h-96">
                            <img src="/assets/DSC_0534.jpg" alt="Ryans Academy Classrooms" />
                            <div className="facility-tag-floating">
                                <i className="fa-solid fa-camera text-[#F3D98B]"></i>
                                <span>Spacious CBSE & Montessori Suites</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Facility 2: Computer Lab */}
            <div className="facility-showcase-card group">
                <div className="academic-domain-accent bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#60A5FA]"></div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-6 order-2 lg:order-1">
                        <div className="facility-photo-frame h-80 sm:h-96">
                            <img src="/assets/screen.jpg" alt="Smart Computer Lab" />
                            <div className="facility-tag-floating">
                                <i className="fa-solid fa-desktop text-[#60A5FA]"></i>
                                <span>1:1 High-Tech Computing Lab</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#3B82F6] text-white flex items-center justify-center text-xl shadow-md shadow-blue-500/20">
                                <i className="fa-solid fa-laptop-code"></i>
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#2563EB] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200/50 shadow-sm">
                                Digital Readiness
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4B1F6F] leading-tight group-hover:text-[#2563EB] transition-colors">
                            Smart Computer Lab & Tech Suite
                        </h2>
                        <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed font-medium">
                            Equipped with individual workstations and filtered educational software, our computer lab teaches children early computational thinking, keyboard fluency, and digital citizenship in an entirely safe setting.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700 bg-[#FAF8F4] p-2.5 rounded-xl border border-blue-50">
                                <i className="fa-solid fa-circle-check text-[#D4A72C]"></i> 1:1 Individual Workstation Ratio
                            </div>
                            <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700 bg-[#FAF8F4] p-2.5 rounded-xl border border-blue-50">
                                <i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Visual Block Coding & Logic
                            </div>
                            <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700 bg-[#FAF8F4] p-2.5 rounded-xl border border-blue-50">
                                <i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Child-Safe Filtered Browsing
                            </div>
                            <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700 bg-[#FAF8F4] p-2.5 rounded-xl border border-blue-50">
                                <i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Ergonomic Mice & Headsets
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Facility 3: Library */}
            <div className="facility-showcase-card group">
                <div className="academic-domain-accent bg-gradient-to-r from-[#D4A72C] via-[#F3D98B] to-[#E67E22]"></div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-6 space-y-5">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4A72C] to-[#E67E22] text-white flex items-center justify-center text-xl shadow-md shadow-amber-500/20">
                                <i className="fa-solid fa-book-open"></i>
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#D4A72C] bg-[#FDF8E7] px-3.5 py-1 rounded-full border border-amber-200/50 shadow-sm">
                                Literary Discovery
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4B1F6F] leading-tight group-hover:text-[#D4A72C] transition-colors">
                            Enriched Children's Reading Pavilion
                        </h2>
                        <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed font-medium">
                            Our peaceful reading pavilion holds over 3,000 carefully curated books—from touch-and-feel infant volumes and Jolly Phonics decodable books to junior encyclopedias and moral storybooks from around the globe.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700 bg-[#FAF8F4] p-2.5 rounded-xl border border-amber-50">
                                <i className="fa-solid fa-circle-check text-[#4B1F6F]"></i> 3,000+ Curated Child Volumes
                            </div>
                            <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700 bg-[#FAF8F4] p-2.5 rounded-xl border border-amber-50">
                                <i className="fa-solid fa-circle-check text-[#4B1F6F]"></i> Weekly Book Borrowing Club
                            </div>
                            <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700 bg-[#FAF8F4] p-2.5 rounded-xl border border-amber-50">
                                <i className="fa-solid fa-circle-check text-[#4B1F6F]"></i> Cozy Storytelling Beanbags
                            </div>
                            <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700 bg-[#FAF8F4] p-2.5 rounded-xl border border-amber-50">
                                <i className="fa-solid fa-circle-check text-[#4B1F6F]"></i> Guided Audio Story Sessions
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-6">
                        <div className="facility-photo-frame h-80 sm:h-96">
                            <img src="/assets/book1.jpg" alt="Ryans Academy Library" />
                            <div className="facility-tag-floating">
                                <i className="fa-solid fa-bookmark text-[#F3D98B]"></i>
                                <span>3,000+ Illustrated Storybooks & Lore</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Facility 4: Activity Areas & Playground */}
            <div className="facility-showcase-card group">
                <div className="academic-domain-accent bg-gradient-to-r from-[#059669] via-[#10B981] to-[#34D399]"></div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-6 order-2 lg:order-1">
                        <div className="facility-photo-frame h-80 sm:h-96">
                            <img src="/assets/kids_park_play.jpg" alt="Outdoor Playground & Soft Gym" />
                            <div className="facility-tag-floating">
                                <i className="fa-solid fa-shield-heart text-emerald-400"></i>
                                <span>Shock-Absorbing Safe Play Turf</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#059669] to-[#10B981] text-white flex items-center justify-center text-xl shadow-md shadow-emerald-500/20">
                                <i className="fa-solid fa-volleyball"></i>
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#059669] bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200/50 shadow-sm">
                                Recreation & Agility
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4B1F6F] leading-tight group-hover:text-[#059669] transition-colors">
                            Soft Play Gym & Outdoor Athletic Lawns
                        </h2>
                        <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed font-medium">
                            From indoor soft play gyms and dance studios to safe outdoor lawns featuring slides, sandpits, and athletic tracks, children stay energized, developing motor agility and social bonds daily.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700 bg-[#FAF8F4] p-2.5 rounded-xl border border-emerald-50">
                                <i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Shock-Absorbing Rubberized Turf
                            </div>
                            <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700 bg-[#FAF8F4] p-2.5 rounded-xl border border-emerald-50">
                                <i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Certified International Safety Gear
                            </div>
                            <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700 bg-[#FAF8F4] p-2.5 rounded-xl border border-emerald-50">
                                <i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Full-Time Attendant Supervision
                            </div>
                            <div className="flex items-center gap-2.5 text-xs font-bold text-gray-700 bg-[#FAF8F4] p-2.5 rounded-xl border border-emerald-50">
                                <i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Dedicated Early Years Sandpit
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Section: Safety, Transport & Health (Luxury 4-Card Grid) */}
    <section className="reveal-on-scroll py-16 lg:py-20 bg-[#FAF8F4] border-t border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
                <span className="purple-badge mb-3">Parent Peace of Mind</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B1F6F]">Safety & Well-being Standards</h2>
                <p className="text-gray-600 text-sm sm:text-base mt-2">Uncompromising protocols ensuring your child is always safe, secure, and cared for.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Safety 1 */}
                <div className="safety-feature-card group">
                    <div className="academic-domain-accent bg-gradient-to-r from-[#4B1F6F] to-[#6B3A8D]"></div>
                    <div className="safety-feature-icon bg-gradient-to-br from-[#4B1F6F] to-[#6B3A8D] text-white shadow-md shadow-purple-900/25">
                        <i className="fa-solid fa-video"></i>
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#4B1F6F] bg-[#F1EAF7] px-2 py-0.5 rounded-full mb-2 border border-purple-200/50">
                        Surveillance
                    </span>
                    <h4 className="font-extrabold text-base text-[#4B1F6F] mb-1.5 group-hover:text-[#6B3A8D] transition-colors">24/7 CCTV Coverage</h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium mb-3 flex-grow">High-definition cameras monitoring all corridors, gates, playgrounds, and entry lobbies.</p>
                    <div className="pt-2.5 border-t border-purple-50 w-full">
                        <span className="text-[11px] font-bold text-[#4B1F6F] inline-flex items-center gap-1 justify-center">
                            <i className="fa-solid fa-shield-check text-[#D4A72C]"></i> Zero Blindspots
                        </span>
                    </div>
                </div>

                {/* Safety 2 */}
                <div className="safety-feature-card group">
                    <div className="academic-domain-accent bg-gradient-to-r from-[#D4A72C] to-[#E67E22]"></div>
                    <div className="safety-feature-icon bg-gradient-to-br from-[#D4A72C] to-[#E67E22] text-white shadow-md shadow-amber-500/25">
                        <i className="fa-solid fa-van-shuttle"></i>
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#D4A72C] bg-[#FDF8E7] px-2 py-0.5 rounded-full mb-2 border border-amber-200/50">
                        Commute Fleet
                    </span>
                    <h4 className="font-extrabold text-base text-[#4B1F6F] mb-1.5 group-hover:text-[#D4A72C] transition-colors">Safe GPS Transport</h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium mb-3 flex-grow">School vans with seat belts, GPS tracking, speed governors, and trained female attendants.</p>
                    <div className="pt-2.5 border-t border-amber-50 w-full">
                        <span className="text-[11px] font-bold text-[#D4A72C] inline-flex items-center gap-1 justify-center">
                            <i className="fa-solid fa-shield-check text-[#4B1F6F]"></i> Real-Time Tracking
                        </span>
                    </div>
                </div>

                {/* Safety 3 */}
                <div className="safety-feature-card group">
                    <div className="academic-domain-accent bg-gradient-to-r from-[#2563EB] to-[#3B82F6]"></div>
                    <div className="safety-feature-icon bg-gradient-to-br from-[#2563EB] to-[#3B82F6] text-white shadow-md shadow-blue-500/25">
                        <i className="fa-solid fa-bottle-water"></i>
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded-full mb-2 border border-blue-200/50">
                        Pure Hydration
                    </span>
                    <h4 className="font-extrabold text-base text-[#4B1F6F] mb-1.5 group-hover:text-[#2563EB] transition-colors">RO Pure Water</h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium mb-3 flex-grow">Multi-stage reverse osmosis filtration tested periodically for pure, mineral-balanced drinking water.</p>
                    <div className="pt-2.5 border-t border-blue-50 w-full">
                        <span className="text-[11px] font-bold text-[#2563EB] inline-flex items-center gap-1 justify-center">
                            <i className="fa-solid fa-shield-check text-[#D4A72C]"></i> Periodically Tested
                        </span>
                    </div>
                </div>

                {/* Safety 4 */}
                <div className="safety-feature-card group">
                    <div className="academic-domain-accent bg-gradient-to-r from-[#E11D48] to-[#F43F5E]"></div>
                    <div className="safety-feature-icon bg-gradient-to-br from-[#E11D48] to-[#F43F5E] text-white shadow-md shadow-rose-500/25">
                        <i className="fa-solid fa-kit-medical"></i>
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#E11D48] bg-rose-50 px-2 py-0.5 rounded-full mb-2 border border-rose-200/50">
                        Health Care
                    </span>
                    <h4 className="font-extrabold text-base text-[#4B1F6F] mb-1.5 group-hover:text-[#E11D48] transition-colors">First Aid & Infirmary</h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium mb-3 flex-grow">Well-stocked campus first aid infirmary with first-aid certified staff and on-call pediatric doctor support.</p>
                    <div className="pt-2.5 border-t border-rose-50 w-full">
                        <span className="text-[11px] font-bold text-[#E11D48] inline-flex items-center gap-1 justify-center">
                            <i className="fa-solid fa-shield-check text-[#4B1F6F]"></i> Doctor On-Call
                        </span>
                    </div>
                </div>
            </div>

            <div className="text-center mt-14">
                <button className=" btn-gold text-sm py-3.5 px-9 shadow-lg hover:shadow-xl transition-all" onClick={() => openModal("Play Group", "visit")}>
                    <i className="fa-regular fa-calendar-check text-base"></i> Schedule a Campus Visit to See Our Facilities
                </button>
            </div>
        </div>
    </section>

    {/* Footer */}
    </div>
  );
}
