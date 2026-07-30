import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, Phone, MessageCircle, MapPin, Building2, BookOpen } from 'lucide-react';
import { CONSULTANT_INFO } from '../constants';

interface HeaderProps {
  onNavigate?: (path: string) => void;
  currentPath?: string;
}

export function Header({ onNavigate, currentPath = '/' }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
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

  const handleNav = (path: string) => {
    setIsMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = path;
    }
  };

  const navItems = [
    { label: 'Início', path: '/' },
    { label: 'Bairros', path: '/bairros-curitiba' },
    { label: 'Cidades RMC', path: '/cidades-regiao-metropolitana' },
    { label: 'Uber/App', path: '/seguro-app-uber' },
    { label: 'Coberturas', path: '/coberturas' },
    { label: 'Blog', path: '/blog' },
    { label: 'Sobre', path: '/sobre' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-[72px] transition-all duration-200 flex items-center ${
        isMobileMenuOpen
          ? 'z-[100] bg-[#481773] border-b border-[#6D2DBF]'
          : `z-40 bg-[#0B0D17]/95 backdrop-blur-md border-b border-white/10 ${isScrolled ? 'shadow-2xl' : ''}`
      }`}
    >
      <div className="max-w-[1296px] w-full mx-auto px-4 lg:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => handleNav('/')}
          className="flex items-center gap-2.5 text-left group"
          aria-label="Barbara Hanna - Executiva Loovi Verificada"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5">
            <span className="font-sora font-extrabold text-lg tracking-tight text-white group-hover:text-[#2ED9A0] transition-colors">
              Barbara Hanna
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#2ED9A0]/15 text-[#2ED9A0] border border-[#2ED9A0]/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              Executiva Loovi
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNav(item.path)}
                className={`text-sm font-semibold transition-all py-1 ${
                  isActive
                    ? 'text-[#2ED9A0] border-b-2 border-[#2ED9A0]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Header CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`https://wa.me/${CONSULTANT_INFO.whatsappRaw}?text=${encodeURIComponent('Olá Bárbara! Gostaria de fazer uma cotação para o meu veículo em Curitiba.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-2xl bg-[#2ED9A0] hover:bg-[#25B886] text-[#0B0D17] font-extrabold text-sm transition-all transform hover:-translate-y-0.5 shadow-lg flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Cotar no WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden relative z-[110] flex items-center gap-2 px-3.5 py-2 rounded-xl font-bold text-sm shadow-md transition-all border ${
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
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
          <div
            className="h-full bg-gradient-to-r from-[#2ED9A0] to-[#8A4DE8] transition-all duration-150 ease-out"
            style={{ width: `${readingProgress}%` }}
          />
        </div>
      )}

      {/* Mobile Full-Screen Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] z-[100] bg-[#0B0D17] text-white flex flex-col justify-between p-6 lg:hidden overflow-y-auto animate-fadeIn border-t border-white/10 min-h-[calc(100vh-72px)]">
          <div className="space-y-6">
            <div className="pb-4 border-b border-white/10 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#2ED9A0]">Loovi Seguro Auto Curitiba</p>
                <p className="text-sm text-slate-300 font-medium">Bárbara Durães • Executiva Autorizada</p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#2ED9A0]/20 text-[#2ED9A0] text-xs font-bold">
                Online
              </span>
            </div>

            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = currentPath === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => handleNav(item.path)}
                    className={`text-lg font-bold py-3.5 px-4 rounded-2xl transition-all flex items-center justify-between border ${
                      isActive
                        ? 'bg-[#6D2DBF] text-white border-[#8A4DE8]/40 shadow-lg'
                        : 'bg-[#131626] text-slate-100 hover:bg-[#6D2DBF] border-white/10'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className={`w-5 h-5 ${isActive ? 'text-[#2ED9A0]' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="flex flex-col gap-3 pt-6 mt-6 border-t border-white/15 pb-8">
            <a
              href={`https://wa.me/${CONSULTANT_INFO.whatsappRaw}?text=${encodeURIComponent('Olá Bárbara! Vim do menu do site e gostaria de simular meu seguro auto.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-[#2ED9A0] text-[#0B0D17] font-extrabold text-base text-center shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Simular Seguro no WhatsApp</span>
            </a>

            <div className="flex flex-col gap-2 pt-2">
              <span className="text-xs font-extrabold text-[#2ED9A0] uppercase tracking-wider text-center">
                Atendimento por Ligação
              </span>
              <a
                href={`tel:+${CONSULTANT_INFO.phone1Raw}`}
                className="w-full py-3.5 px-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-bold text-sm text-center border border-white/10 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#2ED9A0]" />
                <span>Ligar: {CONSULTANT_INFO.phone1} (PR)</span>
              </a>
              <a
                href={`tel:+${CONSULTANT_INFO.phone2Raw}`}
                className="w-full py-3.5 px-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-bold text-sm text-center border border-white/10 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
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
