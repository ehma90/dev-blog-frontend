import { BlogPost } from "@/model/types";
import { API_CONFIG } from "@/config/api";

// Server-side fetch function for posts
export async function getServerPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}/posts`, {
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
    /* eslint-disable @typescript-eslint/no-explicit-any */
    return posts.map((post: any) => ({
      _id: post._id,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      authorName: post.authorName,
      authorId: post.authorId,
      createdAt: post.createdAt,
      tags: post.tags,
    }));
  } catch (error) {
    console.error("Error fetching posts:", error);

    // Return fallback data if API fails
    return [
      {
        _id: "1",
        title: "Getting Started with Next.js 14",
        excerpt:
          "Learn the fundamentals of Next.js 14 and how to build modern web applications with the latest features.",
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
        _id: "2",
        title: "Building Responsive UIs with Tailwind CSS",
        excerpt:
          "Discover how to create beautiful, responsive user interfaces using Tailwind CSS utility classes.",
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
  }
}

// Server-side fetch function for a single post
export async function getServerPost(id: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}/posts/${id}`, {
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
      _id: post._id,
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      authorName: post.authorName,
      authorId: post.authorId,
      createdAt: post.createdAt,
      tags: post.tags,
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}
