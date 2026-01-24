import type { Route } from "./+types/cakes";
import { Link } from "react-router";
import styles from "./cakes.module.css";
import { Header } from "~/components/header/header";
import { CAKE_CATEGORIES } from "~/data/cakes";
import { useLanguage } from "~/contexts/language-context";
import { FloatingMessengers } from "~/components/floating-messengers/floating-messengers";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Торты на заказ | VRfood" },
    { name: "description", content: "Выберите категорию торта для вашего праздника" },
  ];
}

export default function Cakes() {
  const { t } = useLanguage();
  
  return (
    <div className={styles.container}>
      <Header />
      <FloatingMessengers />
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>{t.cakes.title}</h1>
          <p className={styles.subtitle}>{t.cakes.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {CAKE_CATEGORIES.map((category) => (
            <Link key={category.id} to={`/cakes/${category.id}`} className={styles.categoryCard}>
              <img src={category.image} alt={category.name} className={styles.categoryImage} loading="lazy" />
              <div className={styles.categoryInfo}>
                <h2 className={styles.categoryName}>{category.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
