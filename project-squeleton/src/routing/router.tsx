import { createBrowserRouter } from "react-router-dom";
import About from "../modules/about/about";
import Home from "../modules/home/home";
import Root from "./root";

export const applicationRoutes = {
  HOME: "/",
  ABOUT: "/about",
} as const;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: applicationRoutes.HOME,
        element: <Home />,
      },
      {
        path: applicationRoutes.ABOUT,
        element: <About />,
      },
    ],
  },
]);
