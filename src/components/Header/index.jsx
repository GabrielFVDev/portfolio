import { Github, LucideGithub, Moon, Sun } from "lucide-react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/useTheme";

export default function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/portfolio">
          <span className={styles.slash}>//</span>
          <span>FV</span>
        </Link>
      </div>

      <nav className={styles.nav}>
        <Link to="/resume" className={styles.link}>
          Curriculo
        </Link>
        <Link to="/contact" className={styles.link}>
          Contato
        </Link>
        <a
          href="https://github.com/GabrielFVDev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className={styles.icon} />
        </a>
        <button className={styles.iconButton} onClick={toggleTheme}>
          {isDark ? (
            <Moon className={styles.icon} />
          ) : (
            <Sun className={styles.icon} />
          )}
        </button>
      </nav>
    </header>
  );
}
