"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useUser } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { postsApi, type CreatePostData } from "@/lib/api";
import { showToast } from "@/utils/toast";

export default function CreatePost() {
  const { data: user } = useUser();
  const router = useRouter();
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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else {
      return;
    }
  }, [user, router]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Transform form data to match API structure
      const postData: CreatePostData = {
        title: formData.title,
        excerpt: formData.excerpt,
        content: formData.content,
        authorName: formData.author,
        tags: formData.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag.length > 0),
      };

      const createdPost = await postsApi.create(postData);

      showToast.success("Post created successfully!");

      // Redirect to the created post
      router.push(`/posts/${createdPost._id}`);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to create post";
      setError(errorMessage);
      showToast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen !mx-auto !py-8">
      <div className="max-w-4xl w-full mx-auto !px-4 sm:px-6 lg:px-8">
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

        {/* Error Display */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6"
          >
            <p className="font-medium">Error creating post:</p>
            <p className="text-sm">{error}</p>
          </motion.div>
        )}

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
              disabled={isLoading}
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
              disabled={isLoading}
            />

            <div>
              <label
                htmlFor="excerpt"
                className="block text-sm font-semibold text-[#22223b] !mb-2"
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
                maxLength={150}
                value={formData.excerpt}
                onChange={handleChange}
                className="form-input w-full resize-none"
                placeholder="Write a brief description of your post (this will appear on the homepage)"
                disabled={isLoading}
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
              disabled={isLoading}
            />

            <div>
              <label
                htmlFor="content"
                className="block text-sm font-semibold text-[#22223b] mb-2"
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
                disabled={isLoading}
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
            <Button
              type="submit"
              size="lg"
              className="flex-1"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Creating Post...
                </div>
              ) : (
                "Publish Post"
              )}
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </div>
  );
}
