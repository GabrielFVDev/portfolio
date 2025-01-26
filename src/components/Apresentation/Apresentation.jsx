import { Github, Linkedin } from "lucide-react";
import styles from "./Apresentation.module.css";

export default function Apresentation() {
  return (
    <section className={styles.container}>
      {/* Título */}
      <h1 className={styles.title}>
        Hey, I’m <span className={styles.highlight}>Gabriel Vasconcelos!</span>
      </h1>

      {/* Descrição */}
      <p className={styles.description}>
        A freelance front-end engineer based in{" "}
        <span className={styles.underline}>São Paulo, Brazil</span>. I
        specialize in developing web applications using the React ecosystem and
        for Mobile Apps im actually using Flutter. Currently, I’m worker in
        front-end team at <span className={styles.underline}>NZest</span>.
      </p>

      {/* Linha decorativa */}
      <div className={styles.divider}></div>

      {/* Links Sociais */}
      <div className={styles.socialLinks}>
        <a
          href="https://github.com/GabrielVasco13"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className={styles.icon} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className={styles.icon} />
        </a>
      </div>

      {/* Contato */}
      <div className={styles.contact}>
        <h2 className={styles.contactTitle}>Contact</h2>
        <p className={styles.contactText}>
          You can reach me out anytime at{" "}
          <a href="mailto:hello@hudovich.dev" className={styles.email}>
            hello@hudovich.dev
          </a>
        </p>
      </div>
    </section>
  );
}
