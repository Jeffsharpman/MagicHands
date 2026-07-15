import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Particles from "../ui/Particles";
import heroImage from "../../assets/hero-suit.jpg";

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
            MagicHands — Premium Fashion Brand by Sharpman
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.6 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-(--gold)/30 bg-white/[0.03] px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-(--gold) animate-pulse" />

            <span className="font-ui text-[10px] tracking-[0.35em] text-(--gold)">
              FASHION BRAND · EST. 2019 · LAGOS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 1.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="font-display text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-[5.5rem]"
          >
            <span className="block text-white">Fashion Built</span>

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
              for You.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.1 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg lg:mx-0 mx-auto"
          >
            Custom-tailored clothing, accessories, footwear, and fragrances
            designed for the moments that matter. Every piece is made with
            precision — not mass-produced.
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
              <span className="relative z-10">Book a Consultation</span>

              <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-700 group-hover:translate-x-full" />
            </a>

            <a
              href="#collections"
              className="group inline-flex items-center gap-2 rounded-full border border-(--gold)/40 px-8 py-4 font-ui text-xs font-semibold uppercase tracking-[0.25em] text-(--gold) transition-colors hover:bg-(--gold)/10"
            >
              View Collections
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6, duration: 1 }}
            className="mt-14 grid grid-cols-3 gap-6 border-t border-(--gold)/15 pt-6 max-w-md lg:mx-0 mx-auto"
          >
            {[
              ["1,200+", "Pieces delivered"],
              ["6+", "Years of craft"],
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

          <div className="absolute bottom-2 left-1/2 h-8 w-72 -translate-x-1/2 rounded-full border border-(--gold)/40 opacity-70 blur-[1px]" />

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
                  src={heroImage}
                  alt="MagicHands premium black double-breasted suit — designed by Oyenuga Joshua (Sharpman)"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
                  <div>
                    <div className="font-ui text-[10px] tracking-[0.35em] text-(--gold)/80">
                      SIGNATURE COLLECTION
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
                <div className="font-ui text-[9px] tracking-[0.3em] text-(--gold)">
                  PREMIUM MATERIALS
                </div>

                <div className="font-display text-sm text-white">
                  Italian & English Mills
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-2 bottom-32 glass rounded-2xl px-4 py-3 shadow-[var(--shadow-elegant)]"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <div className="font-ui text-[9px] tracking-[0.3em] text-(--gold)">
                  QUALITY GUARANTEE
                </div>

                <div className="font-display text-sm text-white">
                  Made to Last
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
          className="h-8 w-px bg-gradient-to-b from-(--gold) to-transparent"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </motion.div>

    </section>
  );
}

export default Hero