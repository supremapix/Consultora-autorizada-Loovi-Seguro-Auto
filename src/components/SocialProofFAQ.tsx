import { useState } from 'react';
import { Star, ChevronDown } from 'lucide-react';
import { FAQ_ITEMS, TESTIMONIALS } from '../constants';

export function SocialProofFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>
      {/* Testimonials */}
      <section className="py-14 lg:py-24 bg-[#F6F5FB] text-[#131522]">
        <div className="max-w-[1296px] mx-auto px-4 lg:px-6">
          <div className="text-center space-y-2 max-w-xl mx-auto mb-12">
            <h2 className="font-['Poppins'] font-semibold text-[28px] lg:text-[40px] text-[#131522] tracking-[-0.28px]">
              O que dizem os nossos clientes
            </h2>
            <p className="text-[16px] text-[#4B5563]">
              Histórias reais de quem confia na segurança Loovi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[8px] p-6 border border-[#E5E7EB] space-y-4 flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-[#6D2DBF]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#6D2DBF]" />
                    ))}
                  </div>

                  <p className="text-[15px] text-[#4B5563] leading-relaxed italic">
                    "{t.text}"
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-between">
                  <div>
                    <span className="font-['Poppins'] font-semibold text-sm text-[#131522] block">
                      {t.name}
                    </span>
                    <span className="text-xs text-[#999BAF]">
                      {t.city}
                    </span>
                  </div>
                  <span className="text-xs bg-[#6D2DBF]/10 text-[#6D2DBF] px-2 py-1 rounded font-medium">
                    {t.vehicle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.10 FAQ */}
      <section id="faq" className="py-14 lg:py-24 bg-white text-[#131522]">
        <div className="max-w-[1296px] mx-auto px-4 lg:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-['Poppins'] font-semibold text-[28px] lg:text-[40px] text-[#131522] tracking-[-0.28px]">
              Dúvidas frequentes
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-[8px] p-[20px_24px] border transition-all duration-300 ${
                    isOpen ? 'border-[#6D2DBF]' : 'border-[#E5E7EB]'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left flex items-center justify-between gap-4 font-['Poppins'] font-semibold text-[18px] text-[#131522] focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#6D2DBF] transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pt-4 mt-4 border-t border-[#E5E7EB] text-[16px] text-[#4B5563] leading-relaxed animate-fadeIn">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
