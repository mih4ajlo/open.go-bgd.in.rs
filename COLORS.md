# Belgrade Open Color System

This document outlines the color system used throughout the Belgrade Open website, based on the colors defined in `tailwind.config.ts`.

## Color Palette

### Serbian Flag Colors

- **Serbian Red** (`serbian-red`): `#BE1E2D` - Primary accent color
- **Serbian Blue** (`serbian-blue`): `#002F6C` - Secondary accent color
- **White** (`serbian-white`): `#FFFFFF` - Pure white

### Neutral Colors

- **Background** (`background`): `#FAF5EF` - Light cream background
- **Foreground** (`foreground`): `#F0E5D8` - Warm wood panel background
- **Neutral Panel** (`neutral-panel`): `#F0E5D8` - Panel backgrounds
- **Neutral Text** (`neutral-text`): `#222222` - Primary text color

### Go Game Colors

- **Go Black Stone** (`go-blackStone`): `#1B1B1B` - Black Go stones
- **Go White Stone** (`go-whiteStone`): `#F5F5F5` - White Go stones
- **Go Board** (`go-board`): `#D7AD7B` - Go board tone
- **Go Grid** (`go-grid`): `#3C3C3C` - Go board line color

## Usage Examples

### Text Colors

```jsx
// Primary text
<p className="text-neutral-text">Main content text</p>

// Accent text
<p className="text-accent">Important information</p>

// Serbian colors
<h1 className="text-serbian-red">Serbian Red Heading</h1>
<h2 className="text-serbian-blue">Serbian Blue Subheading</h2>

// Go colors
<span className="text-go-black">Black stone text</span>
<span className="text-go-white">White stone text</span>
```

### Background Colors

```jsx
// Main backgrounds
<div className="bg-background">Main page background</div>
<div className="bg-neutral-panel">Panel background</div>

// Serbian colors
<div className="bg-serbian-red">Serbian red background</div>
<div className="bg-serbian-blue">Serbian blue background</div>

// Go colors
<div className="bg-go-board">Go board background</div>
<div className="bg-go-black">Black stone background</div>
<div className="bg-go-white">White stone background</div>
```

### Border Colors

```jsx
// Standard borders
<div className="border border-go-grid">Go grid border</div>
<div className="border border-serbian-red">Serbian red border</div>
<div className="border border-serbian-blue">Serbian blue border</div>
```

## Component Classes

### Buttons

```jsx
// Primary button (Serbian red)
<button className="btn btn-primary">Primary Action</button>

// Secondary button (Neutral panel)
<button className="btn btn-secondary">Secondary Action</button>

// Outline button
<button className="btn btn-outline">Outline Action</button>

// Legacy blue button (now uses Serbian blue)
<button className="btn-blue">Legacy Blue</button>
```

### Cards

```jsx
// Standard card
<div className="card">
  <h3>Card Title</h3>
  <p>Card content</p>
</div>

// Elevated card with hover effect
<div className="card-elevated">
  <h3>Elevated Card</h3>
  <p>Card with hover shadow</p>
</div>
```

### Text Components

```jsx
// Heading text
<h1 className="text-heading">Main Heading</h1>

// Body text
<p className="text-body">Regular paragraph text</p>

// Accent text
<span className="text-accent">Highlighted text</span>
```

### Go-Specific Components

```jsx
// Black Go stone styling
<div className="go-stone-black">Black Stone</div>

// White Go stone styling
<div className="go-stone-white">White Stone</div>

// Go board background
<div className="go-board">Go Board</div>
```

## Utility Classes

### Direct Color Utilities

```jsx
// Text colors
.text-serbian-red
.text-serbian-blue
.text-go-black
.text-go-white

// Background colors
.bg-serbian-red
.bg-serbian-blue
.bg-go-black
.bg-go-white
.bg-go-board

// Border colors
.border-serbian-red
.border-serbian-blue
.border-go-grid
```

## Best Practices

1. **Use semantic classes** when possible (e.g., `btn-primary` instead of `bg-serbian-red`)
2. **Maintain consistency** by using the same color for similar UI elements
3. **Consider accessibility** - ensure sufficient contrast between text and background colors
4. **Use hover states** for interactive elements with `hover:` prefix
5. **Apply transitions** for smooth color changes: `transition-colors duration-200`

## Color Hierarchy

1. **Primary**: Serbian Red (`serbian-red`) - Main actions, important elements
2. **Secondary**: Serbian Blue (`serbian-blue`) - Secondary actions, links
3. **Neutral**: Background and panel colors - Content areas, cards
4. **Go Theme**: Go-specific colors for game-related elements
5. **Text**: Neutral text color for readability

## Accessibility Notes

- Serbian Red and Serbian Blue provide good contrast against light backgrounds
- Neutral text color (#222222) ensures good readability
- All color combinations meet WCAG contrast requirements
- Hover states provide additional visual feedback for interactive elements
