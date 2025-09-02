# API Testing Files

This directory contains HTTP test files for testing your API endpoints directly in VS Code using the REST Client extension.

## Prerequisites

1. Install the **REST Client** extension in VS Code
2. Start your backend server on `http://localhost:3000`

## Test Files

### `auth.http`

Tests all authentication endpoints:

- User registration
- User login
- Get current user
- Logout
- Token refresh

### `posts.http`

Tests blog post CRUD operations:

- Get all posts
- Get post by ID
- Create new post
- Update post
- Delete post

### `users.http`

Tests user management endpoints:

- Get all users
- Get user by ID
- Create new user
- Update user
- Delete user

### `complete-flow.http`

Demonstrates a complete API testing flow:

1. Register a new user
2. Login
3. Get user info
4. Create a blog post
5. Update the post
6. Delete the post
7. Logout

This file also shows how to:

- Extract tokens from responses
- Store them as variables
- Use them in subsequent requests

## How to Use

1. Open any `.http` file in VS Code
2. Click "Send Request" above any request
3. View the response in the output panel or new tab
4. Use environment variables to switch between development/production

## Environment Variables

Configured in `.vscode/settings.json`:

- **Development**: `http://localhost:3000`
- **Production**: `https://your-production-api.com`

## Example Request

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

## Tips

- Use `###` to separate different requests
- Variables are defined with `@variableName = value`
- Use `{{variableName}}` to reference variables
- Response scripts can extract data using JavaScript-like syntax
- Enable "Remember Cookies" for session management
