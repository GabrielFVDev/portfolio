import styles from "./Resume.module.css";

export default function Resume() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>My Resume / CV</h1>
      <p className={styles.description}>
        {" "}
        Front-end developer specializing in building web applications using
        React ecosystem with modern JavaScript. For mobile development, I use
        Flutter to create cross-platform applications with native performance.
        Experienced in responsive design, state management, and API integration
        for both web and mobile platforms.
      </p>
      <div className={styles.divider}></div>

      <div className={styles.skillSection}>
        <h1>Skills</h1>
        <p>
          {" "}
          Below you'll find the technologies and tools I work with regularly. As
          a developer who loves learning, I'm always exploring new technologies
          and expanding my skill set to stay current with industry trends.
        </p>
      </div>
    </main>
  );
}
