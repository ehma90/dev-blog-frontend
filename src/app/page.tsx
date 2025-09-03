import { HeroSection, BlogPostsGrid, CallToAction } from "../components";
import { getServerPosts } from "../lib/server-api";
import { Metadata } from "next";

// Generate metadata for SEO
export const metadata: Metadata = {
  title: "Dev Blog - Modern Developer Blog Platform",
  description:
    "A modern developer blog platform where developers share their knowledge, insights, and experiences with the community.",
  keywords: [
    "developer blog",
    "programming",
    "web development",
    "tech articles",
    "coding tutorials",
  ],
  authors: [{ name: "Dev Blog Team" }],
  openGraph: {
    title: "Dev Blog - Modern Developer Blog Platform",
    description:
      "A modern developer blog platform where developers share their knowledge, insights, and experiences with the community.",
    type: "website",
    locale: "en_US",
  },
};

export default async function Home() {
  // Fetch posts on the server for SEO
  const posts = await getServerPosts();

  console.log(posts);

  return (
    <div className="flex-1 my-12 flex justify-center items-center">
      <div className="max-w-7xl mx-auto !px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <BlogPostsGrid posts={posts} />
        <CallToAction />
      </div>
    </div>
  );
}
