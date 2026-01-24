import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("cakes", "routes/cakes.tsx"),
  route("cakes/:categoryId", "routes/cakes.$categoryId.tsx"),
  route("configurator/:designId", "routes/configurator.$designId.tsx"),
  route("fillings", "routes/fillings.tsx"),
  route("desserts", "routes/desserts.tsx"),
  route("food", "routes/food.tsx"),
  route("about", "routes/about.tsx"),
  route("delivery", "routes/delivery.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
