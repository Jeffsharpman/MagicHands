import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import {
  SEOHead,
  JsonLd,
  LocalBusinessSchema,
  AboutDeveloper,
  FooterAttribution,
} from "../seo";
import heroSuit from "../../assets/hero-suit.jpg";
import cBusiness from "../../assets/collection-business.jpg";
import cWedding from "../../assets/collection-wedding.jpg";
import cConvocation from "../../assets/collection-convocation.jpg";
import cTraditional from "../../assets/collection-traditional.jpg";
import cExecutive from "../../assets/collection-executive.jpg";
import cTuxedo from "../../assets/collection-tuxedo.jpg";

const NAV = [
  ["Home", "#home"],
  ["Collections", "#collections"],
  ["Occasions", "#occasions"],
  ["About", "#about"],
  ["Testimonials", "#testimonials"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"],
];

function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative h-11 w-11 shrink-0">
        <div className="absolute inset-0 rounded-full bg-gold-gradient blur-md opacity-60" />

        <div className="relative flex h-full w-full items-center justify-center rounded-full border border-[color:var(--gold)]/60 bg-black">
          <span className="font-display text-lg font-bold text-gold-gradient">
            TD
          </span>
        </div>
      </div>

      <div className="leading-tight">
        <div className="font-display text-lg tracking-widest text-gold-gradient">
          TOP DAWG
        </div>

        <div className="font-ui text-[10px] tracking-[0.4em] text-[color:var(--gold)]/70">
          — SUIT —
        </div>
      </div>
    </div>
  );
}

function LoadingScreen({ done }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
        >
          <motion.div
            initial={{
              scale: 0.6,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
          >
            <Logo className="scale-125" />
          </motion.div>

          <div className="mt-10 h-[2px] w-56 overflow-hidden rounded-full bg-[color:var(--gold)]/10">
            <motion.div
              className="h-full bg-gold-gradient"
              initial={{
                width: "0%",
              }}
              animate={{
                width: "100%",
              }}
              transition={{
                duration: 1.6,
                ease: "easeInOut",
              }}
            />
          </div>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
            }}
            className="mt-6 font-ui text-[10px] tracking-[0.5em] text-[color:var(--gold)]/60"
          >
            BUILT FOR THE TOP DAWG
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      el.style.transform = `translate3d(${e.clientX - 200}px, ${
        e.clientY - 200
      }px, 0)`;
    };

    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-40 h-[400px] w-[400px] rounded-full opacity-40 mix-blend-screen blur-3xl"
      style={{
        background:
          "radial-gradient(circle, rgba(212,175,55,0.4), transparent 60%)",
      }}
    />
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-gold-gradient"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 md:px-10 ${
          scrolled
            ? "glass-strong rounded-full border border-[color:var(--gold)]/20 mx-4 md:mx-8 px-5"
            : ""
        }`}
      >
        <a href="#home" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="group relative font-ui text-[12px] tracking-[0.2em] text-white/80 transition-colors hover:text-[color:var(--gold)]"
            >
              {label.toUpperCase()}

              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-gradient transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 font-ui text-[11px] font-semibold uppercase tracking-[0.2em] text-black shadow-[0_10px_30px_-10px_rgba(212,175,55,0.6)] transition-transform hover:scale-[1.03] lg:inline-flex"
        >
          Book Appointment
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-[color:var(--gold)]/30 lg:hidden"
          aria-label="Menu"
        >
          <span
            className={`h-px w-5 bg-[color:var(--gold)] transition-transform ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />

          <span
            className={`h-px w-5 bg-[color:var(--gold)] transition-transform ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -12,
            }}
            className="mx-4 mt-3 rounded-2xl glass-strong p-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="font-ui text-sm tracking-[0.2em] text-white/80 hover:text-[color:var(--gold)]"
                >
                  {label.toUpperCase()}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center rounded-full bg-gold-gradient px-5 py-3 font-ui text-xs font-semibold uppercase tracking-[0.2em] text-black"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Particles() {
  const items = Array.from({ length: 24 });

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {items.map((_, i) => {
        const size = 2 + Math.random() * 4;
        const left = Math.random() * 100;
        const delay = Math.random() * 8;
        const dur = 10 + Math.random() * 12;

        return (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              top: "-5%",
              width: size,
              height: size,
              background: "radial-gradient(circle, #F5E6A7, transparent 70%)",
              boxShadow: "0 0 8px rgba(212, 175, 55, 0.7)",
              animation: `fall ${dur}s linear ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}

