import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CIDADES_METROPOLITANAS } from '../data/cidadesData';
import { MapPin, Search, ArrowRight, ShieldCheck, Clock, Navigation } from 'lucide-react';

interface Props {
  onNavigate: (path: string) => void;
}

export const CidadesIndex: React.FC<Props> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const pageTitle = "Seguro Auto na Região Metropolitana de Curitiba (15 Cidades) | Loovi";
  const pageDescription = "Seguro veicular para São José dos Pinhais, Pinhais, Colombo, Araucária, Campo Largo, Fazenda Rio Grande e toda a RMC. Guincho 24h em rodovias, 100% FIPE e sem análise de perfil.";
  const canonicalUrl = "https://loovi-barbara-duraes.com.br/cidades-regiao-metropolitana";

  const filteredCidades = CIDADES_METROPOLITANAS.filter(c =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#0B0D17] text-white min-h-screen pt-24 pb-16">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="seguro auto regiao metropolitana curitiba, seguro sao jose dos pinhais, seguro pinhais, seguro colombo, seguro araucaria, seguro campo largo, seguro fazenda rio grande" />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8A4DE8]/15 text-[#8A4DE8] text-xs font-bold uppercase tracking-wider mb-4 border border-[#8A4DE8]/30">
            <MapPin className="w-3.5 h-3.5" />
            <span>Atendimento em Toda a Região Metropolitana de Curitiba (RMC)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-sora tracking-tight text-white mb-4">
            Seguro Auto Loovi na <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A4DE8] to-[#2ED9A0]">Região Metropolitana</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg">
            Guincho 24h em rodovias (BR-277, BR-376, BR-116, Rodovia da Uva, Rodovia do Xisto) e socorro imediato nas 15 principais cidades metropolitanas.
          </p>
        </div>

        <div className="bg-[#131626] border border-white/10 rounded-3xl p-6 mb-10 shadow-xl">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Digite o nome da sua cidade na RMC (ex: São José dos Pinhais, Pinhais, Colombo, Araucária...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-[#8A4DE8] text-sm sm:text-base transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCidades.map(c => (
            <div
              key={c.slug}
              onClick={() => onNavigate(`/cidade/${c.slug}`)}
              className="p-6 rounded-3xl bg-[#131626] border border-white/10 hover:border-[#2ED9A0] transition-all cursor-pointer group hover:-translate-y-1 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#2ED9A0]/15 text-[#2ED9A0] text-[10px] font-bold uppercase">
                    {c.distanceFromCuritiba}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#2ED9A0]" />
                    ~{c.avgArrivalMinutes} min
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white font-sora group-hover:text-[#2ED9A0] transition-colors mb-2 flex items-center justify-between">
                  <span>{c.name}</span>
                  <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-[#2ED9A0] group-hover:translate-x-1 transition-all" />
                </h2>

                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">
                  {c.description}
                </p>

                <div className="space-y-1 mb-4">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Principais Rodovias:</span>
                  <div className="flex flex-wrap gap-1">
                    {c.mainRoads.slice(0, 3).map((road, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-slate-300">
                        {road}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#8A4DE8]" />
                  100% FIPE
                </span>
                <span className="flex items-center gap-1">
                  <Navigation className="w-3.5 h-3.5 text-[#2ED9A0]" />
                  Guincho 24h
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
