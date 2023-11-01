import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoutes = () => {
  const { user } = useAuth();

  // Here change the /auth to /login and /signup
  return user ? <Outlet /> : <Navigate to="/signup" />;
};
export default PrivateRoutes;
