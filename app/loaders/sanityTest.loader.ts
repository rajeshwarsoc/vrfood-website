import type { LoaderFunctionArgs } from "react-router-dom";
import { sanityClient } from "~/lib/sanity/client";

export async function sanityTestLoader(_: LoaderFunctionArgs) {
  if (!sanityClient) {
    return {
      ok: false,
      reason: "Sanity client not configured",
    };
  }

  try {
    const result = await sanityClient.fetch(
      `*[_type in ["cake", "category"]][0]{
        _id,
        _type,
        title
      }`
    );

    return {
      ok: true,
      result,
    };
  } catch (error) {
    console.error("[Sanity test loader error]", error);

    return {
      ok: false,
      reason: "Sanity fetch failed",
    };
  }
}
