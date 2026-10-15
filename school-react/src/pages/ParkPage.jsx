import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import AnimatedCounter from '../components/AnimatedCounter';

export default function ParkPage() {
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
    <div className="parkpage-page">
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
            <Link to="/park" className="text-brand-purple">Playing Park</Link>
            <Link to="/#testimonials">Testimonials</Link>
            <Link to="/contact">Admission</Link>
            <a href="safety.html">Safety & Security</a>
        </nav>
    </div>

    {/* ULTRA PREMIUM PARALLAX HERO SECTION */}
    <section className="reveal-on-scroll relative w-full h-[400px] md:h-[500px] bg-fixed bg-center bg-cover flex flex-col items-center justify-center overflow-hidden" style={{ backgroundImage: 'url(\'/assets/DSC_0001.jpg\')' }}>
        {/* Vibrant Multi-Stop Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple-dark/95 via-purple-700/70 to-green-500/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-purple-dark/100 via-transparent to-transparent"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 mt-10 w-full max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/40 text-white font-black text-xs uppercase tracking-widest mb-6 shadow-2xl mx-auto">
                <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse"></span> Where Happiness Grows
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-black tracking-tight mb-4" style={{ textShadow: '0 5px 15px rgba(0,0,0,0.5)' }}>
                The Playing <span className="text-green-400">Park</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-bold max-w-2xl mx-auto leading-relaxed" style={{ textShadow: '0 4px 10px rgba(0,0,0,0.4)' }}>
                For many children, it is their favorite time of day when they get to be on the playground for free time or recess.
            </p>
        </div>

        {/* Custom Wavy Bottom Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-1">
            <svg className="block w-full h-12 lg:h-16" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,137.9,118.8,206.5,107.5C246.3,101.4,284.49,81.44,321.39,56.44Z" fill="#fdfbf7"></path>
            </svg>
        </div>
    </section>

    {/* FLOATING 3D INTRO CARD */}
    <section className="reveal-on-scroll relative z-30 max-w-[1000px] mx-auto px-6 sm:px-16 -mt-16 mb-20">
        <div className="bg-gradient-to-br from-white to-green-50 rounded-[2rem] p-8 md:p-10 shadow-[0_20px_40px_rgba(76,40,130,0.1)] border-[6px] border-white relative overflow-hidden">
            {/* Decorative corner blobs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-300 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-yellow rounded-full blur-3xl opacity-30"></div>

            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 bg-green-500 rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(34,197,94,0.3)] border-4 border-white relative group text-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-transparent rounded-full opacity-50"></div>
                    <i className="fa-solid fa-tree text-4xl md:text-5xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 relative z-10"></i>
                </div>
                
                <div>
                    <h2 className="font-display text-2xl md:text-3xl text-brand-purple font-black mb-3">More Than Just Play</h2>
                    <p className="text-gray-700 font-bold text-sm md:text-base leading-relaxed">
                        Playgrounds often provide benefits that are far more profound and far-reaching than those that even the most sophisticated modern teaching-based technologies can provide. It is a place for children to escape from the pressures of learning during the day, knowing that time on the playground is their own time.
                    </p>
                </div>
            </div>
        </div>
    </section>

    {/* CHUNKY 3D BENTO MEASURES WITH "WOW" IMAGES */}
    <section className="reveal-on-scroll max-w-[1240px] w-full mx-auto px-6 sm:px-16 py-10 lg:py-12">
        <div className="text-center mb-12">
            <span className="font-script text-brand-purple text-3xl block mb-1 drop-shadow-sm">Why We Play</span>
            <h2 className="font-display text-3xl lg:text-4xl text-brand-purple font-black tracking-tight drop-shadow-md">The Benefits of Free Play</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
            {/* Benefit 1 */}
            <div className="rounded-[2rem] border-[4px] border-white shadow-[0_15px_30px_rgba(76,40,130,0.15)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(76,40,130,0.25)] transition-all duration-500 relative group overflow-hidden h-[340px] flex flex-col justify-end">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url(\'/assets/class_activity.jpg\')' }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/95 via-orange-600/50 to-transparent"></div>
                
                <div className="relative z-10 bg-white/10 backdrop-blur-md border-t border-white/30 p-6 transform transition-transform duration-300">
                    <div className="absolute -top-8 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center text-orange-500 text-xl shadow-lg border-[3px] border-orange-100 group-hover:animate-bounce-slow">
                        <i className="fa-solid fa-heart-pulse"></i>
                    </div>
                    <h3 className="font-display text-xl font-black text-white mb-2 leading-tight drop-shadow-md">Physical & Mental Health</h3>
                    <p className="text-white/95 font-bold text-xs leading-relaxed drop-shadow-sm">Physical activity reduces the risk of psychological problems in children, fosters their self-esteem, avoids weight gain, and helps achieve peak bone mass and mental well-being.</p>
                </div>
            </div>

            {/* Benefit 2 */}
            <div className="rounded-[2rem] border-[4px] border-white shadow-[0_15px_30px_rgba(76,40,130,0.15)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(76,40,130,0.25)] transition-all duration-500 relative group overflow-hidden h-[340px] flex flex-col justify-end">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url(\'/assets/garden1.jpg\')' }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/95 via-green-600/50 to-transparent"></div>
                
                <div className="relative z-10 bg-white/10 backdrop-blur-md border-t border-white/30 p-6 transform transition-transform duration-300">
                    <div className="absolute -top-8 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-500 text-xl shadow-lg border-[3px] border-green-100 group-hover:animate-bounce-slow">
                        <i className="fa-solid fa-users"></i>
                    </div>
                    <h3 className="font-display text-xl font-black text-white mb-2 leading-tight drop-shadow-md">Social Lifelong Skills</h3>
                    <p className="text-white/95 font-bold text-xs leading-relaxed drop-shadow-sm">Professionals recognize that the social skills children develop on the playground often become lifelong skills carried forward into their adulthood.</p>
                </div>
            </div>

            {/* Benefit 3 */}
            <div className="rounded-[2rem] border-[4px] border-white shadow-[0_15px_30px_rgba(76,40,130,0.15)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(76,40,130,0.25)] transition-all duration-500 relative group overflow-hidden h-[340px] flex flex-col justify-end">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url(\'/assets/DSC_0857.jpg\')' }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-600/50 to-transparent"></div>
                
                <div className="relative z-10 bg-white/10 backdrop-blur-md border-t border-white/30 p-6 transform transition-transform duration-300">
                    <div className="absolute -top-8 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-500 text-xl shadow-lg border-[3px] border-blue-100 group-hover:animate-bounce-slow">
                        <i className="fa-solid fa-lightbulb"></i>
                    </div>
                    <h3 className="font-display text-xl font-black text-white mb-2 leading-tight drop-shadow-md">Healthy Development</h3>
                    <p className="text-white/95 font-bold text-xs leading-relaxed drop-shadow-sm">Most forms of play are essential for healthy development, but free, spontaneous play—the kind that occurs on playgrounds—is the most beneficial type of play.</p>
                </div>
            </div>

        </div>
    </section>

    {/* RYANS PARK BANNER */}
    <section className="reveal-on-scroll max-w-[1100px] w-full mx-auto px-6 sm:px-16 py-10 mb-10 z-20 relative">
        <div className="bg-gradient-to-r from-brand-yellow to-yellow-300 rounded-[2rem] p-8 md:p-12 border-[6px] border-white shadow-[0_20px_0px_rgb(204,147,0)] relative flex flex-col md:flex-row items-center gap-8 overflow-visible">
            
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center text-4xl md:text-5xl shadow-[0_15px_30px_rgba(0,0,0,0.2)] border-[6px] border-brand-purple md:-ml-16 shrink-0 transform -rotate-12 animate-pulse text-brand-purple">
                <i className="fa-solid fa-face-smile-beam"></i>
            </div>

            <div className="text-brand-purple-dark flex-1 space-y-4">
                <h3 className="font-display text-2xl lg:text-3xl font-black drop-shadow-sm">Ryans Playing Park</h3>
                <p className="text-sm md:text-base font-bold drop-shadow-sm leading-relaxed">
                    Designed and equipped for the intended purpose to ensure engaging children with excitement, keeping them happy and stress-free. This improves their learning abilities and promotes basic cognitive skills, problem solving, discovery, creativity, reasoning, and dexterity.
                </p>
            </div>
        </div>
    </section>

    {/* MASONRY GALLERY OF KIDS PLAYING */}
    <section className="reveal-on-scroll w-full bg-brand-yellow-light/50 py-16 border-t-2 border-white relative">
        <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-16">
            <div className="text-center mb-12">
                <span className="font-script text-brand-purple text-3xl block mb-1 drop-shadow-sm">Joyful Moments</span>
                <h2 className="font-display text-3xl lg:text-4xl text-brand-purple font-black tracking-tight drop-shadow-md">Kids In Action</h2>
            </div>
            
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {/* Gallery Images using existing sports/sunny assets */}
                <div className="break-inside-avoid rounded-2xl overflow-hidden border-4 border-white shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                    <img src="/assets/sports1.png" alt="Kids Playing 1" className="w-full object-cover" />
                </div>
                <div className="break-inside-avoid rounded-2xl overflow-hidden border-4 border-white shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                    <img src="/assets/sunny1.png" alt="Kids Playing 2" className="w-full object-cover" />
                </div>
                <div className="break-inside-avoid rounded-2xl overflow-hidden border-4 border-white shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                    <img src="/assets/sports2.png" alt="Kids Playing 3" className="w-full object-cover" />
                </div>
                <div className="break-inside-avoid rounded-2xl overflow-hidden border-4 border-white shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                    <img src="/assets/sunny2.png" alt="Kids Playing 4" className="w-full object-cover" />
                </div>
                <div className="break-inside-avoid rounded-2xl overflow-hidden border-4 border-white shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                    <img src="/assets/sports3.png" alt="Kids Playing 5" className="w-full object-cover" />
                </div>
                <div className="break-inside-avoid rounded-2xl overflow-hidden border-4 border-white shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                    <img src="/assets/sunny3.png" alt="Kids Playing 6" className="w-full object-cover" />
                </div>
                <div className="break-inside-avoid rounded-2xl overflow-hidden border-4 border-white shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                    <img src="/assets/sports4.png" alt="Kids Playing 7" className="w-full object-cover" />
                </div>
                <div className="break-inside-avoid rounded-2xl overflow-hidden border-4 border-white shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                    <img src="/assets/sunny4.png" alt="Kids Playing 8" className="w-full object-cover" />
                </div>
                <div className="break-inside-avoid rounded-2xl overflow-hidden border-4 border-white shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                    <img src="/assets/sports5.png" alt="Kids Playing 9" className="w-full object-cover" />
                </div>
                <div className="break-inside-avoid rounded-2xl overflow-hidden border-4 border-white shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                    <img src="/assets/sunny5.png" alt="Kids Playing 10" className="w-full object-cover" />
                </div>
            </div>
        </div>
    </section>
{/* Footer Section */}
    </div>
  );
}
