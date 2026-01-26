import type { LoaderFunctionArgs } from "react-router";
import { sanityClient } from "~/lib/sanity/client";

export async function cakeDetailLoader({ params }: LoaderFunctionArgs) {
  const { cakeId } = params;

  if (!cakeId) {
    throw new Response("Cake not found", { status: 404 });
  }

  const query = `
    *[_type == "cake" && slug.current == $slug][0]{
      _id,
      title,
      price,
      description,
      image {
        asset {
          _ref
        }
      }
    }
  `;

  const cake = await sanityClient.fetch(query, { slug: cakeId });

  return { cake };
}

