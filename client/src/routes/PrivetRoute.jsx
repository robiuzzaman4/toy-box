import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <LoadingSpinner/>
    }
    if (user) {
        return children
    }

    return <Navigate to="/login" state={{from: location}} replace />

};

export default PrivetRoute;