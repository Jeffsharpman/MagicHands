import {
  Diamond,
  Heart,
  Ruler,
  Scissors,
  Shield,
  Sparkles,
  Timer,
} from "lucide-react";
import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";

const WHY = [
  {
    icon: <Diamond className="h-5 w-5" />,
    title: "Premium Materials",
    desc: "We source fabrics from Italian and English mills, leather from trusted tanneries, and fragrances from established perfumers. Every material is tested for quality before it enters our supply chain.",
  },
  {
    icon: <Scissors className="h-5 w-5" />,
    title: "Custom Fit",
    desc: "Generic sizing assumes average proportions. Every MagicStitch tailored piece starts with body-specific measurements — the fit is built for your frame, not a mannequin.",
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Built to Last",
    desc: "Fast fashion falls apart after a few washes. Our construction methods — reinforced seams, quality stitching, and tested materials — are designed for years of regular use.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Direct from Source",
    desc: "We cut out the middleman. Fabric, leather, and materials are selected directly from mills and suppliers, then stored in our Lagos atelier for immediate access.",
  },
  {
    icon: <Ruler className="h-5 w-5" />,
    title: "Tailored to Order",
    desc: "Off-the-rack pieces assume one size fits all. Our pattern-making and construction are done per client — every seam, cut, and detail is positioned for your specific body.",
  },
  {
    icon: <Timer className="h-5 w-5" />,
    title: "Fast Turnaround",
    desc: "Custom usually means waiting weeks. We optimized our workflow to deliver in 2–3 weeks without cutting corners on material quality or finishing.",
  },
  {
    icon: <Heart className="h-5 w-5" />,
    title: "Free Alterations",
    desc: "Bodies change over time. Every MagicStitch tailored piece includes free alterations for life — your clothes should always fit the way they do right now.",
  },
];

function WhyUs() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, color-mix(in srgb, var(--primary) 8%, transparent), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="WHY MAGICSTITCH"
          title='Why MagicStitch <span class="text-gold-gradient italic">Is Different</span>'
          sub="Seven decisions that separate a well-made fashion brand from a well-marketed one. Designed and engineered by Oyenuga Joshua under the Sharpman brand."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {WHY.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: (index % 4) * 0.08,
              }}
              className="group relative overflow-hidden rounded-2xl border border-(--primary)/15 bg-surface-card/70 p-7 transition-all hover:-translate-y-1 hover:border-(--primary)/50"
            >
              <div
                className="absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                style={{
                  background: "var(--gradient-primary)",
                }}
              />

              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-(--primary)/40 bg-surface text-(--primary) transition-transform group-hover:rotate-45 group-hover:scale-110">
                  {item.icon}
                </div>

                <h3 className="font-display text-xl text-fg">{item.title}</h3>

                <p className="mt-2 text-sm text-fg/60">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
