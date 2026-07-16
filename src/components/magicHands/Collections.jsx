import { motion } from "motion/react";
import SectionHeader from "../ui/SectionHeader";
import cBusiness from "../../assets/collection-business.jpg";
import cAccessories from "../../assets/collection-accessories.jpg";
import cFootwear from "../../assets/collection-footwear.jpg";
import cFragrance from "../../assets/collection-fragrance.jpg";
import cTraditionalWear from "../../assets/collection-traditional.jpg";
import cTuxedo from "../../assets/collection-tuxedo.jpg";
const COLLECTIONS = [
  {
    title: "Tailored Clothing",
    desc: "Custom-fit suits, shirts, and trousers built for boardrooms, weddings, and formal events. Each piece is cut to fit your body — not a mannequin.",
    img: cBusiness,
  },
  {
    title: "Accessories",
    desc: "Ties, pocket squares, cufflinks, and belts selected to complete a look. Every accessory is chosen to match or contrast with your outfit.",
    img: cAccessories,
  },
  {
    title: "Footwear",
    desc: "Leather shoes, loafers, and formal footwear made from sourced leather. Designed to pair with tailored clothing for a finished look.",
    img: cFootwear,
  },
  {
    title: "Fragrances",
    desc: "Signature scents built for everyday wear and special occasions. Each fragrance is selected to leave a lasting impression without overpowering.",
    img: cFragrance,
  },
  {
    title: "Traditional Wear",
    desc: "Heritage-inspired clothing that merges Nigerian textile traditions with modern construction. Hand-finished embroidery and detailing on every piece.",
    img: cTraditionalWear,
  },
  {
    title: "Luxury Collections",
    desc: "Limited-run pieces with premium materials and hand-finished details. Designed for occasions where the standard is not enough.",
    img: cTuxedo,
  },
];

function CollectionCard({ c, i }) {
  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay: (i % 3) * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -12 }}
      className="group relative block overflow-hidden rounded-3xl border border-(--primary)/15 bg-surface-card shadow-[var(--shadow-elegant)] transition-all duration-500 hover:border-(--primary)/60 hover:shadow-[var(--shadow-primary-hover)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={c.img}
          alt={`${c.title} — MagicHands collection, designed by Oyenuga Joshua (Sharpman)`}
          loading="lazy"
          width={800}
          height={1000}
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />

        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle at 50% 100%, color-mix(in srgb, var(--primary) 25%, transparent), transparent 60%)",
          }}
        />

        <div className="absolute right-4 top-4 rounded-full glass px-3 py-1.5 font-ui text-[9px] tracking-[0.3em] text-(--primary)">
          NEW
        </div>
      </div>

      <div className="relative p-6 md:p-7">
        <h3 className="font-display text-2xl leading-tight text-fg md:text-3xl">
          {c.title}
        </h3>

        <p className="mt-2 text-sm text-fg/60">{c.desc}</p>

        <div className="mt-5 flex items-center justify-between">
          <span className="font-ui text-[10px] tracking-[0.3em] text-(--primary)">
            EXPLORE →
          </span>

          <span className="font-display text-sm text-fg/40">Collection</span>
        </div>
      </div>
    </motion.a>
  );
}

function Collections() {
  return (
    <section id="collections" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="COLLECTIONS"
          title='Six Lines. <span class="text-gold-gradient italic">One Standard.</span>'
          sub="From tailored clothing to fragrances, each line is built with the same attention to material and construction. The difference is in how it's designed to be used."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COLLECTIONS.map((collection, index) => (
            <CollectionCard key={collection.title} c={collection} i={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collections