import { DEVELOPER } from "./SEOHead";

export default function FooterAttribution() {
  return (
    <div className="mt-4 text-center">
      <p className="font-ui text-[9px] tracking-[0.25em] text-fg/30">
        Engineered by{" "}
        <a
          href={DEVELOPER.portfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="text-(--primary)/60 underline-offset-2 transition-colors hover:text-(--primary) hover:underline"
        >
          {DEVELOPER.name}
        </a>{" "}
        at{" "}
        <a
          href={DEVELOPER.portfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="text-(--primary)/60 underline-offset-2 transition-colors hover:text-(--primary) hover:underline"
        >
          Sharpman
        </a>{" "}
        — MagicStitch is a Sharpman product
      </p>
    </div>
  );
}
