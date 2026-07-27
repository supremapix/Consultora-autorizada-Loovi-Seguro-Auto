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

export default function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white text-[#131522] flex flex-col font-['Poppins'] selection:bg-[#5968FA] selection:text-white overflow-x-hidden">
        <SEOHead />
        <Header />
        <main className="flex-1">
          <Hero />
          <RiskSection />
          <CoveragesSection />
          <WhyLooviSection />
          <QuizCotacao />
          <ContactForm />
          <SocialProofFAQ />
        </main>
        <Footer />
        <FloatingControls />
        <ShareRadial />
      </div>
    </HelmetProvider>
  );
}
