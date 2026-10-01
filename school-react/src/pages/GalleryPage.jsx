import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import AnimatedCounter from '../components/AnimatedCounter';

export default function GalleryPage() {
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
    <div className="gallerypage-page">
      {/* Banner */}
    <section className="reveal-on-scroll py-12 bg-gradient-to-r from-[#4B1F6F] via-[#6B3A8D] to-[#4B1F6F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#F3D98B]">Visual Storytelling</span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">Photo & Video Gallery</h1>
                <p className="text-purple-200 text-sm mt-2">Glimpses into student life, classrooms, celebrations, and sports.</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-purple-200">
                <Link to="/" className="hover:text-white transition">Home</Link>
                <span>/</span>
                <span className="text-[#D4A72C]">Gallery</span>
            </div>
        </div>
    </section>

    {/* Gallery Section with Filter Pills */}
    <section className="reveal-on-scroll py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter Pills */}
            <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
                <button className="gallery-filter-btn px-5 py-2.5 rounded-full text-xs font-bold bg-[#4B1F6F] text-white shadow-sm transition" data-filter="all">All Moments</button>
                <button className="gallery-filter-btn px-5 py-2.5 rounded-full text-xs font-bold bg-white text-gray-700 border border-purple-100 hover:border-[#4B1F6F] transition" data-filter="events">Events & Festivals</button>
                <button className="gallery-filter-btn px-5 py-2.5 rounded-full text-xs font-bold bg-white text-gray-700 border border-purple-100 hover:border-[#4B1F6F] transition" data-filter="sports">Sports & Athletics</button>
                <button className="gallery-filter-btn px-5 py-2.5 rounded-full text-xs font-bold bg-white text-gray-700 border border-purple-100 hover:border-[#4B1F6F] transition" data-filter="activities">Art & Activities</button>
                <button className="gallery-filter-btn px-5 py-2.5 rounded-full text-xs font-bold bg-white text-gray-700 border border-purple-100 hover:border-[#4B1F6F] transition" data-filter="campus">Classrooms & Campus</button>
            </div>

            {/* Gallery Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5" id="gallery-grid">
                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="events" data-title="RYANOVA Annual Day Grand Finale">
                    <img src="/assets/Annual-Day.jpg" alt="RYANOVA Annual Day Grand Finale" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">RYANOVA Annual Gala</p>
                            <p className="text-[10px] text-purple-200">Stage Finale</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="events" data-title="Annual Day Lighting & Music">
                    <img src="/assets/anual1.png" alt="Annual Day Lighting & Music" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Annual Day Lighting</p>
                            <p className="text-[10px] text-purple-200">Cultural Fest</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="events" data-title="Traditional Folk Dance Recital">
                    <img src="/assets/anual2.png" alt="Traditional Folk Dance Recital" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Traditional Dance</p>
                            <p className="text-[10px] text-purple-200">Stage Choreography</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="events" data-title="Rhythm & Melody School Choir">
                    <img src="/assets/anual3.png" alt="Rhythm & Melody School Choir" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Rhythm & Melody</p>
                            <p className="text-[10px] text-purple-200">Grand Ensemble</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="events" data-title="Cultural Celebrations & Heritage">
                    <img src="/assets/celeb.jpg" alt="Cultural Celebrations & Heritage" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Cultural Festivity</p>
                            <p className="text-[10px] text-purple-200">Traditional Day</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="events" data-title="Patriotic Celebrations & Parade">
                    <img src="/assets/DSC_0169.jpg" alt="Patriotic Celebrations & Parade" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Patriotic Celebrations</p>
                            <p className="text-[10px] text-purple-200">Flag & Parade</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="events" data-title="Costume Carnival & Dramatic Play">
                    <img src="/assets/DSC_0223.jpg" alt="Costume Carnival & Dramatic Play" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Costume Carnival</p>
                            <p className="text-[10px] text-purple-200">Creative Roles</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="events" data-title="Junior Stage Recital & Expression">
                    <img src="/assets/DSC_0245.jpg" alt="Junior Stage Recital & Expression" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Junior Stage Recital</p>
                            <p className="text-[10px] text-purple-200">Public Speaking</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="events" data-title="Annual Award Ceremony">
                    <img src="/assets/DSC_0318.jpg" alt="Annual Award Ceremony" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Award Ceremony</p>
                            <p className="text-[10px] text-purple-200">Student Accolades</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="events" data-title="Parent-Teacher Celebration Meet">
                    <img src="/assets/DSC_0326.jpg" alt="Parent-Teacher Celebration Meet" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Parent-Teacher Meet</p>
                            <p className="text-[10px] text-purple-200">Community Bond</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="events" data-title="Kindergarten Graduation Milestone">
                    <img src="/assets/DSC_0366.jpg" alt="Kindergarten Graduation Milestone" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Graduation Milestone</p>
                            <p className="text-[10px] text-purple-200">Kindergarten Honors</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="events" data-title="Family & Grandparents Day">
                    <img src="/assets/DSC_0396.jpg" alt="Family & Grandparents Day" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Family Day Gala</p>
                            <p className="text-[10px] text-purple-200">Joyful Memories</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="sports" data-title="Velocity Fest Sprint Competition">
                    <img src="/assets/sports (1).jpg" alt="Velocity Fest Sprint Competition" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Velocity Fest Sprint</p>
                            <p className="text-[10px] text-purple-200">Track Athletics</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="sports" data-title="Inter-House Relay Race Challenge">
                    <img src="/assets/sports (2).jpg" alt="Inter-House Relay Race Challenge" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Inter-House Relay</p>
                            <p className="text-[10px] text-purple-200">Team Speed</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="sports" data-title="Velocity Athletic Finish Line">
                    <img src="/assets/sports (3).jpg" alt="Velocity Athletic Finish Line" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Athletic Sprint</p>
                            <p className="text-[10px] text-purple-200">Track Athletics</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="sports" data-title="Team Field Games & Coordination">
                    <img src="/assets/sports (4).jpg" alt="Team Field Games & Coordination" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Team Field Games</p>
                            <p className="text-[10px] text-purple-200">Outdoor Sports</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="sports" data-title="Junior Obstacle Agility Course">
                    <img src="/assets/sports (5).jpg" alt="Junior Obstacle Agility Course" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Obstacle Course</p>
                            <p className="text-[10px] text-purple-200">Balance & Agility</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="sports" data-title="Velocity Sprint Races">
                    <img src="/assets/sports (6).jpg" alt="Velocity Sprint Races" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Velocity Sprints</p>
                            <p className="text-[10px] text-purple-200">Speed Challenge</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="sports" data-title="Relay Championship Baton Exchange">
                    <img src="/assets/sports (7).jpg" alt="Relay Championship Baton Exchange" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Relay Champions</p>
                            <p className="text-[10px] text-purple-200">Team Coordination</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="sports" data-title="Yoga & Posture Wellness Drills">
                    <img src="/assets/sports (8).jpg" alt="Yoga & Posture Wellness Drills" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Yoga Wellness</p>
                            <p className="text-[10px] text-purple-200">Flexibility & Calm</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="sports" data-title="Martial Arts Demonstration">
                    <img src="/assets/sports (9).jpg" alt="Martial Arts Demonstration" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Martial Arts</p>
                            <p className="text-[10px] text-purple-200">Focus & Discipline</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="sports" data-title="Inter-Class Tug of War">
                    <img src="/assets/sports (10).jpg" alt="Inter-Class Tug of War" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Tug of War</p>
                            <p className="text-[10px] text-purple-200">Camaraderie & Grit</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="sports" data-title="Hurdle Jumps & Agility Track">
                    <img src="/assets/sports (11).jpg" alt="Hurdle Jumps & Agility Track" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Hurdle Jumps</p>
                            <p className="text-[10px] text-purple-200">Motor Fitness</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="sports" data-title="Sports Day Victory Ceremony">
                    <img src="/assets/sports (12).jpg" alt="Sports Day Victory Ceremony" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Victory Podium</p>
                            <p className="text-[10px] text-purple-200">Medal Winners</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="activities" data-title="Creative Visual Art Painting">
                    <img src="/assets/kids_art_painting.jpg" alt="Creative Visual Art Painting" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Canvas Art Painting</p>
                            <p className="text-[10px] text-purple-200">Color Explorations</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="activities" data-title="Creative Arts & Craft Workshop">
                    <img src="/assets/jkg_arts.jpg" alt="Creative Arts & Craft Workshop" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Creative Workshop</p>
                            <p className="text-[10px] text-purple-200">Finger Painting</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="activities" data-title="Montessori Sensorial Block Building">
                    <img src="/assets/teacher_kids_blocks.jpg" alt="Montessori Sensorial Block Building" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Sensorial Blocks</p>
                            <p className="text-[10px] text-purple-200">Spatial Dexterity</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="activities" data-title="Architectural Stacking & Shapes">
                    <img src="/assets/kids_blocks_play.jpg" alt="Architectural Stacking & Shapes" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Architectural Blocks</p>
                            <p className="text-[10px] text-purple-200">Motor Agility</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="activities" data-title="Tactile Sensory Sand Play">
                    <img src="/assets/kids_sand_play.jpg" alt="Tactile Sensory Sand Play" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Sensory Sand Play</p>
                            <p className="text-[10px] text-purple-200">Tactile Discovery</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="activities" data-title="Musical Movement & Rhythm Games">
                    <img src="/assets/kids_chairs_game.jpg" alt="Musical Movement & Rhythm Games" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Musical Movement</p>
                            <p className="text-[10px] text-purple-200">Rhythm Coordination</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="activities" data-title="Hands-on STEM & Science Lab">
                    <img src="/assets/DSC_0151.jpg" alt="Hands-on STEM & Science Lab" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Curiosity & Science Lab</p>
                            <p className="text-[10px] text-purple-200">Hands-on Wonder</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="activities" data-title="Montessori Bead Math Work">
                    <img src="/assets/DSC_0201.jpg" alt="Montessori Bead Math Work" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Montessori Math</p>
                            <p className="text-[10px] text-purple-200">Concrete Learning</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="activities" data-title="Clay Modeling & Tactile Sculpture">
                    <img src="/assets/DSC_0208.jpg" alt="Clay Modeling & Tactile Sculpture" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Clay Modeling</p>
                            <p className="text-[10px] text-purple-200">Sculpting Imagination</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="activities" data-title="Storytelling & Puppet Theater">
                    <img src="/assets/DSC_0230.jpg" alt="Storytelling & Puppet Theater" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Storytelling Nook</p>
                            <p className="text-[10px] text-purple-200">Literacy & Speech</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="activities" data-title="Montessori Cylinder Blocks">
                    <img src="/assets/DSC_0269.jpg" alt="Montessori Cylinder Blocks" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Cylinder Blocks</p>
                            <p className="text-[10px] text-purple-200">Visual Discrimination</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="activities" data-title="Collaborative Group Work">
                    <img src="/assets/DSC_0300.jpg" alt="Collaborative Group Work" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Collaborative Project</p>
                            <p className="text-[10px] text-purple-200">Peer Problem Solving</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="campus" data-title="Serene Green Campus Grounds">
                    <img src="/assets/DSC_0001.jpg" alt="Serene Green Campus Grounds" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Campus Grounds</p>
                            <p className="text-[10px] text-purple-200">Lush Green Spaces</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="campus" data-title="Daylight-Filled Learning Studio">
                    <img src="/assets/DSC_0013.jpg" alt="Daylight-Filled Learning Studio" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Daylight Classroom</p>
                            <p className="text-[10px] text-purple-200">Ergonomic Space</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="campus" data-title="Smart Multimedia Visual Board">
                    <img src="/assets/DSC_0014.jpg" alt="Smart Multimedia Visual Board" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Smart Classroom</p>
                            <p className="text-[10px] text-purple-200">Interactive Learning</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="campus" data-title="Active Learners in Focus">
                    <img src="/assets/DSC_0025.jpg" alt="Active Learners in Focus" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Active Learners</p>
                            <p className="text-[10px] text-purple-200">Attentive Minds</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="campus" data-title="Montessori Prepared Station">
                    <img src="/assets/DSC_0108.jpg" alt="Montessori Prepared Station" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Montessori Station</p>
                            <p className="text-[10px] text-purple-200">Self-Paced Discovery</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="campus" data-title="Primary Graders Discussion">
                    <img src="/assets/DSC_0308.jpg" alt="Primary Graders Discussion" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Graders Discussion</p>
                            <p className="text-[10px] text-purple-200">Group Collaboration</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="campus" data-title="Ergonomic Modern Desks">
                    <img src="/assets/DSC_0534.jpg" alt="Ergonomic Modern Desks" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Ergonomic Classroom</p>
                            <p className="text-[10px] text-purple-200">Modern Layout</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="campus" data-title="Assembly & Moral Values">
                    <img src="/assets/DSC_0857.jpg" alt="Assembly & Moral Values" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">School Assembly</p>
                            <p className="text-[10px] text-purple-200">Values & Ethics</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="campus" data-title="Ryans Academy Student Leaders">
                    <img src="/assets/DSC_0868.jpg" alt="Ryans Academy Student Leaders" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Ryans Students</p>
                            <p className="text-[10px] text-purple-200">Campus Cohort</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="campus" data-title="Morning Courtyard Gathering">
                    <img src="/assets/DSC_0898.jpg" alt="Morning Courtyard Gathering" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Morning Gathering</p>
                            <p className="text-[10px] text-purple-200">Campus Life</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="campus" data-title="Joyful Moments & Warm Friendships">
                    <img src="/assets/DSC_0922.jpg" alt="Joyful Moments & Warm Friendships" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Joyful Scholars</p>
                            <p className="text-[10px] text-purple-200">Friendship & Smiles</p>
                        </div>
                    </div>
                </div>

                {/* Item */}
                <div className="gallery-item h-64 shadow-sm img-zoom-container" data-category="campus" data-title="Safe Outdoor Playgrounds">
                    <img src="/assets/kids_park_play.jpg" alt="Safe Outdoor Playgrounds" className="w-full h-full object-cover" loading="lazy" />
                    <div className="gallery-overlay absolute inset-0 flex items-end p-4 text-white">
                        <div>
                            <p className="font-bold text-xs">Safe Playground</p>
                            <p className="text-[10px] text-purple-200">Recreational Turf</p>
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
