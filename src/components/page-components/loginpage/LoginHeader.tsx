"use client";

import { motion } from "framer-motion";

interface LoginHeaderProps {
  title: string;
  subtitle: string;
}

const LoginHeader = ({ title, subtitle }: LoginHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="text-center"
    >
      <h2 className="text-4xl font-bold text-[#22223b] mb-3">{title}</h2>
      <p className="text-lg text-[#4a4e69]">{subtitle}</p>
    </motion.div>
  );
};

export default LoginHeader;
