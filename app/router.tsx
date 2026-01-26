import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./root";

import Home from "./routes/home";
import Cakes from "./routes/cakes";
import CakeCategory from "./routes/cakes.$categoryId";
import CakeDetail from "./routes/cakes.$categoryId.$cakeId";

import { cakesLoader } from "./loaders/cakes.loader";
import { cakesByCategoryLoader } from "./loaders/cakesByCategory.loader";
import { cakeDetailLoader } from "./loaders/cakeDetail.loader";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/cakes",
        element: <Cakes />,
        loader: cakesLoader,
      },
      {
        path: "/cakes/:categoryId",
        element: <CakeCategory />,
        loader: cakesByCategoryLoader,
      },
      {
        path: "/cakes/:categoryId/:cakeId",
        element: <CakeDetail />,
        loader: cakeDetailLoader,
      },
    ],
  },
]);

