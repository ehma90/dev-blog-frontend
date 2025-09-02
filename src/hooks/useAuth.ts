import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { authApi } from "@/lib/api";
import { queryKeys } from "@/lib/query-client";

// Get current user
export const useUser = () => {
  return useQuery({
    queryKey: queryKeys.auth.user(),
    queryFn: authApi.getMe,
    enabled:
      typeof window !== "undefined" && !!localStorage.getItem("authToken"),
  });
};

// Login mutation
export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      // Store token in localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("authToken", data.access_token);
      }
      // Set user data in cache
      queryClient.setQueryData(queryKeys.auth.user(), data.user);
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
};

// Register mutation
export const useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.register,
    onSuccess: (data) => {
      // Store token in localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("authToken", data.access_token);
      }
      // Set user data in cache
      queryClient.setQueryData(queryKeys.auth.user(), data.user);
    },
    onError: (error) => {
      console.error("Registration failed:", error);
    },
  });
};

// Logout mutation
export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.logout,
    onSuccess: () => {
      // Remove token from localStorage
      if (typeof window !== "undefined") {
        localStorage.removeItem("authToken");
      }
      // Clear all cached data
      queryClient.clear();
    },
    onError: (error) => {
      console.error("Logout failed:", error);
      // Even if logout fails on server, clear local data
      if (typeof window !== "undefined") {
        localStorage.removeItem("authToken");
      }
      queryClient.clear();
    },
  });
};
