import type { Route } from "./+types/cakes.$categoryId";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import styles from "./cakes.$categoryId.module.css";
import { Header } from "~/components/header/header";
import { CAKE_CATEGORIES, CAKE_DESIGNS } from "~/data/cakes";
import { FloatingMessengers } from "~/components/floating-messengers/floating-messengers";

export function meta({ params }: Route.MetaArgs) {
  const category = CAKE_CATEGORIES.find((c) => c.id === params.categoryId);
  return [
    { title: `${category?.name || "Торты"} | VRfood` },
    { name: "description", content: `Выберите дизайн торта в категории ${category?.name}` },
  ];
}

export default function CakeCategory() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const category = CAKE_CATEGORIES.find((c) => c.id === categoryId);
  const designs = CAKE_DESIGNS.filter((d) => d.categoryId === categoryId);

  if (!category) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Header />
      <FloatingMessengers />
      <div className={styles.content}>
        <div className={styles.breadcrumb}>
          <Link to="/cakes">Торты</Link>
          <ChevronRight />
          <span>{category.name}</span>
        </div>

        <div className={styles.header}>
          <h1 className={styles.title}>{category.name}</h1>
        </div>

        <div className={styles.grid}>
          {designs.map((design) => (
            <div key={design.id} className={styles.designCard} onClick={() => navigate(`/configurator/${design.id}`)}>
              <img src={design.image} alt={design.name} className={styles.designImage} loading="lazy" />
              <div className={styles.designInfo}>
                <h2 className={styles.designName}>{design.name}</h2>
                <p className={styles.designPrice}>Цена от {design.basePrice.toLocaleString("ru-RU")} ₽</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
