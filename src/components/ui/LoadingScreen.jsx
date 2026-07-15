import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import Logo from "./logo";

function LoadingScreen({ done }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
        >
          <motion.div
            initial={{
              scale: 0.6,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
          >
            <Logo className="scale-125" />
          </motion.div>

          <div className="mt-10 h-[2px] w-56 overflow-hidden rounded-full bg-(--gold)/10">
            <motion.div
              className="h-full bg-gold-gradient"
              initial={{
                width: "0%",
              }}
              animate={{
                width: "100%",
              }}
              transition={{
                duration: 1.6,
                ease: "easeInOut",
              }}
            />
          </div>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
            }}
            className="mt-6 font-ui text-[10px] tracking-[0.5em] text-(--gold)/60"
          >
            ENGINEERED FOR THE MOMENTS THAT DEFINE YOU
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;
