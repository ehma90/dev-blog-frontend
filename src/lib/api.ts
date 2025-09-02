import httpClient, { apiEndpoints } from "./http-client";

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

// Blog Posts API
export const postsApi = {
  // Get all posts
  getAll: async (): Promise<BlogPost[]> => {
    const response = await httpClient.get(apiEndpoints.posts.getAll());
    return response.data;
  },

  // Get post by ID
  getById: async (id: string): Promise<BlogPost> => {
    const response = await httpClient.get(apiEndpoints.posts.getById(id));
    return response.data;
  },

  // Create new post
  create: async (data: CreatePostData): Promise<BlogPost> => {
    const response = await httpClient.post(apiEndpoints.posts.create(), data);
    return response.data;
  },

  // Update post
  update: async (data: UpdatePostData): Promise<BlogPost> => {
    const { id, ...updateData } = data;
    const response = await httpClient.put(
      apiEndpoints.posts.update(id),
      updateData
    );
    return response.data;
  },

  // Delete post
  delete: async (id: string): Promise<void> => {
    await httpClient.delete(apiEndpoints.posts.delete(id));
  },
};

// Users API
export const usersApi = {
  // Get all users
  getAll: async (): Promise<User[]> => {
    const response = await httpClient.get(apiEndpoints.users.getAll());
    return response.data;
  },

  // Get user by ID
  getById: async (id: string): Promise<User> => {
    const response = await httpClient.get(apiEndpoints.users.getById(id));
    return response.data;
  },

  // Create new user
  create: async (data: Omit<User, "id" | "createdAt">): Promise<User> => {
    const response = await httpClient.post(apiEndpoints.users.create(), data);
    return response.data;
  },

  // Update user
  update: async (
    id: string,
    data: Partial<Omit<User, "id" | "createdAt">>
  ): Promise<User> => {
    const response = await httpClient.put(apiEndpoints.users.update(id), data);
    return response.data;
  },

  // Delete user
  delete: async (id: string): Promise<void> => {
    await httpClient.delete(apiEndpoints.users.delete(id));
  },
};

// Auth API
export const authApi = {
  // Login
  login: async (data: LoginData): Promise<AuthResponse> => {
    const response = await httpClient.post(apiEndpoints.auth.login(), data);
    return response.data;
  },

  // Register
  register: async (data: RegisterData): Promise<AuthResponse> => {
    const response = await httpClient.post(apiEndpoints.auth.register(), data);
    return response.data;
  },

  // Get current user
  getMe: async (): Promise<User> => {
    const response = await httpClient.get(apiEndpoints.auth.me());
    return response.data;
  },

  // Logout
  logout: async (): Promise<void> => {
    await httpClient.post(apiEndpoints.auth.logout());
  },

  // Refresh token
  refresh: async (): Promise<AuthResponse> => {
    const response = await httpClient.post(apiEndpoints.auth.refresh());
    return response.data;
  },
};
