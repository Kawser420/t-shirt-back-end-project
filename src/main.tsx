import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.tsx";
import Main from "./components/Layout/Main.tsx";
import OrderReview from "./components/OrderReview/OrderReview.tsx";
import Grandpa from "./components/Grandpa/Grandpa.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("tshirts.json"),
      },
      {
        path: "review",
        element: <OrderReview />,
      },
      {
        path: "/grandpa",
        element: <Grandpa />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
