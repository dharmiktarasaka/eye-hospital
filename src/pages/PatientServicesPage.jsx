import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import { Calendar, FileText, Phone, ShieldCheck } from 'lucide-react';

export const PatientServicesPage = () => {
  return (
    <>
      <SEOHead
        title="Patient Services & Amenities"
        description="Comprehensive patient services, OPD scheduling, report access demo, and healthcare support at Lumora Eye Institute."
        path="/patient-services"
      />

      <div className="bg-pearl py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <Breadcrumbs items={[{ label: 'Patient Services' }]} />

          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-cyan-iris uppercase tracking-widest bg-cyan-iris/10 px-3 py-1 rounded-full">
              Patient Care & Amenities
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy">
              Patient Services & Support
            </h1>
            <p className="text-sm text-navy/70">
              Online appointment scheduling, digital report access demo, and senior-citizen friendly consultation workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-navy/10 space-y-4">
              <h3 className="font-heading font-bold text-xl text-navy">Report Access Demo</h3>
              <p className="text-xs sm:text-sm text-navy/75 leading-relaxed">
                Simulated digital patient portal interface allowing patients to request previous OCT scans, eyeglass prescriptions, and visual field reports.
              </p>
              <Link to="/book-appointment" className="inline-flex items-center text-xs font-bold text-cyan-iris hover:underline">
                Access Report Demo →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-navy/10 space-y-4">
              <h3 className="font-heading font-bold text-xl text-navy">Senior Citizen Visual Care</h3>
              <p className="text-xs sm:text-sm text-navy/75 leading-relaxed">
                Wheelchair-accessible consultation suites, large typography guides, and priority OPD assistance for senior patients.
              </p>
              <Link to="/contact" className="inline-flex items-center text-xs font-bold text-cyan-iris hover:underline">
                View Location & Parking Details →
              </Link>
            </div>
          </div>

          <MedicalDisclaimer />
        </div>
      </div>
    </>
  );
};

export default PatientServicesPage;
