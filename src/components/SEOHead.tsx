import { Helmet } from 'react-helmet-async';
import { CONSULTANT_INFO } from '../constants';

export function SEOHead() {
  const pageTitle = "Seguro Auto Loovi em Curitiba | Consultora Barbara Duraes";
  const pageDescription = "Seguro auto 100% digital, sem análise de perfil e sem burocracia. Assistência 24h, carro reserva, furto e roubo. Atendimento online em Curitiba e todo o Brasil. Faça sua cotação.";
  const canonicalUrl = "https://loovi-barbara-duraes.com.br";
  const ogImageUrl = "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&h=630&q=80";

  const insuranceAgencySchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": `${CONSULTANT_INFO.name} - ${CONSULTANT_INFO.role}`,
    "image": ogImageUrl,
    "taxID": CONSULTANT_INFO.cnpj,
    "telephone": CONSULTANT_INFO.whatsapp,
    "email": CONSULTANT_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua São Pedro, 593 — Apto 504",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "postalCode": "80035-020",
      "addressCountry": "BR"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "09:00",
        "closes": "13:00"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "Curitiba" },
      { "@type": "AdministrativeArea", "name": "Paraná" },
      { "@type": "Country", "name": "Brasil" }
    ],
    "sameAs": [CONSULTANT_INFO.instagramUrl]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Seguro Auto Loovi",
    "serviceType": "Seguro veicular",
    "provider": {
      "@type": "InsuranceAgency",
      "name": `${CONSULTANT_INFO.name} - ${CONSULTANT_INFO.role}`
    },
    "areaServed": "BR",
    "description": "Seguro de carro digital com assistência 24h, colisão, furto, roubo e danos a terceiros sem análise de perfil do condutor."
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": canonicalUrl
      }
    ]
  };

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content="seguro auto Curitiba, seguro veicular online, seguro para carro de aplicativo, seguro sem análise de perfil, Loovi seguro auto, seguro auto barato Curitiba" />
      <meta name="theme-color" content="#5968FA" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Loovi Seguro Auto - Barbara Duraes" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* JSON-LD Schemas */}
      <script type="application/ld+json">{JSON.stringify(insuranceAgencySchema)}</script>
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </Helmet>
  );
}
