import { CAKE_DESIGNS } from "~/data/cakes";

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
    suggestedRoutes: CAKE_DESIGNS.map((design) => ({
      title: design.name,
      uri: `/configurator/${design.id}`,
    })),
    itemTitle: "Cake Design",
  };
}
