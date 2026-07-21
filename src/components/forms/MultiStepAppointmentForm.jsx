import React, { useState } from 'react';
import { CheckCircle2, Calendar, User, Phone, Mail, Upload, ArrowRight, ArrowLeft, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';
import { doctorsData } from '../../data/doctorsData';

export const MultiStepAppointmentForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    ageGroup: 'Adult (18-50 yrs)',
    gender: 'Prefer not to say',
    city: 'Ahmedabad',
    preferredLanguage: 'English',
    eyeConcern: 'Routine Eye Test',
    appointmentDate: '',
    appointmentTime: 'Morning (9 AM - 12 PM)',
    consultationMode: 'In-Person Visit',
    preferredDoctor: 'Any Available Specialist',
    userMessage: '',
    fileName: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, fileName: e.target.files[0].name }));
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    return true; // Category selected by default
  };

  const handleNext = () => {
    if (currentStep === 1 && !validateStep1()) return;
    if (currentStep < 3) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep1()) {
      setCurrentStep(1);
      return;
    }

    /*
      ===============================================================
      FRONTEND INTEGRATION CODE COMMENTS FOR PRODUCTION BACKEND:
      ===============================================================
      1. Zoho CRM / HubSpot Integration:
         fetch('https://your-backend.com/api/leads/appointment', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(formData)
         });

      2. WhatsApp Business API Webhook Integration:
         const waMessage = `New Eye Appointment Request:\nName: ${formData.fullName}\nPhone: ${formData.phone}\nConcern: ${formData.eyeConcern}`;
         window.open(`https://wa.me/917600583156?text=${encodeURIComponent(waMessage)}`);

      3. Hospital Management System (HMS) / Node.js Backend:
         axios.post('/api/hms/schedule-appointment', formData);
      ===============================================================
    */

    setIsSubmitted(true);
  };

  return (
    <div className="bg-white text-navy rounded-3xl border border-navy/10 shadow-2xl p-6 sm:p-8 max-w-4xl mx-auto relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-iris/10 rounded-full blur-3xl pointer-events-none"></div>

      {isSubmitted ? (
        /* Confirmation State */
        <div className="py-12 text-center space-y-6 animate-in fade-in zoom-in-95 duration-500">
          <div className="w-20 h-20 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto shadow-lg">
            <CheckCircle2 className="w-10 h-10 animate-bounce" />
          </div>
          <div className="space-y-2">
            <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-navy">
              Appointment Request Received!
            </h3>
            <p className="text-sm text-navy/70 max-w-md mx-auto">
              Thank you, <strong className="text-navy">{formData.fullName}</strong>. Our patient care coordinator will contact you at <strong className="text-cyan-iris">{formData.phone}</strong> to confirm your consultation schedule.
            </p>
          </div>

          <div className="bg-pearl p-4 rounded-2xl border border-cyan-iris/20 text-xs text-navy/80 max-w-lg mx-auto space-y-1 text-left">
            <p><strong>Selected Concern:</strong> {formData.eyeConcern}</p>
            <p><strong>Preferred Time:</strong> {formData.appointmentTime}</p>
            <p><strong>Location:</strong> Lumora Eye Institute (Ahmedabad, India)</p>
          </div>

          <button
            onClick={() => {
              setIsSubmitted(false);
              setCurrentStep(1);
            }}
            className="bg-navy text-white text-xs font-bold px-6 py-3 rounded-full hover:bg-cyan-iris transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        /* Multi-Step Form */
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Header & Step Wizard Progress */}
          <div className="space-y-4 border-b border-navy/10 pb-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-cyan-iris uppercase tracking-wider">
                  Step {currentStep} of 3
                </span>
                <h3 className="font-heading font-extrabold text-xl md:text-2xl text-navy">
                  {currentStep === 1 && "Patient Contact Details"}
                  {currentStep === 2 && "Select Eye Concern"}
                  {currentStep === 3 && "Schedule & Preferences"}
                </h3>
              </div>
              <div className="hidden sm:flex items-center space-x-1 text-xs text-navy/60">
                <ShieldCheck className="w-4 h-4 text-cyan-iris" />
                <span>Simulated Portfolio Form</span>
              </div>
            </div>

            {/* Step Progress Bar */}
            <div className="w-full h-2 bg-navy/10 rounded-full overflow-hidden flex">
              <div
                className="h-full bg-gradient-to-r from-cyan-iris to-violet-prism transition-all duration-500"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* STEP 1: PATIENT DETAILS */}
          {currentStep === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
              <div className="space-y-1">
                <label className="text-xs font-bold text-navy flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-cyan-iris" /> Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="e.g., Rajesh Mehta"
                  className={`w-full bg-pearl border rounded-xl px-4 py-3 text-xs text-navy focus:outline-none focus:border-cyan-iris ${
                    errors.fullName ? 'border-coral-light' : 'border-navy/15'
                  }`}
                />
                {errors.fullName && <span className="text-[11px] text-coral-accent">{errors.fullName}</span>}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-navy flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-cyan-iris" /> Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 98765 43210"
                  className={`w-full bg-pearl border rounded-xl px-4 py-3 text-xs text-navy focus:outline-none focus:border-cyan-iris ${
                    errors.phone ? 'border-coral-light' : 'border-navy/15'
                  }`}
                />
                {errors.phone && <span className="text-[11px] text-coral-accent">{errors.phone}</span>}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-navy flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-cyan-iris" /> Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  className="w-full bg-pearl border border-navy/15 rounded-xl px-4 py-3 text-xs text-navy focus:outline-none focus:border-cyan-iris"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-navy">Age Group</label>
                <select
                  name="ageGroup"
                  value={formData.ageGroup}
                  onChange={handleInputChange}
                  className="w-full bg-pearl border border-navy/15 rounded-xl px-4 py-3 text-xs text-navy focus:outline-none focus:border-cyan-iris"
                >
                  <option>Child (Under 18 yrs)</option>
                  <option>Adult (18-50 yrs)</option>
                  <option>Senior (50+ yrs)</option>
                </select>
              </div>
            </div>
          )}

          {/* STEP 2: EYE CONCERN SELECTION */}
          {currentStep === 2 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <label className="text-xs font-bold text-navy">Select Primary Visual Concern</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Routine Eye Test", "Cataract Consultation", "Retina Screening",
                  "Glaucoma Check", "LASIK & Contoura", "Child Vision",
                  "Dry Eye Care", "Eye Emergency", "Second Opinion"
                ].map((concern) => (
                  <button
                    key={concern}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, eyeConcern: concern }))}
                    className={`p-3.5 rounded-2xl text-xs font-semibold text-left transition-all border ${
                      formData.eyeConcern === concern
                        ? 'bg-navy text-white border-cyan-iris shadow-md'
                        : 'bg-pearl text-navy border-navy/10 hover:border-cyan-iris/40'
                    }`}
                  >
                    {concern}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: PREFERENCES & UPLOAD */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-navy">Preferred Time Slot</label>
                  <select
                    name="appointmentTime"
                    value={formData.appointmentTime}
                    onChange={handleInputChange}
                    className="w-full bg-pearl border border-navy/15 rounded-xl px-4 py-3 text-xs text-navy focus:outline-none focus:border-cyan-iris"
                  >
                    <option>Morning (9 AM - 12 PM)</option>
                    <option>Afternoon (12 PM - 4 PM)</option>
                    <option>Evening (4 PM - 7 PM)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-navy">Consultation Mode</label>
                  <select
                    name="consultationMode"
                    value={formData.consultationMode}
                    onChange={handleInputChange}
                    className="w-full bg-pearl border border-navy/15 rounded-xl px-4 py-3 text-xs text-navy focus:outline-none focus:border-cyan-iris"
                  >
                    <option>In-Person Visit (Ahmedabad)</option>
                    <option>Video Teleconsultation Demo</option>
                  </select>
                </div>
              </div>

              {/* Upload Report Placeholder */}
              <div className="border-2 border-dashed border-cyan-iris/30 rounded-2xl p-6 text-center space-y-2 bg-pearl">
                <Upload className="w-6 h-6 text-cyan-iris mx-auto" />
                <p className="text-xs font-semibold text-navy">Attach Existing Eye Reports (Optional Demo)</p>
                <p className="text-[11px] text-navy/60">Upload OCT, Prescription, or Topography PDF/Images</p>
                <input
                  type="file"
                  id="reportUpload"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <label
                  htmlFor="reportUpload"
                  className="inline-block bg-navy/10 hover:bg-navy/20 text-navy text-xs font-bold px-4 py-2 rounded-xl cursor-pointer transition-colors"
                >
                  {formData.fileName ? `Selected: ${formData.fileName}` : "Browse File..."}
                </label>
              </div>
            </div>
          )}

          {/* Controls Bottom Bar */}
          <div className="flex items-center justify-between border-t border-navy/10 pt-6">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center space-x-2 bg-pearl border border-navy/15 text-navy text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-navy/5 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : <div></div>}

            {currentStep < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-navy to-cyan-iris text-white text-xs font-bold px-7 py-3 rounded-full hover:shadow-lg transition-all"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="submit"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-iris to-violet-prism text-white text-xs font-bold px-8 py-3.5 rounded-full shadow-lg shadow-cyan-iris/30 hover:scale-105 transition-all"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Confirm Eye Consultation</span>
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default MultiStepAppointmentForm;
