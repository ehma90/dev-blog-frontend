import { BlogPost } from "../model/types";

export const blogPosts: BlogPost[] = [
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
