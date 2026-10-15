import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import AnimatedCounter from '../components/AnimatedCounter';

export default function AcademicsPage() {
  const { openModal } = useModal();
  const [activeTriadIndex, setActiveTriadIndex] = useState(0);

  const triadData = [
    {
      id: 1,
      badge: "Standardized Excellence",
      badgeColor: "text-[#4B1F6F] bg-[#F1EAF7] border-purple-200/50",
      icon: "fa-book-bookmark",
      iconGradient: "from-[#4B1F6F] to-[#6B3A8D] shadow-purple-900/25",
      hoverTextColor: "group-hover:text-[#6B3A8D]",
      title: "1. CBSE Alignment",
      desc: "Standardized academic depth in Mathematics, Science, English, and Languages recognized across premier national institutions.",
      image: "/assets/DSC_0310.jpg",
      tagIcon: "fa-book-bookmark text-[#F3D98B]",
      tagText: "CBSE Standardized Depth & Academic Rigor",
      cardClass: "triad-card-1",
    },
    {
      id: 2,
      badge: "Self-Directed Focus",
      badgeColor: "text-[#D4A72C] bg-[#FDF8E7] border-amber-200/50",
      icon: "fa-puzzle-piece",
      iconGradient: "from-[#D4A72C] to-[#E67E22] shadow-amber-500/25",
      hoverTextColor: "group-hover:text-[#D4A72C]",
      title: "2. Montessori Independence",
      desc: "Self-directed sensory equipment fostering deep concentration, self-discipline, and fine motor precision.",
      image: "/assets/DSC_0108.jpg",
      tagIcon: "fa-puzzle-piece text-[#F3D98B]",
      tagText: "Self-Directed Montessori Sensorial Apparatus",
      cardClass: "triad-card-2",
    },
    {
      id: 3,
      badge: "Hands-On Discovery",
      badgeColor: "text-[#059669] bg-emerald-50 border-emerald-200/50",
      icon: "fa-flask-vial",
      iconGradient: "from-[#059669] to-[#10B981] shadow-emerald-500/25",
      hoverTextColor: "group-hover:text-[#059669]",
      title: "3. Experiential Activity-Based Learning",
      desc: "Real-world experiment trials, project discovery, nature exploration, and creative stage expression.",
      image: "/assets/DSC_0151.jpg",
      tagIcon: "fa-graduation-cap text-[#F3D98B]",
      tagText: "Stage Expression & Hands-On Discovery",
      cardClass: "triad-card-3",
    },
  ];

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
    <div className="academicspage-page">
      {/* Banner */}
    <section className="reveal-on-scroll py-14 anim-aurora-bg text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
            <div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 mb-2">
                    <img src="/assets/pencil.gif" alt="Pencil Animation" className="w-4 h-4 object-contain" />
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#F3D98B]">Methodology & Rigor</span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-1">Academics & <span className="text-shimmer-gold font-serif italic">Curriculum</span></h1>
                <p className="text-purple-200 text-sm mt-2">Harmonizing CBSE framework with Montessori and Activity-Based discovery.</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-200 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
                <Link to="/" className="hover:text-white transition">Home</Link>
                <span>/</span>
                <span className="text-[#D4A72C]">Academics</span>
            </div>
        </div>
    </section>

    {/* Section 1: Pedagogical Framework */}
    <section className="reveal-on-scroll py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-6">
                    <div className="inline-flex items-center gap-2">
                        <span className="gold-badge pulse-badge">The Ryans Triad</span>
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4B1F6F] bg-[#F1EAF7] px-3 py-1 rounded-full border border-purple-200/50">
                            <i className="fa-solid fa-sparkles text-[#D4A72C]"></i> Multi-Sensory Pedagogy
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B1F6F] leading-tight">
                        A Triad of Academic Excellence
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                        At Ryans Academy, our curriculum does not rely on a single rigid doctrine. Instead, we weave together three world-class educational traditions to ensure complete cognitive, emotional, and practical growth. <strong className="text-[#4B1F6F]">Click any pillar below to explore:</strong>
                    </p>
                    <div className="space-y-4">
                        {triadData.map((item, idx) => {
                          const isActive = activeTriadIndex === idx;
                          return (
                            <div
                              key={item.id}
                              onClick={() => setActiveTriadIndex(idx)}
                              className={`triad-luxury-card ${item.cardClass} group cursor-pointer transition-all duration-300 ${
                                isActive
                                  ? 'active ring-2 ring-[#D4A72C] shadow-xl scale-[1.02] bg-purple-50/30'
                                  : 'hover:scale-[1.01]'
                              }`}
                            >
                              <div className={`triad-badge-box bg-gradient-to-br ${item.iconGradient} text-white shadow-md`}>
                                <i className={`fa-solid ${item.icon}`}></i>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className={`text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                                    {item.badge}
                                  </span>
                                  {isActive && (
                                    <span className="text-[9px] font-black uppercase tracking-wider text-amber-800 bg-[#FDF8E7] px-2 py-0.5 rounded-full border border-amber-300 animate-pulse">
                                      Active Viewing
                                    </span>
                                  )}
                                </div>
                                <h4 className={`font-extrabold text-base sm:text-lg text-[#4B1F6F] ${item.hoverTextColor} transition-colors leading-snug`}>
                                  {item.title}
                                </h4>
                                <p className="text-xs text-gray-500 font-medium leading-relaxed mt-1">
                                  {item.desc}
                                </p>
                              </div>
                              <i className={`fa-solid fa-chevron-right text-xs transition-all mt-3 ${
                                isActive
                                  ? 'text-[#D4A72C] translate-x-1 scale-125'
                                  : 'text-purple-300 group-hover:text-[#4B1F6F] group-hover:translate-x-1'
                              }`}></i>
                            </div>
                          );
                        })}
                    </div>
                </div>

                <div className="lg:col-span-6">
                    <div className="triad-floating-frame h-[460px] sm:h-[500px] relative overflow-hidden">
                        <img
                          key={triadData[activeTriadIndex].image}
                          src={triadData[activeTriadIndex].image}
                          alt={triadData[activeTriadIndex].title}
                          className="w-full h-full object-cover transition-all duration-500 animate-in fade-in zoom-in-95"
                        />
                        <div className="facility-tag-floating transition-all duration-300">
                            <i className={`fa-solid ${triadData[activeTriadIndex].tagIcon}`}></i>
                            <span>{triadData[activeTriadIndex].tagText}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Animated Academic Impact Counter Bar */}
    <section className="reveal-on-scroll py-10 bg-gradient-to-r from-[#4B1F6F] via-[#5b2687] to-[#4B1F6F] text-white border-y border-purple-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
                <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/20 transition-all hover:scale-[1.03] duration-300">
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#F3D98B]"><AnimatedCounter target={15} prefix="" suffix=":1" /></div>
                    <p className="text-xs sm:text-sm text-purple-200 font-semibold mt-1">Student-Teacher Ratio</p>
                </div>
                <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/20 transition-all hover:scale-[1.03] duration-300">
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#F3D98B]"><AnimatedCounter target={100} prefix="" suffix="%" /></div>
                    <p className="text-xs sm:text-sm text-purple-200 font-semibold mt-1">Activity-Based Modules</p>
                </div>
                <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/20 transition-all hover:scale-[1.03] duration-300">
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#F3D98B]"><AnimatedCounter target={3} prefix="" suffix=" Pillars" /></div>
                    <p className="text-xs sm:text-sm text-purple-200 font-semibold mt-1">Pedagogical Triad</p>
                </div>
                <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/20 transition-all hover:scale-[1.03] duration-300">
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#F3D98B]"><AnimatedCounter target={6} prefix="" suffix=" Domains" /></div>
                    <p className="text-xs sm:text-sm text-purple-200 font-semibold mt-1">Subject Specializations</p>
                </div>
            </div>
        </div>
    </section>

    {/* Section 2: Core Subject Areas & Specializations */}
    <section className="reveal-on-scroll py-16 bg-[#FAF8F4] border-y border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
                <span className="purple-badge mb-3">Key Academic Pillars</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B1F6F]">Curriculum Subject Domains</h2>
                <p className="text-gray-600 text-sm sm:text-base mt-2">Carefully structured modules developing well-rounded mastery.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Domain 1: Language & Phonics */}
                <div className="academic-domain-card reveal-on-scroll stagger-1 group card-shine-effect hover:-translate-y-2 hover:shadow-2xl hover:border-[#4B1F6F] transition-all duration-300">
                    <div className="academic-domain-accent bg-gradient-to-r from-[#4B1F6F] via-[#6B3A8D] to-[#834aa7]"></div>
                    <div className="academic-domain-icon bg-gradient-to-br from-[#4B1F6F] to-[#6B3A8D] text-white shadow-lg shadow-purple-900/25 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                        <i className="fa-solid fa-spell-check"></i>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-[9.5px] font-black uppercase tracking-wider text-[#4B1F6F] bg-[#F1EAF7] px-2.5 py-0.5 rounded-full border border-purple-200/50">
                            Language & Literacy
                        </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#4B1F6F] mb-2 group-hover:text-[#6B3A8D] transition-colors">Phonics & Language Arts</h3>
                    <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed font-medium mb-4 flex-grow">Synthetic Jolly Phonics, early blended reading, creative story writing, and expressive speech building a vast vocabulary.</p>
                    <div className="pt-3 border-t border-purple-50 mt-auto">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#4B1F6F]">
                            <i className="fa-solid fa-circle-check text-[#D4A72C] text-xs"></i> Jolly Phonics • Story Expression
                        </span>
                    </div>
                </div>

                {/* Domain 2: Abacus & Mathematics */}
                <div className="academic-domain-card reveal-on-scroll stagger-2 group card-shine-effect hover:-translate-y-2 hover:shadow-2xl hover:border-[#D4A72C] transition-all duration-300">
                    <div className="academic-domain-accent bg-gradient-to-r from-[#D4A72C] via-[#F3D98B] to-[#E67E22]"></div>
                    <div className="academic-domain-icon bg-gradient-to-br from-[#D4A72C] to-[#E67E22] text-white shadow-lg shadow-amber-500/25 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                        <i className="fa-solid fa-calculator"></i>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-[9.5px] font-black uppercase tracking-wider text-[#D4A72C] bg-[#FDF8E7] px-2.5 py-0.5 rounded-full border border-amber-200/50">
                            Dual-Brain Math
                        </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#4B1F6F] mb-2 group-hover:text-[#D4A72C] transition-colors">Abacus & Mental Math</h3>
                    <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed font-medium mb-4 flex-grow">Bilateral brain stimulation via bead calculation techniques for lightning speed, razor-sharp memory, and numerical confidence.</p>
                    <div className="pt-3 border-t border-amber-50 mt-auto">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#D4A72C]">
                            <i className="fa-solid fa-circle-check text-[#4B1F6F] text-xs"></i> Bead Calculation • Sharp Memory
                        </span>
                    </div>
                </div>

                {/* Domain 3: STEM & Discovery Science */}
                <div className="academic-domain-card reveal-on-scroll stagger-3 group card-shine-effect hover:-translate-y-2 hover:shadow-2xl hover:border-emerald-500 transition-all duration-300">
                    <div className="academic-domain-accent bg-gradient-to-r from-[#059669] via-[#10B981] to-[#34D399]"></div>
                    <div className="academic-domain-icon bg-gradient-to-br from-[#059669] to-[#10B981] text-white shadow-lg shadow-emerald-500/25 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                        <i className="fa-solid fa-flask-vial"></i>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-[9.5px] font-black uppercase tracking-wider text-[#059669] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/50">
                            Hands-On Inquiry
                        </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#4B1F6F] mb-2 group-hover:text-[#059669] transition-colors">STEM & Environmental Science</h3>
                    <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed font-medium mb-4 flex-grow">Hands-on science experiments, nature observation walks, weather stations, and understanding biodiversity.</p>
                    <div className="pt-3 border-t border-emerald-50 mt-auto">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#059669]">
                            <i className="fa-solid fa-circle-check text-[#D4A72C] text-xs"></i> Wonder Labs • Nature Walks
                        </span>
                    </div>
                </div>

                {/* Domain 4: Digital Literacy & Computers */}
                <div className="academic-domain-card reveal-on-scroll stagger-1 group">
                    <div className="academic-domain-accent bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#60A5FA]"></div>
                    <div className="academic-domain-icon bg-gradient-to-br from-[#2563EB] to-[#3B82F6] text-white shadow-lg shadow-blue-500/25">
                        <i className="fa-solid fa-laptop-code"></i>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-[9.5px] font-black uppercase tracking-wider text-[#2563EB] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/50">
                            Digital Literacy
                        </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#4B1F6F] mb-2 group-hover:text-[#2563EB] transition-colors">Computer Learning</h3>
                    <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed font-medium mb-4 flex-grow">Introduction to modern keyboarding, creative digital art, visual logic puzzles, and safe internet etiquette.</p>
                    <div className="pt-3 border-t border-blue-50 mt-auto">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#2563EB]">
                            <i className="fa-solid fa-circle-check text-[#D4A72C] text-xs"></i> Visual Logic • Safe Etiquette
                        </span>
                    </div>
                </div>

                {/* Domain 5: Second Languages */}
                <div className="academic-domain-card reveal-on-scroll stagger-2 group">
                    <div className="academic-domain-accent bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#A855F7]"></div>
                    <div className="academic-domain-icon bg-gradient-to-br from-[#7C3AED] to-[#9333EA] text-white shadow-lg shadow-purple-600/25">
                        <i className="fa-solid fa-language"></i>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-[9.5px] font-black uppercase tracking-wider text-[#7C3AED] bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200/50">
                            Cultural Heritage
                        </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#4B1F6F] mb-2 group-hover:text-[#7C3AED] transition-colors">Multilingual Foundation</h3>
                    <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed font-medium mb-4 flex-grow">Proficiency in regional Tamil and national Hindi alongside fluent English, celebrating cultural heritage and multilingual ease.</p>
                    <div className="pt-3 border-t border-purple-50 mt-auto">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#7C3AED]">
                            <i className="fa-solid fa-circle-check text-[#D4A72C] text-xs"></i> English • Tamil • Hindi Fluency
                        </span>
                    </div>
                </div>

                {/* Domain 6: Continuous Observation & Assessment */}
                <div className="academic-domain-card reveal-on-scroll stagger-3 group">
                    <div className="academic-domain-accent bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#FB923C]"></div>
                    <div className="academic-domain-icon bg-gradient-to-br from-[#EA580C] to-[#F97316] text-white shadow-lg shadow-orange-500/25">
                        <i className="fa-solid fa-chart-line"></i>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-[9.5px] font-black uppercase tracking-wider text-[#EA580C] bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200/50">
                            Growth Tracking
                        </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#4B1F6F] mb-2 group-hover:text-[#EA580C] transition-colors">Holistic Assessment</h3>
                    <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed font-medium mb-4 flex-grow">Stress-free continuous portfolio tracking, rubrics on social collaboration, and detailed parent-teacher dialogues.</p>
                    <div className="pt-3 border-t border-orange-50 mt-auto">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#EA580C]">
                            <i className="fa-solid fa-circle-check text-[#D4A72C] text-xs"></i> Portfolio Portfolios • Rubric Metrics
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Footer */}
    </div>
  );
}
