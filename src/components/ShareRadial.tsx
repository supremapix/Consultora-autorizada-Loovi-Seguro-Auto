import { useState } from 'react';
import { Share2, X, Check, Copy } from 'lucide-react';

export function ShareRadial() {
  const [isOpen, setIsOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const shareTitle = "Seguro Auto Loovi em Curitiba | Consultora Barbara Duraes";
  const shareText = "Confira o seguro auto digital sem análise de perfil e com 100% FIPE!";
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://loovi.com.br';
  const heroImage = "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80";

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: currentUrl,
        });
        return true;
      } catch {
        // Fallback to menu if user cancels or native share fails
        return false;
      }
    }
    return false;
  };

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg('');
    }, 4000);
  };

  const handleShareClick = async () => {
    if (window.innerWidth < 768 && navigator.share) {
      const shared = await handleNativeShare();
      if (shared) return;
    }
    setIsOpen(!isOpen);
  };

  const openShareWindow = (url: string) => {
    window.open(url, '_blank', 'width=600,height=500,location=no,toolbar=no');
    setIsOpen(false);
  };

  const handleInstagramShare = () => {
    navigator.clipboard.writeText(currentUrl);
    showToast('Link copiado. Cole no seu story ou na bio.');
    setIsOpen(false);
  };

  const NETWORKS = [
    {
      name: 'WhatsApp',
      color: 'bg-[#25D366] hover:bg-[#20bd5a]',
      action: () =>
        openShareWindow(
          `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText} ${currentUrl}`)}`
        ),
    },
    {
      name: 'Facebook',
      color: 'bg-[#1877F2] hover:bg-[#1565cb]',
      action: () =>
        openShareWindow(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`),
    },
    {
      name: 'Twitter / X',
      color: 'bg-[#000000] hover:bg-[#111111]',
      action: () =>
        openShareWindow(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`
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
          `https://www.threads.net/intent/post?text=${encodeURIComponent(`${shareText} ${currentUrl}`)}`
        ),
    },
    {
      name: 'Pinterest',
      color: 'bg-[#E60023] hover:bg-[#be001d]',
      action: () =>
        openShareWindow(
          `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(currentUrl)}&media=${encodeURIComponent(heroImage)}&description=${encodeURIComponent(shareText)}`
        ),
    },
    {
      name: 'Instagram',
      color: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]',
      action: handleInstagramShare,
    },
  ];

  return (
    <>
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-[#481773]/95 border border-[#2ED9A0] text-white text-xs font-semibold shadow-2xl flex items-center gap-2 animate-fadeIn">
          <Check className="w-4 h-4 text-[#2ED9A0]" />
          <span>{toastMsg}</span>
        </div>
      )}

      <div className="fixed bottom-6 left-6 z-50">
        {/* Expanded Radial Menu */}
        {isOpen && (
          <div className="absolute bottom-16 left-0 flex flex-col gap-2 p-3 rounded-2xl bg-[#481773]/95 backdrop-blur-xl border border-white/10 shadow-2xl min-w-[200px] animate-fadeIn">
            <span className="text-[10px] font-bold uppercase text-slate-400 px-2 py-1">
              Compartilhar página
            </span>
            {NETWORKS.map((net, idx) => (
              <button
                key={net.name}
                onClick={net.action}
                style={{ animationDelay: `${idx * 40}ms` }}
                className={`w-full px-3 py-2 rounded-xl text-white font-sora font-semibold text-xs text-left transition-all flex items-center justify-between ${net.color} animate-slideUp`}
                aria-label={`Compartilhar no ${net.name}`}
              >
                <span>{net.name}</span>
                {net.name === 'Instagram' ? (
                  <Copy className="w-3.5 h-3.5" />
                ) : (
                  <Share2 className="w-3.5 h-3.5" />
                )}
              </button>
            ))}
          </div>
        )}

        {/* Main Share Button */}
        <button
          onClick={handleShareClick}
          className="p-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white shadow-xl hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-[#6D2DBF]"
          aria-label="Compartilhar página nas redes sociais"
          title="Compartilhar"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Share2 className="w-6 h-6" />}
        </button>
      </div>
    </>
  );
}
