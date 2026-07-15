import { useState, useEffect } from "react";
import {
  SEOHead,
  JsonLd,
  LocalBusinessSchema,
  AboutDeveloper,
  FooterAttribution,
} from "./seo";
import LoadingScreen from "./ui/LoadingScreen";
import ScrollProgress from "./ui/ScrollProgress";
import CursorGlow from "./ui/CursorGlow";
import Nav from "./ui/Nav";
import Footer from "./ui/Footer";
import WhatsAppFAB from "./ui/WhatsAppFAB";
import Marquee from "./ui/Marquee";
import Contact from "./ui/Contact";
import Testimonials from "./ui/Testimonials";
import Hero from "./magicHands/Hero";
import FAQ from "./ui/FAQ";
import Gallery from "./magicHands/Gallery";
import Collections from "./magicHands/Collections";
import WhyUs from "./magicHands/WhyUs";
import Configurator from "./magicHands/Configurator";
import Process from "./magicHands/Process";

const Home = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white">
      <SEOHead />
      <JsonLd />
      <LocalBusinessSchema />

      <LoadingScreen done={ready} />

      <ScrollProgress />
      <CursorGlow />
      <Nav />

      <main>
        <Hero />
        <Marquee />
        <Collections />
        <WhyUs />
        <Configurator />
        <Process />
        <Testimonials />
        <Gallery />
        <FAQ />
        <Contact />
      </main>

      <AboutDeveloper />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default Home;
