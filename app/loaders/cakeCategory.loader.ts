import type { LoaderFunctionArgs } from "react-router-dom";
import { sanityClient } from "~/lib/sanity/client";

export async function cakeCategoryLoader({ params }: LoaderFunctionArgs) {
  const slug = params.categoryId;

  if (!sanityClient || !slug) {
    return { category: null, cakes: [] };
  }

  try {
    // 1️⃣ Fetch category first
    const category = await sanityClient.fetch(
      `
      *[_type == "category" && slug.current == $slug][0]{
        _id,
        title,
        "slug": slug.current
      }
      `,
      { slug }
    );

    if (!category?._id) {
      return { category: null, cakes: [] };
    }

    // 2️⃣ Fetch cakes by category _ref (MOST RELIABLE)
    const cakes = await sanityClient.fetch(
      `
      *[_type == "cake" && category._ref == $categoryId]{
        _id,
        title,
        price,
        description
      }
      `,
      { categoryId: category._id }
    );

    return {
      category,
      cakes: cakes ?? [],
    };
  } catch (error) {
    console.error("[cakeCategoryLoader] error:", error);
    return { category: null, cakes: [] };
  }
}
