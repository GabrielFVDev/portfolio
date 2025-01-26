import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.projectsTitle}>Projects</h2>
      <div className={styles.projectCard}>
        <h3 className={styles.projectName}>Text Encoder and Decoder</h3>
        <p className={styles.projectDescription}>
          A simple text encoder/decoder web application built with HTML, CSS,
          and vanilla JavaScript. Created as a fun way to exchange coded
          messages with friends.
        </p>
        <a
          href="https://gabrielvasco13.github.io/desafio_one/"
          className={styles.projectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Website
        </a>
      </div>
    </section>
  );
}
