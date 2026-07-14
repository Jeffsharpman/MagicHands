import { DEVELOPER } from "./SEOHead";

export default function AboutDeveloper() {
  return (
    <section
      id="developer"
      className="relative overflow-hidden border-t border-[color:var(--gold)]/10 bg-gradient-to-b from-[#0a0806] to-black py-20 md:py-28"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.08), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="mb-4 font-ui text-[10px] tracking-[0.4em] text-[color:var(--gold)]/60">
          BUILT BY
        </div>

        <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
          Oyenuga Joshua{" "}
          <span className="text-gold-gradient italic">(Sharpman)</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-white/60 leading-relaxed">
          <strong className="text-white/80">Sharpman</strong> is the personal
          web development and digital solutions brand founded by{" "}
          <strong className="text-white/80">Oyenuga Joshua</strong> — a Full
          Stack Web Developer based in Ikorodu, Lagos, Nigeria. Sharpman
          specializes in crafting custom websites, web applications, restaurant
          sites, business platforms, landing pages, portfolios, e-commerce
          solutions, admin dashboards, and SEO-optimized digital experiences
          using modern technologies like React and Laravel.
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-white/50 leading-relaxed">
          <strong className="text-[color:var(--gold)]">MagicHands</strong> is
          one of several projects developed by Oyenuga Joshua under the Sharpman
          brand — each built with attention to performance, design, and real-world
          impact.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={DEVELOPER.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 font-ui text-xs font-semibold uppercase tracking-[0.2em] text-black transition-transform hover:scale-[1.03]"
          >
            Explore the Sharpman Portfolio
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>

          <a
            href={DEVELOPER.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/30 px-7 py-3.5 font-ui text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)] transition-all hover:bg-[color:var(--gold)]/10"
          >
            View more projects by Sharpman
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {[
            {
              label: "Portfolio",
              href: DEVELOPER.portfolio,
              icon: "🔗",
            },
            {
              label: "GitHub",
              href: DEVELOPER.github,
              icon: (
                <svg viewBox="0 0 24 24" className="inline h-4 w-4 fill-current">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              ),
            },
            {
              label: "LinkedIn",
              href: DEVELOPER.linkedin,
            },
            {
              label: "X / Twitter",
              href: DEVELOPER.twitter,
            },
            {
              label: "Instagram",
              href: DEVELOPER.instagram,
            },
            {
              label: "YouTube",
              href: DEVELOPER.youtube,
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-[color:var(--gold)]/20 bg-[#0a0806]/60 px-4 py-2 font-ui text-[10px] tracking-[0.2em] text-white/60 transition-all hover:border-[color:var(--gold)]/50 hover:text-[color:var(--gold)]"
            >
              {link.icon && <span>{link.icon}</span>}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
