import {
  SiDart,
  SiFlutter,
  SiGit,
  SiJetpackcompose,
  SiKotlin,
  SiMysql,
  SiNextdotjs,
  SiShadcnui,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import styles from "./Resume.module.css";
import { FaGit, FaGithub, FaJs, FaReact } from "react-icons/fa";
import experiences from "../../data/experiencesData";
import Divider from "../../components/Divider";

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
      <Divider />

      <section className={styles.skillSection}>
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
            <SiKotlin className={styles.icon} /> Kotlin
          </div>
          <div>
            <SiJetpackcompose className={styles.icon} /> Jetpack Compose
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
      </section>

      <section className={styles.experienceSection}>
        <h1>Work History</h1>
        <p className={styles.description}>
          Here's an overview of my professional journey. For a detailed look at
          my experience and qualifications, feel free to download my complete
          CV.
        </p>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3>{exp.role}</h3>
                <p className={styles.company}>
                  {exp.company} • {exp.location} • {exp.type}
                </p>
                <p className={styles.duration}>{exp.duration}</p>
                <ul className={styles.detailsList}>
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
