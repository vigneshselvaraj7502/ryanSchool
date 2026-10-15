import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import AnimatedCounter from '../components/AnimatedCounter';

export default function ContactPage() {
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
    <div className="contactpage-page">
      {/* Banner */}
    <section className="reveal-on-scroll py-14 anim-aurora-bg text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
            <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#F3D98B] bg-white/10 px-3 py-1 rounded-full border border-white/20 inline-block mb-2">We Are Here To Help</span>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-1">Contact <span className="text-shimmer-gold font-serif italic">Ryans Academy</span></h1>
                <p className="text-purple-200 text-sm mt-2">Plan a campus visit, connect with admissions, or send us an enquiry.</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-200 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
                <Link to="/" className="hover:text-white transition">Home</Link>
                <span>/</span>
                <span className="text-[#D4A72C]">Contact</span>
            </div>
        </div>
    </section>

    {/* Main Contact & Visit Section */}
    <section className="reveal-on-scroll py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left: Contact Details & Office Hours */}
                <div className="lg:col-span-5 space-y-8">
                    <div>
                        <span className="purple-badge text-xs mb-2">Campus Information</span>
                        <h2 className="text-3xl font-extrabold text-[#4B1F6F]">Visit or Reach Out</h2>
                        <p className="text-sm text-gray-600 font-medium mt-2 leading-relaxed">
                            Our admissions coordinators are available from Monday through Saturday to answer questions, explain curriculum details, and guide campus tours.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {/* Channel 1: Campus Address */}
                        <div className="contact-channel-card group">
                            <div className="contact-channel-icon bg-gradient-to-br from-[#4B1F6F] to-[#6B3A8D] text-white shadow-md shadow-purple-900/25">
                                <i className="fa-solid fa-location-dot text-[#F3D98B]"></i>
                            </div>
                            <div className="flex-1 min-w-0">
                                <span className="text-[9px] font-black uppercase tracking-wider text-[#4B1F6F] bg-[#F1EAF7] px-2 py-0.5 rounded-full border border-purple-200/50 inline-block mb-1">
                                    Main Campus
                                </span>
                                <h4 className="font-extrabold text-sm sm:text-base text-[#4B1F6F]">Campus Address</h4>
                                <p className="text-xs text-gray-600 font-medium mt-0.5 leading-relaxed">
                                    Ryans Academy Campus, Main Avenue, Chennai, Tamil Nadu 600001, India.
                                </p>
                            </div>
                        </div>

                        {/* Channel 2: Telephone */}
                        <div className="contact-channel-card group">
                            <div className="contact-channel-icon bg-gradient-to-br from-[#D4A72C] to-[#E67E22] text-white shadow-md shadow-amber-500/25">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div className="flex-1 min-w-0">
                                <span className="text-[9px] font-black uppercase tracking-wider text-[#D4A72C] bg-[#FDF8E7] px-2 py-0.5 rounded-full border border-amber-200/50 inline-block mb-1">
                                    Voice Desk
                                </span>
                                <h4 className="font-extrabold text-sm sm:text-base text-[#4B1F6F]">Direct Telephone</h4>
                                <p className="text-xs text-gray-600 font-medium mt-0.5">
                                    <a href="tel:+919840012345" className="hover:text-[#D4A72C] font-bold transition-colors">+91 98400 12345</a> / <a href="tel:+919840054321" className="hover:text-[#D4A72C] transition-colors">+91 98400 54321</a>
                                </p>
                            </div>
                        </div>

                        {/* Channel 3: WhatsApp Desk */}
                        <div className="contact-channel-card group">
                            <div className="contact-channel-icon bg-gradient-to-br from-[#10B981] to-[#059669] text-white shadow-md shadow-emerald-500/25">
                                <i className="fa-brands fa-whatsapp text-xl"></i>
                            </div>
                            <div className="flex-1 min-w-0">
                                <span className="text-[9px] font-black uppercase tracking-wider text-[#059669] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/50 inline-block mb-1">
                                    Instant Connect
                                </span>
                                <h4 className="font-extrabold text-sm sm:text-base text-[#4B1F6F]">Admissions WhatsApp Desk</h4>
                                <p className="text-xs text-gray-600 font-medium mt-0.5">
                                    <a href="https://wa.me/919840012345?text=Hello%20Ryans%20Academy%2C%20I%20would%20like%20to%20enquire%20about%20admissions." target="_blank" className="text-emerald-700 hover:text-emerald-800 font-extrabold inline-flex items-center gap-1 transition-colors">
                                        +91 98400 12345 (Click to Chat) <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Channel 4: Email Desk */}
                        <div className="contact-channel-card group">
                            <div className="contact-channel-icon bg-gradient-to-br from-[#2563EB] to-[#3B82F6] text-white shadow-md shadow-blue-500/25">
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className="flex-1 min-w-0">
                                <span className="text-[9px] font-black uppercase tracking-wider text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200/50 inline-block mb-1">
                                    Written Enquiries
                                </span>
                                <h4 className="font-extrabold text-sm sm:text-base text-[#4B1F6F]">Email Inquiries</h4>
                                <p className="text-xs text-gray-600 font-medium mt-0.5">
                                    <a href="mailto:admissions@ryansacademy.edu.in" className="hover:text-[#2563EB] font-bold transition-colors">admissions@ryansacademy.edu.in</a>
                                </p>
                            </div>
                        </div>

                        {/* Channel 5: Visiting Hours */}
                        <div className="contact-channel-card group">
                            <div className="contact-channel-icon bg-gradient-to-br from-[#7C3AED] to-[#9333EA] text-white shadow-md shadow-purple-600/25">
                                <i className="fa-regular fa-clock"></i>
                            </div>
                            <div className="flex-1 min-w-0">
                                <span className="text-[9px] font-black uppercase tracking-wider text-[#7C3AED] bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200/50 inline-block mb-1">
                                    Front Desk Timings
                                </span>
                                <h4 className="font-extrabold text-sm sm:text-base text-[#4B1F6F]">Office & Visiting Hours</h4>
                                <p className="text-xs text-gray-600 font-medium mt-0.5">
                                    Monday – Saturday: 8:30 AM to 4:30 PM (Sunday Closed)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Schedule Tour & Message Form */}
                <div className="lg:col-span-7 bg-[#FAF8F4] p-8 sm:p-10 rounded-3xl border border-purple-100 shadow-xl">
                    <span className="gold-badge mb-2">Direct Appointment</span>
                    <h3 className="text-2xl font-bold text-[#4B1F6F] mb-6">Schedule a Personalized Campus Tour</h3>

                    <form onsubmit="event.preventDefault(); document.querySelector('.open-enquiry-modal').click();" className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Parent Name *</label>
                                <input type="text" required placeholder="Your full name" className="w-full text-xs px-4 py-3 rounded-xl border border-gray-200 bg-white" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Mobile Number *</label>
                                <input type="tel" required placeholder="10-digit mobile" className="w-full text-xs px-4 py-3 rounded-xl border border-gray-200 bg-white" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
                                <input type="email" placeholder="name@email.com" className="w-full text-xs px-4 py-3 rounded-xl border border-gray-200 bg-white" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Program Interested In *</label>
                                <select className="w-full text-xs px-4 py-3 rounded-xl border border-gray-200 bg-white">
                                    <option>Play Group (1.5 - 2.5 yrs)</option>
                                    <option>Pre-KG (2.5 - 3.5 yrs)</option>
                                    <option>Junior KG (LKG)</option>
                                    <option>Senior KG (UKG)</option>
                                    <option>Graders (Primary CBSE)</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Preferred Visit Date</label>
                                <input type="date" className="w-full text-xs px-4 py-3 rounded-xl border border-gray-200 bg-white" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Preferred Time Slot</label>
                                <select className="w-full text-xs px-4 py-3 rounded-xl border border-gray-200 bg-white">
                                    <option>Morning (09:30 AM - 11:30 AM)</option>
                                    <option>Afternoon (01:30 PM - 03:30 PM)</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1">Special Inquiries or Questions</label>
                            <textarea rows="3" placeholder="Tell us if you have any questions regarding school transport, fee structure, or facilities..." className="w-full text-xs px-4 py-2.5 rounded-xl border border-gray-200 bg-white"></textarea>
                        </div>

                        <button type="submit" className=" btn-gold w-full py-3.5 text-sm font-bold justify-center shadow-lg" onClick={() => openModal("Play Group", "visit")}>
                            Confirm Campus Tour Appointment <i className="fa-solid fa-calendar-check text-xs"></i>
                        </button>
                    </form>
                </div>
            </div>

            {/* Interactive Map Section */}
            <div className="mt-16 bg-white rounded-3xl overflow-hidden border border-purple-100 shadow-md">
                <div className="p-6 border-b border-purple-50 flex items-center justify-between">
                    <div>
                        <h4 className="font-bold text-base text-[#4B1F6F]">Ryans Academy Campus Location</h4>
                        <p className="text-xs text-gray-500">Accessible from major transportation arteries in Chennai.</p>
                    </div>
                    <a href="https://maps.google.com" target="_blank" className="btn-outline-purple text-xs py-2 px-4">
                        Open in Google Maps <i className="fa-solid fa-arrow-up-right-from-square ml-1 text-[10px]"></i>
                    </a>
                </div>
                <div className="w-full h-80 bg-gray-100 relative">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124414.28639556754!2d80.14188339726562!3d13.003926800000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin" width="100%" height="100%" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>

    {/* Footer */}
    </div>
  );
}
