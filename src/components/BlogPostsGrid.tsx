"use client";

import { motion } from "framer-motion";
import { BlogPostsGridProps } from "../model/types";
import BlogPostCard from "./BlogPostCard";

const BlogPostsGrid = ({ posts }: BlogPostsGridProps) => {
  console.log(posts);
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

export default BlogPostsGrid;
