import { Navigate } from "react-router-dom";
import { authContext } from "../../contexts/AuthContext";
import { useContext, useEffect } from "react";

export const Logout = () => {
  const { onLogout } = useContext(authContext);

  useEffect(() => {
    onLogout();
  }, [onLogout]);

  return <Navigate to={"/"} />;
};
