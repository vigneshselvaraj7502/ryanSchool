import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import Lightbox from '../components/Lightbox';

export default function GalleryPage() {
  const { openModal } = useModal();
  const [activeFilter, setActiveFilter] = useState('infrastructure');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const carouselRef = useRef(null);

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

  // 11 Sequenced Categories with Rich Visual Cover Thumbnails
  const categories = [
    {
      id: 'infrastructure',
      seq: '01',
      label: 'School Infrastructure',
      shortLabel: 'Infrastructure',
      cover: '/assets/drive_photos/infrastructure/infra_01.jpg',
      icon: 'fa-building-columns',
      desc: 'State-of-the-Art Architecture, Safe Ergonomic Classrooms, Interactive Smart Boards & Lush Green Grounds.',
      badge: 'Campus & Facilities',
      accent: 'from-amber-500 to-purple-800'
    },
    {
      id: 'annual-day',
      seq: '02',
      label: 'Annual day Celebration',
      shortLabel: 'Annual Day',
      cover: '/assets/drive_photos/annual_day/annual_01.jpg',
      icon: 'fa-masks-theater',
      desc: 'Grand Theatrical Musicals, Symphonies of Light, Vibrant Choirs & Celebrated Student Honors.',
      badge: 'Annual Gala',
      accent: 'from-purple-600 to-indigo-900'
    },
    {
      id: 'sports-day',
      seq: '03',
      label: 'Annual Sports day',
      shortLabel: 'Sports Day',
      cover: '/assets/drive_photos/sports_day/sports_01.jpg',
      icon: 'fa-medal',
      desc: 'Track Velocity 100m Sprints, Inter-House Relay Championships, Obstacle Agility & Victory Podiums.',
      badge: 'Athletics & Track',
      accent: 'from-amber-600 to-rose-900'
    },
    {
      id: 'field-trips',
      seq: '04',
      label: 'Field trips - the best one',
      shortLabel: 'Field Trips',
      cover: '/assets/drive_photos/field_trip/field_01.jpg',
      icon: 'fa-bus',
      desc: 'Supervised Excursions to Botanical Sanctuaries, Science Planetariums, Zoos & Real-World Discovery Trips.',
      badge: 'Experiential Journeys',
      accent: 'from-emerald-600 to-teal-950'
    },
    {
      id: 'national-festivals',
      seq: '05',
      label: 'National festivals',
      shortLabel: 'National Festivals',
      cover: '/assets/drive_photos/national_festivals/national_01.jpg',
      icon: 'fa-flag',
      desc: 'Patriotic Tricolour Parades, Independence Day & Republic Day Celebrations, Anthem Choirs & Unity Pageants.',
      badge: 'National Pride',
      accent: 'from-orange-500 to-blue-900'
    },
    {
      id: 'regional-festivals',
      seq: '06',
      label: 'Regional festivals',
      shortLabel: 'Regional Festivals',
      cover: '/assets/drive_photos/tamil_new_year/fest_01.jpg',
      icon: 'fa-om',
      desc: 'Rich Cultural Heritage, Pongal Harvest Galas, Traditional Tamil Attire, Kolam & Folk Traditions.',
      badge: 'Cultural Heritage',
      accent: 'from-pink-600 to-purple-900'
    },
    {
      id: 'curriculum-activities',
      seq: '07',
      label: 'Curruculam activities',
      shortLabel: 'Curriculum Activities',
      cover: '/assets/drive_photos/project_day/project_01.jpg',
      icon: 'fa-flask',
      desc: 'Interactive STEM Projects, Montessori Sensorial Manipulatives, Scientific Inquiries & Experiential Labs.',
      badge: 'Academic & STEM',
      accent: 'from-cyan-600 to-blue-950'
    },
    {
      id: 'interschool-competitions',
      seq: '08',
      label: 'Interschool competitions',
      shortLabel: 'Interschool Competitions',
      cover: '/assets/drive_photos/competition/comp_01.jpg',
      icon: 'fa-trophy',
      desc: 'City & State Championship Shields, Karate Accolades, Interschool Debate Laurels & Olympiad Triumphs.',
      badge: 'Championship Laurels',
      accent: 'from-yellow-500 to-amber-900'
    },
    {
      id: 'daily-activities',
      seq: '09',
      label: 'Daily activities',
      shortLabel: 'Daily Activities',
      cover: '/assets/drive_photos/activities/activity_01.jpg',
      icon: 'fa-calendar-day',
      desc: 'Morning Assemblies, Montessori Work Cycles, Expressive Story Circles, Easel Art & Recess Camaraderie.',
      badge: 'Campus Life',
      accent: 'from-violet-600 to-purple-950'
    },
    {
      id: 'pt-activities',
      seq: '10',
      label: 'PT period activities',
      shortLabel: 'PT Activities',
      cover: '/assets/drive_photos/pt_activities/pt_01.jpg',
      icon: 'fa-person-running',
      desc: 'Physical Training Calisthenics, Morning Yoga Asanas, Footwork Drills, Self-Defense & Mass Exercises.',
      badge: 'Physical Education',
      accent: 'from-teal-600 to-emerald-950'
    },
    {
      id: 'dance-classes',
      seq: '11',
      label: 'Dance classes',
      shortLabel: 'Dance Classes',
      cover: '/assets/drive_photos/dance_classes/dance_01.jpg',
      icon: 'fa-music',
      desc: 'Classical Bharatanatyam Mudras, Western Beat Choreography, Poise, Rhythm Synchrony & Musical Expression.',
      badge: 'Performing Arts',
      accent: 'from-fuchsia-600 to-purple-950'
    },
    {
      id: 'dental-camp',
      seq: '12',
      label: 'Dental camp',
      shortLabel: 'Dental Camp',
      cover: '/assets/drive_photos/dental_camp/dental_01.jpg',
      icon: 'fa-tooth',
      desc: 'Annual Pediatric Dental Health Screening, Preventative Oral Care Inspections, Dental Health Records & Doctor Consultations.',
      badge: 'Health & Wellness',
      accent: 'from-sky-600 to-indigo-950'
    },
    {
      id: 'ptm',
      seq: '13',
      label: 'PTM (Parents Teachers Meeting)',
      shortLabel: 'PTM',
      cover: '/assets/drive_photos/ptm/ptm_01.jpg',
      icon: 'fa-users-between-lines',
      desc: 'Constructive Parent-Educator Dialogues, Academic Assessment Review, Developmental Milestones & Student Progress Synergies.',
      badge: 'Parent Partnership',
      accent: 'from-rose-600 to-purple-950'
    }
  ];

  // 149 100% Unique Authentic Photos (13 Distinct Curated Categories with ZERO Duplicates)
  const allGalleryItems = [
    {
      id: 'infra-1',
      src: '/assets/drive_photos/infrastructure/infra_01.jpg',
      title: 'Main Academy Campus & Modern Entrance',
      sub: 'Architectural Facade & Secure Gates',
      category: 'infrastructure',
      badge: 'Campus Facade'
    },
    {
      id: 'infra-2',
      src: '/assets/drive_photos/infrastructure/infra_02.jpg',
      title: 'Welcoming Reception & Administrative Wing',
      sub: 'Comfortable Parent Consultation Lobby',
      category: 'infrastructure',
      badge: 'Reception Lobby'
    },
    {
      id: 'infra-3',
      src: '/assets/drive_photos/infrastructure/infra_03.jpg',
      title: 'Montessori Prepared Learning Environment',
      sub: 'Sensory Discovery Materials & Apparatus',
      category: 'infrastructure',
      badge: 'Montessori Studio'
    },
    {
      id: 'infra-4',
      src: '/assets/drive_photos/infrastructure/infra_04.jpg',
      title: 'Dynamic Primary & Kindergarten Classroom',
      sub: 'Ergonomic Furniture & Child-Safe Layout',
      category: 'infrastructure',
      badge: 'Modern Classroom'
    },
    {
      id: 'infra-5',
      src: '/assets/drive_photos/infrastructure/infra_05.jpg',
      title: 'Sensory Tactile Learning Lab',
      sub: 'Hands-on Cognitive Development Zone',
      category: 'infrastructure',
      badge: 'Sensory Hub'
    },
    {
      id: 'infra-6',
      src: '/assets/drive_photos/infrastructure/infra_06.jpg',
      title: 'Interactive Multimedia Smart Board Tech',
      sub: 'Digital Visual Audio Curriculum Teaching',
      category: 'infrastructure',
      badge: 'Smart Class'
    },
    {
      id: 'infra-7',
      src: '/assets/drive_photos/infrastructure/infra_07.jpg',
      title: 'Indoor Fun & Creative Activity Play Arena',
      sub: 'Safe Soft-Padded Early Years Play Space',
      category: 'infrastructure',
      badge: 'Indoor Arena'
    },
    {
      id: 'infra-8',
      src: '/assets/drive_photos/infrastructure/infra_08.jpg',
      title: 'Junior Academy Library & Reading Corner',
      sub: 'Storybooks, Illustrated Readers & Encyclopedias',
      category: 'infrastructure',
      badge: 'Campus Library'
    },
    {
      id: 'infra-9',
      src: '/assets/drive_photos/infrastructure/infra_09.jpg',
      title: 'Lush Green Outdoor Playfield & Sports Turf',
      sub: 'Open-Air Sprint & Game Ground',
      category: 'infrastructure',
      badge: 'Sports Turf'
    },
    {
      id: 'infra-10',
      src: '/assets/drive_photos/infrastructure/infra_10.jpg',
      title: 'Campus Safety Surveillance & Clean Corridors',
      sub: 'CCTV Monitored Sanitized Hallways',
      category: 'infrastructure',
      badge: 'Safety & Hygiene'
    },
    {
      id: 'infra-11',
      src: '/assets/drive_photos/infrastructure/infra_11.jpg',
      title: 'Ryans Academy keystone Building Architecture',
      sub: 'Multi-Storey Academic Blocks & Lawns',
      category: 'infrastructure',
      badge: 'Main Block'
    },
    {
      id: 'infra-12',
      src: '/assets/drive_photos/infrastructure/infra_12.jpg',
      title: 'Interactive Science & Maths Exploration Corner',
      sub: 'NCERT & CBSE Conceptual Learning Corner',
      category: 'infrastructure',
      badge: 'Curiosity Corner'
    },
    {
      id: 'annual-1',
      src: '/assets/drive_photos/annual_day/annual_01.jpg',
      title: 'Annual Gala Stage Grand Finale & Confetti',
      sub: 'Joyous Celebration with Parents & Faculty',
      category: 'annual-day',
      badge: 'Grand Finale'
    },
    {
      id: 'annual-2',
      src: '/assets/drive_photos/annual_day/annual_02.jpg',
      title: 'Symphony of Lights & Theatrical Orchestra',
      sub: 'Stage Illumination & Live Choir Harmony',
      category: 'annual-day',
      badge: 'Symphony Stage'
    },
    {
      id: 'annual-3',
      src: '/assets/drive_photos/annual_day/annual_03.jpg',
      title: 'Primary Drama Musical & Story Play',
      sub: 'Confident Speech & Expressive Acting',
      category: 'annual-day',
      badge: 'Musical Drama'
    },
    {
      id: 'annual-4',
      src: '/assets/drive_photos/annual_day/annual_04.jpg',
      title: 'Junior Academy Rhythm Choir & Harmony',
      sub: 'Synchronized Choral Presentation',
      category: 'annual-day',
      badge: 'Choral Ensemble'
    },
    {
      id: 'annual-5',
      src: '/assets/drive_photos/annual_day/annual_05.jpg',
      title: 'Storybook Fairy Tale Pageant & Parade',
      sub: 'Whimsical Hand-Crafted Costumes',
      category: 'annual-day',
      badge: 'Story Pageant'
    },
    {
      id: 'annual-6',
      src: '/assets/drive_photos/annual_day/annual_06.jpg',
      title: 'Classical Bharatanatyam Stage Solo',
      sub: 'Graceful Mudras & Traditional Rhythms',
      category: 'annual-day',
      badge: 'Classical Dance'
    },
    {
      id: 'annual-7',
      src: '/assets/drive_photos/annual_day/annual_07.jpg',
      title: 'Contemporary Fusion Beat Choreography',
      sub: 'Energetic Group Dance Formations',
      category: 'annual-day',
      badge: 'Fusion Dance'
    },
    {
      id: 'annual-8',
      src: '/assets/drive_photos/annual_day/annual_08.jpg',
      title: 'Annual Academic Excellence Medal Honors',
      sub: 'Felicitating Top Academic Achievers',
      category: 'annual-day',
      badge: 'Merit Honors'
    },
    {
      id: 'annual-9',
      src: '/assets/drive_photos/annual_day/annual_09.jpg',
      title: 'Lighting of Ceremonial Lamp with Dignitaries',
      sub: 'Inauguration of Annual Day Festivities',
      category: 'annual-day',
      badge: 'Ceremonial Lamp'
    },
    {
      id: 'annual-10',
      src: '/assets/drive_photos/annual_day/annual_10.jpg',
      title: 'Parent Audience & Cheering Community',
      sub: 'Full House Applause in School Auditorium',
      category: 'annual-day',
      badge: 'Auditorium Gala'
    },
    {
      id: 'annual-11',
      src: '/assets/drive_photos/annual_day/annual_11.jpg',
      title: 'Folk Heritage Dance Rhythm Showcase',
      sub: 'Celebrating Indian Cultural Diversity',
      category: 'annual-day',
      badge: 'Folk Showcase'
    },
    {
      id: 'annual-12',
      src: '/assets/drive_photos/annual_day/annual_12.jpg',
      title: 'Curtain Call & Standing Ovation Ensemble',
      sub: 'Proud Students, Mentors & Principal',
      category: 'annual-day',
      badge: 'Curtain Call'
    },
    {
      id: 'sports-1',
      src: '/assets/drive_photos/sports_day/sports_01.jpg',
      title: 'Annual Sports Meet Torch Lighting Ceremony',
      sub: 'Igniting the Spirit of True Sportsmanship',
      category: 'sports-day',
      badge: 'Torch Ceremony'
    },
    {
      id: 'sports-2',
      src: '/assets/drive_photos/sports_day/sports_02.jpg',
      title: 'Grand Inter-House March Past & Salute',
      sub: 'Synchronized Drill Cadence & Flags',
      category: 'sports-day',
      badge: 'March Past'
    },
    {
      id: 'sports-3',
      src: '/assets/drive_photos/sports_day/sports_03.jpg',
      title: 'Junior 100m Track Velocity Sprint Heat',
      sub: 'Burst of Speed & Determination',
      category: 'sports-day',
      badge: 'Track Sprint'
    },
    {
      id: 'sports-4',
      src: '/assets/drive_photos/sports_day/sports_04.jpg',
      title: 'Obstacle Course Agility Challenge',
      sub: 'Balance, Coordination & Fine Motor Agility',
      category: 'sports-day',
      badge: 'Obstacle Agility'
    },
    {
      id: 'sports-5',
      src: '/assets/drive_photos/sports_day/sports_05.jpg',
      title: 'Inter-House Relay Championship Baton Pass',
      sub: 'Teamwork, Speed & Strategic Acceleration',
      category: 'sports-day',
      badge: 'Relay Championship'
    },
    {
      id: 'sports-6',
      src: '/assets/drive_photos/sports_day/sports_06.jpg',
      title: 'Tug-of-War House Championship Final',
      sub: 'Stamina, Grit & Collective Strength',
      category: 'sports-day',
      badge: 'Tug of War'
    },
    {
      id: 'sports-7',
      src: '/assets/drive_photos/sports_day/sports_07.jpg',
      title: 'Pre-Primary Fun Race & Ribbon Dash',
      sub: 'Joyful Little Runners Reaching the Finish Line',
      category: 'sports-day',
      badge: 'Fun Dash'
    },
    {
      id: 'sports-8',
      src: '/assets/drive_photos/sports_day/sports_08.jpg',
      title: 'Championship Victory Podium Ceremony',
      sub: 'Gold, Silver & Bronze Medalists',
      category: 'sports-day',
      badge: 'Podium Victory'
    },
    {
      id: 'sports-9',
      src: '/assets/drive_photos/sports_day/sports_09.jpg',
      title: 'Overall Athletic Champions House Trophy',
      sub: 'House Captains Lifting the Golden Cup',
      category: 'sports-day',
      badge: 'House Trophy'
    },
    {
      id: 'sports-10',
      src: '/assets/drive_photos/sports_day/sports_10.jpg',
      title: 'Long Jump & Field Athletics Event',
      sub: 'Focus, Technique & Graceful Airborne Flight',
      category: 'sports-day',
      badge: 'Long Jump'
    },
    {
      id: 'sports-11',
      src: '/assets/drive_photos/sports_day/sports_11.jpg',
      title: 'Sports Day Aerobic Drill Demonstration',
      sub: 'Colorful Props & Synchronized Rhythm',
      category: 'sports-day',
      badge: 'Aerobics Drill'
    },
    {
      id: 'sports-12',
      src: '/assets/drive_photos/sports_day/sports_12.jpg',
      title: 'Sports Meet Closing Parade & Anthem',
      sub: 'Celebrating Resilience & Team Sportsmanship',
      category: 'sports-day',
      badge: 'Closing Parade'
    },
    {
      id: 'field-1',
      src: '/assets/drive_photos/field_trip/field_01.jpg',
      title: 'Supervised Botanical Garden Exploration',
      sub: 'Studying Living Plants, Flora & Biodiversity',
      category: 'field-trips',
      badge: 'Botanical Tour'
    },
    {
      id: 'field-2',
      src: '/assets/drive_photos/field_trip/field_02.jpg',
      title: 'City Planetarium Astronomy Skywalk',
      sub: 'Exploring Constellations, Planets & Stargazing',
      category: 'field-trips',
      badge: 'Planetarium Excursion'
    },
    {
      id: 'field-3',
      src: '/assets/drive_photos/field_trip/field_03.jpg',
      title: 'Zoological Wildlife Park Discovery Day',
      sub: 'Observing Animal Habitats & Wildlife Conservation',
      category: 'field-trips',
      badge: 'Wildlife Sanctuary'
    },
    {
      id: 'field-4',
      src: '/assets/drive_photos/field_trip/field_04.jpg',
      title: 'Heritage Museum & Science Gallery Walkthrough',
      sub: 'Hands-on Scientific Demonstrations & History',
      category: 'field-trips',
      badge: 'Science Museum'
    },
    {
      id: 'field-5',
      src: '/assets/drive_photos/field_trip/field_05.jpg',
      title: 'Organic Farm & Green Patch Field Study',
      sub: 'Understanding Seed-to-Table Sustainable Farming',
      category: 'field-trips',
      badge: 'Organic Farm'
    },
    {
      id: 'field-6',
      src: '/assets/drive_photos/field_trip/field_06.jpg',
      title: 'Fire & Rescue Station Interactive Safety Visit',
      sub: 'Meeting Everyday Heroes & Emergency Safety',
      category: 'field-trips',
      badge: 'Community Helpers'
    },
    {
      id: 'field-7',
      src: '/assets/drive_photos/field_trip/field_07.jpg',
      title: 'Postal Heritage Office Educational Trip',
      sub: 'Learning the Journey of Letters & Postcards',
      category: 'field-trips',
      badge: 'Postal Tour'
    },
    {
      id: 'field-8',
      src: '/assets/drive_photos/field_trip/field_08.jpg',
      title: 'Aquarium & Marine Life Ecological Study',
      sub: 'Discovering Underwater Corals & Marine Fauna',
      category: 'field-trips',
      badge: 'Marine Sanctuary'
    },
    {
      id: 'field-9',
      src: '/assets/drive_photos/field_trip/field_09.jpg',
      title: 'Nature Trail Woodland Scavenger Hunt',
      sub: 'Outdoor Teamwork, Curiosity & Leaf Rubbing',
      category: 'field-trips',
      badge: 'Nature Trail'
    },
    {
      id: 'field-10',
      src: '/assets/drive_photos/field_trip/field_10.jpg',
      title: 'Aviation & Aerodrome Technology Tour',
      sub: 'Real Aircraft Engines & Avionics Mechanics',
      category: 'field-trips',
      badge: 'Aviation Tour'
    },
    {
      id: 'field-11',
      src: '/assets/drive_photos/field_trip/field_11.jpg',
      title: 'Eco Park Open-Air Collaborative Sketching',
      sub: 'Plein-Air Painting & Natural Landscape Art',
      category: 'field-trips',
      badge: 'Open-Air Art'
    },
    {
      id: 'field-12',
      src: '/assets/drive_photos/field_trip/field_12.jpg',
      title: 'Field Trip Memory Circle & Journaling',
      sub: 'Reflecting on New Discoveries with Teachers',
      category: 'field-trips',
      badge: 'Field Diary'
    },
    {
      id: 'national-1',
      src: '/assets/drive_photos/national_festivals/national_01.jpg',
      title: 'Republic Day Tricolour Flag Hoisting',
      sub: 'Patriotic Salute, Guard of Honor & National Anthem',
      category: 'national-festivals',
      badge: 'Flag Hoisting'
    },
    {
      id: 'national-2',
      src: '/assets/drive_photos/national_festivals/national_02.jpg',
      title: 'Independence Day Unity March & Pageant',
      sub: 'Children Proudly Waving National Tricolour Flags',
      category: 'national-festivals',
      badge: 'Independence Parade'
    },
    {
      id: 'national-3',
      src: '/assets/drive_photos/national_festivals/national_03.jpg',
      title: 'Kindergarten Convocation Cap Throw Ceremony',
      sub: 'Graduating with Flying Academic Colours',
      category: 'national-festivals',
      badge: 'Convocation Caps'
    },
    {
      id: 'national-4',
      src: '/assets/drive_photos/national_festivals/national_04.jpg',
      title: 'Convocation Diploma & Scroll Presentation',
      sub: 'Proud Graduates Receiving Milestone Honors',
      category: 'national-festivals',
      badge: 'Graduation Scroll'
    },
    {
      id: 'national-5',
      src: '/assets/drive_photos/national_festivals/national_05.jpg',
      title: 'Tribute to National Freedom Leaders',
      sub: 'Role Play Enactment of Historic Icons',
      category: 'national-festivals',
      badge: 'Patriot Enactment'
    },
    {
      id: 'national-6',
      src: '/assets/drive_photos/national_festivals/national_06.jpg',
      title: 'Tricolour Badge & Ribbon Making Workshop',
      sub: 'Patriotic Craft & Creative Handiwork',
      category: 'national-festivals',
      badge: 'National Craft'
    },
    {
      id: 'national-7',
      src: '/assets/drive_photos/national_festivals/national_07.jpg',
      title: 'National Integration Choir Harmony',
      sub: 'Singing Songs of Unity, Peace & Sisterhood',
      category: 'national-festivals',
      badge: 'Unity Choir'
    },
    {
      id: 'national-8',
      src: '/assets/drive_photos/national_festivals/national_08.jpg',
      title: 'Gandhi Jayanti Peace Circle & Charkha',
      sub: 'Practicing Non-Violence & Truth Values',
      category: 'national-festivals',
      badge: 'Peace Circle'
    },
    {
      id: 'national-9',
      src: '/assets/drive_photos/national_festivals/national_09.jpg',
      title: 'Children’s Day Carnival & Talent Showcase',
      sub: 'Celebrating the Unique Joy of Every Child',
      category: 'national-festivals',
      badge: 'Children\'s Carnival'
    },
    {
      id: 'national-10',
      src: '/assets/drive_photos/national_festivals/national_10.jpg',
      title: 'Constitution Day Preamble Reading Assembly',
      sub: 'Understanding Fundamental Civic Duties',
      category: 'national-festivals',
      badge: 'Civic Assembly'
    },
    {
      id: 'national-11',
      src: '/assets/drive_photos/national_festivals/national_11.jpg',
      title: 'Teachers’ Day Gratitude & Felicitation Gala',
      sub: 'Honoring Dedicated Educators with Flowers',
      category: 'national-festivals',
      badge: 'Educators Gala'
    },
    {
      id: 'national-12',
      src: '/assets/drive_photos/national_festivals/national_12.jpg',
      title: 'National Science Day Innovation Exhibition',
      sub: 'Commemorating CV Raman & Indian Science',
      category: 'national-festivals',
      badge: 'Science Day'
    },
    {
      id: 'fest-1',
      src: '/assets/drive_photos/tamil_new_year/fest_01.jpg',
      title: 'Tamil New Year Kolam & Floral Welcome',
      sub: 'Intricate Geometric Chalk & Flower Patterns',
      category: 'regional-festivals',
      badge: 'Floral Kolam'
    },
    {
      id: 'fest-2',
      src: '/assets/drive_photos/tamil_new_year/fest_02.jpg',
      title: 'Pongal Pot Boiling Over with Joy & Prosperity',
      sub: 'Traditional Earthen Pot & Sugarcane Gala',
      category: 'regional-festivals',
      badge: 'Pongal Gala'
    },
    {
      id: 'fest-3',
      src: '/assets/drive_photos/tamil_new_year/fest_03.jpg',
      title: 'Traditional Veshti & Pattu Pavadai Attire Day',
      sub: 'Children Celebrating Rich Dravidian Attire',
      category: 'regional-festivals',
      badge: 'Traditional Attire'
    },
    {
      id: 'fest-4',
      src: '/assets/drive_photos/tamil_new_year/fest_04.jpg',
      title: 'Kummi Folk Dance Circle & Rhythm Clapping',
      sub: 'Traditional Village Folk Songs & Rhythm',
      category: 'regional-festivals',
      badge: 'Kummi Dance'
    },
    {
      id: 'fest-5',
      src: '/assets/drive_photos/tamil_new_year/fest_05.jpg',
      title: 'Diwali Festival of Lights Lantern Crafting',
      sub: 'Spreading Warmth, Joy & Golden Glow',
      category: 'regional-festivals',
      badge: 'Diwali Lights'
    },
    {
      id: 'fest-6',
      src: '/assets/drive_photos/tamil_new_year/fest_06.jpg',
      title: 'Onam Floral Pookalam Carpet Design',
      sub: 'Petals of Marigold, Rose & Jasmine Art',
      category: 'regional-festivals',
      badge: 'Floral Pookalam'
    },
    {
      id: 'fest-7',
      src: '/assets/drive_photos/tamil_new_year/fest_07.jpg',
      title: 'Navratri Golu Traditional Doll Exhibition',
      sub: 'Cultural Storytelling Through Wooden Dolls',
      category: 'regional-festivals',
      badge: 'Golu Exhibition'
    },
    {
      id: 'fest-8',
      src: '/assets/drive_photos/tamil_new_year/fest_08.jpg',
      title: 'Holi Springtime Organic Herbal Splash',
      sub: 'Welcoming the Changing Seasons with Hues',
      category: 'regional-festivals',
      badge: 'Organic Hues'
    },
    {
      id: 'fest-9',
      src: '/assets/drive_photos/tamil_new_year/fest_09.jpg',
      title: 'Harvest Grain Threshing Educational Enactment',
      sub: 'Understanding Rural Agriculture Traditions',
      category: 'regional-festivals',
      badge: 'Harvest Lore'
    },
    {
      id: 'fest-10',
      src: '/assets/drive_photos/tamil_new_year/fest_10.jpg',
      title: 'Traditional Village Carnatic Rhythm Beats',
      sub: 'Parai & Mridangam Folk Percussion Demo',
      category: 'regional-festivals',
      badge: 'Folk Percussion'
    },
    {
      id: 'fest-11',
      src: '/assets/drive_photos/tamil_new_year/fest_11.jpg',
      title: 'Regional Feast & Banana Leaf Dining Etiquette',
      sub: 'Learning Wholesome Traditional Hospitality',
      category: 'regional-festivals',
      badge: 'Traditional Feast'
    },
    {
      id: 'fest-12',
      src: '/assets/drive_photos/tamil_new_year/fest_12.jpg',
      title: 'Regional Festival Concluding Folk Benediction',
      sub: 'Blessings of Abundance, Good Health & Peace',
      category: 'regional-festivals',
      badge: 'Folk Benediction'
    },
    {
      id: 'curriculum-1',
      src: '/assets/drive_photos/project_day/project_01.jpg',
      title: 'Project Day Working Hydraulic Robot Model',
      sub: 'Practical Application of Pascal’s Principle',
      category: 'curriculum-activities',
      badge: 'Hydraulic Robot'
    },
    {
      id: 'curriculum-2',
      src: '/assets/drive_photos/project_day/project_02.jpg',
      title: 'Solar System Celestial Orbit Project',
      sub: 'Scale Models of Planets, Moon Phases & Satellites',
      category: 'curriculum-activities',
      badge: 'Astronomy Project'
    },
    {
      id: 'curriculum-3',
      src: '/assets/drive_photos/project_day/project_03.jpg',
      title: 'Clean Green City & Solar Energy Grid Model',
      sub: 'Eco-Friendly Architecture & Renewables',
      category: 'curriculum-activities',
      badge: 'Green City'
    },
    {
      id: 'curriculum-4',
      src: '/assets/drive_photos/project_day/project_04.jpg',
      title: 'Human Circulatory & Respiratory System Model',
      sub: 'Interactive Biology Anatomy Demonstration',
      category: 'curriculum-activities',
      badge: 'Human Anatomy'
    },
    {
      id: 'curriculum-5',
      src: '/assets/drive_photos/project_day/project_05.jpg',
      title: 'Volcanic Eruption Chemistry Experiment Lab',
      sub: 'Acid-Base Reactions & Geological Insights',
      category: 'curriculum-activities',
      badge: 'Curiosity Lab'
    },
    {
      id: 'curriculum-6',
      src: '/assets/drive_photos/project_day/project_06.jpg',
      title: 'Plant Photosynthesis & Germination Showcase',
      sub: 'Real Seedling Growth under Managed Lights',
      category: 'curriculum-activities',
      badge: 'Botany Project'
    },
    {
      id: 'curriculum-7',
      src: '/assets/drive_photos/project_day/project_07.jpg',
      title: 'Montessori Golden Beads Decimal Mathematics',
      sub: 'Concrete Understanding of Units, Tens, Thousands',
      category: 'curriculum-activities',
      badge: 'Montessori Maths'
    },
    {
      id: 'curriculum-8',
      src: '/assets/drive_photos/project_day/project_08.jpg',
      title: 'Water Cycle Evaporation & Rain Generator',
      sub: 'Atmospheric Science Condensed Demonstration',
      category: 'curriculum-activities',
      badge: 'Weather Science'
    },
    {
      id: 'curriculum-9',
      src: '/assets/drive_photos/project_day/project_09.jpg',
      title: 'Magnetism & Electromagnetic Coil Demonstration',
      sub: 'Magnetic Levitation & North-South Polarities',
      category: 'curriculum-activities',
      badge: 'Physics Magnetism'
    },
    {
      id: 'curriculum-10',
      src: '/assets/drive_photos/project_day/project_10.jpg',
      title: 'Vedic Mathematics Speedy Computation Booth',
      sub: 'Mental Math Shortcuts & Geometric Formulas',
      category: 'curriculum-activities',
      badge: 'Vedic Math'
    },
    {
      id: 'curriculum-11',
      src: '/assets/drive_photos/project_day/project_11.jpg',
      title: 'Environmental Recycling & Composting Exhibit',
      sub: 'Zero-Waste Campus Best Practices',
      category: 'curriculum-activities',
      badge: 'Eco Recycling'
    },
    {
      id: 'curriculum-12',
      src: '/assets/drive_photos/project_day/project_12.jpg',
      title: 'Young Innovators Project Day Award Ceremony',
      sub: 'Judges Presenting Trophies to Science Creators',
      category: 'curriculum-activities',
      badge: 'Science Awards'
    },
    {
      id: 'comp-1',
      src: '/assets/drive_photos/competition/comp_01.jpg',
      title: 'State Level Karate Black Belt Championship',
      sub: 'Kata Forms, Focus & Martial Discipline',
      category: 'interschool-competitions',
      badge: 'Karate Championship'
    },
    {
      id: 'comp-2',
      src: '/assets/drive_photos/competition/comp_02.jpg',
      title: 'Interschool Olympiad Gold Medal Accolades',
      sub: 'Top Mathematical & Science Reasoning Laurels',
      category: 'interschool-competitions',
      badge: 'Olympiad Gold'
    },
    {
      id: 'comp-3',
      src: '/assets/drive_photos/competition/comp_03.jpg',
      title: 'City Interschool English Debate Laurels',
      sub: 'Articulate Arguments, Poise & Critical Thinking',
      category: 'interschool-competitions',
      badge: 'Debate Trophy'
    },
    {
      id: 'comp-4',
      src: '/assets/drive_photos/competition/comp_04.jpg',
      title: 'Inter-Academy Chess Master Tournament Final',
      sub: 'Checkmate Strategy & Analytical Calculation',
      category: 'interschool-competitions',
      badge: 'Chess Tournament'
    },
    {
      id: 'comp-5',
      src: '/assets/drive_photos/competition/comp_05.jpg',
      title: 'State Abacus & Mental Arithmetic Champions',
      sub: 'Lightning-Fast Calculation Record Holders',
      category: 'interschool-competitions',
      badge: 'Abacus Champion'
    },
    {
      id: 'comp-6',
      src: '/assets/drive_photos/competition/comp_06.jpg',
      title: 'Inter-School Classical Vocal Music Trophy',
      sub: 'Raga Precision & Melodic Choral Triumphs',
      category: 'interschool-competitions',
      badge: 'Vocal Laurels'
    },
    {
      id: 'comp-7',
      src: '/assets/drive_photos/competition/comp_07.jpg',
      title: 'Regional Drawing & Painting Competition First Prize',
      sub: 'Vibrant Watercolor Technique & Imagination',
      category: 'interschool-competitions',
      badge: 'Art First Prize'
    },
    {
      id: 'comp-8',
      src: '/assets/drive_photos/competition/comp_08.jpg',
      title: 'Inter-School Spelling Bee Championship Shield',
      sub: 'Advanced Etymology & Lexicon Accuracy',
      category: 'interschool-competitions',
      badge: 'Spelling Bee'
    },
    {
      id: 'comp-9',
      src: '/assets/drive_photos/competition/comp_09.jpg',
      title: 'District Science Model Innovation Shield',
      sub: 'Original Hardware Invention Accolades',
      category: 'interschool-competitions',
      badge: 'Innovation Shield'
    },
    {
      id: 'comp-10',
      src: '/assets/drive_photos/competition/comp_10.jpg',
      title: 'Junior Track Championship Relay Trophy',
      sub: 'Four-Leg Sprint Victory over 20+ Schools',
      category: 'interschool-competitions',
      badge: 'Relay Shield'
    },
    {
      id: 'comp-11',
      src: '/assets/drive_photos/competition/comp_11.jpg',
      title: 'Excellence Trophy Ceremony on Stage with Principal',
      sub: 'Honoring Outstanding Multi-Talented Champions',
      category: 'interschool-competitions',
      badge: 'Excellence Trophy'
    },
    {
      id: 'comp-12',
      src: '/assets/drive_photos/competition/comp_12.jpg',
      title: 'School Hall of Fame Wall of Accolades',
      sub: 'Decade of Championship Cups & Trophies',
      category: 'interschool-competitions',
      badge: 'Hall of Fame'
    },
    {
      id: 'daily-1',
      src: '/assets/drive_photos/activities/activity_01.jpg',
      title: 'Morning Assembly Pledge & Thought of the Day',
      sub: 'Instilling Core Virtues, Respect & Composure',
      category: 'daily-activities',
      badge: 'Morning Assembly'
    },
    {
      id: 'daily-2',
      src: '/assets/drive_photos/activities/activity_02.jpg',
      title: 'Montessori Tactile Cylinder Block Exploration',
      sub: 'Refining Dimension Discrimination & Grasp',
      category: 'daily-activities',
      badge: 'Montessori Cylinder'
    },
    {
      id: 'daily-3',
      src: '/assets/drive_photos/activities/activity_03.jpg',
      title: 'Creative Easel Painting & Finger Art Studio',
      sub: 'Expressive Imagination with Vibrant Pigments',
      category: 'daily-activities',
      badge: 'Easel Art'
    },
    {
      id: 'daily-4',
      src: '/assets/drive_photos/activities/activity_04.jpg',
      title: 'Storybook Circle & Teacher Read-Aloud Time',
      sub: 'Phonetic Vocabulary & Active Listening Skills',
      category: 'daily-activities',
      badge: 'Story Circle'
    },
    {
      id: 'daily-5',
      src: '/assets/drive_photos/activities/activity_05.jpg',
      title: 'Maths Manipulatives & Counting Beads Session',
      sub: 'Hands-on Concrete Numeracy Foundations',
      category: 'daily-activities',
      badge: 'Maths Counting'
    },
    {
      id: 'daily-6',
      src: '/assets/drive_photos/activities/activity_06.jpg',
      title: 'Nutritious Snack Break & Table Etiquette',
      sub: 'Sharing Meals & Practicing Mindful Eating',
      category: 'daily-activities',
      badge: 'Table Etiquette'
    },
    {
      id: 'daily-7',
      src: '/assets/drive_photos/activities/activity_07.jpg',
      title: 'Sensory Clay Sculpting & Dough Modeling',
      sub: 'Strengthening Fine Motor Hand Muscles',
      category: 'daily-activities',
      badge: 'Clay Modeling'
    },
    {
      id: 'daily-8',
      src: '/assets/drive_photos/activities/activity_08.jpg',
      title: 'Outdoor Sandpit & Castle Architecture Play',
      sub: 'Kinesthetic Fun, Physics & Shared Play',
      category: 'daily-activities',
      badge: 'Sandpit Play'
    },
    {
      id: 'daily-9',
      src: '/assets/drive_photos/activities/activity_09.jpg',
      title: 'Classroom Clean-Up & Responsibility Habit',
      sub: 'Montessori Care of the Classroom Environment',
      category: 'daily-activities',
      badge: 'Care of Environment'
    },
    {
      id: 'daily-10',
      src: '/assets/drive_photos/activities/activity_10.jpg',
      title: 'Expressive Rhyme & Action Song Session',
      sub: 'Rhythmic Movement & Phonological Cadence',
      category: 'daily-activities',
      badge: 'Rhyme Session'
    },
    {
      id: 'daily-11',
      src: '/assets/drive_photos/activities/activity_11.jpg',
      title: 'Peer Teamwork Puzzle Solving Circles',
      sub: 'Collaborative Problem Solving & Mutual Help',
      category: 'daily-activities',
      badge: 'Puzzle Circles'
    },
    {
      id: 'daily-12',
      src: '/assets/drive_photos/activities/activity_12.jpg',
      title: 'Peaceful Dismissal & Safe Van Boarding Queue',
      sub: 'Orderly Lines, Guard Escort & Safe Transit',
      category: 'daily-activities',
      badge: 'Safe Transit'
    },
    {
      id: 'pt-1',
      src: '/assets/drive_photos/pt_activities/pt_01.jpg',
      title: 'Morning Mass Calisthenics & Fitness Drill',
      sub: 'Full-Body Warmup, Deep Breathing & Stretching',
      category: 'pt-activities',
      badge: 'Mass PT Drill'
    },
    {
      id: 'pt-2',
      src: '/assets/drive_photos/pt_activities/pt_02.jpg',
      title: 'Children’s Yoga Asanas & Mindfulness Routine',
      sub: 'Vrikshasana & Pranayama for Inner Balance',
      category: 'pt-activities',
      badge: 'Yoga Mindfulness'
    },
    {
      id: 'pt-3',
      src: '/assets/drive_photos/pt_activities/pt_03.jpg',
      title: 'Agility Cone Footwork & Coordination Course',
      sub: 'Fast Reflexes, Lateral Shuffles & Balance',
      category: 'pt-activities',
      badge: 'Cone Drills'
    },
    {
      id: 'pt-4',
      src: '/assets/drive_photos/pt_activities/pt_04.jpg',
      title: 'Hula Hoop Precision & Rhythm Aerobics',
      sub: 'Core Muscle Strength & Motor Coordination',
      category: 'pt-activities',
      badge: 'Hula Hoop Drill'
    },
    {
      id: 'pt-5',
      src: '/assets/drive_photos/pt_activities/pt_05.jpg',
      title: 'Taekwondo & Karate Basic Defense Postures',
      sub: 'Self-Defense Stances, Blocks & High Kicks',
      category: 'pt-activities',
      badge: 'Self Defense'
    },
    {
      id: 'pt-6',
      src: '/assets/drive_photos/pt_activities/pt_06.jpg',
      title: 'Jump Rope Skipping & Cardio Endurance',
      sub: 'Cardiovascular Stamina & Rhythmic Timing',
      category: 'pt-activities',
      badge: 'Rope Skipping'
    },
    {
      id: 'pt-7',
      src: '/assets/drive_photos/pt_activities/pt_07.jpg',
      title: 'Medicine Ball Balance & Motor Control Play',
      sub: 'Postural Stability & Core Physical Tone',
      category: 'pt-activities',
      badge: 'Balance Ball'
    },
    {
      id: 'pt-8',
      src: '/assets/drive_photos/pt_activities/pt_08.jpg',
      title: 'Parachute Fun & Team Cooperative Wave Drill',
      sub: 'Upper Body Strength & Group Coordination',
      category: 'pt-activities',
      badge: 'Parachute Drill'
    },
    {
      id: 'pt-9',
      src: '/assets/drive_photos/pt_activities/pt_09.jpg',
      title: 'Sprint Acceleration Stride & Footwork Training',
      sub: 'Proper Running Posture & Speed Form',
      category: 'pt-activities',
      badge: 'Sprint Form'
    },
    {
      id: 'pt-10',
      src: '/assets/drive_photos/pt_activities/pt_10.jpg',
      title: 'Gymnastic Tumbling Mats & Forward Rolls',
      sub: 'Spinal Flexibility, Landing Safety & Grace',
      category: 'pt-activities',
      badge: 'Gymnastics'
    },
    {
      id: 'pt-11',
      src: '/assets/drive_photos/pt_activities/pt_11.jpg',
      title: 'Relay Baton Handoff Technique Practice',
      sub: 'Blind Passing, Timing & Track Discipline',
      category: 'pt-activities',
      badge: 'Baton Handoff'
    },
    {
      id: 'pt-12',
      src: '/assets/drive_photos/pt_activities/pt_12.jpg',
      title: 'Cool-Down Breathing Circle & Hydration',
      sub: 'Muscle Relaxation & Healthy Sports Habits',
      category: 'pt-activities',
      badge: 'Cool Down'
    },
    {
      id: 'dance-1',
      src: '/assets/drive_photos/dance_classes/dance_01.jpg',
      title: 'Classical Bharatanatyam Stage Prayer Dance',
      sub: 'Foundational Mudras, Temple Silk Attire & Expressive Natya',
      category: 'dance-classes',
      badge: 'Classical Dance'
    },
    {
      id: 'dance-2',
      src: '/assets/drive_photos/dance_classes/dance_02.jpg',
      title: 'Storybook Rhythm: Kindergarten Stage Dance',
      sub: 'Gleaming Stage Attire, Feathery Crown & Joyful Rhythms',
      category: 'dance-classes',
      badge: 'Storybook Dance'
    },
    {
      id: 'dance-3',
      src: '/assets/drive_photos/dance_classes/dance_03.jpg',
      title: 'Little Beats: Folk & Character Rhythm Performance',
      sub: 'Sparkling Satin Tunics, Headbands & Step Synchronization',
      category: 'dance-classes',
      badge: 'Character Dance'
    },
    {
      id: 'dance-4',
      src: '/assets/drive_photos/dance_classes/dance_04.jpg',
      title: 'Retro Broadway Duet: Partner Stage Routine',
      sub: 'Arm-in-Arm Harmony, Velvet Waistcoats & Festive Bowties',
      category: 'dance-classes',
      badge: 'Broadway Duet'
    },
    {
      id: 'dance-5',
      src: '/assets/drive_photos/dance_classes/dance_05.jpg',
      title: 'Sparkling Alphabet Rhyme: Kindergarten Stage Dance',
      sub: 'Joyous Footwork, Peach Gowns & Glittering Letter Motifs',
      category: 'dance-classes',
      badge: 'Rhyme Dance'
    },
    {
      id: 'dance-6',
      src: '/assets/drive_photos/dance_classes/dance_06.jpg',
      title: 'Jazz Fedora Revue: Retro Broadway Stage Dance',
      sub: 'Synchronized Hats, Floral Kurti Duos & Stage Beats',
      category: 'dance-classes',
      badge: 'Retro Broadway'
    },
    {
      id: 'dance-7',
      src: '/assets/drive_photos/dance_classes/dance_07.jpg',
      title: 'Synchronized Swing: Theatrical Partner Dance',
      sub: 'Dapper Fedoras, Flowing Dupattas & Confident Steps',
      category: 'dance-classes',
      badge: 'Swing Stage Dance'
    },
    {
      id: 'dance-8',
      src: '/assets/drive_photos/dance_classes/dance_08.jpg',
      title: 'Golden Radiance: Fusion Mudra Dance Solo',
      sub: 'Gleaming Shimmer Costume, Graceful Mudras & Expressive Eye Work',
      category: 'dance-classes',
      badge: 'Fusion Mudra'
    },
    {
      id: 'dance-9',
      src: '/assets/drive_photos/dance_classes/dance_09.jpg',
      title: 'Golden Shimmer Ensemble: Grand Troupe Formation',
      sub: 'Coordinated Stage Presence, Gleaming Outfits & Team Spirit',
      category: 'dance-classes',
      badge: 'Troupe Formation'
    },
    {
      id: 'dance-10',
      src: '/assets/drive_photos/dance_classes/dance_10.jpg',
      title: 'Dandiya Raas: Traditional Folk Stick Dance',
      sub: 'Embroidered Ghagra Choli, Colorful Dandiya Sticks & Festive Beats',
      category: 'dance-classes',
      badge: 'Dandiya Raas'
    },
    {
      id: 'dance-11',
      src: '/assets/drive_photos/dance_classes/dance_11.jpg',
      title: 'Festive Garba Rhythms: Traditional Stick Coordination',
      sub: 'Vibrant Dupattas, Joyous Twirls & Heritage Percussion Timing',
      category: 'dance-classes',
      badge: 'Garba Folk'
    },
    {
      id: 'dance-12',
      src: '/assets/drive_photos/dance_classes/dance_12.jpg',
      title: 'High-Energy Hip-Hop Crew: Contemporary Stage Beat',
      sub: 'Sleek Black Outfits, Sequin Waistcoats & Dynamic Formations',
      category: 'dance-classes',
      badge: 'Hip-Hop Beat'
    },
    {
      id: 'dental-1',
      src: '/assets/drive_photos/dental_camp/dental_01.jpg',
      title: 'Pediatric Oral Health Clinical Examination',
      sub: 'Dentist Conducting Gentle Diagnostic Checkup with Teacher Assisting',
      category: 'dental-camp',
      badge: 'Oral Screening'
    },
    {
      id: 'dental-2',
      src: '/assets/drive_photos/dental_camp/dental_02.jpg',
      title: 'Dental Health Report & Growth Charting Consultation',
      sub: 'Recording Student Dental Profiles & Preventative Health Advice',
      category: 'dental-camp',
      badge: 'Health Charting'
    },
    {
      id: 'dental-3',
      src: '/assets/drive_photos/dental_camp/dental_03.jpg',
      title: 'Pediatric Dental Hygiene Evaluation & Guidance',
      sub: 'Interactive Discussion on Brushing Techniques & Healthy Habits',
      category: 'dental-camp',
      badge: 'Hygiene Guidance'
    },
    {
      id: 'dental-4',
      src: '/assets/drive_photos/dental_camp/dental_04.jpg',
      title: 'Detailed Tooth & Gum Diagnostic Screening',
      sub: 'Gentle Clinical Inspection Using Modern Illuminated Tools',
      category: 'dental-camp',
      badge: 'Diagnostic Check'
    },
    {
      id: 'dental-5',
      src: '/assets/drive_photos/dental_camp/dental_05.jpg',
      title: 'Encouraging Confident Smiles & Doctor Interaction',
      sub: 'Fostering a Friendly, Fear-Free Healthcare Experience for Children',
      category: 'dental-camp',
      badge: 'Healthy Smiles'
    },
    {
      id: 'ptm-1',
      src: '/assets/drive_photos/ptm/ptm_01.jpg',
      title: 'Comprehensive Student Assessment Record Review',
      sub: 'Teachers & Parents Reviewing Individual Observation Portfolios',
      category: 'ptm',
      badge: 'Assessment Record'
    },
    {
      id: 'ptm-2',
      src: '/assets/drive_photos/ptm/ptm_02.jpg',
      title: 'Personalized Academic Guidance & Progress Dialogue',
      sub: 'One-on-One Collaborative Consultation on Student Development',
      category: 'ptm',
      badge: 'One-on-One Dialogue'
    },
    {
      id: 'ptm-3',
      src: '/assets/drive_photos/ptm/ptm_03.jpg',
      title: 'Parent-Teacher-Child Family Synergy Conference',
      sub: 'Fostering Supportive Home-School Learning Continuity',
      category: 'ptm',
      badge: 'Family Synergy'
    },
    {
      id: 'ptm-4',
      src: '/assets/drive_photos/ptm/ptm_04.jpg',
      title: 'Leadership & Academic Coordinator Interaction',
      sub: 'Senior Academic Leadership Engaging in Constructive Family Dialogues',
      category: 'ptm',
      badge: 'Leadership Dialogue'
    },
    {
      id: 'ptm-5',
      src: '/assets/drive_photos/ptm/ptm_05.jpg',
      title: 'Principal Open House & Student Portfolio Review',
      sub: 'Direct Interaction with Academy Principal on Learning Outcomes',
      category: 'ptm',
      badge: 'Principal Open House'
    },
    {
      id: 'ptm-6',
      src: '/assets/drive_photos/ptm/ptm_06.jpg',
      title: 'Warm & Encouraging Early Childhood Evaluation',
      sub: 'Celebrating Emotional, Social & Creative Milestones',
      category: 'ptm',
      badge: 'Early Milestones'
    },
    {
      id: 'ptm-7',
      src: '/assets/drive_photos/ptm/ptm_07.jpg',
      title: 'Curriculum Workbook & Activity Reflection',
      sub: 'Reviewing Child Artwork, Handwriting & Experiential Projects',
      category: 'ptm',
      badge: 'Activity Reflection'
    },
    {
      id: 'ptm-8',
      src: '/assets/drive_photos/ptm/ptm_08.jpg',
      title: 'Observation Dossier & Skill Progression Discussion',
      sub: 'Sharing Structured Teacher Feedback & Learning Strengths',
      category: 'ptm',
      badge: 'Observation Dossier'
    },
    {
      id: 'ptm-9',
      src: '/assets/drive_photos/ptm/ptm_09.jpg',
      title: 'Constructive Feedback & Goal Alignment Session',
      sub: 'Setting Future Learning Objectives in Close Partnership with Parents',
      category: 'ptm',
      badge: 'Goal Alignment'
    },
    {
      id: 'ptm-10',
      src: '/assets/drive_photos/ptm/ptm_10.jpg',
      title: 'Holistic Growth Review & Behavioral Insights',
      sub: 'In-Depth Dialogue on Classroom Camaraderie & Communication',
      category: 'ptm',
      badge: 'Holistic Growth'
    },
    {
      id: 'ptm-11',
      src: '/assets/drive_photos/ptm/ptm_11.jpg',
      title: 'Multi-Teacher Assessment Desk & Subject Feedback',
      sub: 'Subject Teachers Providing Detailed Performance Evaluation Sheets',
      category: 'ptm',
      badge: 'Subject Evaluation'
    },
    {
      id: 'ptm-12',
      src: '/assets/drive_photos/ptm/ptm_12.jpg',
      title: 'Academy Main Hall PTM Assembly & Consultation Forum',
      sub: 'Vibrant Community Participation Across Dedicated Conference Desks',
      category: 'ptm',
      badge: 'PTM Assembly'
    }
  ];

  // Filter items according to the active category
  const filteredItems = activeFilter === 'all'
    ? allGalleryItems
    : allGalleryItems.filter(item => item.category === activeFilter);

  // Active category object
  const activeCategoryObj = categories.find(c => c.id === activeFilter) || null;
  const activeCategoryIndex = categories.findIndex(c => c.id === activeFilter);

  const handlePrevCategory = () => {
    if (activeCategoryIndex > 0) {
      const prevId = categories[activeCategoryIndex - 1].id;
      setActiveFilter(prevId);
      scrollToActiveTab(prevId);
    }
  };

  const handleNextCategory = () => {
    if (activeCategoryIndex < categories.length - 1) {
      const nextId = categories[activeCategoryIndex + 1].id;
      setActiveFilter(nextId);
      scrollToActiveTab(nextId);
    }
  };

  const scrollToActiveTab = (catId) => {
    if (carouselRef.current) {
      const targetEl = carouselRef.current.querySelector(`[data-cat-card="${catId}"]`);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  const scrollDeck = (direction) => {
    if (carouselRef.current) {
      const offset = direction === 'left' ? -320 : 320;
      carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  // Lightbox handlers
  const currentPhoto = selectedPhotoIndex !== null ? filteredItems[selectedPhotoIndex] : null;

  const handlePrevPhoto = () => {
    if (selectedPhotoIndex > 0) {
      setSelectedPhotoIndex(selectedPhotoIndex - 1);
    } else {
      setSelectedPhotoIndex(filteredItems.length - 1);
    }
  };

  const handleNextPhoto = () => {
    if (selectedPhotoIndex < filteredItems.length - 1) {
      setSelectedPhotoIndex(selectedPhotoIndex + 1);
    } else {
      setSelectedPhotoIndex(0);
    }
  };

  return (
    <div className="gallerypage-page bg-[#FAF8F4] min-h-screen">
      {/* Lightbox Modal for Fullscreen Photo Viewing with Navigation */}
      <Lightbox
        photo={currentPhoto}
        onClose={() => setSelectedPhotoIndex(null)}
        onPrev={filteredItems.length > 1 ? handlePrevPhoto : null}
        onNext={filteredItems.length > 1 ? handleNextPhoto : null}
        currentIndex={selectedPhotoIndex}
        totalCount={filteredItems.length}
      />

      {/* Prestige Grand Banner */}
      <section className="reveal-on-scroll py-16 sm:py-20 anim-aurora-bg text-white relative overflow-hidden border-b border-purple-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#F3D98B] bg-gradient-to-r from-amber-500/20 via-purple-900/50 to-transparent px-4 py-1.5 rounded-full border border-amber-400/30 mb-4 shadow-lg backdrop-blur-md">
                <i className="fa-solid fa-crown text-[#D4A72C]"></i>
                Official Royal Photographic Archive • {allGalleryItems.length} Moments
              </div>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Ryans Academy <br />
                <span className="text-shimmer-gold font-serif italic text-3xl sm:text-5xl lg:text-6xl">
                  Grand Visual Archive
                </span>
              </h1>
              <p className="text-purple-200 text-sm sm:text-base mt-4 leading-relaxed font-medium max-w-2xl">
                Experience {categories.length} masterfully curated chapters of academic excellence, campus life, athletic triumphs, and vibrant cultural milestones, preserved with 100% authentic, non-repeating photographs.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-purple-200 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/15 shadow-sm">
                <Link to="/" className="hover:text-white transition">Home</Link>
                <span className="text-purple-400">/</span>
                <span className="text-[#F3D98B] font-bold">{categories.length} Collections</span>
              </div>
              <button
                onClick={() => openModal('Play Group', 'visit')}
                className="btn-gold text-xs py-2.5 px-5 shadow-xl hover:scale-105 transition"
              >
                <i className="fa-solid fa-calendar-check mr-1.5"></i> Visit Campus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Exhibition Deck Section */}
      <section className="py-12 sm:py-16 bg-[#FAF8F4] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header with Royal Flourish */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#D4A72C] bg-white px-3.5 py-1 rounded-full border border-amber-200/80 shadow-sm mb-2">
                <i className="fa-solid fa-gem text-amber-500"></i> Curated Chapters 01 to {categories.length}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B1F6F] tracking-tight">
                Select an Exhibition Collection
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 font-medium mt-1">
                Click any chapter card below to tour its authentic photographs. Every image is verified and appears only once.
              </p>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-2 self-end">
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 shadow-sm ${
                  activeFilter === 'all'
                    ? 'bg-[#4B1F6F] text-white ring-2 ring-[#D4A72C] shadow-lg shadow-purple-900/25'
                    : 'bg-white text-gray-700 border border-purple-200/80 hover:bg-purple-50'
                }`}
              >
                <i className="fa-solid fa-layer-group text-[#D4A72C]"></i> All {allGalleryItems.length} Photos
              </button>
              <button
                type="button"
                onClick={() => scrollDeck('left')}
                className="w-9 h-9 rounded-xl bg-white border border-purple-200 text-[#4B1F6F] hover:bg-[#4B1F6F] hover:text-white transition flex items-center justify-center shadow-sm"
                aria-label="Scroll Left"
              >
                <i className="fa-solid fa-chevron-left text-xs"></i>
              </button>
              <button
                type="button"
                onClick={() => scrollDeck('right')}
                className="w-9 h-9 rounded-xl bg-white border border-purple-200 text-[#4B1F6F] hover:bg-[#4B1F6F] hover:text-white transition flex items-center justify-center shadow-sm"
                aria-label="Scroll Right"
              >
                <i className="fa-solid fa-chevron-right text-xs"></i>
              </button>
            </div>
          </div>

          {/* Luxury Horizontal Chapter Deck (Visual Photo Cards for all 11 Topics) */}
          <div
            ref={carouselRef}
            className="flex items-stretch gap-3.5 sm:gap-4 overflow-x-auto pb-4 pt-1 snap-x no-scrollbar select-none scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((cat) => {
              const isActive = activeFilter === cat.id;
              const count = allGalleryItems.filter(item => item.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  data-cat-card={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveFilter(cat.id);
                    scrollToActiveTab(cat.id);
                  }}
                  className={`group relative flex-shrink-0 w-60 sm:w-64 h-36 sm:h-40 rounded-3xl overflow-hidden p-4 flex flex-col justify-between text-left transition-all duration-300 snap-start cursor-pointer border-2 ${
                    isActive
                      ? 'border-[#D4A72C] ring-4 ring-amber-400/30 scale-[1.02] shadow-2xl shadow-purple-950/40 -translate-y-1'
                      : 'border-white/80 hover:border-purple-300 hover:-translate-y-1 shadow-md hover:shadow-xl'
                  }`}
                >
                  {/* Photo Thumbnail Background */}
                  <img
                    src={cat.cover}
                    alt={cat.label}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient Glass Overlay with Royal Tint */}
                  <div className={`absolute inset-0 transition-opacity duration-300 ${
                    isActive
                      ? 'bg-gradient-to-t from-[#1C062D]/95 via-[#2E0B4A]/80 to-black/40'
                      : 'bg-gradient-to-t from-[#160424]/90 via-[#1C062D]/70 to-black/35 group-hover:opacity-90'
                  }`} />

                  {/* Top Row: Chapter Numeral + Icon Pill */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg shadow-sm ${
                      isActive
                        ? 'bg-[#D4A72C] text-[#241300]'
                        : 'bg-white/20 backdrop-blur-md text-white border border-white/20 group-hover:bg-[#D4A72C] group-hover:text-[#241300]'
                    }`}>
                      Chapter {cat.seq}
                    </span>
                    <span className={`w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center text-xs transition-colors ${
                      isActive
                        ? 'bg-[#D4A72C] text-[#1E0730] shadow-md shadow-amber-500/40'
                        : 'bg-black/40 text-[#F3D98B] border border-white/15'
                    }`}>
                      <i className={`fa-solid ${cat.icon}`}></i>
                    </span>
                  </div>

                  {/* Bottom Row: Title + Count Badge */}
                  <div className="relative z-10">
                    <h4 className="text-sm font-extrabold text-white leading-tight drop-shadow line-clamp-1">
                      {cat.label}
                    </h4>
                    <div className="flex items-center justify-between mt-1 pt-1 border-t border-white/15 text-[10px] text-purple-200">
                      <span className="flex items-center gap-1 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4A72C] animate-pulse"></span>
                        {cat.badge}
                      </span>
                      <span className="font-extrabold bg-white/20 px-2 py-0.5 rounded-full text-white">
                        {count} Photos
                      </span>
                    </div>
                  </div>

                  {/* Active Golden Glow Accent Bar */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-300 via-[#D4A72C] to-amber-500 z-20"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Chapter Spotlight Stage Banner */}
          {activeCategoryObj && (
            <div className="mt-8 bg-gradient-to-br from-[#2D0D4B] via-[#43166D] to-[#1E0633] text-white rounded-3xl p-6 sm:p-9 shadow-2xl border-2 border-amber-300/30 relative overflow-hidden">
              {/* Luxury Ambient Orbs */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4A72C]/15 rounded-full filter blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl pointer-events-none"></div>

              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
                <div className="space-y-2.5 max-w-3xl">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="bg-[#D4A72C] text-[#241300] text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow">
                      Chapter {activeCategoryObj.seq} of {categories.length}
                    </span>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#F3D98B] bg-white/10 px-3 py-1 rounded-full border border-white/15">
                      {activeCategoryObj.badge}
                    </span>
                    <span className="text-xs font-semibold text-purple-200 hidden sm:inline">
                      • {allGalleryItems.filter(item => item.category === activeCategoryObj.id).length} Verified HD Photos
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
                    <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D4A72C] to-[#E67E22] text-[#1E0730] flex items-center justify-center text-xl shadow-lg shadow-amber-500/20 flex-shrink-0">
                      <i className={`fa-solid ${activeCategoryObj.icon}`}></i>
                    </span>
                    <span>{activeCategoryObj.label}</span>
                  </h3>

                  <p className="text-xs sm:text-base text-purple-100 font-medium leading-relaxed max-w-2xl">
                    {activeCategoryObj.desc}
                  </p>
                </div>

                {/* Chapter Navigation Controls */}
                <div className="flex items-center gap-2.5 flex-shrink-0 self-stretch lg:self-auto justify-between lg:justify-end border-t lg:border-t-0 pt-4 lg:pt-0 border-white/15">
                  <button
                    onClick={handlePrevCategory}
                    disabled={activeCategoryIndex <= 0}
                    className={`px-4 py-2.5 rounded-xl text-xs font-extrabold flex items-center gap-2 transition-all ${
                      activeCategoryIndex > 0
                        ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:scale-105 shadow-md'
                        : 'bg-white/5 text-white/30 border border-white/5 cursor-not-allowed opacity-50'
                    }`}
                  >
                    <i className="fa-solid fa-chevron-left text-[10px]"></i> Previous
                  </button>

                  <button
                    onClick={handleNextCategory}
                    disabled={activeCategoryIndex >= categories.length - 1}
                    className={`px-5 py-2.5 rounded-xl text-xs font-black flex items-center gap-2 transition-all shadow-xl ${
                      activeCategoryIndex < categories.length - 1
                        ? 'bg-gradient-to-r from-[#D4A72C] to-amber-400 hover:from-amber-400 hover:to-[#D4A72C] text-[#241300] hover:scale-105'
                        : 'bg-white/5 text-white/30 border border-white/5 cursor-not-allowed opacity-50'
                    }`}
                  >
                    Next Chapter <i className="fa-solid fa-chevron-right text-[10px]"></i>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Quick Counter & Instructions Bar */}
          <div className="flex items-center justify-between mt-10 mb-6 pb-3 border-b border-purple-200/70">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4A72C] animate-ping"></span>
              <span className="text-xs font-black text-[#4B1F6F] uppercase tracking-wider">
                Exhibiting {filteredItems.length} Photographs {activeCategoryObj ? `in ${activeCategoryObj.label}` : 'Across All Collections'}
              </span>
            </div>
            <span className="text-xs text-gray-500 font-semibold hidden sm:inline">
              <i className="fa-solid fa-expand text-[#D4A72C] mr-1"></i> Click any photo for Fullscreen HD Lightbox with Arrow Navigation
            </span>
          </div>

          {/* Photographic Grid - Luxury Presentation */}
          <div
            key={activeFilter}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 animate-fade-in"
            id="gallery-grid"
          >
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                style={{ animationDelay: `${(index % 12) * 35}ms` }}
                className="gallery-item h-64 sm:h-72 rounded-3xl overflow-hidden shadow-lg group relative bg-[#1c0a2c] cursor-pointer border-2 border-white hover:border-[#D4A72C] hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 card-shine-effect"
                onClick={() => setSelectedPhotoIndex(index)}
              >
                {/* Ambient Blur Backdrop */}
                <img
                  src={item.src}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover filter blur-md scale-110 opacity-30 pointer-events-none"
                />

                {/* Main Image */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Floating Badge */}
                <span className="absolute top-3 left-3 bg-[#3B1358]/90 backdrop-blur-md text-[#F3D98B] text-[9.5px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-amber-300/40 z-10 shadow-md">
                  {item.badge}
                </span>

                {/* Fullscreen Expand Button on Hover */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/95 text-[#4B1F6F] flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg z-10 hover:scale-110">
                  <i className="fa-solid fa-expand"></i>
                </div>

                {/* Gallery Overlay Content */}
                <div className="gallery-overlay absolute inset-0 z-10 flex items-end p-4 text-white bg-gradient-to-t from-black/90 via-black/35 to-transparent">
                  <div>
                    <p className="font-extrabold text-xs sm:text-[13px] text-white leading-snug drop-shadow-sm line-clamp-1">
                      {item.title}
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-purple-200 font-medium line-clamp-1 mt-0.5">
                      {item.sub}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Campus Life In Person Banner */}
          <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-purple-100/70 via-white to-amber-100/60 border border-purple-200/90 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5 text-center md:text-left flex-col md:flex-row">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4B1F6F] to-[#6B2E9C] text-[#F3D98B] flex items-center justify-center text-2xl shadow-xl shadow-purple-900/25 flex-shrink-0 anim-ring-gold">
                <i className="fa-solid fa-camera-retro"></i>
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-extrabold text-[#4B1F6F]">
                  Experience Ryans Academy In Person
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 font-medium mt-1">
                  Tour our creative studios, Montessori activity labs, and green playgrounds with our admissions faculty.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-wrap justify-center flex-shrink-0">
              <button
                type="button"
                onClick={() => openModal('Play Group', 'visit')}
                className="btn-gold text-xs sm:text-sm py-3 px-6 shadow-lg hover:scale-105 transition-all"
              >
                <i className="fa-solid fa-calendar-check mr-1.5"></i>
                Schedule Campus Tour
              </button>
              <button
                type="button"
                onClick={() => openModal('Play Group', 'enquiry')}
                className="btn-purple text-xs sm:text-sm py-3 px-6 shadow-lg hover:scale-105 transition-all"
              >
                <i className="fa-solid fa-paper-plane mr-1.5"></i>
                Admissions Enquiry
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
