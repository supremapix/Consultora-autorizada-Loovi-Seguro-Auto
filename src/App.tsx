import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { SEOHead } from './components/SEOHead';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RiskSection } from './components/RiskSection';
import { CoveragesSection } from './components/CoveragesSection';
import { WhyLooviSection } from './components/WhyLooviSection';
import { QuizCotacao } from './components/QuizCotacao';
import { ContactForm } from './components/ContactForm';
import { SocialProofFAQ } from './components/SocialProofFAQ';
import { FloatingControls } from './components/FloatingControls';
import { ShareRadial } from './components/ShareRadial';
import { Footer } from './components/Footer';

import { BAIRROS_CURITIBA } from './data/bairrosData';
import { REGIOES_POPULARES } from './data/regioesData';
import { CIDADES_METROPOLITANAS } from './data/cidadesData';
import { BLOG_POSTS } from './data/blogData';

import { BairroDetail } from './components/BairroDetail';
import { RegiaoDetail } from './components/RegiaoDetail';
import { CidadeDetail } from './components/CidadeDetail';
import { BairrosIndex } from './components/BairrosIndex';
import { CidadesIndex } from './components/CidadesIndex';
import { BlogHub } from './components/BlogHub';
import { BlogPostDetail } from './components/BlogPostDetail';
import { InstitutionalPages } from './components/InstitutionalPages';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    // 1. Single Bairro page
    if (currentPath.startsWith('/bairro/')) {
      const slug = currentPath.replace('/bairro/', '').replace(/\/$/, '');
      const bairro = BAIRROS_CURITIBA.find(b => b.slug === slug);
      if (bairro) {
        return <BairroDetail bairro={bairro} onNavigate={navigateTo} />;
      }
    }

    // 2. Single Região Popular page
    if (currentPath.startsWith('/regiao/')) {
      const slug = currentPath.replace('/regiao/', '').replace(/\/$/, '');
      const regiao = REGIOES_POPULARES.find(r => r.slug === slug);
      if (regiao) {
        return <RegiaoDetail regiao={regiao} onNavigate={navigateTo} />;
      }
    }

    // 3. Single Cidade RMC page
    if (currentPath.startsWith('/cidade/')) {
      const slug = currentPath.replace('/cidade/', '').replace(/\/$/, '');
      const cidade = CIDADES_METROPOLITANAS.find(c => c.slug === slug);
      if (cidade) {
        return <CidadeDetail cidade={cidade} onNavigate={navigateTo} />;
      }
    }

    // 4. Single Blog Post
    if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.replace('/blog/', '').replace(/\/$/, '');
      const post = BLOG_POSTS.find(p => p.slug === slug);
      if (post) {
        return <BlogPostDetail post={post} onNavigate={navigateTo} />;
      }
    }

    // 5. Index Pages
    if (currentPath === '/bairros-curitiba') {
      return <BairrosIndex onNavigate={navigateTo} />;
    }

    if (currentPath === '/cidades-regiao-metropolitana') {
      return <CidadesIndex onNavigate={navigateTo} />;
    }

    if (currentPath === '/blog') {
      return <BlogHub onNavigate={navigateTo} />;
    }

    // 6. Institutional Pages
    if (['/sobre', '/faq', '/coberturas', '/seguro-app-uber', '/privacidade', '/termos'].includes(currentPath)) {
      const type = currentPath.replace('/', '') as 'sobre' | 'faq' | 'coberturas' | 'seguro-app-uber' | 'privacidade' | 'termos';
      return <InstitutionalPages pageType={type} onNavigate={navigateTo} />;
    }

    // 7. Default Landing Page
    return (
      <main className="flex-1">
        <Hero />
        <RiskSection />
        <CoveragesSection />
        <WhyLooviSection />
        <QuizCotacao />
        <ContactForm />
        <SocialProofFAQ />
      </main>
    );
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-[#0B0D17] text-white flex flex-col font-sans selection:bg-[#2ED9A0] selection:text-[#0B0D17] overflow-x-hidden">
        {currentPath === '/' && <SEOHead />}
        <Header onNavigate={navigateTo} currentPath={currentPath} />
        {renderContent()}
        <Footer onNavigate={navigateTo} />
        <FloatingControls />
        <ShareRadial />
      </div>
    </HelmetProvider>
  );
}
