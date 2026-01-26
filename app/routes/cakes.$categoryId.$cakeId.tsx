import { useLoaderData, Link } from "react-router-dom";
import { Header } from "~/components/header/header";
import { FloatingMessengers } from "~/components/floating-messengers/floating-messengers";
import { urlFor } from "~/lib/sanity/imageUrl";
import styles from "./cakes.$categoryId.module.css";

type Cake = {
  title: string;
  price?: number;
  description?: string;
  image?: {
    asset?: {
      _ref?: string;
    };
  };
};

export default function CakeDetail() {
  const { cake } = useLoaderData() as { cake: Cake | null };

  if (!cake) {
    return (
      <div className={styles.container}>
        <Header />
        <p style={{ padding: 24 }}>Cake not found.</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Header />
      <FloatingMessengers />

      <div className={styles.content}>
        <h1>{cake.title}</h1>

        {cake.image?.asset && (
          <img
            src={urlFor(cake.image).width(800).url()}
            alt={cake.title}
            style={{ maxWidth: "100%", marginBottom: 24 }}
          />
        )}

        {cake.price && <p><strong>₹{cake.price}</strong></p>}
        {cake.description && <p>{cake.description}</p>}

        <Link to="/cakes">← Back to cakes</Link>
      </div>
    </div>
  );
}

