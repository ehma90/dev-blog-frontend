"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Input from "../../Input";
import Button from "@/components/Button";
import { showToast } from "../../../utils/toast";
import { useRegister } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";


const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const registerMutation = useRegister();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      showToast.error("Please fill in all fields");
      return;
    }

    if (!formData.email.includes("@")) {
      showToast.error("Please enter a valid email address");
      return;
    }

    if (formData.password.length < 6) {
      showToast.error("Password must be at least 6 characters long");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      showToast.error("Passwords do not match");
      return;
    }

    // Show loading toast
    const loadingToast = showToast.loading("Creating your account...");

    // Use React Query mutation to register user
    registerMutation.mutate(
      {
        fullName: formData.name,
        email: formData.email,
        password: formData.password,
      },
      {
        onSuccess: () => {
          showToast.dismiss(loadingToast);
          showToast.success(
            "Account created successfully! Welcome to Dev Blog!"
          );
          // Redirect to home page
          router.push("/");
        },
        /* eslint-disable @typescript-eslint/no-explicit-any */
        onError: (error: any) => {
          showToast.dismiss(loadingToast);
          const errorMessage =
            error?.response?.data?.message ||
            "Registration failed. Please try again.";
          showToast.error(errorMessage);
        },
      }
    );
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
          id="name"
          name="name"
          type="text"
          label="Full Name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
        />

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
          placeholder="Create a password"
        />

        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          required
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm your password"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={registerMutation.isPending}
      >
        {registerMutation.isPending
          ? "Creating Account..."
          : "🎯 Create Account"}
      </Button>

      <div className="text-center !my-4">
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
  );
};

export default RegisterForm;
