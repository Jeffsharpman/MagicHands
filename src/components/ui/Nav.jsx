import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const NAV = [
  ["Home", "#home"],
  ["Collections", "#collections"],
  ["About", "#about"],
  ["Style Lab", "#occasions"],
  ["Testimonials", "#testimonials"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"],
];

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
        scrolled
          ? "px-3 py-2 sm:px-4 lg:px-8"
          : "px-3 py-3 sm:px-4 lg:px-0 lg:py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 ${
          scrolled
            ? "rounded-full border border-(--primary)/20 bg-surface/80 px-4 py-2 backdrop-blur-xl"
            : "px-2 sm:px-4 lg:px-8"
        }`}
      >
        {/* Logo */}
        <a href="#home" className="shrink-0">
          <Logo className="origin-left scale-75 sm:scale-90 lg:scale-100" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center justify-center gap-5 xl:gap-8 lg:flex">
          {NAV.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="group relative font-ui text-[11px] uppercase tracking-[0.14em] text-fg/80 transition-colors duration-300 hover:text-(--primary)"
            >
              {label}

              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-gradient transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-gold-gradient px-4 xl:px-5 py-2 font-ui text-[10px] xl:text-[11px] font-semibold uppercase tracking-[0.15em] text-black shadow-[var(--shadow-primary-glow-sm)] transition duration-300 hover:scale-105"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Navigation"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-(--primary)/30"
          >
            <div className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-1/2 h-[2px] w-full -translate-y-2 bg-(--primary) transition-all duration-300 ${
                  open ? "translate-y-0 rotate-45" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-1/2 h-[2px] w-full bg-(--primary) transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-1/2 h-[2px] w-full translate-y-2 bg-(--primary) transition-all duration-300 ${
                  open ? "translate-y-0 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: 0.3,
            }}
            className="mx-3 mt-3 rounded-3xl border border-(--primary)/15 bg-surface/90 p-6 shadow-xl backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-5">
              {NAV.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="font-ui text-sm uppercase tracking-[0.18em] text-fg/80 transition-colors hover:text-(--primary)"
                >
                  {label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center rounded-full bg-gold-gradient px-5 py-3 font-ui text-xs font-semibold uppercase tracking-[0.18em] text-black transition hover:scale-[1.02]"
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

export default Nav;
