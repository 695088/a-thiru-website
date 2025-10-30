import { notFound } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.css';
import { getAllAcademic, getAcademicBySlug } from '@/lib/academic';
import dynamic from 'next/dynamic';

const MDXContent = dynamic(() => import('@/components/MDXContent'), {
  ssr: false,
});

export function generateStaticParams() {
  const items = getAllAcademic();
  return items.map((item) => ({
    slug: item.slug,
  }));
}

export default function AcademicPost({ params }: { params: { slug: string } }) {
  let item;

  try {
    item = getAcademicBySlug(params.slug);
  } catch (error) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href="/work/academic" className={styles.back}>
          ← Back to Academic
        </Link>
        <div className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.date}>{item.date}</span>
            {item.tags && item.tags.length > 0 && (
              <div className={styles.tags}>
                {item.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <h1 className={styles.title}>{item.title}</h1>
        </div>
        <div className={styles.article}>
          <MDXContent content={item.content} />
        </div>
      </div>
    </div>
  );
}


