import type { LoaderFunctionArgs } from "react-router-dom";
import { sanityClient } from "~/lib/sanity/client";

export async function cakesByCategoryLoader({ params }: LoaderFunctionArgs) {
  const { categoryId } = params;

  if (!categoryId) {
    throw new Response("Category not found", { status: 404 });
  }

  const query = `
    {
      "category": *[_type == "category" && slug.current == $slug][0]{
        _id,
        title,
        "slug": slug.current
      },
      "cakes": *[_type == "cake" && category->slug.current == $slug]{
        _id,
        title,
        price,
        description,
        "slug": slug.current,
        image{
          asset->{_id, url}
        }
      }
    }
  `;

  const data = await sanityClient.fetch(query, {
    slug: categoryId,
  });

  return data;
}

