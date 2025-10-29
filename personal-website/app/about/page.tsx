import styles from './page.module.css';

export default function About() {
  return (
    
    <div className={styles.container}>
      
      <div className={styles.content}>
        <h1 className={styles.title}>About Me</h1>
        
        <div className={styles.section}>
          <p>
           insert text here. what to write about myself?
          </p>
          <p>
           second paragraph about me.
          </p>
        </div>


        <div className={styles.section}>
          <h2>Interests</h2>
          <ul className={styles.list}>
            <li>Data Science</li>
            <li>Machine Learning</li>
            <li>Artificial Intelligence</li>
            <li>Natural Language Processing</li>
            <li>Quantitative Finance</li>
            <li>Financial Engineering</li>
            <li>Sports Analytics</li>
            <li>Fantasy Football Coding</li>
          </ul>
        </div>


         <div className={styles.section}>
          <h2>BCOM 314</h2>
          <ul className={styles.list}>
              <p>professional biography - should be distinct </p>
              <p>explicitly state your purpse and at least imploy your indenteded audience in an obious place as soon as your page loads</p>
              <p>use clear and concise language</p>
              <p>include more than one sample to hihg meet or exceed expectations</p>
                <p>apply the visual design that you articulated in earler assignments
                <br /> submit before time 
                </p>
              <p>structure your biography to enhance readability</p>
              <p>demonstrate professionalism through visual design</p>
              <li>use descriptive headlines</li>
                <li>how to get a point across</li>
              <li>what to include and what not to include</li>
          </ul>
        </div>


        <div className={styles.section}>

          <h2>Contact</h2>
          <p>
            <a href="mailto:adityat@arizona.edu">adityat@arizona.edu</a>
          </p>
        </div>
      
      </div>
    </div>
  );
}
