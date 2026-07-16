import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import SectionHeader from "../ui/SectionHeader";
import Badge from "../ui/Badge";
import Eyebrow from "../ui/Eyebrow";
import Button from "../ui/Button";

const FABRIC_COLORS = [
  { name: "Onyx", hex: "#0a0a0a", accent: "#1a1a1a" },
  { name: "Navy", hex: "#0f1a3a", accent: "#1a2a55" },
  { name: "Charcoal", hex: "#2a2a2a", accent: "#3a3a3a" },
  { name: "Camel", hex: "#8b6f43", accent: "#a58860" },
  { name: "Ivory", hex: "#e8dfc7", accent: "#f2ead4" },
];

const ACCENT_COLORS = [
  { name: "Gold", hex: "#D4AF37" },
  { name: "Burgundy", hex: "#5B0A0A" },
  { name: "Navy", hex: "#0a1a3a" },
  { name: "Black", hex: "#111" },
  { name: "Brown", hex: "#7b3f00" },
];

function Configurator() {
  const [color, setColor] = useState(FABRIC_COLORS[0]);
  const [tie, setTie] = useState(ACCENT_COLORS[3]);
  const [rot, setRot] = useState(0);

  const dragRef = useRef(null);

  useEffect(() => {
    const onUp = () => {
      dragRef.current = null;
    };

    const onMove = (e) => {
      if (!dragRef.current) return;

      setRot(dragRef.current.base + (e.clientX - dragRef.current.x) * 0.6);
    };

    window.addEventListener("mouseup", onUp);
    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section id="occasions" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, var(--surface), var(--surface-deep) 50%, var(--surface))",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="STYLE LAB"
          title='Configure Your <span class="text-gold-gradient italic">Look</span>'
          sub="See your color, fabric, and accessory choices on a live preview before you order. Every configuration maps to real materials in our collection."
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          {/* 3D viewer */}
          <div
            className="relative aspect-square w-full overflow-hidden rounded-[2rem] border border-(--primary)/20 bg-[radial-gradient(ellipse_at_center,var(--surface-elevated)_0%,var(--surface)_70%)] shadow-[var(--shadow-elegant)] cursor-grab active:cursor-grabbing select-none"
            onMouseDown={(e) => (dragRef.current = { x: e.clientX, base: rot })}
          >
            {/* Studio floor */}
            <div className="absolute inset-x-8 bottom-8 h-24 rounded-[50%] bg-gradient-to-b from-(--primary)/20 to-transparent blur-2xl" />
            {/* Spot rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-72 w-72 rounded-full border border-(--primary)/10" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-96 w-96 rounded-full border border-(--primary)/5" />
            </div>

            {/* SVG preview */}
            <div className="absolute inset-0 flex items-center justify-center [perspective:1000px]">
              <motion.svg
                viewBox="0 0 300 500"
                className="h-[80%] drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: rot }}
                transition={{ type: "spring", stiffness: 40, damping: 15 }}
                role="img"
                aria-label="Interactive fashion configurator — MagicStitch"
              >
                <defs>
                  <linearGradient id="garmentG" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor={color.accent} />
                    <stop offset="50%" stopColor={color.hex} />
                    <stop offset="100%" stopColor="var(--surface)" />
                  </linearGradient>
                  <linearGradient id="lapelG" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color.accent} />
                    <stop offset="100%" stopColor={color.hex} />
                  </linearGradient>
                </defs>
                {/* Mannequin head/stand */}
                <ellipse cx="150" cy="30" rx="18" ry="20" fill="var(--surface-elevated)" />
                <rect x="146" y="45" width="8" height="20" fill="var(--surface-elevated)" />
                {/* Shoulders/jacket */}
                <path
                  d="M 40 100 Q 150 60 260 100 L 270 480 L 30 480 Z"
                  fill="url(#garmentG)"
                />
                {/* Shirt */}
                <path
                  d="M 120 90 L 180 90 L 175 250 L 125 250 Z"
                  fill="var(--white-sharp)"
                />
                {/* Lapels */}
                <path
                  d="M 120 90 L 150 250 L 90 320 L 90 130 Z"
                  fill="url(#lapelG)"
                  opacity="0.95"
                />
                <path
                  d="M 180 90 L 150 250 L 210 320 L 210 130 Z"
                  fill="url(#lapelG)"
                  opacity="0.95"
                />
                {/* Tie */}
                <path
                  d="M 145 100 L 155 100 L 158 140 L 150 155 L 142 140 Z"
                  fill={tie.hex}
                />
                <path
                  d="M 138 155 L 162 155 L 168 280 L 150 320 L 132 280 Z"
                  fill={tie.hex}
                />
                {/* Buttons */}
                {[190, 240, 290, 340].map((y) => (
                  <circle key={y} cx="115" cy={y} r="4" fill="var(--primary)" />
                ))}
                {[190, 240, 290, 340].map((y) => (
                  <circle key={y + 1} cx="185" cy={y} r="4" fill="var(--primary)" />
                ))}
                {/* Pocket square */}
                <rect
                  x="205"
                  y="180"
                  width="18"
                  height="14"
                  fill="var(--primary-soft)"
                  transform="rotate(8 214 187)"
                />
              </motion.svg>
            </div>

            <div className="absolute left-5 top-5">
              <Badge variant="glass" size="md">LIVE PREVIEW</Badge>
            </div>
            <div className="absolute right-5 top-5">
              <Badge variant="glass" size="md" className="!text-fg/70">DRAG TO ROTATE</Badge>
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-8">
            <div>
              <div className="mb-3 flex items-center justify-between">
                <Eyebrow>FABRIC COLOR</Eyebrow>
                <div className="font-display italic text-fg/70">
                  {color.name}
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {FABRIC_COLORS.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setColor(c)}
                    className={`group relative h-14 w-14 rounded-full border-2 transition-all ${color.name === c.name ? "border-(--primary) scale-110" : "border-white/10 hover:border-(--primary)/50"}`}
                    style={{
                      background: `linear-gradient(135deg, ${c.accent}, ${c.hex})`,
                    }}
                    aria-label={c.name}
                  >
                    {color.name === c.name && (
                      <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-(--primary)" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Eyebrow className="mb-3">ACCENT</Eyebrow>
              <div className="flex flex-wrap gap-3">
                {ACCENT_COLORS.map((t) => (
                  <button
                    key={t.hex}
                    onClick={() => setTie(t)}
                    className={`h-12 w-8 rounded-md border-2 transition-transform hover:-translate-y-1 ${tie === t ? "border-(--primary) scale-105" : "border-white/10"}`}
                    style={{ background: t.hex }}
                    aria-label={`Accent color: ${t.name}`}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                ["FABRIC", "Premium Wool Blend"],
                ["LINING", "Silk Interior"],
                ["STYLE", "Peak Lapel"],
                ["FIT", "Slim Tailored"],
              ].map(([k, v]) => (
                <div key={k} className="glass rounded-xl p-4">
                  <div className="font-ui text-[9px] tracking-[0.3em] text-(--primary)/80">
                    {k}
                  </div>
                  <div className="mt-1 font-display text-sm text-fg">
                    {v}
                  </div>
                </div>
              ))}
            </div>

            <Button href="#contact" size="lg" shadow="button" arrow className="w-full justify-between">
              Order This Look
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Configurator;
