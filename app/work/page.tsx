import Link from 'next/link';
import styles from './page.module.css';
import { getAllProjects, getFeaturedProjects } from '@/lib/projects';
import { getAllAcademic, getFeaturedAcademic } from '@/lib/academic';
import { getAllBlogs, getAllBlogs as getBlogs } from '@/lib/blogs';

export default function Work() {
  const projects = getAllProjects();
  const academic = getAllAcademic();
  const blogs = getBlogs();

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

  const featured = [
    ...getFeaturedAcademic(2).map((i) => ({ type: 'Academic', ...i })),
    ...getFeaturedProjects(2).map((i) => ({ type: 'Project', ...i })),
    ...blogs
      .filter((b) => Boolean((b as any).featured))
      .slice(0, 2)
      .map((i) => ({ type: 'Blog', ...i })),
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Work</h1>
        <div className={styles.grid}>
          {categories.map((category) => (
            <Link href={category.href} key={category.title} className={styles.card}>
              <div className={styles.cardHeader}>
                <h2>{category.title}</h2>
                <span className={styles.count}>{category.items}</span>
              </div>
              <p className={styles.description}>{category.description}</p>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: '4rem' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 400, marginBottom: '1.5rem' }}>Featured Work</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {featured.map((item) => {
              const href =
                item.type === 'Academic'
                  ? `/work/academic/${item.slug}`
                  : item.type === 'Project'
                  ? `/work/projects/${item.slug}`
                  : `/work/blogs/${item.slug}`;
              return (
                <Link key={`${item.type}-${item.slug}`} href={href} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <h2>{item.title}</h2>
                    <span className={styles.count}>{item.type}</span>
                  </div>
                  <p className={styles.description}>{item.date}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
