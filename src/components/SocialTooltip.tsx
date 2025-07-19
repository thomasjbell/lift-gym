"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";

export default function SocialTooltip() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show tooltip after hero animation completes
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Hide tooltip after 6 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 8000);

    // Hide on scroll
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -30, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 30, y: -10 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed top-48 right-24 z-50 hidden md:block"
        >
          {/* Tooltip with glassmorphism effect */}
          <div className="relative">
            <div className="bg-slate-950/70 backdrop-blur-md text-white px-4 py-3 rounded-xl border border-white/20 shadow-2xl relative">
              <div className="flex items-center space-x-2">
                <p className="text-sm font-medium">
                  Check out our socials
                </p>
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </div>
              
              {/* Arrow pointing to sidebar */}
              <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2">
                <div className="w-0 h-0 border-l-6 border-l-black/80 border-t-3 border-b-3 border-t-transparent border-b-transparent"></div>
              </div>
            </div>

            {/* Close button */}
            <motion.button
              onClick={() => setIsVisible(false)}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute -top-2 -right-2 bg-white text-black rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <X className="h-3 w-3" />
            </motion.button>

            {/* Subtle pulse effect */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-white/5 rounded-xl -z-10"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}