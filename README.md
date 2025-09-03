# Dev Blog - Next.js Application

A modern, responsive developer blog platform built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. This application provides a complete blogging experience with API integration, authentication, post management, and real-time cache invalidation using React Query.

## 🚀 Features

### Core Functionality

- **Homepage**: Blog posts grid with hero section and call-to-action
- **Blog Posts**: Dynamic routing for individual blog posts (`/posts/[id]`)
- **Authentication**: Login and registration pages with form validation
- **Post Management**: Create, edit, and delete blog posts with API integration
- **Real-time Updates**: Automatic cache invalidation using React Query
- **Authorization**: Role-based access control for post editing
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Animations**: Smooth Framer Motion animations throughout the app

### UI/UX Features

- **Toast Notifications**: Real-time feedback using react-toastify
- **Form Validation**: Client-side validation with error handling
- **Loading States**: Interactive loading indicators with spinners
- **Error Handling**: Comprehensive error states and user feedback
- **Consistent Design**: Unified design system with custom color palette
- **Accessibility**: Proper focus states and keyboard navigation
- **Optimistic Updates**: Immediate UI feedback with background sync

## 🎨 Design System

### Color Palette

- **Primary Dark**: `#22223b` - Main text and primary elements
- **Primary Light**: `#f2e9e4` - Background and light elements
- **Secondary**: `#4a4e69` - Accent color and borders
- **White**: `#ffffff` - Cards and contrast elements
- **Accent**: `#9a8c98` - Additional accent color
- **Light Accent**: `#c9ada7` - Subtle accent variations

### Typography

- **Font Family**: Geist Sans (primary), Geist Mono (code)
- **Font Weights**: 400 (body), 600 (semibold), 700 (bold)
- **Line Heights**: 1.2 (headings), 1.7 (body text)

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles and CSS variables
│   ├── layout.tsx               # Root layout with navigation
│   ├── page.tsx                 # Homepage with client-side posts
│   ├── login/                   # Authentication pages
│   │   └── page.tsx
│   ├── register/
│   │   └── page.tsx
│   ├── create-post/             # Post creation with API integration
│   │   └── page.tsx
│   └── posts/                   # Blog post pages
│       ├── [id]/
│       │   ├── page.tsx         # Individual blog post (server-side)
│       │   └── not-found.tsx    # 404 page for posts
│       └── edit/
│           └── [id]/
│               └── page.tsx     # Edit blog post with authorization
├── components/                  # Reusable components
│   ├── Button.tsx              # Button component with variants
│   ├── Input.tsx               # Form input component
│   ├── BlogPostCard.tsx        # Blog post card component
│   ├── BlogPostsGrid.tsx       # Server-side posts grid
│   ├── ClientBlogPostsGrid.tsx # Client-side posts grid with React Query
│   ├── AnimatedBlogPost.tsx    # Animated blog post display
│   ├── AnimationWrapper.tsx    # Framer Motion wrapper
│   ├── ToastProvider.tsx       # Toast notification provider
│   ├── ToastDemo.tsx           # Toast demonstration component
│   └── page-components/        # Page-specific components
│       ├── homepage/
│       │   └── HeroSection.tsx
│       ├── loginpage/
│       │   ├── LoginHeader.tsx
│       │   └── LoginForm.tsx
│       └── registerpage/
│           ├── RegisterHeader.tsx
│           └── RegisterForm.tsx
├── hooks/                       # Custom React hooks
│   ├── useAuth.ts              # Authentication hook
│   └── usePosts.ts             # Posts management with React Query
├── lib/                         # Library and API utilities
│   ├── api.ts                  # Client-side API functions
│   ├── server-api.ts           # Server-side API functions
│   └── query-client.ts         # React Query configuration
├── model/                      # Type definitions
│   └── types.ts                # TypeScript interfaces
├── providers/                   # React context providers
│   └── QueryProvider.tsx       # React Query provider
├── utils/                      # Utility functions
│   ├── toast.ts                # Toast notification utilities
│   └── auth.ts                 # Authorization utilities
└── mock-data/                  # Mock data for development
    ├── data.ts                 # Sample blog posts
    └── blog-post.ts            # Blog post mock data
