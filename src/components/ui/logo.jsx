import React from 'react'

function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative h-11 w-11 shrink-0">
        <div className="absolute inset-0 rounded-full bg-gold-gradient blur-md opacity-60" />

        <div className="relative flex h-full w-full items-center justify-center rounded-full border border-(--gold)/60 bg-black">
          <span className="font-display text-lg font-bold text-gold-gradient">
            MH
          </span>
        </div>
      </div>

      <div className="leading-tight">
        <div className="font-display text-lg tracking-widest text-gold-gradient">
          MAGIC HANDS
        </div>

        <div className="font-ui text-[10px] tracking-[0.4em] text-(--gold)/70">
          — FASHION —
        </div>
      </div>
    </div>
  );
}


export default Logo