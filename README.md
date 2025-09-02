# Dev Blog - Next.js Application

A modern, responsive developer blog platform built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. This application provides a complete blogging experience with authentication, post creation, and a beautiful user interface.

## 🚀 Features

### Core Functionality

- **Homepage**: Blog posts grid with hero section and call-to-action
- **Blog Posts**: Dynamic routing for individual blog posts (`/posts/[id]`)
- **Authentication**: Login and registration pages with form validation
- **Post Management**: Create and edit blog posts with rich text support
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Animations**: Smooth Framer Motion animations throughout the app

### UI/UX Features

- **Toast Notifications**: Real-time feedback using react-toastify
- **Form Validation**: Client-side validation with error handling
- **Loading States**: Interactive loading indicators
- **Consistent Design**: Unified design system with custom color palette
- **Accessibility**: Proper focus states and keyboard navigation

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
│   ├── page.tsx                 # Homepage
│   ├── login/                   # Authentication pages
│   │   └── page.tsx
│   ├── register/
│   │   └── page.tsx
│   ├── create-post/             # Post creation
│   │   └── page.tsx
│   └── posts/                   # Blog post pages
│       ├── [id]/
│       │   └── page.tsx         # Individual blog post
│       └── edit/
│           └── [id]/
│               └── page.tsx     # Edit blog post
├── components/                  # Reusable components
│   ├── Button.tsx              # Button component with variants
│   ├── Input.tsx               # Form input component
│   ├── ToastProvider.tsx       # Toast notification provider
│   ├── ToastDemo.tsx           # Toast demonstration component
│   └── page-components/        # Page-specific components
│       ├── homepage/
│       │   └── HeroSection.tsx
│       └── loginpage/
│           ├── LoginHeader.tsx
│           ├── LoginForm.tsx
│           ├── RegisterHeader.tsx
│           └── RegisterForm.tsx
├── model/                      # Type definitions
│   └── types.ts
└── utils/                      # Utility functions
    └── toast.ts                # Toast notification utilities
```

## 🛠️ Technology Stack

### Core Technologies

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library

### Additional Packages

- **react-toastify**: Toast notifications
- **Next.js Fonts**: Geist font family integration

## 🎯 Key Components

### Button Component

```typescript
interface ButtonProps {
  children: ReactNode;
  variant?: "default" | "outline";
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

- Two variants: default (gradient) and outline
- Three sizes: small, medium, large
- Built-in Framer Motion animations
- TypeScript support with proper interfaces
- Can render as button or link

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

## 📱 Pages Overview

### Homepage (`/`)

- **Hero Section**: Animated title, description, and feature badges
- **Blog Posts Grid**: Responsive grid of blog post cards
- **Call-to-Action**: Buttons for creating posts and joining community
- **Navigation**: Sticky header with responsive menu

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
- **Actions**: Edit post button (for demo)

#### Create Post (`/create-post`)

- **Form Fields**: Title, author, excerpt, tags, content
- **Features**: HTML content support, tag input
- **Validation**: Required field validation
- **Actions**: Publish and save as draft buttons

#### Edit Post (`/posts/edit/[id]`)

- **Pre-filled Form**: Existing post data loaded
- **Same Features**: As create post page
- **Actions**: Update and delete post buttons

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

- [x] Homepage with blog posts grid
- [x] Individual blog post pages
- [x] Login and registration forms
- [x] Create and edit post functionality
- [x] Toast notification system
- [x] Responsive design
- [x] Component architecture
- [x] TypeScript integration
- [x] Animation system
- [x] Form validation

### 🔄 In Progress

- [ ] Backend API integration
- [ ] User authentication system
- [ ] Database integration
- [ ] Image upload functionality
- [ ] Search functionality
- [ ] Comment system

### 📝 Future Enhancements

- [ ] Dark mode support
- [ ] Advanced editor (WYSIWYG)
- [ ] User profiles
- [ ] Social sharing
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] PWA features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- Framer Motion for smooth animations
- React Toastify for notification system
- Geist font family for beautiful typography
