import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'content/projects/all_projects');

export interface ProjectItem {
  slug: string;
  content: string;
  title: string;
  date: string;
  tags?: string[];
  featured?: boolean;
  blurb?: string;
}

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(projectsDirectory);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getProjectBySlug(slug: string): ProjectItem {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    title: data.title || slug,
    date: data.date || '',
    tags: data.tags || [],
    featured: Boolean(data.featured),
    blurb: data.blurb || '',
  };
}

export function getAllProjects(): ProjectItem[] {
  const slugs = getProjectSlugs();
  const items = slugs.map((slug) => getProjectBySlug(slug));

  return items.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getFeaturedProjects(limit: number = 3): ProjectItem[] {
  return getAllProjects().filter((p) => p.featured).slice(0, limit);
}


