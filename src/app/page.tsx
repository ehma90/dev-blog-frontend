import {
  HeroSection,
  BlogPostsGrid,
  CallToAction,
  blogPosts,
} from "./components";

export default function Home() {
  return (
    <div className="flex-1 my-12 flex justify-center items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <BlogPostsGrid posts={blogPosts} />
        <CallToAction />
      </div>
    </div>
  );
}
