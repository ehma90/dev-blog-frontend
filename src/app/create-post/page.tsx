"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../components";

export default function CreatePost() {
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    tags: "",
    author: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle post creation logic here
    console.log("Creating post:", formData);
    // In a real app, you would send this to your backend
    alert("Post created successfully! (This is a demo)");
  };

  return (
    <div className="min-h-screen py-12 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f2e9e4] via-white to-[#e8ddd8] opacity-30"></div>
      <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-[#22223b]/5 to-[#4a4e69]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-br from-[#4a4e69]/5 to-[#22223b]/5 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mb-12"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
              className="flex items-center text-[#4a4e69] hover:text-[#22223b] transition-colors duration-150 mb-4"
            >
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
              Back to Home
            </motion.button>
          </Link>

          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-[#22223b] to-[#4a4e69] rounded-3xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-3xl font-bold">✍️</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#22223b] mb-4">
              Create New Post
            </h1>
            <p className="text-xl text-[#4a4e69] max-w-2xl mx-auto">
              Share your knowledge and insights with the developer community.
              Your voice matters in shaping the future of technology.
            </p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
          className="card p-10"
          onSubmit={handleSubmit}
        >
          <div className="space-y-6">
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-[#22223b] mb-2"
              >
                Post Title *
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                id="title"
                name="title"
                type="text"
                required
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#4a4e69] rounded-md focus:outline-none focus:ring-2 focus:ring-[#22223b] focus:border-transparent transition-all duration-200 text-lg"
                placeholder="Enter a compelling title for your post"
              />
            </div>

            {/* Author */}
            <div>
              <label
                htmlFor="author"
                className="block text-sm font-medium text-[#22223b] mb-2"
              >
                Author Name *
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                id="author"
                name="author"
                type="text"
                required
                value={formData.author}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#4a4e69] rounded-md focus:outline-none focus:ring-2 focus:ring-[#22223b] focus:border-transparent transition-all duration-200"
                placeholder="Your name"
              />
            </div>

            {/* Excerpt */}
            <div>
              <label
                htmlFor="excerpt"
                className="block text-sm font-medium text-[#22223b] mb-2"
              >
                Post Excerpt *
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                id="excerpt"
                name="excerpt"
                required
                rows={3}
                value={formData.excerpt}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#4a4e69] rounded-md focus:outline-none focus:ring-2 focus:ring-[#22223b] focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Write a brief description of your post (this will appear on the homepage)"
              />
            </div>

            {/* Tags */}
            <div>
              <label
                htmlFor="tags"
                className="block text-sm font-medium text-[#22223b] mb-2"
              >
                Tags
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                id="tags"
                name="tags"
                type="text"
                value={formData.tags}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#4a4e69] rounded-md focus:outline-none focus:ring-2 focus:ring-[#22223b] focus:border-transparent transition-all duration-200"
                placeholder="Enter tags separated by commas (e.g., React, JavaScript, Tutorial)"
              />
              <p className="text-sm text-[#4a4e69] mt-1">
                Separate multiple tags with commas
              </p>
            </div>

            {/* Content */}
            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-[#22223b] mb-2"
              >
                Post Content *
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                id="content"
                name="content"
                required
                rows={15}
                value={formData.content}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#4a4e69] rounded-md focus:outline-none focus:ring-2 focus:ring-[#22223b] focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Write your post content here. You can use HTML tags for formatting."
              />
              <p className="text-sm text-[#4a4e69] mt-1">
                You can use HTML tags for formatting (e.g., &lt;h2&gt;,
                &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;code&gt;)
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Button type="submit" size="lg" className="flex-1">
              🚀 Publish Post
            </Button>

            <Button
              type="button"
              variant="outline"
              size="lg"
              className="flex-1"
            >
              💾 Save as Draft
            </Button>
          </motion.div>
        </motion.form>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 bg-white rounded-lg shadow-md p-6"
        >
          <h3 className="text-lg font-semibold text-[#22223b] mb-4">
            Writing Tips
          </h3>
          <ul className="space-y-2 text-[#4a4e69]">
            <li className="flex items-start">
              <span className="text-[#22223b] mr-2">•</span>
              Write a clear, descriptive title that tells readers what to expect
            </li>
            <li className="flex items-start">
              <span className="text-[#22223b] mr-2">•</span>
              Use the excerpt to provide a compelling summary of your post
            </li>
            <li className="flex items-start">
              <span className="text-[#22223b] mr-2">•</span>
              Add relevant tags to help readers discover your content
            </li>
            <li className="flex items-start">
              <span className="text-[#22223b] mr-2">•</span>
              Use HTML tags for proper formatting and structure
            </li>
            <li className="flex items-start">
              <span className="text-[#22223b] mr-2">•</span>
              Include code examples and practical insights
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
