import Apresentation from "../../components/Apresentation";
import Projects from "../../components/Projects";
import styles from "./Home.module.css";
import SocialLink from "../../components/SocialLink";
import Contact from "../../components/Contact";

export default function Home() {
  return (
    <main>
      <Apresentation />
      <Projects />
      <SocialLink />
      <Contact />
    </main>
  );
}
