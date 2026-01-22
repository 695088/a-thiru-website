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
            Welcome to my personal website. Here you can find more about me, my work,
            projects, and interests.
          </p>
        </div>
        {/*
        <div className={styles.links}>
          <a href="/work">View work →</a>
          <a href="/cv">CV →</a>
        </div>
        */
        }
        <div className={styles.section}>
          <h2>Connect With Me:</h2>
          <div className={styles.sectionLinks}>
            <p>
              <a href="mailto:adityat@arizona.edu">adityat@arizona.edu → </a>
              <br />
              <a href="https://www.linkedin.com/in/thirumalai-aditya"> linkedin.com/in/thirumalai-aditya →</a>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
