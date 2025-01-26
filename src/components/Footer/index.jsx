import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.leftContainer}>
        <p className={styles.text}>
          <Copyright size={18} className={styles.icon} /> 2025 made with ❤️ by
          <span className={styles.name}>Gabriel Vasconcelos</span>
        </p>
      </div>
      <div className={styles.rightContainer}>
        <Link to="/tech-stack" className={styles.link}>
          Tech Stack
        </Link>
      </div>
    </footer>
  );
}
