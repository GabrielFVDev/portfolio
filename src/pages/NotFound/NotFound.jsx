import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>Oops! Page not found</p>
      <p className={styles.description}>
        The page you are looking for might have been removed or doesn't exist.
      </p>
      <Link to="/" className={styles.button}>
        Return Home
      </Link>
    </div>
  );
}
