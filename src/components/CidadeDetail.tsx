import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CidadeInfo } from '../data/cidadesData';
import { CONSULTANT_INFO, OFFICIAL_ADHESION_LINK } from '../constants';
import { getInsuranceAgencySchema, getBreadcrumbSchema, getFaqSchema, getServiceSchema } from '../data/seoSchemas';
import { MapPin, Phone, MessageCircle, Clock, ShieldCheck, ArrowRight, HelpCircle, Navigation, CheckCircle2 } from 'lucide-react';
import { QuizCotacao } from './QuizCotacao';

interface Props {
  cidade: CidadeInfo;
  onNavigate: (path: string) => void;
}

export const CidadeDetail: React.FC<Props> = ({ cidade, onNavigate }) => {
  const pageTitle = `Seguro Auto Loovi em ${cidade.name} | Cotação com Bárbara Durães`;
  const pageDescription = `Seguro veicular em ${cidade.name} (Região Metropolitana de Curitiba). Atendimento 100% digital, sem análise de perfil, com Guincho 24h em ~${cidade.avgArrivalMinutes} min e 100% da FIPE. Simule online.`;
  const canonicalUrl = `https://loovi-barbara-duraes.com.br/cidade/${cidade.slug}`;

  const breadcrumbItems = [
    { name: 'Início', url: 'https://loovi-barbara-duraes.com.br/' },
    { name: 'Região Metropolitana de Curitiba', url: 'https://loovi-barbara-duraes.com.br/cidades-regiao-metropolitana' },
    { name: cidade.name, url: canonicalUrl }
  ];

  const whatsappMessage = encodeURIComponent(`Olá Bárbara! Moro em ${cidade.name} na RMC e gostaria de cotar o Seguro Loovi para o meu carro.`);
  const whatsappLink = `https://wa.me/${CONSULTANT_INFO.whatsappRaw}?text=${whatsappMessage}`;

  return (
    <div className="bg-[#0B0D17] text-white min-h-screen pt-24 pb-16">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`seguro auto ${cidade.name}, seguro de carro ${cidade.name} rmc, loovi seguro ${cidade.name}, guincho 24h ${cidade.name}, cotar seguro ${cidade.name}`} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />

        <script type="application/ld+json">{JSON.stringify(getInsuranceAgencySchema(canonicalUrl, pageTitle, pageDescription))}</script>
        <script type="application/ld+json">{JSON.stringify(getBreadcrumbSchema(breadcrumbItems))}</script>
        <script type="application/ld+json">{JSON.stringify(getFaqSchema(cidade.faqs))}</script>
        <script type="application/ld+json">{JSON.stringify(getServiceSchema(`Seguro Auto Loovi em ${cidade.name}`, pageDescription, `${cidade.name} - PR`))}</script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs sm:text-sm text-slate-400 flex items-center gap-2 flex-wrap">
        <button onClick={() => onNavigate('/')} className="hover:text-[#2ED9A0] transition-colors">Início</button>
        <span>/</span>
        <button onClick={() => onNavigate('/cidades-regiao-metropolitana')} className="hover:text-[#2ED9A0] transition-colors">Região Metropolitana</button>
        <span>/</span>
        <span className="text-[#2ED9A0] font-semibold">{cidade.name}</span>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="bg-gradient-to-br from-[#181C30] via-[#131626] to-[#0D0F1B] border border-white/10 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2ED9A0]/15 border border-[#2ED9A0]/30 text-[#2ED9A0] text-xs font-bold uppercase tracking-wider mb-6">
            <MapPin className="w-3.5 h-3.5" />
            <span>Região Metropolitana de Curitiba • {cidade.distanceFromCuritiba}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-sora text-white tracking-tight leading-tight mb-4">
            Seguro Auto Loovi em <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ED9A0] to-[#8A4DE8]">{cidade.name}</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-3xl mb-8">
            {cidade.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 mb-8">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
              <Clock className="w-8 h-8 text-[#2ED9A0] shrink-0" />
              <div>
                <span className="text-xs text-slate-400 block">Atendimento Guincho 24h</span>
                <span className="text-sm font-bold text-white">~{cidade.avgArrivalMinutes} min em {cidade.name}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[#8A4DE8] shrink-0" />
              <div>
                <span className="text-xs text-slate-400 block">Indenização FIPE</span>
                <span className="text-sm font-bold text-white">100% Tabela FIPE</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
              <Phone className="w-8 h-8 text-[#2ED9A0] shrink-0" />
              <div>
                <span className="text-xs text-slate-400 block">Consultora Autorizada</span>
                <span className="text-sm font-bold text-white">Executiva Bárbara Durães</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-[#2ED9A0] hover:bg-[#25B886] text-[#0B0D17] font-extrabold text-base transition-all transform hover:-translate-y-0.5 shadow-lg flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Simular Seguro em {cidade.name} via WhatsApp</span>
            </a>

            <a
              href={OFFICIAL_ADHESION_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-[#6D2DBF] hover:bg-[#8A4DE8] text-white font-bold text-base transition-all flex items-center justify-center gap-3 border border-white/20"
            >
              <span>Contratar Online Direct</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-[#131626] border border-white/10 rounded-3xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold font-sora text-white mb-4 flex items-center gap-3">
              <Navigation className="w-6 h-6 text-[#2ED9A0]" />
              Principais Rodovias & Acessos em {cidade.name}
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              A Loovi garante atendimento 0800 nacional com reboque, chaveiro, pane elétrica/mecânica e auxílio em pane seca para todas as rodovias e estradas de acesso a {cidade.name}.
            </p>

            <div className="space-y-2">
              {cidade.mainRoads.map((road, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#2ED9A0] shrink-0" />
                  <span>{road}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#131626] border border-white/10 rounded-3xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold font-sora text-white mb-6 flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-[#8A4DE8]" />
              Perguntas Frequentes sobre o Seguro Loovi em {cidade.name}
            </h2>
            <div className="space-y-4">
              {cidade.faqs.map((faq, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="font-bold text-white text-sm sm:text-base mb-2">{faq.q}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#6D2DBF] to-[#3F1568] p-6 rounded-3xl border border-white/20 text-white shadow-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2ED9A0] block mb-2">Atendimento Direto</span>
            <h3 className="text-xl font-extrabold font-sora mb-2">{CONSULTANT_INFO.name}</h3>
            <p className="text-xs text-slate-200 mb-6">{CONSULTANT_INFO.role}</p>

            <div className="space-y-3 mb-6">
              <a href={`tel:+${CONSULTANT_INFO.phone1Raw}`} className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-sm font-bold">
                <Phone className="w-4 h-4 text-[#2ED9A0]" />
                <span>{CONSULTANT_INFO.phone1} (PR)</span>
              </a>
              <a href={`tel:+${CONSULTANT_INFO.phone2Raw}`} className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-sm font-bold">
                <Phone className="w-4 h-4 text-[#2ED9A0]" />
                <span>{CONSULTANT_INFO.phone2} (MG)</span>
              </a>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-[#2ED9A0] text-[#0B0D17] font-extrabold text-sm text-center flex items-center justify-center gap-2 hover:bg-[#25B886] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Cotação Instantânea no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#0B0D17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuizCotacao />
        </div>
      </section>
    </div>
  );
};
