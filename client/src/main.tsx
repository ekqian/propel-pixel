import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/app.tsx";
import Home from "./pages/home.tsx";
import History from "./pages/history.tsx";
import Nutrition from "./pages/nutrition.tsx";
import Sleep from "./pages/sleep.tsx";
import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/nutrition",
    element: <Nutrition />,
  },
  {
    path: "/sleep",
    element: <Sleep />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
