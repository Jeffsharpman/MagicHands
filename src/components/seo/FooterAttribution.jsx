import { DEVELOPER } from "./SEOHead";

export default function FooterAttribution() {
  return (
    <div className="mt-4 text-center">
      <p className="font-ui text-[9px] tracking-[0.25em] text-white/30">
        Designed &amp; Developed by{" "}
        <a
          href={DEVELOPER.portfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[color:var(--gold)]/60 underline-offset-2 transition-colors hover:text-[color:var(--gold)] hover:underline"
        >
          {DEVELOPER.name}
        </a>{" "}
        (
        <a
          href={DEVELOPER.portfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[color:var(--gold)]/60 underline-offset-2 transition-colors hover:text-[color:var(--gold)] hover:underline"
        >
          Sharpman
        </a>
        )
      </p>
    </div>
  );
}
