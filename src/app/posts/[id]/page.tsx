"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "../../../components";
import { blogPosts } from "@/mock-data/blog-post";

// Mock data for blog posts

export default function BlogPost() {
  const params = useParams();
  const postId = params.id as string;
  const post = blogPosts[postId as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-[#22223b] mb-4">
            Post Not Found
          </h1>
          <p className="text-[#4a4e69] mb-6">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen !mx-auto !py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
           
          >
            <Link href="/">
              <Button variant="outline" className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Posts
              </Button>
            </Link>
          </motion.div>

          {/* Edit Button (for demo purposes) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className=" text-center"
          >
            <Link href={`/posts/edit/${post.id}`}>
              <Button variant="outline">Edit Post</Button>
            </Link>
          </motion.div>
        </div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="!my-8 flex flex-col justify-between gap-3 items-center"
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="!px-3 !py-1 !bg-[#22223b] text-[#f2e9e4] text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#22223b] mb-4">
            {post.title}
          </h1>

          <div className="flex items-center justify-between gap-4 text-[#4a4e69] mb-6">
            <div className="flex items-center gap-x-4">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <div className="text-sm">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </motion.header>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <div
            className="bg-white rounded-lg shadow-md !p-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              color: "#22223b",
              lineHeight: "1.7",
            }}
          />
        </motion.article>
      </div>
    </div>
  );
}
