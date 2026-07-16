import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import SectionHeader from "../UI/SectionHeader";
import Badge from "../UI/Badge";
import Eyebrow from "../UI/Eyebrow";
import Button from "../UI/Button";

const FABRIC_COLORS = [
  {
    name: "Charcoal Windowpane",
    hex: "#2b2e35",
    accent: "#404550",
    pattern: true,
  },
  { name: "Sartorial Navy", hex: "#111827", accent: "#232d42", pattern: true },
  { name: "Onyx Silk", hex: "#0c0d10", accent: "#22252a", pattern: false },
  { name: "Camel Tweed", hex: "#725939", accent: "#93754e", pattern: false },
  { name: "Stone Grey", hex: "#4b525d", accent: "#687282", pattern: true },
];

const ACCENT_COLORS = [
  { name: "Matte Black", hex: "#141416" },
  { name: "Burgundy Satin", hex: "#630b1c" },
  { name: "Royal Navy", hex: "#14254c" },
  { name: "Crimson Silk", hex: "#9e1a1a" },
  { name: "Satin Champagne", hex: "#caa052" },
];

const TIE_STYLES = [
  { id: "necktie", name: "Classic Tie" },
  { id: "bowtie", name: "Classic Bow Tie" },
  { id: "none", name: "No Neckwear" },
];

const POCKET_SQUARE_STYLES = [
  { id: "flat", name: "Crisp Flat Fold" },
  { id: "puff", name: "Satin Puff Fold" },
  { id: "points", name: "Sartorial Two-Point" },
  { id: "none", name: "No Square" },
];

