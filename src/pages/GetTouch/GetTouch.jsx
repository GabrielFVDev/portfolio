import Divider from "../../components/Divider";
import styles from "./GetTouch.module.css";

export default function GetTouch() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Get in Touch</h1>
      <p className={styles.description}>
        Do you have an exciting project? Let's talk!
      </p>
      <Divider />
      <div className={styles.contactInfo}>
        <p>
          You can reach me out anytime at{" "}
          <a href="mailto:fvgabriel18@gmail.com" className={styles.emailLink}>
            fvgabriel18@gmail.com
          </a>
        </p>
        <p>
          As a backup option, you can DM me on{" "}
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            X
          </a>
        </p>
      </div>
      <p className={styles.responseTime}>
        I usually respond right away on business days.
      </p>
    </section>
  );
}
