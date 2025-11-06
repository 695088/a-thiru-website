import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const notesDirectory = path.join(process.cwd(), 'content/notes/all_notes');

export interface NoteItem {
  slug: string;
  content: string;
  title: string;
  date: string;
  tags?: string[];
  featured?: boolean;
}

export function getNoteSlugs(): string[] {
  if (!fs.existsSync(notesDirectory)) {
    return [];
  }
  
  const files = fs.readdirSync(notesDirectory);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getNoteBySlug(slug: string): NoteItem {
  const fullPath = path.join(notesDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    title: data.title || slug,
    date: data.date || '',
    tags: data.tags || [],
    featured: Boolean(data.featured),
  };
}

export function getAllNotes(): NoteItem[] {
  const slugs = getNoteSlugs();
  const items = slugs.map((slug) => getNoteBySlug(slug));
  
  return items.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getFeaturedNotes(limit: number = 1): NoteItem[] {
  return getAllNotes().filter((n) => n.featured).slice(0, limit);
}


