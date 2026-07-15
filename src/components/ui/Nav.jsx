import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react"; 
import Logo from "./Logo";

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
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 md:px-10 ${
          scrolled
            ? "glass-strong rounded-full border border-(--gold)/20 mx-4 md:mx-8 px-5"
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
              className="group relative font-ui text-[12px] tracking-[0.2em] text-white/80 transition-colors hover:text-(--gold)"
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
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-(--gold)/30 lg:hidden"
          aria-label="Menu"
        >
          <span
            className={`h-px w-5 bg-(--gold) transition-transform ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />

          <span
            className={`h-px w-5 bg-(--gold) transition-transform ${
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
                  className="font-ui text-sm tracking-[0.2em] text-white/80 hover:text-(--gold)"
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

export default Nav;
