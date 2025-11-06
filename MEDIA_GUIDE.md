# Media Upload and Usage Guide

This guide explains how to upload and use images and videos in your blog posts, projects, and academic content.

## 📁 Where to Upload Files

### Images
Upload images to: **`public/images/`**

Example structure:
```
public/
  images/
    cooper.png
    my-blog-image.jpg
    project-screenshot.png
    video-thumbnail.png
```

### Videos
Upload videos to: **`public/videos/`** (you may need to create this folder)

Example structure:
```
public/
  videos/
    my-demo-video.mp4
    tutorial-video.webm
```

**Note:** For large video files, consider using external hosting (YouTube, Vimeo, or a CDN) and embedding them instead.

---

## 🖼️ Using Images in Blog Posts

### 1. Standard Full-Width Image

Use `<BlogImage>` for images that span the full width of the content area:

```mdx
<BlogImage 
  src="/images/my-image.jpg" 
  alt="Description of the image"
  caption="Optional caption text"
/>
```

**Example:**
```mdx
<BlogImage 
  src="/images/cooper.png" 
  alt="Kalshi prediction market interface"
  caption="Screenshot of the Kalshi trading interface"
/>
```

### 2. Left-Aligned Image with Text Wrapping

Use `<BlogImageLeft>` to place an image on the left side with text wrapping around it:

```mdx
<BlogImageLeft 
  src="/images/my-image.jpg" 
  alt="Description of the image"
  caption="Optional caption text"
  width={300}
/>
```

**Example:**
```mdx
<BlogImageLeft 
  src="/images/cooper.png" 
  alt="Kalshi interface"
  caption="The trading interface"
  width={250}
/>

This text will wrap around the image on the right side. You can write as much text as you want here, and it will flow naturally around the image. The image will stay on the left side of the content area.

You can continue writing paragraphs, and they will all wrap around the image until you add a new heading or another block-level element that clears the float.
```

**Parameters:**
- `src`: Path to your image (starts with `/images/`)
- `alt`: Alternative text for accessibility (required for SEO)
- `caption`: Optional caption displayed below the image
- `width`: Optional width in pixels (default: 300px). The image will scale proportionally.

**Note:** On mobile devices, left-aligned images automatically become full-width for better readability.

---

## 🎥 Using Videos in Blog Posts

### 1. Standard Video Player

Use `<BlogVideo>` to embed a video file:

```mdx
<BlogVideo 
  src="/videos/my-video.mp4" 
  caption="Optional caption text"
  controls={true}
  autoplay={false}
  loop={false}
/>
```

**Example:**
```mdx
<BlogVideo 
  src="/videos/demo.mp4" 
  caption="A demonstration of the new feature"
  controls={true}
/>
```

**Parameters:**
- `src`: Path to your video file (starts with `/videos/`)
- `caption`: Optional caption displayed below the video
- `width`: Optional max width in pixels (default: full width)
- `controls`: Show video controls (default: `true`)
- `autoplay`: Autoplay video (default: `false`)
- `loop`: Loop video (default: `false`)

### 2. Embedding External Videos (YouTube, Vimeo, etc.)

For external videos, you can use HTML directly in your MDX:

**YouTube:**
```mdx
<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/VIDEO_ID" 
  title="YouTube video player" 
  frameBorder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowFullScreen
></iframe>
```

**Vimeo:**
```mdx
<iframe 
  src="https://player.vimeo.com/video/VIDEO_ID" 
  width="640" 
  height="360" 
  frameBorder="0" 
  allow="autoplay; fullscreen; picture-in-picture" 
  allowFullScreen
></iframe>
```

---

## 📝 Complete Example Blog Post

Here's a complete example showing all media types:

```mdx
---
title: "My Blog Post with Media"
date: "2025-01-15"
tags: ["tutorial", "media"]
featured: true
blurb: "A comprehensive guide to using media in blog posts."
---

# Introduction

This is a blog post that demonstrates how to use images and videos.

## Using a Left-Aligned Image

<BlogImageLeft 
  src="/images/example.jpg" 
  alt="Example image"
  caption="This image is on the left"
  width={250}
/>

This paragraph wraps around the image. You can write multiple paragraphs here, and they will all flow around the image on the right side. The image stays anchored on the left.

You can continue writing more content here, and it will keep wrapping around the image.

## Using a Full-Width Image

<BlogImage 
  src="/images/full-width.jpg" 
  alt="Full width image"
  caption="This image spans the full width"
/>

## Using a Video

<BlogVideo 
  src="/videos/demo.mp4" 
  caption="A demonstration video"
  controls={true}
/>

## Conclusion

That's how you use media in your blog posts!
```

---

## 🎨 Styling Tips

### Image Sizes
- **Full-width images**: Use for hero images, diagrams, or important visuals
- **Left-aligned images**: Use for portraits, small diagrams, or when you want text to flow around them
- **Recommended widths for left-aligned**: 200-400px

### Video Considerations
- **File formats**: MP4 (H.264) is most compatible
- **File size**: Keep videos under 10MB if possible, or use external hosting
- **Aspect ratio**: 16:9 is standard for videos

---

## ✅ Quick Reference

| Component | Use Case | Path Format |
|-----------|----------|-------------|
| `<BlogImage>` | Full-width images | `/images/filename.jpg` |
| `<BlogImageLeft>` | Left-aligned with text wrap | `/images/filename.jpg` |
| `<BlogVideo>` | Embedded video | `/videos/filename.mp4` |

---

## 🚀 Steps to Add Media

1. **Upload your file** to the appropriate folder:
   - Images → `public/images/`
   - Videos → `public/videos/`

2. **In your MDX file**, add the component:
   ```mdx
   <BlogImage src="/images/your-file.jpg" alt="Description" />
   ```

3. **Save and preview** - your media will appear in the blog post!

---

## 💡 Pro Tips

- Always include descriptive `alt` text for images (important for accessibility and SEO)
- Use captions to provide context for your media
- For large files, consider compressing images before uploading
- Test your blog post on mobile devices to ensure media displays correctly
- Use meaningful filenames (e.g., `project-dashboard-screenshot.png` instead of `img1.png`)