function Hero() {
  const wrap = useRef(null);
  const [rot, setRot] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ["start start", "end start"],
  });

  const yImg = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const onMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;

      setRot({
        x: ((e.clientY - cy) / cy) * -6,
        y: ((e.clientX - cx) / cx) * 12,
      });
    };

    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section
      id="home"
      ref={wrap}
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Spotlight & Fog */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(212,175,55,0.15), transparent 70%), radial-gradient(ellipse at bottom, #0a0803 0%, #000 60%)",
        }}
      />

      <div
        className="absolute inset-x-0 bottom-0 h-1/2 opacity-40"
        style={{
          background:
            "linear-gradient(to top, rgba(139,115,40,0.15), transparent)",
        }}
      />

      <Particles />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-32 pb-16 md:pt-40 md:pb-24 lg:grid lg:grid-cols-2 lg:gap-12">
        {/* Left Content */}
        <motion.div style={{ opacity }} className="text-center lg:text-left">
          {/* Hidden heading for SEO — reinforces brand entity */}
          <h1 className="sr-only">
            MagicHands — Premium Bespoke Suits by Sharpman
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.6 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-[color:var(--gold)]/30 bg-white/[0.03] px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)] animate-pulse" />

            <span className="font-ui text-[10px] tracking-[0.35em] text-[color:var(--gold)]">
              BESPOKE ATELIER · EST. 2019
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 1.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="font-display text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-[5.5rem]"
          >
            <span className="block text-white">Crafted for</span>

            <span
              className="block text-gold-gradient animate-shimmer"
              style={{
                backgroundImage:
                  "linear-gradient(90deg,#8B7328 0%,#F5E6A7 40%,#D4AF37 60%,#8B7328 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Leaders.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.1 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg lg:mx-0 mx-auto"
          >
            Premium bespoke suits designed for convocation, weddings, project
            defence, corporate executives, and the moments that define you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.3 }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start justify-center"
          >
            <a
              href="#contact"
              className="group relative overflow-hidden rounded-full bg-gold-gradient px-8 py-4 font-ui text-xs font-semibold uppercase tracking-[0.25em] text-black shadow-[0_20px_50px_-15px_rgba(212,175,55,0.7)] transition-transform hover:scale-[1.04]"
            >
              <span className="relative z-10">Book Consultation</span>

              <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-700 group-hover:translate-x-full" />
            </a>

            <a
              href="#collections"
              className="group inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 px-8 py-4 font-ui text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--gold)] transition-colors hover:bg-[color:var(--gold)]/10"
            >
              View Collection
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6, duration: 1 }}
            className="mt-14 grid grid-cols-3 gap-6 border-t border-[color:var(--gold)]/15 pt-6 max-w-md lg:mx-0 mx-auto"
          >
            {[
              ["1,200+", "Suits crafted"],
              ["6+", "Years mastery"],
              ["4.9★", "Client rating"],
            ].map(([n, l]) => (
              <div key={l} className="text-center lg:text-left">
                <div className="font-display text-2xl text-gold-gradient md:text-3xl">
                  {n}
                </div>

                <div className="mt-1 font-ui text-[10px] tracking-[0.2em] text-white/50">
                  {l.toUpperCase()}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          style={{ y: yImg, opacity }}
          className="relative mx-auto mt-16 h-[520px] w-full max-w-md lg:mt-0 lg:h-[720px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.4,
            delay: 1.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div
            className="absolute left-1/2 top-1/2 h-[95%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(212,175,55,0.35), transparent 65%)",
            }}
          />

          <div className="absolute bottom-2 left-1/2 h-8 w-72 -translate-x-1/2 rounded-full border border-[color:var(--gold)]/40 opacity-70 blur-[1px]" />

          <div className="absolute bottom-4 left-1/2 h-2 w-56 -translate-x-1/2 rounded-full bg-gold-gradient opacity-30 blur-md" />

          <div className="relative h-full w-full [perspective:1200px]">
            <motion.div
              className="relative h-full w-full"
              style={{ transformStyle: "preserve-3d" }}
              animate={{
                rotateX: rot.x,
                rotateY: rot.y,
              }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
              }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] gold-border shadow-[0_40px_100px_-20px_rgba(212,175,55,0.4)]">
                <img
                  src={heroSuit}
                  alt="MagicHands premium bespoke black double-breasted suit by Top Dawg Suit — designed by Oyenuga Joshua (Sharpman)"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
                  <div>
                    <div className="font-ui text-[10px] tracking-[0.35em] text-[color:var(--gold)]/80">
                      SIGNATURE PIECE
                    </div>

                    <div className="font-display text-xl text-white">
                      Onyx Double-Breasted
                    </div>
                  </div>

                  <div className="glass rounded-xl px-3 py-2 text-right">
                    <div className="font-ui text-[10px] tracking-[0.2em] text-white/60">
                      FROM
                    </div>

                    <div className="font-display text-lg text-gold-gradient">
                      ₦180,000
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute -left-4 top-16 glass rounded-2xl px-4 py-3 shadow-[var(--shadow-elegant)]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <div className="font-ui text-[9px] tracking-[0.3em] text-[color:var(--gold)]">
                  HAND-STITCHED
                </div>

                <div className="font-display text-sm text-white">
                  Super 150s Wool
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-2 bottom-32 glass rounded-2xl px-4 py-3 shadow-[var(--shadow-elegant)]"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <div className="font-ui text-[9px] tracking-[0.3em] text-[color:var(--gold)]">
                  FIT GUARANTEE
                </div>

                <div className="font-display text-sm text-white">
                  Perfect · Lifetime
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-ui text-[10px] tracking-[0.4em] text-white/40">
          SCROLL
        </span>

        <motion.div
          className="h-8 w-px bg-gradient-to-b from-[color:var(--gold)] to-transparent"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </motion.div>

      <div className="mt-14 grid grid-cols-3 gap-6 border-t border-[color:var(--gold)]/15 pt-6 max-w-md lg:mx-0 mx-auto">
        {[
          ["1,200+", "Suits crafted"],
          ["6+", "Years mastery"],
          ["4.9★", "Client rating"],
        ].map(([n, l]) => (
          <div key={l} className="text-center lg:text-left">
            <div className="font-display text-2xl text-gold-gradient md:text-3xl">
              {n}
            </div>

            <div className="mt-1 font-ui text-[10px] tracking-[0.2em] text-white/50">
              {l.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, sub }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-4 inline-flex items-center gap-3"
      >
        <span className="h-px w-8 bg-gold-gradient" />

        <span className="font-ui text-[10px] tracking-[0.4em] text-[color:var(--gold)]">
          {eyebrow}
        </span>

        <span className="h-px w-8 bg-gold-gradient" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="font-display text-4xl leading-tight md:text-5xl lg:text-6xl"
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {sub && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.15,
          }}
          className="mt-5 text-white/60 md:text-lg"
        >
          {sub}
        </motion.p>
      )}
    </div>
  );
}

