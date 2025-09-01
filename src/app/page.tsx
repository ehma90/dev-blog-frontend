"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Mock data for blog posts
const blogPosts = [
  {
    id: "1",
    title: "Getting Started with Next.js 14",
    excerpt:
      "Learn the fundamentals of Next.js 14 and how to build modern web applications with the latest features.",
    author: "John Doe",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["Next.js", "React", "Web Development"],
  },
  {
    id: "2",
    title: "Mastering TypeScript for React",
    excerpt:
      "A comprehensive guide to using TypeScript effectively in React applications for better type safety.",
    author: "Jane Smith",
    date: "2024-01-12",
    readTime: "8 min read",
    tags: ["TypeScript", "React", "Programming"],
  },
  {
    id: "3",
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt:
      "Discover how to create beautiful, responsive user interfaces using Tailwind CSS utility classes.",
    author: "Mike Johnson",
    date: "2024-01-10",
    readTime: "6 min read",
    tags: ["CSS", "Tailwind", "Design"],
  },
  {
    id: "4",
    title: "State Management in Modern React",
    excerpt:
      "Explore different state management solutions for React applications, from useState to Redux Toolkit.",
    author: "Sarah Wilson",
    date: "2024-01-08",
    readTime: "10 min read",
    tags: ["React", "State Management", "Redux"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#22223b] mb-4">
            Welcome to Dev Blog
          </h1>
          <p className="text-xl text-[#4a4e69] max-w-2xl mx-auto">
            Discover the latest insights, tutorials, and stories from the
            developer community
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-[#f2e9e4] text-[#4a4e69] text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-xl font-semibold text-[#22223b] mb-3 line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-[#4a4e69] mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-[#4a4e69] mb-4">
                  <span>By {post.author}</span>
                  <span>{post.readTime}</span>
                </div>

                <div className="text-xs text-[#4a4e69] mb-4">
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
                    className="w-full bg-[#22223b] text-white py-2 px-4 rounded-md hover:bg-[#4a4e69] transition-colors duration-200"
                  >
                    Read More
                  </motion.button>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl font-semibold text-[#22223b] mb-4">
            Ready to share your story?
          </h2>
          <p className="text-[#4a4e69] mb-6">
            Join our community of developers and start writing today
          </p>
          <Link href="/create-post">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#4a4e69] text-white px-8 py-3 rounded-md hover:bg-[#22223b] transition-colors duration-200 font-medium"
            >
              Create Your First Post
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
