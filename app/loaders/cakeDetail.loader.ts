import type { LoaderFunctionArgs } from "react-router";
import { sanityClient } from "~/lib/sanity/client";

export async function cakeDetailLoader({ params }: LoaderFunctionArgs) {
  const cakeSlug = params.cakeId;

  if (!sanityClient || !cakeSlug) {
    return { cake: null };
  }

  try {
    const cake = await sanityClient.fetch(
      `
      *[_type == "cake" && slug.current == $slug][0]{
        _id,
        title,
        price,
        description,
        image
      }
      `,
      { slug: cakeSlug }
    );

    return { cake: cake ?? null };
  } catch (error) {
    console.error("[cakeDetailLoader] Sanity error:", error);
    return { cake: null };
  }
}
