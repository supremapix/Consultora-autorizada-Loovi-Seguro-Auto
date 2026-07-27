import React from 'react';
import { ArrowRight, Car } from 'lucide-react';
import { OFFICIAL_ADHESION_LINK } from '../constants';

export function Hero() {
  const handleScrollToSimular = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#simular');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const MARQUEE_ITEMS = Array(10).fill('tá na Loovi, tá seguro!');

  return (
    <section id="inicio" className="relative min-h-screen pt-[72px] pb-16 lg:pb-24 flex flex-col justify-between overflow-hidden bg-loovi-gradient text-white">
      {/* Infinite Marquee Bar */}
      <div className="w-full bg-black/15 backdrop-blur-sm py-3 border-b border-white/10 overflow-hidden select-none">
        <div className="animate-marquee-infinite flex items-center gap-8 whitespace-nowrap">
          {MARQUEE_ITEMS.map((text, idx) => (
            <div key={idx} className="flex items-center gap-6 text-white/90 font-semibold text-[18px]">
              <div className="flex items-center gap-2">
                <Car className="w-5 h-5 text-white inline-block" />
                <span>{text}</span>
              </div>
              <span className="text-white/40">•</span>
            </div>
          ))}
          {MARQUEE_ITEMS.map((text, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-6 text-white/90 font-semibold text-[18px]">
              <div className="flex items-center gap-2">
                <Car className="w-5 h-5 text-white inline-block" />
                <span>{text}</span>
              </div>
              <span className="text-white/40">•</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1296px] w-full mx-auto px-4 lg:px-6 my-auto pt-12 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Main Title */}
            <h1 className="font-['Poppins'] font-bold text-[32px] sm:text-[42px] lg:text-[48px] text-white tracking-[-0.02em] leading-[1.1]">
              Contrate o seguro auto mais barato do Brasil
            </h1>

            {/* Subtitle */}
            <p className="text-[18px] text-white/90 font-normal leading-[1.5] max-w-2xl mx-auto lg:mx-0">
              Sem análise de perfil, sem burocracia. Ative em minutos, 100% online, com atendimento direto comigo.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={OFFICIAL_ADHESION_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#481773] font-semibold text-[16px] shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-3"
              >
                Cotar 100% online
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#simular"
                onClick={handleScrollToSimular}
                className="w-full sm:w-auto px-8 py-4 rounded-full border-[1.5px] border-white text-white font-semibold text-[16px] hover:bg-white/10 transition-all flex items-center justify-center"
              >
                Simular no WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column Vehicle Image */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-lg flex justify-center">
              <img
                src="https://img.supremasite.com.br/loovi.webp"
                alt="Seguro Loovi"
                referrerPolicy="no-referrer"
                className="w-full max-w-md lg:max-w-lg h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
