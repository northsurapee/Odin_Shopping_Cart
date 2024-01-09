import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import SingleProduct from "./pages/SingleProduct/SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/shop",
    element: <Shop />,
    children: [
      {
        path: "category/:category"
      }
    ]
  },
  {
    path: "/product/:id",
    element: <SingleProduct />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);