import React, { useState, useRef, useCallback } from 'react';
import { AlertTriangle, ShieldCheck, MoveHorizontal } from 'lucide-react';
import { SPLIT_IMAGES, PRICING_DISCLAIMER, PRICING_FOOTNOTE } from '../constants';

export function SplitSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let percentage = (x / rect.width) * 100;
      if (percentage < 5) percentage = 5;
      if (percentage > 95) percentage = 95;
      setSliderPos(percentage);
    },
    []
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-12 px-4">
      {/* Title Header */}
      <div className="text-center mb-8 space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FF4D4D] bg-[#FF4D4D]/10 px-3 py-1 rounded-full border border-[#FF4D4D]/20">
          Comparativo Real
        </span>
        <h3 className="font-sora font-extrabold text-2xl sm:text-3xl text-white">
          Arraste para ver a diferença
        </h3>
        <p className="text-sm text-slate-400">
          Sem seguro vs Protegido com Loovi Seguro Auto
        </p>
      </div>

      {/* Interactive Slider Container */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full h-[450px] sm:h-[550px] lg:h-[620px] rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl select-none cursor-ew-resize bg-[#3F1568]"
      >
        {/* RIGHT SIDE: WITH LOOVI (Underneath) */}
        <div className="absolute inset-0 w-full h-full bg-[#3F1568]">
          <img
            src={SPLIT_IMAGES.withLoovi}
            alt="Carro protegido por Loovi Seguro Auto"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3F1568] via-[#6D2DBF]/20 to-transparent" />

          {/* Right Badge */}
          <div className="absolute top-6 right-6 z-10 glass-card px-5 py-3 rounded-2xl border border-[#2ED9A0]/40 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#2ED9A0]/20 flex items-center justify-center text-[#2ED9A0]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="block text-[11px] font-bold text-[#2ED9A0] uppercase tracking-wider">
                COM LOOVI SEGURO AUTO
              </span>
              <span className="block text-lg font-sora font-extrabold text-white">
                {PRICING_DISCLAIMER}
              </span>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 z-10 bg-[#481773]/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 max-w-xs text-right">
            <p className="text-xs text-slate-300 font-medium">
              Sem burocracia, 100% FIPE, guincho 24h e suporte no seu WhatsApp com a Barbara.
            </p>
          </div>
        </div>

        {/* LEFT SIDE: WITHOUT INSURANCE (Clipped on top) */}
        <div
          className="absolute top-0 left-0 bottom-0 overflow-hidden z-10"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="relative w-full h-full min-w-[320px] sm:min-w-[700px] lg:min-w-[1000px]">
            <img
              src={SPLIT_IMAGES.withoutInsurance}
              alt="Carro destruído sem seguro"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#FF4D4D]/25 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3F1568] via-transparent to-black/60" />

            {/* Left Badge */}
            <div className="absolute top-6 left-6 z-10 glass-card px-5 py-3 rounded-2xl border border-[#FF4D4D]/40 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FF4D4D]/20 flex items-center justify-center text-[#FF4D4D]">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-[11px] font-bold text-[#FF4D4D] uppercase tracking-wider">
                  SEM SEGURO
                </span>
                <span className="block text-lg font-sora font-extrabold text-white">
                  Prejuízo R$ 45.000+
                </span>
              </div>
            </div>

            <div className="absolute bottom-6 left-6 z-10 bg-[#481773]/90 backdrop-blur-md p-4 rounded-2xl border border-[#FF4D4D]/30 max-w-xs">
              <p className="text-xs text-[#FF4D4D] font-bold">
                Guincho particular + conserto do seu carro + danos ao outro veículo saem do seu bolso!
              </p>
            </div>
          </div>
        </div>

        {/* DRAG HANDLE DIVIDER */}
        <div
          className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] cursor-ew-resize"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-loovi-gradient border-2 border-white flex items-center justify-center shadow-xl text-white">
            <MoveHorizontal className="w-6 h-6" />
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-slate-500 mt-3">
        {PRICING_FOOTNOTE}
      </p>
    </div>
  );
}
