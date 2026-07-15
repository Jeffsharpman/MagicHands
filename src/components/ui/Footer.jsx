import Logo from "./Logo";
import FooterAttribution from "../seo/FooterAttribution";

const NAV = [
  ["Home", "#home"],
  ["Collections", "#collections"],
  ["About", "#about"],
  ["Style Lab", "#occasions"],
  ["Testimonials", "#testimonials"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"],
];

function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert("Welcome to the atelier list.");
  };

  return (
    <footer className="relative border-t border-(--gold)/20 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo />

            <p className="mt-5 max-w-sm text-white/60">
              A fashion brand built on quality-first principles — every piece
              designed for fit, durability, and real-world use.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {[
                { label: "IG", href: "https://www.instagram.com/sharpman_dev" },
                { label: "TT", href: "https://www.tiktok.com/@sharpman.dev" },
                { label: "X", href: "https://x.com/sharpman_dev" },
                { label: "YT", href: "https://youtube.com/@sharpman_dev" },
                { label: "WA", href: "https://wa.me/2349070281022" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-(--gold)/30 font-ui text-[10px] tracking-widest text-(--gold) transition-all hover:bg-gold-gradient hover:text-black"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="mb-4 font-ui text-[10px] tracking-[0.3em] text-(--gold)">
              EXPLORE
            </div>

            <ul className="space-y-2 text-white/60">
              {NAV.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="hover:text-(--gold)">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <div className="mb-4 font-ui text-[10px] tracking-[0.3em] text-(--gold)">
              NEWSLETTER
            </div>

            <p className="mb-3 text-sm text-white/60">
              Exclusive drops and atelier invitations.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="flex overflow-hidden rounded-full border border-(--gold)/30 bg-black/40"
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
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-(--gold)/15 pt-6 md:flex-row">
          <div className="font-ui text-[10px] tracking-[0.3em] text-white/40">
            © {new Date().getFullYear()} MAGIC HANDS · PART OF THE{" "}
            <a
              href="https://sharpman.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--gold)/60 transition-colors hover:text-(--gold)"
            >
              SHARPMAN
            </a>{" "}
            PORTFOLIO
          </div>

          <div className="font-ui text-[10px] tracking-[0.3em] text-white/40">
            HANDMADE IN LAGOS, NIGERIA
          </div>
        </div>

        <FooterAttribution />
      </div>
    </footer>
  );
}

export default Footer