import React from 'react';
import { ShieldAlert, ArrowRight } from 'lucide-react';
import { DAMAGED_CARS } from '../constants';
import { SplitSlider } from './SplitSlider';

export function RiskSection() {
  const handleScrollToSimular = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#simular')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="risco" className="py-14 lg:py-24 bg-[#3F1568] text-white">
      <div className="max-w-[1296px] mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#6D2DBF] text-[#F3E8FF] text-xs font-semibold">
            <ShieldAlert className="w-4 h-4" />
            <span>O risco de andar sem seguro</span>
          </div>

          <h2 className="font-['Poppins'] font-semibold text-[28px] lg:text-[40px] text-white tracking-[-0.28px]">
            Um segundo. Foi só isso.
          </h2>

          <p className="text-[16px] text-[#999BAF]">
            Todo dia alguém sai de casa achando que nada vai acontecer. O conserto, o guincho, o carro reserva e o prejuízo não perguntam se você tinha seguro.
          </p>
        </div>

        {/* Cards of Damaged Vehicles with Premium Neon Glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {DAMAGED_CARS.map((car, idx) => (
            <div
              key={idx}
              className="neon-glow-card group shadow-xl"
            >
              <div className="neon-glow-card-inner">
                {/* Image filling top section edge-to-edge with no padding */}
                <div className="w-full h-52 sm:h-60 lg:h-64 overflow-hidden relative">
                  <img
                    src={car.url}
                    alt={car.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Text & Cost Section Underneath Image */}
                <div className="p-4 sm:p-5 flex items-center justify-between gap-3 bg-[#481773] border-t border-[#6D2DBF]/40 mt-auto">
                  <span className="text-base sm:text-lg font-semibold text-white tracking-wide">{car.label}</span>
                  <span className="text-xs sm:text-sm font-bold text-[#00E5FF] bg-[#00E5FF]/10 border border-[#00E5FF]/30 px-3.5 py-1.5 rounded-full whitespace-nowrap shadow-[0_0_12px_rgba(0,229,255,0.25)]">
                    {car.cost}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Signature Split-Screen Slider */}
        <SplitSlider />

        {/* Exit CTA */}
        <div className="text-center pt-10">
          <a
            href="#simular"
            onClick={handleScrollToSimular}
            className="btn-primary inline-flex items-center gap-2 text-[16px]"
          >
            <span>Simular meu seguro agora</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
