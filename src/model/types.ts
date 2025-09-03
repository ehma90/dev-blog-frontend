export interface BlogPost {
  _id: string;
  title: string;
  excerpt: string;
  content?: string;
  authorName: string;
  authorId: {
    _id: string;
    fullName: string;
    email: string;
  };
  date?: string;
  createdAt: string;
  tags: string[];
}

export interface BlogPostCardProps {
  post: BlogPost;
}

export interface BlogPostsGridProps {
  posts: BlogPost[];
}
