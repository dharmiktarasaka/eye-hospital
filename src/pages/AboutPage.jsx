import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import { Eye, ShieldCheck, Award, Heart, CheckCircle2, ArrowRight } from 'lucide-react';

export const AboutPage = () => {
  return (
    <>
      <SEOHead
        title="About Lumora Eye Institute"
        description="Learn about Lumora Eye Institute, an advanced vision care institute concept in Ahmedabad delivering ophthalmology, cataract care, retina services, and LASIK."
        path="/about"
      />

      <div className="bg-pearl py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'About Institute' }]} />

          <div className="space-y-12">
            {/* Header */}
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold text-cyan-iris uppercase tracking-widest bg-cyan-iris/10 px-3 py-1 rounded-full">
                About Lumora Eye Institute
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy">
                See Life More Clearly with Precision Vision Care
              </h1>
              <p className="text-base text-navy/80 leading-relaxed font-medium">
                Lumora Eye Institute is a fictional advanced eye-care centre offering comprehensive ophthalmology, micro-incision cataract surgery, vitreoretinal care, glaucoma management, Contoura LASIK, paediatric eye care, and emergency triage in Ahmedabad, Gujarat, India.
              </p>
            </div>

            {/* Mission & Vision Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-navy/10 space-y-4 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-cyan-iris/20 text-cyan-iris flex items-center justify-center">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-navy">Our Vision Care Philosophy</h3>
                <p className="text-xs sm:text-sm text-navy/75 leading-relaxed">
                  Combining modern optical science, high-definition Spectral Domain OCT imaging, blade-free femtosecond lasers, and patient-centered clinical compassion to protect and enhance human sight.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-navy/10 space-y-4 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-violet-prism/20 text-violet-prism flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-xl text-navy">Fictional Portfolio Commitment</h3>
                <p className="text-xs sm:text-sm text-navy/75 leading-relaxed">
                  This website is a fictional concept created by TARASAKA DIGITAL Solutions for portfolio presentation. All doctor profiles, clinical numbers, and schedule data are illustrative placeholders.
                </p>
              </div>
            </div>

            <MedicalDisclaimer />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
