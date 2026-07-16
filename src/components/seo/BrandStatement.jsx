import { DEVELOPER } from "./SEOHead";
import Eyebrow from "../ui/Eyebrow";

export default function BrandStatement({ className = "" }) {
  return (
    <div className={`text-center ${className}`}>
      <Eyebrow as="div" color="muted" className="mb-3">
        SHARPMAN DIGITAL SOLUTIONS
      </Eyebrow>

      <p className="mx-auto max-w-xl text-sm leading-relaxed text-fg/50">
        MagicStitch is a Sharpman product — engineered by{" "}
        <a
          href={DEVELOPER.portfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="text-(--primary)/60 transition-colors hover:text-(--primary)"
        >
          {DEVELOPER.name}
        </a>
        , founder of{" "}
        <a
          href={DEVELOPER.portfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="text-(--primary)/60 transition-colors hover:text-(--primary)"
        >
          {DEVELOPER.brand}
        </a>
        . Built with React, modern web tooling, and a commitment to performance,
        accessibility, and long-term maintainability.
      </p>
    </div>
  );
}
