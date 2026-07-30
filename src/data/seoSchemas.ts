import { CONSULTANT_INFO } from '../constants';

export function getInsuranceAgencySchema(pageUrl: string, title?: string, description?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "@id": `${pageUrl}#insurance-agency`,
    "name": `${CONSULTANT_INFO.name} - ${CONSULTANT_INFO.role}`,
    "url": pageUrl,
    "image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&h=630&q=80",
    "description": description || "Seguro Auto Loovi em Curitiba e Região Metropolitana. Atendimento 100% digital, sem análise de perfil e com 100% da FIPE.",
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
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.4116,
      "longitude": -49.2558
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
    "priceRange": "$$",
    "areaServed": [
      { "@type": "City", "name": "Curitiba" },
      { "@type": "AdministrativeArea", "name": "Região Metropolitana de Curitiba" },
      { "@type": "AdministrativeArea", "name": "Paraná" },
      { "@type": "Country", "name": "Brasil" }
    ],
    "sameAs": [CONSULTANT_INFO.instagramUrl]
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function getFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}

export function getServiceSchema(serviceName: string, description: string, areaName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "serviceType": "Seguro Veicular",
    "provider": {
      "@type": "InsuranceAgency",
      "name": `${CONSULTANT_INFO.name} - ${CONSULTANT_INFO.role}`,
      "telephone": CONSULTANT_INFO.whatsapp,
      "email": CONSULTANT_INFO.email
    },
    "areaServed": {
      "@type": "Place",
      "name": areaName
    },
    "description": description,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Planos de Seguro Loovi",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Seguro Loovi com Assistência 24h e 100% FIPE"
          },
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "priceCurrency": "BRL",
            "price": "98.56",
            "unitCode": "MONTH"
          }
        }
      ]
    }
  };
}

export function getArticleSchema(title: string, summary: string, author: string, date: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": summary,
    "author": {
      "@type": "Person",
      "name": author,
      "jobTitle": CONSULTANT_INFO.role,
      "worksFor": {
        "@type": "Organization",
        "name": "Loovi Seguro Auto"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Loovi Seguro Auto - Barbara Duraes",
      "logo": {
        "@type": "ImageObject",
        "url": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&h=600&q=80"
      }
    },
    "datePublished": date,
    "dateModified": date,
    "mainEntityOfPage": url,
    "image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&h=630&q=80"
  };
}

export function getSpeakableAndSearchSchema(canonicalUrl: string) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": canonicalUrl,
      "name": "Loovi Seguro Auto Curitiba",
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${canonicalUrl}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", ".speakable-content"]
    }
  ];
}