```

## 🛠️ Technology Stack

### Core Technologies

- **Next.js 15**: React framework with App Router and async params
- **TypeScript**: Type-safe development with strict mode
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library with client-side boundaries

### State Management & Data Fetching

- **React Query (TanStack Query)**: Server state management and caching
- **React Hooks**: Custom hooks for authentication and posts
- **Optimistic Updates**: Real-time UI updates with background sync

### Additional Packages

- **react-toastify**: Toast notifications with custom styling
- **Next.js Fonts**: Geist font family integration
- **HTTP Client**: Native fetch API with custom configuration

## 🎯 Key Components

### Button Component

```typescript
interface ButtonProps {
  children: ReactNode;
  variant?: "default" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  href?: string;
  as?: "button" | "a";
}
```

**Features:**

- Three variants: default (gradient), outline, and danger (red)
- Three sizes: small, medium, large
- Built-in Framer Motion animations
- TypeScript support with proper interfaces
- Can render as button or link
- Loading state support with spinner

### Input Component

```typescript
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: string;
  error?: string;
  className?: string;
}
```

**Features:**

- Consistent styling with form-input class
- Optional label and icon support
- Error state handling
- Framer Motion focus animations
- Forward ref support

### Toast System

```typescript
const showToast = {
  success: (message: string) => void;
  error: (message: string) => void;
  info: (message: string) => void;
  warning: (message: string) => void;
  loading: (message: string) => string | number;
  dismiss: (toastId: string | number) => void;
  update: (toastId: string | number, message: string, type: string) => void;
};
```

**Features:**

- Multiple toast types (success, error, info, warning, loading)
- Custom styling matching design system
- Auto-dismiss with configurable timing
- Loading state management
- Update and dismiss functionality

## 🔌 API Integration & Data Management

### React Query Implementation

The application uses React Query (TanStack Query) for efficient server state management:

```typescript
// Custom hooks for data fetching
export const usePosts = () => {
  return useQuery({
    queryKey: queryKeys.posts.lists(),
    queryFn: postsApi.getAll,
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postsApi.delete,
    onSuccess: (_, deletedId) => {
      // Automatic cache invalidation
      queryClient.removeQueries({
        queryKey: queryKeys.posts.detail(deletedId),
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.posts.lists(),
      });
    },
  });
};
```

### API Configuration

```typescript
// Centralized API configuration
const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api",
  ENDPOINTS: {
    POSTS: "/posts",
    USERS: "/users",
    AUTH: "/auth",
  },
};

// Custom headers with authentication
const createHeaders = (includeAuth: boolean = false) => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (includeAuth) {
    const token = localStorage.getItem("authToken");
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  }

  return headers;
};
```

### Cache Management Features

- **Automatic Invalidation**: Posts list updates after create/update/delete operations
- **Optimistic Updates**: Immediate UI feedback with background synchronization
- **Error Handling**: Comprehensive error states with retry logic
- **Loading States**: Skeleton loaders and spinners during data fetching
- **Stale Time**: 5-minute cache freshness for optimal performance

### Authorization System

```typescript
// Role-based access control
export function isPostAuthor(
  currentUser: User | null,
  postAuthorId: string
): boolean {
  if (!currentUser) return false;
  return currentUser.id === postAuthorId;
}

// Usage in components
const canEdit = isPostAuthor(currentUser, post.authorId._id);
```

## 📱 Pages Overview

### Homepage (`/`)

- **Hero Section**: Animated title, description, and feature badges
- **Client-Side Posts Grid**: Real-time updates with React Query integration
- **Call-to-Action**: Buttons for creating posts and joining community
- **Navigation**: Sticky header with responsive menu
- **Loading States**: Skeleton loaders while fetching posts
- **Error Handling**: Graceful error states with retry options

### Authentication Pages

#### Login (`/login`)

- **Form Fields**: Email and password with validation
- **Features**: Remember me checkbox, forgot password link
- **Validation**: Email format and required field validation
- **Toast Integration**: Success/error feedback

#### Register (`/register`)

- **Form Fields**: Name, email, password, confirm password
- **Features**: Terms and conditions checkbox
- **Validation**: Password strength, confirmation matching
- **Toast Integration**: Comprehensive validation feedback

### Blog Post Pages

#### Individual Post (`/posts/[id]`)

- **Content Display**: Full blog post with HTML rendering
- **Metadata**: Author, date, tags, read time
- **Navigation**: Back to posts button
- **Authorization**: Edit post button (only visible to post author)
- **Server-Side Rendering**: SEO-optimized with metadata generation
- **Dynamic Routing**: Next.js 15 async params support

#### Create Post (`/create-post`)

- **Form Fields**: Title, excerpt, tags, content
- **Features**: HTML content support, tag input
- **Validation**: Required field validation with error handling
- **API Integration**: Real-time post creation with React Query
- **Loading States**: Form submission with loading indicators
- **Success Handling**: Automatic redirect after successful creation

#### Edit Post (`/posts/edit/[id]`)

- **Pre-filled Form**: Existing post data loaded from API
- **Authorization**: Only post authors can access edit page
- **Same Features**: As create post page with additional delete option
- **Actions**: Update and delete post buttons with confirmation
- **Cache Invalidation**: Automatic UI updates after operations
- **Error Handling**: Comprehensive error states and user feedback

## 🎨 Styling & Animations

### CSS Architecture

- **Global Styles**: CSS variables for consistent theming
- **Utility Classes**: Custom classes for buttons, cards, forms
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Custom Properties**: CSS variables for color palette

### Animation System

- **Framer Motion**: Smooth transitions and micro-interactions
- **Optimized Timing**: Reduced durations for snappy feel (0.1s-0.3s)
- **Staggered Animations**: Sequential element animations
- **Hover Effects**: Subtle scale and color transitions

### Key Animation Patterns

```typescript
// Page entry animations
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.3, ease: "easeOut" }}

