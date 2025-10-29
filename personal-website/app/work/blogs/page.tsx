import Link from 'next/link';
import styles from './page.module.css';
import { getAllBlogs } from '@/lib/blogs';

export default function Blogs() {
  const blogs = getAllBlogs();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href="/work" className={styles.back}>
          ← Back to Work
        </Link>
        <h1 className={styles.title}>Blogs</h1>
        <div className={styles.list}>
          {blogs.map((blog) => (
            <Link href={`/work/blogs/${blog.slug}`} key={blog.slug} className={styles.item}>
              <div className={styles.date}>{blog.date}</div>
              <h2>{blog.title}</h2>
              {blog.tags && blog.tags.length > 0 && (
                <div className={styles.tags}>
                  {blog.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
