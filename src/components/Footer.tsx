import { Heart, Phone, Mail, MessageCircle, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { CONSULTANT_INFO, LOOVI_CHANNELS, LEGAL_NOTICE } from '../constants';

export function SupremaCredit() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-4 border-t border-[#6D2DBF] flex justify-center items-center">
      <div className="bg-[#481773]/90 border border-[#6D2DBF] rounded-full px-6 py-2.5 shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(109,40,217,0.35)]">
        <p className="text-slate-100 hover:text-white transition-colors duration-200 text-sm sm:text-base font-bold flex flex-wrap items-center justify-center gap-2">
          <span className="opacity-90">Desenvolvido com</span> 
          
          {/* Coração pulsante com efeito de sombra */}
          <Heart 
            size={14} 
            className="text-red-500 animate-[pulse_1.5s_infinite] shrink-0 filter drop-shadow-[0_0_3px_rgba(239,68,68,0.7)]" 
          /> 
          
          <span className="opacity-90">por</span>
          
          {/* Link para o site da Suprema */}
          <a 
            id="developer-suprema-link"
            href="https://supremasite.com.br" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-yellow-400 hover:text-yellow-300 transition-all font-black inline-flex items-center gap-2 cursor-pointer border-b border-dashed border-yellow-400/50 hover:border-yellow-300"
          >
            Suprema Sites Express
            
            {/* Logotipo oficial com efeito de iluminação */}
            <img 
              src="https://img.supremamidia.com/suprema-img.png" 
              alt="Suprema" 
              className="h-[18px] w-auto inline select-none shrink-0 filter drop-shadow-[0_0_2px_rgba(250,204,21,0.5)] transition-transform duration-300 hover:scale-110" 
              referrerPolicy="no-referrer"
            />
          </a>
        </p>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#3F1568] text-slate-200 py-14 border-t-2 border-[#6D2DBF]">
      <div className="max-w-[1296px] mx-auto px-4 lg:px-6 space-y-10">
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Column 1: Identification */}
          <div className="space-y-4">
            <h4 className="font-['Poppins'] font-bold text-lg text-white border-l-4 border-[#8A4DE8] pl-3">
              {CONSULTANT_INFO.shortName}
            </h4>
            <div className="space-y-2 text-base">
              <p className="font-bold text-white text-lg">{CONSULTANT_INFO.name}</p>
              <p className="text-[#8A4DE8] font-semibold text-sm flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#8A4DE8]" />
                {CONSULTANT_INFO.role}
              </p>
              <p className="text-sm text-slate-300 font-medium">CNPJ {CONSULTANT_INFO.cnpj}</p>
              <p className="text-xs text-slate-400 flex items-start gap-1.5 pt-1">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>{CONSULTANT_INFO.address}</span>
              </p>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div className="space-y-4">
            <h4 className="font-['Poppins'] font-bold text-lg text-white border-l-4 border-[#25D366] pl-3">
              Fale Diretamente Comigo
            </h4>
            <div className="space-y-3 text-base">
              <a
                href={`https://wa.me/${CONSULTANT_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] font-bold text-base hover:bg-[#25D366]/25 transition-all"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0" />
                <span>WhatsApp: {CONSULTANT_INFO.whatsapp}</span>
              </a>

              <div className="space-y-2 pt-1">
                <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">Ligar para Atendimento:</p>
                <a
                  href={`tel:+${CONSULTANT_INFO.phone1Raw}`}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm sm:text-base hover:bg-white/10 hover:border-[#2ED9A0] transition-all"
                >
                  <Phone className="w-4 h-4 text-[#2ED9A0] shrink-0" />
                  <span>Ligar: {CONSULTANT_INFO.phone1} (PR)</span>
                </a>
                <a
                  href={`tel:+${CONSULTANT_INFO.phone2Raw}`}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm sm:text-base hover:bg-white/10 hover:border-[#8A4DE8] transition-all"
                >
                  <Phone className="w-4 h-4 text-[#8A4DE8] shrink-0" />
                  <span>Ligar: {CONSULTANT_INFO.phone2} (MG)</span>
                </a>
              </div>

              <p className="text-sm text-slate-300 flex items-center gap-2 pt-1">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href={`mailto:${CONSULTANT_INFO.email}`} className="hover:text-white underline">
                  {CONSULTANT_INFO.email}
                </a>
              </p>

              <p className="text-sm text-slate-300">
                Instagram:{' '}
                <a
                  href={CONSULTANT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8A4DE8] font-semibold hover:underline"
                >
                  {CONSULTANT_INFO.instagram}
                </a>
              </p>
            </div>
          </div>

          {/* Column 3: Hours & Scope */}
          <div className="space-y-4">
            <h4 className="font-['Poppins'] font-bold text-lg text-white border-l-4 border-[#38BDF8] pl-3">
              Atendimento
            </h4>
            <div className="space-y-2 text-sm sm:text-base text-slate-200">
              <p className="flex items-center gap-2 font-medium">
                <Clock className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>{CONSULTANT_INFO.hours.weekdays}</span>
              </p>
              <p className="font-medium text-slate-300 pl-6">{CONSULTANT_INFO.hours.saturday}</p>
              <p className="text-slate-400 font-medium pl-6">{CONSULTANT_INFO.hours.sunday}</p>
              <div className="pt-2">
                <span className="inline-block px-3 py-1 rounded-full bg-[#25D366]/20 text-[#25D366] font-bold text-xs border border-[#25D366]/30">
                  {CONSULTANT_INFO.hours.scope}
                </span>
              </div>
            </div>
          </div>

          {/* Column 4: Official Loovi Channels */}
          <div className="space-y-4">
            <h4 className="font-['Poppins'] font-bold text-lg text-white border-l-4 border-[#8A4DE8] pl-3">
              Canais Oficiais Loovi 24h
            </h4>
            <div className="space-y-2 text-sm sm:text-base text-slate-200">
              <p className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-slate-300">Central:</span>
                <span className="text-white font-bold">{LOOVI_CHANNELS.central}</span>
              </p>
              <p className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-slate-300">Assistência 24h:</span>
                <span className="text-[#25D366] font-bold">{LOOVI_CHANNELS.assistance24h}</span>
              </p>
              <p className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-slate-300">Furto/Roubo:</span>
                <span className="text-white font-bold">{LOOVI_CHANNELS.theftTheft24h}</span>
              </p>
              <p className="flex justify-between pt-0.5">
                <span className="text-slate-300">Ouvidoria:</span>
                <span className="text-white font-bold">{LOOVI_CHANNELS.ombudsman}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Mandatory Legal Notice */}
        <div className="pt-8 border-t border-white/15">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            {LEGAL_NOTICE}
          </p>
        </div>

        {/* Suprema Credit Component */}
        <SupremaCredit />
      </div>
    </footer>
  );
}
