"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import { showToast } from "../utils/toast";

const ToastDemo = () => {
  const handleSuccess = () => {
    showToast.success("This is a success message! 🎉");
  };

  const handleError = () => {
    showToast.error("This is an error message! ❌");
  };

  const handleInfo = () => {
    showToast.info("This is an info message! ℹ️");
  };

  const handleWarning = () => {
    showToast.warning("This is a warning message! ⚠️");
  };

  const handleLoading = () => {
    const loadingToast = showToast.loading("Loading...");

    setTimeout(() => {
      showToast.update(loadingToast, "Loading complete!", "success");
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card p-6 mb-8"
    >
      <h3 className="text-xl font-bold text-[#22223b] mb-4">
        Toast Notifications Demo
      </h3>
      <p className="text-[#4a4e69] mb-6">
        Click the buttons below to see different types of toast notifications in
        action.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Button onClick={handleSuccess} variant="outline" size="sm">
          Success Toast
        </Button>
        <Button onClick={handleError} variant="outline" size="sm">
          Error Toast
        </Button>
        <Button onClick={handleInfo} variant="outline" size="sm">
          Info Toast
        </Button>
        <Button onClick={handleWarning} variant="outline" size="sm">
          Warning Toast
        </Button>
        <Button
          onClick={handleLoading}
          variant="outline"
          size="sm"
          className="col-span-2 md:col-span-1"
        >
          Loading Toast
        </Button>
      </div>
    </motion.div>
  );
};

export default ToastDemo;
