import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h4 className={styles.contactTitle}>Contato</h4>
      <p className={styles.contactText}>
        Se sinta livre para me mandar um emai{"  "}
        <a href="mailto:fvgabriel18@gmail.com" className={styles.email}>
          fvgabriel18@gmail.com
        </a>
      </p>
    </div>
  );
}
