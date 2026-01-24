import type { Route } from "./+types/home";
import { Link } from "react-router";

import styles from "./home.module.css";
import { Header } from "~/components/header/header";
import { CAKE_CATEGORIES } from "~/data/cakes";
import { FOOD_ITEMS } from "~/data/food";
import { REVIEWS } from "~/data/reviews";
import WhatsApp_Image_2026_0103_at_19_23_131 from "/WhatsApp Image 2026-01-03 at 19.23.13(1).jpeg";
import cakeIcon from "/icons/cake-icon.png";
import foodIcon from "/icons/food-icon.png";
import starDoodle from "/icons/star-doodle.png";
import arrowIcon from "/icons/arrow-icon.png";
import { useLanguage } from "~/contexts/language-context";
import { FloatingMessengers } from "~/components/floating-messengers/floating-messengers";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "VRfood — торты и домашняя еда с любовью | Лобня" },
    {
      name: "description",
      content:
        "Торты на заказ и домашняя еда в Лобне. Свежие ингредиенты, индивидуальный подход, приготовлено с душой.",
    },
  ];
}

export default function Home() {
  const { t } = useLanguage();
  const featuredCakes = CAKE_CATEGORIES.slice(0, 6);
  const featuredFood = FOOD_ITEMS.filter((item) => item.category === "Обеды").slice(0, 4);

  return (
    <div className={styles.container}>
      <Header />
      <FloatingMessengers />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{t.home.hero.title}</h1>
          <p className={styles.heroSubtitle}>{t.home.hero.subtitle}</p>
          <div className={styles.heroCtas}>
            <Link to="/cakes" className={`${styles.ctaButton} ${styles.cakesButton}`}>
              <img src={cakeIcon} alt="" className={styles.ctaIcon} />
              {t.home.hero.cta}
            </Link>
            <Link to="/food" className={`${styles.ctaButton} ${styles.foodButton}`}>
              <img src={foodIcon} alt="" className={styles.ctaIcon} />
              {t.nav.food}
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t.home.featured.title}</h2>
          <Link to="/cakes" className={styles.sectionLink}>
            {t.home.featured.viewAll} <img src={arrowIcon} alt="" className={styles.linkIcon} />
          </Link>
        </div>
        <div className={styles.cardsScroll}>
          {featuredCakes.map((category) => (
            <Link key={category.id} to={`/cakes/${category.id}`} className={styles.categoryCard}>
              <img src={category.image} alt={category.name} className={styles.categoryImage} loading="lazy" />
              <div className={styles.categoryName}>{category.name}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Домашние обеды — вкусно и с душой</h2>
          <Link to="/food" className={styles.sectionLink}>
            Вся еда <img src={arrowIcon} alt="" className={styles.linkIcon} />
          </Link>
        </div>
        <div className={styles.cardsScroll}>
          {featuredFood.map((item) => (
            <div key={item.id} className={styles.categoryCard}>
              <img src={item.image} alt={item.name} className={styles.categoryImage} loading="lazy" />
              <div className={styles.categoryName}>{item.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.aboutBlock}>
          <img
            src={WhatsApp_Image_2026_0103_at_19_23_131}
            alt="Венера готовит"
            className={styles.aboutImage}
            loading="lazy"
          />
          <div className={styles.aboutText}>
            <h3>Привет! Я Венера — готовлю с душой, как для своей семьи</h3>
            <p>
              Каждый торт и каждое блюдо я готовлю с любовью и вниманием к деталям. Использую только свежие ингредиенты,
              без консервантов и готовых смесей. Мой принцип — короткий срок хранения означает настоящий вкус.
            </p>
            <p>
              Я верю, что домашняя еда — это не просто питание, это забота и тепло, которые передаются через каждое
              блюдо.
            </p>
            <Link to="/about" className={styles.sectionLink}>
              Подробнее обо мне <img src={arrowIcon} alt="" className={styles.linkIcon} />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t.home.reviews.title}</h2>
        </div>
        <div className={styles.reviewsGrid}>
          {REVIEWS.map((review) => (
            <div key={review.id} className={styles.reviewCard}>
              <div className={styles.reviewHeader}>
                <span className={styles.reviewName}>{review.name}</span>
                <div className={styles.stars}>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <img key={i} src={starDoodle} alt="" className={styles.starIcon} />
                  ))}
                </div>
              </div>
              <p className={styles.reviewText}>{review.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.contactBlock}>
          <h3>Напишите мне — я с радостью помогу с выбором</h3>
          <div className={styles.contactButtons}>
            <Link to="/contact" className={styles.sectionLink}>
              Контакты <img src={arrowIcon} alt="" className={styles.linkIcon} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
