import styles from "./Projects.module.css";

const projects = [
  {
    name: "Text Encoder and Decoder",
    description:
      "A simple text encoder/decoder web application built with HTML, CSS, and vanilla JavaScript. Created as a fun way to exchange coded messages with friends.",
    link: "https://gabrielvasco13.github.io/desafio_one/",
    type: "Website",
  },
  {
    name: "Link Tree Clone",
    description:
      "Did you know about the Link Tree that some people uses in ther description on Instagram? Why i cant have my own? So i made a clone of it. This is a simple project made with React.",
    link: "https://gabrielvasco13.github.io/social-link/",
    type: "Website",
  },
  {
    name: "Task Manager",
    description:
      "A minimalist todo application with local storage persistence. Built using Flutter with a MVVM architecture.",
    link: "https://github.com/GabrielVasco13/todo_mvvm",
    type: "Repository",
  },
];

export default function Projects() {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.projectsTitle}>Projects</h2>
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
