import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { API_CONFIG } from "@/config/api";

// Create axios instance with default configuration
const httpClient: AxiosInstance = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: API_CONFIG.DEFAULT_HEADERS,
});

// Request interceptor
httpClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Add auth token if available
    const token =
      typeof window !== "undefined" ? localStorage.getItem("authToken") : null;
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
httpClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Unauthorized - redirect to login or clear token
      if (typeof window !== "undefined") {
        localStorage.removeItem("authToken");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default httpClient;

// API endpoints
export const apiEndpoints = {
  // Blog posts
  posts: {
    getAll: () => "/api/posts",
    getById: (id: string) => `/api/posts/${id}`,
    create: () => "/api/posts",
    update: (id: string) => `/api/posts/${id}`,
    delete: (id: string) => `/api/posts/${id}`,
  },
  // Users
  users: {
    getAll: () => "/api/users",
    getById: (id: string) => `/api/users/${id}`,
    create: () => "/api/users",
    update: (id: string) => `/api/users/${id}`,
    delete: (id: string) => `/api/users/${id}`,
  },
  // Auth
  auth: {
    login: () => "/auth/login",
    register: () => "/auth/register",
    logout: () => "/auth/logout",
    refresh: () => "/auth/refresh",
    me: () => "/auth/me",
  },
} as const;
