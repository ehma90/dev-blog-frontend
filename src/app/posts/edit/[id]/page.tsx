"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "../../../../components";

// Mock data for blog posts (same as in the single post page)
const blogPosts = {
  "1": {
    id: "1",
    title: "Getting Started with Next.js 14",
    excerpt:
      "Learn the fundamentals of Next.js 14 and how to build modern web applications with the latest features.",
    content: `
      <h2>Introduction</h2>
      <p>Next.js 14 brings exciting new features and improvements that make building modern web applications even more enjoyable. In this comprehensive guide, we'll explore the key features and how to get started with the latest version.</p>
      
      <h2>What's New in Next.js 14</h2>
      <p>Next.js 14 introduces several groundbreaking features:</p>
      <ul>
        <li><strong>App Router (Stable):</strong> The App Router is now stable and provides a more intuitive way to structure your applications.</li>
        <li><strong>Server Components:</strong> Build faster applications with Server Components that run on the server.</li>
        <li><strong>Improved Performance:</strong> Better bundle optimization and faster build times.</li>
        <li><strong>Enhanced Developer Experience:</strong> Better error messages and debugging tools.</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To create a new Next.js 14 project, run the following command:</p>
      <pre><code>npx create-next-app@latest my-app</code></pre>
      
      <p>This will create a new Next.js application with all the latest features and best practices.</p>
      
      <h2>Project Structure</h2>
      <p>The new App Router uses a different file structure. Here's what you need to know:</p>
      <ul>
        <li><code>app/</code> directory contains your application code</li>
        <li><code>app/page.tsx</code> is your homepage</li>
        <li><code>app/layout.tsx</code> defines your root layout</li>
        <li>Route folders create new routes automatically</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Next.js 14 is a powerful framework that makes building modern web applications easier than ever. With its stable App Router, Server Components, and improved performance, it's the perfect choice for your next project.</p>
    `,
    author: "John Doe",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["Next.js", "React", "Web Development"],
  },
  "2": {
    id: "2",
    title: "Mastering TypeScript for React",
    excerpt:
      "A comprehensive guide to using TypeScript effectively in React applications for better type safety.",
    content: `
      <h2>Why TypeScript?</h2>
      <p>TypeScript brings static type checking to JavaScript, making your React applications more robust and maintainable. It helps catch errors at compile time and provides better IDE support.</p>
      
      <h2>Setting Up TypeScript with React</h2>
      <p>To add TypeScript to an existing React project:</p>
      <pre><code>npm install --save-dev typescript @types/react @types/react-dom</code></pre>
      
      <h2>Basic Type Definitions</h2>
      <p>Here are some essential TypeScript patterns for React:</p>
      <pre><code>
interface Props {
  title: string;
  count: number;
  isActive: boolean;
}

const MyComponent: React.FC<Props> = ({ title, count, isActive }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Count: {count}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
};
      </code></pre>
      
      <h2>Advanced Patterns</h2>
      <p>TypeScript enables powerful patterns like generic components and strict type checking. This leads to more reliable code and better developer experience.</p>
    `,
    author: "Jane Smith",
    date: "2024-01-12",
    readTime: "8 min read",
    tags: ["TypeScript", "React", "Programming"],
  },
  "3": {
    id: "3",
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt:
      "Discover how to create beautiful, responsive user interfaces using Tailwind CSS utility classes.",
    content: `
      <h2>Introduction to Tailwind CSS</h2>
      <p>Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. It's perfect for creating responsive, modern user interfaces.</p>
      
      <h2>Key Concepts</h2>
      <ul>
        <li><strong>Utility Classes:</strong> Small, single-purpose classes that can be combined</li>
        <li><strong>Responsive Design:</strong> Built-in responsive prefixes (sm:, md:, lg:, xl:)</li>
        <li><strong>Customization:</strong> Easy to customize colors, spacing, and other design tokens</li>
      </ul>
      
      <h2>Responsive Design Example</h2>
      <pre><code>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="bg-blue-500 p-4 rounded-lg">
    <h3 className="text-lg font-semibold">Card 1</h3>
    <p className="text-sm">Responsive content</p>
  </div>
</div>
      </code></pre>
      
      <h2>Best Practices</h2>
      <p>When using Tailwind CSS, follow these best practices for maintainable code:</p>
      <ul>
        <li>Use consistent spacing and sizing</li>
        <li>Create reusable component classes when needed</li>
        <li>Leverage the responsive utilities effectively</li>
        <li>Keep your design system consistent</li>
      </ul>
    `,
    author: "Mike Johnson",
    date: "2024-01-10",
    readTime: "6 min read",
    tags: ["CSS", "Tailwind", "Design"],
  },
  "4": {
    id: "4",
    title: "State Management in Modern React",
    excerpt:
      "Explore different state management solutions for React applications, from useState to Redux Toolkit.",
    content: `
      <h2>Understanding State Management</h2>
      <p>State management is crucial for building complex React applications. Let's explore different approaches and when to use each one.</p>
      
      <h2>Built-in State Solutions</h2>
      <h3>useState Hook</h3>
      <p>The useState hook is perfect for local component state:</p>
      <pre><code>
const [count, setCount] = useState(0);
const [user, setUser] = useState(null);
      </code></pre>
      
      <h3>useReducer Hook</h3>
      <p>For complex state logic, useReducer provides more control:</p>
      <pre><code>
const [state, dispatch] = useReducer(reducer, initialState);
      </code></pre>
      
      <h2>External State Management</h2>
      <h3>Redux Toolkit</h3>
      <p>Redux Toolkit simplifies Redux usage with less boilerplate:</p>
      <ul>
        <li>Simplified store setup</li>
        <li>Built-in Redux DevTools</li>
        <li>Immer for immutable updates</li>
      </ul>
      
      <h3>Zustand</h3>
      <p>Zustand is a lightweight alternative to Redux:</p>
      <ul>
        <li>Minimal boilerplate</li>
        <li>TypeScript support</li>
        <li>No providers needed</li>
      </ul>
      
      <h2>Choosing the Right Solution</h2>
      <p>Consider these factors when choosing a state management solution:</p>
      <ul>
        <li>Application complexity</li>
        <li>Team experience</li>
        <li>Performance requirements</li>
        <li>Developer experience</li>
      </ul>
    `,
    author: "Sarah Wilson",
    date: "2024-01-08",
    readTime: "10 min read",
    tags: ["React", "State Management", "Redux"],
  },
};

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
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-4 mb-4">
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
                Back to Home
              </Button>
            </Link>

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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                View Post
              </Button>
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#22223b] mb-2">
            Edit Post
          </h1>
          <p className="text-[#4a4e69]">Make changes to your blog post</p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg shadow-md p-8"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
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

        {/* Last Updated Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 bg-white rounded-lg shadow-md p-6"
        >
          <h3 className="text-lg font-semibold text-[#22223b] mb-4">
            Post Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#4a4e69]">
            <div>
              <span className="font-medium">Created:</span>{" "}
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div>
              <span className="font-medium">Read Time:</span> {post.readTime}
            </div>
            <div>
              <span className="font-medium">Post ID:</span> {post.id}
            </div>
            <div>
              <span className="font-medium">Status:</span> Published
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
