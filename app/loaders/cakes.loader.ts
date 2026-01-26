import type { LoaderFunctionArgs } from "react-router-dom";
import { sanityClient } from "~/lib/sanity/client";

export async function cakesLoader(_: LoaderFunctionArgs) {
  if (!sanityClient) {
    return {
      categories: [],
    };
  }

  try {
    const categories = await sanityClient.fetch(`
      *[_type == "category"] | order(order asc) {
        _id,
        title,
        "slug": slug.current
      }
    `);

    return {
      categories: categories ?? [],
    };
  } catch (error) {
    console.error("[cakesLoader] Sanity error:", error);

    return {
      categories: [],
    };
  }
}
