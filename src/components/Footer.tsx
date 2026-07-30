import React from 'react';
import { Heart, Phone, Mail, MessageCircle, Clock, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';
import { CONSULTANT_INFO, LOOVI_CHANNELS, LEGAL_NOTICE } from '../constants';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export function SupremaCredit() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-4 border-t border-white/10 flex justify-center items-center">
      <div className="bg-[#131626]/90 border border-white/10 rounded-full px-6 py-2.5 shadow-lg flex items-center justify-center transition-all duration-300">
        <p className="text-slate-300 hover:text-white transition-colors duration-200 text-xs sm:text-sm font-bold flex flex-wrap items-center justify-center gap-2">
          <span>Desenvolvido com</span> 
          <Heart 
            size={14} 
            className="text-red-500 animate-pulse shrink-0" 
          /> 
          <span>por</span>
          <a 
            id="developer-suprema-link"
            href="https://supremasite.com.br" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#2ED9A0] hover:underline font-extrabold inline-flex items-center gap-2 cursor-pointer"
          >
            Suprema Sites Express
            <img 
              src="https://img.supremamidia.com/suprema-img.png" 
              alt="Suprema" 
              className="h-[18px] w-auto inline shrink-0" 
              referrerPolicy="no-referrer"
            />
          </a>
        </p>
      </div>
    </div>
  );
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNav = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = path;
    }
  };

  return (
    <footer className="bg-[#0B0D17] text-slate-300 py-14 border-t border-white/10">
      <div className="max-w-[1296px] mx-auto px-4 lg:px-6 space-y-10">
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Column 1: Executive Info */}
          <div className="space-y-4">
            <h4 className="font-sora font-extrabold text-lg text-white border-l-4 border-[#2ED9A0] pl-3">
              {CONSULTANT_INFO.shortName}
            </h4>
            <div className="space-y-2 text-sm">
              <p className="font-bold text-white text-base">{CONSULTANT_INFO.name}</p>
              <p className="text-[#2ED9A0] font-semibold text-xs flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#2ED9A0]" />
                {CONSULTANT_INFO.role}
              </p>
              <p className="text-slate-400 font-medium">CNPJ {CONSULTANT_INFO.cnpj}</p>
              <p className="text-xs text-slate-400 flex items-start gap-1.5 pt-1">
                <MapPin className="w-4 h-4 text-[#2ED9A0] shrink-0 mt-0.5" />
                <span>{CONSULTANT_INFO.address}</span>
              </p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-sora font-extrabold text-lg text-white border-l-4 border-[#8A4DE8] pl-3">
              Navegação e Locais
            </h4>
            <ul className="space-y-2 text-sm font-semibold">
              <li>
                <button onClick={() => handleNav('/bairros-curitiba')} className="hover:text-[#2ED9A0] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#2ED9A0]" />
                  <span>75 Bairros de Curitiba</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/cidades-regiao-metropolitana')} className="hover:text-[#2ED9A0] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#2ED9A0]" />
                  <span>15 Cidades da Região Metropolitana</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/seguro-app-uber')} className="hover:text-[#2ED9A0] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#2ED9A0]" />
                  <span>Seguro para Uber e 99 (100% FIPE)</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/coberturas')} className="hover:text-[#2ED9A0] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#2ED9A0]" />
                  <span>Coberturas e Assistência 24h</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/blog')} className="hover:text-[#2ED9A0] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#2ED9A0]" />
                  <span>Blog e Guias Práticos</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h4 className="font-sora font-extrabold text-lg text-white border-l-4 border-[#2ED9A0] pl-3">
              Contatos Oficiais
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`https://wa.me/${CONSULTANT_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#2ED9A0]/15 border border-[#2ED9A0]/40 text-[#2ED9A0] font-bold hover:bg-[#2ED9A0]/25 transition-all"
              >
                <MessageCircle className="w-5 h-5 text-[#2ED9A0] shrink-0" />
                <span>WhatsApp: {CONSULTANT_INFO.whatsapp}</span>
              </a>

              <div className="space-y-2 pt-1">
                <a
                  href={`tel:+${CONSULTANT_INFO.phone1Raw}`}
                  className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 hover:border-[#2ED9A0] transition-all"
                >
                  <Phone className="w-4 h-4 text-[#2ED9A0] shrink-0" />
                  <span>{CONSULTANT_INFO.phone1} (PR)</span>
                </a>
                <a
                  href={`tel:+${CONSULTANT_INFO.phone2Raw}`}
                  className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 hover:border-[#8A4DE8] transition-all"
                >
                  <Phone className="w-4 h-4 text-[#8A4DE8] shrink-0" />
                  <span>{CONSULTANT_INFO.phone2} (MG)</span>
                </a>
              </div>

              <p className="text-xs text-slate-400 flex items-center gap-2 pt-1">
                <Mail className="w-3.5 h-3.5 text-[#2ED9A0] shrink-0" />
                <a href={`mailto:${CONSULTANT_INFO.email}`} className="hover:text-white underline">
                  {CONSULTANT_INFO.email}
                </a>
              </p>
            </div>
          </div>

          {/* Column 4: Channels & Legal */}
          <div className="space-y-4">
            <h4 className="font-sora font-extrabold text-lg text-white border-l-4 border-[#8A4DE8] pl-3">
              Canais 24h Loovi
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex justify-between border-b border-white/10 pb-1.5">
                <span>Central:</span>
                <span className="text-white font-bold">{LOOVI_CHANNELS.central}</span>
              </p>
              <p className="flex justify-between border-b border-white/10 pb-1.5">
                <span>Assistência 24h:</span>
                <span className="text-[#2ED9A0] font-bold">{LOOVI_CHANNELS.assistance24h}</span>
              </p>
              <p className="flex justify-between border-b border-white/10 pb-1.5">
                <span>Furto/Roubo:</span>
                <span className="text-white font-bold">{LOOVI_CHANNELS.theftTheft24h}</span>
              </p>
              <p className="flex justify-between pt-0.5">
                <span>Ouvidoria:</span>
                <span className="text-white font-bold">{LOOVI_CHANNELS.ombudsman}</span>
              </p>
            </div>

            <div className="flex gap-4 pt-2 text-xs font-semibold text-slate-400">
              <button onClick={() => handleNav('/sobre')} className="hover:text-[#2ED9A0]">Sobre</button>
              <button onClick={() => handleNav('/faq')} className="hover:text-[#2ED9A0]">FAQ</button>
              <button onClick={() => handleNav('/termos')} className="hover:text-[#2ED9A0]">Termos</button>
              <button onClick={() => handleNav('/privacidade')} className="hover:text-[#2ED9A0]">Privacidade</button>
            </div>
          </div>
        </div>

        {/* Mandatory Legal Notice */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-xs text-slate-400 leading-relaxed">
            {LEGAL_NOTICE}
          </p>
        </div>

        <SupremaCredit />
      </div>
    </footer>
  );
}
