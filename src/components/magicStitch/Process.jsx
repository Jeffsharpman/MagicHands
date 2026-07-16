import { motion } from "motion/react";
import SectionHeader from "../ui/SectionHeader";

const STEPS = [
  [
    "01",
    "Consultation",
    "A one-on-one session — in-person at our Lagos atelier or virtual — to understand what you need, your style preferences, and the occasion.",
  ],
  [
    "02",
    "Measurement & Selection",
    "Body measurements taken by a master tailor, plus fabric and material selection. These numbers and choices drive every cut and detail.",
  ],
  [
    "03",
    "Construction",
    "Each piece is built by hand using traditional methods — reinforced seams, quality stitching, and tested materials. Nothing is rushed.",
  ],
  [
    "04",
    "Quality Check",
    "Every piece is inspected for stitching, fit, material quality, and finishing. If it does not meet our standard, it does not leave the atelier.",
  ],
  [
    "05",
    "Delivery",
    "Final pressing, quality check, and presentation in signature packaging. Your order is documented for future alterations or reorders.",
  ],
];

function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="HOW IT WORKS"
          title='From Order to <span class="text-gold-gradient italic">Delivery</span>'
          sub="Five steps. No shortcuts. Every stage is quality-checked before moving to the next."
        />

        <div className="relative">
          <div
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block"
            style={{
              background:
                "linear-gradient(180deg, transparent, var(--primary) 30%, var(--primary) 70%, transparent)",
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

                  <h3 className="mt-3 font-display text-2xl text-fg md:text-3xl">
                    {title}
                  </h3>

                  <p className="mt-3 text-fg/60">{description}</p>
                </div>

                <div className="relative hidden items-center justify-center [direction:ltr] md:flex">
                  <div className="relative h-16 w-16 rounded-full bg-gold-gradient shadow-[0_0_40px_color-mix(in_srgb,var(--primary)_60%,transparent)] animate-pulse-gold">
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

export default Process;
