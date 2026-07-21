import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import { doctorsData } from '../data/doctorsData';
import { Calendar, ShieldAlert } from 'lucide-react';

export const DoctorDetailPage = () => {
  const { id } = useParams();
  const doctor = doctorsData.find((d) => d.id === id) || doctorsData[0];

  return (
    <>
      <SEOHead
        title={`${doctor.name} - Specialist Profile`}
        description={doctor.bio}
        path={`/doctors/${doctor.id}`}
      />

      <div className="bg-pearl py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <Breadcrumbs
            items={[
              { label: 'Doctors', link: '/doctors' },
              { label: doctor.name }
            ]}
          />

          <div className="bg-white rounded-3xl p-8 border border-navy/10 shadow-lg grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4">
              <img src={doctor.image} alt={doctor.name} className="w-full h-80 object-cover rounded-2xl shadow-md" />
            </div>

            <div className="md:col-span-8 space-y-4">
              <span className="text-xs font-bold text-cyan-iris uppercase tracking-wider bg-cyan-iris/10 px-3 py-1 rounded-full">
                {doctor.speciality}
              </span>
              <h1 className="font-heading text-3xl font-extrabold text-navy">{doctor.name}</h1>
              <p className="text-sm font-semibold text-navy/70">{doctor.designation}</p>
              <p className="text-xs text-navy/80 leading-relaxed">{doctor.bio}</p>

              <div className="bg-pearl p-4 rounded-2xl border border-navy/10 text-xs space-y-1 text-navy/80">
                <p><strong>Qualifications:</strong> {doctor.qualifications}</p>
                <p><strong>OPD Days:</strong> {doctor.consultationDays}</p>
                <p><strong>Languages:</strong> {doctor.languages.join(', ')}</p>
              </div>

              <div className="p-3 bg-navy-dark text-white rounded-xl text-xs flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-gold-lens flex-shrink-0" />
                <span>{doctor.disclaimer}</span>
              </div>

              <div className="pt-2">
                <Link
                  to="/book-appointment"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-navy to-cyan-iris text-white text-xs font-bold px-7 py-3.5 rounded-full shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation with Specialist</span>
                </Link>
              </div>
            </div>
          </div>

          <MedicalDisclaimer />
        </div>
      </div>
    </>
  );
};

export default DoctorDetailPage;
