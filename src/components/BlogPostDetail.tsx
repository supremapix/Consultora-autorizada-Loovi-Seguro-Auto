import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BlogPost } from '../data/blogData';
import { CONSULTANT_INFO, OFFICIAL_ADHESION_LINK } from '../constants';
import { getArticleSchema, getBreadcrumbSchema } from '../data/seoSchemas';
import { Clock, UserCheck, Calendar, ArrowLeft, MessageCircle, ArrowRight } from 'lucide-react';

interface Props {
  post: BlogPost;
  onNavigate: (path: string) => void;
}

export const BlogPostDetail: React.FC<Props> = ({ post, onNavigate }) => {
  const pageTitle = `${post.title} | Blog Loovi Curitiba`;
  const pageDescription = post.summary;
  const canonicalUrl = `https://loovi-barbara-duraes.com.br/blog/${post.slug}`;

  const breadcrumbItems = [
    { name: 'Início', url: 'https://loovi-barbara-duraes.com.br/' },
    { name: 'Blog', url: 'https://loovi-barbara-duraes.com.br/blog' },
    { name: post.title, url: canonicalUrl }
  ];

  const whatsappMessage = encodeURIComponent(`Olá Bárbara! Li o artigo "${post.title}" no seu site e gostaria de fazer uma cotação para o meu carro.`);
  const whatsappLink = `https://wa.me/${CONSULTANT_INFO.whatsappRaw}?text=${whatsappMessage}`;

  return (
    <div className="bg-[#0B0D17] text-white min-h-screen pt-24 pb-16">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={post.keywords.join(', ')} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />

        <script type="application/ld+json">{JSON.stringify(getArticleSchema(post.title, post.summary, post.author, post.date, canonicalUrl))}</script>
        <script type="application/ld+json">{JSON.stringify(getBreadcrumbSchema(breadcrumbItems))}</script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs sm:text-sm text-slate-400 flex items-center gap-2">
        <button onClick={() => onNavigate('/blog')} className="hover:text-[#2ED9A0] transition-colors flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao Blog</span>
        </button>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[#131626] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          <div>
            <span className="px-3 py-1 rounded-full bg-[#8A4DE8]/20 text-[#8A4DE8] text-xs font-bold uppercase inline-block mb-4">
              {post.category}
            </span>

            <h1 className="text-2xl sm:text-4xl font-extrabold font-sora text-white tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 border-b border-white/10 pb-6">
              <span className="flex items-center gap-1.5 text-white font-semibold">
                <UserCheck className="w-4 h-4 text-[#2ED9A0]" />
                {post.author} (Executiva Loovi Curitiba)
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#8A4DE8]" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#2ED9A0]" />
                {post.readTime}
              </span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none text-slate-300 space-y-6 leading-relaxed text-base sm:text-lg">
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('# ')) {
                return <h1 key={idx} className="text-2xl sm:text-3xl font-extrabold text-white font-sora pt-4 mb-2">{paragraph.replace('# ', '')}</h1>;
              }
              if (paragraph.startsWith('## ')) {
                return <h2 key={idx} className="text-xl sm:text-2xl font-bold text-[#2ED9A0] font-sora pt-4 mb-2">{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('### ')) {
                return <h3 key={idx} className="text-lg font-bold text-white font-sora pt-2 mb-1">{paragraph.replace('### ', '')}</h3>;
              }
              if (paragraph.startsWith('> ')) {
                return <blockquote key={idx} className="border-l-4 border-[#2ED9A0] pl-4 py-2 italic text-slate-200 bg-white/5 rounded-r-xl">{paragraph.replace('> ', '')}</blockquote>;
              }
              return <p key={idx}>{paragraph}</p>;
            })}
          </div>

          {/* CTA Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#6D2DBF] to-[#3F1568] border border-white/20 text-white shadow-xl mt-8">
            <h3 className="text-2xl font-extrabold font-sora mb-3">Gostou das dicas e quer simular para seu carro?</h3>
            <p className="text-sm text-slate-200 mb-6">
              Fale com a consultora autorizada Bárbara Durães e receba sua proposta personalizada para Curitiba ou Região Metropolitana sem compromisso em menos de 3 minutos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-[#2ED9A0] text-[#0B0D17] font-extrabold text-sm text-center flex items-center justify-center gap-2 hover:bg-[#25B886] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Cotar Agora no WhatsApp</span>
              </a>

              <a
                href={OFFICIAL_ADHESION_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm text-center flex items-center justify-center gap-2 border border-white/20 transition-all"
              >
                <span>Contratar Direto Online</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
