import type { Route } from "./+types/delivery";
import { MapPin, Clock, CreditCard } from "lucide-react";
import styles from "./delivery.module.css";
import { Header } from "~/components/header/header";
import { FloatingMessengers } from "~/components/floating-messengers/floating-messengers";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Доставка и оплата | VRfood" },
    { name: "description", content: "Условия доставки и способы оплаты заказов" },
  ];
}

export default function Delivery() {
  return (
    <div className={styles.container}>
      <Header />
      <FloatingMessengers />
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>Доставка и оплата</h1>
          <p className={styles.subtitle}>Вся необходимая информация о заказе и получении</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Зоны доставки</h2>
          <ul className={styles.infoList}>
            <li className={styles.infoItem}>
              <MapPin />
              <p>
                <strong>Лобня</strong> — бесплатная доставка по городу
              </p>
            </li>
            <li className={styles.infoItem}>
              <MapPin />
              <p>
                <strong>Ближайшее Подмосковье</strong> — доставка по договорённости, стоимость рассчитывается
                индивидуально
              </p>
            </li>
          </ul>
          <div className={styles.highlight}>
            <p>Точную стоимость доставки в ваш район уточняйте при оформлении заказа</p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Сроки изготовления</h2>
          <ul className={styles.infoList}>
            <li className={styles.infoItem}>
              <Clock />
              <p>
                <strong>Минимальный срок предзаказа — 3 дня</strong>
              </p>
            </li>
            <li className={styles.infoItem}>
              <Clock />
              <p>Для сложных тортов и больших заказов рекомендуется оформлять заказ за 5-7 дней</p>
            </li>
            <li className={styles.infoItem}>
              <Clock />
              <p>В праздничные периоды (Новый год, 8 марта, выпускные) заказы принимаются заранее — уточняйте сроки</p>
            </li>
          </ul>
          <div className={styles.highlight}>
            <p>Все блюда готовятся на заказ из свежих ингредиентов, поэтому требуют времени на подготовку</p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Способы оплаты</h2>
          <ul className={styles.infoList}>
            <li className={styles.infoItem}>
              <CreditCard />
              <p>
                <strong>Банковский перевод</strong> — на карту Сбербанка (реквизиты предоставляются при оформлении
                заказа)
              </p>
            </li>
            <li className={styles.infoItem}>
              <CreditCard />
              <p>
                <strong>Наличные</strong> — оплата при получении заказа
              </p>
            </li>
          </ul>
          <p style={{ marginTop: "var(--space-4)" }}>
            Для крупных заказов может потребоваться предоплата 30-50% — это обсуждается индивидуально.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Как сделать заказ</h2>
          <p>1. Выберите понравившийся торт, десерт или блюдо на сайте</p>
          <p>2. Свяжитесь со мной через Telegram (@VR_FooD9) или WhatsApp</p>
          <p>3. Обсудим все детали: дизайн, начинку, вес, дату и время доставки</p>
          <p>4. После согласования всех деталей я начну готовить ваш заказ</p>
          <p>5. Доставлю заказ в оговоренное время или вы можете забрать его самостоятельно</p>
          <div className={styles.highlight}>
            <p>Я всегда на связи и с радостью отвечу на все ваши вопросы. Пишите — буду рада помочь с выбором!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
