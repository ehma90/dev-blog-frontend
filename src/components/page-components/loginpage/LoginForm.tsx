"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Input from "../../Input";
import Button from "@/components/Button";

interface LoginFormProps {
  onSubmit: (formData: { email: string; password: string }) => void;
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
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
    onSubmit(formData);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
      className="mt-8 space-y-6 card p-10"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-y-6 !mb-8">
        <Input
          id="email"
          name="email"
          type="email"
          label="Email Address"
         
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
        />

        <Input
          id="password"
          name="password"
          type="password"
          label="Password"
          required
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        🚀 Sign In
      </Button>

      <div className="text-center !my-4">
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
  );
};

export default LoginForm;
