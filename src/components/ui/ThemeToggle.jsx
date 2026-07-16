import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon } from "lucide-react";
import Button from "./Button";

function getStoredTheme() {
  if (typeof window === "undefined") return "dark";
  return localStorage.getItem("mh-theme") || "dark";
}

function applyTheme(theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.setAttribute("data-theme", theme);
  localStorage.setItem("mh-theme", theme);
}

function ThemeToggle({ className = "" }) {
  const [theme, setTheme] = useState(getStoredTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <Button
      variant="icon"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={className}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <Sun size={16} className="text-(--primary)" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <Moon size={16} className="text-(--primary)" />
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  );
}

export default ThemeToggle;
