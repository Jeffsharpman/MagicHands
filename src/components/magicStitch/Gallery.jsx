import { motion } from "motion/react";
import SectionHeader from "../ui/SectionHeader";
import Badge from "../ui/Badge";
import cTraditional from "../../assets/collection-traditional.jpg";
import cBusiness from "../../assets/collection-business.jpg";
import cAccessories from "../../assets/collection-accessories.jpg";
import cFootwear from "../../assets/collection-footwear.jpg";
import cFragrance from "../../assets/collection-fragrance.jpg";
import cTuxedo from "../../assets/collection-tuxedo.jpg";
import cExecutive from "../../assets/collection-executive.jpg";
import cWedding from "../../assets/collection-wedding.jpg";
import cConvocation from "../../assets/collection-convocation.jpg";

function Gallery() {
  const pieces = [
    {
      img: cBusiness,
      title: "Onyx Two-Piece",
      category: "Tailored Clothing",
      material: "Super 150s Wool",
      detail: "Peak lapel, half-canvas construction",
    },
    {
      img: cAccessories,
      title: "Silk Pocket Square Set",
      category: "Accessories",
      material: "Italian Silk",
      detail: "Hand-rolled edges, set of 3",
    },
    {
      img: cFootwear,
      title: "Oxford Derby",
      category: "Footwear",
      material: "Full-Grain Leather",
      detail: "Blake-stitched sole, leather lining",
    },
    {
      img: cTraditional,
      title: "Senator Wear",
      category: "Traditional Wear",
      material: "Cotton-Silk Blend",
      detail: "Hand-embroidered neckline",
    },
    {
      img: cFragrance,
      title: "Oud & Gold",
      category: "Fragrance",
      material: "Concentrated Eau de Parfum",
      detail: "100ml, 12+ hour longevity",
    },
    {
      img: cTuxedo,
      title: "Midnight Tuxedo",
      category: "Luxury Collections",
      material: "Wool-Silk Blend",
      detail: "Satin peak lapel, jetted pockets",
    },
    {
      img: cExecutive,
      title: "Boardroom Stripe",
      category: "Tailored Clothing",
      material: "Super 130s Wool",
      detail: "Double vents, functioning cuffs",
    },
    {
      img: cWedding,
      title: "Ivory Dinner Jacket",
      category: "Luxury Collections",
      material: "Wool-Mohair Blend",
      detail: "Shawl lapel, single-button closure",
    },
    {
      img: cConvocation,
      title: "Graduation Classic",
      category: "Tailored Clothing",
      material: "Super 120s Wool",
      detail: "Notch lapel, slim fit construction",
    },
  ];

  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="COLLECTION GALLERY"
          title='Craftsmanship in <span class="text-gold-gradient italic">Detail</span>'
          sub="Each piece is constructed using traditional methods and premium materials. Every item is made to order — built to your specifications."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pieces.map((piece, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: (index % 3) * 0.08,
              }}
              className="group relative overflow-hidden rounded-2xl border border-(--primary)/15 bg-surface-card"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={piece.img}
                  alt={`${piece.title} — ${piece.category}, MagicStitch custom-tailored`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />

                <div className="absolute left-3 top-3">
                  <Badge variant="solid">{piece.category.toUpperCase()}</Badge>
                </div>
              </div>

              <div className="relative p-5">
                <h3 className="font-display text-lg text-fg">
                  {piece.title}
                </h3>

                <div className="mt-2 flex items-center gap-3 text-fg/50">
                  <span className="font-ui text-[10px] tracking-[0.15em]">
                    {piece.material}
                  </span>
                  <span className="text-(--primary)/40">·</span>
                  <span className="font-ui text-[10px] tracking-[0.15em]">
                    {piece.detail}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
