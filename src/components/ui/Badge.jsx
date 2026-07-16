const Badge = ({ variant = "glass", size = "sm", className = "", children }) => {
  const sizes = {
    sm: "px-3 py-1 text-[9px] tracking-[0.3em]",
    md: "px-3 py-1.5 text-[10px] tracking-[0.25em]",
  };

  const variants = {
    glass: "glass rounded-full",
    solid: "rounded-full bg-surface/60",
    border: "rounded-full border border-(--primary)/30 bg-surface-card/50",
    tooltip:
      "absolute right-16 whitespace-nowrap rounded-full glass-strong px-3 py-1.5 text-[10px] tracking-[0.2em] text-fg opacity-0 transition-opacity group-hover:opacity-100",
  };

  return (
    <span
      className={`inline-flex items-center font-ui text-(--primary) ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
