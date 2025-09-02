// API Configuration
export const API_CONFIG = {
  // Base URL for API requests
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000",

  // Request timeout in milliseconds
  TIMEOUT: 10000,

  // Default headers
  DEFAULT_HEADERS: {
    "Content-Type": "application/json",
  },
} as const;

// Environment configuration
export const ENV_CONFIG = {
  IS_DEVELOPMENT: process.env.NODE_ENV === "development",
  IS_PRODUCTION: process.env.NODE_ENV === "production",
} as const;
