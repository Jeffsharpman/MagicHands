import SectionHeader from "./SectionHeader";

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
            "radial-gradient(ellipse at top, color-mix(in srgb, var(--primary) 10%, transparent), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="GET IN TOUCH"
          title='Start Your <span class="text-gold-gradient italic">Order</span>'
          sub="Schedule a consultation or place a remote order. Every piece starts with a conversation about what you need."
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
                  <label className="font-ui text-[10px] tracking-[0.3em] text-(--primary)">
                    {label.toUpperCase()}
                  </label>

                  <input
                    type={type}
                    name={name}
                    required
                    className="mt-2 w-full rounded-xl border border-(--primary)/20 bg-surface/40 px-4 py-3 text-fg outline-none transition-all focus:border-(--primary) focus:ring-2 focus:ring-(--primary)/30"
                  />
                </div>
              ))}

              <div className="md:col-span-2">
                <label className="font-ui text-[10px] tracking-[0.3em] text-(--primary)">
                  PREFERRED DATE
                </label>

                <input
                  type="date"
                  className="mt-2 w-full rounded-xl border border-(--primary)/20 bg-surface/40 px-4 py-3 text-fg outline-none focus:border-(--primary)"
                />
              </div>

              <div className="md:col-span-2">
                <label className="font-ui text-[10px] tracking-[0.3em] text-(--primary)">
                  DESCRIBE YOUR OCCASION OR STYLE PREFERENCE
                </label>

                <textarea
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-(--primary)/20 bg-surface/40 px-4 py-3 text-fg outline-none focus:border-(--primary)"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-4 font-ui text-xs font-semibold uppercase tracking-[0.25em] text-black shadow-[var(--shadow-primary-button)] transition-transform hover:scale-[1.02]"
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
              ["ATELIER", "By appointment only · Lagos, Nigeria"],
              ["WHATSAPP", "+234 907 028 1022"],
              ["TIKTOK", "@sharpman.dev"],
              ["INSTAGRAM", "@sharpman_dev"],
              ["HOURS", "Mon–Sat · 10:00 – 19:00"],
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
                  MAGIC HANDS ATELIER
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
