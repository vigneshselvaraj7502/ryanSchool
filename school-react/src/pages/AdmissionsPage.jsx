import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import AnimatedCounter from '../components/AnimatedCounter';

export default function AdmissionsPage() {
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
    <div className="admissionspage-page">
      {/* Banner */}
    <section className="reveal-on-scroll py-12 bg-gradient-to-r from-[#4B1F6F] via-[#6B3A8D] to-[#4B1F6F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#F3D98B]">Academic Year 2026-27</span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">Begin Your Child's Journey With Us</h1>
                <p className="text-purple-200 text-sm mt-2">Transparent admission process, age criteria, and quick online enquiry.</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-200">
                <Link to="/" className="hover:text-white transition">Home</Link>
                <span>/</span>
                <span className="text-[#D4A72C]">Admissions</span>
            </div>
        </div>
    </section>

    {/* 4-Step Admission Process */}
    {/* 4-Step Admission Process (Luxury Interactive Timeline) */}
    <section className="reveal-on-scroll py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
                <span className="purple-badge mb-3">Simple & Transparent</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B1F6F]">Our 4-Step Admission Process</h2>
                <p className="text-gray-600 text-sm sm:text-base mt-2">We ensure a pleasant, welcoming enrollment experience for parents and children alike.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Step 1 */}
                <div className="admission-step-card reveal-on-scroll stagger-1 group">
                    <div className="academic-domain-accent bg-gradient-to-r from-[#4B1F6F] via-[#6B3A8D] to-[#834aa7]"></div>
                    <div className="admission-step-number bg-gradient-to-br from-[#4B1F6F] to-[#6B3A8D] text-[#F3D98B] shadow-lg shadow-purple-900/25">
                        1
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#4B1F6F] bg-[#F1EAF7] px-2.5 py-0.5 rounded-full border border-purple-200/50 mb-2">
                        First Contact
                    </span>
                    <h4 className="font-extrabold text-base sm:text-lg text-[#4B1F6F] mb-1.5 group-hover:text-[#6B3A8D] transition-colors">Submit Enquiry</h4>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed mb-4 flex-grow">Fill in our online admission form or connect with our admissions desk via phone or WhatsApp.</p>
                    <div className="pt-2.5 border-t border-purple-50 w-full text-center">
                        <span className="text-[11px] font-bold text-[#4B1F6F] inline-flex items-center gap-1">
                            <i className="fa-solid fa-bolt text-[#D4A72C]"></i> Instant Callback
                        </span>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="admission-step-card reveal-on-scroll stagger-2 group">
                    <div className="academic-domain-accent bg-gradient-to-r from-[#D4A72C] via-[#F3D98B] to-[#E67E22]"></div>
                    <div className="admission-step-number bg-gradient-to-br from-[#D4A72C] to-[#E67E22] text-white shadow-lg shadow-amber-500/25">
                        2
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#D4A72C] bg-[#FDF8E7] px-2.5 py-0.5 rounded-full border border-amber-200/50 mb-2">
                        Campus Discovery
                    </span>
                    <h4 className="font-extrabold text-base sm:text-lg text-[#4B1F6F] mb-1.5 group-hover:text-[#D4A72C] transition-colors">Campus Walk & Visit</h4>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed mb-4 flex-grow">Tour Montessori labs, smart classrooms, sports zones, and meet our principal and teachers.</p>
                    <div className="pt-2.5 border-t border-amber-50 w-full text-center">
                        <span className="text-[11px] font-bold text-[#D4A72C] inline-flex items-center gap-1">
                            <i className="fa-solid fa-map-location-dot text-[#4B1F6F]"></i> Guided Tour
                        </span>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="admission-step-card reveal-on-scroll stagger-3 group">
                    <div className="academic-domain-accent bg-gradient-to-r from-[#059669] via-[#10B981] to-[#34D399]"></div>
                    <div className="admission-step-number bg-gradient-to-br from-[#059669] to-[#10B981] text-white shadow-lg shadow-emerald-500/25">
                        3
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#059669] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/50 mb-2">
                        Child-Centric
                    </span>
                    <h4 className="font-extrabold text-base sm:text-lg text-[#4B1F6F] mb-1.5 group-hover:text-[#059669] transition-colors">Friendly Interaction</h4>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed mb-4 flex-grow">A joyful, stress-free child readiness interaction to observe their innate curiosity and social comfort.</p>
                    <div className="pt-2.5 border-t border-emerald-50 w-full text-center">
                        <span className="text-[11px] font-bold text-[#059669] inline-flex items-center gap-1">
                            <i className="fa-solid fa-face-smile text-[#D4A72C]"></i> Zero Stress
                        </span>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="admission-step-card reveal-on-scroll stagger-4 group">
                    <div className="academic-domain-accent bg-gradient-to-r from-[#E11D48] via-[#F43F5E] to-[#FB7185]"></div>
                    <div className="admission-step-number bg-gradient-to-br from-[#E11D48] to-[#F43F5E] text-white shadow-lg shadow-rose-500/25">
                        4
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#E11D48] bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200/50 mb-2">
                        Welcome Home
                    </span>
                    <h4 className="font-extrabold text-base sm:text-lg text-[#4B1F6F] mb-1.5 group-hover:text-[#E11D48] transition-colors">Enrollment & Kit</h4>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed mb-4 flex-grow">Submit basic verification documents, receive the personalized welcome kit, and join Ryans.</p>
                    <div className="pt-2.5 border-t border-rose-50 w-full text-center">
                        <span className="text-[11px] font-bold text-[#E11D48] inline-flex items-center gap-1">
                            <i className="fa-solid fa-gift text-[#D4A72C]"></i> Student Starter Kit
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Age Criteria & Document Guidelines */}
    <section className="reveal-on-scroll py-16 bg-[#FAF8F4] border-y border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left: Age Criteria Table */}
                <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-purple-100 shadow-md card-interactive-lift">
                    <span className="gold-badge mb-3">Eligibility Guidelines</span>
                    <h3 className="text-2xl font-bold text-[#4B1F6F] mb-6">Age Criteria (As on June 1st)</h3>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full text-xs text-left">
                            <thead>
                                <tr className="bg-[#F1EAF7] text-[#4B1F6F] font-bold">
                                    <th className="p-3 rounded-l-xl">Program</th>
                                    <th className="p-3">Eligible Age Bracket</th>
                                    <th className="p-3 rounded-r-xl">Curriculum Focus</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-purple-50 text-gray-700 font-medium">
                                <tr>
                                    <td className="p-3 font-bold text-[#4B1F6F]">Play Group</td>
                                    <td className="p-3">1.5 to 2.5 Years</td>
                                    <td className="p-3">Sensory exploration & socialization</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold text-[#4B1F6F]">Pre-KG</td>
                                    <td className="p-3">2.5 to 3.5 Years</td>
                                    <td className="p-3">Montessori sensory & vocabulary</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold text-[#4B1F6F]">Junior KG (LKG)</td>
                                    <td className="p-3">3.5 to 4.5 Years</td>
                                    <td className="p-3">Jolly Phonics & numbers</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold text-[#4B1F6F]">Senior KG (UKG)</td>
                                    <td className="p-3">4.5 to 5.5 Years</td>
                                    <td className="p-3">Sentence reading & math logic</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-bold text-[#4B1F6F]">Graders (CBSE)</td>
                                    <td className="p-3">5.5+ Years onwards</td>
                                    <td className="p-3">CBSE Primary academic syllabus</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Right: Required Documents Checklist */}
                <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-purple-100 shadow-md flex flex-col justify-between card-interactive-lift">
                    <div>
                        <span className="purple-badge mb-3">Checklist</span>
                        <h3 className="text-2xl font-bold text-[#4B1F6F] mb-4">Required Documents</h3>
                        <p className="text-xs text-gray-500 mb-6 font-medium">Please carry self-attested photocopies along with original documents for verification:</p>
                        
                        <ul className="space-y-3 text-xs font-semibold text-gray-700">
                            <li className="flex items-center gap-3"><i className="fa-solid fa-circle-check text-[#D4A72C] text-sm"></i> Child's Municipal Birth Certificate</li>
                            <li className="flex items-center gap-3"><i className="fa-solid fa-circle-check text-[#D4A72C] text-sm"></i> 4 Recent Passport Size Photographs of the Child</li>
                            <li className="flex items-center gap-3"><i className="fa-solid fa-circle-check text-[#D4A72C] text-sm"></i> Passport Size Photographs of Parents / Guardians</li>
                            <li className="flex items-center gap-3"><i className="fa-solid fa-circle-check text-[#D4A72C] text-sm"></i> Proof of Residence (Aadhar / Electricity / Passport)</li>
                            <li className="flex items-center gap-3"><i className="fa-solid fa-circle-check text-[#D4A72C] text-sm"></i> Copy of Child's Immunization / Health Record</li>
                            <li className="flex items-center gap-3"><i className="fa-solid fa-circle-check text-[#D4A72C] text-sm"></i> Transfer Certificate (TC) for Graders (if applicable)</li>
                        </ul>
                    </div>

                    <div className="pt-6 border-t border-purple-50 mt-6">
                        <button className=" btn-gold w-full text-xs py-3 justify-center" onClick={() => openModal("Play Group", "visit")}>
                            <i className="fa-solid fa-calendar-check"></i> Book Campus Verification Slot
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Direct Enquiry Form Section on Page */}
    <section className="reveal-on-scroll py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#FAF8F4] p-8 sm:p-12 rounded-3xl border border-purple-100 shadow-xl">
                <div className="text-center mb-8">
                    <span className="gold-badge mb-2">Fast-Track Application</span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4B1F6F]">Online Admission Enquiry Form</h2>
                    <p className="text-xs text-gray-500 mt-2">Submit your details below and our academic admissions officer will assist you immediately.</p>
                </div>

                <form className="space-y-4" onsubmit="event.preventDefault(); document.querySelector('.open-enquiry-modal').click();">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1">Parent's Full Name *</label>
                            <input type="text" required placeholder="e.g. Priya Sundaram" className="w-full text-xs px-4 py-3 rounded-xl border border-gray-200 bg-white" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1">Primary Phone Number *</label>
                            <input type="tel" required placeholder="e.g. 98400 12345" className="w-full text-xs px-4 py-3 rounded-xl border border-gray-200 bg-white" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
                            <input type="email" placeholder="e.g. parent@gmail.com" className="w-full text-xs px-4 py-3 rounded-xl border border-gray-200 bg-white" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1">Program Seeking Admission *</label>
                            <select className="w-full text-xs px-4 py-3 rounded-xl border border-gray-200 bg-white">
                                <option>Play Group (1.5 - 2.5 yrs)</option>
                                <option>Pre-KG (2.5 - 3.5 yrs)</option>
                                <option>Junior KG (LKG)</option>
                                <option>Senior KG (UKG)</option>
                                <option>Graders (Primary CBSE)</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Comments or Campus Visit Preference</label>
                        <textarea rows="2" placeholder="Preferred date to visit or special learning considerations..." className="w-full text-xs px-4 py-2.5 rounded-xl border border-gray-200 bg-white"></textarea>
                    </div>

                    <button type="submit" className=" btn-gold w-full py-3.5 text-sm font-bold justify-center shadow-lg" onClick={() => openModal("Play Group", "enquiry")}>
                        Submit Admission Form <i className="fa-solid fa-paper-plane text-xs"></i>
                    </button>
                </form>
            </div>
        </div>
    </section>

    {/* Footer */}
    </div>
  );
}
