"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  RegisterHeader,
  RegisterForm,
} from "../../components/page-components/loginpage";
import { useEffect } from "react";
import { useUser } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function Register() {
  const { data: user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);


  return (
    <div className="min-h-screen flex lg:items-center justify-center py-12 !px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f2e9e4] via-white to-[#e8ddd8] opacity-50"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-[#22223b]/10 to-[#4a4e69]/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-[#4a4e69]/10 to-[#22223b]/10 rounded-full blur-xl"></div>

      <div className="max-w-md w-full !my-12 lg:my-0 space-y-8 relative z-10">
        <RegisterHeader
          title="Join Dev Blog"
          subtitle="Create your account and start your writing journey"
        />

        <RegisterForm />

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
