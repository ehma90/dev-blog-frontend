"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "../../../../components";
import Input from "../../../../components/Input";
import { blogPosts } from "@/mock-data/blog-post";

export default function EditPost() {
  const params = useParams();
  const postId = params.id as string;
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    tags: "",
    author: "",
  });

  useEffect(() => {
    const post = blogPosts[postId as keyof typeof blogPosts];
    if (post) {
      setFormData({
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        tags: post.tags.join(", "),
        author: post.author,
      });
    }
  }, [postId]);

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
    // Handle post update logic here
    console.log("Updating post:", formData);
    // In a real app, you would send this to your backend
    alert("Post updated successfully! (This is a demo)");
  };

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
            The blog post your&apos;e trying to edit doesn&apos;t exist.
          </p>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen !mx-auto w-full !py-8">
      <div className="max-w-4xl w-full !mx-auto !px-4 sm:px-6 lg:px-8">
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
                Back
              </Button>
            </Link>
          </motion.div>

          {/* View Post Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className=" text-center"
          >
            <Link href={`/posts/${postId}`}>
              <Button variant="outline">View Post</Button>
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
            Edit Post
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
              Update Post
            </Button>

            <Button
              type="button"
              size="lg"
              className="flex-1 bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700"
            >
              Delete Post
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </div>
  );
}
