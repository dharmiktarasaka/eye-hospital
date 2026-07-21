import React, { useState } from 'react';
import { Eye, Sun, Sliders, Info, RotateCcw } from 'lucide-react';

export const LensClaritySimulator = () => {
  const [blurLevel, setBlurLevel] = useState(40);
  const [activePreset, setActivePreset] = useState('mild');

  const applyPreset = (preset) => {
    setActivePreset(preset);
    if (preset === 'clear') setBlurLevel(0);
    if (preset === 'mild') setBlurLevel(30);
    if (preset === 'glare') setBlurLevel(55);
    if (preset === 'severe') setBlurLevel(85);
  };

  // Calculate CSS filters based on slider level
  const getFilterStyle = () => {
    const blurPx = (blurLevel / 100) * 8;
    const sepiaPct = (blurLevel / 100) * 40;
    const brightnessPct = 100 - (blurLevel / 100) * 15;
    const contrastPct = 100 - (blurLevel / 100) * 25;

    return {
      filter: `blur(${blurPx}px) sepia(${sepiaPct}%) brightness(${brightnessPct}%) contrast(${contrastPct}%)`,
    };
  };

  return (
    <div className="bg-navy-dark text-white rounded-3xl border border-cyan-iris/30 p-6 md:p-8 shadow-2xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-cyan-iris/20 pb-4">
        <div>
          <div className="inline-flex items-center space-x-2 bg-cyan-iris/20 text-cyan-bright px-3 py-1 rounded-full text-xs font-semibold mb-2">
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Visual Demo</span>
          </div>
          <h3 className="font-heading font-bold text-xl md:text-2xl text-white">
            Lens Clarity & Cataract Simulation
          </h3>
          <p className="text-xs sm:text-sm text-silver-soft">
            Compare how natural lens clouding affects vision clarity, contrast sensitivity, and light glare.
          </p>
        </div>

        {/* Preset Selector Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => applyPreset('clear')}
            className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors ${
              activePreset === 'clear' ? 'bg-cyan-iris text-white' : 'bg-navy-light/60 text-silver-soft hover:bg-navy-light'
            }`}
          >
            Clear Vision (IOL)
          </button>
          <button
            onClick={() => applyPreset('mild')}
            className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors ${
              activePreset === 'mild' ? 'bg-cyan-iris text-white' : 'bg-navy-light/60 text-silver-soft hover:bg-navy-light'
            }`}
          >
            Mild Blur
          </button>
          <button
            onClick={() => applyPreset('glare')}
            className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors ${
              activePreset === 'glare' ? 'bg-cyan-iris text-white' : 'bg-navy-light/60 text-silver-soft hover:bg-navy-light'
            }`}
          >
            Night Glare
          </button>
          <button
            onClick={() => applyPreset('severe')}
            className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors ${
              activePreset === 'severe' ? 'bg-cyan-iris text-white' : 'bg-navy-light/60 text-silver-soft hover:bg-navy-light'
            }`}
          >
            Advanced Clouding
          </button>
        </div>
      </div>

      {/* Simulator Display Window */}
      <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden border border-cyan-iris/40 shadow-inner group">
        <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"
          alt="Outdoor landscape scene demonstrating visual clarity levels"
          className="w-full h-full object-cover transition-all duration-300"
          style={getFilterStyle()}
        />

        {/* Glare Overlay Effect when blur > 50 */}
        {blurLevel > 50 && (
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-yellow-300/10 via-white/20 to-transparent mix-blend-overlay"></div>
        )}

        {/* Status Overlay Badge */}
        <div className="absolute top-4 left-4 bg-navy-dark/90 border border-cyan-iris/40 px-4 py-2 rounded-xl text-xs font-semibold text-white backdrop-blur-md shadow-lg">
          Current View: <span className="text-cyan-bright font-bold">{blurLevel === 0 ? 'Crisp Clear Lens' : `Cataract Clouding ${blurLevel}%`}</span>
        </div>
      </div>

      {/* Interactive Range Slider */}
      <div className="space-y-2 bg-navy-dark/60 p-4 rounded-2xl border border-cyan-iris/20">
        <div className="flex justify-between text-xs text-silver-soft font-semibold">
          <span>Clear Vision (0%)</span>
          <span className="text-cyan-bright">{blurLevel}% Cataract Progression</span>
          <span>Dense Cataract (100%)</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={blurLevel}
          onChange={(e) => {
            setBlurLevel(Number(e.target.value));
            setActivePreset('custom');
          }}
          className="w-full h-2 bg-navy-light rounded-lg appearance-none cursor-pointer accent-cyan-iris"
        />
      </div>

      {/* Visual Disclaimer */}
      <div className="flex items-center space-x-2 text-xs text-silver-medium bg-navy-light/40 p-3 rounded-xl border border-navy-light">
        <Info className="w-4 h-4 text-cyan-iris flex-shrink-0" />
        <p>
          <strong>Notice:</strong> This is a visual demonstration for patient education and does not replace clinical biometry or slit-lamp diagnostic evaluation.
        </p>
      </div>
    </div>
  );
};

export default LensClaritySimulator;
