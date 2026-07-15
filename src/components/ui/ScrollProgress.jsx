import { motion, useScroll} from "motion/react";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-gold-gradient"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export default ScrollProgress;
