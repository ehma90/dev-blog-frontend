"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

export default function CreatePost() {
  const [formData, setFormData] = useState<{
    title: string;
    excerpt: string;
    content: string;
    tags: string;
    author: string;
  }>({
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
    <div className="min-h-screen !mx-auto !py-8">
      <div className="max-w-4xl mx-auto !px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
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
              Back 
            </Button>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="!my-8 text-center"
        >
          <h1 className="text-4xl font-bold text-[#22223b] mb-3">
            Create New Post
          </h1>
          <p className="text-lg text-[#4a4e69]">
            Share your knowledge and insights with the developer community
          </p>
        </motion.header>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-y-4">
            <Input
              id="title"
              name="title"
              type="text"
              label="Post Title"
              required
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter a compelling title for your post"
              className="text-lg"
            />

            <Input
              id="author"
              name="author"
              type="text"
              label="Author Name"
              required
              value={formData.author}
              onChange={handleChange}
              placeholder="Your name"
            />

            <div>
              <label
                htmlFor="excerpt"
                className="block text-sm font-semibold text-[#22223b] mb-3"
              >
                Post Excerpt
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.1 }}
                id="excerpt"
                name="excerpt"
                required
                rows={3}
                value={formData.excerpt}
                onChange={handleChange}
                className="form-input w-full resize-none"
                placeholder="Write a brief description of your post (this will appear on the homepage)"
              />
            </div>

            <Input
              id="tags"
              name="tags"
              type="text"
              label="Tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="Enter tags separated by commas (e.g., React, JavaScript, Tutorial)"
            />

            <div>
              <label
                htmlFor="content"
                className="block text-sm font-semibold text-[#22223b] mb-3"
              >
                Post Content
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.1 }}
                id="content"
                name="content"
                required
                rows={15}
                value={formData.content}
                onChange={handleChange}
                className="form-input w-full resize-none"
                placeholder="Write your post content here. You can use HTML tags for formatting."
              />
              <p className="text-sm text-[#4a4e69] mt-2">
                You can use HTML tags for formatting (e.g., &lt;h2&gt;,
                &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;code&gt;)
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 !mt-8"
          >
            <Button type="submit" size="lg" className="flex-1">
              Publish Post
            </Button>

            
          </motion.div>
        </motion.form>
      </div>
    </div>
  );
}
