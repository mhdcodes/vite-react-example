import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "@design-library/layout";
import Blog from "./pages/blog";
import Dashboard from "./pages/dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/blog",
        Component: Blog,
      },
      {
        path: "/dashboard",
        Component: Dashboard,
      },
    ],
  },
]);
