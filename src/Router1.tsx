import { createBrowserRouter, Navigate } from "react-router-dom";
import { productsLoader } from "./store/userSlice.tsx";
import RootLayout from "./pages/RootLayOut.tsx";
import About from "./pages/About.tsx";
import Product from "./pages/Home.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import AddToCard from "./pages/AddToCard.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: productsLoader,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "addToCard",
        element: <AddToCard />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
