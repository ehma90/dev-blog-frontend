"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Input from "../../Input";
import Button from "@/components/Button";
import { showToast } from "../../../utils/toast";
import { useLogin } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";


const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const loginMutation = useLogin();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password) {
      showToast.error("Please fill in all fields");
      return;
    }

    if (!formData.email.includes("@")) {
      showToast.error("Please enter a valid email address");
      return;
    }

    // Show loading toast
    const loadingToast = showToast.loading("Signing in...");

    // Use React Query mutation to login user
    loginMutation.mutate(
      {
        email: formData.email,
        password: formData.password,
      },
      {
        onSuccess: () => {
          showToast.dismiss(loadingToast);
          showToast.success(
            "Welcome back! You've been signed in successfully."
          );
          // Redirect to home page
          router.push("/");
        },
        onError: (error: any) => {
          showToast.dismiss(loadingToast);
          const errorMessage =
            error?.response?.data?.message ||
            "Login failed. Please check your credentials and try again.";
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

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={loginMutation.isPending}
      >
        {loginMutation.isPending ? "Signing In..." : "🚀 Sign In"}
      </Button>

      <div className="text-center !my-4">
        <p className="text-[#4a4e69]">
          Don&apos;t have an account?{" "}
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
