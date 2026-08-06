import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BairroInfo } from '../data/bairrosData';
import { CONSULTANT_INFO } from '../constants';
import { getInsuranceAgencySchema, getBreadcrumbSchema, getFaqSchema, getServiceSchema } from '../data/seoSchemas';
import { ShieldCheck, MapPin, Phone, MessageCircle, Clock, Navigation, CheckCircle2, ArrowRight, Car, HelpCircle, FileText } from 'lucide-react';
import { QuizCotacao } from './QuizCotacao';
import { HomeImagesShowcase } from './HomeImagesShowcase';

interface Props {
  bairro: BairroInfo;
  onNavigate: (path: string) => void;
}

export const BairroDetail: React.FC<Props> = ({ bairro, onNavigate }) => {
  const pageTitle = `Seguro Auto Loovi em ${bairro.name}, Curitiba | Cotação com Bárbara Durães`;
  const pageDescription = `Seguro de carro em ${bairro.name} (Curitiba/PR). 100% Digital, sem análise de perfil, com Guincho 24h em ~${bairro.avgArrivalMinutes} min e 100% da FIPE. Faça sua simulação online sem compromisso.`;
  const canonicalUrl = `https://loovi-barbara-duraes.com.br/bairro/${bairro.slug}`;

  const breadcrumbItems = [
    { name: 'Início', url: 'https://loovi-barbara-duraes.com.br/' },
    { name: 'Bairros de Curitiba', url: 'https://loovi-barbara-duraes.com.br/bairros-curitiba' },
    { name: bairro.name, url: canonicalUrl }
  ];

  const whatsappMessage = encodeURIComponent(`Olá Bárbara! Vi a página da Loovi do bairro ${bairro.name} e gostaria de fazer uma cotação sem compromisso para meu carro.`);
  const whatsappLink = `https://wa.me/${CONSULTANT_INFO.whatsappRaw}?text=${whatsappMessage}`;

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-24 pb-16">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`seguro auto ${bairro.name}, seguro de carro ${bairro.name} curitiba, loovi seguro ${bairro.name}, guincho 24h ${bairro.name}, cotar seguro ${bairro.name}`} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">{JSON.stringify(getInsuranceAgencySchema(canonicalUrl, pageTitle, pageDescription))}</script>
        <script type="application/ld+json">{JSON.stringify(getBreadcrumbSchema(breadcrumbItems))}</script>
        <script type="application/ld+json">{JSON.stringify(getFaqSchema(bairro.faqs))}</script>
        <script type="application/ld+json">{JSON.stringify(getServiceSchema(`Seguro Auto Loovi em ${bairro.name}`, pageDescription, `${bairro.name}, Curitiba - PR`))}</script>
      </Helmet>

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs sm:text-sm text-slate-600 flex items-center gap-2 flex-wrap">
        <button onClick={() => onNavigate('/')} className="hover:text-[#6D2DBF] font-medium transition-colors">Início</button>
        <span>/</span>
        <button onClick={() => onNavigate('/bairros-curitiba')} className="hover:text-[#6D2DBF] font-medium transition-colors">Bairros de Curitiba</button>
        <span>/</span>
        <span className="text-[#6D2DBF] font-bold">{bairro.name}</span>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="bg-gradient-to-br from-purple-900 via-[#481773] to-[#6D2DBF] border border-purple-200 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-xl text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2ED9A0] text-slate-950 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            <MapPin className="w-3.5 h-3.5" />
            <span>Zona {bairro.zone} de Curitiba • Atendimento Local</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-sora text-white tracking-tight leading-tight mb-4">
            Seguro Auto Loovi em <span className="text-[#2ED9A0]">{bairro.name}</span>
          </h1>

          <p className="text-slate-100 text-base sm:text-xl leading-relaxed max-w-3xl mb-8 font-medium">
            {bairro.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 mb-8">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-3">
              <Clock className="w-8 h-8 text-[#2ED9A0] shrink-0" />
              <div>
                <span className="text-xs text-slate-200 block font-medium">Atendimento Guincho</span>
                <span className="text-sm font-bold text-white">~{bairro.avgArrivalMinutes} min no {bairro.name}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[#2ED9A0] shrink-0" />
              <div>
                <span className="text-xs text-slate-200 block font-medium">Indenização FIPE</span>
                <span className="text-sm font-bold text-white">100% da Tabela FIPE</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-3">
              <Car className="w-8 h-8 text-[#2ED9A0] shrink-0" />
              <div>
                <span className="text-xs text-slate-200 block font-medium">Perfil do Condutor</span>
                <span className="text-sm font-bold text-white">Sem Análise de Perfil</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-[#2ED9A0] hover:bg-[#25B886] text-slate-950 font-extrabold text-base transition-all transform hover:-translate-y-0.5 shadow-md flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Cotar via WhatsApp em {bairro.name}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Context Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold font-sora text-slate-900 mb-4 flex items-center gap-3">
              <Navigation className="w-6 h-6 text-[#00875A]" />
              Vias e Pontos de Referência Atendidos no {bairro.name}
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6 font-medium">
              Nossa equipe credenciada de reboque, chaveiro, pane elétrica e recarga de bateria atende rapidamente todas as avenidas e ruas do bairro {bairro.name}, com cobertura total para residências, condomínios e comércios locais.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xs font-extrabold uppercase text-[#00875A] tracking-wider mb-3">Principais Avenidas & Vias</h3>
                <ul className="space-y-2">
                  {bairro.mainAvenues.map((av, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-800 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#00875A] shrink-0" />
                      <span>{av}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-extrabold uppercase text-[#6D2DBF] tracking-wider mb-3">Pontos de Referência</h3>
                <ul className="space-y-2">
                  {bairro.landmarks.map((lm, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-800 font-medium">
                      <MapPin className="w-4 h-4 text-[#6D2DBF] shrink-0" />
                      <span>{lm}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Local Advantages */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold font-sora text-slate-900 mb-6">
              Por que contratar o Seguro Loovi no bairro {bairro.name}?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 text-base mb-1">Sem Bloqueio de Cartão</h3>
                <p className="text-xs text-slate-600">Pagamento mensal recorrente direto no cartão sem prender seu limite total.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 text-base mb-1">100% FIPE para Uber e 99</h3>
                <p className="text-xs text-slate-600">Garantia total para quem trabalha com aplicativo no {bairro.name}.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 text-base mb-1">Carros a partir de 1986</h3>
                <p className="text-xs text-slate-600">Aceitação para carros seminovos, antigos, com leilão e rebaixados.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 text-base mb-1">Danos a Terceiros até R$ 100 mil</h3>
                <p className="text-xs text-slate-600">Tranquilidade no trânsito caso haja colisão com outros automóveis.</p>
              </div>
            </div>
          </div>

          {/* Local FAQs */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-2xl font-bold font-sora text-slate-900 mb-6 flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-[#6D2DBF]" />
              Perguntas Frequentes sobre o Seguro Loovi no {bairro.name}
            </h2>
            <div className="space-y-4">
              {bairro.faqs.map((faq, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2">{faq.q}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#6D2DBF] to-[#481773] p-6 rounded-3xl border border-purple-200 text-white shadow-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2ED9A0] block mb-2">Atendimento Direto</span>
            <h3 className="text-xl font-extrabold font-sora mb-2">{CONSULTANT_INFO.name}</h3>
            <p className="text-xs text-slate-200 mb-6">{CONSULTANT_INFO.role} em Curitiba</p>

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
              className="w-full py-3.5 rounded-xl bg-[#2ED9A0] text-slate-950 font-extrabold text-sm text-center flex items-center justify-center gap-2 hover:bg-[#25B886] transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Simular Agora no WhatsApp</span>
            </a>
          </div>

          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 text-base mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#00875A]" />
              <span>Outros Bairros Próximos</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => onNavigate('/bairro/agua-verde')} className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-200 transition-all">Água Verde</button>
              <button onClick={() => onNavigate('/bairro/batel')} className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-200 transition-all">Batel</button>
              <button onClick={() => onNavigate('/bairro/portao')} className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-200 transition-all">Portão</button>
              <button onClick={() => onNavigate('/bairro/cabral')} className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-200 transition-all">Cabral</button>
              <button onClick={() => onNavigate('/bairro/cidade-industrial-cic')} className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-200 transition-all">CIC</button>
              <button onClick={() => onNavigate('/bairros-curitiba')} className="px-3 py-1.5 rounded-xl bg-[#2ED9A0]/20 text-[#00875A] font-bold text-xs hover:bg-[#2ED9A0]/30 transition-all">Ver Todos (75 Bairros) →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase de Imagens da Home */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HomeImagesShowcase
          title={`Galeria de Imagens e Coberturas no Bairro ${bairro.name}`}
          subtitle={`Veja como a Loovi protege seu carro com assistência 24h, rastreador e indenização integral em ${bairro.name}.`}
        />
      </div>

      {/* Interactive Quiz / Cotacao */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuizCotacao />
        </div>
      </section>
    </div>
  );
};
