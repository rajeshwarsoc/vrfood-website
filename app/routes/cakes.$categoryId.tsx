import { useLoaderData, Link } from "react-router-dom";
import { Header } from "~/components/header/header";
import { FloatingMessengers } from "~/components/floating-messengers/floating-messengers";

type Cake = {
  _id: string;
  title: string;
  price: number;
  description?: string;
};

type LoaderData = {
  category: {
    _id: string;
    title: string;
    slug: string;
  } | null;
  cakes: Cake[];
};

export default function CakeCategory() {
  const { category, cakes } = useLoaderData() as LoaderData;

  if (!category) {
    return (
      <div style={{ padding: 40 }}>
        <Header />
        <p>Category not found.</p>
        <Link to="/cakes">← Back to cakes</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 40 }}>
      <Header />
      <FloatingMessengers />

      <Link to="/cakes">← Back to cakes</Link>

      <h1 style={{ marginTop: 16 }}>{category.title}</h1>

      {cakes.length === 0 ? (
        <p style={{ marginTop: 24 }}>No cakes in this category yet.</p>
      ) : (
        <ul style={{ marginTop: 24 }}>
          {cakes.map((cake) => (
            <li key={cake._id} style={{ marginBottom: 16 }}>
              <strong>{cake.title}</strong>
              {cake.price ? ` — ${cake.price} ₽` : ""}
              {cake.description && <div>{cake.description}</div>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

