import SectionHeader from "./SectionHeader";
import Button from "./Button";
import Eyebrow from "./Eyebrow";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you. We will be in touch within 24 hours via WhatsApp or email.");
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at top, color-mix(in srgb, var(--primary) 10%, transparent), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="GET IN TOUCH"
          title='Start Your <span class="text-gold-gradient italic">Order</span>'
          sub="Schedule a consultation or place a remote order. We respond within 24 hours via WhatsApp or email."
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
                  <Eyebrow as="label">{label.toUpperCase()}</Eyebrow>

                  <input
                    type={type}
                    name={name}
                    required
                    placeholder={name === "occasion" ? "Wedding, graduation, boardroom..." : ""}
                    className="mt-2 w-full rounded-xl border border-(--primary)/20 bg-surface/40 px-4 py-3 text-fg outline-none transition-all focus:border-(--primary) focus:ring-2 focus:ring-(--primary)/30"
                  />
                </div>
              ))}

              <div className="md:col-span-2">
                <Eyebrow as="label">PREFERRED DATE</Eyebrow>

                <input
                  type="date"
                  className="mt-2 w-full rounded-xl border border-(--primary)/20 bg-surface/40 px-4 py-3 text-fg outline-none focus:border-(--primary)"
                />
              </div>

              <div className="md:col-span-2">
                <Eyebrow as="label">DESCRIBE YOUR OCCASION OR STYLE PREFERENCE</Eyebrow>

                <textarea
                  rows={4}
                  placeholder="Tell us about the occasion, your style preferences, or any specific requirements..."
                  className="mt-2 w-full rounded-xl border border-(--primary)/20 bg-surface/40 px-4 py-3 text-fg outline-none focus:border-(--primary)"
                />
              </div>
            </div>

            <Button type="submit" size="lg" shadow="button" arrow className="mt-7 w-full justify-center">
              Reserve Consultation
            </Button>
          </form>

          {/* Contact Information */}
            <div className="space-y-5">
              {[
                ["ATELIER", "By appointment only · Lagos, Nigeria"],
                ["WHATSAPP", "+234 907 028 1022"],
                ["EMAIL", "buildwithsharpman@gmail.com"],
                ["HOURS", "Mon–Fri · 9:00 – 18:00 WAT"],
              ].map(([title, value]) => (
                <div key={title} className="glass rounded-2xl p-5">
                  <div className="font-ui text-[10px] tracking-[0.35em] text-(--primary)">
                    {title}
                  </div>

                  <div className="mt-1 font-display text-lg text-fg">
                    {value}
                  </div>
                </div>
              ))}

              <div className="flex flex-wrap gap-2">
                {[
                  { label: "@sharpman_dev", href: "https://www.instagram.com/sharpman_dev" },
                  { label: "@sharpman.dev", href: "https://www.tiktok.com/@sharpman.dev" },
                  { label: "@sharpman_dev", href: "https://x.com/sharpman_dev" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-(--primary)/20 bg-surface-card/60 px-4 py-2 font-ui text-[10px] tracking-[0.2em] text-fg/60 transition-all hover:border-(--primary)/50 hover:text-(--primary)"
                  >
                    {social.label}
                  </a>
                ))}
              </div>

            <div className="relative h-56 overflow-hidden rounded-2xl border border-(--primary)/20">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(color-mix(in srgb, var(--primary) 8%, transparent) 1px, transparent 1px),
                    linear-gradient(90deg, color-mix(in srgb, var(--primary) 8%, transparent) 1px, transparent 1px),
                    radial-gradient(circle at 60% 40%, color-mix(in srgb, var(--primary) 30%, transparent), transparent 40%)
                  `,
                  backgroundSize: "30px 30px, 30px 30px, 100% 100%",
                  backgroundColor: "var(--surface-card)",
                }}
              />

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="mx-auto h-8 w-8 rounded-full bg-gold-gradient animate-pulse-gold" />

                <div className="mt-2 font-ui text-[10px] tracking-[0.3em] text-(--primary)">
                  MAGIC STITCH ATELIER
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
