import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import AnimatedCounter from '../components/AnimatedCounter';

export default function ActivitiesPage() {
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
    <div className="activitiespage-page">
      {/* Banner */}
    <section className="reveal-on-scroll py-12 bg-gradient-to-r from-[#4B1F6F] via-[#6B3A8D] to-[#4B1F6F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#F3D98B]">Beyond The Classroom</span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">Activities & Sports</h1>
                <p className="text-purple-200 text-sm mt-2">Nurturing creative talents, athletic vigor, and social camaraderie.</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-200">
                <Link to="/" className="hover:text-white transition">Home</Link>
                <span>/</span>
                <span className="text-[#D4A72C]">Activities</span>
            </div>
        </div>
    </section>

    {/* Activity Cards Grid */}
    <section className="reveal-on-scroll py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Activity 1: Physical Education & Sports */}
                <div className="premium-card overflow-hidden card-interactive-lift">
                    <div className="h-52 overflow-hidden">
                        <img src="/assets/sports (1).jpg" alt="Physical Education at Ryans" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                        <span className="purple-badge text-[10px] mb-2">Athletics & Stamina</span>
                        <h3 className="text-xl font-bold text-[#4B1F6F] mb-2">Physical Education & Sports</h3>
                        <p className="text-xs text-gray-600 leading-relaxed font-medium">
                            Coaching in track & field sprints, relay racing, football agility drills, obstacle courses, and teamwork sportsmanship culminating in the grand annual Velocity Fest.
                        </p>
                    </div>
                </div>

                {/* Activity 2: Dance & Rhythm */}
                <div className="premium-card overflow-hidden card-interactive-lift">
                    <div className="h-52 overflow-hidden">
                        <img src="/assets/anual2.png" alt="Dance & Rhythm at Ryans" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                        <span className="gold-badge text-[10px] mb-2">Artistic Movement</span>
                        <h3 className="text-xl font-bold text-[#4B1F6F] mb-2">Dance, Rhythm & Music</h3>
                        <p className="text-xs text-gray-600 leading-relaxed font-medium">
                            Students learn classical Indian mudras, western contemporary grooves, stage synchronization, and vocal choir melodies under certified cultural instructors.
                        </p>
                    </div>
                </div>

                {/* Activity 3: Creative Arts & Crafts */}
                <div className="premium-card overflow-hidden card-interactive-lift">
                    <div className="h-52 overflow-hidden">
                        <img src="/assets/jkg_arts.jpg" alt="Art & Craft at Ryans" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                        <span className="purple-badge text-[10px] mb-2">Fine Motor & Imagination</span>
                        <h3 className="text-xl font-bold text-[#4B1F6F] mb-2">Visual Arts, Drawing & Clay</h3>
                        <p className="text-xs text-gray-600 leading-relaxed font-medium">
                            Finger painting, canvas oil-pastel techniques, pottery clay modeling, origami, and collage design helping children express visual stories freely.
                        </p>
                    </div>
                </div>

                {/* Activity 4: Abacus & Mental Math */}
                <div className="premium-card overflow-hidden card-interactive-lift" id="abacus">
                    <div className="h-52 overflow-hidden bg-purple-50 flex items-center justify-center">
                        <img src="/assets/abacus.jpg" alt="Abacus Program" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                        <span className="gold-badge text-[10px] mb-2">Brain Gym</span>
                        <h3 className="text-xl font-bold text-[#4B1F6F] mb-2">Abacus & Mental Arithmetic</h3>
                        <p className="text-xs text-gray-600 leading-relaxed font-medium">
                            Specialized soroban bead training unlocking both left and right brain coordination, concentration endurance, spatial visualization, and lightning mental calculation.
                        </p>
                    </div>
                </div>

                {/* Activity 5: Yoga & Karate */}
                <div className="premium-card overflow-hidden card-interactive-lift">
                    <div className="h-52 overflow-hidden">
                        <img src="/assets/karate.jpg" alt="Karate & Yoga at Ryans" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                        <span className="purple-badge text-[10px] mb-2">Discipline & Core Balance</span>
                        <h3 className="text-xl font-bold text-[#4B1F6F] mb-2">Yoga, Martial Arts & Karate</h3>
                        <p className="text-xs text-gray-600 leading-relaxed font-medium">
                            Gentle breathing yoga asanas develop internal calmness and posture, while basic self-defense kata routines instill respect, focus, and physical discipline.
                        </p>
                    </div>
                </div>

                {/* Activity 6: Field Trips & Nature Walks */}
                <div className="premium-card overflow-hidden card-interactive-lift">
                    <div className="h-52 overflow-hidden">
                        <img src="/assets/field (1).jpg" alt="Field Trips at Ryans" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                        <span className="gold-badge text-[10px] mb-2">Experiential Learning</span>
                        <h3 className="text-xl font-bold text-[#4B1F6F] mb-2">Field Trips & Environmental Tours</h3>
                        <p className="text-xs text-gray-600 leading-relaxed font-medium">
                            Supervised excursions to botanical gardens, science planetariums, zoological parks, and post offices connecting classroom concepts with real world discovery.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Activities Photo Showcase */}
    <section className="reveal-on-scroll py-16 bg-[#FAF8F4] border-t border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                <div>
                    <span className="gold-badge mb-2">Hands-on Discovery</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B1F6F]">Activities in Action</h2>
                    <p className="text-gray-600 text-sm sm:text-base mt-2">Glimpses of daily joy, artistic expression, and athletic discovery at Ryans Academy.</p>
                </div>
                <Link to="/gallery" className="btn-outline-purple text-xs font-bold mt-4 md:mt-0 self-start md:self-auto">
                    View Full Gallery <i className="fa-solid fa-arrow-right ml-1"></i>
                </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white img-zoom-container h-48">
                    <img src="/assets/kids_art_painting.jpg" alt="Art painting workshop" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white img-zoom-container h-48">
                    <img src="/assets/teacher_kids_blocks.jpg" alt="Montessori block building" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white img-zoom-container h-48">
                    <img src="/assets/kids_sand_play.jpg" alt="Sensory sand play" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white img-zoom-container h-48">
                    <img src="/assets/kids_slide_play.jpg" alt="Playground agility" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white img-zoom-container h-48">
                    <img src="/assets/sports (5).jpg" alt="Obstacle challenge" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white img-zoom-container h-48">
                    <img src="/assets/DSC_0151.jpg" alt="Science wonder lab" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white img-zoom-container h-48">
                    <img src="/assets/DSC_0208.jpg" alt="Collaborative craft" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white img-zoom-container h-48">
                    <img src="/assets/kids_chairs_game.jpg" alt="Musical movement" className="w-full h-full object-cover" loading="lazy" />
                </div>
            </div>
        </div>
    </section>

    {/* Footer */}
    </div>
  );
}
