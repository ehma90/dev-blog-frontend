"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "../../../../components";
import Input from "../../../../components/Input";
import { postsApi, type BlogPost, type UpdatePostData } from "@/lib/api";
import { showToast } from "@/utils/toast";
import { useUser } from "@/hooks/useAuth";
import { isPostAuthor } from "@/utils/auth";
import { useDeletePost } from "@/hooks/usePosts";

export default function EditPost() {
  const params = useParams();
  const router = useRouter();
  const { data: user } = useUser();
  const postId = params.id as string;
  const deletePostMutation = useDeletePost();
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    tags: "",
    author: "",
  });
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [canEdit, setCanEdit] = useState(false);

  // Fetch post data
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        const postData = await postsApi.getById(postId);
        setPost(postData);
        setFormData({
          title: postData.title,
          excerpt: postData.excerpt,
          content: postData.content || "",
          tags: postData.tags.join(", "),
          author: postData.authorName,
        });

        // Check if current user can edit this post
        const hasEditPermission = isPostAuthor(
          user || null,
          postData.authorId._id
        );
        setCanEdit(hasEditPermission);

        // If user doesn't have permission, redirect them
        if (!hasEditPermission) {
          showToast.error("You don't have permission to edit this post");
          router.push(`/posts/${postId}`);
          return;
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to fetch post";
        setError(errorMessage);
        showToast.error(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    if (postId && user) {
      fetchPost();
    }
  }, [postId, user, router]);

  // Redirect if not authenticated
  useEffect(() => {
    if (!user) {
      router.push("/login");
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
    setIsUpdating(true);
    setError(null);

    try {
      // Transform form data to match API structure
      const updateData: UpdatePostData = {
        _id: postId,
        title: formData.title,
        excerpt: formData.excerpt,
        content: formData.content,
        authorName: formData.author,
        tags: formData.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag.length > 0),
      };

      const updatedPost = await postsApi.update(updateData);

      showToast.success("Post updated successfully!");

      // Redirect to the updated post
      router.push(`/posts/${updatedPost._id}`);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to update post";
      setError(errorMessage);
      showToast.error(errorMessage);
    } finally {
      setIsUpdating(false);
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center gap-3"
        >
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#22223b] mx-auto mb-4"></div>
          <h1 className="text-2xl font-bold text-[#22223b] mb-2">
            Loading Post...
          </h1>
          <p className="text-[#4a4e69]">
            Please wait while we fetch the post data.
          </p>
        </motion.div>
      </div>
    );
  }

  // Permission denied state
  if (!canEdit && post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-[#22223b] mb-4">
            Access Denied
          </h1>
          <p className="text-[#4a4e69] mb-6">
            You don't have permission to edit this post. Only the author can
            edit their posts.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href={`/posts/${postId}`}>
              <Button variant="outline">View Post</Button>
            </Link>
            <Link href="/">
              <Button>Back to Home</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // Error state
  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-[#22223b] mb-4">
            {error ? "Error Loading Post" : "Post Not Found"}
          </h1>
          <p className="text-[#4a4e69] mb-6">
            {error || "The blog post you're trying to edit doesn't exist."}
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
            <Link href={`/posts/${postId}`}>
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

        {/* Error Display */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6"
          >
            <p className="font-medium">Error updating post:</p>
            <p className="text-sm">{error}</p>
          </motion.div>
        )}

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
              <span>By {post.authorName}</span>
            </div>
            <div className="text-sm">
              {new Date(post.createdAt).toLocaleDateString("en-GB", {
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
              disabled={isUpdating}
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
              disabled={isUpdating}
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
                disabled={isUpdating}
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
              disabled={isUpdating}
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
                disabled={isUpdating}
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
              disabled={isUpdating}
            >
              {isUpdating ? (
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
                  Updating Post...
                </div>
              ) : (
                "Update Post"
              )}
            </Button>

            <Button
              type="button"
              size="lg"
              variant="danger"
              className="flex-1"
              disabled={isUpdating || deletePostMutation.isPending}
              onClick={() => {
                if (
                  confirm(
                    "Are you sure you want to delete this post? This action cannot be undone."
                  )
                ) {
                  deletePostMutation.mutate(postId, {
                    onSuccess: () => {
                      showToast.success("Post deleted successfully!");
                      router.push("/");
                    },
                    onError: (error) => {
                      const errorMessage =
                        error instanceof Error
                          ? error.message
                          : "Failed to delete post";
                      showToast.error(errorMessage);
                    },
                  });
                }
              }}
            >
              {deletePostMutation.isPending ? (
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
                  Deleting...
                </div>
              ) : (
                "Delete Post"
              )}
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </div>
  );
}