function Marquee() {
  const items = [
    "Bespoke Craft",
    "Convocation",
    "Weddings",
    "Executive",
    "Project Defence",
    "Traditional",
    "Luxury Tuxedos",
  ];

  return (
    <div className="relative overflow-hidden border-y border-[color:var(--gold)]/20 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06),transparent_70%)] py-8">
      <div className="flex animate-marquee gap-16 whitespace-nowrap">
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-16">
            <span className="font-display text-3xl italic text-gold-gradient md:text-5xl">
              {item}
            </span>

            <span className="text-2xl text-[color:var(--gold)]/50">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const COLLECTIONS = [
  {
    title: "Business Collection",
    desc: "Sharp, commanding, ready for the boardroom.",
    img: cBusiness,
  },
  {
    title: "Wedding Collection",
    desc: "Ivory, silk, and the moment you say I do.",
    img: cWedding,
  },
  {
    title: "Convocation",
    desc: "Own the stage you've worked years to climb.",
    img: cConvocation,
  },
  {
    title: "Traditional",
    desc: "Heritage embroidery meets modern silhouettes.",
    img: cTraditional,
  },
  {
    title: "Executive",
    desc: "Pinstripe authority for the c-suite gentleman.",
    img: cExecutive,
  },
  {
    title: "Luxury Tuxedos",
    desc: "Black tie, satin lapels, unforgettable evenings.",
    img: cTuxedo,
  },
];

function CollectionCard({ c, i }) {
  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay: (i % 3) * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -12 }}
      className="group relative block overflow-hidden rounded-3xl border border-[color:var(--gold)]/15 bg-[#0a0806] shadow-[var(--shadow-elegant)] transition-all duration-500 hover:border-[color:var(--gold)]/60 hover:shadow-[0_40px_80px_-20px_rgba(212,175,55,0.35)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={c.img}
          alt={`${c.title} — MagicHands bespoke suit by Top Dawg Suit, designed by Oyenuga Joshua (Sharpman)`}
          loading="lazy"
          width={800}
          height={1000}
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />

        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle at 50% 100%, rgba(212,175,55,0.25), transparent 60%)",
          }}
        />

        <div className="absolute right-4 top-4 rounded-full glass px-3 py-1.5 font-ui text-[9px] tracking-[0.3em] text-[color:var(--gold)]">
          NEW
        </div>
      </div>

      <div className="relative p-6 md:p-7">
        <h3 className="font-display text-2xl leading-tight text-white md:text-3xl">
          {c.title}
        </h3>

        <p className="mt-2 text-sm text-white/60">{c.desc}</p>

        <div className="mt-5 flex items-center justify-between">
          <span className="font-ui text-[10px] tracking-[0.3em] text-[color:var(--gold)]">
            EXPLORE →
          </span>

          <span className="font-display text-sm text-white/40">Bespoke</span>
        </div>
      </div>
    </motion.a>
  );
}