// Hover effects
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
transition={{ duration: 0.1 }}

// Staggered animations
transition={{ duration: 0.2, delay: index * 0.05 }}
```

## 🔧 Development Features

### TypeScript Integration

- **Strict Type Checking**: Full type safety throughout the application
- **Interface Definitions**: Comprehensive type definitions for all components
- **Generic Components**: Reusable components with proper typing
- **Type Exports**: Centralized type definitions in model directory

### Code Organization

- **Component Splitting**: Logical separation of concerns
- **Barrel Exports**: Clean import statements
- **Page Components**: Dedicated directories for page-specific components
- **Utility Functions**: Reusable helper functions

### Performance Optimizations

- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Next.js built-in image optimization
- **Font Optimization**: Geist font family with optimal loading
- **Animation Performance**: Hardware-accelerated animations
- **React Query Caching**: Intelligent data caching and background updates
- **Server-Side Rendering**: SEO optimization with metadata generation
- **Client-Side Boundaries**: Proper separation of server and client components

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd dev-blog

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📋 Current Status

### ✅ Completed Features

- [x] Homepage with client-side blog posts grid
- [x] Individual blog post pages with server-side rendering
- [x] Login and registration forms with validation
- [x] Create, edit, and delete post functionality
- [x] API integration with React Query
- [x] Real-time cache invalidation
- [x] Authorization system for post editing
- [x] Toast notification system
- [x] Responsive design with mobile-first approach
- [x] Component architecture with proper separation
- [x] TypeScript integration with strict mode
- [x] Animation system with Framer Motion
- [x] Form validation and error handling
- [x] Loading states and error boundaries
- [x] Next.js 15 compatibility with async params

### 🔄 In Progress

- [ ] User authentication system (backend integration)
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Image upload functionality
- [ ] Search functionality
- [ ] Comment system
- [ ] User profiles and dashboard

### 📝 Future Enhancements

- [ ] Dark mode support with system preference detection
- [ ] Advanced editor (WYSIWYG) with rich text formatting
- [ ] User profiles and dashboard
- [ ] Social sharing with Open Graph optimization
- [ ] Analytics integration (Google Analytics, PostHog)
- [ ] Advanced SEO optimization with structured data
- [ ] PWA features with offline support
- [ ] Real-time notifications
- [ ] Advanced search with filters and sorting
- [ ] Comment system with nested replies
- [ ] Post categories and tagging system
- [ ] Email newsletter integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework and App Router
- TanStack Query team for powerful data fetching and caching
- Tailwind CSS for the utility-first approach
- Framer Motion for smooth animations
- React Toastify for notification system
- Geist font family for beautiful typography
- TypeScript team for type safety and developer experience

## 🆕 Recent Updates & Technical Achievements

### Latest Improvements (Current Version)

#### **API Integration & Real-time Updates**

- ✅ **Complete API Integration**: Full CRUD operations for blog posts
- ✅ **React Query Implementation**: Efficient server state management
- ✅ **Automatic Cache Invalidation**: Real-time UI updates after operations
- ✅ **Optimistic Updates**: Immediate feedback with background synchronization

#### **Authorization & Security**

- ✅ **Role-based Access Control**: Only post authors can edit their posts
- ✅ **Secure API Calls**: JWT token-based authentication
- ✅ **Permission Validation**: Client and server-side authorization checks

#### **Next.js 15 Compatibility**

- ✅ **Async Params Support**: Updated to Next.js 15 async params requirement
- ✅ **Server/Client Boundaries**: Proper separation for optimal performance
- ✅ **SEO Optimization**: Server-side rendering with metadata generation

#### **Developer Experience**

- ✅ **TypeScript Strict Mode**: Full type safety across the application
- ✅ **Error Handling**: Comprehensive error states and user feedback
- ✅ **Loading States**: Interactive loading indicators throughout the app
- ✅ **Code Organization**: Clean architecture with proper separation of concerns

### Technical Highlights

- **Zero Build Errors**: All TypeScript and linting issues resolved
- **Performance Optimized**: Efficient caching and data fetching strategies
- **User Experience**: Smooth animations and real-time updates
- **Maintainable Code**: Well-structured components and utilities
- **Production Ready**: Comprehensive error handling and loading states
