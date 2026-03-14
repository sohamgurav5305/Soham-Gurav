import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 600);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-5xl md:text-7xl tracking-tighter"
      >
        <span className="font-semibold">SOHAM</span>{" "}
        <span className="font-display italic text-primary">Gurav</span>
      </motion.h1>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "120px" }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="h-[2px] bg-primary mt-4"
      />
      <div className="mt-8 flex items-baseline gap-2">
        <motion.span
          className="font-display italic text-6xl text-muted-foreground/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {count}
        </motion.span>
        <span className="text-xs tracking-[0.3em] text-primary uppercase">
          {count < 100 ? "Loading" : "Initializing"}
        </span>
      </div>
    </motion.div>
  );
};

export default Loader;
