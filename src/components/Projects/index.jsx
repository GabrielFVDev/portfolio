import styles from "./Projects.module.css";

const projects = [
  {
    name: "Decodificador/Codificador de texto",
    description:
      "Uma aplicação web simples de codificação/decodificação de texto construída com HTML, CSS e JavaScript puro. Criada como uma forma divertida de trocar mensagens codificadas com amigos.",
    link: "https://gabrielvasco13.github.io/desafio_one/",
    type: "Website",
  },
  {
    name: "Link Tree",
    description:
      "Você conhece o Link Tree que muitas pessoas usam na descrição do Instagram? Por que não posso ter o meu próprio? Então criei um clone. Este é um projeto simples feito com React.",
    link: "https://gabrielvasco13.github.io/social-link/",
    type: "Website",
  },
  {
    name: "Aluraflix",
    description:
      "Um catálogo de videos desenvolvido com React, onde você pode adicionar videos à sua lista de favoritos.",
    link: "https://aluraflix-psi-drab.vercel.app/",
    type: "Website",
  },
  {
    name: "Gerenciador de Tarefas",
    description:
      "Um aplicativo minimalista de tarefas com persistência em armazenamento local. Desenvolvido usando Flutter com arquitetura MVVM.",
    link: "https://github.com/GabrielVasco13/todo_mvvm",
    type: "Repositório",
  },
];

export default function Projects() {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.projectsTitle}>Projetos</h2>
      {projects.map((project, index) => (
        <div key={index} className={styles.projectCard}>
          <h3 className={styles.projectName}>{project.name}</h3>
          <p className={styles.projectDescription}>{project.description}</p>
          <a
            href={project.link}
            className={styles.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.type}
          </a>
        </div>
      ))}
    </section>
  );
}
