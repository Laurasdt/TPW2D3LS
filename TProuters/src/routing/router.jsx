import { createBrowserRouter } from "react-router-dom";
import SearchPage from "../pages/SearchPage";
import HomePage from "../pages/HomePage";
import DetailsPage from "../pages/DetailsPage";
import Layout from "../routing/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "searchpage",
        element: <SearchPage />,
      },
      {
        path: "details/:packageName",
        element: <DetailsPage />,
      },
    ],
  },
]);
