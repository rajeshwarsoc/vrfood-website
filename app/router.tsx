import { createBrowserRouter } from "react-router";
import RootLayout from "./root";

import Home from "./routes/home";
import Cakes from "./routes/cakes";
import CakeCategory from "./routes/cakes.$categoryId";
import Desserts from "./routes/desserts";
import Food from "./routes/food";
import About from "./routes/about";
import Delivery from "./routes/delivery";
import Contact from "./routes/contact";
import Configurator from "./routes/configurator.$designId";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },

      { path: "cakes", element: <Cakes /> },
      { path: "cakes/:categoryId", element: <CakeCategory /> },

      { path: "configurator/:designId", element: <Configurator /> },

      { path: "desserts", element: <Desserts /> },
      { path: "food", element: <Food /> },
      { path: "about", element: <About /> },
      { path: "delivery", element: <Delivery /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

