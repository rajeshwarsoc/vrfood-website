import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./client";

const builder = sanityClient
  ? imageUrlBuilder(sanityClient)
  : null;

export function urlFor(source: any) {
  if (!builder || !source) return "";
  return builder.image(source);
}
