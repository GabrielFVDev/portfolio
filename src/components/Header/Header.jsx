import { Github, LucideGithub, Moon } from "lucide-react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.slash}>//</span>
        <span>FV</span>
      </div>

      <nav className={styles.nav}>
        <Link to="/resume" className={styles.link}>
          Resume
        </Link>
        <Link to="/contact" className={styles.link}>
          Contact
        </Link>
        <Link
          to="https://github.com/GabrielVasco13"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className={styles.icon} />
        </Link>
        <button className={styles.iconButton}>
          <Moon className={styles.icon} />
        </button>
      </nav>
    </header>
  );
}
