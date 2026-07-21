import React from 'react';
import SEOHead from '../components/common/SEOHead';
import Breadcrumbs from '../components/common/Breadcrumbs';
import MedicalDisclaimer from '../components/common/MedicalDisclaimer';
import { MapPin, Phone, Mail, Clock, MessageSquare, Car, Bus, Accessibility, ShieldCheck } from 'lucide-react';

export const ContactPage = () => {
  return (
    <>
      <SEOHead
        title="Contact & Location in Ahmedabad | Lumora Eye Institute"
        description="Find Lumora Eye Institute in Ahmedabad, Gujarat. Access OPD hours, contact numbers, map placeholders, and directions."
        path="/contact"
      />

      <div className="bg-pearl py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <Breadcrumbs items={[{ label: 'Contact & Location' }]} />

          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-cyan-iris uppercase tracking-widest bg-cyan-iris/10 px-3 py-1 rounded-full">
              Hospital Location & Access
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy">
              Contact & Visit Lumora Eye Institute
            </h1>
            <p className="text-sm text-navy/70">
              Conveniently serving patients across Satellite, Bodakdev, Prahlad Nagar, Vastrapur, Thaltej, Bopal, Navrangpura, Gota, Chandkheda, and Maninagar in Ahmedabad.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-6">
              
              {/* Map Placeholder Container */}
              <div className="bg-navy-dark text-white p-8 rounded-3xl border border-cyan-iris/30 space-y-4 shadow-xl">
                <h3 className="font-heading font-bold text-xl text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-cyan-bright" />
                  <span>Hospital Address & Local Map Demo</span>
                </h3>
                <p className="text-xs text-silver-soft leading-relaxed">
                  SG Highway, Satellite (Fictional Portfolio Placeholder Location), Ahmedabad, Gujarat, India 380015
                </p>

                {/* Simulated Map Graphic Box */}
                <div className="h-64 rounded-2xl bg-navy/80 border border-cyan-iris/30 flex flex-col items-center justify-center space-y-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-iris-radial opacity-40"></div>
                  <MapPin className="w-10 h-10 text-cyan-bright animate-bounce" />
                  <span className="text-xs font-bold text-white z-10">Ahmedabad Eye Hospital Location Demo</span>
                  <span className="text-[11px] text-silver-medium z-10">Near SG Highway & Satellite Junction</span>
                </div>
              </div>

              {/* Transit & Parking Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-navy/10 space-y-1">
                  <Car className="w-5 h-5 text-cyan-iris" />
                  <h4 className="font-heading font-bold text-xs text-navy">Valet Parking</h4>
                  <p className="text-[11px] text-navy/70">Complimentary basement valet parking for patients.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-navy/10 space-y-1">
                  <Bus className="w-5 h-5 text-violet-prism" />
                  <h4 className="font-heading font-bold text-xs text-navy">BRTS Access</h4>
                  <p className="text-[11px] text-navy/70">2-minute walk from SG Highway BRTS Bus Stop.</p>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-navy/10 space-y-1">
                  <Accessibility className="w-5 h-5 text-gold-lens" />
                  <h4 className="font-heading font-bold text-xs text-navy">Wheelchair Access</h4>
                  <p className="text-[11px] text-navy/70">Barrier-free ramps and dedicated elevator access.</p>
                </div>
              </div>
            </div>

            {/* Sidebar Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-8 rounded-3xl border border-navy/10 space-y-6 shadow-sm">
                <h3 className="font-heading font-bold text-xl text-navy">Clinical Hours & Contact</h3>
                
                <div className="space-y-4 text-xs text-navy/80">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-4 h-4 text-cyan-iris flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-navy">OPD Timings:</strong>
                      <span>Monday - Saturday: 9:00 AM - 7:00 PM</span><br />
                      <span>Sunday: Emergency Triage Only</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-4 h-4 text-cyan-iris flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-navy">OPD Appointments:</strong>
                      <span>+91 7600 583 156 (Portfolio Hotline)</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MessageSquare className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-navy">WhatsApp Enquiry:</strong>
                      <span>Instant click-to-chat ready</span>
                    </div>
                  </div>
                </div>
              </div>

              <MedicalDisclaimer variant="compact" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
