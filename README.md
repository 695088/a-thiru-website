# Personal Website

A minimalistic and academic personal website built with Next.js.

## Features

- Clean, minimal design inspired by academic websites
- Responsive layout
- Simple navigation between pages
- Typography-focused layout
- Fast and lightweight
- **MDX blog system** - Write blogs in Markdown with embedded D3 and Plotly charts
- Dynamic routing for blog posts

## Structure

- **Home** - Landing page with introduction
- **About** - Personal information and interests
- **CV** - Curriculum vitae with education, experience, and publications
- **Work** - Main work page with links to Projects and Blogs
  - **Projects** - Collection of research and development projects
  - **Blogs** - Articles and reflections (built with MDX)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Writing Blog Posts

Blog posts are written in MDX format and located in `content/blogs/all_blogs/`.

### Creating a New Blog Post

1. Create a new `.mdx` file in `content/blogs/all_blogs/` (e.g., `blog_4.mdx`)
2. Add frontmatter at the top:

```mdx
---
title: Your Blog Title
date: '2024-01-20'
tags: ['Tag1', 'Tag2']
---

# Your Blog Title

Your content here...

<Chart 
  data={[{
    x: [1, 2, 3, 4],
    y: [10, 20, 30, 40],
    type: 'scatter',
    mode: 'lines+markers',
    marker: { color: 'black' }
  }]}
/>

<D3Visualization 
  type="line" 
  data={[
    { x: 0, y: 10 },
    { x: 1, y: 15 },
    { x: 2, y: 12 }
  ]} 
/>
```

### Available Components

- `<Chart />` - Plotly.js charts with customizable data and layout
- `<D3Visualization />` - D3.js visualizations with different types (line, bar, scatter)

### Example

See `content/blogs/all_blogs/blog_1.mdx`, `blog_2.mdx`, and `blog_3.mdx` for examples with embedded charts.

## Build

Create a production build:

```bash
npm run build
npm start
```

## Customization

Edit the content in the respective page files:
- `app/page.tsx` - Home page
- `app/about/page.tsx` - About page
- `app/cv/page.tsx` - CV page
- `app/work/projects/page.tsx` - Projects page
- `content/blogs/all_blogs/*.mdx` - Blog posts

Update colors and typography in `app/globals.css`.
