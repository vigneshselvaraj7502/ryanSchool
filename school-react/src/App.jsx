import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';

// Global Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';
import WhatsAppFloat from './components/WhatsAppFloat';
import EnquiryModal from './components/EnquiryModal';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AcademicsPage from './pages/AcademicsPage';
import ProgramsPage from './pages/ProgramsPage';
import FacilitiesPage from './pages/FacilitiesPage';
import ActivitiesPage from './pages/ActivitiesPage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import AdmissionsPage from './pages/AdmissionsPage';
import ContactPage from './pages/ContactPage';
import PlaygroupPage from './pages/PlaygroupPage';
import NurseryPage from './pages/NurseryPage';
import JuniorKgPage from './pages/JuniorKgPage';
import SeniorKgPage from './pages/SeniorKgPage';
import DaycarePage from './pages/DaycarePage';
import ParkPage from './pages/ParkPage';
import NewsPage from './pages/NewsPage';
import PrincipalPage from './pages/PrincipalPage';

export default function App() {
  return (
    <ModalProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/academics" element={<AcademicsPage />} />
              <Route path="/programs" element={<ProgramsPage />} />
              <Route path="/facilities" element={<FacilitiesPage />} />
              <Route path="/activities" element={<ActivitiesPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/admissions" element={<AdmissionsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/playgroup" element={<PlaygroupPage />} />
              <Route path="/nursery" element={<NurseryPage />} />
              <Route path="/juniorkg" element={<JuniorKgPage />} />
              <Route path="/seniorkg" element={<SeniorKgPage />} />
              <Route path="/daycare" element={<DaycarePage />} />
              <Route path="/park" element={<ParkPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/principal" element={<PrincipalPage />} />
              {/* Fallback to Home */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
          <MobileActionBar />
          <WhatsAppFloat />
          <EnquiryModal />
        </div>
      </Router>
    </ModalProvider>
  );
}
