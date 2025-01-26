import { Github, Linkedin } from "lucide-react";
import Apresentation from "../../components/Apresentation";
import Projects from "../../components/Projects";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main>
      <Apresentation />
      <Projects />

      <section className={styles.socialLinks}>
        <h4 className={styles.socialTitle}>Find me on</h4>
        <a
          href="https://github.com/GabrielVasco13"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Github</p>
          <Github className={styles.icon} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Linkedin</p>
          <Linkedin className={styles.icon} />
        </a>
      </section>

      <div className={styles.contact}>
        <h4 className={styles.contactTitle}>Contact</h4>
        <p className={styles.contactText}>
          Feel free to email me at{" "}
          <a href="mailto:fvgabriel18@gmail.com" className={styles.email}>
            fvgabriel18@gmail.com
          </a>
        </p>
      </div>
    </main>
  );
}
