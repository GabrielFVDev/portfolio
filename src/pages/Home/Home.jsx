import Projects from "../../components/Projects";
import styles from "./Home.module.css";
import SocialLink from "../../components/SocialLink";
import Contact from "../../components/Contact";
import Divider from "../../components/Divider";

export default function Home() {
  return (
    <main>
      <section className={styles.container}>
        {/* Título */}
        <h1 className={styles.title}>
          Olá, eu sou{" "}
          <span className={styles.highlight}>Gabriel Vasconcelos!</span>
        </h1>

        {/* Descrição */}
        <p className={styles.description}>
          Sou dev Front-End morando em{" "}
          <span className={styles.underline}>São Paulo, Brasil</span>. Sou
          especializado no desenvolvimento de aplicações web usando o
          ecossistema React e para desenvolvimento Mobile atualmente uso
          Flutter. No momento, trabalho no time de front-end da{" "}
          <span className={styles.underline}>NZest</span>.
        </p>

        <Divider />
      </section>
      <Projects />
      <SocialLink />
      <Contact />
    </main>
  );
}
