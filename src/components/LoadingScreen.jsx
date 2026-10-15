import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/images/fav.png';

const LoadingScreen = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Increment faster at first, then slower near 100
        const diff = Math.random() > 0.5 ? Math.floor(Math.random() * 8) + 2 : Math.floor(Math.random() * 4) + 1;
        return Math.min(prev + diff, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] bg-white/80 backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Glowing Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7A2B42]/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#87A04B]/5 rounded-full blur-3xl animate-pulse delay-700" />

      {/* Orbit Ring and Glowing Glass Container */}
      <div className="relative flex items-center justify-center">
        {/* Orbit Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute w-36 h-36 border border-dark/10 rounded-full border-t-accent"
        />

        {/* Outer Pulsing Glow */}
        <motion.div
          className="absolute w-28 h-28 bg-[#7A2B42]/10 rounded-[2.5rem] -z-10 blur-xl"
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Core Glassmorphic Logo Box */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-28 h-28 bg-white/40 backdrop-blur-md rounded-[2.5rem] border border-dark/10 shadow-premium flex items-center justify-center p-6"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={Logo} alt="Altham Care Home Logo" className="h-16 w-auto object-contain" />
          </motion.div>
        </motion.div>
      </div>

      {/* Brand Text and Loader */}
      <div className="mt-12 flex flex-col items-center max-w-sm w-full px-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col items-center space-y-1 mb-6"
        >
          <span className="text-3xl font-black text-dark tracking-tighter uppercase italic">
            Altham <span className="text-primary not-italic"></span>
          </span>
          <span className="text-xs font-black tracking-[0.3em] uppercase text-dark/40">Care Home</span>
        </motion.div>

        {/* Loader Track */}
        <div className="h-1.5 w-full bg-dark/5 rounded-full overflow-hidden relative border border-dark/5">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent shadow-[0_0_12px_rgba(135,160,75,0.3)]"
            style={{ width: `${percent}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        {/* Progress Percentage */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-3 text-xs font-black tracking-widest text-primary uppercase"
        >
          Loading {percent}%
        </motion.span>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
