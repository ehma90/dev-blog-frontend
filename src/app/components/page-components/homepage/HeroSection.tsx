"use client";

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="text-center mb-16 relative w-full"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#f2e9e4] via-white to-[#f2e9e4] opacity-50 rounded-3xl blur-3xl"></div>
      <div className="relative z-10 w-full py-16 flex flex-col justify-center items-center gap-4">
        <motion.h1
          className="text-5xl mt-2 md:text-7xl font-bold mb-6 gradient-text"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
        >
          Welcome to Dev Blog
        </motion.h1>
        <motion.p
          className="text-base text-center md:text-xl text-[#4a4e69] max-w-2xl w-full leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
        >
          Discover the latest insights, tutorials, and stories from the
          developer community. Join thousands of developers sharing knowledge.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
          className="mb-8 block"
        >
          <div className="flex flex-wrap justify-center gap-4 text-sm text-[#4a4e69]">
            <span className="bg-white/80 px-4 py-2 rounded-full">
              ✨ Latest Articles
            </span>
            <span className="bg-white/80 px-4 py-2 rounded-full">
              🚀 Tech Trends
            </span>
            <span className="bg-white/80 px-4 py-2 rounded-full">
              💡 Tutorials
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
