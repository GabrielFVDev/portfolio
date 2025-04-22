import techData from "../../data/techData.js";
import styles from "./TechStack.module.css";

export default function TechStack() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Stack</h1>
      <p className={styles.subtitle}>
        O conjunto de ferramentas por trás deste site
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2 className={styles.categoryTitle}>Desenvolvimento</h2>
          <div className={styles.itemsContainer}>
            {techData.Development.map((item, index) => (
              <div key={index} className={styles.item}>
                <span className={styles.key}>{item.key}</span>
                <span className={styles.value}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.categoryTitle}>Infraestrutura</h2>
          <div className={styles.itemsContainer}>
            {techData.Infrastructure.map((item, index) => (
              <div key={index} className={styles.item}>
                <span className={styles.key}>{item.key}</span>
                <span className={styles.value}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
