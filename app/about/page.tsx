import styles from './page.module.css';

export default function About() {
  return (
    
    <div className={styles.container}>
      
      <div className={styles.content}>
        <h1 className={styles.title}>About Me</h1>
        
        <div className={styles.section}>
          <p> 
            Hi, I'm Aditya, a student at the University of Arizona studying Management Information Systems and Business Analytics.
          </p>
          <p>
            I have a passion for leveraging data to drive business insights and improve decision-making processes.
          </p>

          <div className={styles.section}>
            <h2>My Professional Persona</h2>
            <p>
              Whats the deal with 
            </p>
            <p>
            <a href="/persona">View my professional persona →</a>
            </p>
          </div>

        </div>

        <div className={styles.section}>
          <h2>Connect With Me</h2>
          <p>
            <a href="mailto:adityat@arizona.edu">adityat@arizona.edu → </a>
            <br />
            <a href="https://www.linkedin.com/in/thirumalai-aditya"> linkedin.com/in/thirumalai-aditya →</a>
          </p>
        </div>
      
      </div>
    </div>
  );
}