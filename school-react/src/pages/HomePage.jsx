import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import AnimatedCounter from '../components/AnimatedCounter';
import Lightbox from '../components/Lightbox';

export default function HomePage() {
  const { openModal } = useModal();
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [activeEventTab, setActiveEventTab] = useState('annual');
  const [fullGalleryModalCategory, setFullGalleryModalCategory] = useState(null);
  const [isInlineExpanded, setIsInlineExpanded] = useState(false);
  const [inlineVisibleLimit, setInlineVisibleLimit] = useState(16);
  const [activeSparkTab, setActiveSparkTab] = useState('spark-creative');
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [parentMilestoneStage, setParentMilestoneStage] = useState('prekg');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Hero Centerpiece Showcase: Dynamic 1.5-second auto-cycle photos
  const heroShowcasePhotos = [
    {
      src: '/assets/drive_photos/annual_day/annual_15.jpg',
      title: 'RYANOVA Stage Celebration',
      badge: 'PREMIUM LEARNING',
      sub: 'Joyful Childhood Environment'
    },
    {
      src: '/assets/drive_photos/sports_day/sports_15.jpg',
      title: 'Annual Sports Athletics & Agility',
      badge: 'SPORTS & VITALITY',
      sub: 'Fitness & Teamwork Spirit'
    },
    {
      src: '/assets/drive_photos/field_trip/field_15.jpg',
      title: 'Supervised Real-World Field Trips',
      badge: 'EXPERIENTIAL DISCOVERY',
      sub: 'Nature & Science Explorations'
    },
    {
      src: '/assets/drive_photos/project_day/project_15.jpg',
      title: 'Young Innovators Project Day Expo',
      badge: 'STEM & CURIOSITY',
      sub: 'Hands-on Scientific Models'
    },
    {
      src: '/assets/drive_photos/tamil_new_year/fest_15.jpg',
      title: 'Regional Cultural & Heritage Galas',
      badge: 'CULTURAL HERITAGE',
      sub: 'Traditional Values & Attire'
    },
    {
      src: '/assets/drive_photos/excellence_award/award_01.jpg',
      title: 'Academic & Extracurricular Laurels',
      badge: 'EXCELLENCE AWARDS',
      sub: 'Confidence & Character'
    },
    {
      src: '/assets/drive_photos/competition/comp_15.jpg',
      title: 'Interschool Trophy Accolades',
      badge: 'CHAMPIONSHIP PRIDE',
      sub: 'State-Level Recognition'
    },
    {
      src: '/asssssetss_opt/1. School Infrastructure/infra_campus_front.jpg',
      title: 'State-of-the-Art Academy Campus',
      badge: 'CAMPUS ARCHITECTURE',
      sub: 'Safe & Vibrant Facilities'
    }
  ];

  const [heroPhotoIndex, setHeroPhotoIndex] = useState(0);
  const [isHeroPaused, setIsHeroPaused] = useState(false);

  // Multi-style transition animation classes for dynamic 2-second hero cycling
  const heroTransitionStyles = [
    'hero-anim-zoom-glow',
    'hero-anim-slide-pan',
    'hero-anim-rotate-3d',
    'hero-anim-clip-wipe',
    'hero-anim-depth-float'
  ];

  // 2-second dynamic photo cycling effect with rotating animation styles
  useEffect(() => {
    if (isHeroPaused) return;
    const interval = setInterval(() => {
      setHeroPhotoIndex((prev) => (prev + 1) % heroShowcasePhotos.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isHeroPaused, heroShowcasePhotos.length]);

  const toggleVideoPlay = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        // Start playback with sound for positive vibe background music
        videoRef.current.muted = false;
        setIsMuted(false);
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsVideoPlaying(true);
            })
            .catch(() => {
              // Mobile browser safety: retry muted on autoplay policy restrictions
              if (videoRef.current) {
                videoRef.current.muted = true;
                setIsMuted(true);
                videoRef.current.play()
                  .then(() => setIsVideoPlaying(true))
                  .catch(() => {});
              }
            });
        }
      } else {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  const toggleVideoMute = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const toggleVideoFullscreen = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitEnterFullscreen) {
        // iOS Safari native WebKit fullscreen
        videoRef.current.webkitEnterFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      }
    }
  };

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal-on-scroll');
    
    // Immediate visibility check for above-the-fold or mobile viewport
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 150) {
        el.classList.add('is-visible');
      }
    });

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

  // Event Categories Data (100% Unique Authentic Event Photos)
  const eventCategories = {
    annual: {
      id: 'annual',
      title: 'RYANOVA Annual Cultural Gala',
      badge: 'Performing Arts',
      icon: 'fa-masks-theater',
      count: '66 Photos',
      desc: 'Grand stage performances, classical & western dance ensembles, theatrical musical pantomimes, and 100% student stage inclusion.',
      cards: [
        {
          src: '/asssssetss_opt/annual_day/annual_day_15.jpg',
          title: 'RYANOVA Stage Extravaganza',
          category: 'Annual Day Gala',
          tag: '100% Stage Participation'
        },
        {
          src: '/asssssetss_opt/annual_day/annual_day_20.jpg',
          title: 'Theatrical Costumes & Drama',
          category: 'Annual Day Drama',
          tag: 'Creative Character Play'
        },
        {
          src: '/asssssetss_opt/annual_day/annual_day_25.jpg',
          title: 'Choral Harmony & Instrumental Melody',
          category: 'Annual Day Music',
          tag: 'Vocal Rhythm & Pitch'
        },
        {
          src: '/asssssetss_opt/annual_day/annual_day_30.jpg',
          title: 'Rhythmic Folk & Western Ensemble',
          category: 'Annual Day Dance',
          tag: 'Grace & Synchronization'
        }
      ]
    },
    convocation: {
      id: 'convocation',
      title: 'Convocation & Little Scholars Graduation',
      badge: 'Academic Milestones',
      icon: 'fa-graduation-cap',
      count: '23 Photos',
      desc: 'Celebrating early childhood graduations as confident Senior KG scholars wear ceremonial gowns and receive their diplomas.',
      cards: [
        {
          src: '/asssssetss_opt/convocation/convocation_05.jpg',
          title: 'Ceremonial Robes & Graduation Mortarboards',
          category: 'Convocation Ceremony',
          tag: 'Senior KG Milestone'
        },
        {
          src: '/asssssetss_opt/convocation/convocation_08.jpg',
          title: 'Academic Diploma & Scroll Awarding',
          category: 'Convocation Ceremony',
          tag: 'Excellence Recognition'
        },
        {
          src: '/asssssetss_opt/convocation/convocation_12.jpg',
          title: 'Proud Scholar Tributes on Grand Stage',
          category: 'Convocation Ceremony',
          tag: 'Speech & Confidence'
        },
        {
          src: '/asssssetss_opt/convocation/convocation_16.jpg',
          title: 'Future Ready: Stepping Forward to CBSE Grade 1',
          category: 'Convocation Ceremony',
          tag: 'Primary Transition'
        }
      ]
    },
    colours: {
      id: 'colours',
      title: 'Colours Day Sensory Kindergarten Celebrations',
      badge: 'Sensory Wonder',
      icon: 'fa-palette',
      count: '48 Photos',
      desc: 'Joyous sensory discovery days where children explore colors, finger-painting, themed costumes, and creative tactile arts.',
      cards: [
        {
          src: '/asssssetss_opt/colours_day/colours_day_10.jpg',
          title: 'Vibrant Yellow Day Sunshine Celebrations',
          category: 'Colours Day Carnival',
          tag: 'Sensory Exploration'
        },
        {
          src: '/asssssetss_opt/colours_day/colours_day_15.jpg',
          title: 'Tactile Red & Blue Discovery Stations',
          category: 'Colours Day Craft',
          tag: 'Fine Motor Tactile'
        },
        {
          src: '/asssssetss_opt/colours_day/colours_day_20.jpg',
          title: 'Cheerful Kindergarten Costumes & Props',
          category: 'Colours Day Dress',
          tag: 'Social Play & Joy'
        },
        {
          src: '/asssssetss_opt/colours_day/colours_day_25.jpg',
          title: 'Rainbow Collaborative Floor Murals',
          category: 'Colours Day Art',
          tag: 'Expressive Painting'
        }
      ]
    },
    competition: {
      id: 'competition',
      title: 'Interschool Triumphs & Velocity Sports Championships',
      badge: 'Championship Pride',
      icon: 'fa-trophy',
      count: '31 Photos',
      desc: 'Ryans students bringing home gold medals, overall championship trophies, karate podiums, and track & field achievements.',
      cards: [
        {
          src: '/asssssetss_opt/competition/competition_10.jpg',
          title: 'Overall Interschool Championship Cup',
          category: 'Interschool Triumphs',
          tag: '1st Place Victories'
        },
        {
          src: '/asssssetss_opt/competition/competition_15.jpg',
          title: 'Gold Medal Sprint Athletics & Relays',
          category: 'Velocity Sports Fest',
          tag: 'Speed & Endurance'
        },
        {
          src: '/asssssetss_opt/competition/competition_20.jpg',
          title: 'State Level Martial Arts & Karate Honors',
          category: 'Co-Curricular Arena',
          tag: 'Discipline & Agility'
        },
        {
          src: '/asssssetss_opt/competition/competition_25.jpg',
          title: 'Academic Olympiad & Public Speaking Trophies',
          category: 'Cognitive Arenas',
          tag: 'Rhetoric & Logic'
        }
      ]
    }
  };

  // Full Phototheque Collections for each Event category (All 168 Photos: 66, 23, 48, 31)
  const categoryFullCollections = {
    annual: Array.from({ length: 66 }, (_, i) => {
      const num = String(i + 1).padStart(2, '0');
      return {
        src: `/asssssetss_opt/annual_day/annual_day_${num}.jpg`,
        title: `RYANOVA Annual Gala Celebration • Moment #${i + 1}`,
        category: 'Annual Day Gala',
        tag: 'Grand Stage',
        index: i + 1
      };
    }),
    convocation: Array.from({ length: 23 }, (_, i) => {
      const num = String(i + 1).padStart(2, '0');
      return {
        src: `/asssssetss_opt/convocation/convocation_${num}.jpg`,
        title: `Senior KG Convocation Milestone • Moment #${i + 1}`,
        category: 'Convocation Ceremony',
        tag: 'Academic Milestone',
        index: i + 1
      };
    }),
    colours: Array.from({ length: 48 }, (_, i) => {
      const num = String(i + 1).padStart(2, '0');
      return {
        src: `/asssssetss_opt/colours_day/colours_day_${num}.jpg`,
        title: `Colours Day Kindergarten Fest • Moment #${i + 1}`,
        category: 'Colours Day Carnival',
        tag: 'Sensory Art & Play',
        index: i + 1
      };
    }),
    competition: Array.from({ length: 31 }, (_, i) => {
      const num = String(i + 1).padStart(2, '0');
      return {
        src: `/asssssetss_opt/competition/competition_${num}.jpg`,
        title: `Interschool Championship Victory • Moment #${i + 1}`,
        category: 'Interschool Triumphs',
        tag: 'Championship Pride',
        index: i + 1
      };
    })
  };

  // Special Parent-Focused Trust Pillars (The 5 Golden Pledges to Parents)
  const parentTrustPillars = [
    {
      icon: 'fa-shield-halved',
      badge: 'Zero-Blindspot Safety',
      title: '100% CCTV & Secure Perimeter',
      desc: 'Complete high-definition surveillance across all corridors, play areas, and entrances. Guarded campus gates, strict RFID visitor verification, and child-safe architecture keep your little one completely secure.',
      accent: 'from-[#4B1F6F] to-[#6B3A8D]',
      metric: '32+ HD Cameras Active'
    },
    {
      icon: 'fa-heart-pulse',
      badge: 'Loving Mother Care',
      title: '1:10 Nurturing Facilitator Ratio',
      desc: 'Intimate student cohorts ensure every quiet question, emotional milestone, and creative spark receives warm, tender maternal attention and patient encouragement.',
      accent: 'from-[#D4A72C] to-[#E67E22]',
      metric: 'Max 10 Children Per Teacher'
    },
    {
      icon: 'fa-masks-theater',
      badge: 'Zero Audition Anxiety',
      title: '100% Stage Inclusion Guarantee',
      desc: 'We never sideline any child. Every single student at Ryans Academy performs under the grand auditorium spotlights in custom designer costumes during RYANOVA and festive galas.',
      accent: 'from-[#7C3AED] to-[#9333EA]',
      metric: 'Every Child on Grand Stage'
    },
    {
      icon: 'fa-bus',
      badge: 'GPS Fleet Transit',
      title: 'GPS-Monitored Vans with Ayahs',
      desc: 'Dedicated school transit fleet equipped with live parent-accessible GPS tracking, certified speed governors, seatbelts, and verified caring female attendants on every journey.',
      accent: 'from-[#059669] to-[#10B981]',
      metric: 'Real-time GPS Tracking'
    },
    {
      icon: 'fa-apple-whole',
      badge: 'Holistic Health',
      title: 'Sanitized Hydration & Nutrition',
      desc: 'Multi-stage RO purified drinking water stations, supervised healthy snack breaks, child-height wash stations, and routine quarterly pediatric health and dental checkups.',
      accent: 'from-[#2563EB] to-[#3B82F6]',
      metric: 'Pediatric Care Verified'
    }
  ];

  // Interactive Child Developmental Milestones Navigator by Age Stage
  const parentMilestones = {
    playgroup: {
      stage: 'Playgroup',
      age: '1.5 – 2.5 Years',
      headline: 'Gentle Home-to-School Detachment & First Giggles',
      photo: '/assets/playgroup.jpg',
      quote: '"My 2-year old stopped crying on day three and now runs to hug her teacher every morning. The warmth and patience here are incomparable!" — Mrs. Archana S.',
      milestones: [
        { icon: 'fa-comments', title: 'Language & Speech', text: 'Vocabulary blooms from single words to 2-word joyful expressions and rhythmic nursery rhymes.' },
        { icon: 'fa-hands', title: 'Sensory & Motor', text: 'Sensory texture play, finger painting, grasping wooden blocks, and balanced walking confidence.' },
        { icon: 'fa-face-smile', title: 'Social & Emotional', text: 'Gentle separation ease, sharing toys during circle time, and emotional security.' },
        { icon: 'fa-puzzle-piece', title: 'Cognitive Wonder', text: 'Primary color sorting, shape matching, and early animal sound recognition.' }
      ],
      dailyScheduleSnippet: 'Sensory Art • Rhyme Circles • Gross Motor Play Park'
    },
    prekg: {
      stage: 'Pre-KG',
      age: '2.5 – 3.5 Years',
      headline: 'Curiosity Sparks, Phonics & Self-Directed Exploration',
      photo: '/assets/nursery.jpg',
      quote: '"Her curiosity has exploded! She recognizes colors, counts her crayons, and sings full phonics rhymes proudly with actions at home." — Dr. Ramanathan',
      milestones: [
        { icon: 'fa-font', title: 'Phonics & Speech', text: 'Jolly Phonics letter sounds (s, a, t, p, i, n) and expressive 4-word conversational sentences.' },
        { icon: 'fa-shapes', title: 'Montessori Practical', text: 'Pouring, buttoning, clay sculpting, and three-finger pencil grip development with wooden apparatus.' },
        { icon: 'fa-users', title: 'Peer Collaboration', text: 'Turn-taking, collaborative building blocks, and polite social etiquette (Please & Thank You).' },
        { icon: 'fa-lightbulb', title: 'Number Readiness', text: 'Counting real objects 1–20, recognizing visual patterns, and spatial understanding.' }
      ],
      dailyScheduleSnippet: 'Montessori Station • Phonics Lab • Interactive Storybook'
    },
    lkg: {
      stage: 'LKG',
      age: '3.5 – 4.5 Years',
      headline: 'Reading Readiness, Pre-Math & Stage Confidence',
      photo: '/assets/juniorkg.jpg',
      quote: '"The reading foundation built in LKG is phenomenal. He reads 3-letter blend words effortlessly before turning five!" — Mrs. Meera K.',
      milestones: [
        { icon: 'fa-book-open', title: 'Reading & Blending', text: 'Blends CVC words (cat, pin, sun), writes upper/lowercase alphabets with proper strokes.' },
        { icon: 'fa-calculator', title: 'Mathematical Logic', text: 'Concepts of greater/less than, before/after numbers, and early pictorial addition.' },
        { icon: 'fa-microphone', title: 'Show & Tell Oratory', text: 'Speaking on classroom podiums with microphone, expressing daily experiences confidently.' },
        { icon: 'fa-palette', title: 'Art & Rhythms', text: 'Color wheel understanding, freehand drawing, and synchronized dance beats.' }
      ],
      dailyScheduleSnippet: 'Phonics Reading • Math Stations • Show & Tell Podium'
    },
    ukg: {
      stage: 'UKG',
      age: '4.5 – 5.5 Years',
      headline: 'School Readiness, Writing Fluency & Convocation Honor',
      photo: '/assets/seniorkg.jpg',
      quote: '"Watching our daughter receive her graduation scroll at the Kindergarten Convocation was the proudest moment of our lives." — Mr. S. Balaji',
      milestones: [
        { icon: 'fa-pen-fancy', title: 'Fluent Writing & Reading', text: 'Independent sentence construction, sight word mastery, and expressive reading comprehension.' },
        { icon: 'fa-brain', title: 'Abacus & Mental Math', text: 'Addition/subtraction within 50, skip counting by 2s/5s/10s, and basic currency logic.' },
        { icon: 'fa-atom', title: 'STEM & Environmental', text: 'Plant life cycles, weather changes, human body sense organs, and nature discovery.' },
        { icon: 'fa-graduation-cap', title: 'Formal School Bridge', text: 'Sustained 35-minute focus, notebook discipline, and smooth transition to Primary CBSE.' }
      ],
      dailyScheduleSnippet: 'Creative Writing • STEM Wonder • Convocation Rehearsals'
    },
    graders: {
      stage: 'Graders (Primary)',
      age: 'Grade 1 & Above',
      headline: 'CBSE Academic Depth, STEM, Abacus & Sports Laurels',
      photo: '/assets/DSC_0001.jpg',
      quote: '"Ryans balances CBSE board depth with sports trophies and cultural galas. Rohan is excelling in academics and athletics alike." — Dr. Venkat Raman',
      milestones: [
        { icon: 'fa-award', title: 'CBSE Curriculum', text: 'Conceptual mastery in Science, Mathematics, English literature, and second language proficiency.' },
        { icon: 'fa-laptop-code', title: 'Digital & Abacus', text: 'Computer literacy basics, logical coding games, and Abacus mental computation speed.' },
        { icon: 'fa-trophy', title: 'Competitive Sports', text: 'Track sprinting, gymnastics, team relays, and interschool tournament preparation.' },
        { icon: 'fa-user-tie', title: 'Character & Values', text: 'House leadership, environmental stewardship, empathy, and moral civic ethics.' }
      ],
      dailyScheduleSnippet: 'CBSE Conceptual Labs • Abacus Speed • Sports Velocity Fest'
    }
  };

  // "A Day in the Life of a Ryans Scholar" Interactive Clock Rhythm
  const dayInTheLifeSteps = [
    {
      time: '08:30 AM',
      icon: 'fa-sun',
      title: 'Warm Arrival & Morning Circle',
      desc: 'Greeted with warm smiles at the gate. Morning circle-time, positive mindfulness, devotional prayer, and daily weather check.',
      color: 'bg-amber-500'
    },
    {
      time: '09:15 AM',
      icon: 'fa-shapes',
      title: 'Montessori & Phonics Wonder',
      desc: 'Hands-on exploration with self-correcting wooden sensory apparatus, Jolly Phonics sound exploration, and language discovery.',
      color: 'bg-purple-600'
    },
    {
      time: '10:30 AM',
      icon: 'fa-apple-whole',
      title: 'Nutrition Break & Hygiene Habits',
      desc: 'Guided handwashing with gentle soaps, sharing healthy snacks with friends, hydration check, and pleasant table manners.',
      color: 'bg-emerald-600'
    },
    {
      time: '11:15 AM',
      icon: 'fa-atom',
      title: 'STEM Discovery & Creative Arts',
      desc: 'Curiosity experiments, building blocks, finger painting, rhythm dance, and interactive show-and-tell on mini-podiums.',
      color: 'bg-blue-600'
    },
    {
      time: '12:15 PM',
      icon: 'fa-futbol',
      title: 'Outdoor Agility & Play Park',
      desc: 'Safe swings, slides, obstacle balancing beams, and guided physical exercises under teacher supervision in open air.',
      color: 'bg-amber-600'
    },
    {
      time: '01:00 PM',
      icon: 'fa-heart',
      title: 'Reflection & Joyful Farewell',
      desc: 'Storybook reflection circle, gentle bag pack-up, celebratory stickers, and safe escorted transit handover to parents or GPS vans.',
      color: 'bg-[#4B1F6F]'
    }
  ];

  // Frequently Asked Questions by Parents
  const parentFaqs = [
    {
      q: 'How do teachers handle separation anxiety during the first days?',
      a: 'We welcome new toddlers with a gentle phased orientation. Our loving mother-facilitators engage each child with warm songs, bubble play, and puppet stories. Parents are also given live photo updates so you enjoy complete peace of mind.'
    },
    {
      q: 'What is the teacher-to-student ratio at Ryans Academy?',
      a: 'We maintain an intimate 1:10 ratio in early learning classrooms, backed by dedicated female support care-attendants (ayahs). This ensures every child receives prompt personal attention, safety, and individual encouragement.'
    },
    {
      q: 'Is transport safe and accompanied by female staff?',
      a: 'Yes, absolutely. Every vehicle in our fleet is equipped with live GPS tracking shared with parents, speed governors, first-aid kits, and a verified female attendant on board from morning pickup to afternoon drop-off.'
    },
    {
      q: 'Does Ryans guarantee stage participation for shy or quiet children?',
      a: 'Yes! We believe confidence is nurtured, not tested. Our 100% Stage Inclusion Guarantee ensures every single student performs on our grand auditorium stage during RYANOVA and gala days—no child is left in the audience.'
    },
    {
      q: 'What curriculum framework is followed from early childhood to primary?',
      a: 'Our early years integrate the world-renowned Montessori method and Jolly Phonics framework, seamlessly transitioning into the structured NCERT / CBSE curriculum for primary graders, supplemented by Abacus mental math and STEM labs.'
    }
  ];

  return (
    <div className="homepage-page">
      {/* Lightbox Modal for Fullscreen Photo Viewing */}
      <Lightbox photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />

      {/* Full Category Photo Archive Modal (All 66, 23, 48, 31 Photos - Upgraded Luxury UI) */}
      {fullGalleryModalCategory && (
        <div 
          className="fixed inset-0 z-50 bg-[#0F041A]/95 backdrop-blur-2xl flex flex-col justify-between overflow-hidden animate-fade-in"
          onClick={() => setFullGalleryModalCategory(null)}
        >
          {/* Ambient Lighting Orbs */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D4A72C]/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#4B1F6F]/30 rounded-full blur-3xl pointer-events-none"></div>

          {/* Luxury Modal Header */}
          <div 
            className="bg-gradient-to-r from-[#280C42]/95 via-[#180628]/95 to-[#280C42]/95 backdrop-blur-xl border-b border-[#D4A72C]/35 px-4 sm:px-8 py-3.5 sm:py-4 flex flex-wrap items-center justify-between gap-4 z-20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#4B1F6F] to-[#7B37B2] text-[#F3D98B] flex items-center justify-center font-bold text-lg border border-[#D4A72C]/40 shadow-xl anim-ring-gold">
                <i className={`fa-solid ${eventCategories[fullGalleryModalCategory].icon}`}></i>
              </div>
              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="text-base sm:text-xl font-black text-white tracking-tight">
                    {eventCategories[fullGalleryModalCategory].title}
                  </h3>
                  <span className="bg-[#D4A72C] text-[#241300] text-[11px] font-black px-2.5 py-0.5 rounded-full shadow-md">
                    {eventCategories[fullGalleryModalCategory].count}
                  </span>
                </div>
                <p className="text-xs text-purple-200 hidden sm:block font-medium">
                  Complete Authentic Photographic Archive • Click any photo to view in Full-Screen Lightbox
                </p>
              </div>
            </div>

            {/* In-Modal Category Switcher Tabs (RYANOVA, Convocation, Colours, Interschool) */}
            <div className="flex items-center gap-2 overflow-x-auto py-1 max-w-full">
              {Object.values(eventCategories).map((c) => {
                const isSelected = fullGalleryModalCategory === c.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setFullGalleryModalCategory(c.id)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 whitespace-nowrap shadow-md ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#D4A72C] via-[#ECC65D] to-[#D4A72C] text-[#261502] font-black ring-2 ring-[#FFF3B0] scale-105 shadow-[0_4px_20px_rgba(212,167,44,0.5)]'
                        : 'bg-white/10 hover:bg-white/20 text-white/90 border border-white/15 hover:border-[#D4A72C]/50 hover:scale-[1.02]'
                    }`}
                  >
                    <i className={`fa-solid ${c.icon} text-xs ${isSelected ? 'text-[#261502]' : 'text-[#F3D98B]'}`}></i>
                    <span>{c.title.split(' ')[0]}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                      isSelected ? 'bg-black/20 text-black font-extrabold' : 'bg-black/40 text-purple-200'
                    }`}>
                      {c.count.replace(' Photos', '')}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setFullGalleryModalCategory(null)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-rose-600 text-white flex items-center justify-center transition-all duration-300 hover:rotate-90 border border-white/20 shadow-lg text-sm ml-auto sm:ml-0"
              title="Close Archive"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>

          {/* Modal Grid Body */}
          <div 
            className="flex-grow overflow-y-auto p-4 sm:p-6 lg:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-7xl mx-auto">
              {/* Category Highlight Narrative Banner */}
              <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-900/50 via-purple-950/70 to-purple-900/50 border border-[#D4A72C]/30 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D4A72C] to-[#E67E22] text-white flex items-center justify-center text-xl shadow-lg shadow-amber-500/30 flex-shrink-0">
                    <i className={`fa-solid ${eventCategories[fullGalleryModalCategory].icon}`}></i>
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h4 className="text-white font-black text-base sm:text-lg tracking-tight">
                        {eventCategories[fullGalleryModalCategory].title}
                      </h4>
                      <span className="bg-[#D4A72C] text-[#241300] text-[11px] font-black px-3 py-0.5 rounded-full shadow-sm">
                        {eventCategories[fullGalleryModalCategory].count}
                      </span>
                    </div>
                    <p className="text-purple-200 text-xs sm:text-[13px] font-medium mt-1 leading-relaxed max-w-3xl">
                      {eventCategories[fullGalleryModalCategory].desc}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto flex-shrink-0">
                  <span className="text-[11px] font-extrabold text-[#F3D98B] bg-white/10 px-3 py-1.5 rounded-full border border-white/20 shadow-sm flex items-center gap-1.5">
                    <i className="fa-solid fa-sparkles text-[#D4A72C]"></i> Authentic Collection
                  </span>
                </div>
              </div>

              {/* Photo Cards Grid with 3D Depth & Staggered Reveal */}
              <div 
                key={fullGalleryModalCategory}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4.5"
              >
                {categoryFullCollections[fullGalleryModalCategory].map((photo, idx) => (
                  <div
                    key={photo.src}
                    style={{ animationDelay: `${(idx % 24) * 35}ms` }}
                    className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#1a0a2a] cursor-pointer border-2 border-white/15 hover:border-[#D4A72C] hover:scale-[1.04] hover:-translate-y-1 hover:shadow-[0_16px_36px_-8px_rgba(212,167,44,0.45)] transition-all duration-300 animate-modal-card card-shine-effect"
                    onClick={() => setSelectedPhoto(photo)}
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:brightness-110 group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    {/* Hover Overlay with expand button and title */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2.5 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="bg-[#4B1F6F]/90 backdrop-blur-sm text-[#F3D98B] text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border border-purple-300/30">
                          {eventCategories[fullGalleryModalCategory].badge}
                        </span>
                        <span className="w-7 h-7 rounded-full bg-white/95 text-[#4B1F6F] flex items-center justify-center text-xs shadow-md hover:scale-110 transition-transform">
                          <i className="fa-solid fa-expand"></i>
                        </span>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-white truncate drop-shadow">
                          {photo.title}
                        </p>
                      </div>
                    </div>
                    {/* Corner Number Badge */}
                    <span className="absolute bottom-1.5 right-1.5 bg-black/75 backdrop-blur-md text-[#F3D98B] border border-white/20 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded shadow">
                      #{photo.index}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Luxury Modal Footer */}
          <div 
            className="bg-gradient-to-r from-[#1E0935]/95 via-[#140524]/95 to-[#1E0935]/95 backdrop-blur-xl border-t border-[#D4A72C]/25 px-6 py-3.5 flex items-center justify-between text-xs text-purple-200 z-20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Showing all {categoryFullCollections[fullGalleryModalCategory].length} authentic photographs • High Definition</span>
            </span>
            <button
              type="button"
              onClick={() => setFullGalleryModalCategory(null)}
              className="btn-gold text-xs py-1.5 px-4 shadow-sm hover:scale-105"
            >
              <i className="fa-solid fa-xmark mr-1"></i> Close Archive
            </button>
          </div>
        </div>
      )}

      {/* Hero Announcement Ticker */}
      <div className="bg-[#4B1F6F] text-white py-1.5 px-4 border-b border-purple-800/60 overflow-hidden text-xs w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 min-w-0">
          <div className="flex items-center gap-3 overflow-hidden min-w-0 flex-1">
            <span className="bg-[#D4A72C] text-[#29252B] font-extrabold uppercase px-2.5 py-0.5 rounded-full text-[10px] tracking-wider animate-pulse flex-shrink-0">
              New Update
            </span>
            <p className="text-purple-100 truncate font-medium">
              ✨ Admissions Open for 2026-27 | 100% Stage Participation at Annual Gala | CBSE Framework & Montessori Early Years
            </p>
          </div>
          <Link to="/admissions" className="text-[#F3D98B] font-bold hover:underline flex items-center gap-1 flex-shrink-0 hidden sm:flex whitespace-nowrap">
            Enquire Now <i className="fa-solid fa-arrow-right text-[10px]"></i>
          </Link>
        </div>
      </div>

      {/* Section 2: Upgraded Dynamic Luxury Hero Section (Compact Padding to eliminate empty space) */}
      <section className="relative bg-gradient-to-b from-[#FAF8F4] via-[#F1EAF7]/60 to-[#FAF8F4] pt-4 sm:pt-6 pb-12 lg:pt-6 lg:pb-16 overflow-hidden border-b border-purple-100/60">
        {/* Ambient Decorative Blurs */}
        <div className="absolute top-6 left-1/4 w-80 h-80 bg-[#D4A72C]/10 rounded-full filter blur-3xl pointer-events-none animate-pulse-subtle"></div>
        <div className="absolute bottom-6 right-10 w-80 h-80 bg-[#4B1F6F]/10 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Headline & Call To Action */}
            <div className="lg:col-span-6 space-y-5 text-center lg:text-left reveal-on-scroll">
              <div className="inline-flex items-center gap-2 bg-[#F1EAF7] border border-purple-200/80 px-3.5 py-1 rounded-full shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4A72C] animate-ping"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#4B1F6F]">
                  Admissions Open For Academic Year 2026-27
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#4B1F6F] leading-[1.12] tracking-tight">
                Dream. Learn.<br />
                <span className="text-shimmer-gold font-serif italic">Explore.</span> Shine.
              </h1>

              <p className="text-base sm:text-lg text-gray-600 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Inspiring young minds to reach their fullest potential through structured CBSE depth, self-directed Montessori apparatus, and joyful experiential discovery.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
                <a href="#welcome" className="btn-purple text-base w-full sm:w-auto shadow-lg shadow-purple-900/20 hover:scale-105 transition-all">
                  <i className="fa-solid fa-clapperboard text-xs mr-1.5 text-[#D4A72C]"></i> Watch Campus Video (1:15 min)
                </a>
                <button 
                  className="btn-gold text-base w-full sm:w-auto shadow-lg shadow-amber-500/25 anim-ring-gold hover:scale-105 transition-all" 
                  onClick={() => openModal("Play Group", "enquiry")}
                >
                  Apply For Admission <i className="fa-solid fa-sparkles text-xs"></i>
                </button>
              </div>

              {/* Trust Stats Bar with Real Student Avatars */}
              <div className="pt-5 border-t border-purple-200/70 max-w-lg mx-auto lg:mx-0">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 items-center">
                  <div>
                    <span className="block text-2xl sm:text-3xl font-extrabold text-[#4B1F6F]">
                      <AnimatedCounter target={10} prefix="" suffix="+" />
                    </span>
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Years Legacy</span>
                  </div>
                  <div>
                    <span className="block text-2xl sm:text-3xl font-extrabold text-[#4B1F6F]">
                      <AnimatedCounter target={10} prefix="1:" suffix="" />
                    </span>
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Teacher Ratio</span>
                  </div>
                  <div>
                    <span className="block text-2xl sm:text-3xl font-extrabold text-[#D4A72C]">
                      <AnimatedCounter target={100} prefix="" suffix="%" />
                    </span>
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Inclusion</span>
                  </div>
                  {/* Real Student Community Avatars */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1.5">
                    <div className="flex items-center -space-x-2">
                      <img src="/asssssetss_opt/colours_day/colours_day_01.jpg" alt="Ryans Student" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-sm" />
                      <img src="/asssssetss_opt/colours_day/colours_day_02.jpg" alt="Ryans Student" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-sm" />
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-[#4B1F6F] text-white text-[9px] font-extrabold flex items-center justify-center shadow-sm">
                        500+
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Students</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Layered Multi-Photo Hero Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none pt-4 pb-4">
                {/* Floating Stat Chip 1 (Top-Right): Convocation */}
                <div className="floating-stat-chip absolute -top-3 right-1 sm:right-2 hidden sm:flex z-20 animate-float-gentle bg-white/95 backdrop-blur-md shadow-xl border border-amber-200/80 rounded-2xl p-2.5">
                  <div className="w-11 h-11 rounded-xl overflow-hidden flex-shrink-0 border-2 border-[#D4A72C]">
                    <img src="/asssssetss_opt/convocation/convocation_02.jpg" alt="Ryans Graduate" className="w-full h-full object-cover" />
                  </div>
                  <div className="pr-1">
                    <span className="text-[10px] font-extrabold text-[#D4A72C] uppercase tracking-wider block">Kindergarten Honor</span>
                    <p className="text-xs font-bold text-[#4B1F6F]">100% Convocation Success</p>
                  </div>
                </div>

                {/* Floating Stat Chip 2 (Bottom-Left): Interschool Sports */}
                <div className="floating-stat-chip absolute -bottom-3 left-1 sm:left-2 hidden sm:flex z-20 animate-float-slow bg-white/95 backdrop-blur-md shadow-xl border border-purple-200/80 rounded-2xl p-2.5">
                  <div className="w-11 h-11 rounded-xl overflow-hidden flex-shrink-0 border-2 border-emerald-500">
                    <img src="/asssssetss_opt/competition/competition_03.jpg" alt="Trophy Winner" className="w-full h-full object-cover" />
                  </div>
                  <div className="pr-1">
                    <span className="text-[10px] font-extrabold text-emerald-600 uppercase tracking-wider block">Athletic Excellence</span>
                    <p className="text-xs font-bold text-[#4B1F6F]">15+ Interschool Trophies</p>
                  </div>
                </div>

                {/* Main Hero Photo: Dynamically Cycling Every 2s with Multi-Style Animations (ALL Faces 100% Visible & Uncropped) */}
                <div 
                  className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(75,31,111,0.38)] border-4 border-white ring-2 ring-[#D4A72C]/40 cursor-pointer group h-[370px] sm:h-[480px] lg:h-[500px] bg-[#1E0E30]"
                  onMouseEnter={() => setIsHeroPaused(true)}
                  onMouseLeave={() => setIsHeroPaused(false)}
                  onClick={() => setSelectedPhoto({ 
                    src: heroShowcasePhotos[heroPhotoIndex].src, 
                    title: heroShowcasePhotos[heroPhotoIndex].title, 
                    category: heroShowcasePhotos[heroPhotoIndex].badge 
                  })}
                >
                  {/* Stacked Images with Uncropped Clear View & Ambient Backdrops - All Faces 100% Visible */}
                  {heroShowcasePhotos.map((photo, idx) => {
                    const isActive = idx === heroPhotoIndex;
                    const animClass = heroTransitionStyles[idx % heroTransitionStyles.length];
                    return (
                      <div 
                        key={photo.src}
                        className={`absolute inset-0 w-full h-full overflow-hidden ${
                          isActive 
                            ? `opacity-100 z-10 ${animClass}` 
                            : 'opacity-0 pointer-events-none z-0 transition-opacity duration-500'
                        }`}
                      >
                        {/* Ambient Blurred Backdrop - fills container with rich color tones without cropping */}
                        <img 
                          src={photo.src} 
                          alt="" 
                          aria-hidden="true" 
                          className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-60" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

                        {/* Main Foreground Photo in Crisp Uncropped View - ALL Faces & Certificates Fully Visible */}
                        <img 
                          src={photo.src} 
                          alt={photo.title} 
                          className="relative z-10 w-full h-full object-contain p-2 pb-24 sm:pb-20 sm:p-3.5 drop-shadow-2xl" 
                        />
                      </div>
                    );
                  })}

                  {/* Quick Prev/Next Navigation Controls on Hover / Touch */}
                  <div className="absolute inset-y-0 left-2.5 right-2.5 sm:left-3 sm:right-3 flex items-center justify-between pointer-events-none z-20">
                    <button 
                      type="button"
                      aria-label="Previous Photo"
                      onClick={(e) => {
                        e.stopPropagation();
                        setHeroPhotoIndex((prev) => (prev - 1 + heroShowcasePhotos.length) % heroShowcasePhotos.length);
                      }}
                      className="pointer-events-auto w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-[#4B1F6F] hover:ring-2 hover:ring-[#D4A72C] text-white flex items-center justify-center text-xs sm:text-sm opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md border border-white/30 hover:scale-110 shadow-xl"
                    >
                      <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button 
                      type="button"
                      aria-label="Next Photo"
                      onClick={(e) => {
                        e.stopPropagation();
                        setHeroPhotoIndex((prev) => (prev + 1) % heroShowcasePhotos.length);
                      }}
                      className="pointer-events-auto w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-[#4B1F6F] hover:ring-2 hover:ring-[#D4A72C] text-white flex items-center justify-center text-xs sm:text-sm opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md border border-white/30 hover:scale-110 shadow-xl"
                    >
                      <i className="fa-solid fa-chevron-right"></i>
                    </button>
                  </div>

                  {/* Dynamic Content Card at Bottom with smooth animated text */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md p-2.5 sm:p-3.5 rounded-2xl border border-white/80 shadow-[0_15px_35px_rgba(0,0,0,0.25)] flex items-center justify-between z-20 transition-all">
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0" key={heroPhotoIndex}>
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#4B1F6F] to-[#6B3A8D] text-white flex items-center justify-center font-bold shadow-md shadow-purple-900/30 flex-shrink-0 animate-pulse">
                        <i className="fa-solid fa-award text-sm sm:text-base text-[#D4A72C]"></i>
                      </div>
                      <div className="min-w-0 animate-fade-in-up">
                        <p className="font-extrabold text-[11px] sm:text-xs text-[#4B1F6F] leading-tight truncate uppercase tracking-wider">
                          {heroShowcasePhotos[heroPhotoIndex].badge}
                        </p>
                        <p className="text-[10px] sm:text-[11px] text-gray-700 font-semibold truncate mt-0.5">
                          {heroShowcasePhotos[heroPhotoIndex].title}
                        </p>
                      </div>
                    </div>
                    <span className="bg-[#F1EAF7] text-[#4B1F6F] text-[10px] sm:text-[11px] font-extrabold px-2.5 sm:px-3 py-1 rounded-full border border-purple-200/50 flex-shrink-0 ml-2 shadow-sm">
                      CBSE Aligned
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Quick Highlights (4 Luxury Feature Blocks) */}
      <section className="pt-6 pb-6 sm:pt-8 sm:pb-8 bg-gradient-to-b from-[#FAF8F4] via-white to-[#FAF8F4] relative z-20 -mt-6 sm:-mt-8 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Highlight 1: CBSE Curriculum */}
            <div className="highlight-card-luxury anim-tilt-card card-shine-effect p-6 sm:p-7 reveal-on-scroll stagger-1 group">
              <div className="highlight-accent-bar bg-gradient-to-r from-[#4B1F6F] via-[#6B3A8D] to-[#834aa7]"></div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4B1F6F] to-[#6B3A8D] text-white flex items-center justify-center text-2xl shadow-lg shadow-purple-950/20 highlight-icon flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <i className="fa-solid fa-book-open-reader"></i>
                </div>
                <div className="flex-1">
                  <span className="text-[9.5px] font-black uppercase tracking-wider text-[#4B1F6F] bg-[#F1EAF7] px-2.5 py-0.5 rounded-full inline-block mb-1.5 border border-purple-200/50">
                    Academic Rigor
                  </span>
                  <h4 className="font-extrabold text-base text-[#4B1F6F] mb-1 group-hover:text-[#6B3A8D] transition-colors">
                    CBSE Curriculum
                  </h4>
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed font-medium mt-3">
                Structured conceptual foundations preparing children with global academic rigor and analytical confidence.
              </p>
              <div className="pt-3 border-t border-purple-50 mt-auto">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#4B1F6F]">
                  <i className="fa-solid fa-circle-check text-[#D4A72C] text-xs"></i> NCERT Aligned • Global Benchmarks
                </span>
              </div>
            </div>

            {/* Highlight 2: Activity-Based Learning */}
            <div className="highlight-card-luxury anim-tilt-card card-shine-effect p-6 sm:p-7 reveal-on-scroll stagger-2 group">
              <div className="highlight-accent-bar bg-gradient-to-r from-[#D4A72C] via-[#F3D98B] to-[#E67E22]"></div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4A72C] to-[#E67E22] text-white flex items-center justify-center text-2xl shadow-lg shadow-amber-500/25 highlight-icon flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <i className="fa-solid fa-shapes"></i>
                </div>
                <div className="flex-1">
                  <span className="text-[9.5px] font-black uppercase tracking-wider text-[#D4A72C] bg-[#FDF8E7] px-2.5 py-0.5 rounded-full inline-block mb-1.5 border border-amber-200/50">
                    Hands-on STEM
                  </span>
                  <h4 className="font-extrabold text-base text-[#4B1F6F] mb-1 group-hover:text-[#D4A72C] transition-colors">
                    Activity-Based Learning
                  </h4>
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed font-medium mt-3">
                Hands-on sensory exploration, science curiosity wonder labs, and collaborative imaginative play.
              </p>
              <div className="pt-3 border-t border-amber-50 mt-auto">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#D4A72C]">
                  <i className="fa-solid fa-circle-check text-[#4B1F6F] text-xs"></i> Sensory Kits • Curiosity Labs
                </span>
              </div>
            </div>

            {/* Highlight 3: Montessori Approach */}
            <div className="highlight-card-luxury anim-tilt-card card-shine-effect p-6 sm:p-7 reveal-on-scroll stagger-3 group">
              <div className="highlight-accent-bar bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#A855F7]"></div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#9333EA] text-white flex items-center justify-center text-2xl shadow-lg shadow-purple-600/25 highlight-icon flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <i className="fa-solid fa-puzzle-piece"></i>
                </div>
                <div className="flex-1">
                  <span className="text-[9.5px] font-black uppercase tracking-wider text-[#7C3AED] bg-purple-50 px-2.5 py-0.5 rounded-full inline-block mb-1.5 border border-purple-200/50">
                    Self-Directed
                  </span>
                  <h4 className="font-extrabold text-base text-[#4B1F6F] mb-1 group-hover:text-[#7C3AED] transition-colors">
                    Montessori Approach
                  </h4>
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed font-medium mt-3">
                Self-paced discovery nurturing natural curiosity, deep focus, spatial logic, and fine motor skills.
              </p>
              <div className="pt-3 border-t border-purple-50 mt-auto">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#7C3AED]">
                  <i className="fa-solid fa-circle-check text-[#D4A72C] text-xs"></i> Child-Centric Learning Stations
                </span>
              </div>
            </div>

            {/* Highlight 4: Holistic Development */}
            <div className="highlight-card-luxury anim-tilt-card card-shine-effect p-6 sm:p-7 reveal-on-scroll stagger-4 group">
              <div className="highlight-accent-bar bg-gradient-to-r from-[#059669] via-[#10B981] to-[#34D399]"></div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#059669] to-[#10B981] text-white flex items-center justify-center text-2xl shadow-lg shadow-emerald-500/25 highlight-icon flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <i className="fa-solid fa-seedling"></i>
                </div>
                <div className="flex-1">
                  <span className="text-[9.5px] font-black uppercase tracking-wider text-[#059669] bg-emerald-50 px-2.5 py-0.5 rounded-full inline-block mb-1.5 border border-emerald-200/50">
                    Mind & Character
                  </span>
                  <h4 className="font-extrabold text-base text-[#4B1F6F] mb-1 group-hover:text-[#059669] transition-colors">
                    Holistic Development
                  </h4>
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed font-medium mt-3">
                Balanced emotional, physical vitality, creative expression, and social empathy for every learner.
              </p>
              <div className="pt-3 border-t border-emerald-50 mt-auto">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#059669]">
                  <i className="fa-solid fa-circle-check text-[#D4A72C] text-xs"></i> Sports, Arts & Values Integrated
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Feature 1: Parent Peace-of-Mind Hub (The 5 Golden Pledges to Parents) */}
      <section className="pt-6 pb-10 sm:pt-8 sm:pb-12 bg-gradient-to-b from-[#FAF8F4] via-[#F1EAF7]/50 to-[#FAF8F4] relative overflow-hidden border-y border-purple-100/70" id="parent-peace-of-mind">
        {/* Subtle Decorative Elements */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#D4A72C]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#4B1F6F]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header with Security Beacon & Badges */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 reveal-on-scroll">
            <div className="inline-flex items-center gap-2.5 bg-white border border-[#D4A72C]/50 px-4 py-1.5 rounded-full shadow-sm mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 security-beacon"></span>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#4B1F6F]">
                Verified Campus Protocol • 100% Parent Peace of Mind
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4B1F6F] leading-tight tracking-tight">
              Why Parents Choose <span className="text-shimmer-gold font-serif italic">Ryans Academy</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed font-medium">
              We know leaving your precious child in a new environment takes immense trust. Here are our 5 uncompromising golden commitments to every mother and father.
            </p>
          </div>

          {/* 5 Interactive Luxury Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {parentTrustPillars.map((pillar, idx) => (
              <div 
                key={pillar.title}
                className="parent-peace-card anim-tilt-card card-shine-effect p-5 sm:p-6 flex flex-col justify-between reveal-on-scroll group"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div>
                  {/* Top Icon & Metric Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pillar.accent} text-white flex items-center justify-center text-xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                      <i className={`fa-solid ${pillar.icon}`}></i>
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#4B1F6F] bg-[#F1EAF7] px-2.5 py-1 rounded-full border border-purple-200/60 shadow-sm">
                      Pledge #{idx + 1}
                    </span>
                  </div>

                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#D4A72C] block mb-1">
                    {pillar.badge}
                  </span>
                  <h3 className="font-extrabold text-base text-[#4B1F6F] mb-2 leading-snug group-hover:text-[#6B3A8D] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium">
                    {pillar.desc}
                  </p>
                </div>

                {/* Bottom Verification Tag */}
                <div className="pt-4 border-t border-purple-50 mt-5 flex items-center gap-1.5 text-[10.5px] font-bold text-[#4B1F6F]">
                  <i className="fa-solid fa-circle-check text-emerald-500 text-xs"></i>
                  <span>{pillar.metric}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Guided Safety Inspection Banner */}
          <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-purple-200/80 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 reveal-on-scroll">
            <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4B1F6F] to-[#D4A72C] text-white flex items-center justify-center text-2xl shadow-lg flex-shrink-0">
                <i className="fa-solid fa-clipboard-check"></i>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-extrabold text-[#4B1F6F]">
                  Inspect Our Campus Security & Hygiene In Person
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 font-medium mt-0.5">
                  Walk through our CCTV surveillance room, hygienic dining, and sensory play spaces with our admissions team.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <button 
                type="button"
                onClick={() => openModal('Play Group', 'visit')}
                className="btn-purple text-xs sm:text-sm py-3 px-6 shadow-md hover:scale-105 transition-all w-full sm:w-auto"
              >
                <i className="fa-solid fa-calendar-check mr-1.5 text-[#F3D98B]"></i>
                Book Guided Safety Walkthrough
              </button>
              <a 
                href="tel:+919840012345"
                className="btn-outline-purple text-xs sm:text-sm py-2.5 px-5 text-center w-full sm:w-auto"
              >
                <i className="fa-solid fa-phone mr-1.5 text-[#D4A72C]"></i>
                Speak with Principal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Welcome to Ryans Academy */}
      <section className="pt-6 pb-10 sm:pt-8 sm:pb-12 bg-[#FAF8F4] reveal-on-scroll" id="welcome">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Split Layout: Interactive Video Experience */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#1a0c28] group relative aspect-[16/10] sm:aspect-[16/11]">
                  <video 
                    ref={videoRef}
                    poster="/assets/ryansinfra.jpg"
                    playsInline
                    webkit-playsinline="true"
                    preload="metadata"
                    muted={isMuted}
                    loop
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={toggleVideoPlay}
                    onPlay={() => setIsVideoPlaying(true)}
                    onPause={() => setIsVideoPlaying(false)}
                  >
                    <source src="/Ryans_Academy_Showcase_1m15s.mp4" type="video/mp4" />
                    <source src="/assets/campus_video.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video.
                  </video>

                  {/* Top Overlay Bar */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-3 sm:left-3 sm:right-3 flex items-center justify-between z-20 pointer-events-none">
                    <span className="bg-[#1E0730]/90 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-extrabold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md border border-[#D4A72C]/40">
                      <span className={`w-2 h-2 rounded-full ${isVideoPlaying ? 'bg-emerald-400 animate-ping' : 'bg-[#D4A72C]'}`}></span>
                      <span>Campus Video • 1:15 min</span>
                    </span>

                    {/* Mute / Unmute Button with Music Status */}
                    <button 
                      type="button"
                      onClick={toggleVideoMute}
                      className={`pointer-events-auto backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 transition-all shadow-md active:scale-95 hover:scale-105 border text-[11px] font-bold ${
                        isMuted 
                          ? 'bg-amber-500 hover:bg-amber-600 text-black border-amber-300' 
                          : 'bg-[#4B1F6F]/90 hover:bg-[#6B2E9C] text-[#F3D98B] border-[#D4A72C]/50'
                      }`}
                      title={isMuted ? "Tap to Unmute Music" : "Mute Sound"}
                    >
                      <i className={`fa-solid ${isMuted ? 'fa-volume-xmark text-black' : 'fa-volume-high text-[#F3D98B] animate-pulse'}`}></i>
                      <span>{isMuted ? 'Tap for Music' : 'Music ON ♫'}</span>
                    </button>
                  </div>

                  {/* Play Button Overlay (when paused) */}
                  {!isVideoPlaying && (
                    <div 
                      onClick={toggleVideoPlay}
                      role="button"
                      tabIndex="0"
                      aria-label="Play Campus Video"
                      className="absolute inset-0 bg-black/45 backdrop-blur-[1px] flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:bg-black/35 z-10 p-4"
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#4B1F6F] via-[#6B2E9C] to-[#D4A72C] text-white flex items-center justify-center shadow-2xl ring-4 ring-[#D4A72C] hover:scale-110 active:scale-95 transition-transform duration-300">
                        <i className="fa-solid fa-play text-xl sm:text-2xl text-[#F3D98B] ml-1"></i>
                      </div>
                      <p className="mt-3.5 text-white text-xs sm:text-sm font-extrabold tracking-wide drop-shadow-md bg-[#1E0730]/95 px-5 py-2 rounded-full border border-[#D4A72C]/60 text-center flex items-center gap-2 shadow-2xl">
                        <i className="fa-solid fa-clapperboard text-[#D4A72C]"></i> Watch Campus Video (1:15 min)
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-[11px] font-bold text-[#F3D98B] bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-amber-300/40 flex items-center gap-1.5 shadow">
                          <i className="fa-solid fa-music text-[10px] animate-pulse"></i> Positive Vibe Background Music
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Interactive Controls Bar when playing (Visible on mobile & on hover) */}
                  {isVideoPlaying && (
                    <div 
                      className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4 z-10 pointer-events-none"
                    >
                      {/* Tap anywhere on video to toggle play/pause */}
                      <div 
                        onClick={toggleVideoPlay} 
                        className="flex-grow pointer-events-auto cursor-pointer"
                        title="Tap to Pause"
                      ></div>

                      {/* Bottom Interactive Controls Bar */}
                      <div className="pointer-events-auto bg-black/80 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/20 shadow-2xl flex items-center justify-between gap-3 text-white">
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={toggleVideoPlay}
                            className="w-8 h-8 rounded-full bg-white/20 hover:bg-[#D4A72C] hover:text-[#4B1F6F] flex items-center justify-center text-xs transition active:scale-95"
                            title={isVideoPlaying ? "Pause Video" : "Play Video"}
                          >
                            <i className={`fa-solid ${isVideoPlaying ? 'fa-pause' : 'fa-play ml-0.5'}`}></i>
                          </button>
                          <span className="text-[11px] font-bold text-gray-200">
                            {isVideoPlaying ? 'Campus Video • Playing' : 'Paused'}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={toggleVideoMute}
                            className={`px-3 py-1 rounded-full flex items-center gap-1.5 text-xs font-bold transition active:scale-95 ${
                              isMuted 
                                ? 'bg-amber-500 hover:bg-amber-600 text-black' 
                                : 'bg-[#4B1F6F] hover:bg-[#6B2E9C] text-[#F3D98B] border border-[#D4A72C]/50'
                            }`}
                            title={isMuted ? "Unmute Audio" : "Mute Audio"}
                          >
                            <i className={`fa-solid ${isMuted ? 'fa-volume-xmark text-black' : 'fa-volume-high text-[#F3D98B]'}`}></i>
                            <span className="hidden xs:inline">{isMuted ? 'Muted' : 'Positive Music ON ♫'}</span>
                          </button>
                          <button
                            type="button"
                            onClick={toggleVideoFullscreen}
                            className="w-8 h-8 rounded-full bg-white/20 hover:bg-[#D4A72C] hover:text-[#4B1F6F] flex items-center justify-center text-xs transition active:scale-95"
                            title="Fullscreen"
                          >
                            <i className="fa-solid fa-expand"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Sub-bar below video with title and music badge */}
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs px-1">
                  <span className="flex items-center gap-1.5 font-bold text-[#4B1F6F]">
                    <i className="fa-solid fa-video text-[#D4A72C]"></i>
                    <span>Campus Video (1:15 min)</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-[#241300] bg-amber-50 font-bold px-3 py-1 rounded-full border border-amber-200/80 shadow-xs">
                    <i className="fa-solid fa-music text-[#D4A72C]"></i> Positive Vibe Background Music
                  </span>
                </div>

                {/* Philosophy Floating Badge */}
                <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-[#4B1F6F] text-white p-4 sm:p-5 rounded-2xl shadow-xl hidden sm:block max-w-[210px] border border-purple-400/30 z-20 backdrop-blur-sm">
                  <p className="text-[10px] font-semibold text-[#F3D98B] uppercase tracking-wider mb-0.5">Our Philosophy</p>
                  <p className="text-xs sm:text-sm font-bold leading-snug">"Premium Learning. Joyful Childhood."</p>
                </div>
              </div>
            </div>

            {/* Split Layout: Short Introduction & Button */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <span className="purple-badge inline-flex items-center gap-2">
                <i className="fa-solid fa-heart text-[#D4A72C]"></i> Welcome to Ryans Academy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B1F6F] leading-tight">
                Where Curiosity Blossoms Into Lifelong Excellence
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                At Ryans Academy, we believe education should ignite wonder while building solid cognitive and character foundations. Our campus harmoniously pairs academic discipline with creative warmth, empowering children to think critically, speak confidently, and express joyfully.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                With modern child-centric classrooms, experienced educators, activity centers, and CBSE curriculum alignment, Ryans Academy provides the safe, enriching environment parents trust and children love.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <Link to="/about" className="btn-purple">
                  Discover Our School <i className="fa-solid fa-arrow-right text-xs"></i>
                </Link>
                <button className="btn-outline-gold" onClick={() => openModal("Play Group", "visit")}>
                  <i className="fa-regular fa-calendar-check"></i> Schedule Campus Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: 6 Core Pillars of Ryans Academy (3D Clay Interactive Section) */}
      <section className="pt-6 pb-10 sm:pt-8 sm:pb-12 relative overflow-hidden bg-gradient-to-b from-[#FAF8F4] via-white to-[#FAF8F4] border-b border-purple-100/60" id="pillars">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 reveal-on-scroll">
            <span className="gold-badge mb-2.5 animate-pulse-subtle">
              <i className="fa-solid fa-shapes text-[10px]"></i> Foundational Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4B1F6F] leading-tight">
              Why Choose <span className="text-[#D4A72C] font-serif italic">Ryans Academy?</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2.5 leading-relaxed font-medium">
              Six core pillars of care, playful exploration, and inspiring mentorship that build happy, confident young achievers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {/* Pillar 1 */}
            <div className="pillar-card reveal-on-scroll stagger-1">
              <div className="pillar-icon-wrapper animate-pillar-float-1">
                <img src="/assets/pillar_1.png" alt="Safe & Secure Environment" className="pillar-icon-img" loading="lazy" />
              </div>
              <h3 className="font-extrabold text-xs sm:text-sm tracking-wide text-[#4B1F6F] uppercase mb-1.5 leading-snug">
                Safe & Secure<br />Environment
              </h3>
              <p className="text-[11px] sm:text-xs text-gray-500 font-medium leading-relaxed">
                A safe and caring environment for your child.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="pillar-card reveal-on-scroll stagger-2">
              <div className="pillar-icon-wrapper animate-pillar-float-2">
                <img src="/assets/pillar_2.png" alt="Play Based Learning" className="pillar-icon-img" loading="lazy" />
              </div>
              <h3 className="font-extrabold text-xs sm:text-sm tracking-wide text-[#D97706] uppercase mb-1.5 leading-snug">
                Play Based<br />Learning
              </h3>
              <p className="text-[11px] sm:text-xs text-gray-500 font-medium leading-relaxed">
                Learning through play, fun and exploration.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="pillar-card reveal-on-scroll stagger-3">
              <div className="pillar-icon-wrapper animate-pillar-float-3">
                <img src="/assets/pillar_3.png" alt="Experienced Teachers" className="pillar-icon-img" loading="lazy" />
              </div>
              <h3 className="font-extrabold text-xs sm:text-sm tracking-wide text-[#E11D48] uppercase mb-1.5 leading-snug">
                Experienced<br />Teachers
              </h3>
              <p className="text-[11px] sm:text-xs text-gray-500 font-medium leading-relaxed">
                Trained and loving teachers who nurture growth.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="pillar-card reveal-on-scroll stagger-4">
              <div className="pillar-icon-wrapper animate-pillar-float-4">
                <img src="/assets/pillar_4.png" alt="Creative Activities" className="pillar-icon-img" loading="lazy" />
              </div>
              <h3 className="font-extrabold text-xs sm:text-sm tracking-wide text-[#059669] uppercase mb-1.5 leading-snug">
                Creative<br />Activities
              </h3>
              <p className="text-[11px] sm:text-xs text-gray-500 font-medium leading-relaxed">
                Art, music, dance and activities for holistic growth.
              </p>
            </div>

            {/* Pillar 5 */}
            <div className="pillar-card reveal-on-scroll stagger-5">
              <div className="pillar-icon-wrapper animate-pillar-float-5">
                <img src="/assets/pillar_5.png" alt="Individual Attention" className="pillar-icon-img" loading="lazy" />
              </div>
              <h3 className="font-extrabold text-xs sm:text-sm tracking-wide text-[#7C3AED] uppercase mb-1.5 leading-snug">
                Individual<br />Attention
              </h3>
              <p className="text-[11px] sm:text-xs text-gray-500 font-medium leading-relaxed">
                Personal care and attention to every child.
              </p>
            </div>

            {/* Pillar 6 */}
            <div className="pillar-card reveal-on-scroll stagger-6">
              <div className="pillar-icon-wrapper animate-pillar-float-6">
                <img src="/assets/pillar_6.png" alt="Modern Facilities" className="pillar-icon-img" loading="lazy" />
              </div>
              <h3 className="font-extrabold text-xs sm:text-sm tracking-wide text-[#0284C7] uppercase mb-1.5 leading-snug">
                Modern<br />Facilities
              </h3>
              <p className="text-[11px] sm:text-xs text-gray-500 font-medium leading-relaxed">
                Bright classrooms and child-friendly infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: "Every Child Has a Unique Spark" (Zero-Repeat Authentic Imagery) */}
      <section className="pt-8 pb-10 sm:pt-10 sm:pb-12 bg-[#F1EAF7]/60 border-y border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="gold-badge mb-2.5">Unique Development Program</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B1F6F]">Every Child Has a Unique Spark</h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2.5">We recognize and nurture the distinct strengths, interests, and natural abilities of each child.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Spark Selector Buttons */}
            <div className="lg:col-span-5 space-y-3.5">
              {/* Tab 1: Creative Child */}
              <button 
                onClick={() => setActiveSparkTab('spark-creative')}
                className={`spark-tab-btn w-full text-left group transition-all duration-300 ${activeSparkTab === 'spark-creative' ? 'active ring-2 ring-[#D4A72C]' : ''}`}
              >
                <div className="spark-icon-box bg-gradient-to-br from-[#D4A72C] to-[#E67E22] text-white shadow-md shadow-amber-500/25">
                  <i className="fa-solid fa-palette"></i>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#D4A72C] bg-[#FDF8E7] px-2 py-0.5 rounded-full inline-block border border-amber-200/50">
                      Visual Arts
                    </span>
                  </div>
                  <h4 className="font-extrabold text-sm sm:text-base text-[#4B1F6F] leading-tight group-hover:text-[#D4A72C] transition-colors">
                    The Creative Child
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-500 font-medium truncate mt-0.5">
                    Colours Day arts, imaginative crafts, story illustration
                  </p>
                </div>
                <i className={`fa-solid fa-chevron-right spark-chevron ${activeSparkTab === 'spark-creative' ? 'text-[#D4A72C] translate-x-1' : ''}`}></i>
              </button>

              {/* Tab 2: Curious Learner */}
              <button 
                onClick={() => setActiveSparkTab('spark-curious')}
                className={`spark-tab-btn w-full text-left group transition-all duration-300 ${activeSparkTab === 'spark-curious' ? 'active ring-2 ring-[#4B1F6F]' : ''}`}
              >
                <div className="spark-icon-box bg-gradient-to-br from-[#4B1F6F] to-[#6B3A8D] text-white shadow-md shadow-purple-900/25">
                  <i className="fa-solid fa-atom"></i>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#4B1F6F] bg-[#F1EAF7] px-2 py-0.5 rounded-full inline-block border border-purple-200/50">
                      STEM & Wonder
                    </span>
                  </div>
                  <h4 className="font-extrabold text-sm sm:text-base text-[#4B1F6F] leading-tight group-hover:text-[#6B3A8D] transition-colors">
                    The Curious Learner
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-500 font-medium truncate mt-0.5">
                    Science discovery, math puzzles, nature labs
                  </p>
                </div>
                <i className={`fa-solid fa-chevron-right spark-chevron ${activeSparkTab === 'spark-curious' ? 'text-[#4B1F6F] translate-x-1' : ''}`}></i>
              </button>

              {/* Tab 3: Confident Speaker */}
              <button 
                onClick={() => setActiveSparkTab('spark-speaker')}
                className={`spark-tab-btn w-full text-left group transition-all duration-300 ${activeSparkTab === 'spark-speaker' ? 'active ring-2 ring-[#E11D48]' : ''}`}
              >
                <div className="spark-icon-box bg-gradient-to-br from-[#E11D48] to-[#F43F5E] text-white shadow-md shadow-rose-500/25">
                  <i className="fa-solid fa-microphone-lines"></i>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#E11D48] bg-rose-50 px-2 py-0.5 rounded-full inline-block border border-rose-200/50">
                      Speech & Phonics
                    </span>
                  </div>
                  <h4 className="font-extrabold text-sm sm:text-base text-[#4B1F6F] leading-tight group-hover:text-[#E11D48] transition-colors">
                    The Confident Speaker
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-500 font-medium truncate mt-0.5">
                    Phonics, public speaking, show-and-tell
                  </p>
                </div>
                <i className={`fa-solid fa-chevron-right spark-chevron ${activeSparkTab === 'spark-speaker' ? 'text-[#E11D48] translate-x-1' : ''}`}></i>
              </button>

              {/* Tab 4: Active Child */}
              <button 
                onClick={() => setActiveSparkTab('spark-active')}
                className={`spark-tab-btn w-full text-left group transition-all duration-300 ${activeSparkTab === 'spark-active' ? 'active ring-2 ring-[#059669]' : ''}`}
              >
                <div className="spark-icon-box bg-gradient-to-br from-[#059669] to-[#10B981] text-white shadow-md shadow-emerald-500/25">
                  <i className="fa-solid fa-person-running"></i>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#059669] bg-emerald-50 px-2 py-0.5 rounded-full inline-block border border-emerald-200/50">
                      Vitality & Sports
                    </span>
                  </div>
                  <h4 className="font-extrabold text-sm sm:text-base text-[#4B1F6F] leading-tight group-hover:text-[#059669] transition-colors">
                    The Active Child
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-500 font-medium truncate mt-0.5">
                    Athletics, gross motor skills, teamwork sports
                  </p>
                </div>
                <i className={`fa-solid fa-chevron-right spark-chevron ${activeSparkTab === 'spark-active' ? 'text-[#059669] translate-x-1' : ''}`}></i>
              </button>

              {/* Tab 5: Talented Performer */}
              <button 
                onClick={() => setActiveSparkTab('spark-performer')}
                className={`spark-tab-btn w-full text-left group transition-all duration-300 ${activeSparkTab === 'spark-performer' ? 'active ring-2 ring-[#7C3AED]' : ''}`}
              >
                <div className="spark-icon-box bg-gradient-to-br from-[#7C3AED] to-[#9333EA] text-white shadow-md shadow-purple-600/25">
                  <i className="fa-solid fa-masks-theater"></i>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#7C3AED] bg-purple-50 px-2 py-0.5 rounded-full inline-block border border-purple-200/50">
                      Stage Poise & Rhythm
                    </span>
                  </div>
                  <h4 className="font-extrabold text-sm sm:text-base text-[#4B1F6F] leading-tight group-hover:text-[#7C3AED] transition-colors">
                    The Talented Performer
                  </h4>
                  <p className="text-[11px] sm:text-xs text-gray-500 font-medium truncate mt-0.5">
                    Dance, rhythm, theatre, stage expression
                  </p>
                </div>
                <i className={`fa-solid fa-chevron-right spark-chevron ${activeSparkTab === 'spark-performer' ? 'text-[#7C3AED] translate-x-1' : ''}`}></i>
              </button>
            </div>

            {/* Right: Spark Details Cards with Real School Imagery */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-purple-100 shadow-lg">
              {/* Detail 1: Creative Child (Colours Day Art) */}
              {activeSparkTab === 'spark-creative' && (
                <div className="spark-detail-content space-y-4 animate-in fade-in duration-300">
                  <div 
                    className="relative h-80 sm:h-96 md:h-[400px] rounded-3xl overflow-hidden mb-6 border-2 border-[#D4A72C]/40 bg-gradient-to-r from-[#210936] via-[#3a1458] to-[#210936] shadow-2xl flex items-center justify-center group cursor-pointer"
                    onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/colours_day/colours_day_06.jpg', title: 'Creative Child - Freeform Colours Day Arts', category: 'Visual Arts' })}
                  >
                    <img src="/asssssetss_opt/colours_day/colours_day_06.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover filter blur-3xl opacity-50 scale-125 pointer-events-none" />
                    <div className="absolute inset-0 bg-[radial-gradient(#D4A72C_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none"></div>

                    {/* Left Flank Design */}
                    <div className="absolute top-3 left-3 w-7 h-7 border-t-2 border-l-2 border-[#D4A72C] rounded-tl-xl pointer-events-none z-20"></div>
                    <div className="absolute bottom-3 left-3 w-7 h-7 border-b-2 border-l-2 border-[#D4A72C] rounded-bl-xl pointer-events-none z-20"></div>
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-2 z-20 bg-black/45 backdrop-blur-md px-2.5 py-4 rounded-full border border-[#D4A72C]/40 shadow-xl">
                      <i className="fa-solid fa-palette text-[#F3D98B] text-xs"></i>
                      <span className="text-[9px] font-black tracking-widest text-[#F3D98B] [writing-mode:vertical-rl] rotate-180 uppercase select-none">
                        Creative Arts
                      </span>
                      <i className="fa-solid fa-sparkles text-[#D4A72C] text-[10px]"></i>
                    </div>

                    {/* Right Flank Design */}
                    <div className="absolute top-3 right-3 w-7 h-7 border-t-2 border-r-2 border-[#D4A72C] rounded-tr-xl pointer-events-none z-20"></div>
                    <div className="absolute bottom-3 right-3 w-7 h-7 border-b-2 border-r-2 border-[#D4A72C] rounded-br-xl pointer-events-none z-20"></div>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-2 z-20 bg-black/45 backdrop-blur-md px-2.5 py-4 rounded-full border border-[#D4A72C]/40 shadow-xl">
                      <i className="fa-solid fa-crown text-[#F3D98B] text-xs"></i>
                      <span className="text-[9px] font-black tracking-widest text-[#F3D98B] [writing-mode:vertical-rl] uppercase select-none">
                        Excellence
                      </span>
                      <i className="fa-solid fa-star text-[#D4A72C] text-[10px]"></i>
                    </div>

                    {/* Center Framed Photo */}
                    <div className="relative z-10 h-full max-h-full py-3 px-3 sm:px-14 flex items-center justify-center">
                      <img src="/asssssetss_opt/colours_day/colours_day_06.jpg" alt="Colours Day Art at Ryans" className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl border-2 border-[#D4A72C]/80 ring-4 ring-black/40 group-hover:scale-[1.02] transition-transform duration-300" />
                    </div>

                    {/* Top Right Fullscreen Button */}
                    <div className="absolute top-3.5 right-3.5 z-20 bg-[#4B1F6F]/90 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity shadow-lg border border-purple-300/30">
                      <i className="fa-solid fa-expand text-[#F3D98B] text-xs"></i>
                      <span>View Fullscreen</span>
                    </div>

                    {/* Bottom Center Pill */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 bg-[#4B1F6F]/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#D4A72C]/60 text-white text-[10px] sm:text-[11px] font-bold shadow-xl flex items-center gap-1.5 whitespace-nowrap">
                      <i className="fa-solid fa-circle-check text-[#D4A72C]"></i>
                      <span>Authentic Student Achievement</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#4B1F6F]">Nurturing the Creative Child</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">
                    Through guided painting, sculpture, and sensory materials during celebrations like Colours Day, children learn to translate their innermost thoughts into expressive creations.
                  </p>
                  <ul className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-700 pt-2">
                    <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Freeform Canvas Art</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Clay & Origami Crafting</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Annual Art Showcase</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Sensory Texture Exploration</li>
                  </ul>
                </div>
              )}

              {/* Detail 2: Curious Learner */}
              {activeSparkTab === 'spark-curious' && (
                <div className="spark-detail-content space-y-4 animate-in fade-in duration-300">
                  <div 
                    className="relative h-80 sm:h-96 md:h-[400px] rounded-3xl overflow-hidden mb-6 border-2 border-[#D4A72C]/40 bg-gradient-to-r from-[#210936] via-[#3a1458] to-[#210936] shadow-2xl flex items-center justify-center group cursor-pointer"
                    onClick={() => setSelectedPhoto({ src: '/assets/DSC_0162.jpg', title: 'Curious Learner - Hands-on Discovery Labs', category: 'STEM & Wonder' })}
                  >
                    <img src="/assets/DSC_0162.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover filter blur-3xl opacity-50 scale-125 pointer-events-none" />
                    <div className="absolute inset-0 bg-[radial-gradient(#D4A72C_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none"></div>

                    {/* Left Flank */}
                    <div className="absolute top-3 left-3 w-7 h-7 border-t-2 border-l-2 border-[#D4A72C] rounded-tl-xl pointer-events-none z-20"></div>
                    <div className="absolute bottom-3 left-3 w-7 h-7 border-b-2 border-l-2 border-[#D4A72C] rounded-bl-xl pointer-events-none z-20"></div>
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-2 z-20 bg-black/45 backdrop-blur-md px-2.5 py-4 rounded-full border border-[#D4A72C]/40 shadow-xl">
                      <i className="fa-solid fa-atom text-[#F3D98B] text-xs"></i>
                      <span className="text-[9px] font-black tracking-widest text-[#F3D98B] [writing-mode:vertical-rl] rotate-180 uppercase select-none">
                        STEM Wonder
                      </span>
                      <i className="fa-solid fa-sparkles text-[#D4A72C] text-[10px]"></i>
                    </div>

                    {/* Right Flank */}
                    <div className="absolute top-3 right-3 w-7 h-7 border-t-2 border-r-2 border-[#D4A72C] rounded-tr-xl pointer-events-none z-20"></div>
                    <div className="absolute bottom-3 right-3 w-7 h-7 border-b-2 border-r-2 border-[#D4A72C] rounded-br-xl pointer-events-none z-20"></div>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-2 z-20 bg-black/45 backdrop-blur-md px-2.5 py-4 rounded-full border border-[#D4A72C]/40 shadow-xl">
                      <i className="fa-solid fa-award text-[#F3D98B] text-xs"></i>
                      <span className="text-[9px] font-black tracking-widest text-[#F3D98B] [writing-mode:vertical-rl] uppercase select-none">
                        Discovery
                      </span>
                      <i className="fa-solid fa-star text-[#D4A72C] text-[10px]"></i>
                    </div>

                    {/* Center Image */}
                    <div className="relative z-10 h-full max-h-full py-3 px-3 sm:px-14 flex items-center justify-center">
                      <img src="/assets/DSC_0162.jpg" alt="Curious science and discovery" className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl border-2 border-[#D4A72C]/80 ring-4 ring-black/40 group-hover:scale-[1.02] transition-transform duration-300" />
                    </div>

                    {/* Top Right Fullscreen Button */}
                    <div className="absolute top-3.5 right-3.5 z-20 bg-[#4B1F6F]/90 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity shadow-lg border border-purple-300/30">
                      <i className="fa-solid fa-expand text-[#F3D98B] text-xs"></i>
                      <span>View Fullscreen</span>
                    </div>

                    {/* Bottom Center Pill */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 bg-[#4B1F6F]/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#D4A72C]/60 text-white text-[10px] sm:text-[11px] font-bold shadow-xl flex items-center gap-1.5 whitespace-nowrap">
                      <i className="fa-solid fa-circle-check text-[#D4A72C]"></i>
                      <span>Authentic Student Achievement</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#4B1F6F]">Igniting the Curious Learner</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">
                    Children are natural scientists. Our STEM discovery corners, nature observation modules, and interactive lab sessions encourage students to ask 'why' and test their ideas with confidence.
                  </p>
                  <ul className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-700 pt-2">
                    <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Wonder Lab Experiments</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Math Manipulatives</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Abacus Foundations</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Botanical Garden Walks</li>
                  </ul>
                </div>
              )}

              {/* Detail 3: Confident Speaker */}
              {activeSparkTab === 'spark-speaker' && (
                <div className="spark-detail-content space-y-4 animate-in fade-in duration-300">
                  <div 
                    className="relative h-80 sm:h-96 md:h-[400px] rounded-3xl overflow-hidden mb-6 border-2 border-[#D4A72C]/40 bg-gradient-to-r from-[#210936] via-[#3a1458] to-[#210936] shadow-2xl flex items-center justify-center group cursor-pointer"
                    onClick={() => setSelectedPhoto({ src: '/assets/DSC_0312.jpg', title: 'Confident Speaker - Phonics & Show-and-Tell Podiums', category: 'Speech & Phonics' })}
                  >
                    <img src="/assets/DSC_0312.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover filter blur-3xl opacity-50 scale-125 pointer-events-none" />
                    <div className="absolute inset-0 bg-[radial-gradient(#D4A72C_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none"></div>

                    {/* Left Flank */}
                    <div className="absolute top-3 left-3 w-7 h-7 border-t-2 border-l-2 border-[#D4A72C] rounded-tl-xl pointer-events-none z-20"></div>
                    <div className="absolute bottom-3 left-3 w-7 h-7 border-b-2 border-l-2 border-[#D4A72C] rounded-bl-xl pointer-events-none z-20"></div>
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-2 z-20 bg-black/45 backdrop-blur-md px-2.5 py-4 rounded-full border border-[#D4A72C]/40 shadow-xl">
                      <i className="fa-solid fa-microphone-lines text-[#F3D98B] text-xs"></i>
                      <span className="text-[9px] font-black tracking-widest text-[#F3D98B] [writing-mode:vertical-rl] rotate-180 uppercase select-none">
                        Oratory Skill
                      </span>
                      <i className="fa-solid fa-sparkles text-[#D4A72C] text-[10px]"></i>
                    </div>

                    {/* Right Flank */}
                    <div className="absolute top-3 right-3 w-7 h-7 border-t-2 border-r-2 border-[#D4A72C] rounded-tr-xl pointer-events-none z-20"></div>
                    <div className="absolute bottom-3 right-3 w-7 h-7 border-b-2 border-r-2 border-[#D4A72C] rounded-br-xl pointer-events-none z-20"></div>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-2 z-20 bg-black/45 backdrop-blur-md px-2.5 py-4 rounded-full border border-[#D4A72C]/40 shadow-xl">
                      <i className="fa-solid fa-award text-[#F3D98B] text-xs"></i>
                      <span className="text-[9px] font-black tracking-widest text-[#F3D98B] [writing-mode:vertical-rl] uppercase select-none">
                        Confidence
                      </span>
                      <i className="fa-solid fa-star text-[#D4A72C] text-[10px]"></i>
                    </div>

                    {/* Center Image */}
                    <div className="relative z-10 h-full max-h-full py-3 px-3 sm:px-14 flex items-center justify-center">
                      <img src="/assets/DSC_0312.jpg" alt="Public speaking and presentation" className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl border-2 border-[#D4A72C]/80 ring-4 ring-black/40 group-hover:scale-[1.02] transition-transform duration-300" />
                    </div>

                    {/* Top Right Fullscreen Button */}
                    <div className="absolute top-3.5 right-3.5 z-20 bg-[#4B1F6F]/90 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity shadow-lg border border-purple-300/30">
                      <i className="fa-solid fa-expand text-[#F3D98B] text-xs"></i>
                      <span>View Fullscreen</span>
                    </div>

                    {/* Bottom Center Pill */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 bg-[#4B1F6F]/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#D4A72C]/60 text-white text-[10px] sm:text-[11px] font-bold shadow-xl flex items-center gap-1.5 whitespace-nowrap">
                      <i className="fa-solid fa-circle-check text-[#D4A72C]"></i>
                      <span>Authentic Student Achievement</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#4B1F6F]">Empowering the Confident Speaker</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">
                    Strong communication opens every door in life. Ryans Academy introduces structured phonetics, daily circle-time sharing, and stage presentation from early childhood.
                  </p>
                  <ul className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-700 pt-2">
                    <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Jolly Phonics Curriculum</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Show & Tell Sessions</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Morning Assembly Podiums</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Recitation & Debates</li>
                  </ul>
                </div>
              )}

              {/* Detail 4: Active Child */}
              {activeSparkTab === 'spark-active' && (
                <div className="spark-detail-content space-y-4 animate-in fade-in duration-300">
                  <div 
                    className="relative h-80 sm:h-96 md:h-[400px] rounded-3xl overflow-hidden mb-6 border-2 border-[#D4A72C]/40 bg-gradient-to-r from-[#210936] via-[#3a1458] to-[#210936] shadow-2xl flex items-center justify-center group cursor-pointer"
                    onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/competition/competition_08.jpg', title: 'Athletic Excellence & Championship Pride', category: 'Vitality & Sports' })}
                  >
                    <img src="/asssssetss_opt/competition/competition_08.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover filter blur-3xl opacity-50 scale-125 pointer-events-none" />
                    <div className="absolute inset-0 bg-[radial-gradient(#D4A72C_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none"></div>

                    {/* Left Flank */}
                    <div className="absolute top-3 left-3 w-7 h-7 border-t-2 border-l-2 border-[#D4A72C] rounded-tl-xl pointer-events-none z-20"></div>
                    <div className="absolute bottom-3 left-3 w-7 h-7 border-b-2 border-l-2 border-[#D4A72C] rounded-bl-xl pointer-events-none z-20"></div>
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-2 z-20 bg-black/45 backdrop-blur-md px-2.5 py-4 rounded-full border border-[#D4A72C]/40 shadow-xl">
                      <i className="fa-solid fa-person-running text-[#F3D98B] text-xs"></i>
                      <span className="text-[9px] font-black tracking-widest text-[#F3D98B] [writing-mode:vertical-rl] rotate-180 uppercase select-none">
                        Sports Agility
                      </span>
                      <i className="fa-solid fa-sparkles text-[#D4A72C] text-[10px]"></i>
                    </div>

                    {/* Right Flank */}
                    <div className="absolute top-3 right-3 w-7 h-7 border-t-2 border-r-2 border-[#D4A72C] rounded-tr-xl pointer-events-none z-20"></div>
                    <div className="absolute bottom-3 right-3 w-7 h-7 border-b-2 border-r-2 border-[#D4A72C] rounded-br-xl pointer-events-none z-20"></div>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-2 z-20 bg-black/45 backdrop-blur-md px-2.5 py-4 rounded-full border border-[#D4A72C]/40 shadow-xl">
                      <i className="fa-solid fa-trophy text-[#F3D98B] text-xs"></i>
                      <span className="text-[9px] font-black tracking-widest text-[#F3D98B] [writing-mode:vertical-rl] uppercase select-none">
                        Champion
                      </span>
                      <i className="fa-solid fa-star text-[#D4A72C] text-[10px]"></i>
                    </div>

                    {/* Center Image: Uncropped Full Subject */}
                    <div className="relative z-10 h-full max-h-full py-3 px-3 sm:px-14 flex items-center justify-center">
                      <img src="/asssssetss_opt/competition/competition_08.jpg" alt="Athletic Excellence at Ryans" className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl border-2 border-[#D4A72C]/80 ring-4 ring-black/40 group-hover:scale-[1.02] transition-transform duration-300" />
                    </div>

                    {/* Top Right Fullscreen Button */}
                    <div className="absolute top-3.5 right-3.5 z-20 bg-[#4B1F6F]/90 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity shadow-lg border border-purple-300/30">
                      <i className="fa-solid fa-expand text-[#F3D98B] text-xs"></i>
                      <span>View Fullscreen</span>
                    </div>

                    {/* Bottom Center Pill */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 bg-[#4B1F6F]/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#D4A72C]/60 text-white text-[10px] sm:text-[11px] font-bold shadow-xl flex items-center gap-1.5 whitespace-nowrap">
                      <i className="fa-solid fa-circle-check text-[#D4A72C]"></i>
                      <span>Authentic Student Achievement</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#4B1F6F]">Energizing the Active Child</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">
                    Physical vitality supports sharp intellects. Our sports curriculum emphasizes gross motor coordination, balance, athletic sportsmanship, and outdoor agility.
                  </p>
                  <ul className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-700 pt-2">
                    <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Structured PE Drills</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Annual Sports Velocity Fest</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Safe Playground Play</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Yoga & Aerobics</li>
                  </ul>
                </div>
              )}

              {/* Detail 5: Talented Performer */}
              {activeSparkTab === 'spark-performer' && (
                <div className="spark-detail-content space-y-4 animate-in fade-in duration-300">
                  <div 
                    className="relative h-80 sm:h-96 md:h-[400px] rounded-3xl overflow-hidden mb-6 border-2 border-[#D4A72C]/40 bg-gradient-to-r from-[#210936] via-[#3a1458] to-[#210936] shadow-2xl flex items-center justify-center group cursor-pointer"
                    onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/annual_day/annual_day_10.jpg', title: 'Talented Performer - Annual Gala Stage Elegance', category: 'Stage Poise & Rhythm' })}
                  >
                    <img src="/asssssetss_opt/annual_day/annual_day_10.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover filter blur-3xl opacity-50 scale-125 pointer-events-none" />
                    <div className="absolute inset-0 bg-[radial-gradient(#D4A72C_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none"></div>

                    {/* Left Flank */}
                    <div className="absolute top-3 left-3 w-7 h-7 border-t-2 border-l-2 border-[#D4A72C] rounded-tl-xl pointer-events-none z-20"></div>
                    <div className="absolute bottom-3 left-3 w-7 h-7 border-b-2 border-l-2 border-[#D4A72C] rounded-bl-xl pointer-events-none z-20"></div>
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-2 z-20 bg-black/45 backdrop-blur-md px-2.5 py-4 rounded-full border border-[#D4A72C]/40 shadow-xl">
                      <i className="fa-solid fa-masks-theater text-[#F3D98B] text-xs"></i>
                      <span className="text-[9px] font-black tracking-widest text-[#F3D98B] [writing-mode:vertical-rl] rotate-180 uppercase select-none">
                        Stage Poise
                      </span>
                      <i className="fa-solid fa-sparkles text-[#D4A72C] text-[10px]"></i>
                    </div>

                    {/* Right Flank */}
                    <div className="absolute top-3 right-3 w-7 h-7 border-t-2 border-r-2 border-[#D4A72C] rounded-tr-xl pointer-events-none z-20"></div>
                    <div className="absolute bottom-3 right-3 w-7 h-7 border-b-2 border-r-2 border-[#D4A72C] rounded-br-xl pointer-events-none z-20"></div>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-2 z-20 bg-black/45 backdrop-blur-md px-2.5 py-4 rounded-full border border-[#D4A72C]/40 shadow-xl">
                      <i className="fa-solid fa-star text-[#F3D98B] text-xs"></i>
                      <span className="text-[9px] font-black tracking-widest text-[#F3D98B] [writing-mode:vertical-rl] uppercase select-none">
                        Performer
                      </span>
                      <i className="fa-solid fa-crown text-[#D4A72C] text-[10px]"></i>
                    </div>

                    {/* Center Image */}
                    <div className="relative z-10 h-full max-h-full py-3 px-3 sm:px-14 flex items-center justify-center">
                      <img src="/asssssetss_opt/annual_day/annual_day_10.jpg" alt="Talented stage performers at Ryans" className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl border-2 border-[#D4A72C]/80 ring-4 ring-black/40 group-hover:scale-[1.02] transition-transform duration-300" />
                    </div>

                    {/* Top Right Fullscreen Button */}
                    <div className="absolute top-3.5 right-3.5 z-20 bg-[#4B1F6F]/90 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity shadow-lg border border-purple-300/30">
                      <i className="fa-solid fa-expand text-[#F3D98B] text-xs"></i>
                      <span>View Fullscreen</span>
                    </div>

                    {/* Bottom Center Pill */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 bg-[#4B1F6F]/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#D4A72C]/60 text-white text-[10px] sm:text-[11px] font-bold shadow-xl flex items-center gap-1.5 whitespace-nowrap">
                      <i className="fa-solid fa-circle-check text-[#D4A72C]"></i>
                      <span>Authentic Student Achievement</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#4B1F6F]">Inspiring the Talented Performer</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">
                    Through theatrical performances, musical choirs, and classical dance in grand galas like RYANOVA, every child gains stage poise and radiant confidence.
                  </p>
                  <ul className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-700 pt-2">
                    <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Annual RYANOVA Gala</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Dance & Rhythm Classes</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Musical Expressions</li>
                    <li className="flex items-center gap-2"><i className="fa-solid fa-circle-check text-[#D4A72C]"></i> Skits & Dramatic Play</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Our Programs (5 Distinct Age-Specific Levels) */}
      <section className="pt-8 pb-8 sm:pt-10 sm:pb-8 bg-white border-t border-purple-50" id="programs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-7">
            <div>
              <span className="purple-badge mb-2">Age-Specific Excellence</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B1F6F]">Our Academic Programs</h2>
              <p className="text-gray-600 text-sm sm:text-base mt-2">Comprehensive learning stages tailored to each critical developmental milestone.</p>
            </div>
            <Link to="/programs" className="btn-outline-purple text-xs font-bold mt-4 md:mt-0 self-start md:self-auto">
              View Full Curriculum <i className="fa-solid fa-arrow-right ml-1"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Program 1: Play Group */}
            <div className="premium-card card-interactive-lift overflow-hidden flex flex-col reveal-on-scroll">
              <div className="h-44 overflow-hidden relative">
                <img src="/assets/playgroup.jpg" alt="Play Group at Ryans" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-[#4B1F6F] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full">1.5 – 2.5 Yrs</span>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h4 className="font-bold text-lg text-[#4B1F6F] mb-1">Play Group</h4>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed font-medium flex-grow">Sensory exploration, gentle socialization, joyful rhyme sessions, and gross motor play.</p>
                <Link to="/programs#playgroup" className="text-xs font-bold text-[#D4A72C] hover:text-[#4B1F6F] transition flex items-center gap-1 mt-auto">
                  Learn More <i className="fa-solid fa-chevron-right text-[10px]"></i>
                </Link>
              </div>
            </div>

            {/* Program 2: Pre-KG */}
            <div className="premium-card card-interactive-lift overflow-hidden flex flex-col reveal-on-scroll">
              <div className="h-44 overflow-hidden relative">
                <img src="/assets/nursery.jpg" alt="Pre-KG at Ryans" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-[#4B1F6F] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full">2.5 – 3.5 Yrs</span>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h4 className="font-bold text-lg text-[#4B1F6F] mb-1">Pre-KG</h4>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed font-medium flex-grow">Vocabulary expansion, self-expression, color recognition, and Montessori manipulative tools.</p>
                <Link to="/programs#prekg" className="text-xs font-bold text-[#D4A72C] hover:text-[#4B1F6F] transition flex items-center gap-1 mt-auto">
                  Learn More <i className="fa-solid fa-chevron-right text-[10px]"></i>
                </Link>
              </div>
            </div>

            {/* Program 3: LKG */}
            <div className="premium-card card-interactive-lift overflow-hidden flex flex-col reveal-on-scroll">
              <div className="h-44 overflow-hidden relative">
                <img src="/assets/juniorkg.jpg" alt="LKG at Ryans" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-[#4B1F6F] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full">3.5 – 4.5 Yrs</span>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h4 className="font-bold text-lg text-[#4B1F6F] mb-1">LKG</h4>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed font-medium flex-grow">Foundational phonics reading, writing readiness, pre-math logic, and creative storytelling.</p>
                <Link to="/programs#lkg" className="text-xs font-bold text-[#D4A72C] hover:text-[#4B1F6F] transition flex items-center gap-1 mt-auto">
                  Learn More <i className="fa-solid fa-chevron-right text-[10px]"></i>
                </Link>
              </div>
            </div>

            {/* Program 4: UKG */}
            <div className="premium-card card-interactive-lift overflow-hidden flex flex-col reveal-on-scroll">
              <div className="h-44 overflow-hidden relative">
                <img src="/assets/seniorkg.jpg" alt="UKG at Ryans" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-[#4B1F6F] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full">4.5 – 5.5 Yrs</span>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h4 className="font-bold text-lg text-[#4B1F6F] mb-1">UKG</h4>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed font-medium flex-grow">Sentence construction, mental arithmetic, science exploration, and school readiness habits.</p>
                <Link to="/programs#ukg" className="text-xs font-bold text-[#D4A72C] hover:text-[#4B1F6F] transition flex items-center gap-1 mt-auto">
                  Learn More <i className="fa-solid fa-chevron-right text-[10px]"></i>
                </Link>
              </div>
            </div>

            {/* Program 5: Graders */}
            <div className="premium-card card-interactive-lift overflow-hidden flex flex-col reveal-on-scroll">
              <div className="h-44 overflow-hidden relative">
                <img src="/assets/DSC_0001.jpg" alt="Primary Graders at Ryans" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-[#D4A72C] text-[#3b2408] text-[10px] font-extrabold px-2.5 py-1 rounded-full">Primary CBSE</span>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h4 className="font-bold text-lg text-[#4B1F6F] mb-1">Graders</h4>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed font-medium flex-grow">CBSE curriculum syllabus, computer science, Abacus math, leadership, and sports mastery.</p>
                <Link to="/programs#graders" className="text-xs font-bold text-[#D4A72C] hover:text-[#4B1F6F] transition flex items-center gap-1 mt-auto">
                  Learn More <i className="fa-solid fa-chevron-right text-[10px]"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Feature 2: Interactive Child Milestone Age Navigator */}
      <section className="pt-6 pb-10 sm:pt-8 sm:pb-12 bg-gradient-to-b from-white via-[#FAF8F4] to-white border-b border-purple-100" id="parent-milestones">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 reveal-on-scroll">
            <span className="gold-badge mb-2.5">
              <i className="fa-solid fa-compass-drafting text-[10px]"></i> Developmental Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4B1F6F] leading-tight">
              What Will My Child <span className="text-shimmer-gold font-serif italic">Achieve</span> Here?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2.5 leading-relaxed font-medium">
              Select your child's age group below to explore their personalized milestones, daily classroom joy, and social-emotional growth.
            </p>
          </div>

          {/* Interactive Age Stage Selector Tabs */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 max-w-full">
            {[
              { id: 'playgroup', label: 'Playgroup', age: '1.5 - 2.5 Yrs', icon: 'fa-shapes' },
              { id: 'prekg', label: 'Pre-KG', age: '2.5 - 3.5 Yrs', icon: 'fa-palette' },
              { id: 'lkg', label: 'LKG', age: '3.5 - 4.5 Yrs', icon: 'fa-book-open' },
              { id: 'ukg', label: 'UKG', age: '4.5 - 5.5 Yrs', icon: 'fa-graduation-cap' },
              { id: 'graders', label: 'Graders', age: 'Primary CBSE', icon: 'fa-award' },
            ].map((tab) => {
              const isActive = parentMilestoneStage === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setParentMilestoneStage(tab.id)}
                  className={`milestone-tab-btn px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl flex items-center gap-2.5 text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? 'active text-white'
                      : 'bg-white hover:bg-purple-50 text-gray-700 border border-purple-100/80 shadow-sm hover:scale-105'
                  }`}
                >
                  <i className={`fa-solid ${tab.icon} ${isActive ? 'text-[#F3D98B]' : 'text-[#4B1F6F]'}`}></i>
                  <div className="text-left">
                    <span className="block leading-tight">{tab.label}</span>
                    <span className={`text-[10px] font-medium block leading-tight ${isActive ? 'text-purple-200' : 'text-gray-400'}`}>
                      {tab.age}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Content Display for Selected Milestone */}
          {parentMilestones[parentMilestoneStage] && (
            <div className="mt-8 bg-white rounded-3xl p-6 sm:p-10 border border-purple-200/80 shadow-xl reveal-on-scroll animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Col: Milestones & Rhythms */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="bg-[#4B1F6F] text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                      {parentMilestones[parentMilestoneStage].stage} • {parentMilestones[parentMilestoneStage].age}
                    </span>
                    <span className="text-xs font-bold text-[#D4A72C] flex items-center gap-1.5">
                      <i className="fa-solid fa-sparkles"></i> Guided Milestones
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#4B1F6F] leading-tight">
                    {parentMilestones[parentMilestoneStage].headline}
                  </h3>

                  {/* 4 Developmental Grid Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    {parentMilestones[parentMilestoneStage].milestones.map((m) => (
                      <div key={m.title} className="p-4 rounded-2xl bg-gradient-to-br from-[#FAF8F4] to-[#F1EAF7]/40 border border-purple-100 hover:border-[#D4A72C]/60 transition-colors">
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <div className="w-7 h-7 rounded-lg bg-[#4B1F6F] text-[#F3D98B] flex items-center justify-center text-xs">
                            <i className={`fa-solid ${m.icon}`}></i>
                          </div>
                          <h4 className="font-bold text-xs sm:text-sm text-[#4B1F6F]">{m.title}</h4>
                        </div>
                        <p className="text-xs text-gray-600 font-medium leading-relaxed pl-1">
                          {m.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Daily Joyful Schedule Pill & CTA */}
                  <div className="pt-3 border-t border-purple-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="text-xs text-gray-500 font-medium">
                      <span className="font-bold text-[#4B1F6F] block sm:inline mr-2">
                        <i className="fa-solid fa-clock text-[#D4A72C] mr-1"></i> Core Daily Focus:
                      </span>
                      <span>{parentMilestones[parentMilestoneStage].dailyScheduleSnippet}</span>
                    </div>

                    <button 
                      type="button"
                      onClick={() => openModal(parentMilestones[parentMilestoneStage].stage, 'enquiry')}
                      className="btn-gold text-xs py-2.5 px-5 shadow-sm hover:scale-105 transition-all self-start sm:self-auto flex-shrink-0"
                    >
                      <span>Check Seat Availability</span>
                      <i className="fa-solid fa-arrow-right text-[10px] ml-1.5"></i>
                    </button>
                  </div>
                </div>

                {/* Right Col: Authentic Visual & Parent Quote */}
                <div className="lg:col-span-5 space-y-5">
                  {/* Photo Frame */}
                  <div 
                    className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#2D1445] to-[#170526] p-2 border-2 border-[#D4A72C]/40 shadow-2xl group cursor-pointer"
                    onClick={() => setSelectedPhoto({ src: parentMilestones[parentMilestoneStage].photo, title: `${parentMilestones[parentMilestoneStage].stage} Learning Environment`, category: 'Academic Milestones' })}
                  >
                    <img 
                      src={parentMilestones[parentMilestoneStage].photo} 
                      alt="" 
                      aria-hidden="true" 
                      className="absolute inset-0 w-full h-full object-cover blur-md scale-110 opacity-35" 
                    />
                    <img 
                      src={parentMilestones[parentMilestoneStage].photo} 
                      alt={parentMilestones[parentMilestoneStage].stage} 
                      className="relative z-10 w-full h-full object-contain rounded-2xl group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <i className="fa-solid fa-expand text-[#F3D98B]"></i> Full View
                    </div>
                  </div>

                  {/* Verified Parent Quote Box */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50/70 via-purple-50/40 to-amber-50/70 border border-amber-200/80 shadow-sm">
                    <div className="flex text-[#D4A72C] gap-1 text-xs mb-2">
                      <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                      <span className="text-[10px] font-black text-gray-500 ml-1.5 uppercase">Verified Parent Review</span>
                    </div>
                    <p className="text-xs text-gray-700 italic font-medium leading-relaxed">
                      {parentMilestones[parentMilestoneStage].quote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Special Feature 3: A Day in the Life of a Ryans Scholar (Visual Interactive Clock Rhythm) */}
      <section className="pt-8 pb-10 sm:pt-10 sm:pb-12 bg-[#FAF8F4] relative overflow-hidden" id="day-in-the-life">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 reveal-on-scroll">
            <span className="purple-badge mb-2.5">
              <i className="fa-solid fa-clock text-[10px]"></i> Daily Emotional & Academic Rhythm
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4B1F6F] leading-tight">
              A Day in the Life of a <span className="text-shimmer-gold font-serif italic">Ryans Scholar</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2.5 leading-relaxed font-medium">
              From affectionate morning greetings to stimulating phonics labs, outdoor giggles, and safe homeward transit—every minute is thoughtfully designed.
            </p>
          </div>

          {/* 6 Chronological Rhythm Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dayInTheLifeSteps.map((step, idx) => (
              <div 
                key={step.time}
                className="day-rhythm-card bg-white rounded-3xl p-6 border border-purple-100 shadow-md flex flex-col justify-between reveal-on-scroll group"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div>
                  {/* Top Bar with Time Pill & Step Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 bg-[#F1EAF7] text-[#4B1F6F] font-extrabold text-xs px-3 py-1 rounded-full border border-purple-200/60 shadow-sm">
                      <i className="fa-solid fa-clock text-[#D4A72C]"></i>
                      <span>{step.time}</span>
                    </span>
                    <span className="text-[10px] font-black font-mono text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="flex items-start gap-3.5 mb-3">
                    <div className={`w-11 h-11 rounded-2xl ${step.color} text-white flex items-center justify-center text-lg shadow-md flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <i className={`fa-solid ${step.icon}`}></i>
                    </div>
                    <div>
                      <h4 className="font-extrabold text-base text-[#4B1F6F] leading-snug group-hover:text-[#6B3A8D] transition-colors">
                        {step.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 font-medium leading-relaxed mt-2">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-purple-50 mt-5 flex items-center justify-between text-[11px] font-bold text-gray-400">
                  <span>Part of Daily Rhythm</span>
                  <span className="text-[#D4A72C] group-hover:translate-x-1 transition-transform">
                    <i className="fa-solid fa-arrow-right text-[10px]"></i>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Transparency Assurance Tagline */}
          <div className="mt-10 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 bg-white px-5 py-2 rounded-full border border-purple-100 shadow-sm">
              <i className="fa-solid fa-circle-check text-emerald-500"></i>
              Daily classroom photos & progress moments shared directly with parents via secure school updates
            </span>
          </div>
        </div>
      </section>

      {/* Section 8: Campus & Facilities */}
      <section className="pt-8 pb-10 sm:pt-10 sm:pb-12 bg-[#FAF8F4]" id="facilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="purple-badge mb-2">Safe & Stimulating Infrastructure</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B1F6F]">Campus & Facilities</h2>
              <p className="text-gray-600 text-sm sm:text-base mt-2">Built specifically for young learners with round-the-clock safety, natural daylight, and ergonomic comfort.</p>
            </div>
            <Link to="/facilities" className="btn-outline-purple text-xs font-bold mt-4 md:mt-0 self-start md:self-auto">
              Explore All 6 Facilities <i className="fa-solid fa-arrow-right ml-1"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Facility 1: Classrooms */}
            <div className="premium-card card-interactive-lift overflow-hidden group reveal-on-scroll">
              <div className="h-52 overflow-hidden img-zoom-container">
                <img src="/assets/DSC_0534.jpg" alt="Ryans Academy Classrooms" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg text-[#4B1F6F] mb-2">Smart Modern Classrooms</h4>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">Airy, natural daylight-filled learning spaces equipped with ergonomic, child-safe furniture and multimedia visual boards.</p>
              </div>
            </div>

            {/* Facility 2: Activity Areas */}
            <div className="premium-card card-interactive-lift overflow-hidden group reveal-on-scroll">
              <div className="h-52 overflow-hidden img-zoom-container">
                <img src="/assets/ryan_indoor_activity.jpg" alt="Ryans Indoor Activity Arenas" className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg text-[#4B1F6F] mb-2">Indoor Activity Arenas</h4>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">Padded playrooms, role-play corners, musical stages, and creative craft tables for daily collaborative play.</p>
              </div>
            </div>

            {/* Facility 3: Playground */}
            <div className="premium-card card-interactive-lift overflow-hidden group reveal-on-scroll">
              <div className="h-52 overflow-hidden img-zoom-container">
                <img src="/assets/DSC_0539.JPG" alt="Ryans Safe Outdoor Playgrounds & Tracks" className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg text-[#4B1F6F] mb-2">Safe Outdoor Playgrounds</h4>
                <p className="text-xs text-gray-600 leading-relaxed font-medium">Safe shock-absorbent turf, slides, climbing arches, sandboxes, and running tracks under constant teacher supervision.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SIGNATURE SECTION: Ryans Spotlight - Live Event Chronicles */}
      <section className="pt-8 pb-10 sm:pt-10 sm:pb-12 bg-gradient-to-b from-[#FAF8F4] via-white to-[#FAF8F4] border-t border-purple-100/70" id="events-chronicles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 reveal-on-scroll">
            <span className="gold-badge mb-2.5 animate-pulse-subtle">
              <i className="fa-solid fa-sparkles text-[10px]"></i> Authentic Event Chronicles
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4B1F6F] leading-tight">
              Ryans Spotlight: <span className="text-[#D4A72C] font-serif italic">Celebrations & Honors</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2.5 leading-relaxed font-medium">
              Explore authentic glimpses from our grand stage galas, kindergarten convocation ceremonies, colorful preschool sensory fests, and inter-school championships.
            </p>
          </div>

          {/* Interactive Event Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
            {Object.values(eventCategories).map((cat) => {
              const isActive = activeEventTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveEventTab(cat.id);
                    setInlineVisibleLimit(16);
                  }}
                  className={`px-5 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center gap-2.5 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#4B1F6F] to-[#6B3A8D] text-white shadow-xl shadow-purple-900/25 ring-2 ring-[#D4A72C] scale-105'
                      : 'bg-white text-gray-700 border border-purple-200/80 hover:border-[#4B1F6F] hover:bg-purple-50/40 shadow-sm'
                  }`}
                >
                  <i className={`fa-solid ${cat.icon} ${isActive ? 'text-[#F3D98B]' : 'text-[#4B1F6F]'}`}></i>
                  <span>{cat.title.split(' ')[0]} {cat.title.split(' ')[1]}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-[#D4A72C] text-[#29252B] font-black' : 'bg-purple-100 text-[#4B1F6F]'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Category Description Banner */}
          <div className="bg-[#F1EAF7]/80 rounded-2xl p-4 sm:p-5 border border-purple-200/60 mb-8 max-w-4xl mx-auto text-center">
            <span className="text-[10px] font-black uppercase tracking-wider text-[#D4A72C] bg-[#FDF8E7] px-3 py-1 rounded-full border border-amber-200/50 mb-2 inline-block">
              {eventCategories[activeEventTab].badge}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-[#4B1F6F]">
              {eventCategories[activeEventTab].title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 font-medium max-w-2xl mx-auto">
              {eventCategories[activeEventTab].desc}
            </p>
            <div className="mt-3.5 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setFullGalleryModalCategory(activeEventTab)}
                className="inline-flex items-center gap-2 bg-[#4B1F6F] hover:bg-[#6B3A8D] text-white text-xs font-bold px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 border border-purple-300/30"
              >
                <i className="fa-solid fa-images text-[#F3D98B]"></i>
                <span>Open Full Archive of {eventCategories[activeEventTab].count}</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px] text-[#F3D98B]"></i>
              </button>
            </div>
          </div>

          {/* 4-Card Interactive Showcase Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventCategories[activeEventTab].cards.map((item, index) => (
              <div
                key={item.src}
                className="event-chronicle-card group"
                onClick={() => setSelectedPhoto(item)}
              >
                <div className="h-64 sm:h-72 overflow-hidden relative">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"></div>
                  
                  {/* Floating Tag */}
                  <span className="absolute top-3 left-3 bg-[#4B1F6F]/90 backdrop-blur-md text-[#F3D98B] text-[9.5px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border border-purple-300/30">
                    {item.tag}
                  </span>

                  {/* Zoom Icon Button */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-[#4B1F6F] flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    <i className="fa-solid fa-expand"></i>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[10px] font-bold text-[#F3D98B] uppercase tracking-wider mb-0.5">
                      {item.category}
                    </p>
                    <h4 className="font-extrabold text-sm leading-snug line-clamp-2">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Bar: View All Photos Modal OR Expand Inline */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-purple-50 via-white to-amber-50/50 border border-purple-200/80 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#4B1F6F] text-[#F3D98B] flex items-center justify-center font-black text-lg shadow-md shadow-purple-900/20">
                <i className={`fa-solid ${eventCategories[activeEventTab].icon}`}></i>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-extrabold text-sm sm:text-base text-[#4B1F6F]">
                    {eventCategories[activeEventTab].title}
                  </h4>
                  <span className="bg-[#D4A72C] text-[#29252B] text-[11px] font-black px-2.5 py-0.5 rounded-full shadow-sm">
                    {eventCategories[activeEventTab].count}
                  </span>
                </div>
                <p className="text-xs text-gray-500 font-medium">
                  Showing 4 curated highlights • Browse the complete archive of {eventCategories[activeEventTab].count}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {/* Button 1: Open Fullscreen Collection Modal */}
              <button
                type="button"
                onClick={() => setFullGalleryModalCategory(activeEventTab)}
                className="btn-purple text-xs font-extrabold flex-1 sm:flex-initial flex items-center justify-center gap-2 shadow-md shadow-purple-900/20 py-2.5 px-5"
              >
                <i className="fa-solid fa-images text-[#F3D98B]"></i>
                <span>Open All {eventCategories[activeEventTab].count} (Modal)</span>
              </button>

              {/* Button 2: Toggle Expand Grid on Page */}
              <button
                type="button"
                onClick={() => setIsInlineExpanded(!isInlineExpanded)}
                className="btn-gold text-xs font-extrabold flex-1 sm:flex-initial flex items-center justify-center gap-2 shadow-md shadow-amber-500/25 py-2.5 px-5"
              >
                <i className={`fa-solid ${isInlineExpanded ? 'fa-chevron-up' : 'fa-grid-2'}`}></i>
                <span>{isInlineExpanded ? 'Collapse Grid' : `Expand All ${eventCategories[activeEventTab].count}`}</span>
              </button>
            </div>
          </div>

          {/* Expanded Inline Full Category Grid */}
          {isInlineExpanded && (
            <div className="mt-8 pt-8 border-t border-purple-200/80 animate-fade-in-up">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-xl font-extrabold text-[#4B1F6F]">
                    All {eventCategories[activeEventTab].count} — {eventCategories[activeEventTab].title}
                  </h4>
                  <p className="text-xs text-gray-500 font-medium">
                    Showing {Math.min(inlineVisibleLimit, categoryFullCollections[activeEventTab].length)} of {categoryFullCollections[activeEventTab].length} photographs • Click any to view in High-Res Lightbox
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsInlineExpanded(false)}
                  className="text-xs font-bold text-[#4B1F6F] hover:text-[#D4A72C] flex items-center gap-1.5 transition"
                >
                  <span>Close Grid</span>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                {categoryFullCollections[activeEventTab].slice(0, inlineVisibleLimit).map((item) => (
                  <div
                    key={item.src}
                    className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-gray-100 cursor-pointer border border-purple-100 shadow-sm hover:shadow-md hover:border-[#D4A72C] transition-all"
                    onClick={() => setSelectedPhoto(item)}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="w-8 h-8 rounded-full bg-white/90 text-[#4B1F6F] flex items-center justify-center text-xs shadow-md">
                        <i className="fa-solid fa-expand"></i>
                      </span>
                    </div>
                    <span className="absolute bottom-1.5 right-1.5 bg-black/60 backdrop-blur-sm text-white text-[9px] font-mono px-1.5 py-0.5 rounded">
                      #{item.index}
                    </span>
                  </div>
                ))}
              </div>

              {inlineVisibleLimit < categoryFullCollections[activeEventTab].length ? (
                <div className="mt-8 text-center flex flex-wrap items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => setInlineVisibleLimit(prev => prev + 18)}
                    className="btn-outline-purple text-xs font-bold px-6 py-2.5"
                  >
                    Load 18 More Photos ({categoryFullCollections[activeEventTab].length - inlineVisibleLimit} remaining)
                  </button>
                  <button
                    type="button"
                    onClick={() => setInlineVisibleLimit(categoryFullCollections[activeEventTab].length)}
                    className="btn-gold text-xs font-bold px-6 py-2.5"
                  >
                    Show All {categoryFullCollections[activeEventTab].length} Photos
                  </button>
                </div>
              ) : (
                <div className="mt-6 text-center">
                  <span className="text-xs font-bold text-gray-500 bg-purple-50 px-4 py-1.5 rounded-full border border-purple-200">
                    All {categoryFullCollections[activeEventTab].length} photos loaded
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Section 9: Life at Ryans - Curated Photo Showcase */}
      <section className="py-16 bg-white" id="gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="gold-badge mb-2">Vibrant Moments</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B1F6F]">Life at Ryans Academy</h2>
              <p className="text-gray-600 text-sm sm:text-base mt-2">Activities, sports, celebrations, and friendships that shape joyful childhood memories.</p>
            </div>
            <Link to="/gallery" className="btn-outline-purple text-xs font-bold mt-4 md:mt-0 self-start md:self-auto">
              View Complete Gallery <i className="fa-solid fa-images ml-1"></i>
            </Link>
          </div>

          {/* 4 Distinct Curated Moments - Completely Clear Uncropped Full Views */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" id="gallery-grid">
            {/* Image 1: Real Annual Day */}
            <div 
              className="gallery-item h-64 sm:h-72 cursor-pointer rounded-2xl overflow-hidden relative group bg-[#2D1445] shadow-md hover:shadow-xl transition-all duration-300" 
              onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/annual_day/annual_day_35.jpg', title: 'RYANOVA Annual Cultural Gala Stage Performance', category: 'Events' })}
            >
              {/* Ambient Glow Backdrop */}
              <img src="/asssssetss_opt/annual_day/annual_day_35.jpg" alt="" className="absolute inset-0 w-full h-full object-cover blur-md scale-110 opacity-30" aria-hidden="true" />
              {/* Full Uncropped Subject - Completely Clear View */}
              <img src="/asssssetss_opt/annual_day/annual_day_35.jpg" alt="Annual Day celebration" className="relative z-10 w-full h-full object-contain p-1.5 group-hover:scale-105 transition-transform duration-500" />
              <div className="gallery-overlay absolute inset-0 z-20 flex items-end p-4 text-white">
                <div>
                  <p className="font-bold text-xs text-[#F3D98B]">Annual Day Gala</p>
                  <p className="text-[10px] text-purple-200">Stage Performance</p>
                </div>
              </div>
            </div>

            {/* Image 2: Real Sports Interschool & Honors (Completely Clear Full View) */}
            <div 
              className="gallery-item h-64 sm:h-72 cursor-pointer rounded-2xl overflow-hidden relative group bg-[#2D1445] shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/competition/competition_28.jpg', title: 'Annual Velocity Fest & State Level Honors', category: 'Sports & Laurels' })}
            >
              {/* Ambient Glow Backdrop */}
              <img src="/asssssetss_opt/competition/competition_28.jpg" alt="" className="absolute inset-0 w-full h-full object-cover blur-md scale-110 opacity-30" aria-hidden="true" />
              {/* Full Uncropped Subject - Head, Body, Certificate 100% in Clear View */}
              <img src="/asssssetss_opt/competition/competition_28.jpg" alt="Velocity Fest sports honors" className="relative z-10 w-full h-full object-contain p-1.5 group-hover:scale-105 transition-transform duration-500" />
              <div className="gallery-overlay absolute inset-0 z-20 flex items-end p-4 text-white">
                <div>
                  <p className="font-bold text-xs text-[#F3D98B]">Velocity Fest</p>
                  <p className="text-[10px] text-purple-200">Track & Field Athletics</p>
                </div>
              </div>
            </div>

            {/* Image 3: Real Colours Day */}
            <div 
              className="gallery-item h-64 sm:h-72 cursor-pointer rounded-2xl overflow-hidden relative group shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/colours_day/colours_day_30.jpg', title: 'Creative Arts Workshop & Colours Day', category: 'Activities' })}
            >
              <img src="/asssssetss_opt/colours_day/colours_day_30.jpg" alt="Creative arts workshop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="gallery-overlay absolute inset-0 z-20 flex items-end p-4 text-white">
                <div>
                  <p className="font-bold text-xs text-[#F3D98B]">Art & Painting</p>
                  <p className="text-[10px] text-purple-200">Color Explorations</p>
                </div>
              </div>
            </div>

            {/* Image 4: Real Active Campus Celebrations */}
            <div 
              className="gallery-item h-64 sm:h-72 cursor-pointer rounded-2xl overflow-hidden relative group shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/convocation/convocation_02.jpg', title: 'Active Kindergarten Campus Community & Festive Celebrations', category: 'Campus' })}
            >
              <img src="/asssssetss_opt/convocation/convocation_02.jpg" alt="Campus community celebration" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="gallery-overlay absolute inset-0 z-20 flex items-end p-4 text-white">
                <div>
                  <p className="font-bold text-xs text-[#F3D98B]">Active Community</p>
                  <p className="text-[10px] text-purple-200">Collaborative Discovery</p>
                </div>
              </div>
            </div>
          </div>

          {/* DUAL STREAM CONTINUOUS PHOTO REEL (32 100% Unique Photos, Zero Duplicates!) */}
          <div className="mt-12 reveal-on-scroll">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4A72C] animate-ping"></span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#4B1F6F]">
                  Live Photo Stream • 32 Distinct Ryans Milestones in Motion
                </span>
              </div>
              <span className="text-[11px] text-gray-500 font-medium hidden sm:inline">
                <i className="fa-solid fa-hand-pointer text-[#D4A72C] mr-1"></i> Hover to pause stream
              </span>
            </div>

            {/* Stream Row 1: Forward Marquee (16 Unique Photos) */}
            <div className="marquee-container rounded-2xl py-2 shadow-inner bg-[#FAF8F4]/80 p-2 border border-purple-100 mb-3">
              <div className="marquee-track">
                <div className="marquee-item" onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/annual_day/annual_day_40.jpg', title: 'Annual Cultural Day Stage' })}><img src="/asssssetss_opt/annual_day/annual_day_40.jpg" alt="Annual Gala" loading="lazy" /></div>
                <div className="marquee-item" onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/colours_day/colours_day_32.jpg', title: 'Colours Day Kindergarten' })}><img src="/asssssetss_opt/colours_day/colours_day_32.jpg" alt="Colours Day" loading="lazy" /></div>
                <div className="marquee-item" onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/convocation/convocation_18.jpg', title: 'Convocation Little Scholars' })}><img src="/asssssetss_opt/convocation/convocation_18.jpg" alt="Convocation" loading="lazy" /></div>
                <div className="marquee-item" onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/competition/competition_12.jpg', title: 'Interschool Trophy Winners' })}><img src="/asssssetss_opt/competition/competition_12.jpg" alt="Sports Winner" loading="lazy" /></div>
                <div className="marquee-item" onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/annual_day/annual_day_42.jpg', title: 'Theatrical Performance' })}><img src="/asssssetss_opt/annual_day/annual_day_42.jpg" alt="Stage Play" loading="lazy" /></div>
                <div className="marquee-item" onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/colours_day/colours_day_35.jpg', title: 'Sensory Tactile Fun' })}><img src="/asssssetss_opt/colours_day/colours_day_35.jpg" alt="Sensory Fun" loading="lazy" /></div>
                <div className="marquee-item" onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/convocation/convocation_19.jpg', title: 'Graduation Day Cap Ceremony' })}><img src="/asssssetss_opt/convocation/convocation_19.jpg" alt="Graduation" loading="lazy" /></div>
                <div className="marquee-item" onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/competition/competition_14.jpg', title: 'Track Sprint Honors' })}><img src="/asssssetss_opt/competition/competition_14.jpg" alt="Athletics" loading="lazy" /></div>
                <div className="marquee-item" onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/annual_day/annual_day_45.jpg', title: 'Classical Dance Rhythms' })}><img src="/asssssetss_opt/annual_day/annual_day_45.jpg" alt="Dance Performance" loading="lazy" /></div>
                <div className="marquee-item" onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/colours_day/colours_day_38.jpg', title: 'Creative Painting Smiles' })}><img src="/asssssetss_opt/colours_day/colours_day_38.jpg" alt="Art Painting" loading="lazy" /></div>
                <div className="marquee-item" onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/convocation/convocation_21.jpg', title: 'Proud Certificate Moment' })}><img src="/asssssetss_opt/convocation/convocation_21.jpg" alt="Honors" loading="lazy" /></div>
                <div className="marquee-item" onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/competition/competition_16.jpg', title: 'Karate Championship Gold' })}><img src="/asssssetss_opt/competition/competition_16.jpg" alt="Martial Arts" loading="lazy" /></div>
                <div className="marquee-item" onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/annual_day/annual_day_50.jpg', title: 'Chorus Stage Ensemble' })}><img src="/asssssetss_opt/annual_day/annual_day_50.jpg" alt="Choir" loading="lazy" /></div>
                <div className="marquee-item" onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/colours_day/colours_day_40.jpg', title: 'Festive Classroom Decor' })}><img src="/asssssetss_opt/colours_day/colours_day_40.jpg" alt="Class Celebration" loading="lazy" /></div>
                <div className="marquee-item" onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/convocation/convocation_22.jpg', title: 'Little Graduate Smiles' })}><img src="/asssssetss_opt/convocation/convocation_22.jpg" alt="Happy Scholar" loading="lazy" /></div>
                <div className="marquee-item" onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/competition/competition_18.jpg', title: 'Team Relay Champions' })}><img src="/asssssetss_opt/competition/competition_18.jpg" alt="Team Relay" loading="lazy" /></div>
              </div>
            </div>

            {/* Stream Row 2: Reverse Marquee (16 Different Unique Photos) */}
            <div className="marquee-container rounded-2xl py-2 shadow-inner bg-[#FAF8F4]/80 p-2 border border-purple-100">
              <div className="marquee-track-reverse">
                <div className="marquee-item" onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/annual_day/annual_day_52.jpg', title: 'Grand Musical Finale' })}><img src="/asssssetss_opt/annual_day/annual_day_52.jpg" alt="Musical" loading="lazy" /></div>
                <div className="marquee-item" onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/colours_day/colours_day_42.jpg', title: 'Kindergarten Play Day' })}><img src="/asssssetss_opt/colours_day/colours_day_42.jpg" alt="Kindergarten Play" loading="lazy" /></div>
                <div className="marquee-item" onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/convocation/convocation_23.jpg', title: 'Grand Stage Graduation' })}><img src="/asssssetss_opt/convocation/convocation_23.jpg" alt="Convocation Honors" loading="lazy" /></div>
                <div className="marquee-item" onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/competition/competition_22.jpg', title: 'Podium Champions' })}><img src="/asssssetss_opt/competition/competition_22.jpg" alt="Podium Honors" loading="lazy" /></div>
                <div className="marquee-item" onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/annual_day/annual_day_55.jpg', title: 'Vibrant Stage Lights' })}><img src="/asssssetss_opt/annual_day/annual_day_55.jpg" alt="Stage Lights" loading="lazy" /></div>
                <div className="marquee-item" onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/colours_day/colours_day_44.jpg', title: 'Vibrant Green Day' })}><img src="/asssssetss_opt/colours_day/colours_day_44.jpg" alt="Green Day" loading="lazy" /></div>
                <div className="marquee-item" onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/annual_day/annual_day_58.jpg', title: 'Drama & Expression' })}><img src="/asssssetss_opt/annual_day/annual_day_58.jpg" alt="Drama Acting" loading="lazy" /></div>
                <div className="marquee-item" onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/competition/competition_24.jpg', title: 'Interschool Medalist' })}><img src="/asssssetss_opt/competition/competition_24.jpg" alt="Medalist" loading="lazy" /></div>
                <div className="marquee-item" onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/annual_day/annual_day_60.jpg', title: 'Stage Costumes Elegance' })}><img src="/asssssetss_opt/annual_day/annual_day_60.jpg" alt="Costume Elegance" loading="lazy" /></div>
                <div className="marquee-item" onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/colours_day/colours_day_46.jpg', title: 'Tactile Art Fun' })}><img src="/asssssetss_opt/colours_day/colours_day_46.jpg" alt="Tactile Art" loading="lazy" /></div>
                <div className="marquee-item" onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/annual_day/annual_day_62.jpg', title: 'Celebration Confetti' })}><img src="/asssssetss_opt/annual_day/annual_day_62.jpg" alt="Celebration" loading="lazy" /></div>
                <div className="marquee-item" onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/competition/competition_26.jpg', title: 'Athletic Track Relay' })}><img src="/asssssetss_opt/competition/competition_26.jpg" alt="Relay Running" loading="lazy" /></div>
                <div className="marquee-item" onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/annual_day/annual_day_64.jpg', title: 'Auditorium Applause' })}><img src="/asssssetss_opt/annual_day/annual_day_64.jpg" alt="Auditorium" loading="lazy" /></div>
                <div className="marquee-item" onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/colours_day/colours_day_48.jpg', title: 'Joyful Childhood Smile' })}><img src="/asssssetss_opt/colours_day/colours_day_48.jpg" alt="Childhood Smiles" loading="lazy" /></div>
                <div className="marquee-item" onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/annual_day/annual_day_66.jpg', title: 'RYANOVA Grand Curtain Call' })}><img src="/asssssetss_opt/annual_day/annual_day_66.jpg" alt="Curtain Call" loading="lazy" /></div>
                <div className="marquee-item" onClick={() => setSelectedPhoto({ src: '/asssssetss_opt/competition/competition_30.jpg', title: 'Trophy Celebration Pride' })}><img src="/asssssetss_opt/competition/competition_30.jpg" alt="Trophy Pride" loading="lazy" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: The Extraordinary Ryans Experience */}
      <section className="pt-8 pb-10 sm:pt-10 sm:pb-12 bg-gradient-to-b from-[#FAF8F4] via-[#F1EAF7]/40 to-[#FAF8F4] relative overflow-hidden" id="distinction">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 reveal-on-scroll">
            <span className="gold-badge mb-2.5 animate-pulse-subtle">
              <i className="fa-solid fa-crown text-[10px]"></i> Beyond Traditional Schooling
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4B1F6F] leading-tight tracking-tight">
              The <span className="text-[#D4A72C] font-serif italic">Extraordinary</span> Ryans Experience
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2.5 leading-relaxed font-medium">
              Where world-class holistic modules, experiential discovery hubs, and joyful mentorship inspire young minds to soar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {/* Card 1: Curiosity & Wonder Labs */}
            <div className="extraordinary-card p-7 flex flex-col justify-between reveal-on-scroll stagger-1 glow-shimmer">
              <div>
                <div className="h-48 rounded-2xl overflow-hidden mb-5 img-zoom-container relative shadow-md">
                  <img src="/assets/DSC_0151.jpg" alt="Science Discovery and Experimentation" className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-[#4B1F6F] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    Discovery Labs
                  </span>
                </div>
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#F1EAF7] text-[#4B1F6F] flex items-center justify-center text-xl extraordinary-icon flex-shrink-0">
                    <i className="fa-solid fa-atom text-[#D4A72C]"></i>
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-[#D4A72C] uppercase tracking-wider">Hands-on STEM</span>
                    <h3 className="font-bold text-lg text-[#4B1F6F] leading-snug">Curiosity & Wonder Labs</h3>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-medium mb-4">
                  Early science exploration, interactive nature tables, and safe hands-on experiments that transform abstract questions into thrilling discoveries.
                </p>
              </div>
              <div className="pt-4 border-t border-purple-50 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-purple-900/60">Sensory STEM • Math Labs</span>
                <Link to="/academics" className="text-xs font-bold text-[#4B1F6F] hover:text-[#D4A72C] transition flex items-center gap-1">
                  Explore <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </Link>
              </div>
            </div>

            {/* Card 2: Velocity Sports Carnival */}
            <div className="extraordinary-card p-7 flex flex-col justify-between reveal-on-scroll stagger-2 glow-shimmer">
              <div>
                <div className="h-48 rounded-2xl overflow-hidden mb-5 img-zoom-container relative shadow-md">
                  <img src="/asssssetss_opt/competition/competition_01.jpg" alt="Annual Velocity Fest Sports" className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-[#D4A72C] text-[#3b2408] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm inline-flex items-center gap-1.5">
                    <i className="fa-solid fa-medal text-xs"></i> Annual Velocity Fest
                  </span>
                </div>
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#FDF8E7] text-[#D4A72C] flex items-center justify-center text-xl extraordinary-icon flex-shrink-0">
                    <i className="fa-solid fa-medal text-[#4B1F6F]"></i>
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-[#4B1F6F] uppercase tracking-wider">Athletic Excellence</span>
                    <h3 className="font-bold text-lg text-[#4B1F6F] leading-snug">Sportsmanship & Vitality</h3>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-medium mb-4">
                  Structured track & field athletics, gymnastic agility drills, team relays, and yoga that build physical endurance, grit, and fair play.
                </p>
              </div>
              <div className="pt-4 border-t border-purple-50 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-purple-900/60">Track & Field • Relay Honors</span>
                <Link to="/activities" className="text-xs font-bold text-[#4B1F6F] hover:text-[#D4A72C] transition flex items-center gap-1">
                  Explore <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </Link>
              </div>
            </div>

            {/* Card 3: Grand Stage & RYANOVA Cultural Expression */}
            <div className="extraordinary-card p-7 flex flex-col justify-between reveal-on-scroll stagger-3 glow-shimmer">
              <div>
                <div className="h-48 rounded-2xl overflow-hidden mb-5 img-zoom-container relative shadow-md">
                  <img src="/asssssetss_opt/annual_day/annual_day_01.jpg" alt="RYANOVA Annual Day Cultural Gala" className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-[#4B1F6F] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    RYANOVA Gala
                  </span>
                </div>
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#F1EAF7] text-[#4B1F6F] flex items-center justify-center text-xl extraordinary-icon flex-shrink-0">
                    <i className="fa-solid fa-masks-theater text-[#D4A72C]"></i>
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-[#D4A72C] uppercase tracking-wider">Performing Arts</span>
                    <h3 className="font-bold text-lg text-[#4B1F6F] leading-snug">Stage Poise & Creative Gala</h3>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-medium mb-4">
                  Annual mega-stage galas, dramatic musical pantomimes, choir performances, and speech podiums ensuring 100% stage participation for all children.
                </p>
              </div>
              <div className="pt-4 border-t border-purple-50 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-purple-900/60">Dance • Drama • Stage Poise</span>
                <Link to="/events" className="text-xs font-bold text-[#4B1F6F] hover:text-[#D4A72C] transition flex items-center gap-1">
                  Explore <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* School Visit Banner */}
          <div className="bg-gradient-to-r from-[#4B1F6F] via-[#6B3A8D] to-[#4B1F6F] rounded-3xl p-8 sm:p-10 shadow-2xl text-white relative overflow-hidden reveal-on-scroll">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-2">
                <span className="bg-[#D4A72C] text-[#29252B] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  Interactive Campus Tours Available
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Witness The Ryans Magic in Real Time</h3>
                <p className="text-purple-100 text-xs sm:text-sm max-w-xl font-medium leading-relaxed">
                  Bring your child for an interactive guided walkthrough. Explore our sensory play areas, smart classrooms, and joyful outdoor playgrounds today.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:items-end">
                <button className="btn-gold text-xs sm:text-sm py-3 px-6 shadow-lg w-full sm:w-auto" onClick={() => openModal("Play Group", "visit")}>
                  <i className="fa-solid fa-calendar-check"></i> Book Campus Tour
                </button>
                <a href="tel:+919840012345" className="btn-outline-gold text-xs py-2.5 px-5 border-white text-white hover:bg-white hover:text-[#4B1F6F] text-center w-full sm:w-auto">
                  <i className="fa-solid fa-phone"></i> Call: +91 98400 12345
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Parent Testimonials */}
      <section className="pt-8 pb-10 sm:pt-10 sm:pb-12 bg-[#F1EAF7]/40 border-y border-purple-100" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="gold-badge mb-2.5">Parent Trust & Feedback</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B1F6F]">What Parents Say About Ryans</h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">Genuine reviews from our Ryans Academy family who have seen their children flourish.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white p-7 rounded-3xl border border-purple-100 shadow-md flex flex-col justify-between card-interactive-lift reveal-on-scroll">
              <div>
                <div className="flex text-[#D4A72C] gap-1 text-sm mb-4">
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed font-medium mb-6 italic">
                  "Enrolling our daughter at Ryans Academy was the best decision. Her vocabulary, table manners, and enthusiasm for going to school every single morning are heartwarming. The teachers genuinely care!"
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-purple-50">
                <div className="w-10 h-10 rounded-full bg-[#4B1F6F] text-white font-bold flex items-center justify-center text-sm">
                  SK
                </div>
                <div>
                  <h5 className="font-bold text-sm text-[#4B1F6F]">Mrs. Shanthi Kumar</h5>
                  <p className="text-[11px] text-gray-500 font-medium">Mother of Ananya (UKG)</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-7 rounded-3xl border border-purple-100 shadow-md flex flex-col justify-between card-interactive-lift reveal-on-scroll">
              <div>
                <div className="flex text-[#D4A72C] gap-1 text-sm mb-4">
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed font-medium mb-6 italic">
                  "The balance between CBSE academic syllabus and extracurriculars like Abacus and Velocity Fest sports is outstanding. Ryans develops complete children, not just exam-takers."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-purple-50">
                <div className="w-10 h-10 rounded-full bg-[#D4A72C] text-[#29252B] font-bold flex items-center justify-center text-sm">
                  VR
                </div>
                <div>
                  <h5 className="font-bold text-sm text-[#4B1F6F]">Dr. Venkat Raman</h5>
                  <p className="text-[11px] text-gray-500 font-medium">Father of Rohan (Grader 2)</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-7 rounded-3xl border border-purple-100 shadow-md flex flex-col justify-between card-interactive-lift reveal-on-scroll">
              <div>
                <div className="flex text-[#D4A72C] gap-1 text-sm mb-4">
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed font-medium mb-6 italic">
                  "The infrastructure is immaculate and child-safe. From clean playgrounds to attentive teachers and regular communication through WhatsApp, we always feel peace of mind."
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-purple-50">
                <div className="w-10 h-10 rounded-full bg-[#4B1F6F] text-white font-bold flex items-center justify-center text-sm">
                  PJ
                </div>
                <div>
                  <h5 className="font-bold text-sm text-[#4B1F6F]">Mrs. Priya Joseph</h5>
                  <p className="text-[11px] text-gray-500 font-medium">Mother of Kevin (Pre-KG)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Feature 4: Interactive Parent FAQ Accordion */}
      <section className="pt-8 pb-10 sm:pt-10 sm:pb-12 bg-white" id="parent-faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 reveal-on-scroll">
            <span className="gold-badge mb-2.5">
              <i className="fa-solid fa-circle-question text-[10px]"></i> Clarity For Parents
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#4B1F6F]">
              Frequently Asked <span className="text-shimmer-gold font-serif italic">Questions</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2 font-medium">
              Everything you need to know about safety, curriculum, routines, and admissions at Ryans Academy.
            </p>
          </div>

          <div className="space-y-4">
            {parentFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={faq.q}
                  className="rounded-2xl border border-purple-100 overflow-hidden transition-all duration-300 shadow-sm hover:border-[#D4A72C]/70"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    className={`w-full p-5 text-left flex items-center justify-between gap-4 transition-colors ${
                      isOpen ? 'bg-[#FAF8F4] text-[#4B1F6F]' : 'bg-white hover:bg-[#FAF8F4]/60 text-gray-800'
                    }`}
                  >
                    <span className="font-extrabold text-sm sm:text-base flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#4B1F6F] text-[#F3D98B] text-xs font-mono font-bold flex items-center justify-center flex-shrink-0">
                        {idx + 1}
                      </span>
                      {faq.q}
                    </span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#4B1F6F] text-white' : 'bg-purple-50 text-[#4B1F6F]'
                    }`}>
                      <i className="fa-solid fa-chevron-down"></i>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="p-5 pt-2 bg-[#FAF8F4] border-t border-purple-100/60 animate-fade-in text-xs sm:text-sm text-gray-600 font-medium leading-relaxed pl-14">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Still Have Questions Box */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-purple-50 via-white to-amber-50/50 border border-purple-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
            <div>
              <h5 className="font-bold text-sm text-[#4B1F6F]">Have a question specific to your child?</h5>
              <p className="text-xs text-gray-500 font-medium">Our admissions coordinators are available for a friendly phone conversation.</p>
            </div>
            <button
              type="button"
              onClick={() => openModal('Play Group', 'enquiry')}
              className="btn-purple text-xs py-2 px-5 shadow-sm hover:scale-105 transition-all flex-shrink-0"
            >
              Ask an Admissions Counselor
            </button>
          </div>
        </div>
      </section>

      {/* Section 12: Admissions Final Call to Action */}
      <section className="pt-10 pb-12 sm:pt-12 sm:pb-14 bg-gradient-to-r from-[#4B1F6F] via-[#6B3A8D] to-[#4B1F6F] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="bg-[#D4A72C] text-[#29252B] text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
            Admissions Open 2026-27
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Begin Your Child's Journey With Us
          </h2>
          <p className="text-purple-100 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            Take the first step towards joyful learning, character building, and academic excellence. Schedule a personalized campus walk or apply online in just a few clicks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="btn-gold text-base py-3.5 px-8" onClick={() => openModal("Play Group", "enquiry")}>
              <i className="fa-solid fa-file-lines"></i> Apply Online Now
            </button>
            <button className="btn-outline-gold text-base py-3.5 px-8 border-white text-white hover:bg-white hover:text-[#4B1F6F]" onClick={() => openModal("Play Group", "visit")}>
              <i className="fa-solid fa-calendar-check"></i> Book a School Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
