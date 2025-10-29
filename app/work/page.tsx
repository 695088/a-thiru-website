import Link from 'next/link';
import styles from './page.module.css';

export default function Work() {
  const categories = [
    {
      title: 'Work',
      description: 'Professional projects and collaborations',
      href: '/work/projects',
      items: 3,
    },
    {
      title: 'Projects',
      description: 'Personal research and experimental work',
      href: '/work/projects',
      items: 5,
    },
    {
      title: 'Blogs',
      description: 'Thoughts and reflections on research and practice',
      href: '/work/blogs',
      items: 7,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Work</h1>
        <div className={styles.grid}>
          {categories.map((category) => (
            <Link href={category.href} key={category.title} className={styles.card}>
              <div className={styles.cardHeader}>
                <h2>{category.title}</h2>
                <span className={styles.count}>{category.items}</span>
              </div>
              <p className={styles.description}>{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
