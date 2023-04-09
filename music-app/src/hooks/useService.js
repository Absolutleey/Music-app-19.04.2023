import { useContext } from "react";
import { authContext } from "../contexts/AuthContext";

export const useService = (serviceFactory) => {
  const { token } = useContext(authContext);
  const service = serviceFactory(token);
  return service;
};
