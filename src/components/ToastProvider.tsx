"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastProvider = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      toastStyle={{
        backgroundColor: "white",
        color: "#22223b",
        border: "1px solid #4a4e69",
        borderRadius: "12px",
        boxShadow: "0 10px 40px rgba(34, 34, 59, 0.1)",
      }}
    />
  );
};

export default ToastProvider;
