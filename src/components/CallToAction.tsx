"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "./Button";

const CallToAction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="flex justify-center items-center !my-20"
    >
      <div className="card p-12 max-w-4xl mx-auto flex flex-col gap-y-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#22223b] mb-6"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2, delay: 0.1, ease: "easeOut" }}
        >
          Ready to share your story?
        </motion.h2>
        <motion.p
          className="text-lg text-[#4a4e69] mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.2, ease: "easeOut" }}
        >
          Join our community of developers and start writing today. Share your
          knowledge, learn from others, and build your reputation in the tech
          community.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/create-post">
            <Button size="lg">✍️ Create Your First Post</Button>
          </Link>
          <Link href="/register">
            <Button variant="outline" size="lg">
              🚀 Join Community
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CallToAction;
