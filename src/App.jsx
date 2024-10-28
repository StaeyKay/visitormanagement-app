import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./pages/welcome";
import Checkin from "./pages/checkin";
import Checkout from "./pages/checkout";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Welcome /> },
    { path: "checkin", element: <Checkin /> },
    { path: "checkout", element: <Checkout /> },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
