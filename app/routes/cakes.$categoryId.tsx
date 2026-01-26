import { useLoaderData, Link } from "react-router-dom";
import { Header } from "~/components/header/header";
import { FloatingMessengers } from "~/components/floating-messengers/floating-messengers";
import { urlFor } from "~/lib/sanity/imageUrl";
import styles from "./cakes.$categoryId.module.css";

type Cake = {
  _id: string;
  title: string;
  price?: number;
  slug: string;
  image?: any;
};

export default function CakeCategory() {
  const { category, cakes } = useLoaderData() as {
    category: { title: string };
    cakes: Cake[];
  };

  return (
    <div className={styles.container}>
      <Header />
      <FloatingMessengers />

      <h1 className={styles.title}>{category.title}</h1>

      <div className={styles.grid}>
        {cakes.map((cake) => {
          const imgSrc =
            cake.image?.asset?._id && urlFor(cake.image).width(400).url();

          return (
            <Link
              key={cake._id}
              to={`/cakes/${category.title.toLowerCase().replace(/\s+/g, "-")}/${cake.slug}`}
              className={styles.card}
            >
              {imgSrc && (
                <img
                  src={imgSrc}
                  alt={cake.title}
                  className={styles.image}
                />
              )}
              <h3>{cake.title}</h3>
              {cake.price && <p>₹{cake.price}</p>}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

