import Divider from "../../components/Divider";
import styles from "./GetTouch.module.css";

export default function GetTouch() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Entre em contato {" :)"}</h1>
      <p className={styles.description}>
        Você precisa de alguem para algum projeto? Vamos conversar!
      </p>
      <Divider />
      <div className={styles.contactInfo}>
        <p>
          Você pode me contatar a qualquer momento{" "}
          <a href="mailto:fvgabriel18@gmail.com" className={styles.emailLink}>
            fvgabriel18@gmail.com
          </a>
        </p>
      </div>
      <p className={styles.responseTime}>
        Eu geralmente respondo na hora em dias úteis.
      </p>
    </section>
  );
}
