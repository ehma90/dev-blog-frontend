"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BlogPostCardProps } from "../../model/types";

const BlogPostCard = ({ post, index }: BlogPostCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
        ease: "easeOut",
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="card group cursor-pointer"
    >
      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gradient-to-r from-[#f2e9e4] to-[#c9ada7] text-[#4a4e69] text-xs font-semibold rounded-full shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="text-xl font-bold text-[#22223b] mb-4 line-clamp-2 group-hover:text-[#4a4e69] transition-colors duration-300">
          {post.title}
        </h2>

        <p className="text-[#4a4e69] mb-6 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between text-sm text-[#4a4e69] mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#22223b] to-[#4a4e69] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">
                {post.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            <span className="font-medium">By {post.author}</span>
          </div>
          <span className="bg-[#f2e9e4] px-2 py-1 rounded-full text-xs font-medium">
            {post.readTime}
          </span>
        </div>

        <div className="text-xs text-[#4a4e69] mb-6 font-medium">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>

        <Link href={`/posts/${post.id}`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
            className="w-full btn-primary"
          >
            Read More →
          </motion.button>
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogPostCard;
