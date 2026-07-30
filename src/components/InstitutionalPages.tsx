import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CONSULTANT_INFO, LOOVI_CHANNELS, COVERAGES, FAQ_ITEMS, OFFICIAL_ADHESION_LINK } from '../constants';
import { ShieldCheck, Phone, Mail, MapPin, CheckCircle2, MessageCircle, HelpCircle, FileText, ArrowRight } from 'lucide-react';
import { QuizCotacao } from './QuizCotacao';
import { HomeImagesShowcase } from './HomeImagesShowcase';

interface Props {
  pageType: 'sobre' | 'faq' | 'coberturas' | 'seguro-app-uber' | 'privacidade' | 'termos';
  onNavigate: (path: string) => void;
}

export const InstitutionalPages: React.FC<Props> = ({ pageType, onNavigate }) => {
  const whatsappMessage = encodeURIComponent(`Olá Bárbara! Vim do seu site oficial e gostaria de fazer uma cotação para o meu veículo.`);
  const whatsappLink = `https://wa.me/${CONSULTANT_INFO.whatsappRaw}?text=${whatsappMessage}`;

  if (pageType === 'sobre') {
    return (
      <div className="bg-white text-slate-900 min-h-screen pt-24 pb-16">
        <Helmet>
          <title>Quem Somos | Barbara Duraes Consultora Autorizada Loovi Curitiba</title>
          <meta name="description" content="Conheça a trajetória de Bárbara Durães, consultora autorizada Loovi Seguro Auto em Curitiba, com atendimento 100% online, transparente e humanizado." />
          <link rel="canonical" href="https://loovi-barbara-duraes.com.br/sobre" />
        </Helmet>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="px-3 py-1 rounded-full bg-[#2ED9A0]/20 text-[#00875A] text-xs font-bold uppercase tracking-wider inline-block mb-3 border border-[#2ED9A0]/40">
                Atendimento Oficial em Curitiba e RMC
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold font-sora tracking-tight text-slate-900 mb-4">
                Executiva <span className="text-[#6D2DBF]">Bárbara Durães</span>
              </h1>
              <p className="text-slate-600 font-medium text-sm sm:text-base">
                {CONSULTANT_INFO.role} • CNPJ {CONSULTANT_INFO.cnpj}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base font-medium">
                <p>
                  Atuando como consultora autorizada da **Loovi Seguro Auto** no Estado do Paraná, tenho o compromisso de levar proteção veicular democrática, justa e desburocratizada para motoristas de Curitiba, Região Metropolitana e todo o Brasil.
                </p>
                <p>
                  Acredito que proteger seu patrimônio não deve exigir burocracia excessiva ou parcelas que comprometem o limite do seu cartão de crédito. Com a Loovi, você conta com tecnologia de ponta, 100% da Tabela FIPE e atendimento humanizado do primeiro contato até o acionamento de sinistros.
                </p>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <MapPin className="w-4 h-4 text-[#00875A]" />
                    <span>Endereço em Curitiba:</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium">{CONSULTANT_INFO.address}</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#6D2DBF] to-[#481773] p-6 sm:p-8 rounded-3xl border border-purple-200 text-white space-y-4 shadow-xl">
                <h2 className="text-2xl font-extrabold font-sora">Canais de Contato Direto</h2>
                <div className="space-y-3">
                  <a href={`tel:+${CONSULTANT_INFO.phone1Raw}`} className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all font-bold text-sm">
                    <Phone className="w-4 h-4 text-[#2ED9A0]" />
                    <span>Ligação: {CONSULTANT_INFO.phone1} (PR)</span>
                  </a>
                  <a href={`tel:+${CONSULTANT_INFO.phone2Raw}`} className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all font-bold text-sm">
                    <Phone className="w-4 h-4 text-[#2ED9A0]" />
                    <span>Ligação: {CONSULTANT_INFO.phone2} (MG)</span>
                  </a>
                  <a href={`mailto:${CONSULTANT_INFO.email}`} className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all font-bold text-sm">
                    <Mail className="w-4 h-4 text-[#2ED9A0]" />
                    <span>{CONSULTANT_INFO.email}</span>
                  </a>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-2xl bg-[#2ED9A0] text-slate-950 font-extrabold text-base text-center flex items-center justify-center gap-2 hover:bg-[#25B886] transition-all shadow-md"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Falar no WhatsApp com a Bárbara</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (pageType === 'faq') {
    return (
      <div className="bg-white text-slate-900 min-h-screen pt-24 pb-16">
        <Helmet>
          <title>Perguntas Frequentes (FAQ) | Seguro Loovi Curitiba</title>
          <meta name="description" content="Tire todas as suas dúvidas sobre o Seguro Auto Loovi em Curitiba: vigência, SUSEP, rastreador, franquia, sinistros e cancelamento." />
          <link rel="canonical" href="https://loovi-barbara-duraes.com.br/faq" />
        </Helmet>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="text-center mb-10">
            <span className="px-3 py-1 rounded-full bg-[#6D2DBF]/10 text-[#6D2DBF] text-xs font-bold uppercase tracking-wider inline-block mb-3 border border-[#6D2DBF]/30">
              Tire Suas Dúvidas
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-sora text-slate-900 mb-4">
              Perguntas Frequentes <span className="text-[#6D2DBF]">(FAQ)</span>
            </h1>
            <p className="text-slate-600 text-base font-medium">Tudo o que você precisa saber antes de contratar seu Seguro Loovi.</p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900 font-sora mb-2 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#00875A] shrink-0 mt-0.5" />
                  <span>{item.q}</span>
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed pl-8 font-medium">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Ficou com alguma dúvida específica?</h3>
            <p className="text-sm text-slate-600 mb-6 font-medium">Fale diretamente com a executiva Bárbara Durães pelo WhatsApp.</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#2ED9A0] text-slate-950 font-extrabold text-sm hover:bg-[#25B886] transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </section>
      </div>
    );
  }

  if (pageType === 'coberturas') {
    return (
      <div className="bg-white text-slate-900 min-h-screen pt-24 pb-16">
        <Helmet>
          <title>Coberturas Completas | Seguro Auto Loovi Curitiba</title>
          <meta name="description" content="Tabela detalhada de coberturas do Seguro Auto Loovi: colisão, furto, roubo, danos a terceiros até R$ 100.000, vidros e faróis, guincho 24h e carro reserva." />
          <link rel="canonical" href="https://loovi-barbara-duraes.com.br/coberturas" />
        </Helmet>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="px-3 py-1 rounded-full bg-[#2ED9A0]/20 text-[#00875A] text-xs font-bold uppercase tracking-wider inline-block mb-3 border border-[#2ED9A0]/40">
              Proteção Total Regulamentada
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-sora text-slate-900 mb-4">
              Coberturas do <span className="text-[#6D2DBF]">Seguro Loovi</span>
            </h1>
            <p className="text-slate-600 text-base font-medium">Tudo o que seu veículo precisa para circular com segurança em Curitiba e todo o Brasil.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {COVERAGES.map(cov => (
              <div key={cov.id} className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#2ED9A0]/20 border border-[#2ED9A0]/40 flex items-center justify-center text-[#00875A]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 font-sora">{cov.title}</h2>
                </div>
                <p className="text-xs font-bold text-[#00875A]">{cov.summary}</p>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">{cov.details}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#6D2DBF] to-[#481773] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-extrabold font-sora mb-2">Simule o Plano Ideal para seu Carro</h2>
              <p className="text-sm text-slate-100 font-medium">Valores a partir de R$ 98,56/mês com parcelamento no cartão que não bloqueia seu limite.</p>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-[#2ED9A0] text-slate-950 font-extrabold text-base whitespace-nowrap hover:bg-[#25B886] transition-all shadow-md"
            >
              Simular pelo WhatsApp
            </a>
          </div>

          <HomeImagesShowcase
            title="Galeria das Coberturas Loovi"
            subtitle="Confira detalhadamente cada item de cobertura com fotos reais dos sinistros e benefícios atendidos."
          />
        </section>
      </div>
    );
  }

  if (pageType === 'seguro-app-uber') {
    return (
      <div className="bg-white text-slate-900 min-h-screen pt-24 pb-16">
        <Helmet>
          <title>Seguro Auto para Uber, 99 e Aplicativos em Curitiba | Loovi</title>
          <meta name="description" content="Seguro especial para motoristas de aplicativo (Uber, 99, Indrive e Táxi) em Curitiba. 100% da Tabela FIPE, sem análise de perfil e com carro reserva." />
          <link rel="canonical" href="https://loovi-barbara-duraes.com.br/seguro-app-uber" />
        </Helmet>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="bg-gradient-to-br from-purple-900 via-[#481773] to-[#6D2DBF] border border-purple-200 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8 text-white">
            <div className="text-center max-w-3xl mx-auto">
              <span className="px-3.5 py-1.5 rounded-full bg-[#2ED9A0] text-slate-950 text-xs font-bold uppercase tracking-wider inline-block mb-4 shadow-sm">
                Especial para Motoristas de Aplicativo (Uber / 99 / Táxi)
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold font-sora text-white mb-4">
                Seguro para Uber em Curitiba com <span className="text-[#2ED9A0]">100% da FIPE</span>
              </h1>
              <p className="text-slate-100 text-base sm:text-lg font-medium">
                Não fique desprotegido durante o trabalho. A Loovi garante o valor integral do seu carro sem pegadinhas nem descontos por uso comercial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 space-y-2">
                <h3 className="text-lg font-bold text-[#2ED9A0] font-sora">100% Tabela FIPE</h3>
                <p className="text-xs text-slate-200 font-medium">Garantia total para perda total, roubo ou furto sem descontos para motoristas Uber e 99.</p>
              </div>

              <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 space-y-2">
                <h3 className="text-lg font-bold text-[#2ED9A0] font-sora">Sem Análise de Idade</h3>
                <p className="text-xs text-slate-200 font-medium">Não importa a sua idade ou o seu histórico. Aceitação democrática imediata.</p>
              </div>

              <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 space-y-2">
                <h3 className="text-lg font-bold text-[#2ED9A0] font-sora">Carro Reserva</h3>
                <p className="text-xs text-slate-200 font-medium">Opção de carro reserva de 7 ou 15 dias para você não interromper seus ganhos diários.</p>
              </div>
            </div>

            <div className="text-center pt-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#2ED9A0] text-slate-950 font-extrabold text-base hover:bg-[#25B886] transition-all shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Simular Seguro para Uber com Bárbara Durães</span>
              </a>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <HomeImagesShowcase
            title="Galeria da Proteção Loovi para Uber e 99"
            subtitle="Conheça a estrutura de socorro e garantias de 100% da Tabela FIPE para motoristas parceiros."
          />
          <QuizCotacao />
        </section>
      </div>
    );
  }

  if (pageType === 'privacidade') {
    return (
      <div className="bg-white text-slate-900 min-h-screen pt-24 pb-16">
        <Helmet>
          <title>Política de Privacidade e LGPD | Consultora Loovi Curitiba</title>
          <meta name="description" content="Política de privacidade e proteção de dados pessoais (LGPD) da consultora autorizada Bárbara Durães." />
          <link rel="canonical" href="https://loovi-barbara-duraes.com.br/privacidade" />
        </Helmet>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6 text-slate-700 font-medium">
            <h1 className="text-3xl font-extrabold text-slate-900 font-sora mb-4">Política de Privacidade & LGPD</h1>
            <p className="text-sm leading-relaxed">
              Esta política explica como os dados fornecidos no site da consultora autorizada **Bárbara Hanna Alves Durães** (CNPJ 40.404.570/0001-61) são tratados com total segurança em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>

            <h2 className="text-xl font-bold text-slate-900 font-sora pt-2">1. Coleta de Informações</h2>
            <p className="text-sm leading-relaxed">
              Coletamos apenas dados fornecidos voluntariamente pelo usuário (nome, telefone, modelo do veículo e e-mail) com a finalidade exclusiva de realizar simulações e apresentar propostas do Seguro Loovi.
            </p>

            <h2 className="text-xl font-bold text-slate-900 font-sora pt-2">2. Uso e Compartilhamento de Dados</h2>
            <p className="text-sm leading-relaxed">
              Seus dados não são vendidos ou repassados a terceiros não autorizados. Eles são utilizados estritamente pela consultora Bárbara Durães e pela plataforma oficial da Loovi (CW Technology Ltda) para emissão de cotações e formalização de propostas de seguro.
            </p>

            <h2 className="text-xl font-bold text-slate-900 font-sora pt-2">3. Seus Direitos</h2>
            <p className="text-sm leading-relaxed">
              Você pode solicitar a exclusão ou alteração das suas informações pessoais a qualquer momento enviando um e-mail para **{CONSULTANT_INFO.email}** ou mensagem para o WhatsApp **{CONSULTANT_INFO.whatsapp}**.
            </p>
          </div>
        </section>
      </div>
    );
  }

  // Termos
  return (
    <div className="bg-white text-slate-900 min-h-screen pt-24 pb-16">
      <Helmet>
        <title>Termos de Uso | Consultora Loovi Curitiba</title>
        <meta name="description" content="Termos e condições de uso do site de divulgação da consultora autorizada Bárbara Durães." />
        <link rel="canonical" href="https://loovi-barbara-duraes.com.br/termos" />
      </Helmet>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6 text-slate-700 font-medium">
          <h1 className="text-3xl font-extrabold text-slate-900 font-sora mb-4">Termos de Uso</h1>
          <p className="text-sm leading-relaxed">
            Ao navegar neste site, você concorda com os termos e condições descritos a seguir.
          </p>

          <h2 className="text-xl font-bold text-slate-900 font-sora pt-2">1. Natureza da Página</h2>
          <p className="text-sm leading-relaxed">
            Este site é um canal independente de divulgação mantido pela executiva e consultora autorizada **Bárbara Hanna Alves Durães** (CNPJ 40.404.570/0001-61) e não constitui o site institucional direto da matriz da Loovi.
          </p>

          <h2 className="text-xl font-bold text-slate-900 font-sora pt-2">2. Vínculo Regulatório</h2>
          <p className="text-sm leading-relaxed">
            A Loovi (CW Technology Ltda) é representante oficial da **LTI Seguros S.A.** (CNPJ 47.006.254/0001-80), participante aprovada do Sandbox Regulatório da SUSEP (Processo nº 15414.649321/2021-55). Todas as condições do contrato, franquias e prazos devem ser consultados nas Condições Gerais vigentes antes da contratação.
          </p>
        </div>
      </section>
    </div>
  );
};
