import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../providers/UserContext";

export const ProtectRoutes = () => {
  const { token } = useContext(UserContext);
  return token ? <Outlet /> : <Navigate to={"/"} />;
};
