import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { postsApi, CreatePostData, UpdatePostData } from "@/lib/api";
import { queryKeys } from "@/lib/query-client";

// Get all posts
export const usePosts = () => {
  return useQuery({
    queryKey: queryKeys.posts.lists(),
    queryFn: postsApi.getAll,
  });
};

// Get post by ID
export const usePost = (id: string) => {
  return useQuery({
    queryKey: queryKeys.posts.detail(id),
    queryFn: () => postsApi.getById(id),
    enabled: !!id, // Only run query if id exists
  });
};

// Create post mutation
export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postsApi.create,
    onSuccess: () => {
      // Invalidate and refetch posts list
      queryClient.invalidateQueries({ queryKey: queryKeys.posts.lists() });
    },
    onError: (error) => {
      console.error("Failed to create post:", error);
    },
  });
};

// Update post mutation
export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postsApi.update,
    onSuccess: (data) => {
      // Update the specific post in cache
      queryClient.setQueryData(queryKeys.posts.detail(data.id), data);
      // Invalidate posts list to ensure consistency
      queryClient.invalidateQueries({ queryKey: queryKeys.posts.lists() });
    },
    onError: (error) => {
      console.error("Failed to update post:", error);
    },
  });
};

// Delete post mutation
export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postsApi.delete,
    onSuccess: (_, deletedId) => {
      // Remove the post from cache
      queryClient.removeQueries({
        queryKey: queryKeys.posts.detail(deletedId),
      });
      // Invalidate posts list
      queryClient.invalidateQueries({ queryKey: queryKeys.posts.lists() });
    },
    onError: (error) => {
      console.error("Failed to delete post:", error);
    },
  });
};
