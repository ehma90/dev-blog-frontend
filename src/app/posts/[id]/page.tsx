import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getServerPost } from "@/lib/server-api";
import AnimatedBlogPost from "@/components/AnimatedBlogPost";
import type { BlogPost } from "@/model/types";

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = await getServerPost(id);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.createdAt,
      authors: [post.authorName],
      tags: post.tags,
    },
  };
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { id: postId } = await params;
  const post: BlogPost | null = await getServerPost(postId);

  if (!post) {
    notFound();
  }

  return <AnimatedBlogPost post={post} />;
}
