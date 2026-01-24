import type { Route } from "./+types/desserts";
import { useState } from "react";
import styles from "./desserts.module.css";
import { Header } from "~/components/header/header";
import { DESSERTS, DESSERT_CATEGORIES } from "~/data/desserts";
import { FloatingMessengers } from "~/components/floating-messengers/floating-messengers";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Другие десерты | VRfood" },
    { name: "description", content: "Капкейки, кейкпопсы, трайфлы и другие вкусные десерты на заказ" },
  ];
}

export default function Desserts() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredDesserts = selectedCategory ? DESSERTS.filter((d) => d.category === selectedCategory) : DESSERTS;

  const generateOrderMessage = (dessert: (typeof DESSERTS)[0]) => {
    const message = `Здравствуйте! Хочу заказать:

${dessert.name}
Цена: ${dessert.price} ₽/${dessert.priceUnit}`;
    return encodeURIComponent(message);
  };

  return (
    <div className={styles.container}>
      <Header />
      <FloatingMessengers />
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>Другие десерты</h1>
          <p className={styles.subtitle}>Капкейки, кейкпопсы, трайфлы и многое другое</p>
        </div>

        <div className={styles.categories}>
          <button
            className={styles.categoryButton}
            data-active={selectedCategory === null}
            onClick={() => setSelectedCategory(null)}
          >
            Все
          </button>
          {DESSERT_CATEGORIES.map((category) => (
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
          {filteredDesserts.map((dessert) => (
            <div key={dessert.id} className={styles.dessertCard}>
              <div className={styles.imageGallery}>
                <img src={dessert.images[0]} alt={dessert.name} className={styles.dessertImage} loading="lazy" />
              </div>
              <div className={styles.dessertInfo}>
                <h2 className={styles.dessertName}>{dessert.name}</h2>
                <p className={styles.dessertDescription}>{dessert.description}</p>
                <p className={styles.dessertPrice}>
                  {dessert.price} ₽/{dessert.priceUnit}
                </p>
                <p className={styles.preorderNote}>Предзаказ минимум за 3 дня</p>
                <div className={styles.orderButtons}>
                  <a
                    href={`https://t.me/VR_FooD9?text=${generateOrderMessage(dessert)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.orderButton}
                  >
                    <img src="/icons/telegram-icon.svg" alt="" style={{ width: '20px', height: '20px' }} />
                    Telegram
                  </a>
                  <a
                    href={`https://wa.me/79099056417?text=${generateOrderMessage(dessert)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.orderButton}
                  >
                    <img src="/icons/whatsapp-icon.svg" alt="" style={{ width: '20px', height: '20px' }} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
