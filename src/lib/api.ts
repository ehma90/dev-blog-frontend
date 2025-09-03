import { API_CONFIG } from "@/config/api";

// Types
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  tags: string[];
  date: string;
  readTime: string;
}

export interface CreatePostData {
  title: string;
  excerpt: string;
  content: string;
  author: string;
  tags: string;
}

export interface UpdatePostData extends Partial<CreatePostData> {
  id: string;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  avatar?: string;
  createdAt?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  fullName: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  user: User;
  message?: string;
}

// Helper function to get auth token
const getAuthToken = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("authToken");
  }
  return null;
};

// Helper function to create headers
const createHeaders = (includeAuth: boolean = true): HeadersInit => {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (includeAuth) {
    const token = getAuthToken();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  }

  return headers;
};

// Blog Posts API
export const postsApi = {
  // Get all posts
  getAll: async (): Promise<BlogPost[]> => {
    const response = await fetch(`${API_CONFIG.BASE_URL}/posts`, {
      method: "GET",
      headers: createHeaders(false),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch posts: ${response.status} ${response.statusText}`
      );
    }

    return response.json();
  },

  // Get post by ID
  getById: async (id: string): Promise<BlogPost> => {
    const response = await fetch(`${API_CONFIG.BASE_URL}/posts/${id}`, {
      method: "GET",
      headers: createHeaders(false),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch post: ${response.status} ${response.statusText}`
      );
    }

    return response.json();
  },

  // Create new post
  create: async (data: CreatePostData): Promise<BlogPost> => {
    const response = await fetch(`${API_CONFIG.BASE_URL}/posts`, {
      method: "POST",
      headers: createHeaders(true), // Auth required
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to create post: ${response.status} ${response.statusText}`
      );
    }

    return response.json();
  },

  // Update post
  update: async (data: UpdatePostData): Promise<BlogPost> => {
    const { id, ...updateData } = data;
    const response = await fetch(`${API_CONFIG.BASE_URL}/posts/${id}`, {
      method: "PUT",
      headers: createHeaders(true), // Auth required
      body: JSON.stringify(updateData),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to update post: ${response.status} ${response.statusText}`
      );
    }

    return response.json();
  },

  // Delete post
  delete: async (id: string): Promise<void> => {
    const response = await fetch(`${API_CONFIG.BASE_URL}/posts/${id}`, {
      method: "DELETE",
      headers: createHeaders(true), // Auth required
    });

    if (!response.ok) {
      throw new Error(
        `Failed to delete post: ${response.status} ${response.statusText}`
      );
    }
  },
};

// Users API
export const usersApi = {
  // Get all users
  getAll: async (): Promise<User[]> => {
    const response = await fetch(`${API_CONFIG.BASE_URL}/users`, {
      method: "GET",
      headers: createHeaders(true), // Auth required
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch users: ${response.status} ${response.statusText}`
      );
    }

    return response.json();
  },

  // Get user by ID
  getById: async (id: string): Promise<User> => {
    const response = await fetch(`${API_CONFIG.BASE_URL}/users/${id}`, {
      method: "GET",
      headers: createHeaders(true), // Auth required
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch user: ${response.status} ${response.statusText}`
      );
    }

    return response.json();
  },

  // Create new user
  create: async (data: Omit<User, "id" | "createdAt">): Promise<User> => {
    const response = await fetch(`${API_CONFIG.BASE_URL}/users`, {
      method: "POST",
      headers: createHeaders(true), // Auth required
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to create user: ${response.status} ${response.statusText}`
      );
    }

    return response.json();
  },

  // Update user
  update: async (
    id: string,
    data: Partial<Omit<User, "id" | "createdAt">>
  ): Promise<User> => {
    const response = await fetch(`${API_CONFIG.BASE_URL}/users/${id}`, {
      method: "PUT",
      headers: createHeaders(true), // Auth required
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to update user: ${response.status} ${response.statusText}`
      );
    }

    return response.json();
  },

  // Delete user
  delete: async (id: string): Promise<void> => {
    const response = await fetch(`${API_CONFIG.BASE_URL}/users/${id}`, {
      method: "DELETE",
      headers: createHeaders(true), // Auth required
    });

    if (!response.ok) {
      throw new Error(
        `Failed to delete user: ${response.status} ${response.statusText}`
      );
    }
  },
};

// Auth API
export const authApi = {
  // Login
  login: async (data: LoginData): Promise<AuthResponse> => {
    const response = await fetch(`${API_CONFIG.BASE_URL}/auth/login`, {
      method: "POST",
      headers: createHeaders(false), // No auth needed for login
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(
        `Login failed: ${response.status} ${response.statusText}`
      );
    }

    return response.json();
  },

  // Register
  register: async (data: RegisterData): Promise<AuthResponse> => {
    const response = await fetch(`${API_CONFIG.BASE_URL}/auth/register`, {
      method: "POST",
      headers: createHeaders(false),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(
        `Registration failed: ${response.status} ${response.statusText}`
      );
    }

    return response.json();
  },

  // Get current user
  getMe: async (): Promise<User> => {
    const response = await fetch(`${API_CONFIG.BASE_URL}/auth/me`, {
      method: "GET",
      headers: createHeaders(true),// Auth required
    });

    if (!response.ok) {
      throw new Error(
        `Failed to get user: ${response.status} ${response.statusText}`
      );
    }

    return response.json();
  },

  // Logout
  logout: async (): Promise<void> => {
    const response = await fetch(`${API_CONFIG.BASE_URL}/auth/logout`, {
      method: "POST",
      headers: createHeaders(true), // Auth required
    });

    if (!response.ok) {
      throw new Error(
        `Logout failed: ${response.status} ${response.statusText}`
      );
    }
  },

  // Refresh token
  refresh: async (): Promise<AuthResponse> => {
    const response = await fetch(`${API_CONFIG.BASE_URL}/auth/refresh`, {
      method: "POST",
      headers: createHeaders(true), // Auth required
    });

    if (!response.ok) {
      throw new Error(
        `Token refresh failed: ${response.status} ${response.statusText}`
      );
    }

    return response.json();
  },
};
