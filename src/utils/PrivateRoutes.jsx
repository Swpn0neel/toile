/* eslint-disable no-unused-vars */
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const user = false; // Replace with your authentication logic

  return user ? <Outlet /> : <Navigate to="/auth" />;
};
export default PrivateRoutes;
