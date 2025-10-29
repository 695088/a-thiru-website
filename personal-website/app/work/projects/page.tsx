import Link from 'next/link';
import styles from './page.module.css';

export default function Projects() {
  const projects = [
    {
      title: 'Project One',
      year: '2024',
      description: 'A brief description of the project and its objectives.',
      tags: ['Research', 'Development'],
      href: '/work/projects/project-one',
    },
    {
      title: 'Project Two',
      year: '2023',
      description: 'An experimental work exploring new paradigms.',
      tags: ['Design', 'Research'],
      href: '/work/projects/project-two',
    },
    {
      title: 'Project Three',
      year: '2023',
      description: 'Collaborative effort with focus on user experience.',
      tags: ['Collaboration', 'UX'],
      href: '/work/projects/project-three',
    },
    {
      title: 'Project Four',
      year: '2022',
      description: 'Computational approach to solving complex problems.',
      tags: ['Computational', 'Analysis'],
      href: '/work/projects/project-four',
    },
    {
      title: 'Project Five',
      year: '2022',
      description: 'Research publication and accompanying system.',
      tags: ['Research', 'Systems'],
      href: '/work/projects/project-five',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href="/work" className={styles.back}>
          ← Back to Work
        </Link>
        <h1 className={styles.title}>Projects</h1>
        <div className={styles.list}>
          {projects.map((project) => (
            <Link href={project.href} key={project.title} className={styles.item}>
              <div className={styles.header}>
                <h2>{project.title}</h2>
                <span className={styles.year}>{project.year}</span>
              </div>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
