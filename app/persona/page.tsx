import styles from './page.module.css';

export default function Persona() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>My Professional Persona</h1>
        
        <div className={styles.section}>
          <p>
            I am a dedicated and detail-oriented student with a passion for leveraging data to drive business insights and improve decision-making processes. My academic background in Management Information Systems and Business Analytics has equipped me with a strong foundation in data analysis, research methods, and programming.
          </p>
          <p>
            I thrive in collaborative environments and am always eager to learn from others. My goal is to contribute to innovative projects that make a positive impact on organizations and society as a whole.
          </p>
          <p>
            I am particularly interested in roles that allow me to work with cross-functional teams and tackle complex business challenges. I believe that my unique blend of technical skills and business acumen makes me a valuable asset in any professional setting.
          </p>
        </div>

        <div className={styles.video}>
          <h2 className={styles.videoTitle}>Professional Persona Video</h2>
          <div className={styles.videoBackground}>
            <video autoPlay loop muted playsInline>
              <source src="/path/to/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className={styles.overlay}></div>
          </div>
          <p className={styles.videoDescription}>
            In this video, I provide an overview of my background, skills, and career aspirations.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>My Core Values</h2>
          <p>
            Integrity, continuous learning, collaboration, innovation, and a commitment to excellence are the core values that guide my personal and professional life.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Future Section 1</h2>
          <p>
            This section is reserved for future content additions. You can add your thoughts, experiences, or updates here.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Future Section 2</h2>
          <p>
            This section is reserved for future content additions. You can add your thoughts, experiences, or updates here.
          </p>
        </div>
      </div>
    </div>
  );
}
