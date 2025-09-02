export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}

export interface BlogPostCardProps {
  post: BlogPost;
}

export interface BlogPostsGridProps {
  posts: BlogPost[];
}
