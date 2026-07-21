import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EyeConditionsPage from './pages/EyeConditionsPage';
import ConditionDetailPage from './pages/ConditionDetailPage';
import TreatmentsPage from './pages/TreatmentsPage';
import TreatmentDetailPage from './pages/TreatmentDetailPage';
import CataractCentrePage from './pages/CataractCentrePage';
import RetinaCentrePage from './pages/RetinaCentrePage';
import GlaucomaCentrePage from './pages/GlaucomaCentrePage';
import CorneaCentrePage from './pages/CorneaCentrePage';
import LasikPage from './pages/LasikPage';
import PaediatricPage from './pages/PaediatricPage';
import EmergencyPage from './pages/EmergencyPage';
import DiagnosticsPage from './pages/DiagnosticsPage';
import DoctorsPage from './pages/DoctorsPage';
import DoctorDetailPage from './pages/DoctorDetailPage';
import InternationalPatientsPage from './pages/InternationalPatientsPage';
import PatientServicesPage from './pages/PatientServicesPage';
import EyeHealthLibraryPage from './pages/EyeHealthLibraryPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import BookAppointmentPage from './pages/BookAppointmentPage';
import ContactPage from './pages/ContactPage';
import TechnologyFacilitiesPage from './pages/TechnologyFacilitiesPage';
import CareersPage from './pages/CareersPage';
import FaqsPage from './pages/FaqsPage';
import LegalPage from './pages/LegalPage';
import NotFoundPage from './pages/NotFoundPage';

export function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/conditions" element={<EyeConditionsPage />} />
        <Route path="/conditions/:id" element={<ConditionDetailPage />} />
        <Route path="/treatments" element={<TreatmentsPage />} />
        <Route path="/treatments/:id" element={<TreatmentDetailPage />} />
        <Route path="/cataract-centre" element={<CataractCentrePage />} />
        <Route path="/retina-centre" element={<RetinaCentrePage />} />
        <Route path="/glaucoma-centre" element={<GlaucomaCentrePage />} />
        <Route path="/cornea-centre" element={<CorneaCentrePage />} />
        <Route path="/lasik" element={<LasikPage />} />
        <Route path="/paediatric-eye-care" element={<PaediatricPage />} />
        <Route path="/emergency-eye-care" element={<EmergencyPage />} />
        <Route path="/diagnostics" element={<DiagnosticsPage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/doctors/:id" element={<DoctorDetailPage />} />
        <Route path="/international-patients" element={<InternationalPatientsPage />} />
        <Route path="/patient-services" element={<PatientServicesPage />} />
        <Route path="/eye-health-library" element={<EyeHealthLibraryPage />} />
        <Route path="/eye-health-library/:id" element={<ArticleDetailPage />} />
        <Route path="/book-appointment" element={<BookAppointmentPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/technology-facilities" element={<TechnologyFacilitiesPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/faqs" element={<FaqsPage />} />
        
        {/* Legal Routes */}
        <Route path="/privacy" element={<LegalPage />} />
        <Route path="/terms" element={<LegalPage />} />
        <Route path="/disclaimer" element={<LegalPage />} />
        <Route path="/accessibility" element={<LegalPage />} />

        {/* 404 Custom Fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
