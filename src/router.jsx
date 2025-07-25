import { createBrowserRouter } from "react-router-dom";
import Home from "./app/public/Home";
import Signup from "./app/public/Singup";
import Singin from "./app/public/Singin";
import Dashboard from "./app/private/Dashboard";
import RootRedirect from "./core/routes/RootRedirect";
import ProtectedRoutes from "./core/routes/ProtectedRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RootRedirect>
        <Home />
      </RootRedirect>
    ),
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
    element: (
      <ProtectedRoutes>
        <Dashboard />,
      </ProtectedRoutes>
    ),
  },
]);
