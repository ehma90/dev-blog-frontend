"use client";

import Link from "next/link";
import Button from "./Button";
import AnimationWrapper from "./AnimationWrapper";
import { useUser } from "@/hooks/useAuth";
import { isPostAuthor } from "@/utils/auth";
import type { BlogPost } from "@/model/types";

interface AnimatedBlogPostProps {
  post: BlogPost;
}

export default function AnimatedBlogPost({ post }: AnimatedBlogPostProps) {
  const { data: currentUser } = useUser();
  const canEdit = isPostAuthor(currentUser || null, post.authorId._id);


  return (
    <div className="min-h-screen !mx-auto !py-8">
      <div className="!max-w-4xl !w-full mx-auto !px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          {/* Back Button */}
          <AnimationWrapper
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
          </AnimationWrapper>

          {/* Edit Button - Only show if user is the author */}
          {canEdit && (
            <AnimationWrapper
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <Link href={`/posts/edit/${post._id}`}>
                <Button variant="outline">Edit Post</Button>
              </Link>
            </AnimationWrapper>
          )}
        </div>

        {/* Article Header */}
        <AnimationWrapper
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="!my-8 flex flex-col justify-between gap-3 items-center"
        >
          

          <h1 className="text-3xl md:text-4xl font-bold text-[#22223b] mb-4">
            {post.title}
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
        </AnimationWrapper>

        {/* Article Content */}
        <AnimationWrapper
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          <div
            className="bg-white rounded-lg shadow-md !p-8"
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
            style={{
              color: "#22223b",
              lineHeight: "1.7",
            }}
          />
        </AnimationWrapper>
      </div>
    </div>
  );
}
