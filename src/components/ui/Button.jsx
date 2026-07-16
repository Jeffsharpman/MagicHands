import { forwardRef } from "react";
import { ArrowRight } from "lucide-react";

const sizeMap = {
  sm: "px-4 py-2 text-[10px] tracking-[0.15em]",
  md: "px-5 py-3 text-[11px] tracking-[0.18em]",
  lg: "px-8 py-4 text-xs tracking-[0.25em]",
};

const shadowMap = {
  none: "",
  "glow-sm": "shadow-[var(--shadow-primary-glow-sm)]",
  "glow-md": "shadow-[var(--shadow-primary-glow-md)]",
  button: "shadow-[var(--shadow-primary-button)]",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-ui font-semibold uppercase transition-all duration-300 cursor-pointer select-none";

const variants = {
  primary: `${base} bg-gold-gradient text-black hover:scale-[1.03]`,
  outline: `${base} border border-(--primary)/40 text-(--primary) hover:bg-(--primary)/10`,
  icon: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-(--primary)/30 bg-surface-card/50 backdrop-blur-sm transition-colors hover:border-(--primary)/60 hover:bg-surface-card cursor-pointer",
  ghost: `${base} text-(--primary) hover:bg-(--primary)/5`,
};

const Button = forwardRef(function Button(
  {
    variant = "primary",
    size = "md",
    shadow = "none",
    href,
    arrow = false,
    className = "",
    children,
    ...props
  },
  ref
) {
  const classes =
    variant === "icon"
      ? `${variants.icon} ${className}`
      : `${variants[variant]} ${sizeMap[size]} ${shadowMap[shadow]} ${className}`;

  if (href) {
    return (
      <a ref={ref} href={href} className={classes} {...props}>
        {children}
        {arrow && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
      </a>
    );
  }

  return (
    <button ref={ref} className={classes} {...props}>
      {children}
      {arrow && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
    </button>
  );
});

export default Button;
