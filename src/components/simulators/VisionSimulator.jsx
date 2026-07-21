import React, { useState } from 'react';
import { Eye, Sparkles, CheckCircle, Info, MoveHorizontal } from 'lucide-react';

export const VisionSimulator = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [selectedError, setSelectedError] = useState('myopia');

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, x)));
  };

  return (
    <div className="bg-navy-dark text-white rounded-3xl border border-gold-lens/30 p-6 md:p-8 shadow-2xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gold-lens/20 pb-4">
        <div>
          <div className="inline-flex items-center space-x-2 bg-gold-lens/20 text-gold-bright px-3 py-1 rounded-full text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LASIK Vision Correction Simulator</span>
          </div>
          <h3 className="font-heading font-bold text-xl md:text-2xl text-white">
            Before vs. After Laser Vision Correction
          </h3>
          <p className="text-xs sm:text-sm text-silver-soft">
            Drag the divider to compare uncorrected refractive vision with crisp Contoura LASIK clarity.
          </p>
        </div>

        {/* Refractive Error Selection */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setSelectedError('myopia')}
            className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors ${
              selectedError === 'myopia' ? 'bg-gold-lens text-navy font-bold' : 'bg-navy-light/60 text-silver-soft'
            }`}
          >
            Myopia (Nearsighted)
          </button>
          <button
            onClick={() => setSelectedError('astigmatism')}
            className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors ${
              selectedError === 'astigmatism' ? 'bg-gold-lens text-navy font-bold' : 'bg-navy-light/60 text-silver-soft'
            }`}
          >
            Astigmatism Blur
          </button>
        </div>
      </div>

      {/* Interactive Comparison Container */}
      <div
        className="relative h-72 md:h-96 rounded-2xl overflow-hidden border border-gold-lens/40 select-none cursor-ew-resize"
        onMouseMove={handleMouseMove}
        onTouchMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
          setSliderPosition(Math.max(0, Math.min(100, x)));
        }}
      >
        {/* Layer 1: Corrected Vision (Underneath) */}
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
          alt="Sharp clear beach landscape after laser refractive surgery"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Layer 2: Uncorrected Blurry Vision (Clipped on Left) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
            alt="Blurry uncorrected vision"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: selectedError === 'myopia' ? 'blur(6px) contrast(90%)' : 'blur(4px) skewX(2deg) contrast(85%)',
              maxWidth: 'none',
              width: '100%',
              height: '100%'
            }}
          />
          <div className="absolute top-4 left-4 bg-navy-dark/90 text-coral-light border border-coral-light/40 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-lg">
            Uncorrected Vision
          </div>
        </div>

        {/* Divider Handle Bar */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-gold-bright shadow-[0_0_15px_rgba(245,215,142,0.8)] flex items-center justify-center"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-8 h-8 rounded-full bg-gold-lens text-navy flex items-center justify-center shadow-lg border-2 border-white">
            <MoveHorizontal className="w-4 h-4 font-bold" />
          </div>
        </div>

        {/* Right Label */}
        <div className="absolute top-4 right-4 bg-navy-dark/90 text-gold-bright border border-gold-lens/40 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-lg">
          Post-LASIK Vision
        </div>
      </div>

      {/* Footer Info Notice */}
      <div className="flex items-center space-x-2 text-xs text-silver-medium bg-navy-light/40 p-3 rounded-xl border border-navy-light">
        <Info className="w-4 h-4 text-gold-lens flex-shrink-0" />
        <p>
          <strong>Clinical Note:</strong> Visual correction outcomes depend on pre-operative corneal topography, pupil diameter, and individual tissue healing response.
        </p>
      </div>
    </div>
  );
};

export default VisionSimulator;
