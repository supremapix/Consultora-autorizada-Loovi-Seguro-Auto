import React from 'react';
import { CreditCard, UserCheck, Car, Smartphone, Zap, ShieldCheck, MapPin, Globe } from 'lucide-react';
import { DIFFERENTIALS } from '../constants';

const ICON_MAP: Record<string, React.ReactNode> = {
  CreditCard: <CreditCard className="w-8 h-8 text-[#6D2DBF]" />,
  UserCheck: <UserCheck className="w-8 h-8 text-[#6D2DBF]" />,
  Car: <Car className="w-8 h-8 text-[#6D2DBF]" />,
  Smartphone: <Smartphone className="w-8 h-8 text-[#6D2DBF]" />,
  Zap: <Zap className="w-8 h-8 text-[#6D2DBF]" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-[#6D2DBF]" />,
};

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

export function WhyLooviSection() {
  return (
    <>
      {/* 2.4 Faixa de Influenciadores */}
      <section className="py-14 bg-[#F3E8FF] text-[#131522]">
        <div className="max-w-[1296px] mx-auto px-4 lg:px-6 text-center">
          <h3 className="font-['Poppins'] font-semibold text-[20px] lg:text-[24px] text-[#131522] mb-8">
            O seguro mais querido dos influencers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {INFLUENCERS.map((inf, i) => (
              <div key={i} className="bg-white rounded-[12px] p-3 sm:p-4 border border-[#E5E7EB] flex items-center justify-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={inf.image}
                  alt={inf.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#6D2DBF] flex-shrink-0"
                />
                <span className="font-semibold text-sm text-[#131522] text-left leading-tight">{inf.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 Por que a Loovi está conquistando o Brasil? */}
      <section id="por-que-loovi" className="py-14 lg:py-24 bg-white text-[#131522]">
        <div className="max-w-[1296px] mx-auto px-4 lg:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-['Poppins'] font-semibold text-[28px] lg:text-[40px] text-[#131522] tracking-[-0.28px]">
              Por que a Loovi está conquistando o Brasil?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIFFERENTIALS.map((diff, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-[8px] p-8 hover:-translate-y-1 hover:border-[#6D2DBF] transition-all duration-250 shadow-sm space-y-4"
              >
                <div className="mb-2">
                  {ICON_MAP[diff.icon] || <ShieldCheck className="w-8 h-8 text-[#6D2DBF]" />}
                </div>
                <h3 className="font-['Poppins'] font-semibold text-[20px] text-[#131522]">
                  {diff.title}
                </h3>
                <p className="text-[16px] text-[#4B5563] leading-relaxed">
                  {diff.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.6 Estatísticas */}
      <section className="py-14 lg:py-24 bg-[#3F1568] text-white">
        <div className="max-w-[1296px] mx-auto px-4 lg:px-6 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center max-w-2xl mx-auto">
            <div className="space-y-2">
              <MapPin className="w-8 h-8 text-[#8A4DE8] mx-auto" />
              <div className="font-['Poppins'] font-bold text-[48px] text-white">27</div>
              <p className="text-[16px] text-slate-300">Em todos estados do Brasil</p>
            </div>
            <div className="space-y-2">
              <Globe className="w-8 h-8 text-[#8A4DE8] mx-auto" />
              <div className="font-['Poppins'] font-bold text-[48px] text-white">+4.000</div>
              <p className="text-[16px] text-slate-300">Cidades atendidas</p>
            </div>
          </div>

          {/* Special vehicle acceptance */}
          <div className="pt-8 border-t border-white/10 text-center space-y-4">
            <p className="font-['Poppins'] font-semibold text-[18px] text-white">
              Aceitamos Uber, Táxi e carros com GNV
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="px-5 py-2 rounded-full bg-[#6D2DBF] text-white font-semibold text-sm">
                Uber
              </span>
              <span className="px-5 py-2 rounded-full bg-[#6D2DBF] text-white font-semibold text-sm">
                99
              </span>
              <span className="px-5 py-2 rounded-full bg-[#6D2DBF] text-white font-semibold text-sm">
                Táxi
              </span>
              <span className="px-5 py-2 rounded-full bg-[#6D2DBF] text-white font-semibold text-sm">
                GNV
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2.7 Tecnologia */}
      <section className="py-14 lg:py-24 bg-white text-[#131522]">
        <div className="max-w-[1296px] mx-auto px-4 lg:px-6 text-center max-w-3xl space-y-6">
          <h3 className="font-['Poppins'] font-semibold text-[28px] lg:text-[36px] text-[#131522]">
            Já nascemos digitais!
          </h3>
          <p className="text-[16px] text-[#4B5563] leading-relaxed">
            Assim como você pede um transporte na Uber, assiste a um filme na Netflix ou aluga um espaço no Airbnb com poucos toques no celular, a Loovi reinventou a proteção veicular para ser 100% digital, transparente e sem complicação.
          </p>
          <div className="pt-6 flex flex-wrap items-center justify-center gap-10 opacity-60 grayscale">
            <span className="font-bold text-xl text-[#4B5563]">Adyen</span>
            <span className="font-bold text-xl text-[#4B5563]">Salesforce</span>
            <span className="font-bold text-xl text-[#4B5563]">SAP</span>
          </div>
        </div>
      </section>
    </>
  );
}
