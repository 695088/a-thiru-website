import Link from 'next/link';
import styles from './page.module.css';
import { getAllProjects } from '@/lib/projects';
import { getAllAcademic } from '@/lib/academic';
import { getAllBlogs } from '@/lib/blogs';

// Helper function to extract excerpt from content
function getExcerpt(content: string, maxLength: number = 150): string {
  const plainText = content
    .replace(/^#+\s+/gm, '')
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
    .replace(/\*\*([^\*]+)\*\*/g, '$1')
    .replace(/\*([^\*]+)\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/\n+/g, ' ')
    .trim();
  
  const firstSentence = plainText.split(/[.!?]/)[0];
  if (firstSentence.length <= maxLength) {
    return firstSentence + (plainText.includes('.') ? '.' : '');
  }
  
  return plainText.substring(0, maxLength).trim() + '...';
}

export function generateStaticParams() {
  const projects = getAllProjects();
  const academic = getAllAcademic();
  const blogs = getAllBlogs();

  const allTags = new Set<string>();
  [...academic, ...projects, ...blogs].forEach((item) => {
    if (item.tags) {
      item.tags.forEach((tag) => allTags.add(tag));
    }
  });

  return Array.from(allTags).map((tag) => ({
    tag: tag,
  }));
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag: tagParam } = await params;
  const tag = decodeURIComponent(tagParam);
  const projects = getAllProjects();
  const academic = getAllAcademic();
  const blogs = getAllBlogs();

  // Filter items by tag
  const filteredItems = [
    ...academic
      .filter((item) => item.tags && item.tags.includes(tag))
      .map((item) => ({ type: 'Academic', ...item })),
    ...projects
      .filter((item) => item.tags && item.tags.includes(tag))
      .map((item) => ({ type: 'Project', ...item })),
    ...blogs
      .filter((item) => item.tags && item.tags.includes(tag))
      .map((item) => ({ type: 'Blog', ...item })),
  ].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href="/work" className={styles.back}>
          ← Back to Work
        </Link>
        <h1 className={styles.title}>Tag: {tag}</h1>
        <p className={styles.count}>{filteredItems.length} post{filteredItems.length !== 1 ? 's' : ''}</p>
        
        <div className={styles.list}>
          {filteredItems.map((item) => {
            const href =
              item.type === 'Academic'
                ? `/work/academic/${item.slug}`
                : item.type === 'Project'
                ? `/work/projects/${item.slug}`
                : `/work/blogs/${item.slug}`;
            const excerpt = getExcerpt(item.content);
            return (
              <Link key={`${item.type}-${item.slug}`} href={href} className={styles.item}>
                <div className={styles.itemHeader}>
                  <h2>{item.title}</h2>
                  <span className={styles.itemType}>{item.type}</span>
                </div>
                <p className={styles.excerpt}>{excerpt}</p>
                <div className={styles.itemMeta}>
                  <span className={styles.date}>{item.date}</span>
                  {item.tags && item.tags.length > 0 && (
                    <div className={styles.tags}>
                      {item.tags.map((t) => (
                        <span key={t} className={styles.tag}>
                          {t}
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
  );
}


