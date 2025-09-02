"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../../components";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f2e9e4] via-white to-[#e8ddd8] opacity-50"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-[#22223b]/10 to-[#4a4e69]/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-[#4a4e69]/10 to-[#22223b]/10 rounded-full blur-xl"></div>

      <div className="max-w-md w-full space-y-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-center"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-[#22223b] to-[#4a4e69] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-2xl font-bold">👋</span>
          </div>
          <h2 className="text-4xl font-bold text-[#22223b] mb-3">
            Welcome Back
          </h2>
          <p className="text-lg text-[#4a4e69]">
            Sign in to your account to continue your journey
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
          className="mt-8 space-y-6 card p-10"
          onSubmit={handleSubmit}
        >
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-[#22223b] mb-3"
              >
                📧 Email Address
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.1 }}
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="form-input w-full"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-[#22223b] mb-3"
              >
                🔒 Password
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.1 }}
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="form-input w-full"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#22223b] focus:ring-[#22223b] border-[#4a4e69] rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-[#4a4e69]"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="text-[#22223b] hover:text-[#4a4e69] transition-colors duration-200"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full">
            🚀 Sign In
          </Button>

          <div className="text-center">
            <p className="text-[#4a4e69]">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="text-[#22223b] hover:text-[#4a4e69] transition-colors duration-200 font-medium"
              >
                Sign up here
              </Link>
            </p>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-[#4a4e69] hover:text-[#22223b] transition-colors duration-200"
            >
              ← Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
