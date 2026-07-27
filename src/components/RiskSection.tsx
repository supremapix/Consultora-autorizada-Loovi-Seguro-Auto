import React, { useState } from 'react';
import { ShieldAlert, ArrowRight, X, MessageCircle, Phone, ShieldCheck, Eye } from 'lucide-react';
import { DAMAGED_CARS, CONSULTANT_INFO } from '../constants';
import { SplitSlider } from './SplitSlider';

type DamagedCar = (typeof DAMAGED_CARS)[number];

export function RiskSection() {
  const [selectedCar, setSelectedCar] = useState<DamagedCar | null>(null);

  const handleScrollToSimular = (e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedCar(null);
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
            Todo dia alguém sai de casa achando que nada vai acontecer. Clique em cada situação abaixo para ver como a Loovi te protege de prejuízos gigantescos.
          </p>
        </div>

        {/* Cards of Damaged Vehicles with Premium Neon Glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {DAMAGED_CARS.map((car) => (
            <div
              key={car.id}
              onClick={() => setSelectedCar(car)}
              className="neon-glow-card group shadow-xl cursor-pointer transform transition-all hover:scale-[1.02]"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedCar(car);
                }
              }}
            >
              <div className="neon-glow-card-inner">
                {/* Image filling top section edge-to-edge with no padding */}
                <div className="w-full h-52 sm:h-60 lg:h-64 overflow-hidden relative">
                  <img
                    src={car.url}
                    alt={car.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Click indicator badge */}
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white flex items-center gap-1.5 opacity-90 group-hover:opacity-100 group-hover:bg-[#6D2DBF] transition-all border border-white/20">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Ver detalhes</span>
                  </div>
                </div>

                {/* Text & Cost Section Underneath Image */}
                <div className="p-4 sm:p-5 flex items-center justify-between gap-3 bg-[#481773] border-t border-[#6D2DBF]/40 mt-auto">
                  <span className="text-base sm:text-lg font-semibold text-white tracking-wide group-hover:text-[#00E5FF] transition-colors">
                    {car.label}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#00E5FF] bg-[#00E5FF]/10 border border-[#00E5FF]/30 px-3.5 py-1.5 rounded-full whitespace-nowrap shadow-[0_0_12px_rgba(0,229,255,0.25)]">
                    {car.cost}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Dialog when a card is clicked */}
        {selectedCar && (
          <div
            className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
            onClick={() => setSelectedCar(null)}
          >
            <div
              className="bg-[#3F1568] border border-[#8A4DE8]/50 rounded-3xl overflow-hidden max-w-2xl w-full text-white shadow-2xl relative my-auto flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCar(null)}
                className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-[#6D2DBF] text-white p-2 rounded-full transition-all border border-white/20 focus:outline-none"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header Image */}
              <div className="relative w-full h-64 sm:h-80 bg-black/40 overflow-hidden flex-shrink-0">
                <img
                  src={selectedCar.url}
                  alt={selectedCar.label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3F1568] via-transparent to-black/50" />
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between flex-wrap gap-2">
                  <h3 className="font-['Poppins'] text-2xl sm:text-3xl font-bold text-white tracking-tight drop-shadow-md">
                    {selectedCar.label}
                  </h3>
                  <span className="text-xs sm:text-sm font-bold text-[#00E5FF] bg-[#00E5FF]/20 border border-[#00E5FF]/40 px-4 py-1.5 rounded-full shadow-lg">
                    {selectedCar.cost}
                  </span>
                </div>
              </div>

              {/* Modal Body & Description */}
              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[#8A4DE8] text-sm font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-[#2ED9A0]" />
                    <span>Como a Loovi te protege</span>
                  </div>
                  <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal">
                    {selectedCar.description}
                  </p>
                </div>

                {/* Consultant Reassurance Banner */}
                <div className="bg-[#481773] border border-[#8A4DE8]/40 rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#6D2DBF] flex items-center justify-center flex-shrink-0 border border-white/20 shadow-md">
                    <ShieldCheck className="w-6 h-6 text-[#2ED9A0]" />
                  </div>
                  <div className="text-sm">
                    <p className="font-bold text-white">Atendimento exclusivo com a consultora Bárbara Durães</p>
                    <p className="text-slate-300 text-xs">Cotação 100% gratuita, sem compromisso e com resposta imediata no seu WhatsApp.</p>
                  </div>
                </div>

                {/* Call To Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <a
                    href={`https://wa.me/${CONSULTANT_INFO.whatsappRaw}?text=${encodeURIComponent(selectedCar.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-4 px-6 rounded-2xl bg-[#2ED9A0] hover:bg-[#25b886] text-[#0B0B18] font-bold text-base text-center transition-all shadow-lg hover:shadow-[0_0_20px_rgba(46,217,160,0.4)] flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Falar com Bárbara no WhatsApp</span>
                  </a>

                  <a
                    href="#simular"
                    onClick={handleScrollToSimular}
                    className="w-full sm:w-auto py-4 px-6 rounded-2xl bg-[#6D2DBF] hover:bg-[#8A4DE8] text-white font-bold text-base text-center transition-all border border-white/20 flex items-center justify-center gap-2"
                  >
                    <span>Simular Online</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>

                <div className="text-center pt-1">
                  <a
                    href={`tel:+${CONSULTANT_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#8A4DE8]" />
                    <span>Prefere ligar? Telefone direto: {CONSULTANT_INFO.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

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
