import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, Phone, MessageCircle } from 'lucide-react';
import { CONSULTANT_INFO } from '../constants';

const NAV_ITEMS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Coberturas', href: '#coberturas' },
  { label: 'Por que Loovi', href: '#por-que-loovi' },
  { label: 'Simular', href: '#simular' },
  { label: 'Contato', href: '#contato' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [readingProgress, setReadingProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setReadingProgress(Math.min(100, Math.max(0, (scrollY / totalHeight) * 100)));
      }

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-[72px] transition-all duration-200 flex items-center ${
        isMobileMenuOpen
          ? 'z-[100] bg-[#481773] border-b border-[#6D2DBF]'
          : `z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] ${isScrolled ? 'shadow-md' : ''}`
      }`}
    >
      <div className="max-w-[1296px] w-full mx-auto px-4 lg:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#inicio');
          }}
          className="flex items-center gap-2.5 group"
          aria-label="Barbara Hanna - Executiva Loovi Verificada"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5">
            <span
              className={`font-['Poppins'] font-semibold text-lg tracking-tight ${
                isMobileMenuOpen ? 'text-white' : 'text-[#131522]'
              }`}
            >
              Barbara Hanna
            </span>
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[12px] font-medium ${
                isMobileMenuOpen
                  ? 'bg-[#6D2DBF]/30 text-[#8A4DE8] border border-[#8A4DE8]/30'
                  : 'bg-[#F3E8FF] text-[#481773]'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Executiva Loovi Verificada
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`text-[15px] font-medium transition-colors duration-250 py-1 ${
                  isActive ? 'text-[#481773] font-semibold' : 'text-[#4B5563] hover:text-[#6D2DBF]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Header CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#simular"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#simular');
            }}
            className="btn-primary text-sm !py-2.5 !px-6 shadow-sm hover:scale-105 transition-all flex items-center gap-2"
          >
            Cotar agora
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button with High Contrast & Senior Friendly Label */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden relative z-[110] flex items-center gap-2 px-3.5 py-2 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95 border ${
            isMobileMenuOpen
              ? 'bg-[#6D2DBF] text-white border-white/20'
              : 'bg-[#481773] text-white border-[#8A4DE8]/30 hover:bg-[#6D2DBF]'
          }`}
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMobileMenuOpen ? (
            <>
              <span className="text-xs uppercase tracking-wider font-extrabold">FECHAR</span>
              <X className="w-5 h-5 text-white" />
            </>
          ) : (
            <>
              <span className="text-xs uppercase tracking-wider font-extrabold">MENU</span>
              <Menu className="w-5 h-5 text-white" />
            </>
          )}
        </button>
      </div>

      {/* Reading Progress Bar */}
      {!isMobileMenuOpen && (
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F3E8FF]">
          <div
            className="h-full bg-[#6D2DBF] transition-all duration-150 ease-out"
            style={{ width: `${readingProgress}%` }}
          />
        </div>
      )}

      {/* Mobile Full-Screen Senior-Accessible High-Contrast Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] z-[100] bg-[#481773] text-white flex flex-col justify-between p-6 md:hidden overflow-y-auto animate-fadeIn border-t border-[#6D2DBF] min-h-[calc(100vh-72px)]">
          <div className="space-y-6">
            <div className="pb-4 border-b border-white/10 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#8A4DE8]">Navegação Direta</p>
                <p className="text-sm text-slate-300 font-medium">Barbara Duraes • Loovi Seguros</p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#25D366]/20 text-[#25D366] text-xs font-bold">
                Online Agora
              </span>
            </div>

            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`text-xl font-bold py-3.5 px-4 rounded-xl transition-all flex items-center justify-between border ${
                      isActive
                        ? 'bg-[#6D2DBF] text-white border-[#8A4DE8]/40 shadow-lg'
                        : 'bg-[#3B1261] text-slate-100 hover:bg-[#6D2DBF] border-white/10'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className={`w-5 h-5 ${isActive ? 'text-white' : 'text-[#8A4DE8]'}`} />
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="flex flex-col gap-3 pt-6 mt-6 border-t border-white/15 pb-8">
            {/* Main Quote Button */}
            <a
              href="#simular"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#simular');
              }}
              className="w-full py-4 px-6 rounded-2xl bg-loovi-gradient text-white font-bold text-lg text-center shadow-lg shadow-[#481773]/40 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span>Fazer Cotação Grátis</span>
              <ArrowRight className="w-5 h-5 text-white" />
            </a>

            {/* Direct WhatsApp Call for Elderly */}
            <a
              href={`https://wa.me/${CONSULTANT_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-2xl bg-[#25D366] text-black font-extrabold text-base text-center shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-black text-[#25D366]" />
              <span>Falar no WhatsApp (Ajuda)</span>
            </a>

            {/* Direct Phone Calls */}
            <div className="flex flex-col gap-2 pt-1">
              <span className="text-xs font-extrabold text-[#2ED9A0] uppercase tracking-wider text-center">
                Atendimento por Ligação (2 Números)
              </span>
              <a
                href={`tel:+${CONSULTANT_INFO.phone1Raw}`}
                className="w-full py-3.5 px-4 rounded-2xl bg-[#6D2DBF] hover:bg-[#8A4DE8] text-white font-bold text-sm text-center border border-white/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#2ED9A0]" />
                <span>Ligar: {CONSULTANT_INFO.phone1} (PR)</span>
              </a>
              <a
                href={`tel:+${CONSULTANT_INFO.phone2Raw}`}
                className="w-full py-3.5 px-4 rounded-2xl bg-[#3F1568] hover:bg-[#6D2DBF] text-white font-bold text-sm text-center border border-white/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#2ED9A0]" />
                <span>Ligar: {CONSULTANT_INFO.phone2} (MG)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
