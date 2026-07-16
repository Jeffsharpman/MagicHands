import { useState, useEffect } from "react";
import { SEOHead, JsonLd, OrganizationSchema, PersonSchema, AboutDeveloper } from "./seo";
import LoadingScreen from "./ui/LoadingScreen";
import ScrollProgress from "./ui/ScrollProgress";
import CursorGlow from "./ui/CursorGlow";
import Nav from "./ui/Nav";
import Footer from "./ui/Footer";
import WhatsAppFAB from "./ui/WhatsAppFAB";
import Marquee from "./ui/Marquee";
import Contact from "./ui/Contact";
import Testimonials from "./ui/Testimonials";
import Hero from "./magicStitch/Hero";
import FAQ from "./ui/FAQ";
import Gallery from "./magicStitch/Gallery";
import Collections from "./magicStitch/Collections";
import WhyUs from "./ui/WhyUs";
import Configurator from "./magicStitch/Configurator";
import Process from "./magicStitch/Process";

const Home = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-surface text-fg">
      <SEOHead />
      <JsonLd />
      <OrganizationSchema />
      <PersonSchema />

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
