const NavLink = ({
  href,
  onClick,
  variant = "desktop",
  children,
  className = "",
  ...props
}) => {
  const styles = {
    desktop:
      "group relative font-ui text-[11px] uppercase tracking-[0.14em] text-fg/80 transition-colors duration-300 hover:text-(--primary)",
    mobile:
      "font-ui text-sm uppercase tracking-[0.18em] text-fg/80 transition-colors hover:text-(--primary)",
    footer: "transition-colors hover:text-(--primary)",
  };

  return (
    <a
      href={href}
      onClick={onClick}
      className={`${styles[variant]} ${className}`}
      {...props}
    >
      {children}
      {variant === "desktop" && (
        <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-gradient transition-all duration-300 group-hover:w-full" />
      )}
    </a>
  );
};

export default NavLink;
