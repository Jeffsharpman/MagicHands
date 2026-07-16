import { Helmet } from "react-helmet-async";

const DEVELOPER = {
  name: "Oyenuga Joshua",
  brand: "Sharpman",
  portfolio: "https://sharpman.netlify.app",
  email: "buildwithsharpman@gmail.com",
  github: "https://github.com/Jeffsharpman",
  linkedin: "https://www.linkedin.com/in/oyenuga-joshua-058434417",
  twitter: "https://x.com/sharpman_dev",
  instagram: "https://www.instagram.com/sharpman_dev",
  youtube: "https://youtube.com/@sharpman_dev",
  facebook: "https://facebook.com/OyenugaJoshua",
  tiktok: "https://www.tiktok.com/@sharpman.dev",
  whatsapp: "https://wa.me/2349070281022",
  whatsappDisplay: "+234 907 028 1022",
  location: "Ikorodu, Lagos, Nigeria",
};

const PROJECT = {
  name: "MagicStitch",
  tagline: "Custom Fashion, Tailored for You",
  description:
    "MagicStitch delivers custom-tailored clothing, accessories, footwear, and fragrances from Lagos, Nigeria. Every piece is built to your measurements — never mass-produced.",
  shortDescription:
    "Custom-tailored clothing, accessories, footwear, and fragrances from Lagos. Built to your measurements — never mass-produced.",
  url: "https://magicstitch.netlify.app",
  image: "https://magicstitch.netlify.app/hero-og.jpg",
  imageAlt:
    "MagicStitch — Custom-tailored clothing, accessories, footwear, and fragrances from Lagos, Nigeria",
  themeColor: "#D4AF37",
  keywords:
    "custom clothing, tailored fashion, accessories, footwear, fragrances, MagicStitch, Lagos Nigeria, menswear, womenswear, luxury fashion",
};

export default function SEOHead({
  title,
  description,
  url,
  image,
  imageAlt,
  type = "website",
  children,
}) {
  const pageTitle = title
    ? `${title} | MagicStitch`
    : `${PROJECT.name} — ${PROJECT.tagline}`;

  const pageDescription = description || PROJECT.description;
  const pageUrl = url || PROJECT.url;
  const pageImage = image || PROJECT.image;
  const pageImageAlt = imageAlt || PROJECT.imageAlt;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={PROJECT.keywords} />
      <link rel="canonical" href={pageUrl} />

      {/* Robots — large image previews + no snippet limit for rich results */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />

      {/* Author / Brand */}
      <meta name="author" content={DEVELOPER.name} />
      <meta name="creator" content={DEVELOPER.brand} />
      <meta name="publisher" content={PROJECT.name} />
      <meta name="theme-color" content={PROJECT.themeColor} />

      {/* ═══ Open Graph ═══════════════════════════════════════════════════ */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={PROJECT.shortDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:alt" content={pageImageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:site_name" content={PROJECT.name} />
      <meta property="og:locale" content="en_US" />

      {/* ═══ Twitter Card ════════════════════════════════════════════════ */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={PROJECT.shortDescription} />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:alt" content={pageImageAlt} />
      <meta name="twitter:creator" content="@sharpman_dev" />
      <meta name="twitter:site" content="@sharpman_dev" />

      {children}
    </Helmet>
  );
}

export { DEVELOPER, PROJECT };
