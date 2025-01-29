import Footer from "../Footer";
import Header from "../Header";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  );
}
