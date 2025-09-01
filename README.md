# Components Directory

This directory contains all the reusable components for the Dev Blog application.

## Structure

```
components/
├── index.ts              # Barrel exports for all components
├── types.ts              # TypeScript type definitions
├── data.ts               # Mock data for blog posts
├── Navigation.tsx        # Main navigation component
├── HeroSection.tsx       # Homepage hero section
├── BlogPostCard.tsx      # Individual blog post card
├── BlogPostsGrid.tsx     # Grid layout for blog posts
├── CallToAction.tsx      # Call-to-action section
└── README.md            # This file
```

## Components

### HeroSection

- **Purpose**: Main hero section of the homepage
- **Features**: Animated title, description, and feature badges
- **Props**: None (self-contained)

### BlogPostCard

- **Purpose**: Individual blog post card component
- **Features**: Tags, title, excerpt, author info, read time, date
- **Props**: `BlogPostCardProps` (post data and index)

### BlogPostsGrid

- **Purpose**: Grid layout container for blog posts
- **Features**: Responsive grid with staggered animations
- **Props**: `BlogPostsGridProps` (array of blog posts)

### CallToAction

- **Purpose**: Call-to-action section encouraging user engagement
- **Features**: Animated buttons for creating posts and joining community
- **Props**: None (self-contained)

### Navigation

- **Purpose**: Main site navigation
- **Features**: Responsive menu, logo, navigation links
- **Props**: None (self-contained)

## Types

### BlogPost

```typescript
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}
```

### BlogPostCardProps

```typescript
interface BlogPostCardProps {
  post: BlogPost;
  index: number;
}
```

### BlogPostsGridProps

```typescript
interface BlogPostsGridProps {
  posts: BlogPost[];
}
```

## Usage

Import components from the barrel export:

```typescript
import {
  HeroSection,
  BlogPostsGrid,
  CallToAction,
  blogPosts,
} from "./components";
```

## Benefits of Code Splitting

1. **Reusability**: Components can be reused across different pages
2. **Maintainability**: Easier to maintain and update individual components
3. **Testing**: Each component can be tested in isolation
4. **Performance**: Better code splitting and lazy loading opportunities
5. **Organization**: Cleaner, more organized codebase structure
6. **Type Safety**: Proper TypeScript interfaces for all components
