import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoutes = ({ children }) => {
  const { session } = useAuth();

  if (session === undefined) {
    return <div>Loading...</div>;
  }
  return session ? <>{children}</> : <Navigate to="/" />;
};

export default ProtectedRoutes;
