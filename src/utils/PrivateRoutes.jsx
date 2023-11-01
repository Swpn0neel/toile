/* eslint-disable no-unused-vars */
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const user = false;

  // Here change the /auth to /login and /signup
  return user ? <Outlet /> : <Navigate to="/auth" />;
};
export default PrivateRoutes;
