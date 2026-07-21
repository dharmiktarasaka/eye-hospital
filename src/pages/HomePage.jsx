import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import VisionHero from '../components/hero/VisionHero';
import QuickEyeCareAccess from '../components/sections/QuickEyeCareAccess';
import EyeConcernFinder from '../components/interactive/EyeConcernFinder';
import LensClaritySimulator from '../components/simulators/LensClaritySimulator';
import VisionSimulator from '../components/simulators/VisionSimulator';
import RetinaScanSection from '../components/interactive/RetinaScanSection';
import PatientJourney from '../components/interactive/PatientJourney';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import { centresData } from '../data/centresData';
import { doctorsData } from '../data/doctorsData';
import { diagnosticsData } from '../data/diagnosticsData';
import { articlesData } from '../data/articlesData';
import { faqsData } from '../data/faqsData';
import { ArrowRight, Eye, Calendar, Sparkles, CheckCircle2, ShieldAlert, Award, ChevronDown, MapPin, Globe, Phone } from 'lucide-react';

export const HomePage = () => {
  return (
    <>
      <SEOHead
        title="Eye Hospital in Ahmedabad"
        description="Explore comprehensive eye care, cataract services, retina care, glaucoma management, LASIK, paediatric eye care, diagnostics, and patient consultation at Lumora Eye Institute in Ahmedabad."
        schemaType="Hospital"
      />

      {/* SECTION 1: CINEMATIC VISION HERO */}
      <VisionHero />

      {/* SECTION 2: QUICK EYE-CARE ACCESS */}
      <QuickEyeCareAccess />

      {/* SECTION 3: EYE-CONCERN FINDER */}
      <EyeConcernFinder />

      {/* SECTION 4: CENTRES OF EXCELLENCE */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-cyan-iris uppercase tracking-widest bg-cyan-iris/10 px-3 py-1 rounded-full">
              Ophthalmology Departments
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy">
              Centres of Excellence
            </h2>
            <p className="text-sm sm:text-base text-navy/70">
              Specialized clinical departments equipped with advanced diagnostic imaging and micro-surgical infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {centresData.map((centre) => (
              <div
                key={centre.id}
                className="group rounded-3xl border border-navy/10 bg-pearl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="relative h-56 rounded-2xl overflow-hidden">
                    <img
                      src={centre.image}
                      alt={centre.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
                    <h3 className="absolute bottom-4 left-4 font-heading font-extrabold text-xl text-white">
                      {centre.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-navy/80 leading-relaxed font-medium">
                    {centre.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold text-cyan-iris uppercase">Key Procedures:</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs text-navy/75">
                      {centre.keyServices.map((service, idx) => (
                        <div key={idx} className="flex items-center space-x-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-iris flex-shrink-0" />
                          <span className="truncate">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-navy/10 flex items-center justify-between">
                  <Link
                    to={`/${centre.id}`}
                    className="inline-flex items-center space-x-2 text-xs font-bold text-navy group-hover:text-cyan-iris transition-colors"
                  >
                    <span>{centre.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CATARACT CARE JOURNEY & SIMULATOR */}
      <section className="py-20 bg-navy-dark text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-cyan-bright uppercase tracking-widest bg-cyan-iris/20 px-3 py-1 rounded-full">
              Cataract & IOL Lens Technology
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              Cataract Care Journey & Lens Clarity Simulator
            </h2>
            <p className="text-sm text-silver-soft">
              Experience how micro-incision cataract surgery restores natural light transmission and sharp optical resolution.
            </p>
          </div>

          <LensClaritySimulator />
        </div>
      </section>

      {/* SECTION 6: RETINA SCAN SECTION */}
      <RetinaScanSection />

      {/* SECTION 7: LASIK & VISION SIMULATOR */}
      <section className="py-20 bg-pearl relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-gold-lens uppercase tracking-widest bg-gold-lens/10 px-3 py-1 rounded-full">
              Refractive Vision Correction
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy">
              LASIK & Contoura Vision Simulator
            </h2>
            <p className="text-sm text-navy/70">
              Visualize the dramatic visual contrast transformation provided by femtosecond laser corneal topography mapping.
            </p>
          </div>

          <VisionSimulator />
        </div>
      </section>

      {/* SECTION 9: ADVANCED DIAGNOSTICS PREVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-cyan-iris uppercase tracking-widest bg-cyan-iris/10 px-3 py-1 rounded-full">
              Diagnostic Testing Suite
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy">
              Advanced Diagnostic Technologies
            </h2>
            <p className="text-sm text-navy/70">
              High-resolution OCT 3D imaging, non-contact tonometry, and corneal elevation mapping for accurate clinical evaluation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {diagnosticsData.slice(0, 3).map((diag) => (
              <div key={diag.id} className="p-6 rounded-3xl bg-pearl border border-navy/10 space-y-4">
                <img src={diag.image} alt={diag.title} className="w-full h-44 object-cover rounded-2xl" />
                <span className="text-[10px] bg-cyan-iris/10 text-cyan-iris font-bold px-2.5 py-1 rounded-full">
                  {diag.category}
                </span>
                <h3 className="font-heading font-bold text-lg text-navy">{diag.title}</h3>
                <p className="text-xs text-navy/70 leading-relaxed">{diag.purpose}</p>
                <Link to="/diagnostics" className="inline-flex items-center text-xs font-bold text-cyan-iris hover:underline">
                  <span>Learn About Test</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: DOCTOR DIRECTORY PREVIEW */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-cyan-bright uppercase tracking-widest bg-cyan-iris/20 px-3 py-1 rounded-full">
              Specialist Faculty
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              Ophthalmologists & Eye Specialists
            </h2>
            <p className="text-sm text-silver-soft">
              Consult with experienced eye specialists in Cataract, Retina, Glaucoma, Cornea, and Paediatric Ophthalmology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctorsData.slice(0, 3).map((doctor) => (
              <div key={doctor.id} className="glass-capsule-dark rounded-3xl p-6 border border-cyan-iris/30 space-y-4 flex flex-col justify-between">
                <div>
                  <img src={doctor.image} alt={doctor.name} className="w-full h-56 object-cover rounded-2xl mb-4" />
                  <span className="text-[11px] bg-cyan-iris/20 text-cyan-bright font-bold px-3 py-1 rounded-full">
                    {doctor.speciality}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-white mt-3">{doctor.name}</h3>
                  <p className="text-xs text-silver-soft">{doctor.designation}</p>
                  <p className="text-[11px] text-silver-medium mt-2 line-clamp-2">{doctor.bio}</p>
                </div>
                
                <div className="pt-4 border-t border-cyan-iris/20 flex items-center justify-between">
                  <Link to={`/doctors/${doctor.id}`} className="text-xs font-bold text-cyan-bright hover:underline">
                    View Specialist Profile →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: PATIENT JOURNEY */}
      <PatientJourney />

      {/* SECTION 15: EYE HEALTH LIBRARY PREVIEW */}
      <section className="py-20 bg-pearl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-cyan-iris uppercase tracking-widest bg-cyan-iris/10 px-3 py-1 rounded-full">
              Patient Education
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy">
              Eye Health Library
            </h2>
            <p className="text-sm text-navy/70">
              Medically responsible visual guides explaining symptoms, screening processes, and modern surgical options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articlesData.slice(0, 3).map((article) => (
              <Link key={article.id} to={`/eye-health-library/${article.id}`} className="group bg-white rounded-3xl p-6 border border-navy/10 hover:shadow-xl transition-all">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-2xl mb-4 group-hover:scale-105 transition-transform" />
                <span className="text-[11px] font-bold text-cyan-iris">{article.category}</span>
                <h3 className="font-heading font-bold text-base text-navy group-hover:text-cyan-iris transition-colors mt-1 mb-2">
                  {article.title}
                </h3>
                <p className="text-xs text-navy/70 line-clamp-2">{article.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 16: FAQS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12 space-y-3">
            <h2 className="font-heading text-3xl font-extrabold text-navy">Frequently Asked Questions</h2>
            <p className="text-sm text-navy/70">Common queries regarding eye examinations, cataract surgery, and LASIK.</p>
          </div>

          <div className="space-y-4">
            {faqsData.slice(0, 6).map((faq) => (
              <div key={faq.id} className="p-5 rounded-2xl bg-pearl border border-navy/10 space-y-2">
                <h3 className="font-heading font-bold text-base text-navy">{faq.question}</h3>
                <p className="text-xs text-navy/80 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDICAL DISCLAIMER BANNER */}
      <div className="max-w-7xl mx-auto px-4">
        <MedicalDisclaimer />
      </div>

      {/* SECTION 43: PORTFOLIO SUPPORT SECTION */}
      <section className="py-12 bg-navy-dark text-white border-t border-cyan-iris/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-cyan-iris/20 text-cyan-bright border border-cyan-iris/40 px-4 py-1.5 rounded-full text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-gold-lens" />
            <span>Eye Hospital Website Concept by TARASAKA DIGITAL Solutions</span>
          </div>
          <h3 className="font-heading font-bold text-xl text-white">Need an Eye Hospital Website Like This?</h3>
          <p className="text-xs text-silver-soft max-w-xl mx-auto">
            TARASAKA DIGITAL Solutions specializes in healthcare digital marketing, local SEO for eye clinics, medical website design, and AEO/GEO optimization.
          </p>
          <a
            href="https://tarasaka.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gold-lens hover:bg-gold-bright text-navy font-bold text-xs px-6 py-3 rounded-full transition-colors"
          >
            <span>Contact TARASAKA DIGITAL Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </>
  );
};

export default HomePage;
