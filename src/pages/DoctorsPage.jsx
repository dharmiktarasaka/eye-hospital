import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import { doctorsData } from '../data/doctorsData';
import { Search, Calendar, Filter, ShieldAlert } from 'lucide-react';

export const DoctorsPage = () => {
  const [selectedSpec, setSelectedSpec] = useState('All');
  const specs = ['All', 'Cataract & Refractive Surgery', 'Vitreoretinal Services & Diabetic Eye Care', 'Glaucoma & Cornea Specialist', 'Paediatric Ophthalmology & Strabismus', 'Oculoplasty & Emergency Eye Care'];

  const filteredDoctors = doctorsData.filter((doc) =>
    selectedSpec === 'All' || doc.speciality === selectedSpec
  );

  return (
    <>
      <SEOHead
        title="Ophthalmologists & Eye Specialists"
        description="Browse ophthalmologists and eye care specialists at Lumora Eye Institute in Ahmedabad. Note: Placeholder profiles for portfolio presentation."
        path="/doctors"
      />

      <div className="bg-pearl py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <Breadcrumbs items={[{ label: 'Specialist Directory' }]} />

          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-cyan-iris uppercase tracking-widest bg-cyan-iris/10 px-3 py-1 rounded-full">
              Specialist Faculty
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy">
              Ophthalmology Specialist Faculty
            </h1>
            <p className="text-sm text-navy/70">
              Filter by speciality area including Cataract, Retina, Glaucoma, Cornea, LASIK, and Paediatrics.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 bg-white p-4 rounded-2xl border border-navy/10">
            <Filter className="w-4 h-4 text-cyan-iris" />
            {specs.map((spec) => (
              <button
                key={spec}
                onClick={() => setSelectedSpec(spec)}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all ${
                  selectedSpec === spec
                    ? 'bg-cyan-iris text-white'
                    : 'bg-pearl text-navy/70 hover:bg-navy/5'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>

          {/* Doctor Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredDoctors.map((doc) => (
              <div key={doc.id} className="bg-white rounded-3xl p-6 border border-navy/10 shadow-sm space-y-4 flex flex-col justify-between">
                <div>
                  <img src={doc.image} alt={doc.name} className="w-full h-60 object-cover rounded-2xl mb-4" />
                  <span className="text-[11px] bg-cyan-iris/10 text-cyan-iris font-bold px-3 py-1 rounded-full">
                    {doc.speciality}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-navy mt-3">{doc.name}</h3>
                  <p className="text-xs text-navy/70">{doc.designation}</p>
                  <p className="text-[11px] text-navy/60 mt-2 line-clamp-2">{doc.bio}</p>
                </div>

                <div className="pt-4 border-t border-navy/10 flex items-center justify-between">
                  <Link to={`/doctors/${doc.id}`} className="text-xs font-bold text-cyan-iris hover:underline">
                    View Profile →
                  </Link>
                  <Link to="/book-appointment" className="bg-navy text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-cyan-iris transition-colors">
                    Book Consult
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <MedicalDisclaimer />
        </div>
      </div>
    </>
  );
};

export default DoctorsPage;
