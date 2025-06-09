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
          Sou desenvolvedor Front-End morando em{" "}
          <span className={styles.underline}>São Paulo, Brasil</span>.
          Especializado no desenvolvimento de aplicações web modernas usando o
          ecossistema React e desenvolvimento mobile com Flutter. Atualmente,
          integro o time de front-end da{" "}
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
