import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BLOG_POSTS } from '../data/blogData';
import { BookOpen, Search, Clock, ArrowRight, UserCheck } from 'lucide-react';
import { HomeImagesShowcase } from './HomeImagesShowcase';

interface Props {
  onNavigate: (path: string) => void;
}

export const BlogHub: React.FC<Props> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const pageTitle = "Blog & Guia do Seguro Auto Loovi em Curitiba | Bárbara Durães";
  const pageDescription = "Artigos, comparativos e orientações para economizar no seguro auto em Curitiba, seguro para Uber e 99, cobertura contra terceiros, tabela FIPE e SUSEP.";
  const canonicalUrl = "https://loovi-barbara-duraes.com.br/blog";

  const categories = ['Todas', 'Economia & Dicas', 'Avaliação & Guia', 'Motoristas de App', 'Comparativo', 'Especialidades'];

  const filteredPosts = BLOG_POSTS.filter(p => {
    const matchesCategory = selectedCategory === 'Todas' || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-24 pb-16">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="blog seguro auto curitiba, guia seguro loovi, seguro uber curitiba dicas, cotar seguro auto barato" />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2ED9A0]/20 text-[#00875A] text-xs font-bold uppercase tracking-wider mb-4 border border-[#2ED9A0]/40">
            <BookOpen className="w-3.5 h-3.5 text-[#00875A]" />
            <span>Central de Conteúdo e Guias Práticos</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-sora tracking-tight text-slate-900 mb-4">
            Blog do Seguro Auto em <span className="text-[#6D2DBF]">Curitiba</span>
          </h1>
          <p className="text-slate-700 text-base sm:text-lg font-medium">
            Aprenda a economizar no seguro do seu veículo, entenda as coberturas SUSEP e saiba por que a Loovi é a escolha número 1 em Curitiba e RMC.
          </p>
        </div>

        {/* Filter and Search */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 mb-10 shadow-sm space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Pesquisar artigos (ex: Uber, economizar, FIPE, SUSEP, leilão...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#6D2DBF] text-sm sm:text-base transition-all shadow-sm"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs text-slate-600 font-bold uppercase mr-2">Categorias:</span>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#6D2DBF] text-white shadow-md scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map(post => (
            <div
              key={post.slug}
              onClick={() => onNavigate(`/blog/${post.slug}`)}
              className="bg-slate-50 border border-slate-200 hover:border-[#6D2DBF] hover:bg-white rounded-3xl p-6 sm:p-8 transition-all cursor-pointer group hover:-translate-y-1 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#6D2DBF]/10 text-[#6D2DBF] text-xs font-bold uppercase border border-[#6D2DBF]/20">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#00875A]" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-sora group-hover:text-[#6D2DBF] transition-colors mb-3 leading-snug">
                  {post.title}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-600 font-medium flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-[#00875A]" />
                  Por {post.author}
                </span>

                <span className="text-xs font-bold text-[#6D2DBF] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Ler Artigo Completo
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Home Images Showcase */}
        <HomeImagesShowcase
          title="Galeria Ilustrada do Seguro Loovi"
          subtitle="Acompanhe na prática como funciona a proteção para seu veículo em Curitiba e Região."
        />
      </section>
    </div>
  );
};
