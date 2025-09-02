export const blogPosts = {
    "1": {
      id: "1",
      title: "Getting Started with Next.js 14",
      content: `
        <h2>Introduction</h2>
        <p>Next.js 14 brings exciting new features and improvements that make building modern web applications even more enjoyable. In this comprehensive guide, we'll explore the key features and how to get started with the latest version.</p>
        
        <h2>What's New in Next.js 14</h2>
        <p>Next.js 14 introduces several groundbreaking features:</p>
        <ul>
          <li><strong>App Router (Stable):</strong> The App Router is now stable and provides a more intuitive way to structure your applications.</li>
          <li><strong>Server Components:</strong> Build faster applications with Server Components that run on the server.</li>
          <li><strong>Improved Performance:</strong> Better bundle optimization and faster build times.</li>
          <li><strong>Enhanced Developer Experience:</strong> Better error messages and debugging tools.</li>
        </ul>
        
        <h2>Getting Started</h2>
        <p>To create a new Next.js 14 project, run the following command:</p>
        <pre><code>npx create-next-app@latest my-app</code></pre>
        
        <p>This will create a new Next.js application with all the latest features and best practices.</p>
        
        <h2>Project Structure</h2>
        <p>The new App Router uses a different file structure. Here's what you need to know:</p>
        <ul>
          <li><code>app/</code> directory contains your application code</li>
          <li><code>app/page.tsx</code> is your homepage</li>
          <li><code>app/layout.tsx</code> defines your root layout</li>
          <li>Route folders create new routes automatically</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Next.js 14 is a powerful framework that makes building modern web applications easier than ever. With its stable App Router, Server Components, and improved performance, it's the perfect choice for your next project.</p>
      `,
      author: "John Doe",
      date: "2024-01-15",
      readTime: "5 min read",
      tags: ["Next.js", "React", "Web Development"],
    },
    "2": {
      id: "2",
      title: "Mastering TypeScript for React",
      content: `
        <h2>Why TypeScript?</h2>
        <p>TypeScript brings static type checking to JavaScript, making your React applications more robust and maintainable. It helps catch errors at compile time and provides better IDE support.</p>
        
        <h2>Setting Up TypeScript with React</h2>
        <p>To add TypeScript to an existing React project:</p>
        <pre><code>npm install --save-dev typescript @types/react @types/react-dom</code></pre>
        
        <h2>Basic Type Definitions</h2>
        <p>Here are some essential TypeScript patterns for React:</p>
        <pre><code>
  interface Props {
    title: string;
    count: number;
    isActive: boolean;
  }
  
  const MyComponent: React.FC<Props> = ({ title, count, isActive }) => {
    return (
      <div>
        <h1>{title}</h1>
        <p>Count: {count}</p>
        <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
      </div>
    );
  };
        </code></pre>
        
        <h2>Advanced Patterns</h2>
        <p>TypeScript enables powerful patterns like generic components and strict type checking. This leads to more reliable code and better developer experience.</p>
      `,
      author: "Jane Smith",
      date: "2024-01-12",
      readTime: "8 min read",
      tags: ["TypeScript", "React", "Programming"],
    },
    "3": {
      id: "3",
      title: "Building Responsive UIs with Tailwind CSS",
      content: `
        <h2>Introduction to Tailwind CSS</h2>
        <p>Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. It's perfect for creating responsive, modern user interfaces.</p>
        
        <h2>Key Concepts</h2>
        <ul>
          <li><strong>Utility Classes:</strong> Small, single-purpose classes that can be combined</li>
          <li><strong>Responsive Design:</strong> Built-in responsive prefixes (sm:, md:, lg:, xl:)</li>
          <li><strong>Customization:</strong> Easy to customize colors, spacing, and other design tokens</li>
        </ul>
        
        <h2>Responsive Design Example</h2>
        <pre><code>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div className="bg-blue-500 p-4 rounded-lg">
      <h3 className="text-lg font-semibold">Card 1</h3>
      <p className="text-sm">Responsive content</p>
    </div>
  </div>
        </code></pre>
        
        <h2>Best Practices</h2>
        <p>When using Tailwind CSS, follow these best practices for maintainable code:</p>
        <ul>
          <li>Use consistent spacing and sizing</li>
          <li>Create reusable component classes when needed</li>
          <li>Leverage the responsive utilities effectively</li>
          <li>Keep your design system consistent</li>
        </ul>
      `,
      author: "Mike Johnson",
      date: "2024-01-10",
      readTime: "6 min read",
      tags: ["CSS", "Tailwind", "Design"],
    },
    "4": {
      id: "4",
      title: "State Management in Modern React",
      content: `
        <h2>Understanding State Management</h2>
        <p>State management is crucial for building complex React applications. Let's explore different approaches and when to use each one.</p>
        
        <h2>Built-in State Solutions</h2>
        <h3>useState Hook</h3>
        <p>The useState hook is perfect for local component state:</p>
        <pre><code>
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);
        </code></pre>
        
        <h3>useReducer Hook</h3>
        <p>For complex state logic, useReducer provides more control:</p>
        <pre><code>
  const [state, dispatch] = useReducer(reducer, initialState);
        </code></pre>
        
        <h2>External State Management</h2>
        <h3>Redux Toolkit</h3>
        <p>Redux Toolkit simplifies Redux usage with less boilerplate:</p>
        <ul>
          <li>Simplified store setup</li>
          <li>Built-in Redux DevTools</li>
          <li>Immer for immutable updates</li>
        </ul>
        
        <h3>Zustand</h3>
        <p>Zustand is a lightweight alternative to Redux:</p>
        <ul>
          <li>Minimal boilerplate</li>
          <li>TypeScript support</li>
          <li>No providers needed</li>
        </ul>
        
        <h2>Choosing the Right Solution</h2>
        <p>Consider these factors when choosing a state management solution:</p>
        <ul>
          <li>Application complexity</li>
          <li>Team experience</li>
          <li>Performance requirements</li>
          <li>Developer experience</li>
        </ul>
      `,
      author: "Sarah Wilson",
      date: "2024-01-08",
      readTime: "10 min read",
      tags: ["React", "State Management", "Redux"],
    },
  };