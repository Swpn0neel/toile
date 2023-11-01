import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const user = true;

  // Here change the /auth to /login and /signup
  return user ? <Outlet /> : <Navigate to="/signup" />;
};
export default PrivateRoutes;
