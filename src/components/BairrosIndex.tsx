import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BAIRROS_CURITIBA } from '../data/bairrosData';
import { REGIOES_POPULARES } from '../data/regioesData';
import { MapPin, Search, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { HomeImagesShowcase } from './HomeImagesShowcase';

interface Props {
  onNavigate: (path: string) => void;
}

export const BairrosIndex: React.FC<Props> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedZone, setSelectedZone] = useState<string>('Todas');

  const pageTitle = "Seguro Auto em Todos os 75 Bairros de Curitiba | Loovi Bárbara Durães";
  const pageDescription = "Guia completo do Seguro Auto Loovi para os 75 bairros oficiais e regiões de Curitiba/PR. Guincho 24h, 100% da FIPE, sem análise de perfil. Encontre seu bairro.";
  const canonicalUrl = "https://loovi-barbara-duraes.com.br/bairros-curitiba";

  const zones = ['Todas', 'Central', 'Norte', 'Sul', 'Leste', 'Oeste'];

  const filteredBairros = BAIRROS_CURITIBA.filter(b => {
    const matchesZone = selectedZone === 'Todas' || b.zone === selectedZone;
    const matchesSearch = b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          b.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesZone && matchesSearch;
  });

  const filteredRegioes = REGIOES_POPULARES.filter(r => 
    r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.parentBairro.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-24 pb-16">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="seguro auto bairros curitiba, seguro de carro curitiba bairros, loovi curitiba agua verde batel cic sitio cercado pinheirinho cabral" />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2ED9A0]/20 text-[#00875A] text-xs font-bold uppercase tracking-wider mb-4 border border-[#2ED9A0]/40">
            <MapPin className="w-3.5 h-3.5 text-[#00875A]" />
            <span>Cobertura em 100% de Curitiba (75 Bairros Oficiais)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-sora tracking-tight text-slate-900 mb-4">
            Seguro Auto Loovi por <span className="text-[#6D2DBF]">Bairros de Curitiba</span>
          </h1>
          <p className="text-slate-700 text-base sm:text-lg font-medium">
            Atendimento prioritário de socorro 24h, guincho rápido, rastreador grátis e 100% da FIPE em todas as zonas da capital paranaense.
          </p>
        </div>

        {/* Search & Zone Filter */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 mb-10 shadow-sm space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Digite o nome do seu bairro ou rua (ex: Água Verde, Batel, Sítio Cercado, CIC...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#6D2DBF] text-sm sm:text-base transition-all shadow-sm"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs text-slate-600 font-bold uppercase mr-2">Filtrar Zona:</span>
            {zones.map(zone => (
              <button
                key={zone}
                onClick={() => setSelectedZone(zone)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedZone === zone
                    ? 'bg-[#6D2DBF] text-white shadow-md scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {zone}
              </button>
            ))}
          </div>
        </div>

        {/* 75 Official Neighborhoods Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold font-sora text-slate-900 mb-6 flex items-center justify-between">
            <span>Bairros Oficiais de Curitiba ({filteredBairros.length})</span>
            <span className="text-xs text-slate-500 font-normal">Clique para ver detalhes do seu bairro</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredBairros.map(b => (
              <div
                key={b.slug}
                onClick={() => onNavigate(`/bairro/${b.slug}`)}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#6D2DBF] hover:bg-white transition-all cursor-pointer group hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-[10px] font-bold uppercase text-[#00875A]">
                    Zona {b.zone}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                    <Clock className="w-3 h-3 text-[#00875A]" />
                    ~{b.avgArrivalMinutes} min
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-sora group-hover:text-[#6D2DBF] transition-colors mb-2 flex items-center justify-between">
                  <span>{b.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#6D2DBF] group-hover:translate-x-1 transition-all" />
                </h3>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                  {b.description}
                </p>

                <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#6D2DBF]" />
                  <span>100% FIPE • Sem Análise de Perfil</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regiões Populares Grid */}
        {filteredRegioes.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold font-sora text-slate-900 mb-2">
              Regiões Populares e Loteamentos ({filteredRegioes.length})
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Vilas, conjuntos residenciais e regiões populosas de Curitiba com atendimento garantido.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {filteredRegioes.map(r => (
                <div
                  key={r.slug}
                  onClick={() => onNavigate(`/regiao/${r.slug}`)}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#6D2DBF] hover:bg-white transition-all cursor-pointer group shadow-sm"
                >
                  <span className="text-xs font-bold text-slate-900 block group-hover:text-[#6D2DBF] transition-colors">{r.name}</span>
                  <span className="text-[10px] text-slate-500 block">{r.parentBairro}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Home Images Showcase */}
        <HomeImagesShowcase
          title="Galeria Visual da Proteção Loovi em Curitiba"
          subtitle="Explore todas as coberturas e a frota de guinchos e assistências disponíveis para os 75 bairros de Curitiba."
        />
      </section>
    </div>
  );
};
