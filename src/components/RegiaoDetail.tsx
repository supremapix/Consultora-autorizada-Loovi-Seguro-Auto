import React from 'react';
import { Helmet } from 'react-helmet-async';
import { RegiaoInfo } from '../data/regioesData';
import { CONSULTANT_INFO, OFFICIAL_ADHESION_LINK } from '../constants';
import { getInsuranceAgencySchema, getBreadcrumbSchema, getServiceSchema } from '../data/seoSchemas';
import { MapPin, Phone, MessageCircle, Clock, ShieldCheck, ArrowRight, HelpCircle } from 'lucide-react';
import { QuizCotacao } from './QuizCotacao';
import { HomeImagesShowcase } from './HomeImagesShowcase';

interface Props {
  regiao: RegiaoInfo;
  onNavigate: (path: string) => void;
}

export const RegiaoDetail: React.FC<Props> = ({ regiao, onNavigate }) => {
  const pageTitle = `Seguro Auto Loovi na ${regiao.name} (${regiao.parentBairro}) | Bárbara Durães`;
  const pageDescription = `Seguro veicular na ${regiao.name}, região do ${regiao.parentBairro} em Curitiba. 100% digital, sem análise de perfil, com Guincho 24h e 100% da FIPE. Cotar via WhatsApp.`;
  const canonicalUrl = `https://loovi-barbara-duraes.com.br/regiao/${regiao.slug}`;

  const breadcrumbItems = [
    { name: 'Início', url: 'https://loovi-barbara-duraes.com.br/' },
    { name: 'Bairros de Curitiba', url: 'https://loovi-barbara-duraes.com.br/bairros-curitiba' },
    { name: regiao.name, url: canonicalUrl }
  ];

  const whatsappMessage = encodeURIComponent(`Olá Bárbara! Moro na região da ${regiao.name} (${regiao.parentBairro}) e gostaria de cotar o Seguro Loovi para o meu carro.`);
  const whatsappLink = `https://wa.me/${CONSULTANT_INFO.whatsappRaw}?text=${whatsappMessage}`;

  return (
    <div className="bg-[#0B0D17] text-white min-h-screen pt-24 pb-16">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`seguro auto ${regiao.name}, seguro de carro ${regiao.name} ${regiao.parentBairro}, loovi seguro ${regiao.name}, guincho 24h ${regiao.name}`} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />

        <script type="application/ld+json">{JSON.stringify(getInsuranceAgencySchema(canonicalUrl, pageTitle, pageDescription))}</script>
        <script type="application/ld+json">{JSON.stringify(getBreadcrumbSchema(breadcrumbItems))}</script>
        <script type="application/ld+json">{JSON.stringify(getServiceSchema(`Seguro Auto Loovi na ${regiao.name}`, pageDescription, `${regiao.name}, Curitiba - PR`))}</script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs sm:text-sm text-slate-400 flex items-center gap-2 flex-wrap">
        <button onClick={() => onNavigate('/')} className="hover:text-[#2ED9A0] transition-colors">Início</button>
        <span>/</span>
        <button onClick={() => onNavigate('/bairros-curitiba')} className="hover:text-[#2ED9A0] transition-colors">Bairros de Curitiba</button>
        <span>/</span>
        <span className="text-[#2ED9A0] font-semibold">{regiao.name}</span>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="bg-gradient-to-br from-[#181C30] via-[#131626] to-[#0D0F1B] border border-white/10 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8A4DE8]/15 border border-[#8A4DE8]/30 text-[#8A4DE8] text-xs font-bold uppercase tracking-wider mb-6">
            <MapPin className="w-3.5 h-3.5" />
            <span>Região Popular do {regiao.parentBairro} • Curitiba</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-sora text-white tracking-tight leading-tight mb-4">
            Seguro Auto Loovi na <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A4DE8] to-[#2ED9A0]">{regiao.name}</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-3xl mb-8">
            {regiao.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 mb-8">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
              <Clock className="w-8 h-8 text-[#2ED9A0] shrink-0" />
              <div>
                <span className="text-xs text-slate-400 block">Atendimento Guincho</span>
                <span className="text-sm font-bold text-white">~{regiao.avgArrivalMinutes} min na {regiao.name}</span>
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
                <span className="text-xs text-slate-400 block">Atendimento Direct</span>
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
              <span>Simular Seguro na {regiao.name} via WhatsApp</span>
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
            <h2 className="text-2xl font-bold font-sora text-white mb-4">
              Proteção para Motoristas e Famílias na {regiao.name}
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              A comunidade da {regiao.name}, localizada no {regiao.parentBairro}, conta com socorro mecânico rápido, cobertura de vidros completa, carro reserva e rastreador gratuito da Loovi. Faça sua cotação sem consulta ao SPC/Serasa e sem burocracia.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-white text-base mb-1">Proteção Total de Roubo e Furto</h3>
                <p className="text-xs text-slate-300">Ressarcimento de até 100% da Tabela FIPE com rastreamento ativo.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-white text-base mb-1">Danos a Terceiros até R$ 100 mil</h3>
                <p className="text-xs text-slate-300">Sua garantia contra batidas em outros veículos nas ruas da {regiao.name}.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#131626] border border-white/10 rounded-3xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold font-sora text-white mb-4 flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-[#2ED9A0]" />
              Dúvidas da {regiao.name}
            </h2>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-white text-sm sm:text-base mb-1">Como acionar a assistência 24h na {regiao.name}?</h3>
                <p className="text-xs sm:text-sm text-slate-300">Ligue para o 0800 948 4888 ou acione via app Loovi para socorro imediato.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-white text-sm sm:text-base mb-1">Aceita motoristas de app Uber e 99 na {regiao.name}?</h3>
                <p className="text-xs sm:text-sm text-slate-300">Sim! Aceitação total com 100% da Tabela FIPE garantida.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#6D2DBF] to-[#3F1568] p-6 rounded-3xl border border-white/20 text-white shadow-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2ED9A0] block mb-2">Atendimento Direto</span>
            <h3 className="text-xl font-extrabold font-sora mb-2">{CONSULTANT_INFO.name}</h3>
            <p className="text-xs text-slate-200 mb-6">{CONSULTANT_INFO.role}</p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-[#2ED9A0] text-[#0B0D17] font-extrabold text-sm text-center flex items-center justify-center gap-2 hover:bg-[#25B886] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Showcase de Imagens da Home */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HomeImagesShowcase
          title={`Galeria de Imagens e Coberturas na ${regiao.name}`}
          subtitle={`Acompanhe em fotos o socorro 24h, coberturas e tecnologia Loovi para quem mora na ${regiao.name}.`}
        />
      </div>

      <section className="py-12 bg-[#0B0D17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuizCotacao />
        </div>
      </section>
    </div>
  );
};
