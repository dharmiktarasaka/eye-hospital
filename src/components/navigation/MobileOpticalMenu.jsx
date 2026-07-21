import React from 'react';
import { Link } from 'react-router-dom';
import { X, Phone, MessageSquare, Calendar, AlertCircle, ArrowRight, Shield } from 'lucide-react';

export const MobileOpticalMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-navy-dark/95 backdrop-blur-2xl flex flex-col justify-between p-6 animate-in fade-in zoom-in-95 duration-300 text-white">
      {/* Background Iris Radial Overlay */}
      <div className="absolute inset-0 bg-iris-radial opacity-60 pointer-events-none"></div>

      {/* Top Bar inside Menu */}
      <div className="relative z-10 flex items-center justify-between border-b border-cyan-iris/20 pb-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-cyan-iris/20 border border-cyan-iris flex items-center justify-center">
            <span className="w-3 h-3 rounded-full bg-cyan-iris animate-pulse"></span>
          </div>
          <span className="font-heading font-bold text-lg text-white">Lumora Eye</span>
        </div>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-navy-light/60 border border-cyan-iris/30 flex items-center justify-center text-white hover:bg-coral-light/20 transition-colors"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation List */}
      <div className="relative z-10 my-auto py-6 space-y-4 overflow-y-auto max-h-[60vh]">
        <Link
          to="/"
          onClick={onClose}
          className="block text-2xl font-heading font-bold text-white hover:text-cyan-iris transition-colors"
        >
          Home
        </Link>
        <Link
          to="/conditions"
          onClick={onClose}
          className="block text-2xl font-heading font-bold text-white hover:text-cyan-iris transition-colors"
        >
          Eye Conditions
        </Link>
        <Link
          to="/cataract-centre"
          onClick={onClose}
          className="block text-xl font-heading font-semibold text-silver-soft hover:text-cyan-bright transition-colors pl-4 border-l-2 border-cyan-iris"
        >
          Cataract Centre
        </Link>
        <Link
          to="/retina-centre"
          onClick={onClose}
          className="block text-xl font-heading font-semibold text-silver-soft hover:text-cyan-bright transition-colors pl-4 border-l-2 border-violet-prism"
        >
          Retina & Diabetic Care
        </Link>
        <Link
          to="/glaucoma-centre"
          onClick={onClose}
          className="block text-xl font-heading font-semibold text-silver-soft hover:text-cyan-bright transition-colors pl-4 border-l-2 border-gold-lens"
        >
          Glaucoma Centre
        </Link>
        <Link
          to="/lasik"
          onClick={onClose}
          className="block text-xl font-heading font-semibold text-silver-soft hover:text-cyan-bright transition-colors pl-4 border-l-2 border-cyan-iris"
        >
          LASIK & Vision Correction
        </Link>
        <Link
          to="/paediatric-eye-care"
          onClick={onClose}
          className="block text-2xl font-heading font-bold text-white hover:text-cyan-iris transition-colors"
        >
          Children's Eye Care
        </Link>
        <Link
          to="/doctors"
          onClick={onClose}
          className="block text-2xl font-heading font-bold text-white hover:text-cyan-iris transition-colors"
        >
          Eye Specialists
        </Link>
        <Link
          to="/diagnostics"
          onClick={onClose}
          className="block text-2xl font-heading font-bold text-white hover:text-cyan-iris transition-colors"
        >
          Advanced Diagnostics
        </Link>
        <Link
          to="/about"
          onClick={onClose}
          className="block text-2xl font-heading font-bold text-white hover:text-cyan-iris transition-colors"
        >
          About Institute
        </Link>
        <Link
          to="/contact"
          onClick={onClose}
          className="block text-2xl font-heading font-bold text-white hover:text-cyan-iris transition-colors"
        >
          Contact & Location
        </Link>
      </div>

      {/* Quick Action Bottom Bar */}
      <div className="relative z-10 border-t border-cyan-iris/20 pt-4 space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <a
            href="tel:+917600583156"
            className="flex items-center justify-center space-x-2 bg-navy-light/80 border border-cyan-iris/40 py-3 rounded-xl text-xs font-semibold text-white hover:bg-navy-light"
          >
            <Phone className="w-4 h-4 text-cyan-iris" />
            <span>Call Clinic</span>
          </a>
          <a
            href="https://wa.me/917600583156?text=Hello%20Lumora%20Eye%20Institute"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-emerald-600/20 border border-emerald-500/40 py-3 rounded-xl text-xs font-semibold text-emerald-300 hover:bg-emerald-600/30"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp</span>
          </a>
        </div>
        <Link
          to="/book-appointment"
          onClick={onClose}
          className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-iris to-violet-prism py-3.5 rounded-xl text-sm font-bold text-white shadow-lg shadow-cyan-iris/20"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Eye Consultation</span>
        </Link>
        <Link
          to="/emergency-eye-care"
          onClick={onClose}
          className="w-full flex items-center justify-center space-x-2 bg-coral-light/20 border border-coral-light/40 py-2.5 rounded-xl text-xs font-semibold text-coral-light hover:bg-coral-light/30"
        >
          <AlertCircle className="w-4 h-4" />
          <span>Urgent Emergency Care</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileOpticalMenu;
