# Data Fetching Setup

This project now includes React Query (TanStack Query), Axios, and HTTP package for data fetching.

## Installed Packages

- `@tanstack/react-query` - Powerful data synchronization for React
- `@tanstack/react-query-devtools` - Development tools for React Query
- `axios` - Promise-based HTTP client
- `http` - Node.js HTTP package

## Configuration

### Environment Variables

Create a `.env.local` file in the root directory with:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3001/api

# Development settings
NODE_ENV=development
```

### API Configuration

The API configuration is located in `src/config/api.ts` and can be customized as needed.

## Usage

### React Query Hooks

The project includes pre-configured hooks for common operations:

#### Posts

```typescript
import {
  usePosts,
  usePost,
  useCreatePost,
  useUpdatePost,
  useDeletePost,
} from "@/hooks/usePosts";

// Get all posts
const { data: posts, isLoading, error } = usePosts();

// Get single post
const { data: post } = usePost(postId);

// Create post
const createPost = useCreatePost();
createPost.mutate({ title: "New Post", content: "..." });

// Update post
const updatePost = useUpdatePost();
updatePost.mutate({ id: "1", title: "Updated Title" });

// Delete post
const deletePost = useDeletePost();
deletePost.mutate("1");
```

#### Authentication

```typescript
import { useUser, useLogin, useRegister, useLogout } from "@/hooks/useAuth";

// Get current user
const { data: user } = useUser();

// Login
const login = useLogin();
login.mutate({ email: "user@example.com", password: "password" });

// Register
const register = useRegister();
register.mutate({
  name: "John Doe",
  email: "user@example.com",
  password: "password",
});

// Logout
const logout = useLogout();
logout.mutate();
```

### Direct API Calls

You can also use the API functions directly:

```typescript
import { postsApi } from "@/lib/api";

// Get all posts
const posts = await postsApi.getAll();

// Create a post
const newPost = await postsApi.create({
  title: "New Post",
  excerpt: "Post excerpt",
  content: "Post content",
  author: "John Doe",
  tags: "react, javascript",
});
```

### HTTP Client

The HTTP client is configured with:

- Automatic token injection from localStorage
- Request/response interceptors
- Error handling for 401 responses
- Configurable base URL and timeout

## File Structure

```
src/
├── lib/
│   ├── api.ts              # API service functions
│   ├── http-client.ts      # Axios configuration
│   └── query-client.ts     # React Query configuration
├── hooks/
│   ├── usePosts.ts         # Posts-related hooks
│   └── useAuth.ts          # Authentication hooks
├── config/
│   └── api.ts              # API configuration
└── components/
    └── providers/
        └── QueryProvider.tsx # React Query provider
```

## Development Tools

React Query DevTools are automatically enabled in development mode. You can access them by clicking the React Query icon in the bottom-left corner of your browser.

## API Testing

The project includes HTTP test files for testing your API endpoints directly in VS Code.

### Prerequisites

1. Install the **REST Client** extension in VS Code:
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
   - Search for "REST Client" by Huachao Mao
   - Install the extension

### Test Files

The following test files are available in the `tests/` directory:

- **`auth.http`** - Authentication endpoints (register, login, logout, etc.)
- **`posts.http`** - Blog posts CRUD operations
- **`users.http`** - User management endpoints
- **`complete-flow.http`** - Complete testing flow from registration to post creation

### How to Use

1. **Start your backend server** on `http://localhost:3000`
2. **Open any `.http` file** in VS Code
3. **Click "Send Request"** above any request to test it
4. **View responses** in the output panel or in a new tab

### Example Usage

```http
### Register a new user
POST http://localhost:3000/auth/register
Content-Type: application/json

{
  "fullName": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Environment Variables

The REST Client extension is configured with environment variables in `.vscode/settings.json`:

- **Development**: `http://localhost:3000`
- **Production**: `https://your-production-api.com`

You can switch between environments using the REST Client extension's environment selector.

### Token Management

The `complete-flow.http` file demonstrates how to:

- Extract tokens from responses
- Store them as variables
- Use them in subsequent requests

## Next Steps

1. **Install REST Client extension** in VS Code
2. **Set up your backend API** to match the endpoints defined in `src/lib/api.ts`
3. **Test your endpoints** using the provided `.http` files
4. **Update the API configuration** in `src/config/api.ts` if needed
5. **Start using the hooks** in your components for data fetching
6. **Customize the query client configuration** in `src/lib/query-client.ts` as needed
