# Button Component

A reusable button component with consistent styling and animations throughout the application.

## Features

- **Two Variants**: Default (gradient) and Outline
- **Three Sizes**: Small, Medium, Large
- **Framer Motion**: Built-in hover and tap animations
- **TypeScript**: Full type safety
- **Accessibility**: Proper focus states and disabled handling
- **Flexible**: Can be used as button or link

## Usage

```tsx
import { Button } from "./components";

// Default button
<Button>Click me</Button>

// Outline variant
<Button variant="outline">Click me</Button>

// Large size
<Button size="lg">Click me</Button>

// With custom className
<Button className="w-full">Full width</Button>

// As submit button
<Button type="submit">Submit</Button>

// Disabled state
<Button disabled>Disabled</Button>
```

## Props

| Prop        | Type                              | Default     | Description                  |
| ----------- | --------------------------------- | ----------- | ---------------------------- |
| `children`  | `ReactNode`                       | -           | Button content               |
| `variant`   | `"default" \| "outline"`          | `"default"` | Button style variant         |
| `size`      | `"sm" \| "md" \| "lg"`            | `"md"`      | Button size                  |
| `className` | `string`                          | `""`        | Additional CSS classes       |
| `onClick`   | `() => void`                      | -           | Click handler                |
| `type`      | `"button" \| "submit" \| "reset"` | `"button"`  | Button type                  |
| `disabled`  | `boolean`                         | `false`     | Disabled state               |
| `href`      | `string`                          | -           | Link URL (when used as link) |
| `as`        | `"button" \| "a"`                 | `"button"`  | Render as button or link     |

## Variants

### Default

- Gradient background from primary-dark to secondary
- White text
- Hover effects with shadow

### Outline

- White background with colored border
- Colored text
- Hover fills background

## Sizes

- **Small**: `px-4 py-2 text-sm`
- **Medium**: `px-6 py-3 text-base` (default)
- **Large**: `px-8 py-4 text-lg`

## Animations

- **Hover**: Scale to 1.02
- **Tap**: Scale to 0.98
- **Duration**: 0.1s for snappy feel
- **Focus**: Ring outline for accessibility

## Examples in Use

- **Blog Post Cards**: "Read More" buttons
- **Call-to-Action**: "Create Post" and "Join Community" buttons
- **Forms**: Submit buttons in login/register/create-post
- **Navigation**: Back buttons and action buttons
- **Edit Pages**: Update and Delete buttons
