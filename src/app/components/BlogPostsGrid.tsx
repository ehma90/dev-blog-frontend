"use client";

import { motion } from "framer-motion";
import { BlogPostsGridProps } from "../../model/types";
import BlogPostCard from "./BlogPostCard";


const BlogPostsGrid = ({ posts }: BlogPostsGridProps) => {
  return (
    <div className="mt-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </motion.div>
    </div>
  );
};

export default BlogPostsGrid;
