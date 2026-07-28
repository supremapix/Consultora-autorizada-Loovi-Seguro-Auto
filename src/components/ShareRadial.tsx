import React, { useState, useEffect } from 'react';
import { Share2, X, Check, Copy, RefreshCw, Sparkles, ExternalLink } from 'lucide-react';

// 24 Semantic & Descriptive Texts for Social Sharing
const DESCRIPTIVE_TEXTS = [
  "🚗 Proteja seu carro sem burocracia! A Loovi oferece até 100% da Tabela FIPE sem análise de perfil do condutor nem consulta ao SPC/Serasa. Fale com a executiva Bárbara Durães e faça sua cotação!",
  "⚡ Seguro Auto moderno e 100% digital! Proteção contra roubo, furto, colisão e terceiros com atendimento 24h em todo o Brasil. Fale com a executiva Bárbara Durães hoje mesmo.",
  "🚨 Teve perda total? A Loovi garante indenização de até 100% da Tabela FIPE no seu bolso sem surpresas nem enrolação. Faça uma simulação rápida com Bárbara Durães!",
  "🛠️ Guincho 24h + Hotel em todo o Brasil! Fique protegido contra panes e acidentes em qualquer estrada. Cotação imediata com a executiva Loovi Bárbara Durães.",
  "💥 Proteção completa contra danos a terceiros de até R$ 100.000! Não corra o risco de pagar prejuízos do próprio bolso. Fale com Bárbara Durães no WhatsApp!",
  "🚗 Vantagem exclusiva Loovi: Qualquer pessoa habilitada pode dirigir o seu carro e continuar 100% protegida! Sem análise de perfil. Fale com a executiva Bárbara Durães.",
  "📱 Contratação em 3 minutos no celular! O seguro auto mais acessível e descomplicado do mercado. Solicite sua simulação sem compromisso com Bárbara Durães.",
  "🚘 Precisou de carro reserva? A Loovi te garante veículo substituto por 7 ou 15 dias após imprevistos. Não pare sua rotina! Cotação com Bárbara Durães.",
  "🔎 Proteção contra trincas em para-brisas, faróis, lanternas e retrovisores. Reposição rápida e sem dor de cabeça com a Loovi. Fale com a executiva Bárbara Durães!",
  "🛡️ Seguro veicular completo com tecnologia de ponta para seu automóvel! Economize até 50% comparado aos seguros tradicionais. Fale com Bárbara Durães.",
  "🔑 Chaveiro, troca de pneu, socorro mecânico e elétrico 24 horas por dia em todo o Brasil. Dirija tranquilo com a Loovi e a executiva Bárbara Durães!",
  "⭐ Aprovado por milhares de motoristas em todo o país! Seguro Loovi com a consultoria personalizada de Bárbara Durães. Faça sua cotação gratuita no WhatsApp!",
  "🚙 Uber, táxi ou motorista de aplicativo? Proteja seu instrumento de trabalho com a Loovi sem restrição de idade ou perfil! Cotação com Bárbara Durães.",
  "💰 O seguro auto mais barato do Brasil sem abrir mão da qualidade. 100% FIPE, assistência 24h e 0800 nacional. Fale agora com a executiva Bárbara Durães!",
  "⚡ Sem burocracia, sem papelada e com aprovação imediata. Descubra quanto custa proteger seu carro hoje com a executiva Loovi Bárbara Durães.",
  "🚨 Proteção contra fenômenos da natureza, enchentes, granizo e acidentes graves. Garanta a segurança da sua família com a Loovi e Bárbara Durães!",
  "📲 Faça uma cotação em menos de 1 minuto diretamente no WhatsApp com a executiva autorizada Bárbara Durães. Sem compromisso!",
  "🚗 Quer economizar no seguro sem perder a cobertura de 100% da Tabela FIPE? Mude para a Loovi com suporte exclusivo de Bárbara Durães!",
  "🔧 Assistência 24h nacional com canal 0800 exclusivo e socorro em todo o território brasileiro. Fale com a consultora Bárbara Durães!",
  "🚘 Carro novo ou seminovo? A Loovi protege veículos de qualquer ano ou modelo sem pegadinhas. Fale com a executiva Bárbara Durães!",
  "💼 Proteção veicular com contratação simplificada e atendimento humanizado. Fale diretamente com a executiva Bárbara Durães no WhatsApp.",
  "🌟 Cobertura nacional completa: furtos, roubos, colisões e terceiros. A tranquilidade que você precisa no trânsito com a Loovi e Bárbara Durães!",
  "🚀 Não deixe seu patrimônio desprotegido. O prejuízo de um acidente pode custar milhares de reais. Cote agora com a executiva Bárbara Durães!",
  "✨ Seguro Auto descomplicado e seguro. Faça sua simulação agora mesmo com a executiva verificada Bárbara Durães e rode protegido!"
];

