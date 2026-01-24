import type { Route } from "./+types/fillings";
import styles from "./fillings.module.css";
import { Header } from "~/components/header/header";
import { FILLINGS } from "~/data/cakes";
import { FloatingMessengers } from "~/components/floating-messengers/floating-messengers";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Начинки для тортов | VRfood" },
    { name: "description", content: "Все доступные начинки для тортов на заказ" },
  ];
}

export default function Fillings() {
  const basicFillings = FILLINGS.filter((f) => f.tier === "basic");
  const premiumFillings = FILLINGS.filter((f) => f.tier === "premium");
  const specialFillings = FILLINGS.filter((f) => f.tier === "special");

  return (
    <div className={styles.container}>
      <Header />
      <FloatingMessengers />
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>Начинки для тортов</h1>
          <p className={styles.subtitle}>Выберите идеальную начинку для вашего торта</p>
        </div>

        <div className={styles.notice}>
          <p>Начинки используются только для тортов</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Базовые начинки</h2>
          <div className={styles.fillingsGrid}>
            {basicFillings.map((filling) => (
              <div key={filling.id} className={styles.fillingCard}>
                <img src={filling.image} alt={filling.name} className={styles.fillingImage} loading="lazy" />
                <div className={styles.fillingInfo}>
                  <h3 className={styles.fillingName}>{filling.name}</h3>
                  <p className={styles.fillingDescription}>{filling.description}</p>
                  <p className={styles.fillingPrice}>Без доплаты</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Премиум начинки</h2>
          <div className={styles.fillingsGrid}>
            {premiumFillings.map((filling) => (
              <div key={filling.id} className={styles.fillingCard}>
                <img src={filling.image} alt={filling.name} className={styles.fillingImage} loading="lazy" />
                <div className={styles.fillingInfo}>
                  <h3 className={styles.fillingName}>{filling.name}</h3>
                  <p className={styles.fillingDescription}>{filling.description}</p>
                  <p className={styles.fillingPrice}>+{filling.pricePerKg} ₽/кг</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Специальные начинки</h2>
          <div className={styles.fillingsGrid}>
            {specialFillings.map((filling) => (
              <div key={filling.id} className={styles.fillingCard}>
                <img src={filling.image} alt={filling.name} className={styles.fillingImage} loading="lazy" />
                <div className={styles.fillingInfo}>
                  <h3 className={styles.fillingName}>{filling.name}</h3>
                  <p className={styles.fillingDescription}>{filling.description}</p>
                  <p className={styles.fillingPrice}>По запросу</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
