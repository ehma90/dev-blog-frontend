import { BlogPost } from "@/model/types";

// Server-side API configuration
const SERVER_API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000",
  TIMEOUT: 10000,
} as const;

// Server-side fetch function for posts
export async function getServerPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${SERVER_API_CONFIG.BASE_URL}/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // Add cache control for better performance
      next: {
        revalidate: 60, // Revalidate every 60 seconds
        tags: ["posts"],
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch posts: ${response.status} ${response.statusText}`
      );
    }

    const posts = await response.json();

    // Transform the API response to match our BlogPost interface
    return posts.map((post: any) => ({
      id: post.id,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      author: post.author,
      date: post.date,
      readTime: post.readTime,
      tags: post.tags,
    }));
  } catch (error) {
    console.error("Error fetching posts:", error);

    // Return fallback data if API fails
    return [
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
        title: "Building Responsive UIs with Tailwind CSS",
        excerpt:
          "Discover how to create beautiful, responsive user interfaces using Tailwind CSS utility classes.",
        author: "Mike Johnson",
        date: "2024-01-10",
        readTime: "6 min read",
        tags: ["CSS", "Tailwind", "Design"],
      },
    ];
  }
}

// Server-side fetch function for a single post
export async function getServerPost(id: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`${SERVER_API_CONFIG.BASE_URL}/posts/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 60,
        tags: ["posts", `post-${id}`],
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(
        `Failed to fetch post: ${response.status} ${response.statusText}`
      );
    }

    const post = await response.json();

    return {
      id: post.id,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      author: post.author,
      date: post.date,
      readTime: post.readTime,
      tags: post.tags,
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}
