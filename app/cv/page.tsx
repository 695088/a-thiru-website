import styles from './page.module.css';

export default function CV() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Curriculum Vitae</h1>
        
        <div className={styles.section}>
          <h2>Education</h2>
          <div className={styles.item}>
            <div className={styles.header}>
              <h3>BSBA in Management Information Systems and Business Analytics</h3>
              <span className={styles.date}>Expected 2027</span>
            </div>
            <p className={styles.institution}>University of Arizona - Eller College of Management</p>
            <p className={styles.description}>
              <li><u>GPA:</u> /4.0</li>
              <li><u>Dean's List:</u> Fall 2023, Spring 2024, Fall 2024, Spring 2025</li>
              <li>Advanced Zipperman Associate</li>
              <li>Preceptor - BNAN 225</li>
              <li>Junior Varsity - Microsoft Excel Collegiate Championship</li>
              <li><u>Relevant Coursework:</u> Data Management, Business Analytics, Systems Analysis and Design, Database Management Systems, Programming for Business Applications</li>
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Experience</h2>
          
          <div className={styles.item}>
            <div className={styles.header}>
              <h3>Investment Analyst Intern</h3>
              <span className={styles.date}>May 2025 - August 2025</span>
            </div>
            <p className={styles.institution}>Arizona Public Safety Personnel Retirement System (AZ PSPRS)</p>
            <p className={styles.description}>
            </p>
          </div>

          <div className={styles.item}>
            <div className={styles.header}>
              <h3>Intern - Commercial & Business Development</h3>
              <span className={styles.date}>June 2024 - August 2024</span>
            </div>
            <p className={styles.institution}>Solinas Integrity Ltd.</p>
            <p className={styles.description}>
            </p>
          </div>

          <div className={styles.item}>
            <div className={styles.header}>
              <h3>Research Assistant</h3>
              <span className={styles.date}>August 2022 - February 2023</span>
            </div>
            <p className={styles.institution}>FTC Solar Inc.</p>
            <p className={styles.description}>
            </p>
          </div>


        </div>

        <div className={styles.section}>
          <h2>Publications</h2>
          <div className={styles.item}>
            <p className={styles.description}>
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Skills</h2>
          
          
          <div className={styles.skills}>
            <span>Research Methods</span>
            <span>Data Analysis</span>
            <span>Programming</span>
            <span>Design</span>
          </div>


        </div>

        <div className={styles.download}>
          <a href="/cv.pdf" download className={styles.button}>
            Download PDF →
          </a>
        </div>
      </div>
    </div>
  );
}
