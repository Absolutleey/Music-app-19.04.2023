import { Navigate, Outlet } from "react-router-dom";

import { authContext } from "../../contexts/AuthContext";
import { useContext } from "react";

export const RouteGuard = ({
    children,
}) => {
    const { isAuthenticated } = useContext(authContext)
    
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children ? children : <Outlet />
};