import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Phone, Mail, MapPin, ExternalLink, Calendar, AlertCircle, MessageSquare, ShieldCheck, Heart } from 'lucide-react';

export const OpticalFooter = () => {
  return (
    <footer className="relative bg-navy-dark text-white overflow-hidden pt-12 border-t border-cyan-iris/20">
      
      {/* Top CTA Banner Band with Optical Flare */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative rounded-3xl overflow-hidden border border-cyan-iris/30 bg-gradient-to-r from-navy via-navy-light to-navy p-8 md:p-12 shadow-2xl">
          <div className="absolute inset-0 bg-iris-radial opacity-60 pointer-events-none"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center space-x-2 bg-cyan-iris/20 text-cyan-bright px-3.5 py-1 rounded-full text-xs font-semibold">
                <Eye className="w-3.5 h-3.5" />
                <span>Start Your Clear Vision Journey Today</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-white">
                Take the Next Step Toward Clearer Vision
              </h3>
              <p className="text-sm text-silver-soft leading-relaxed">
                Explore eye-care services, learn about your visual concern, and request a specialist consultation through a patient-friendly digital experience.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/book-appointment"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-iris to-violet-prism hover:from-cyan-bright hover:to-cyan-iris text-white font-bold text-xs px-7 py-3.5 rounded-full shadow-lg shadow-cyan-iris/30 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Eye Consultation</span>
              </Link>
              <Link
                to="/emergency-eye-care"
                className="inline-flex items-center space-x-2 bg-coral-light/20 border border-coral-light/40 text-coral-light hover:bg-coral-light hover:text-white font-semibold text-xs px-6 py-3.5 rounded-full transition-all"
              >
                <AlertCircle className="w-4 h-4" />
                <span>Urgent Emergency Care</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Curved Lens Boundary */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Fictional Disclaimer (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-navy border border-cyan-iris flex items-center justify-center">
                <Eye className="w-5 h-5 text-cyan-bright" />
              </div>
              <span className="font-heading font-extrabold text-xl text-white">
                Lumora <span className="text-cyan-iris">Eye Institute</span>
              </span>
            </Link>

            <p className="text-xs text-silver-soft leading-relaxed">
              Advanced Vision Care Institute specializing in Micro-Incision Cataract Surgery, Vitreoretinal care, Glaucoma screening, Contoura LASIK, and Paediatric Ophthalmology in Ahmedabad, Gujarat.
            </p>

            <div className="bg-navy/80 p-3.5 rounded-2xl border border-cyan-iris/20 text-[11px] text-silver-medium space-y-1">
              <p className="text-gold-lens font-bold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Fictional Portfolio Notice
              </p>
              <p>
                Created by TARASAKA DIGITAL Solutions for healthcare website presentation and technical demonstration.
              </p>
            </div>
          </div>

          {/* Col 2: Iris Navigation Links (5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6 text-xs">
            <div>
              <h4 className="font-heading font-bold text-sm text-cyan-bright mb-3">Clinical Specialities</h4>
              <ul className="space-y-2 text-silver-soft">
                <li><Link to="/cataract-centre" className="hover:text-white transition-colors">Cataract Surgery & MICS</Link></li>
                <li><Link to="/retina-centre" className="hover:text-white transition-colors">Vitreoretinal Services</Link></li>
                <li><Link to="/glaucoma-centre" className="hover:text-white transition-colors">Glaucoma Screening</Link></li>
                <li><Link to="/lasik" className="hover:text-white transition-colors">LASIK & Contoura Vision</Link></li>
                <li><Link to="/paediatric-eye-care" className="hover:text-white transition-colors">Paediatric Ophthalmology</Link></li>
                <li><Link to="/diagnostics" className="hover:text-white transition-colors">OCT & Corneal Topography</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-sm text-violet-prism mb-3">Patient Navigation</h4>
              <ul className="space-y-2 text-silver-soft">
                <li><Link to="/conditions" className="hover:text-white transition-colors">Symptom & Concern Finder</Link></li>
                <li><Link to="/doctors" className="hover:text-white transition-colors">Eye Specialists Directory</Link></li>
                <li><Link to="/international-patients" className="hover:text-white transition-colors">International Patient Care</Link></li>
                <li><Link to="/eye-health-library" className="hover:text-white transition-colors">Eye Health Library</Link></li>
                <li><Link to="/faqs" className="hover:text-white transition-colors">Frequently Asked Questions</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact & Location</Link></li>
              </ul>
            </div>
          </div>

          {/* Col 3: Location & Contact Info (3 Cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs text-silver-soft">
            <h4 className="font-heading font-bold text-sm text-gold-lens mb-2">Hospital Location</h4>
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-cyan-iris flex-shrink-0 mt-0.5" />
              <span>SG Highway, Satellite (Fictional Placeholder), Ahmedabad, Gujarat, India 380015</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-cyan-iris flex-shrink-0" />
              <span>+91 7600 583 156 (Portfolio Hotline)</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>WhatsApp Enquiry Ready</span>
            </div>
            <div className="pt-2 text-[11px] text-silver-medium">
              <span>OPD Hours: Mon - Sat (9:00 AM - 7:00 PM)</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Disclosure Strip */}
        <div className="border-t border-cyan-iris/20 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-silver-medium text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/disclaimer" className="hover:text-white transition-colors">Medical Disclaimer</Link>
            <Link to="/accessibility" className="hover:text-white transition-colors">Accessibility Statement</Link>
          </div>

          <div>
            © {new Date().getFullYear()} Lumora Eye Institute • Fictional Healthcare Concept
          </div>
        </div>

        {/* Developer Credit Panel for TARASAKA DIGITAL Solutions */}
        <div className="mt-8 pt-6 border-t border-navy-light/40 bg-navy/60 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center space-x-2 text-silver-soft">
            <Heart className="w-4 h-4 text-coral-light fill-coral-light" />
            <span>
              Designed & Developed by <strong className="text-white font-bold">TARASAKA DIGITAL Solutions</strong> (Ahmedabad, India)
            </span>
          </div>

          <div className="flex items-center space-x-4 text-[11px]">
            <a
              href="https://tarasaka.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-bright hover:underline flex items-center gap-1 font-semibold"
            >
              tarasaka.com <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://portfolio.tarasaka.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-lens hover:underline flex items-center gap-1 font-semibold"
            >
              portfolio.tarasaka.com <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default OpticalFooter;
