import { useState, useEffect } from 'react';
import { ArrowUp, CheckCircle } from 'lucide-react';
import { CONSULTANT_INFO } from '../constants';

export function FloatingControls() {
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowControls(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Back to Top Button */}
      {showControls && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-3 rounded-full bg-[#481773] text-white border border-[#6D2DBF] shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none"
          aria-label="Voltar ao topo"
          title="Voltar ao topo"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* 2.12 Selo Flutuante do Executivo */}
      <a
        href={`https://wa.me/${CONSULTANT_INFO.whatsappRaw}?text=${encodeURIComponent('Olá Barbara, vim pelo site e gostaria de simular o seguro do meu carro!')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto bg-white rounded-full p-2 pr-4 shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-[#E5E7EB] flex items-center gap-3 hover:scale-[1.03] transition-all duration-300 group"
      >
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-[#481773] text-white font-bold flex items-center justify-center text-sm">
            BD
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#2ED9A0] border-2 border-white flex items-center justify-center">
            <CheckCircle className="w-2.5 h-2.5 text-white stroke-[3]" />
          </div>
        </div>

        <div className="text-left">
          <div className="font-['Poppins'] font-semibold text-[13px] text-[#131522] group-hover:text-[#6D2DBF] transition-colors leading-tight">
            Barbara Duraes
          </div>
          <div className="text-[11px] text-[#4B5563] font-normal leading-tight">
            Executiva Autorizada Loovi
          </div>
        </div>
      </a>
    </div>
  );
}
