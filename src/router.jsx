import { createBrowserRouter } from "react-router-dom";
import Home from "./app/public/Home";
import Signup from "./app/public/Singup";
import Singin from "./app/public/Singin";
import Dashboard from "./app/private/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/singup",
    element: <Signup />,
  },
  {
    path: "/singin",
    element: <Singin />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
