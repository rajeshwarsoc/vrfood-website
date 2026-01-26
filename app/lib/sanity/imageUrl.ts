import { createImageUrlBuilder } from "@sanity/image-url";
import { sanityClient } from "./client";

const builder = createImageUrlBuilder(sanityClient);

/**
 * Accepts:
 *  - full image object
 *  - image.asset
 *  - image.asset._ref
 */
export function urlFor(source: any) {
  if (!source) return "";

  return builder.image(source).auto("format");
}

