"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PRELOADER_SEEN_KEY = "ucf-proposal-preloader-seen";

/**
 * Preloader (React Bits Pro Preloader–style). UCF gold logo on black for 1.5s
 * on first load only (sessionStorage). Applied globally via root layout.
 */
export default function Preloader() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const seen = typeof window !== "undefined" && sessionStorage.getItem(PRELOADER_SEEN_KEY);
    if (!seen) {
      setShow(true);
      const t = setTimeout(() => {
        setShow(false);
        sessionStorage.setItem(PRELOADER_SEEN_KEY, "1");
      }, 1500);
      return () => clearTimeout(t);
    }
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-ucf-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          aria-hidden
        >
          <motion.div
            className="font-display text-3xl tracking-wide text-ucf-gold sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            UCF KNIGHTS
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
