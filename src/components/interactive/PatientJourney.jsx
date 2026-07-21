import React, { useState } from 'react';
import { Eye, CheckCircle2, Calendar, FileText, Stethoscope, Sparkles } from 'lucide-react';

export const PatientJourney = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "1. Discover", desc: "Explore eye symptoms and treatment options." },
    { title: "2. Learn", desc: "Read medically reviewed patient guides." },
    { title: "3. Select Service", desc: "Choose Cataract, Retina, LASIK, or Children's Care." },
    { title: "4. Book", desc: "Submit appointment preferences online or via WhatsApp." },
    { title: "5. Visit Clinic", desc: "In-person consultation in Ahmedabad facility." },
    { title: "6. Comprehensive Testing", desc: "OCT scans, visual fields, and biometry." },
    { title: "7. Treatment Plan", desc: "Personalized medical or surgical roadmap." },
    { title: "8. Follow-Up Care", desc: "Post-operative monitoring and long-term vision support." }
  ];

  return (
    <section className="py-20 bg-pearl relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-cyan-iris uppercase tracking-widest bg-cyan-iris/10 px-3 py-1 rounded-full">
            Patient Pathway
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy">
            Circular Eye-Inspired Patient Journey
          </h2>
          <p className="text-sm sm:text-base text-navy/70">
            From initial symptom discovery to advanced diagnostic testing and follow-up vision care.
          </p>
        </div>

        {/* Circular Iris Pathway Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer ${
                activeStep === idx
                  ? 'bg-navy text-white border-cyan-iris shadow-xl shadow-cyan-iris/20 transform -translate-y-1'
                  : 'bg-white text-navy border-navy/10 hover:border-cyan-iris/40 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                  activeStep === idx ? 'bg-cyan-iris text-white' : 'bg-navy/5 text-navy'
                }`}>
                  0{idx + 1}
                </span>
                {activeStep === idx && (
                  <CheckCircle2 className="w-5 h-5 text-cyan-bright" />
                )}
              </div>
              <h3 className={`font-heading font-bold text-base mb-2 ${
                activeStep === idx ? 'text-white' : 'text-navy'
              }`}>
                {step.title}
              </h3>
              <p className={`text-xs leading-relaxed ${
                activeStep === idx ? 'text-silver-soft' : 'text-navy/70'
              }`}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientJourney;
