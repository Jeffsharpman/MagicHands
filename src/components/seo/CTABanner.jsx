import Button from "../ui/Button";
import Eyebrow from "../ui/Eyebrow";

export default function CTABanner({
  eyebrow = "READY TO START?",
  title = 'Let\'s Build <span class="text-gold-gradient italic">Something</span>',
  description = "Every project starts with a conversation. Tell us what you need — we will respond within 24 hours.",
  buttonText = "Start Your Order",
  buttonHref = "#contact",
  className = "",
}) {
  return (
    <section
      className={`relative overflow-hidden py-20 md:py-28 ${className}`}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, color-mix(in srgb, var(--primary) 12%, transparent), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Eyebrow as="div" color="muted" className="mb-4">
          {eyebrow}
        </Eyebrow>

        <h2
          className="font-display text-3xl font-bold tracking-tight text-fg md:text-4xl"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <p className="mx-auto mt-4 max-w-xl text-fg/60 leading-relaxed">
          {description}
        </p>

        <div className="mt-8">
          <Button href={buttonHref} size="lg" shadow="glow-md" arrow>
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
