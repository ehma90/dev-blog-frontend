import { BlogPost } from "../model/types";

export const blogPosts: BlogPost[] = [
  {
    _id: "1",
    title: "Getting Started with Next.js 14",
    excerpt:
      "Learn the fundamentals of Next.js 14 and how to build modern web applications with the latest features.",
    content: "This is a comprehensive guide to Next.js 14...",
    authorName: "John Doe",
    authorId: {
      _id: "123",
      fullName: "John Doe",
      email: "john@example.com",
    },
    createdAt: "2024-01-15T10:30:00Z",
    tags: ["Next.js", "React", "Web Development"],
  },
  {
    _id: "3",
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt:
      "Discover how to create beautiful, responsive user interfaces using Tailwind CSS utility classes.",
    content: "Tailwind CSS is a utility-first CSS framework...",
    authorName: "Mike Johnson",
    authorId: {
      _id: "456",
      fullName: "Mike Johnson",
      email: "mike@example.com",
    },
    createdAt: "2024-01-10T14:45:00Z",
    tags: ["CSS", "Tailwind", "Design"],
  },
];
