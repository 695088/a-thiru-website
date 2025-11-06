import Link from 'next/link';
import styles from './page.module.css';
import { getAllNotes } from '@/lib/notes';

export default function Notes() {
  const notes = getAllNotes();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href="/work" className={styles.back}>
          ← Back to Work
        </Link>
        <h1 className={styles.title}>Notes</h1>
        <div className={styles.list}>
          {notes.map((note) => (
            <Link href={`/work/notes/${note.slug}`} key={note.slug} className={styles.item}>
              <div className={styles.date}>{note.date}</div>
              <h2>{note.title}</h2>
              {note.tags && note.tags.length > 0 && (
                <div className={styles.tags}>
                  {note.tags.map((tag) => (
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


