import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import AllProducts from "./pages/allProducts/AllProducts.tsx";
import ShoppingCart from "./pages/shoppingCart/ShoppingCart.tsx";
import Product from "./pages/productDescription/Product.tsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/produtos",
        element: <AllProducts />,
      },
      {
        path: "/carrinho",
        element: <ShoppingCart />,
      },
      {
        path: "/descricao-produto",
        element: <Product />,
      },
    ],
  },
]);

const client = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
