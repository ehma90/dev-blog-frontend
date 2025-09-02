"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Registration attempt:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f2e9e4] via-white to-[#e8ddd8] opacity-50"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-[#22223b]/10 to-[#4a4e69]/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-[#4a4e69]/10 to-[#22223b]/10 rounded-full blur-xl"></div>

      <div className="max-w-md w-full space-y-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-center"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-[#22223b] to-[#4a4e69] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-2xl font-bold">🎉</span>
          </div>
          <h2 className="text-4xl font-bold text-[#22223b] mb-3">
            Join Dev Blog
          </h2>
          <p className="text-lg text-[#4a4e69]">
            Create your account and start your writing journey
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
          className="mt-8 space-y-6 card p-10"
          onSubmit={handleSubmit}
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#22223b] mb-2"
              >
                Full Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#4a4e69] rounded-md focus:outline-none focus:ring-2 focus:ring-[#22223b] focus:border-transparent transition-all duration-200"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#22223b] mb-2"
              >
                Email Address
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#4a4e69] rounded-md focus:outline-none focus:ring-2 focus:ring-[#22223b] focus:border-transparent transition-all duration-200"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#22223b] mb-2"
              >
                Password
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#4a4e69] rounded-md focus:outline-none focus:ring-2 focus:ring-[#22223b] focus:border-transparent transition-all duration-200"
                placeholder="Create a password"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-[#22223b] mb-2"
              >
                Confirm Password
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#4a4e69] rounded-md focus:outline-none focus:ring-2 focus:ring-[#22223b] focus:border-transparent transition-all duration-200"
                placeholder="Confirm your password"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-[#22223b] focus:ring-[#22223b] border-[#4a4e69] rounded"
            />
            <label
              htmlFor="terms"
              className="ml-2 block text-sm text-[#4a4e69]"
            >
              I agree to the{" "}
              <a
                href="#"
                className="text-[#22223b] hover:text-[#4a4e69] transition-colors duration-200"
              >
                Terms and Conditions
              </a>
            </label>
          </div>

          <Button type="submit" size="lg" className="w-full">
            🎯 Create Account
          </Button>

          <div className="text-center">
            <p className="text-[#4a4e69]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#22223b] hover:text-[#4a4e69] transition-colors duration-200 font-medium"
              >
                Sign in here
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