function Configurator() {
  const [color, setColor] = useState(FABRIC_COLORS[0]);
  const [tieColor, setTieColor] = useState(ACCENT_COLORS[1]); // Default to Burgundy for contrast
  const [tieStyle, setTieStyle] = useState(TIE_STYLES[0]);
  const [pocketSquare, setPocketSquare] = useState(POCKET_SQUARE_STYLES[2]); // Default to Two-Point
  const [rot, setRot] = useState(0);

  const dragRef = useRef(null);

  useEffect(() => {
    const onUp = () => {
      dragRef.current = null;
    };

    const onMove = (e) => {
      if (!dragRef.current) return;
      const calculatedRot =
        dragRef.current.base + (e.clientX - dragRef.current.x) * 0.45;
      setRot(Math.max(-22, Math.min(22, calculatedRot)));
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
          background:
            "linear-gradient(180deg, var(--surface), var(--surface-deep) 50%, var(--surface))",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="INTERACTIVE STUDIO"
          title='Configure Your <span class="text-gold-gradient italic">Look</span>'
          sub="Select fabrics, neckwear, and pocket square styles below. Every configuration maps directly to our construction process — built to order, not off the shelf."
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          {/* Real-time 3D Render Window */}
          <div
            className="relative aspect-square w-full overflow-hidden rounded-[2rem] border border-(--primary)/20 bg-[radial-gradient(ellipse_at_center,var(--surface-elevated)_0%,var(--surface)_70%)] shadow-[var(--shadow-elegant)] cursor-grab active:cursor-grabbing select-none"
            onMouseDown={(e) => (dragRef.current = { x: e.clientX, base: rot })}
          >
            {/* Soft studio floor glow */}
            <div className="absolute inset-x-8 bottom-8 h-24 rounded-[50%] bg-gradient-to-b from-(--primary)/15 to-transparent blur-2xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-80 w-80 rounded-full border border-(--primary)/5" />
            </div>

            {/* SVG Render Engine */}
            <div className="absolute inset-0 flex items-center justify-center [perspective:1200px]">
              <motion.svg
                viewBox="0 0 320 440"
                className="h-[90%] drop-shadow-[0_35px_60px_rgba(0,0,0,0.65)]"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: rot }}
                transition={{ type: "spring", stiffness: 45, damping: 18 }}
                role="img"
                aria-label="Interactive Sartorial Suit Configurator"
              >
                <defs>
                  {/* Premium fabric 3D lighting gradients */}
                  <linearGradient
                    id="fabricShading"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >
                    <stop offset="0%" stopColor={color.accent} />
                    <stop offset="30%" stopColor={color.hex} />
                    <stop offset="70%" stopColor={color.hex} />
                    <stop offset="100%" stopColor="#08090b" />
                  </linearGradient>

                  <linearGradient
                    id="lapelShading"
                    x1="0"
                    y1="0"
                    x2="0.8"
                    y2="1"
                  >
                    <stop offset="0%" stopColor={color.accent} />
                    <stop offset="50%" stopColor={color.hex} />
                    <stop offset="100%" stopColor="#0c0d10" />
                  </linearGradient>

                  {/* High-fidelity Windowpane Grid Pattern */}
                  <pattern
                    id="windowpanePattern"
                    width="34"
                    height="48"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 34 0 L 0 0 0 48"
                      fill="none"
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="0.85"
                    />
                  </pattern>

                  {/* Depth Mapping Shadows */}
                  <radialGradient id="neckGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#0a0a0d" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#0a0a0d" stopOpacity="0" />
                  </radialGradient>

                  <linearGradient id="shirtShadow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="85%" stopColor="#f3f4f6" />
                    <stop offset="100%" stopColor="#e5e7eb" />
                  </linearGradient>

                  <linearGradient id="tieShading" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                    <stop offset="30%" stopColor="rgba(0,0,0,0)" />
                    <stop offset="70%" stopColor="rgba(0,0,0,0)" />
                    <stop offset="100%" stopColor="rgba(0,0,0,0.4)" />
                  </linearGradient>
                </defs>

                {/* ================= LAYER 1: BASE TORSO & BACKGROUND ================= */}
                <g id="suit-base-torso">
                  <path
                    d="M50 110 Q160 80 270 110 L285 410 L35 410 Z"
                    fill="url(#fabricShading)"
                  />
                  {color.pattern && (
                    <path
                      d="M50 110 Q160 80 270 110 L285 410 L35 410 Z"
                      fill="url(#windowpanePattern)"
                    />
                  )}
                </g>

                {/* ================= LAYER 2: SHIRT V-CHEST & INNER COLLAR ================= */}
                {/* Shadow depth behind the shirt neck */}
                <path
                  d="M120 65 Q160 85 200 65 L200 85 Q160 100 120 85 Z"
                  fill="url(#neckGlow)"
                />

                {/* Crisp White V-Neck Shirt Opening */}
                <path d="M124 70 L196 70 L160 250 Z" fill="url(#shirtShadow)" />

                {/* Subtle shirt placket center line */}
                <line
                  x1="160"
                  y1="110"
                  x2="160"
                  y2="245"
                  stroke="#d1d5db"
                  strokeWidth="1"
                />

                {/* Left & Right Shirt Collar Wings */}
                <path
                  d="M122 70 L146 112 L152 70 Z"
                  fill="#ffffff"
                  stroke="#e5e7eb"
                  strokeWidth="0.5"
                />
                <path
                  d="M198 70 L174 112 L168 70 Z"
                  fill="#ffffff"
                  stroke="#e5e7eb"
                  strokeWidth="0.5"
                />

                {/* ================= LAYER 3: OUTER RESTRUCTURING (ARMS & LAPELS) ================= */}
                {/* Left Shoulder & Sleeve */}
                <path
                  d="M50 110 C34 180 32 300 45 400 L74 400 C67 300 66 180 82 124 Z"
                  fill="url(#fabricShading)"
                />
                {color.pattern && (
                  <path
                    d="M50 110 C34 180 32 300 45 400 L74 400 C67 300 66 180 82 124 Z"
                    fill="url(#windowpanePattern)"
                  />
                )}

                {/* Right Shoulder & Sleeve */}
                <path
                  d="M270 110 C286 180 288 300 275 400 L246 400 C253 300 254 180 238 124 Z"
                  fill="url(#fabricShading)"
                />
                {color.pattern && (
                  <path
                    d="M270 110 C286 180 288 300 275 400 L246 400 C253 300 254 180 238 124 Z"
                    fill="url(#windowpanePattern)"
                  />
                )}

                {/* Left Lapel (Underneath the tie plane, but over the shirt) */}
                <path
                  d="M124 74 L158 245 L98 232 L86 122 Z"
                  fill="url(#lapelShading)"
                />
                {color.pattern && (
                  <path
                    d="M124 74 L158 245 L98 232 L86 122 Z"
                    fill="url(#windowpanePattern)"
                  />
                )}
                <path
                  d="M124 74 L158 245 L98 232 L86 122 Z"
                  fill="none"
                  stroke="rgba(0,0,0,0.25)"
                  strokeWidth="1"
                />

                {/* Right Lapel */}
                <path
                  d="M196 74 L162 245 L222 232 L234 122 Z"
                  fill="url(#lapelShading)"
                />
                {color.pattern && (
                  <path
                    d="M196 74 L162 245 L222 232 L234 122 Z"
                    fill="url(#windowpanePattern)"
                  />
                )}
                <path
                  d="M196 74 L162 245 L222 232 L234 122 Z"
                  fill="none"
                  stroke="rgba(0,0,0,0.25)"
                  strokeWidth="1"
                />

                {/* ================= LAYER 4: HIGH-VISIBILITY FOREGROUND NECKWEAR ================= */}
                {/* Neckwear is drawn here to sit proudly on top of the shirt, collars, and lapels */}
                {tieStyle.id === "necktie" && (
                  <g id="necktie-render">
                    {/* Flowing Tie Drape (Cascades down over the lapel cross point) */}
                    <path
                      d="M151 112 L169 112 L175 265 L160 285 L145 265 Z"
                      fill={tieColor.hex}
                    />
                    <path
                      d="M151 112 L169 112 L175 265 L160 285 L145 265 Z"
                      fill="url(#tieShading)"
                    />
                    {/* Shaded Dimensional Tie Knot */}
                    <path
                      d="M144 80 L176 80 L168 114 L152 114 Z"
                      fill={tieColor.hex}
                    />
                    <path
                      d="M144 80 L176 80 L168 114 L152 114 Z"
                      fill="url(#tieShading)"
                    />
                    <path
                      d="M144 80 L160 108 L176 80 Z"
                      fill="rgba(0,0,0,0.2)"
                    />{" "}
                    {/* V-Shadow under collar */}
                    {/* Luxury Metallic Tie Bar (Over the drape) */}
                    <rect
                      x="151"
                      y="160"
                      width="18"
                      height="3.5"
                      fill="#f1f5f9"
                      rx="0.5"
                    />
                    <rect
                      x="151"
                      y="161.5"
                      width="18"
                      height="1"
                      fill="#ffffff"
                    />
                  </g>
                )}

                {tieStyle.id === "bowtie" && (
                  <g id="bowtie-render">
                    {/* Left Bow Loop */}
                    <path d="M132 78 L154 92 L132 106 Z" fill={tieColor.hex} />
                    <path
                      d="M132 78 L154 92 L132 106 Z"
                      fill="url(#tieShading)"
                    />

                    {/* Right Bow Loop */}
                    <path d="M188 78 L166 92 L188 106 Z" fill={tieColor.hex} />
                    <path
                      d="M188 78 L166 92 L188 106 Z"
                      fill="url(#tieShading)"
                    />

                    {/* Dimensional Center Knot */}
                    <rect
                      x="151"
                      y="84"
                      width="18"
                      height="16"
                      rx="2"
                      fill={tieColor.hex}
                    />
                    <rect
                      x="151"
                      y="84"
                      width="18"
                      height="16"
                      rx="2"
                      fill="url(#tieShading)"
                    />
                    <path
                      d="M151 84 L160 100 L169 84 Z"
                      fill="rgba(0,0,0,0.2)"
                    />
                  </g>
                )}

                {/* ================= LAYER 5: ACCENTS, CUFFS, BUTTONS & POCKET SQUARES ================= */}
                {/* Peeking White Shirt Cuffs */}
                <path d="M45 400 L43 410 L70 410 L72 400 Z" fill="#ffffff" />
                <path
                  d="M275 400 L277 410 L250 410 L248 400 Z"
                  fill="#ffffff"
                />

                {/* Welt Breast Pocket */}
                <path
                  d="M202 165 L242 160 L240 172 L200 177 Z"
                  fill="#08090b"
                  opacity="0.4"
                />
                <path
                  d="M202 165 L242 160 L241 169 L201 174 Z"
                  fill="url(#lapelShading)"
                />

                {/* Interactive Pocket Square Rendering */}
                {pocketSquare.id === "flat" && (
                  <rect
                    x="209"
                    y="153"
                    width="24"
                    height="9"
                    fill="#ffffff"
                    transform="rotate(-6 209 153)"
                  />
                )}

                {pocketSquare.id === "puff" && (
                  <path
                    d="M208 162 C202 143, 222 141, 225 160 C230 145, 239 149, 235 160 Z"
                    fill={tieColor.hex}
                  />
                )}

                {pocketSquare.id === "points" && (
                  <g id="two-point-pocket-square">
                    {/* Left Point */}
                    <path
                      d="M208 162 L217 138 L227 160 Z"
                      fill={tieColor.hex}
                    />
                    <path
                      d="M208 162 L217 138 L227 160 Z"
                      fill="url(#tieShading)"
                    />
                    {/* Right Point (Slightly offset for realistic overlapping) */}
                    <path
                      d="M219 160 L229 133 L238 158 Z"
                      fill={tieColor.hex}
                    />
                    <path
                      d="M219 160 L229 133 L238 158 Z"
                      fill="url(#tieShading)"
                      opacity="0.8"
                    />
                  </g>
                )}

                {/* Realistic Lower Flapped Hip Pockets */}
                <g id="hip-pockets">
                  {/* Left Hip Pocket */}
                  <path
                    d="M72 290 L118 296 L116 320 L70 314 Z"
                    fill="url(#fabricShading)"
                    filter="brightness(0.85)"
                  />
                  {color.pattern && (
                    <path
                      d="M72 290 L118 296 L116 320 L70 314 Z"
                      fill="url(#windowpanePattern)"
                    />
                  )}
                  <path
                    d="M72 290 L118 296"
                    stroke="rgba(0,0,0,0.4)"
                    strokeWidth="1.5"
                  />

                  {/* Right Hip Pocket */}
                  <path
                    d="M248 290 L202 296 L204 320 L250 314 Z"
                    fill="url(#fabricShading)"
                    filter="brightness(0.85)"
                  />
                  {color.pattern && (
                    <path
                      d="M248 290 L202 296 L204 320 L250 314 Z"
                      fill="url(#windowpanePattern)"
                    />
                  )}
                  <path
                    d="M248 290 L202 296"
                    stroke="rgba(0,0,0,0.4)"
                    strokeWidth="1.5"
                  />
                </g>

                {/* Horn Buttons */}
                <circle
                  cx="160"
                  cy="254"
                  r="5.5"
                  fill="#141416"
                  stroke="#444"
                  strokeWidth="0.5"
                />
                <circle
                  cx="160"
                  cy="314"
                  r="5.5"
                  fill="#141416"
                  stroke="#444"
                  strokeWidth="0.5"
                />
              </motion.svg>
            </div>

            <div className="absolute left-5 top-5">
              <Badge variant="glass" size="md">
                LIVE PREVIEW
              </Badge>
            </div>
            <div className="absolute right-5 top-5">
              <Badge variant="glass" size="md" className="!text-fg/70">
                ROTATABLE
              </Badge>
            </div>
          </div>

          {/* Configuration Panel */}
          <div className="space-y-8">
            {/* Fabric Section */}
            <div>
              <div className="mb-3 flex items-center justify-between">
                <Eyebrow>FABRIC COLOR & PATTERN</Eyebrow>
                <div className="font-display italic text-fg/70">
                  {color.name}
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {FABRIC_COLORS.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setColor(c)}
                    className={`group relative h-14 w-14 rounded-full border-2 transition-all ${
                      color.name === c.name
                        ? "border-(--primary) scale-110"
                        : "border-white/10 hover:border-(--primary)/50"
                    }`}
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

            {/* Neckwear Config */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Eyebrow className="mb-3">NECKWEAR STYLE</Eyebrow>
                <div className="flex flex-col gap-2">
                  {TIE_STYLES.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setTieStyle(style)}
                      className={`py-2.5 px-3 rounded-lg border text-left text-xs font-bold transition-all ${
                        tieStyle.id === style.id
                          ? "bg-white/10 border-(--primary) text-white"
                          : "bg-transparent border-white/10 text-fg/60 hover:border-white/20"
                      }`}
                    >
                      {style.name}
                    </button>
                  ))}
                </div>
              </div>

              {tieStyle.id !== "none" && (
                <div>
                  <Eyebrow className="mb-3">NECKWEAR COLOR</Eyebrow>
                  <div className="flex flex-wrap gap-2">
                    {ACCENT_COLORS.map((t) => (
                      <button
                        key={t.hex}
                        onClick={() => setTieColor(t)}
                        className={`h-9 w-9 rounded-md border-2 transition-transform hover:-translate-y-0.5 ${
                          tieColor.hex === t.hex
                            ? "border-(--primary) scale-105"
                            : "border-white/10"
                        }`}
                        style={{ background: t.hex }}
                        aria-label={t.name}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Pocket Square Selectors */}
            <div>
              <Eyebrow className="mb-3">POCKET SQUARE STYLE</Eyebrow>
              <div className="grid grid-cols-2 gap-2">
                {POCKET_SQUARE_STYLES.map((sq) => (
                  <button
                    key={sq.id}
                    onClick={() => setPocketSquare(sq)}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all text-center ${
                      pocketSquare.id === sq.id
                        ? "bg-white/10 border-(--primary) text-white"
                        : "bg-transparent border-white/10 text-fg/60 hover:border-white/20"
                    }`}
                  >
                    {sq.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sartorial Details Spec Info */}
            <div className="grid grid-cols-2 gap-3">
              {[
                [
                  "FABRIC WEAVE",
                  color.pattern
                    ? "Italian Windowpane Grid"
                    : "Premium Solid Twill",
                ],
                ["LAPEL PROFILE", "Sartorial Slanted Notch"],
                ["POCKET SPEC", "Dual Low Flap + Welt Chest"],
                ["FIT PROFILE", "Neapolitan Soft Shoulder Slim"],
              ].map(([k, v]) => (
                <div key={k} className="glass rounded-xl p-4">
                  <div className="font-ui text-[9px] tracking-[0.3em] text-(--primary)/80">
                    {k}
                  </div>
                  <div className="mt-1 font-display text-xs text-fg font-semibold">
                    {v}
                  </div>
                </div>
              ))}
            </div>

            <Button
              href="#contact"
              size="lg"
              shadow="button"
              arrow
              className="w-full justify-between"
            >
              Order This Look
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Configurator;
