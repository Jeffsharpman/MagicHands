import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionHeader from "./SectionHeader";
import Card from "./Card";
const FAQS = [
  [
    "How long does a custom order take?",
    "Standard turnaround is 2–3 weeks from order to delivery. This includes material selection, construction, quality check, and finishing. Rush orders are available for time-sensitive occasions.",
  ],
  [
    "Do you offer virtual consultations?",
    "Yes. Clients outside Lagos can order remotely. We guide you through measurements, material selection, and fitting via video call. Adjustments are made upon delivery if needed.",
  ],
  [
    "What is your alteration policy?",
    "Every MagicStitch tailored piece includes free alterations for life. Bodies change over time — your clothes should always fit the way they do right now.",
  ],
  [
    "What materials do you use?",
    "We source fabrics from Italian and English mills, leather from trusted tanneries, and fragrances from established perfumers. Every material is tested for quality before it enters our collection.",
  ],
  [
    "Do you deliver nationwide?",
    "Yes — delivery covers all states across Nigeria. International shipping is available on request. Every order is packed with care and includes handling instructions.",
  ],
];

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader
          eyebrow="FREQUENTLY ASKED"
          title='Everything <span class="text-gold-gradient italic">Answered</span>'
        />

        <div className="space-y-3">
          {FAQS.map(([question, answer], index) => (
            <Card key={index} variant="accent" className="overflow-hidden">
              <button
                onClick={() => setOpen(open === index ? null : index)}
                aria-expanded={open === index}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-(--primary)/5"
              >
                <span className="font-display text-lg text-fg md:text-xl">
                  {question}
                </span>

                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-(--primary)/40 text-(--primary) transition-transform ${
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
                    <div className="px-6 pb-6 text-fg/70 leading-relaxed">
                      {answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
