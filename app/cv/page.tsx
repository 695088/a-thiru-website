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
              <li><u>Dean's List:</u> Fall 2023, Spring 2024, Fall 2024, Spring 2025</li>
              <li>Preceptor - BNAN 225 (Programming Fundamentals for Business Analytics)</li>
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
          <h2>Invovement</h2>
          
          <div className={styles.item}>
            <div className={styles.header}>
              <h3>SPARK Entrepreneurship Program</h3>
              <span className={styles.date}>December 2024 - May 2025</span>
            </div>
            <p className={styles.institution}>Eller College of Management - McGuire Center for Entrepreneurship</p>
            <p className={styles.description}>
            </p>
          </div>

          <div className={styles.item}>
            <div className={styles.header}>
              <h3>Advanced Zipperman Associate</h3>
              <span className={styles.date}>May 2025 - Present</span>
            </div>
            <p className={styles.institution}>Eller College of Management - Department of Management Information Systems</p>
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
          <h2>Competitions</h2>
          <div className={styles.item}>
            <p className={styles.description}>
            </p>
            <ul>
              <li>Microsoft Excel Collegiate Championship - Flagstaff Regional Qualifier</li>
              <li>Chicago Mercantile Exchange - Trading Challenge</li>
              <li>Bloomberg Global Trading Competition</li>
              <li>Stevens Institute of Technology - High Frequency Trading Competition</li>
              <li>Fordham University - Sustainable Fixed Income Research Competition</li>
            </ul>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Financial Skills</h2>
          <div className={styles.skills}>
            <span>Bloomberg Terminal</span>
            <span>Morningstar</span>
            <span>FactSet</span>
            <span>MSCI Private I</span>
            <span>Albourne Castle</span>
            <span>Nasdaq Solovis</span>
            <span>CQG One</span>
            <span>TradingView</span>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Technical Skills</h2>
          <div className={styles.skills}>
            <span>R</span>
            <span>Python</span>
            <span>SQL</span>
            <span>Excel</span>
            <span>Power BI</span>
            <span>Tableau</span>
            <span>Power Point</span>
            <span>Word</span>
            <span>Microsoft Word</span>
            <span>Microsoft Excel</span>
            <span>Microsoft PowerPoint</span>
            <span>Adobe InDesign</span>
            <span>Latex</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Next.js</span>
          </div>


        </div>

        <div className={styles.download}>
          <a href="/resume.pdf" download className={styles.button}>
            Download PDF →
          </a>
        </div>
      </div>
    </div>
  );
}
