function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/2349070281022"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Quick order or question? Message us on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient shadow-[var(--shadow-primary-glow-md)] animate-pulse-gold"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-black"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12a11.9 11.9 0 0 0 1.64 6L0 24l6.2-1.62A12 12 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52ZM12 22a9.9 9.9 0 0 1-5.06-1.39l-.36-.21-3.68.96.98-3.59-.24-.37A9.94 9.94 0 1 1 22 12c0 5.52-4.48 10-10 10Zm5.44-7.5c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.63.07-.3-.15-1.24-.46-2.36-1.47-.87-.78-1.46-1.74-1.63-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.34.44-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.5-.66-.5H8.5c-.2 0-.5.07-.77.37-.27.3-1.02 1-1.02 2.44 0 1.44 1.04 2.83 1.19 3.03.15.2 2.05 3.13 4.96 4.39 2.9 1.25 2.9.83 3.42.78.52-.05 1.68-.68 1.92-1.34.24-.66.24-1.22.17-1.34-.07-.12-.27-.2-.57-.34Z" />
      </svg>

      <span className="absolute right-16 whitespace-nowrap rounded-full glass-strong px-3 py-1.5 font-ui text-[10px] tracking-[0.2em] text-fg opacity-0 transition-opacity group-hover:opacity-100">
        QUICK ORDER OR QUESTION?
      </span>
    </a>
  );
}

export default WhatsAppFAB;
