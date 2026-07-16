import { AnimatePresence, motion } from "motion/react";
import Logo from "./Logo";

function LoadingScreen({ done }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-surface"
          exit={{
            opacity: 0,
            scale: 1.03,
            filter: "blur(8px)",
            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
        >
          {/* Logo */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Logo className="scale-125 md:scale-150" />
          </motion.div>

          {/* Progress */}
          <motion.div
            className="mt-10 h-[2px] w-64 overflow-hidden rounded-full bg-(--primary)/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="h-full bg-gold-gradient"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            className="mt-6 text-center font-ui text-[10px] tracking-[0.45em] uppercase text-(--primary)/60"
          >
            ENGINEERED FOR THE MOMENTS THAT DEFINE YOU
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;