function Collections() {
  return (
    <section id="collections" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="FEATURED COLLECTIONS"
          title='Signature <span class="text-gold-gradient italic">Editions</span>'
          sub="Six lines. One obsession. Cut, canvassed, and finished by hand in our atelier."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COLLECTIONS.map((collection, index) => (
            <CollectionCard key={collection.title} c={collection} i={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const WHY = [
  {
    icon: "◆",
    title: "Premium Quality",
    desc: "Only Super 130s–180s wools, silks, and cashmere blends.",
  },
  {
    icon: "✧",
    title: "Perfect Fit",
    desc: "20+ point precision measurements per client.",
  },
  {
    icon: "❖",
    title: "Expert Craftsmanship",
    desc: "Hand-canvassed jackets, hand-stitched details.",
  },
  {
    icon: "✦",
    title: "Luxury Fabrics",
    desc: "Sourced from Italian and English mills.",
  },
  {
    icon: "◈",
    title: "Custom Measurements",
    desc: "Your body, your style, your suit — no compromise.",
  },
  {
    icon: "❋",
    title: "Fast Delivery",
    desc: "Bespoke ready in 2–3 weeks. Rush available.",
  },
  {
    icon: "♛",
    title: "Lifetime Elegance",
    desc: "Free alterations for life. That's our promise.",
  },
];

function WhyUs() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,175,55,0.08), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="WHY TOP DAWG"
          title='The Details <span class="text-gold-gradient italic">Everyone Else</span> Skips'
          sub="Seven promises — by Oyenuga Joshua (Sharpman) — that separate a suit from a Top Dawg suit."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {WHY.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: (index % 4) * 0.08,
              }}
              className="group relative overflow-hidden rounded-2xl border border-[color:var(--gold)]/15 bg-[#0a0806]/70 p-7 transition-all hover:-translate-y-1 hover:border-[color:var(--gold)]/50"
            >
              <div
                className="absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                style={{
                  background: "var(--gradient-gold)",
                }}
              />

              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--gold)]/40 bg-black text-2xl text-gold-gradient transition-transform group-hover:rotate-45 group-hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="font-display text-xl text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-white/60">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SUIT_COLORS = [
  { name: "Onyx", hex: "#0a0a0a", accent: "#1a1a1a" },
  { name: "Navy", hex: "#0f1a3a", accent: "#1a2a55" },
  { name: "Charcoal", hex: "#2a2a2a", accent: "#3a3a3a" },
  { name: "Camel", hex: "#8b6f43", accent: "#a58860" },
  { name: "Ivory", hex: "#e8dfc7", accent: "#f2ead4" },
];

const TIES = ["#D4AF37", "#5B0A0A", "#0a1a3a", "#111", "#7b3f00"];

