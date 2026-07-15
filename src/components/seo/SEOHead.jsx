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
  name: "MagicHands — Premium Fashion Brand",
  description:
    "MagicHands is a fashion brand delivering custom-tailored clothing, accessories, footwear, fragrances, and lifestyle products. Every piece is made with precision — not mass-produced.",
  url: "https://magichands.netlify.app",
  image: "https://magichands.netlify.app/hero-og.jpg",
  themeColor: "#D4AF37",
};

export default function SEOHead({
  title,
  description,
  url,
  image,
  type = "website",
  children,
}) {
  const pageTitle = title
    ? `${title} | MagicHands by Sharpman`
    : "MagicHands — Premium Fashion Brand | Designed by Sharpman";

  const pageDescription = description || PROJECT.description;
  const pageUrl = url || PROJECT.url;
  const pageImage = image || PROJECT.image;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="author" content={DEVELOPER.name} />
      <meta name="creator" content={DEVELOPER.brand} />
      <meta name="publisher" content={DEVELOPER.brand} />
      <meta name="keywords" content="MagicHands, fashion brand, custom clothing, tailored suits, accessories, footwear, fragrances, Oyenuga Joshua, Sharpman, Lagos Nigeria, luxury fashion, menswear" />
      <meta name="theme-color" content={PROJECT.themeColor} />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:site_name" content="MagicHands by Sharpman" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:creator" content="@sharpman_dev" />
      <meta name="twitter:site" content="@sharpman_dev" />

      {/* Author / Brand Verification */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      {children}
    </Helmet>
  );
}

export { DEVELOPER, PROJECT };
