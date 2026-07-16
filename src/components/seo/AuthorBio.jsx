import { DEVELOPER } from "./SEOHead";
import Button from "../ui/Button";
import Eyebrow from "../ui/Eyebrow";

export default function AuthorBio({ className = "" }) {
  return (
    <div className={`flex flex-col items-center gap-6 text-center ${className}`}>
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient font-display text-xl font-bold text-black">
        OJ
      </div>

      <div>
        <h3 className="font-display text-xl text-fg">
          {DEVELOPER.name}
        </h3>

        <p className="mt-1 font-ui text-[10px] tracking-[0.2em] text-fg/50">
          FULL STACK DEVELOPER · FOUNDER OF {DEVELOPER.brand.toUpperCase()}
        </p>
      </div>

      <p className="max-w-md text-sm text-fg/60 leading-relaxed">
        {DEVELOPER.name} is a Full Stack Developer specializing in React, Laravel,
        and modern web applications. MagicStitch is one of several software
        products engineered under the {DEVELOPER.brand} brand.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button
          href={DEVELOPER.portfolio}
          target="_blank"
          rel="noopener noreferrer"
          size="sm"
          arrow
        >
          View {DEVELOPER.brand} Portfolio
        </Button>

        <Button
          href={`mailto:${DEVELOPER.email}`}
          variant="outline"
          size="sm"
        >
          Contact
        </Button>
      </div>
    </div>
  );
}
