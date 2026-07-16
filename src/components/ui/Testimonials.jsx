import { Star } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Card from "./Card";

const TESTIMONIALS = [
  {
    name: "Adewale O.",
    role: "CEO, Lagos",
    text: "The fit on my tailored shirt and trousers is unreal. I stopped buying off-the-rack after my first order.",
    init: "AO",
  },
  {
    name: "Chinedu M.",
    role: "Groom",
    text: "Wedding outfit arrived on time, fit was perfect from the first try. No alterations needed — rare for custom clothing.",
    init: "CM",
  },
  {
    name: "Femi B.",
    role: "Convocation '25",
    text: "Walked across that stage in a MagicStitch outfit and understood what well-made clothing actually does for your confidence.",
    init: "FB",
  },
  {
    name: "Tunde S.",
    role: "Investment Banker",
    text: "Replaced my entire work wardrobe with MagicStitch pieces. The fabric, the stitching, the fit — the difference is real, not just branding.",
    init: "TS",
  },
  {
    name: "Kunle A.",
    role: "Barrister",
    text: "Court, dinner, boardroom — MagicStitch pieces handle all three. The quality holds up to twelve-hour days without losing shape.",
    init: "KA",
  },
  {
    name: "Emeka R.",
    role: "MC & Speaker",
    text: "Stage lighting exposes every flaw. MagicStitch pieces hold up under any condition. I have never had to adjust or worry once.",
    init: "ER",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="WHAT OUR CLIENTS SAY"
          title='Built to <span class="text-gold-gradient italic">Perform</span>'
        />
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent" />

        <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent" />

        <div
          className="flex animate-marquee gap-6 px-6"
          style={{ animationDuration: "50s" }}
        >
          {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
            <Card key={index} variant="glass" rounded="3xl" padding="p-7" className="w-[340px] shrink-0">
              <div
                className="mb-3 flex gap-0.5 text-(--primary)"
                aria-label="5 out of 5 stars"
              >
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <p className="leading-relaxed text-fg/80">
                "{testimonial.text}"
              </p>

              <div className="mt-5 flex items-center gap-3 border-t border-(--primary)/15 pt-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-gradient font-display text-sm font-bold text-black">
                  {testimonial.init}
                </div>

                <div>
                  <div className="font-display text-fg">
                    {testimonial.name}
                  </div>

                  <div className="font-ui text-[10px] tracking-[0.2em] text-fg/50">
                    {testimonial.role.toUpperCase()}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
