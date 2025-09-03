"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useUser, useLogout } from "@/hooks/useAuth";
import { showToast } from "@/utils/toast";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: user, isLoading: userLoading } = useUser();
  const logoutMutation = useLogout();

  // Navigation items for authenticated users
  const authenticatedNavItems = [
    { href: "/", label: "Home" },
    { href: "/create-post", label: "Create Post" },
  ];

  // Navigation items for unauthenticated users
  const unauthenticatedNavItems = [
    { href: "/", label: "Home" },
    { href: "/login", label: "Login" },
    { href: "/register", label: "Register" },
  ];

  // Get user initials from fullName
  const getUserInitials = (fullName: string) => {
    return fullName
      .split(" ")
      .map((name) => name.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  // Handle logout
  const handleLogout = () => {
    logoutMutation.mutate(undefined, {
      onSuccess: () => {
        showToast.success("Logged out successfully");
        setIsMenuOpen(false);
      },
      onError: () => {
        showToast.error("Logout failed. Please try again.");
      },
    });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-gradient-to-r from-[#22223b] to-[#4a4e69] shadow-2xl sticky top-0 z-50 backdrop-blur-md w-full flex justify-center"
      style={{
        background:
          "linear-gradient(135deg, #22223b 0%, #4a4e69 50%, #22223b 100%)",
        boxShadow: "0 8px 32px rgba(34, 34, 59, 0.3)",
      }}
    >
      <div className="max-w-7xl mx-auto w-full !px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#f2e9e4] to-[#c9ada7] rounded-xl flex items-center justify-center">
              <span className="text-[#22223b] font-bold text-lg">D</span>
            </div>
            <Link
              href="/"
              className="text-[#f2e9e4] text-2xl font-bold gradient-text"
            >
              Dev Blog
            </Link>
          </motion.div>

          {/* Navigation Items */}
          <div className="items-center gap-x-4 hidden md:flex">
            {(user ? authenticatedNavItems : unauthenticatedNavItems).map(
              (item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                  className="w-full text-[#f2e9e4] hover:text-white p-2 text-sm font-semibold  whitespace-nowrap hover:border-b-2 hover:border-white/20"
                >
                  <Link href={item.href}>
                    <span>{item.label}</span>
                  </Link>
                </motion.div>
              )
            )}
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center gap-x-4">
              {/* User Profile / Auth Section */}
              {userLoading ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-8 h-8 bg-[#4a4e69] rounded-full animate-pulse"></div>
                  <div className="w-16 h-4 bg-[#4a4e69] rounded animate-pulse"></div>
                </motion.div>
              ) : user ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3"
                >
                  {/* User Avatar with Initials */}
                  <div className="w-8 h-8 bg-gradient-to-br from-[#f2e9e4] to-[#c9ada7] rounded-full flex items-center justify-center">
                    <span className="text-[#22223b] font-bold text-sm">
                      {getUserInitials(user.fullName)}
                    </span>
                  </div>

                  {/* User Name */}
                  <span className="text-[#f2e9e4] text-sm font-medium">
                    {user.fullName}
                  </span>

                  {/* Logout Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLogout}
                    disabled={logoutMutation.isPending}
                    className="text-[#f2e9e4] hover:text-white text-sm font-medium px-3 py-1 rounded-md hover:bg-white/10 transition-colors duration-200 disabled:opacity-50"
                  >
                    {logoutMutation.isPending ? "Logging out..." : "Logout"}
                  </motion.button>
                </motion.div>
              ) : <div/>}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#f2e9e4] hover:text-[#4a4e69] focus:outline-none focus:text-[#4a4e69]"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#4a4e69] !p-3 h-screen absolute top-0 left-0 w-full"
        >
          <div className="flex justify-end">
            <span
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#f2e9e4] hover:text-[#4a4e69] focus:outline-none focus:text-[#4a4e69] border rounded-full !p-3 flex items-center justify-center w-7 h-7 cursor-pointer"
            >
              X
            </span>
          </div>
          <div className="flex flex-col gap-5 sm:px-3">
            {/* Navigation Items */}
            {(user ? authenticatedNavItems : unauthenticatedNavItems).map(
              (item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-[#f2e9e4] hover:border-b-2 border-[#ffffff] hover:border-[#ffffff] block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              )
            )}

            {/* User Profile Section for Mobile */}
            {userLoading ? (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 px-3 py-2"
              >
                <div className="w-8 h-8 bg-[#4a4e69] rounded-full animate-pulse"></div>
                <div className="w-24 h-4 bg-[#4a4e69] rounded animate-pulse"></div>
              </motion.div>
            ) : user ? (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="border-t border-white/20 pt-4 mt-4"
              >
                {/* User Info */}
                <div className="flex items-center gap-3 px-3 py-2 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#f2e9e4] to-[#c9ada7] rounded-full flex items-center justify-center">
                    <span className="text-[#22223b] font-bold text-sm">
                      {getUserInitials(user.fullName)}
                    </span>
                  </div>
                  <div>
                    <p className="text-[#f2e9e4] font-medium">
                      {user.fullName}
                    </p>
                    <p className="text-[#f2e9e4]/70 text-sm">{user.email}</p>
                  </div>
                </div>

                {/* Logout Button */}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLogout}
                  disabled={logoutMutation.isPending}
                  className="!mt-6 block w-full text-left text-[#f2e9e4] hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 disabled:opacity-50"
                >
                  {logoutMutation.isPending ? "Logging out..." : "Logout"}
                </motion.button>
              </motion.div>
            ) : null}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
