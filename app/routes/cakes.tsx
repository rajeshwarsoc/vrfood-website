import { useLoaderData, Link } from "react-router-dom";

import { Header } from "~/components/header/header";
import { FloatingMessengers } from "~/components/floating-messengers/floating-messengers";
import styles from "./cakes.module.css";

type Category = {
  _id: string;
  title: string;
  slug: string;
};

export default function Cakes() {
  const { categories } = useLoaderData() as { categories: Category[] };

  return (
    <div className={styles.container}>
      <Header />
      <FloatingMessengers />

      <div className={styles.content}>
        <h1>Cakes</h1>

        {categories.length === 0 && (
          <p>No categories available.</p>
        )}

        <div className={styles.grid}>
          {categories.map((category) => (
            <Link
              key={category._id}
              to={`/cakes/${category.slug}`}
              className={styles.card}
            >
              <div className={styles.cardTitle}>
                {category.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