function Configurator() {
  const [color, setColor] = useState(SUIT_COLORS[0]);
  const [tie, setTie] = useState(TIES[3]);
  const [rot, setRot] = useState(0);

  const dragRef = useRef(null);

  useEffect(() => {
    const onUp = () => {
      dragRef.current = null;
    };

    const onMove = (e) => {
      if (!dragRef.current) return;

      setRot(dragRef.current.base + (e.clientX - dragRef.current.x) * 0.6);
    };

    window.addEventListener("mouseup", onUp);
    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section id="occasions" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #000, #0a0803 50%, #000)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="ATELIER LAB"
          title='Design Your <span class="text-gold-gradient italic">Signature</span>'
          sub="Rotate, recolor, restyle — a live preview of the suit that will define you. Built by Sharpman."
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          {/* 3D viewer */}
          <div
            className="relative aspect-square w-full overflow-hidden rounded-[2rem] border border-[color:var(--gold)]/20 bg-[radial-gradient(ellipse_at_center,#1a1408_0%,#000_70%)] shadow-[var(--shadow-elegant)] cursor-grab active:cursor-grabbing select-none"
            onMouseDown={(e) => (dragRef.current = { x: e.clientX, base: rot })}
          >
            {/* Studio floor */}
            <div className="absolute inset-x-8 bottom-8 h-24 rounded-[50%] bg-gradient-to-b from-[color:var(--gold)]/20 to-transparent blur-2xl" />
            {/* Spot rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-72 w-72 rounded-full border border-[color:var(--gold)]/10" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-96 w-96 rounded-full border border-[color:var(--gold)]/5" />
            </div>

            {/* SVG suit */}
            <div className="absolute inset-0 flex items-center justify-center [perspective:1000px]">
              <motion.svg
                viewBox="0 0 300 500"
                className="h-[80%] drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: rot }}
                transition={{ type: "spring", stiffness: 40, damping: 15 }}
                role="img"
                aria-label="Interactive bespoke suit configurator — MagicHands by Top Dawg Suit"
              >
                <defs>
                  <linearGradient id="suitG" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor={color.accent} />
                    <stop offset="50%" stopColor={color.hex} />
                    <stop offset="100%" stopColor="#000" />
                  </linearGradient>
                  <linearGradient id="lapelG" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color.accent} />
                    <stop offset="100%" stopColor={color.hex} />
                  </linearGradient>
                </defs>
                {/* Mannequin head/stand */}
                <ellipse cx="150" cy="30" rx="18" ry="20" fill="#1a1a1a" />
                <rect x="146" y="45" width="8" height="20" fill="#1a1a1a" />
                {/* Shoulders/jacket */}
                <path
                  d="M 40 100 Q 150 60 260 100 L 270 480 L 30 480 Z"
                  fill="url(#suitG)"
                />
                {/* Shirt */}
                <path
                  d="M 120 90 L 180 90 L 175 250 L 125 250 Z"
                  fill="#f5f5f5"
                />
                {/* Lapels */}
                <path
                  d="M 120 90 L 150 250 L 90 320 L 90 130 Z"
                  fill="url(#lapelG)"
                  opacity="0.95"
                />
                <path
                  d="M 180 90 L 150 250 L 210 320 L 210 130 Z"
                  fill="url(#lapelG)"
                  opacity="0.95"
                />
                {/* Tie */}
                <path
                  d="M 145 100 L 155 100 L 158 140 L 150 155 L 142 140 Z"
                  fill={tie}
                />
                <path
                  d="M 138 155 L 162 155 L 168 280 L 150 320 L 132 280 Z"
                  fill={tie}
                />
                {/* Buttons */}
                {[190, 240, 290, 340].map((y) => (
                  <circle key={y} cx="115" cy={y} r="4" fill="#D4AF37" />
                ))}
                {[190, 240, 290, 340].map((y) => (
                  <circle key={y + 1} cx="185" cy={y} r="4" fill="#D4AF37" />
                ))}
                {/* Pocket square */}
                <rect
                  x="205"
                  y="180"
                  width="18"
                  height="14"
                  fill="#F5E6A7"
                  transform="rotate(8 214 187)"
                />
              </motion.svg>
            </div>

            <div className="absolute left-5 top-5 glass rounded-full px-3 py-1.5 font-ui text-[10px] tracking-[0.3em] text-[color:var(--gold)]">
              LIVE PREVIEW
            </div>
            <div className="absolute right-5 top-5 glass rounded-full px-3 py-1.5 font-ui text-[10px] tracking-[0.2em] text-white/70">
              DRAG TO ROTATE
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-8">
            <div>
              <div className="mb-3 flex items-center justify-between">
                <div className="font-ui text-[10px] tracking-[0.3em] text-[color:var(--gold)]">
                  FABRIC COLOR
                </div>
                <div className="font-display italic text-white/70">
                  {color.name}
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {SUIT_COLORS.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setColor(c)}
                    className={`group relative h-14 w-14 rounded-full border-2 transition-all ${color.name === c.name ? "border-[color:var(--gold)] scale-110" : "border-white/10 hover:border-[color:var(--gold)]/50"}`}
                    style={{
                      background: `linear-gradient(135deg, ${c.accent}, ${c.hex})`,
                    }}
                    aria-label={c.name}
                  >
                    {color.name === c.name && (
                      <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[color:var(--gold)]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-3 font-ui text-[10px] tracking-[0.3em] text-[color:var(--gold)]">
                TIE
              </div>
              <div className="flex flex-wrap gap-3">
                {TIES.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTie(t)}
                    className={`h-12 w-8 rounded-md border-2 transition-transform hover:-translate-y-1 ${tie === t ? "border-[color:var(--gold)] scale-105" : "border-white/10"}`}
                    style={{ background: t }}
                    aria-label="Tie color"
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                ["FABRIC", "Super 150s Wool"],
                ["LINING", "Bemberg Silk"],
                ["LAPEL", "Peak · Satin"],
                ["FIT", "Slim Bespoke"],
              ].map(([k, v]) => (
                <div key={k} className="glass rounded-xl p-4">
                  <div className="font-ui text-[9px] tracking-[0.3em] text-[color:var(--gold)]/80">
                    {k}
                  </div>
                  <div className="mt-1 font-display text-sm text-white">
                    {v}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-between rounded-full bg-gold-gradient px-6 py-4 font-ui text-xs font-semibold uppercase tracking-[0.25em] text-black shadow-[0_20px_50px_-15px_rgba(212,175,55,0.6)] transition-transform hover:scale-[1.02]"
            >
              <span>Book This Design</span>
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  [
    "01",
    "Book Appointment",
    "Reserve a consultation at our atelier or virtual studio.",
  ],
  [
    "02",
    "Take Measurements",
    "20+ precision points captured by a master tailor.",
  ],
  ["03", "Tailoring", "Hand-canvassed construction. 60+ hours per suit."],
  ["04", "Final Fitting", "Refinements made until the fit is flawless."],
  ["05", "Delivery", "Presented in signature packaging. Yours forever."],
];

function Process() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="THE PROCESS"
          title='From Vision to <span class="text-gold-gradient italic">Vestment</span>'
          sub="Five deliberate steps. Zero shortcuts. Developed by Sharpman."
        />

        <div className="relative">
          <div
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block"
            style={{
              background:
                "linear-gradient(180deg, transparent, var(--gold) 30%, var(--gold) 70%, transparent)",
            }}
          />

          <div className="space-y-8 md:space-y-14">
            {STEPS.map(([number, title, description], index) => (
              <motion.div
                key={number}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -60 : 60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-60px",
                }}
                transition={{
                  duration: 0.8,
                }}
                className={`grid gap-6 md:grid-cols-2 md:items-center ${
                  index % 2 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div
                  className={`glass-strong rounded-3xl p-8 md:p-10 [direction:ltr] ${
                    index % 2 ? "md:text-right" : ""
                  }`}
                >
                  <div className="font-display text-6xl leading-none text-gold-gradient md:text-7xl">
                    {number}
                  </div>

                  <h3 className="mt-3 font-display text-2xl text-white md:text-3xl">
                    {title}
                  </h3>

                  <p className="mt-3 text-white/60">{description}</p>
                </div>

                <div className="relative hidden items-center justify-center [direction:ltr] md:flex">
                  <div className="relative h-16 w-16 rounded-full bg-gold-gradient shadow-[0_0_40px_rgba(212,175,55,0.6)] animate-pulse-gold">
                    <div className="absolute inset-2 rounded-full border border-black/40" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    name: "Adewale O.",
    role: "CEO, Lagos",
    text: "The most compliments I've ever received on a suit. The fit is unreal.",
    init: "AO",
  },
  {
    name: "Chinedu M.",
    role: "Groom",
    text: "Wedding day perfection. Every guest asked where the suit was made.",
    init: "CM",
  },
  {
    name: "Femi B.",
    role: "Convocation '25",
    text: "Walked across that stage feeling like the version of me I always wanted.",
    init: "FB",
  },
  {
    name: "Tunde S.",
    role: "Investment Banker",
    text: "This is what bespoke should feel like. Nothing else compares.",
    init: "TS",
  },
  {
    name: "Kunle A.",
    role: "Barrister",
    text: "Court, dinner, boardroom — one suit handles it all with authority.",
    init: "KA",
  },
  {
    name: "Emeka R.",
    role: "MC & Speaker",
    text: "Every stage feels like mine when I'm wearing Top Dawg.",
    init: "ER",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="CLIENT VOICES"
          title='Worn by <span class="text-gold-gradient italic">Leaders</span>'
        />
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />

        <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />

        <div
          className="flex animate-marquee gap-6 px-6"
          style={{ animationDuration: "50s" }}
        >
          {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
            <div
              key={index}
              className="w-[340px] shrink-0 rounded-3xl glass p-7"
            >
              <div className="mb-3 flex text-[color:var(--gold)]">★★★★★</div>

              <p className="leading-relaxed text-white/80">
                "{testimonial.text}"
              </p>

              <div className="mt-5 flex items-center gap-3 border-t border-[color:var(--gold)]/15 pt-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-gradient font-display text-sm font-bold text-black">
                  {testimonial.init}
                </div>

                <div>
                  <div className="font-display text-white">
                    {testimonial.name}
                  </div>

                  <div className="font-ui text-[10px] tracking-[0.2em] text-white/50">
                    {testimonial.role.toUpperCase()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    cBusiness,
    cWedding,
    cConvocation,
    cTraditional,
    cExecutive,
    cTuxedo,
    cWedding,
    cBusiness,
    cTuxedo,
  ];

  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="THE GALLERY"
          title='Moments in <span class="text-gold-gradient italic">Bespoke</span>'
          sub="A curated look at the suits, the fittings, and the stages they've owned — crafted under the Sharpman brand."
        />

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: (index % 3) * 0.08,
              }}
              className={`group relative mb-4 overflow-hidden rounded-2xl border border-[color:var(--gold)]/15 break-inside-avoid ${
                index % 3 === 1
                  ? "aspect-[3/4]"
                  : index % 3 === 2
                    ? "aspect-square"
                    : "aspect-[4/5]"
              }`}
            >
              <img
                src={image}
                alt={`MagicHands bespoke suit — Top Dawg Suit collection piece ${index + 1} by Oyenuga Joshua (Sharpman)`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="glass rounded-xl px-3 py-2">
                  <div className="font-ui text-[9px] tracking-[0.3em] text-[color:var(--gold)]">
                    TOP DAWG
                  </div>

                  <div className="font-display text-white">
                    Bespoke Piece #{index + 1}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  [
    "How long does a bespoke suit take?",
    "Standard turnaround is 2–3 weeks from measurements to delivery. Rush orders can be accommodated with a surcharge.",
  ],
  [
    "Do you offer virtual consultations?",
    "Yes. We run virtual fittings for clients outside Lagos with a self-measurement kit sent to your door.",
  ],
  [
    "What is your alteration policy?",
    "All Top Dawg suits come with free alterations for life. Your body changes; we keep the fit perfect.",
  ],
  [
    "What fabrics do you use?",
    "We stock Super 130s to 180s wools, silk blends, cashmere, and specialty fabrics from Italy and England.",
  ],
  [
    "Do you deliver nationwide?",
    "Yes — nationwide across Nigeria, and internationally on request.",
  ],
];

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader
          eyebrow="FAQ"
          title='Answered <span class="text-gold-gradient italic">Clearly</span>'
        />

        <div className="space-y-3">
          {FAQS.map(([question, answer], index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-[color:var(--gold)]/20 bg-[#0a0806]/60"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-[color:var(--gold)]/5"
              >
                <span className="font-display text-lg text-white md:text-xl">
                  {question}
                </span>

                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[color:var(--gold)]/40 text-[color:var(--gold)] transition-transform ${
                    open === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <div className="px-6 pb-6 text-white/70 leading-relaxed">
                      {answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you. Our atelier will be in touch within 24 hours.");
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(212,175,55,0.1), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="BOOK YOUR APPOINTMENT"
          title='Step Into the <span class="text-gold-gradient italic">Atelier</span>'
          sub="Reserve your consultation. A master tailor will guide you personally."
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="glass-strong rounded-3xl p-8 md:p-10"
          >
            <div className="grid gap-5 md:grid-cols-2">
              {[
                ["Full Name", "text", "name"],
                ["Email", "email", "email"],
                ["Phone", "tel", "phone"],
                ["Occasion", "text", "occasion"],
              ].map(([label, type, name]) => (
                <div key={name} className="relative">
                  <label className="font-ui text-[10px] tracking-[0.3em] text-[color:var(--gold)]">
                    {label.toUpperCase()}
                  </label>

                  <input
                    type={type}
                    name={name}
                    required
                    className="mt-2 w-full rounded-xl border border-[color:var(--gold)]/20 bg-black/40 px-4 py-3 text-white outline-none transition-all focus:border-[color:var(--gold)] focus:ring-2 focus:ring-[color:var(--gold)]/30"
                  />
                </div>
              ))}

              <div className="md:col-span-2">
                <label className="font-ui text-[10px] tracking-[0.3em] text-[color:var(--gold)]">
                  PREFERRED DATE
                </label>

                <input
                  type="date"
                  className="mt-2 w-full rounded-xl border border-[color:var(--gold)]/20 bg-black/40 px-4 py-3 text-white outline-none focus:border-[color:var(--gold)]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="font-ui text-[10px] tracking-[0.3em] text-[color:var(--gold)]">
                  TELL US ABOUT YOUR VISION
                </label>

                <textarea
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-[color:var(--gold)]/20 bg-black/40 px-4 py-3 text-white outline-none focus:border-[color:var(--gold)]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-4 font-ui text-xs font-semibold uppercase tracking-[0.25em] text-black shadow-[0_20px_50px_-15px_rgba(212,175,55,0.6)] transition-transform hover:scale-[1.02]"
            >
              Reserve Consultation
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </form>

          {/* Contact Information */}
          <div className="space-y-5">
            {[
              ["ATELIER", "By appointment · Lagos, Nigeria"],
              ["WHATSAPP", "+234 812 372 9433"],
              ["SNAPCHAT", "ade_remi8746"],
              ["TIKTOK", "@topdawg.suit"],
              ["HOURS", "Mon–Sat · 10:00 – 19:00"],
            ].map(([title, value]) => (
              <div key={title} className="glass rounded-2xl p-5">
                <div className="font-ui text-[10px] tracking-[0.35em] text-[color:var(--gold)]">
                  {title}
                </div>

                <div className="mt-1 font-display text-lg text-white">
                  {value}
                </div>
              </div>
            ))}

            <div className="relative h-56 overflow-hidden rounded-2xl border border-[color:var(--gold)]/20">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(212,175,55,0.08) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(212,175,55,0.08) 1px, transparent 1px),
                    radial-gradient(circle at 60% 40%, rgba(212,175,55,0.3), transparent 40%)
                  `,
                  backgroundSize: "30px 30px, 30px 30px, 100% 100%",
                  backgroundColor: "#0a0806",
                }}
              />

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="mx-auto h-8 w-8 rounded-full bg-gold-gradient animate-pulse-gold" />

                <div className="mt-2 font-ui text-[10px] tracking-[0.3em] text-[color:var(--gold)]">
                  TOP DAWG ATELIER
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert("Welcome to the atelier list.");
  };

  return (
    <footer className="relative border-t border-[color:var(--gold)]/20 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo />

            <p className="mt-5 max-w-sm text-white/60">
              A bespoke atelier for the gentleman who understands that a suit is
              a statement — not a garment.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {["IG", "TT", "SC", "WA"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--gold)]/30 font-ui text-[10px] tracking-widest text-[color:var(--gold)] transition-all hover:bg-gold-gradient hover:text-black"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="mb-4 font-ui text-[10px] tracking-[0.3em] text-[color:var(--gold)]">
              EXPLORE
            </div>

            <ul className="space-y-2 text-white/60">
              {NAV.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="hover:text-[color:var(--gold)]">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <div className="mb-4 font-ui text-[10px] tracking-[0.3em] text-[color:var(--gold)]">
              NEWSLETTER
            </div>

            <p className="mb-3 text-sm text-white/60">
              Exclusive drops and atelier invitations.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="flex overflow-hidden rounded-full border border-[color:var(--gold)]/30 bg-black/40"
            >
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/30"
              />

              <button
                type="submit"
                className="bg-gold-gradient px-4 font-ui text-[10px] font-semibold uppercase tracking-[0.2em] text-black"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-[color:var(--gold)]/15 pt-6 md:flex-row">
          <div className="font-ui text-[10px] tracking-[0.3em] text-white/40">
            © {new Date().getFullYear()} TOP DAWG SUIT · PART OF THE{" "}
            <a
              href="https://sharpman.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--gold)]/60 transition-colors hover:text-[color:var(--gold)]"
            >
              SHARPMAN
            </a>{" "}
            PORTFOLIO
          </div>

          <div className="font-ui text-[10px] tracking-[0.3em] text-white/40">
            CRAFTED IN LAGOS
          </div>
        </div>

        <FooterAttribution />
      </div>
    </footer>
  );
}

function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/2348123729433"
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient shadow-[0_20px_50px_-10px_rgba(212,175,55,0.7)] animate-pulse-gold"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-black"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12a11.9 11.9 0 0 0 1.64 6L0 24l6.2-1.62A12 12 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52ZM12 22a9.9 9.9 0 0 1-5.06-1.39l-.36-.21-3.68.96.98-3.59-.24-.37A9.94 9.94 0 1 1 22 12c0 5.52-4.48 10-10 10Zm5.44-7.5c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.63.07-.3-.15-1.24-.46-2.36-1.47-.87-.78-1.46-1.74-1.63-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.34.44-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.5-.66-.5H8.5c-.2 0-.5.07-.77.37-.27.3-1.02 1-1.02 2.44 0 1.44 1.04 2.83 1.19 3.03.15.2 2.05 3.13 4.96 4.39 2.9 1.25 2.9.83 3.42.78.52-.05 1.68-.68 1.92-1.34.24-.66.24-1.22.17-1.34-.07-.12-.27-.2-.57-.34Z" />
      </svg>

      <span className="absolute right-16 whitespace-nowrap rounded-full glass-strong px-3 py-1.5 font-ui text-[10px] tracking-[0.2em] text-white opacity-0 transition-opacity group-hover:opacity-100">
        CHAT ON WHATSAPP
      </span>
    </a>
  );
}

function Home() {
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
}

export default Home;