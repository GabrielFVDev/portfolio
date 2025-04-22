import { Github, Linkedin } from "lucide-react";
import styles from "./SocialLink.module.css";

export default function SocialLink() {
  return (
    <section className={styles.socialLinks}>
      <h4 className={styles.socialTitle}>Entre em contato</h4>
      <a
        href="https://github.com/GabrielVasco13"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Github</p>
        <Github className={styles.icon} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <p>Linkedin</p>
        <Linkedin className={styles.icon} />
      </a>
    </section>
  );
}
