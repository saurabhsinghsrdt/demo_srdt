import { createBrowserRouter, Navigate } from "react-router-dom";
import { productsLoader } from "./store/userSlice.tsx";
import RootLayout from "./pages/RootLayOut.tsx";
import About from "./pages/About.tsx";
import Product from "./pages/Product.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import AddToCard from "./pages/AddToCard.tsx";
import LoginForm from "./pages/LoginForm.tsx";

const isAuthenticated = (): boolean => {
  return !!localStorage.getItem("email");
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: isAuthenticated() ? <RootLayout /> : <Navigate to="/login" replace />,
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
    path: "/login",
    element: <LoginForm/>,
  },
  {
    path: "*",
    element: <Navigate to="/" replace/>,
  },
]);
