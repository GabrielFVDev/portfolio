import { Github, Linkedin } from "lucide-react";
import styles from "./Apresentation.module.css";
import Divider from "../Divider";

export default function Apresentation() {
  return (
    <main className={styles.container}>
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

      <Divider />
    </main>
  );
}
