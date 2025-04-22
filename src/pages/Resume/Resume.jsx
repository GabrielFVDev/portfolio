import {
  SiDart,
  SiFlutter,
  SiGit,
  SiJetpackcompose,
  SiKotlin,
  SiMysql,
  SiShadcnui,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import styles from "./Resume.module.css";
import { FaGithub, FaJs, FaReact } from "react-icons/fa";
import experiences from "../../data/experiencesData";
import Divider from "../../components/Divider";

export default function Resume() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Meu curriculo / CV</h1>
      <p className={styles.description}>
        {" "}
        Desenvolvedor front-end especializado na construção de aplicações web
        utilizando React com JavaScript. Para desenvolvimento mobile, utilizo
        Flutter para criar aplicações multiplataforma com desempenho nativo.
        Experiente em design responsivo, gerenciamento de estado e integração de
        APIs tanto para plataformas web quanto mobile.
      </p>
      <Divider />

      <section className={styles.skillSection}>
        <h1>Habilidades</h1>
        <p>
          {" "}
          Abaixo você encontrará as tecnologias e ferramentas com as quais
          trabalho regularmente. Como um desenvolvedor que adora aprender, estou
          sempre explorando novas tecnologias e expandindo meu conjunto de
          habilidades para me manter atualizado com as tendências do setor.
        </p>
        {/* Ícones de Skills */}
        <div className={styles.skillsGrid}>
          <div>
            <SiDart className={styles.icon} /> Dart
          </div>
          <div>
            <SiFlutter className={styles.icon} /> Flutter
          </div>
          <div>
            <SiKotlin className={styles.icon} /> Kotlin
          </div>
          <div>
            <SiJetpackcompose className={styles.icon} /> Jetpack Compose
          </div>
          <div>
            <FaReact className={styles.icon} /> React
          </div>
          <div>
            <SiTypescript className={styles.icon} /> Typescript
          </div>
          <div>
            <FaJs className={styles.icon} /> JavaScript
          </div>
          <div>
            <SiMysql className={styles.icon} /> MySql
          </div>
          <div>
            <SiVite className={styles.icon} /> Vite
          </div>
          <div>
            <SiShadcnui className={styles.icon} /> Shadcn
          </div>
          <div>
            <FaGithub className={styles.icon} /> GitHub
          </div>
          <div>
            <SiGit className={styles.icon} /> Git
          </div>
        </div>
      </section>

      <section className={styles.experienceSection}>
        <h1>Historico de trabalho</h1>
        <p className={styles.description}>
          Aqui está um resumo da minha trajetória profissional. Para uma visão
          detalhada da minha experiência e qualificações, sinta-se à vontade
          para baixar meu currículo completo.
        </p>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3>{exp.role}</h3>
                <p className={styles.company}>
                  {exp.company} • {exp.location} • {exp.type}
                </p>
                <p className={styles.duration}>{exp.duration}</p>
                <ul className={styles.detailsList}>
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
