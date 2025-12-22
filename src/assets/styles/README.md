# Modern CSS Architecture (2026)

This document explains the CSS architecture used in this project, which combines a modern CSS reset with Tailwind CSS and advanced CSS features.

## Overview

Our CSS architecture follows these principles:

1. **Foundation First**: We start with a modern CSS reset that establishes a consistent baseline across browsers
2. **Utility-Based**: We use Tailwind CSS as our primary styling approach for rapid development
3. **Component Abstractions**: We create reusable component classes for consistent UI patterns
4. **Modern Features**: We leverage the latest CSS features like container queries, logical properties, and CSS variables
5. **Performance Focused**: We optimize for runtime performance and bundle size

## File Structure

```
src/assets/styles/
├── main.scss              # Main entry point that imports all styles
├── modern-reset.scss      # Modern CSS reset (replaces normalize.scss)
├── override/              # Directory for overriding third-party styles
└── README.md              # This documentation file
```

## How It Works

### 1. Modern Reset

We've replaced the older normalize.scss (v7.0.0) with a modern CSS reset that:

- Establishes better box-sizing defaults
- Removes unnecessary legacy browser fixes
- Provides better defaults for modern browsers
- Improves accessibility features
- Works seamlessly with Tailwind CSS

### 2. Tailwind CSS Integration

Tailwind CSS is integrated through the `main.scss` file using the `@tailwind` directives:

```scss
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. Component Abstractions

We extend Tailwind with reusable component classes using the `@layer components` directive:

```scss
@layer components {
    .btn-primary {
        @apply px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700;
    }
}
```

### 4. Custom Utilities

We add custom utilities that aren't provided by Tailwind using the `@layer utilities` directive:

```scss
@layer utilities {
    .text-balance {
        text-wrap: balance;
    }
}
```

### 5. CSS Variables

We use CSS variables (custom properties) for global theme values:

```scss
:root {
    --color-primary: theme('colors.blue.600');
    --color-secondary: theme('colors.purple.600');
}
```

### 6. Modern CSS Features

We leverage modern CSS features like:

- Container queries for component-level responsiveness
- Logical properties for better internationalization
- Modern text wrapping with `text-wrap: balance` and `text-wrap: pretty`
- CSS Grid and Flexbox for layouts
- CSS animations and transitions

## Usage Guidelines

### When to Use Tailwind Classes

Use Tailwind utility classes for most styling needs:

```jsx
<button className='px-4 py-2 bg-blue-600 text-white rounded-md'>
    Click Me
</button>
```

### When to Use Component Classes

Use component classes for repeated UI patterns:

```jsx
<button className='btn-primary'>Click Me</button>
```

### When to Use Custom CSS

Use custom CSS for:

- Complex animations
- Advanced layouts that are difficult with utilities
- Global styles
- Third-party component overrides

## Browser Support

This architecture supports all modern browsers (2023+):

- Chrome/Edge 90+
- Firefox 90+
- Safari 15+
- iOS Safari 15+
- Android Chrome 90+

## Performance Considerations

- Tailwind CSS is configured to purge unused styles in production
- Critical CSS is extracted and inlined for faster initial rendering
- Non-critical styles are loaded asynchronously
- CSS variables are used for theme values to reduce CSS size

## Migration from normalize.scss

We've migrated from the older normalize.scss (v7.0.0) to a modern CSS reset because:

1. normalize.scss contained many fixes for legacy browsers we no longer support
2. The modern reset provides better defaults for modern browsers
3. It integrates better with Tailwind CSS
4. It includes better accessibility features
5. It's more maintainable and smaller in size

## Future Enhancements

- Further optimization of critical CSS
- Enhanced theme switching capabilities
- More component abstractions for common UI patterns
- Better integration with design tokens
