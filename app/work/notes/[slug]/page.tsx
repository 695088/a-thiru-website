import { notFound } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.css';
import { getAllNotes, getNoteBySlug } from '@/lib/notes';
import dynamic from 'next/dynamic';

const MDXContent = dynamic(() => import('@/components/MDXContent'), {
  ssr: false,
});

export function generateStaticParams() {
  const notes = getAllNotes();
  return notes.map((note) => ({
    slug: note.slug,
  }));
}

export default function NotePost({ params }: { params: { slug: string } }) {
  let note;
  
  try {
    note = getNoteBySlug(params.slug);
  } catch (error) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href="/work/notes" className={styles.back}>
          ← Back to Notes
        </Link>
        <div className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.date}>{note.date}</span>
            {note.tags && note.tags.length > 0 && (
              <div className={styles.tags}>
                {note.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <h1 className={styles.title}>{note.title}</h1>
        </div>
        <div className={styles.article}>
          <MDXContent content={note.content} />
        </div>
      </div>
    </div>
  );
}


