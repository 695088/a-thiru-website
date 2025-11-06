import Link from 'next/link';
import styles from './page.module.css';
import { getAllProjects, getFeaturedProjects } from '@/lib/projects';
import { getAllAcademic, getFeaturedAcademic } from '@/lib/academic';
import { getAllBlogs } from '@/lib/blogs';

// Helper function to extract excerpt from content
function getExcerpt(content: string, maxLength: number = 150): string {
  // Remove markdown syntax and get first paragraph
  const plainText = content
    .replace(/^#+\s+/gm, '') // Remove headers
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Remove links, keep text
    .replace(/\*\*([^\*]+)\*\*/g, '$1') // Remove bold
    .replace(/\*([^\*]+)\*/g, '$1') // Remove italic
    .replace(/`([^`]+)`/g, '$1') // Remove code
    .replace(/<[^>]+>/g, '') // Remove HTML tags
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim();
  
  // Get first sentence or first maxLength characters
  const firstSentence = plainText.split(/[.!?]/)[0];
  if (firstSentence.length <= maxLength) {
    return firstSentence + (plainText.includes('.') ? '.' : '');
  }
  
  return plainText.substring(0, maxLength).trim() + '...';
}

// Helper function to extract blurb (max 2 sentences) from content
function getBlurb(content: string): string {
  // Remove markdown syntax and get clean text
  const plainText = content
    .replace(/^#+\s+/gm, '') // Remove headers
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Remove links, keep text
    .replace(/\*\*([^\*]+)\*\*/g, '$1') // Remove bold
    .replace(/\*([^\*]+)\*/g, '$1') // Remove italic
    .replace(/`([^`]+)`/g, '$1') // Remove code
    .replace(/<[^>]+>/g, '') // Remove HTML tags
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim();
  
  // Split by sentence endings
  const sentences = plainText.split(/([.!?]+)/).filter(s => s.trim().length > 0);
  
  // Reconstruct sentences with their punctuation
  const reconstructedSentences: string[] = [];
  for (let i = 0; i < sentences.length; i += 2) {
    if (i + 1 < sentences.length) {
      reconstructedSentences.push(sentences[i] + sentences[i + 1]);
    } else {
      reconstructedSentences.push(sentences[i]);
    }
  }
  
  // Return first 2 sentences, or first sentence if only one exists
  const blurb = reconstructedSentences.slice(0, 2).join(' ').trim();
  return blurb || plainText.substring(0, 200).trim() + '...';
}

export default function Work() {
  const projects = getAllProjects();
  const academic = getAllAcademic();
  const blogs = getAllBlogs();

  const categories = [
    {
      title: 'Academic',
      description: 'Academic projects and collaborations',
      href: '/work/academic',
      items: academic.length,
    },
    {
      title: 'Projects',
      description: 'Professional & Personal projects and collaborations',
      href: '/work/projects',
      items: projects.length,
    },
    {
      title: 'Blogs',
      description: 'Thoughts and reflections on academic and professional work',
      href: '/work/blogs',
      items: blogs.length,
    },
  ];

  // Get featured items from all categories
  const featured = [
    ...getFeaturedAcademic(2).map((i) => ({ type: 'Academic', ...i })),
    ...getFeaturedProjects(2).map((i) => ({ type: 'Project', ...i })),
    ...blogs
      .filter((b) => Boolean(b.featured))
      .slice(0, 2)
      .map((i) => ({ type: 'Blog', ...i })),
  ].slice(0, 4);

  // Collect all unique tags from all content
  const allTags = new Set<string>();
  [...academic, ...projects, ...blogs].forEach((item) => {
    if (item.tags) {
      item.tags.forEach((tag) => allTags.add(tag));
    }
  });
  const uniqueTags = Array.from(allTags).sort();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.mainSection}>
          <h1 className={styles.title}>Work</h1>
          
          <div className={styles.featuredSection}>
            <h2 className={styles.featuredTitle}>Featured Projects</h2>
            <div className={styles.featuredList}>
              {featured.map((item) => {
                const href =
                  item.type === 'Academic'
                    ? `/work/academic/${item.slug}`
                    : item.type === 'Project'
                    ? `/work/projects/${item.slug}`
                    : `/work/blogs/${item.slug}`;
                const blurb = getBlurb(item.content);
                return (
                  <Link key={`${item.type}-${item.slug}`} href={href} className={styles.featuredItem}>
                    <h3 className={styles.featuredItemTitle}>{item.title}</h3>
                    <p className={styles.featuredItemBlurb}>{blurb}</p>
                    <div className={styles.featuredItemMeta}>
                      <span className={styles.featuredItemDate}>{item.date}</span>
                      {item.tags && item.tags.length > 0 && (
                        <div className={styles.featuredItemTags}>
                          {item.tags.map((tag) => (
                            <span key={tag} className={styles.featuredTag}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className={styles.sidebar}>
          <div className={styles.categoriesSection}>
            {categories.map((category) => (
              <Link href={category.href} key={category.title} className={styles.categoryCard}>
                <div className={styles.categoryHeader}>
                  <h3>{category.title}</h3>
                  <span className={styles.categoryCount}>{category.items}</span>
                </div>
                <p className={styles.categoryDescription}>{category.description}</p>
              </Link>
            ))}
          </div>

          <div className={styles.tagsSection}>
            <h3 className={styles.tagsTitle}>Post tags</h3>
            <div className={styles.tagsList}>
              {uniqueTags.map((tag) => (
                <Link key={tag} href={`/work/tags/${encodeURIComponent(tag)}`} className={styles.tagBox}>
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
