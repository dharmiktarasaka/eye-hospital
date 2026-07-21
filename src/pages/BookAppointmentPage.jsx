import React from 'react';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import MultiStepAppointmentForm from '../components/forms/MultiStepAppointmentForm';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';

export const BookAppointmentPage = () => {
  return (
    <>
      <SEOHead
        title="Book an Eye Consultation in Ahmedabad"
        description="Schedule an eye examination, cataract assessment, retina consultation, or LASIK screening at Lumora Eye Institute."
        path="/book-appointment"
      />

      <div className="bg-pearl py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <Breadcrumbs items={[{ label: 'Book Eye Consultation' }]} />

          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-cyan-iris uppercase tracking-widest bg-cyan-iris/10 px-3 py-1 rounded-full">
              Patient Scheduling Portal
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy">
              Book an Eye Consultation
            </h1>
            <p className="text-sm text-navy/70">
              Select your primary eye concern, preferred time slot, and specialist department in our 3-step scheduling wizard.
            </p>
          </div>

          <MultiStepAppointmentForm />
          <MedicalDisclaimer />
        </div>
      </div>
    </>
  );
};

export default BookAppointmentPage;
