import type { Route } from "./+types/food";
import { useState } from "react";
import styles from "./food.module.css";
import { Header } from "~/components/header/header";
import { FOOD_ITEMS, FOOD_CATEGORIES } from "~/data/food";
import { FloatingMessengers } from "~/components/floating-messengers/floating-messengers";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Домашняя еда | VRfood" },
    { name: "description", content: "Супы, салаты, обеды и ужины — домашняя еда с душой" },
  ];
}

export default function Food() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredFood = selectedCategory ? FOOD_ITEMS.filter((f) => f.category === selectedCategory) : FOOD_ITEMS;

  const generateOrderMessage = (food: (typeof FOOD_ITEMS)[0]) => {
    const message = `Здравствуйте! Хочу заказать:

${food.name}
Цена: ${food.price} ₽`;
    return encodeURIComponent(message);
  };

  return (
    <div className={styles.container}>
      <Header />
      <FloatingMessengers />
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>Домашняя еда</h1>
          <p className={styles.subtitle}>Вкусно и с душой, как дома</p>
        </div>

        <div className={styles.categories}>
          <button
            className={styles.categoryButton}
            data-active={selectedCategory === null}
            onClick={() => setSelectedCategory(null)}
          >
            Все
          </button>
          {FOOD_CATEGORIES.map((category) => (
            <button
              key={category}
              className={styles.categoryButton}
              data-active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredFood.map((food) => (
            <div key={food.id} className={styles.foodCard}>
              <img src={food.image} alt={food.name} className={styles.foodImage} loading="lazy" />
              <div className={styles.foodInfo}>
                <h2 className={styles.foodName}>{food.name}</h2>
                <p className={styles.foodDescription}>{food.description}</p>
                <p className={styles.foodPrice}>{food.price} ₽</p>
                <p className={styles.preorderNote}>Предзаказ минимум за 3 дня</p>
                <a
                  href={`https://t.me/VR_FooD9?text=${generateOrderMessage(food)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.orderButton}
                >
                  <img src="/icons/telegram-icon.svg" alt="" style={{ width: '20px', height: '20px' }} />
                  Заказать в Telegram
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
