import React, { useState, useEffect } from 'react';
import { Eye, Sparkles } from 'lucide-react';

export const FocusLensEffect = ({ mousePos, isMobile }) => {
  // Mobile auto-animation frame fallback
  const [autoPos, setAutoPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    if (!isMobile) return;
    let angle = 0;
    const interval = setInterval(() => {
      angle += 0.03;
      setAutoPos({
        x: 50 + Math.cos(angle) * 25,
        y: 50 + Math.sin(angle) * 15,
      });
    }, 50);
    return () => clearInterval(interval);
  }, [isMobile]);

  const activePos = isMobile ? autoPos : mousePos;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {/* Dynamic Refractive Lens Circle */}
      <div
        className="absolute rounded-full border-2 border-cyan-iris/60 shadow-[0_0_50px_rgba(33,167,199,0.4)] transition-all duration-150 ease-out flex items-center justify-center"
        style={{
          width: isMobile ? '240px' : '340px',
          height: isMobile ? '240px' : '340px',
          left: `${activePos.x}%`,
          top: `${activePos.y}%`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle at center, rgba(56,212,247,0.12) 0%, rgba(113,102,217,0.05) 70%, rgba(16,35,63,0.3) 100%)',
          backdropFilter: 'contrast(125%) brightness(110%) saturate(120%)',
        }}
      >
        {/* Inner Iris Reticle Lines */}
        <div className="w-full h-full rounded-full border border-dashed border-cyan-bright/40 animate-iris-rotate relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-3 bg-cyan-iris"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-3 bg-cyan-iris"></div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-1 bg-cyan-iris"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-1 bg-cyan-iris"></div>
        </div>

        {/* Center Optical Crosshair */}
        <div className="absolute w-6 h-6 border border-cyan-iris/80 rounded-full flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-bright animate-ping"></div>
        </div>
      </div>
    </div>
  );
};

export default FocusLensEffect;
