import { notFound } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.css';
import { getAllBlogs, getBlogBySlug } from '@/lib/blogs';
import dynamic from 'next/dynamic';

const MDXContent = dynamic(() => import('@/components/MDXContent'));

export function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let blog;
  
  try {
    blog = getBlogBySlug(slug);
  } catch (error) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href="/work/blogs" className={styles.back}>
          ← Back to Blogs
        </Link>
        <div className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.date}>{blog.date}</span>
            {blog.tags && blog.tags.length > 0 && (
              <div className={styles.tags}>
                {blog.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <h1 className={styles.title}>{blog.title}</h1>
        </div>
        <div className={styles.article}>
          <MDXContent content={blog.content} />
        </div>
      </div>
    </div>
  );
}
