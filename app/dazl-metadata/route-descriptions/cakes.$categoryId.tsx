import { CAKE_CATEGORIES } from "~/data/cakes";

interface SuggestedRoute {
  title: string;
  uri: string;
}

interface RouteDescription {
  suggestedRoutes: SuggestedRoute[];
  itemTitle: string;
}

export function getRouteDescription(): RouteDescription {
  return {
    suggestedRoutes: CAKE_CATEGORIES.map((category) => ({
      title: category.name,
      uri: `/cakes/${category.id}`,
    })),
    itemTitle: "Cake Category",
  };
}
