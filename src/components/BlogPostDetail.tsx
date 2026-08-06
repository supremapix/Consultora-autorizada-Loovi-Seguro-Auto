import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BlogPost } from '../data/blogData';
import { CONSULTANT_INFO } from '../constants';
import { getArticleSchema, getBreadcrumbSchema } from '../data/seoSchemas';
import { Clock, UserCheck, Calendar, ArrowLeft, MessageCircle, ArrowRight } from 'lucide-react';
import { HomeImagesShowcase } from './HomeImagesShowcase';

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
    <div className="bg-white text-slate-900 min-h-screen pt-24 pb-16">
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs sm:text-sm text-slate-600 flex items-center gap-2">
        <button onClick={() => onNavigate('/blog')} className="hover:text-[#6D2DBF] font-medium transition-colors flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao Blog</span>
        </button>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          <div>
            <span className="px-3 py-1 rounded-full bg-[#6D2DBF]/10 text-[#6D2DBF] text-xs font-bold uppercase inline-block mb-4 border border-[#6D2DBF]/20">
              {post.category}
            </span>

            <h1 className="text-2xl sm:text-4xl font-extrabold font-sora text-slate-900 tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600 border-b border-slate-200 pb-6">
              <span className="flex items-center gap-1.5 text-slate-900 font-semibold">
                <UserCheck className="w-4 h-4 text-[#00875A]" />
                {post.author} (Executiva Loovi Curitiba)
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#6D2DBF]" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#00875A]" />
                {post.readTime}
              </span>
            </div>
          </div>

          <div className="prose max-w-none text-slate-700 space-y-6 leading-relaxed text-base sm:text-lg font-normal">
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('# ')) {
                return <h1 key={idx} className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-sora pt-4 mb-2">{paragraph.replace('# ', '')}</h1>;
              }
              if (paragraph.startsWith('## ')) {
                return <h2 key={idx} className="text-xl sm:text-2xl font-bold text-[#6D2DBF] font-sora pt-4 mb-2">{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('### ')) {
                return <h3 key={idx} className="text-lg font-bold text-slate-900 font-sora pt-2 mb-1">{paragraph.replace('### ', '')}</h3>;
              }
              if (paragraph.startsWith('> ')) {
                return <blockquote key={idx} className="border-l-4 border-[#00875A] pl-4 py-2 italic text-slate-800 bg-white rounded-r-xl border border-slate-200 shadow-sm">{paragraph.replace('> ', '')}</blockquote>;
              }
              return <p key={idx}>{paragraph}</p>;
            })}
          </div>

          {/* CTA Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#6D2DBF] to-[#481773] border border-purple-200 text-white shadow-xl mt-8">
            <h3 className="text-2xl font-extrabold font-sora mb-3">Gostou das dicas e quer simular para seu carro?</h3>
            <p className="text-sm text-slate-100 mb-6 font-medium">
              Fale com a consultora autorizada Bárbara Durães e receba sua proposta personalizada para Curitiba ou Região Metropolitana sem compromisso em menos de 3 minutos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-[#2ED9A0] text-slate-950 font-extrabold text-sm text-center flex items-center justify-center gap-2 hover:bg-[#25B886] transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Cotar Agora no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Home Images Showcase */}
        <div className="mt-8">
          <HomeImagesShowcase
            title="Conheça a Proteção Loovi em Imagens"
            subtitle="Veja as coberturas 100% FIPE, socorro guincho e serviços inclusos na sua assinatura Loovi."
          />
        </div>
      </article>
    </div>
  );
};
