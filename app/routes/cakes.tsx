import type { Route } from "./+types/cakes";
import { useState } from "react";
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

const CATEGORY_GROUPS = [
  { id: null, name: "Все" },
  { id: "celebration", name: "Праздничные" },
  { id: "kids", name: "Детские" },
  { id: "adult", name: "Для взрослых" },
  { id: "special", name: "Особенные" },
];

const CATEGORY_MAPPING: Record<string, string> = {
  kids: "kids",
  characters: "kids",
  corporate: "celebration",
  wedding: "celebration",
  men: "adult",
  women: "adult",
  berry: "special",
  bento: "special",
  open: "special",
  holiday: "celebration",
};

export default function Cakes() {
  const { t } = useLanguage();
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  
  const filteredCategories = selectedGroup
    ? CAKE_CATEGORIES.filter((cat) => CATEGORY_MAPPING[cat.id] === selectedGroup)
    : CAKE_CATEGORIES;
  
  return (
    <div className={styles.container}>
      <Header />
      <FloatingMessengers />
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>{t.cakes.title}</h1>
          <p className={styles.subtitle}>{t.cakes.subtitle}</p>
        </div>

        <div className={styles.categories}>
          {CATEGORY_GROUPS.map((group) => (
            <button
              key={group.id || "all"}
              className={styles.categoryButton}
              data-active={selectedGroup === group.id}
              onClick={() => setSelectedGroup(group.id)}
            >
              {group.name}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredCategories.map((category) => (
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