// Site images that alternate
const SHARE_IMAGES = [
  "https://img.supremasite.com.br/loovi.webp",
  "https://img.supremasite.com.br/perda-total-100fipe.webp",
  "https://img.supremasite.com.br/guincho+hotel.webp",
  "https://img.supremasite.com.br/vidros-farois.webp",
  "https://img.supremasite.com.br/carro-reserva.webp",
  "https://img.supremasite.com.br/danos-a-terceiros.webp"
];

export function ShareRadial() {
  const [isOpen, setIsOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://loovi.com.br';
  const activeText = DESCRIPTIVE_TEXTS[textIndex];
  const activeImage = SHARE_IMAGES[imageIndex];

  // Rotate text & image every 5 seconds without repeating
  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % DESCRIPTIVE_TEXTS.length);
      setImageIndex((prev) => (prev + 1) % SHARE_IMAGES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleNextVariation = () => {
    setTextIndex((prev) => (prev + 1) % DESCRIPTIVE_TEXTS.length);
    setImageIndex((prev) => (prev + 1) % SHARE_IMAGES.length);
  };

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg('');
    }, 4000);
  };

  const handleCopyFullText = () => {
    const fullShareString = `${activeText}\n\n📷 Imagem: ${activeImage}\n🔗 Faça sua cotação: ${currentUrl}`;
    navigator.clipboard.writeText(fullShareString);
    showToast('Texto descritivo + Imagem + Link copiados com sucesso!');
  };

  const openShareWindow = (url: string) => {
    window.open(url, '_blank', 'width=600,height=500,location=no,toolbar=no');
  };

  const NETWORKS = [
    {
      name: 'WhatsApp',
      color: 'bg-[#25D366] hover:bg-[#20bd5a]',
      action: () =>
        openShareWindow(
          `https://api.whatsapp.com/send?text=${encodeURIComponent(`${activeText}\n\n${currentUrl}`)}`
        ),
    },
    {
      name: 'Facebook',
      color: 'bg-[#1877F2] hover:bg-[#1565cb]',
      action: () =>
        openShareWindow(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}&quote=${encodeURIComponent(activeText)}`),
    },
    {
      name: 'Twitter / X',
      color: 'bg-[#000000] hover:bg-[#111111]',
      action: () =>
        openShareWindow(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(activeText)}&url=${encodeURIComponent(currentUrl)}`
        ),
    },
    {
      name: 'LinkedIn',
      color: 'bg-[#0A66C2] hover:bg-[#084e96]',
      action: () =>
        openShareWindow(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`),
    },
    {
      name: 'Threads',
      color: 'bg-[#000000] hover:bg-[#222222]',
      action: () =>
        openShareWindow(
          `https://www.threads.net/intent/post?text=${encodeURIComponent(`${activeText} ${currentUrl}`)}`
        ),
    },
    {
      name: 'Pinterest',
      color: 'bg-[#E60023] hover:bg-[#be001d]',
      action: () =>
        openShareWindow(
          `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(currentUrl)}&media=${encodeURIComponent(activeImage)}&description=${encodeURIComponent(activeText)}`
        ),
    },
  ];

  return (
    <>
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[300] px-6 py-3 rounded-2xl bg-[#481773] border-2 border-[#2ED9A0] text-white text-sm font-extrabold shadow-2xl flex items-center gap-2 animate-fadeIn">
          <Check className="w-5 h-5 text-[#2ED9A0]" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Floating Share Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[250] bg-black/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-[#3F1568] border-2 border-[#8A4DE8] rounded-3xl p-6 max-w-lg w-full text-white shadow-2xl relative my-auto space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/15">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#2ED9A0]" />
                <h3 className="font-sora font-extrabold text-lg text-white">
                  Central de Compartilhamento
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full bg-black/40 hover:bg-[#6D2DBF] text-white transition-all"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Rotating Post Live Preview */}
            <div className="bg-[#481773] border border-[#8A4DE8]/40 rounded-2xl p-4 space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#00E5FF] bg-[#00E5FF]/10 px-3 py-1 rounded-full border border-[#00E5FF]/30">
                  Variação #{textIndex + 1} de {DESCRIPTIVE_TEXTS.length} (Muda a cada 5s)
                </span>
                <button
                  onClick={handleNextVariation}
                  className="flex items-center gap-1 text-xs font-bold text-white bg-[#6D2DBF] hover:bg-[#8A4DE8] px-3 py-1 rounded-full transition-all"
                  title="Trocar para o próximo texto/imagem"
                >
                  <RefreshCw className="w-3.5 h-3.5 animate-spin-slow" />
                  <span>Próxima</span>
                </button>
              </div>

              {/* Active Image Thumbnail */}
              <div className="w-full h-40 bg-black/40 rounded-xl overflow-hidden relative border border-white/10">
                <img
                  src={activeImage}
                  alt="Pré-visualização da imagem de compartilhamento"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Active Text Description */}
              <p className="text-sm font-medium text-slate-100 leading-relaxed bg-black/20 p-3 rounded-xl border border-white/5">
                {activeText}
              </p>

              {/* Copy Full Text + Link Button */}
              <button
                onClick={handleCopyFullText}
                className="w-full py-3 px-4 rounded-xl bg-[#2ED9A0] hover:bg-[#25b886] text-[#0B0B18] font-sora font-extrabold text-sm transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <Copy className="w-4 h-4" />
                <span>Copiar Texto + Imagem + Link</span>
              </button>
            </div>

            {/* Direct Social Networks Grid */}
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase text-slate-300 block">
                Postar Direto nas Redes:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {NETWORKS.map((net) => (
                  <button
                    key={net.name}
                    onClick={net.action}
                    className={`py-3 px-3 rounded-xl text-white font-sora font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md hover:scale-105 ${net.color}`}
                  >
                    <span>{net.name}</span>
                    <Share2 className="w-3.5 h-3.5" />
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center pt-1 border-t border-white/10">
              <button
                onClick={handleCopyFullText}
                className="text-xs text-slate-300 hover:text-white flex items-center justify-center gap-1.5 mx-auto"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#2ED9A0]" />
                <span>Pronto para copiar e colar em qualquer rede social ou grupo</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="fixed bottom-6 left-6 z-[200]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 rounded-full bg-[#6D2DBF] hover:bg-[#8A4DE8] border-2 border-[#2ED9A0] text-white shadow-2xl hover:scale-110 transition-all focus:outline-none focus:ring-4 focus:ring-[#2ED9A0]/50 flex items-center gap-2"
          aria-label="Abrir central de compartilhamento"
          title="Compartilhar nas Redes Sociais"
        >
          <Share2 className="w-6 h-6 text-[#2ED9A0]" />
          <span className="hidden sm:inline text-xs font-extrabold text-white pr-1">
            Compartilhar
          </span>
        </button>
      </div>
    </>
  );
}

