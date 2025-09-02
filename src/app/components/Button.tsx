"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  href?: string;
  as?: "button" | "a";
}

const Button = ({
  children,
  variant = "default",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  href,
  as = "button",
}: ButtonProps) => {
  const baseClasses =
    "font-semibold rounded-xl transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    default:
      "bg-gradient-to-r from-[#22223b] to-[#4a4e69] text-white hover:from-[#4a4e69] hover:to-[#22223b] focus:ring-[#4a4e69] shadow-lg hover:shadow-xl",
    outline:
      "bg-white text-[#22223b] border-2 border-[#4a4e69] hover:bg-[#4a4e69] hover:text-white focus:ring-[#4a4e69] hover:shadow-lg",
  };

  const sizeClasses = {
    sm: "!px-4 !py-2 text-sm",
    md: "!px-6 !py-3 text-base",
    lg: "!px-8 !py-4 text-lg",
  };

  const sizeStyles = {
    sm: { padding: "8px 16px" },
    md: { padding: "12px 24px" },
    lg: { padding: "16px 32px" },
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.1 },
  };

  if (as === "a" && href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        style={sizeStyles[size]}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      style={sizeStyles[size]}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
};

export default Button;
