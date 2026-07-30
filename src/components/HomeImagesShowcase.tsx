import React from 'react';
import { ShieldCheck, Eye, Sparkles, Star } from 'lucide-react';
import { DAMAGED_CARS, SPLIT_IMAGES } from '../constants';
import { SplitSlider } from './SplitSlider';

const INFLUENCERS = [
  {
    image: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/11/alok-3-e1732129463931.jpg?w=1200&h=900&crop=1',
    name: 'Alok',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4_SkwFx7PsEhsDSVZNJKAL2p0_aRkxOi7P1Ikp0ycPe9egadN8KrC6Bk&s=10',
    name: 'Whindersson Nunes',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0wXC8pn8WhfqhTsVWkfGho0mSKM5CFCgWrGtJGFUJtsxrS3V1QhB6UXv-Dc7sQjliTB67evWmWdr_V4g-xCdUz_z2zoZZOBMMX1gKfg&s=10',
    name: 'Caio Castro',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9wuww6tCQ9sRDYN8MCXG87-UEjJlivRuFs9mrOZKduZ7ZlKU7BF1E3MvSzhSk1CSt9page7ek6Qgn9SMm6P8ibxPY9CA5FQOwTgTWQ&s=10',
    name: 'Felipe Neto',
  },
];

interface Props {
  title?: string;
  subtitle?: string;
}

export const HomeImagesShowcase: React.FC<Props> = ({
  title = "Galeria Oficial e Coberturas do Seguro Loovi",
  subtitle = "Conheça em imagens como o Seguro Auto Loovi protege seu veículo em todas as situações do dia a dia."
}) => {
  return (
    <section className="my-12 py-10 px-4 sm:px-6 lg:px-8 bg-slate-50 border border-slate-200 rounded-3xl shadow-lg space-y-12 text-slate-900">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2ED9A0]/20 border border-[#2ED9A0]/40 text-[#00875A] text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-[#00875A]" />
          <span>Imagens e Tecnologia Loovi</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold font-sora text-slate-900 tracking-tight">
          {title}
        </h2>
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
          {subtitle}
        </p>
      </div>

      {/* Hero Vehicle Banner */}
      <div className="bg-gradient-to-r from-[#481773] to-[#6D2DBF] rounded-2xl p-6 sm:p-8 border border-purple-200 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-white">
        <div className="space-y-4">
          <span className="px-3 py-1 rounded-full bg-[#2ED9A0] text-slate-950 font-extrabold text-xs inline-block shadow-sm">
            Proteção Veicular 100% Digital
          </span>
          <h3 className="text-2xl font-bold font-sora text-white">
            Veículos Protegidos em Todo o Brasil
          </h3>
          <p className="text-slate-100 text-sm leading-relaxed">
            A Loovi combina tecnologia de ponta com atendimento humanizado. Rastreador gratuito, guincho 24h sem limite de km e indenização de até 100% da Tabela FIPE.
          </p>
          <div className="flex items-center gap-2 text-[#2ED9A0] font-bold text-xs pt-1">
            <ShieldCheck className="w-4 h-4 text-[#2ED9A0]" />
            <span>Sem consulta ao SPC/Serasa e sem burocracia</span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-white/20 shadow-2xl">
          <img
            src="https://img.supremasite.com.br/loovi.webp"
            alt="Seguro Loovi Veículo Protegido"
            referrerPolicy="no-referrer"
            className="w-full h-56 sm:h-64 object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-2 left-2 right-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs text-white font-medium flex items-center justify-between">
            <span>Loovi Seguro Auto</span>
            <span className="text-[#2ED9A0] font-bold">100% FIPE</span>
          </div>
        </div>
      </div>

      {/* 5 Coberturas em Imagens (DAMAGED_CARS) */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 font-sora flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#00875A]" />
          <span>Situações de Sinistro & Coberturas Atendidas</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DAMAGED_CARS.map((car) => (
            <div key={car.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#6D2DBF] hover:shadow-lg transition-all group shadow-sm">
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <img
                  src={car.url}
                  alt={car.label}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 right-2 bg-slate-900/80 backdrop-blur-md text-[#2ED9A0] text-xs font-bold px-2.5 py-1 rounded-full border border-slate-700">
                  {car.cost}
                </span>
              </div>
              <div className="p-4 space-y-1.5">
                <h4 className="font-bold text-slate-900 text-base group-hover:text-[#6D2DBF] transition-colors">{car.label}</h4>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">{car.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Before/After Split Slider Showcase */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 font-sora flex items-center gap-2">
          <Eye className="w-5 h-5 text-[#6D2DBF]" />
          <span>Antes e Depois: Com Loovi vs Sem Seguro</span>
        </h3>
        <SplitSlider />
      </div>

      {/* Influencers Row */}
      <div className="pt-6 border-t border-slate-200 space-y-4">
        <div className="text-center">
          <h3 className="text-lg font-bold text-slate-900 font-sora inline-flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>O Seguro Mais Recomendado pelos Influencers</span>
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {INFLUENCERS.map((inf, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-3 flex items-center gap-3 shadow-sm hover:border-[#6D2DBF] transition-colors">
              <img
                src={inf.image}
                alt={inf.name}
                referrerPolicy="no-referrer"
                className="w-11 h-11 rounded-full object-cover border-2 border-[#6D2DBF] shrink-0"
              />
              <span className="font-bold text-xs sm:text-sm text-slate-900 leading-tight">{inf.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
