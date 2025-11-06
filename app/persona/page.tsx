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
            <iframe
              src="https://www.youtube.com/embed/cOb1uAymuj4"
              title="Professional Persona Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.videoIframe}
            />
          </div>
          <p className={styles.videoDescription}>
            In this video, I provide an overview of my background, skills, and career aspirations. The video is a summary of my professional persona. The of this video was to authentically promote my professional personna directly to prospective employers and industry professionals.  It provides a breif look at my communication style, passion, and collaborative skills, allowing you to see and hear from the person behind the work.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>My Core Values</h2>
          <p>
            Integrity, continuous learning, collaboration, innovation, and a commitment to excellence are the core values that guide my personal and professional life.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>My Identity</h2>
          <p>
            This semester has been an exercise in aligning my internal identity with my external reputation. This process has been charted through peer feedback, self-reflection, and constructive criticism. 
            <br />
            I've always perceived myself as a holistic blend of an Analytical Problem-Solver and a Caring collaborator, but the data revealed that my reputation often lagged, initially presenting me as just the logical, data-driven member of the team. My growth over these past months has been a conscious effort to close that gap; I began to experiment with how I communicated my Analytical findings, intentionally wrapping them in a more Easygoing and supportive framework to ensure my Caring nature was evident from the start, not just discovered over time. This evolution has taught me that cultivating a professional persona is an active, intentional process.
          </p>
        </div>


        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Looking Ahead</h2>
          <p>
            Looking ahead, I am excited to continue cultivating my professional persona and leveraging my skills to drive business insights and improve decision-making processes. I am particularly interested in roles that allow me to work with cross-functional teams and tackle complex business challenges. I believe that my unique blend of technical skills and business acumen makes me a valuable asset in any professional setting.
          </p>
        </div>
      </div>





    </div>
  );
}
