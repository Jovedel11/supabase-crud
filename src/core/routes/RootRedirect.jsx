import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RootRedirect = ({ children }) => {
  const { session } = useAuth();

  if (session === undefined) {
    return <div>Loading...</div>;
  }

  return session ? <Navigate to="/dashboard" /> : <>{children}</>;
};

export default RootRedirect;
