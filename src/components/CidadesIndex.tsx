import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CIDADES_METROPOLITANAS } from '../data/cidadesData';
import { MapPin, Search, ArrowRight, ShieldCheck, Clock, Navigation } from 'lucide-react';
import { HomeImagesShowcase } from './HomeImagesShowcase';

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
    <div className="bg-white text-slate-900 min-h-screen pt-24 pb-16">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="seguro auto regiao metropolitana curitiba, seguro sao jose dos pinhais, seguro pinhais, seguro colombo, seguro araucaria, seguro campo largo, seguro fazenda rio grande" />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6D2DBF]/10 text-[#6D2DBF] text-xs font-bold uppercase tracking-wider mb-4 border border-[#6D2DBF]/30">
            <MapPin className="w-3.5 h-3.5" />
            <span>Atendimento em Toda a Região Metropolitana de Curitiba (RMC)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-sora tracking-tight text-slate-900 mb-4">
            Seguro Auto Loovi na <span className="text-[#6D2DBF]">Região Metropolitana</span>
          </h1>
          <p className="text-slate-700 text-base sm:text-lg font-medium">
            Guincho 24h em rodovias (BR-277, BR-376, BR-116, Rodovia da Uva, Rodovia do Xisto) e socorro imediato nas 15 principais cidades metropolitanas.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 mb-10 shadow-sm">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Digite o nome da sua cidade na RMC (ex: São José dos Pinhais, Pinhais, Colombo, Araucária...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#6D2DBF] text-sm sm:text-base transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCidades.map(c => (
            <div
              key={c.slug}
              onClick={() => onNavigate(`/cidade/${c.slug}`)}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#6D2DBF] hover:bg-white transition-all cursor-pointer group hover:-translate-y-1 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#2ED9A0]/20 text-[#00875A] text-[10px] font-bold uppercase">
                    {c.distanceFromCuritiba}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#00875A]" />
                    ~{c.avgArrivalMinutes} min
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 font-sora group-hover:text-[#6D2DBF] transition-colors mb-2 flex items-center justify-between">
                  <span>{c.name}</span>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#6D2DBF] group-hover:translate-x-1 transition-all" />
                </h2>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                  {c.description}
                </p>

                <div className="space-y-1 mb-4">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Principais Rodovias:</span>
                  <div className="flex flex-wrap gap-1">
                    {c.mainRoads.slice(0, 3).map((road, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[10px] text-slate-700 font-medium">
                        {road}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#6D2DBF]" />
                  100% FIPE
                </span>
                <span className="flex items-center gap-1">
                  <Navigation className="w-3.5 h-3.5 text-[#00875A]" />
                  Guincho 24h
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Home Images Showcase */}
        <HomeImagesShowcase
          title="Galeria Visual da Proteção Loovi na Região Metropolitana"
          subtitle="Confira o socorro rápido em rodovias, coberturas contra roubo e desastres e assistência 24h para as 15 cidades da RMC."
        />
      </section>
    </div>
  );
};
