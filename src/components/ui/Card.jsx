const Card = ({ variant = "default", padding = "", rounded = "2xl", hover = false, className = "", children }) => {
  const roundeds = {
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
  };

  const variants = {
    default: `border border-(--primary)/15 bg-surface-card ${hover ? "transition-all duration-300 hover:-translate-y-1 hover:border-(--primary)/50" : ""}`,
    elevated: `border border-(--primary)/15 bg-surface-card shadow-[var(--shadow-elegant)] transition-all duration-500 hover:border-(--primary)/60 hover:shadow-[var(--shadow-primary-hover)]`,
    glass: "glass",
    "glass-strong": "glass-strong",
    accent: "border border-(--primary)/20 bg-surface-card/60",
  };

  return (
    <div
      className={`relative overflow-hidden ${roundeds[rounded]} ${variants[variant]} ${padding} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
