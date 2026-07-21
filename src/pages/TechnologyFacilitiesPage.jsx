import React from 'react';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';

export const TechnologyFacilitiesPage = () => {
  return (
    <>
      <SEOHead
        title="Facilities & Surgical Infrastructure"
        description="Editorial gallery showcase of Cataract operation theatre placeholders, OCT diagnostic rooms, LASIK suites, and patient lounges."
        path="/technology-facilities"
      />

      <div className="bg-pearl py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <Breadcrumbs items={[{ label: 'Facilities & Technology' }]} />

          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-cyan-iris uppercase tracking-widest bg-cyan-iris/10 px-3 py-1 rounded-full">
              Hospital Infrastructure
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy">
              Facilities & Surgical Suites
            </h1>
            <p className="text-sm text-navy/70">
              Visual showcase of modern clinical infrastructure, diagnostic imaging suites, and patient lounges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Micro-Surgical Theatre', desc: 'Ultra-clean modular cataract & vitreoretinal surgery suite.', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80' },
              { title: 'Femto-LASIK Suite', desc: 'Blade-free laser corneal reshaping room.', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80' },
              { title: 'OCT & Fundus Imaging Room', desc: 'High-definition 3D retina imaging diagnostic chamber.', img: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80' },
              { title: 'Paediatric Vision Lounge', desc: 'Child-friendly visual acuity testing area.', img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80' }
            ].map((fac, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-5 border border-navy/10 space-y-3 shadow-sm">
                <img src={fac.img} alt={fac.title} className="w-full h-44 object-cover rounded-2xl" />
                <h3 className="font-heading font-bold text-base text-navy">{fac.title}</h3>
                <p className="text-xs text-navy/70">{fac.desc}</p>
                <span className="text-[10px] bg-navy/5 text-navy/60 font-semibold block pt-2">Portfolio Facility Placeholder</span>
              </div>
            ))}
          </div>

          <MedicalDisclaimer />
        </div>
      </div>
    </>
  );
};

export default TechnologyFacilitiesPage;
