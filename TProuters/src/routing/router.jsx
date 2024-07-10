import { createBrowserRouter } from "react-router-dom";
import SearchPage from "../pages/SearchPage";
import HomePage from "../pages/HomePage";
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
        children: [
          {
            index: true,
            element: <SearchPage />,
          },
          //   {
          //     path: ":id",
          //     element: <UserDetails />,
          //   },
          //   {
          //     path: "new", // /user/new
          //     element: <UserAddPage />,
          //   },
        ],
      },
    ],
  },
]);
