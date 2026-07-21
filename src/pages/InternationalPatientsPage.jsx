import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import { Globe, Calendar, Plane, FileText, CheckCircle2 } from 'lucide-react';

export const InternationalPatientsPage = () => {
  return (
    <>
      <SEOHead
        title="International Patient Services & Medical Tourism"
        description="Remote ophthalmology document review, travel coordination, and international patient assistance at Lumora Eye Institute."
        path="/international-patients"
      />

      <div className="bg-pearl py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <Breadcrumbs items={[{ label: 'International Patients' }]} />

          <div className="bg-navy-dark text-white rounded-3xl p-8 md:p-12 space-y-4 shadow-2xl relative overflow-hidden">
            <span className="text-xs font-bold text-cyan-bright uppercase tracking-widest bg-cyan-iris/20 px-3 py-1 rounded-full">
              Global Vision Care Assistance
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              International Patient Care & Coordination
            </h1>
            <p className="text-base text-silver-soft max-w-3xl leading-relaxed">
              Serving healthcare organizations remotely across India and international markets. Explore remote report review demo, itinerary guidance, and specialized ophthalmic coordination.
            </p>
            <div className="pt-4">
              <Link
                to="/book-appointment"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-iris to-violet-prism text-white font-bold text-xs px-7 py-3.5 rounded-full shadow-lg"
              >
                <Globe className="w-4 h-4" />
                <span>Submit Remote Enquiry Demo</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-navy/10 space-y-3">
              <FileText className="w-8 h-8 text-cyan-iris" />
              <h3 className="font-heading font-bold text-lg text-navy">1. Remote Document Review</h3>
              <p className="text-xs text-navy/70">Submit OCT scans and corneal topography for preliminary specialist evaluation.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-navy/10 space-y-3">
              <Plane className="w-8 h-8 text-violet-prism" />
              <h3 className="font-heading font-bold text-lg text-navy">2. Travel & Stay Guidance</h3>
              <p className="text-xs text-navy/70">Accommodation recommendations and clinical visit scheduling in Ahmedabad.</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-navy/10 space-y-3">
              <Globe className="w-8 h-8 text-gold-lens" />
              <h3 className="font-heading font-bold text-lg text-navy">3. Language Support</h3>
              <p className="text-xs text-navy/70">Multilingual consultation support for seamless patient-doctor communication.</p>
            </div>
          </div>

          <MedicalDisclaimer />
        </div>
      </div>
    </>
  );
};

export default InternationalPatientsPage;
