import { DEVELOPER, PROJECT } from "./SEOHead";

function SchemaScript({ schema }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const MAGICSTITCH_URL = PROJECT.url;
const MAGICSTITCH_IMAGE = PROJECT.image;
const SHARPMAN_URL = DEVELOPER.portfolio;
const DEVELOPER_SOCIALS = [
  DEVELOPER.portfolio,
  DEVELOPER.github,
  DEVELOPER.linkedin,
  DEVELOPER.twitter,
  DEVELOPER.instagram,
  DEVELOPER.youtube,
  DEVELOPER.facebook,
];

/* ─── WebSite Schema ──────────────────────────────────────────────────────── */
/* Primary schema for MagicStitch as a website entity.                        */
/* Signals to Google: site name, description, language, and creator.           */
export function WebSiteSchema() {
  return (
    <SchemaScript
      schema={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "MagicStitch",
        alternateName: "MagicStitch — Premium Fashion Brand",
        description: PROJECT.description,
        url: MAGICSTITCH_URL,
        inLanguage: "en",
        image: MAGICSTITCH_IMAGE,
        datePublished: "2024-06-01",
        dateModified: "2026-07-16",

        /* Owner = MagicStitch the brand (Organization) */
        publisher: {
          "@type": "Organization",
          name: "MagicStitch",
          url: MAGICSTITCH_URL,
          logo: {
            "@type": "ImageObject",
            url: `${MAGICSTITCH_URL}/favicon.svg`,
          },
          founder: {
            "@type": "Person",
            name: DEVELOPER.name,
            url: SHARPMAN_URL,
          },
          sameAs: DEVELOPER_SOCIALS,
        },

        /* Creator = Sharpman (the development brand) */
        creator: {
          "@type": "Organization",
          name: DEVELOPER.brand,
          url: SHARPMAN_URL,
          founder: {
            "@type": "Person",
            name: DEVELOPER.name,
          },
          sameAs: DEVELOPER_SOCIALS,
        },

        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: MAGICSTITCH_URL,
            },
          ],
        },
      }}
    />
  );
}

/* ─── LocalBusiness Schema ────────────────────────────────────────────────── */
/* Physical business signals: hours, location, contact, price range.           */
/* Helps with Google Business Profile and local search results.                */
export function LocalBusinessSchema() {
  return (
    <SchemaScript
      schema={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "MagicStitch",
        description: PROJECT.description,
        url: MAGICSTITCH_URL,
        telephone: "+2349070281022",
        email: DEVELOPER.email,

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
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "09:00",
            closes: "18:00",
          },
        ],

        priceRange: "$$",
        image: MAGICSTITCH_IMAGE,

        founder: {
          "@type": "Person",
          name: DEVELOPER.name,
          url: SHARPMAN_URL,
        },

        sameAs: DEVELOPER_SOCIALS,

        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+2349070281022",
          contactType: "customer service",
          availableLanguage: "English",
        },
      }}
    />
  );
}

/* ─── Organization Schema (Sharpman) ──────────────────────────────────────── */
/* Developer brand entity — distinct from MagicStitch.                         */
/* Signals that Sharpman is the engineering force behind MagicStitch.           */
export function OrganizationSchema() {
  return (
    <SchemaScript
      schema={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: DEVELOPER.brand,
        url: SHARPMAN_URL,
        description: `${DEVELOPER.brand} is the web development and digital solutions brand founded by ${DEVELOPER.name}, specializing in custom websites, web applications, and digital experiences.`,
        founder: {
          "@type": "Person",
          name: DEVELOPER.name,
          jobTitle: "Full Stack Web Developer",
          url: SHARPMAN_URL,
          sameAs: DEVELOPER_SOCIALS,
        },
        sameAs: DEVELOPER_SOCIALS,
        contactPoint: {
          "@type": "ContactPoint",
          email: DEVELOPER.email,
          contactType: "customer service",
        },
      }}
    />
  );
}

/* ─── Person Schema (Oyenuga Joshua) ──────────────────────────────────────── */
/* Individual person entity — founder of both MagicStitch and Sharpman.        */
/* Helps with Knowledge Panel and personal brand signals.                      */
export function PersonSchema() {
  return (
    <SchemaScript
      schema={{
        "@context": "https://schema.org",
        "@type": "Person",
        name: DEVELOPER.name,
        alternateName: DEVELOPER.brand,
        jobTitle: "Full Stack Web Developer",
        url: SHARPMAN_URL,
        email: DEVELOPER.email,

        address: {
          "@type": "PostalAddress",
          addressLocality: "Ikorodu",
          addressRegion: "Lagos",
          addressCountry: "NG",
        },

        sameAs: DEVELOPER_SOCIALS,

        knowsAbout: [
          "Custom Website Development",
          "Web Application Development",
          "React Development",
          "Laravel Development",
          "E-commerce Solutions",
          "UI/UX Design",
          "SEO Optimization",
          "Digital Solutions",
        ],

        worksFor: [
          {
            "@type": "Organization",
            name: "MagicStitch",
            url: MAGICSTITCH_URL,
          },
          {
            "@type": "Organization",
            name: DEVELOPER.brand,
            url: SHARPMAN_URL,
          },
        ],
      }}
    />
  );
}

/* ─── Default Export — WebSite + LocalBusiness (most critical pair) ───────── */
export default function JsonLd() {
  return (
    <>
      <WebSiteSchema />
      <LocalBusinessSchema />
    </>
  );
}
