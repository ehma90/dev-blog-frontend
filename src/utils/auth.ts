import { User } from "@/lib/api";

/**
 * Check if the current user is the author of a post
 * @param currentUser - The current authenticated user
 * @param postAuthorId - The author ID from the post
 * @returns boolean - true if user is the author, false otherwise
 */
export function isPostAuthor(
  currentUser: User | null,
  postAuthorId: string
): boolean {
  if (!currentUser) {
    return false;
  }

  // Compare the user's ID with the post's author ID
  return currentUser.id === postAuthorId;
}

/**
 * Check if the current user is authenticated
 * @param currentUser - The current user object
 * @returns boolean - true if user is authenticated, false otherwise
 */
export function isAuthenticated(currentUser: User | null): boolean {
  return currentUser !== null;
}

/**
 * Get user display name
 * @param user - The user object
 * @returns string - The user's display name or "Guest"
 */
export function getUserDisplayName(user: User | null): string {
  return user?.fullName || "Guest";
}
