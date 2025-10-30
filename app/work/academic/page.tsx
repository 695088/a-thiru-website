import Link from 'next/link';
import styles from './page.module.css';
import { getAllAcademic } from '@/lib/academic';

export default function Academic() {
  const items = getAllAcademic();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href="/work" className={styles.back}>
          ← Back to Work
        </Link>
        <h1 className={styles.title}>Academic</h1>
        <div className={styles.list}>
          {items.map((item) => (
            <Link href={`/work/academic/${item.slug}`} key={item.slug} className={styles.item}>
              <div className={styles.date}>{item.date}</div>
              <h2>{item.title}</h2>
              {item.tags && item.tags.length > 0 && (
                <div className={styles.tags}>
                  {item.tags.map((tag) => (
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


