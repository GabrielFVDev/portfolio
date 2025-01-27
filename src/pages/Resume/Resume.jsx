import {
  SiDart,
  SiFlutter,
  SiGit,
  SiMysql,
  SiNextdotjs,
  SiShadcnui,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import styles from "./Resume.module.css";
import { FaGit, FaGithub, FaJs, FaReact } from "react-icons/fa";

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
        {/* Ícones de Skills */}
        <div className={styles.skillsGrid}>
          <div>
            <SiDart className={styles.icon} /> Dart
          </div>
          <div>
            <SiFlutter className={styles.icon} /> Flutter
          </div>
          <div>
            <FaReact className={styles.icon} /> React
          </div>
          <div>
            <SiTypescript className={styles.icon} /> Typescript
          </div>
          <div>
            <FaJs className={styles.icon} /> JavaScript
          </div>
          <div>
            <SiMysql className={styles.icon} /> MySql
          </div>
          <div>
            <SiVite className={styles.icon} /> Vite
          </div>
          <div>
            <SiShadcnui className={styles.icon} /> Shadcn
          </div>
          <div>
            <FaGithub className={styles.icon} /> GitHub
          </div>
          <div>
            <SiGit className={styles.icon} /> Git
          </div>
        </div>
      </div>
    </main>
  );
}
