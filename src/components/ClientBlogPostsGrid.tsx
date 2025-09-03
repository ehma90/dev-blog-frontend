"use client";

import { motion } from "framer-motion";
import { usePosts } from "@/hooks/usePosts";
import BlogPostCard from "./BlogPostCard";
import { showToast } from "@/utils/toast";

const ClientBlogPostsGrid = () => {
  const { data: posts, isLoading, error } = usePosts();

  if (isLoading) {
    return (
      <div className="mt-8 flex flex-col gap-4 justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#22223b]"></div>
        <span className="ml-3 text-[#4a4e69]">Loading posts...</span>
      </div>
    );
  }

  if (error) {
    showToast.error("Failed to load posts");
    return (
      <div className="mt-8 text-center">
        <p className="text-red-600">Failed to load posts. Please try again.</p>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="mt-8 text-center">
        <p className="text-[#4a4e69]">No posts available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="flex flex-wrap gap-8 justify-center"
      >
        {posts.map((post) => (
          <BlogPostCard key={post._id} post={post} />
        ))}
      </motion.div>
    </div>
  );
};

export default ClientBlogPostsGrid;
