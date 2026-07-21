import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, ShieldAlert, Sparkles, Activity, Baby, AlertTriangle, ArrowRight } from 'lucide-react';

export const QuickEyeCareAccess = () => {
  const accessPanels = [
    {
      id: "book-eye-test",
      title: "Book Eye Test",
      description: "Routine vision assessment, eyeglass prescription, and refraction checks.",
      icon: Eye,
      color: "from-cyan-iris to-navy-light",
      borderColor: "border-cyan-iris/30",
      link: "/book-appointment",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "cataract-consultation",
      title: "Cataract Consultation",
      description: "Cloudy vision evaluation, biometry, and modern MICS IOL lens planning.",
      icon: Sparkles,
      color: "from-cyan-iris to-violet-prism",
      borderColor: "border-cyan-iris/30",
      link: "/cataract-centre",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "retina-screening",
      title: "Retina Screening",
      description: "Diabetic retinopathy checkups, OCT macular scanning, and floater checks.",
      icon: Activity,
      color: "from-violet-prism to-navy",
      borderColor: "border-violet-prism/30",
      link: "/retina-centre",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "lasik-assessment",
      title: "LASIK Assessment",
      description: "Topography mapping and suitability screening for glass-free vision.",
      icon: Sparkles,
      color: "from-gold-lens to-navy",
      borderColor: "border-gold-lens/30",
      link: "/lasik",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "children-checkup",
      title: "Children's Eye Check",
      description: "Child-friendly squint, lazy eye, and school vision screening.",
      icon: Baby,
      color: "from-cyan-bright to-navy-light",
      borderColor: "border-cyan-bright/30",
      link: "/paediatric-eye-care",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "emergency-triage",
      title: "Emergency Eye Care",
      description: "Urgent care for eye trauma, chemical splashes, and sudden vision loss.",
      icon: AlertTriangle,
      color: "from-coral-light to-navy",
      borderColor: "border-coral-light/40",
      link: "/emergency-eye-care",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="py-16 bg-pearl relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold text-cyan-iris uppercase tracking-widest bg-cyan-iris/10 px-3 py-1 rounded-full">
            Fast Access Panels
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy">
            Quick Eye-Care Services
          </h2>
          <p className="text-sm sm:text-base text-navy/70">
            Select a specialized visual care category to explore diagnostic testing, consultation steps, or emergency support.
          </p>
        </div>

        {/* Horizontal Optical Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accessPanels.map((panel) => {
            const Icon = panel.icon;
            return (
              <Link
                key={panel.id}
                to={panel.link}
                className={`group relative overflow-hidden rounded-3xl bg-white border ${panel.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between`}
              >
                {/* Background Image Header */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={panel.image}
                    alt={panel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center text-navy group-hover:bg-cyan-iris group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="absolute bottom-4 left-4 font-heading text-xl font-bold text-white group-hover:text-cyan-bright transition-colors">
                    {panel.title}
                  </h3>
                </div>

                {/* Panel Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-navy/75 leading-relaxed">
                    {panel.description}
                  </p>
                  
                  <div className="pt-3 border-t border-navy/10 flex items-center justify-between text-xs font-bold text-navy group-hover:text-cyan-iris transition-colors">
                    <span>Explore Service</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickEyeCareAccess;
