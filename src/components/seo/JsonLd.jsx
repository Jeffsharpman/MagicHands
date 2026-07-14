import { DEVELOPER, PROJECT } from "./SEOHead";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "MagicHands - Top Dawg Suit",
    description: PROJECT.description,
    url: PROJECT.url,
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Web",
    inLanguage: "en",
    image: PROJECT.image,

    author: {
      "@type": "Person",
      name: DEVELOPER.name,
      url: DEVELOPER.portfolio,
      jobTitle: "Full Stack Web Developer",
      sameAs: [
        DEVELOPER.portfolio,
        DEVELOPER.github,
        DEVELOPER.linkedin,
        DEVELOPER.twitter,
        DEVELOPER.instagram,
        DEVELOPER.youtube,
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ikorodu",
        addressRegion: "Lagos",
        addressCountry: "NG",
      },
    },

    creator: {
      "@type": "Organization",
      name: DEVELOPER.brand,
      url: DEVELOPER.portfolio,
      description: "Sharpman is the personal web development and digital solutions brand founded by Oyenuga Joshua, specializing in custom websites, web applications, and digital solutions.",
      founder: {
        "@type": "Person",
        name: DEVELOPER.name,
      },
      sameAs: [
        DEVELOPER.portfolio,
        DEVELOPER.github,
        DEVELOPER.linkedin,
        DEVELOPER.twitter,
        DEVELOPER.instagram,
        DEVELOPER.youtube,
      ],
    },

    publisher: {
      "@type": "Organization",
      name: DEVELOPER.brand,
      url: DEVELOPER.portfolio,
      logo: {
        "@type": "ImageObject",
        url: `${DEVELOPER.portfolio}/logo.png`,
      },
    },

    isPartOf: {
      "@type": "WebSite",
      name: "Sharpman Portfolio",
      url: DEVELOPER.portfolio,
      description: "The official portfolio of Oyenuga Joshua (Sharpman) — Full Stack Web Developer specializing in React, Laravel, and digital solutions.",
      author: {
        "@type": "Person",
        name: DEVELOPER.name,
      },
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": PROJECT.url,
    },

    datePublished: "2025-01-01",
    dateModified: new Date().toISOString(),

    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Sharpman Portfolio",
          item: DEVELOPER.portfolio,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "MagicHands - Top Dawg Suit",
          item: PROJECT.url,
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Top Dawg Suit - MagicHands",
    description: "Premium bespoke suit atelier crafting custom suits for the gentleman who understands that a suit is a statement.",
    url: PROJECT.url,
    telephone: "+234 812 372 9433",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ikorodu",
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "6.6194",
      longitude: "3.5047",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    priceRange: "$$$",
    image: PROJECT.image,
    founder: {
      "@type": "Person",
      name: DEVELOPER.name,
      url: DEVELOPER.portfolio,
    },
    sameAs: [
      DEVELOPER.portfolio,
      DEVELOPER.github,
      DEVELOPER.linkedin,
      DEVELOPER.twitter,
      DEVELOPER.instagram,
      DEVELOPER.youtube,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: DEVELOPER.brand,
    url: DEVELOPER.portfolio,
    description: "Sharpman is the personal web development and digital solutions brand founded by Oyenuga Joshua, specializing in custom websites, web applications, restaurant websites, business websites, landing pages, portfolios, e-commerce, admin dashboards, React and Laravel development, SEO optimization, and digital solutions.",
    founder: {
      "@type": "Person",
      name: DEVELOPER.name,
      jobTitle: "Full Stack Web Developer",
      url: DEVELOPER.portfolio,
      sameAs: [
        DEVELOPER.portfolio,
        DEVELOPER.github,
        DEVELOPER.linkedin,
        DEVELOPER.twitter,
        DEVELOPER.instagram,
        DEVELOPER.youtube,
      ],
    },
    sameAs: [
      DEVELOPER.portfolio,
      DEVELOPER.github,
      DEVELOPER.linkedin,
      DEVELOPER.twitter,
      DEVELOPER.instagram,
      DEVELOPER.youtube,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: DEVELOPER.email,
      contactType: "customer service",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: DEVELOPER.name,
    alternateName: DEVELOPER.brand,
    jobTitle: "Full Stack Web Developer",
    url: DEVELOPER.portfolio,
    email: DEVELOPER.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ikorodu",
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
    sameAs: [
      DEVELOPER.portfolio,
      DEVELOPER.github,
      DEVELOPER.linkedin,
      DEVELOPER.twitter,
      DEVELOPER.instagram,
      DEVELOPER.youtube,
    ],
    knowsAbout: [
      "Custom Website Development",
      "Web Application Development",
      "React Development",
      "Laravel Development",
      "SEO Optimization",
      "Digital Solutions",
      "Restaurant Websites",
      "E-commerce Solutions",
      "Admin Dashboards",
    ],
    worksFor: {
      "@type": "Organization",
      name: DEVELOPER.brand,
      url: DEVELOPER.portfolio,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
