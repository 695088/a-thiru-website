import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const academicDirectory = path.join(process.cwd(), 'content/academic/all_academic');

export interface AcademicItem {
  slug: string;
  content: string;
  title: string;
  date: string;
  tags?: string[];
  featured?: boolean;
}

export function getAcademicSlugs(): string[] {
  if (!fs.existsSync(academicDirectory)) {
    return [];
  }

  const files = fs.readdirSync(academicDirectory);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getAcademicBySlug(slug: string): AcademicItem {
  const fullPath = path.join(academicDirectory, `${slug}.mdx`);
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

export function getAllAcademic(): AcademicItem[] {
  const slugs = getAcademicSlugs();
  const items = slugs.map((slug) => getAcademicBySlug(slug));
  return items.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getFeaturedAcademic(limit: number = 3): AcademicItem[] {
  return getAllAcademic().filter((p) => p.featured).slice(0, limit);
}


