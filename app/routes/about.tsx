import type { Route } from "./+types/about";
import { Check } from "lucide-react";
import styles from "./about.module.css";
import { Header } from "~/components/header/header";
import { FloatingMessengers } from "~/components/floating-messengers/floating-messengers";
import WhatsApp_Image_2026_0103_at_19_23_131 from "/WhatsApp Image 2026-01-03 at 19.23.13(1).jpeg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "О Венере | VRfood" },
    { name: "description", content: "Узнайте больше о Венере и её философии приготовления" },
  ];
}

export default function About() {
  return (
    <div className={styles.container}>
      <Header />
      <FloatingMessengers />
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>О Венере</h1>
          <p className={styles.subtitle}>Привет! Я Венера — готовлю с душой, как для своей семьи</p>
        </div>

        <img
          src={WhatsApp_Image_2026_0103_at_19_23_131}
          alt="Венера готовит"
          className={styles.heroImage}
          loading="lazy"
        />

        <div className={styles.story}>
          <p>
            Меня зовут Венера, и я живу в Лобне, Московская область. Готовка для меня — это не просто работа, это моя
            страсть и способ выразить заботу о людях.
          </p>
          <p>
            Я начала свой путь как домашний кондитер несколько лет назад, когда готовила торт для дня рождения дочери.
            Увидев радость в глазах детей и услышав восторженные отзывы родителей, я поняла, что хочу дарить эти эмоции
            другим семьям.
          </p>
          <p>
            Сегодня я специализируюсь на тортах на заказ и домашней еде. Каждый торт я создаю индивидуально, учитывая
            все пожелания клиента. Каждое блюдо готовлю так, будто это для моей собственной семьи — с любовью, вниманием
            к деталям и только из свежих ингредиентов.
          </p>
          <p>
            Для меня важно, чтобы вы не просто получили красивый торт или вкусный обед, а почувствовали тепло и заботу,
            которые я вкладываю в каждое блюдо. Я верю, что настоящая еда — это та, которая приготовлена с душой.
          </p>
        </div>

        <div className={styles.philosophy}>
          <h2 className={styles.philosophyTitle}>Моя философия</h2>
          <ul className={styles.philosophyList}>
            <li className={styles.philosophyItem}>
              <Check />
              <p>
                <strong>Только свежие ингредиенты</strong> — я тщательно выбираю каждый продукт, никаких полуфабрикатов
              </p>
            </li>
            <li className={styles.philosophyItem}>
              <Check />
              <p>
                <strong>Без консервантов и химии</strong> — в моих блюдах только натуральные компоненты
              </p>
            </li>
            <li className={styles.philosophyItem}>
              <Check />
              <p>
                <strong>Без готовых смесей</strong> — все делаю с нуля, по проверенным рецептам
              </p>
            </li>
            <li className={styles.philosophyItem}>
              <Check />
              <p>
                <strong>Всё готовится на заказ</strong> — каждое блюдо свежее, приготовленное специально для вас
              </p>
            </li>
            <li className={styles.philosophyItem}>
              <Check />
              <p>
                <strong>Короткий срок хранения = настоящий вкус</strong> — мои торты и блюда не содержат консервантов,
                поэтому имеют ограниченный срок хранения, но зато обладают настоящим домашним вкусом
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
