import { Navigate } from "react-router-dom";
import useIsAuthenticated from "../hooks/useIsAuthenticated";

const PrivateRoute = ({ children }) => {
    const isLoggedIn = useIsAuthenticated();

    return isLoggedIn ? children : <Navigate to="/login" />
}

export default PrivateRoute;