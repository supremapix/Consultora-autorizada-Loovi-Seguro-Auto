import { useState } from 'react';
import { CheckCircle2, ChevronDown } from 'lucide-react';
import { COVERAGES, OFFICIAL_ADHESION_LINK } from '../constants';

export function CoveragesSection() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    assistance: true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="coberturas" className="py-14 lg:py-24 bg-white text-[#131522]">
      <div className="max-w-[1296px] mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <h2 className="font-['Poppins'] font-semibold text-[28px] lg:text-[40px] text-[#131522] tracking-[-0.28px] leading-[1.2]">
            Coberturas
          </h2>

          <p className="text-[14px] text-[#4B5563] font-normal">
            Seguros garantidos pela LTI Seguros S.A., uma empresa do Grupo Loovi.
          </p>
        </div>

        {/* Accordion Cards List */}
        <div className="max-w-4xl mx-auto space-y-3">
          {COVERAGES.map((item) => {
            const isOpen = !!openItems[item.id];
            return (
              <div
                key={item.id}
                className={`bg-white rounded-[8px] p-[20px_24px] border transition-all duration-300 ${
                  isOpen ? 'border-[#6D2DBF]' : 'border-[#E5E7EB]'
                }`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between text-left gap-4 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#F3E8FF] flex items-center justify-center text-[#6D2DBF] flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-[#6D2DBF]" />
                    </div>
                    <div>
                      <h3 className="font-['Poppins'] font-semibold text-[18px] text-[#131522]">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5 text-[#6D2DBF]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-[#E5E7EB] text-[16px] text-[#4B5563] leading-relaxed animate-fadeIn">
                    <p className="font-medium text-[#131522] mb-1">{item.summary}</p>
                    <p>{item.details}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 text-center">
          <a
            href={OFFICIAL_ADHESION_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 text-[16px]"
          >
            Contratar agora
          </a>
        </div>
      </div>
    </section>
  );
}
