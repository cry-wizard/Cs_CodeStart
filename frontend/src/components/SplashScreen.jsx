import React from 'react';
import { motion } from 'framer-motion';

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--color-brand-bg-dark)]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <div className="flex items-center justify-center mb-4">
          <motion.div 
            className="text-6xl text-[var(--color-brand-accent)] font-bold font-heading"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            &lt;
          </motion.div>
          <motion.div
            className="text-6xl text-white font-bold font-heading mx-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            CS
          </motion.div>
          <motion.div 
            className="text-6xl text-[var(--color-brand-accent)] font-bold font-heading"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
          >
            /&gt;
          </motion.div>
        </div>
        
        <motion.div
          className="text-2xl font-body text-gray-300 tracking-widest mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          INITIALIZING...
        </motion.div>
        
        <motion.div 
          className="w-48 h-1 bg-gray-700 mx-auto mt-6 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div 
            className="h-full bg-[var(--color-brand-accent)]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.4, duration: 0.8, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SplashScreen;
