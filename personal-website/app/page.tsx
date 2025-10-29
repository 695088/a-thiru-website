import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello</h1>
        <p className={styles.subtitle}>
          I'm Aditya, a student at the University of Arizona studying Management Information Systems and Business Analytics.
        </p>
        <div className={styles.description}>
          <p>
            Welcome to my personal website. Here you can find information about my work,
            projects, and interests.
          </p>
        </div>
        <div className={styles.links}>
          <a href="/about">About me →</a>
          <a href="/work">View work →</a>
          <a href="/cv">CV →</a>
        </div>
      </div>
    </div>
  );
}
