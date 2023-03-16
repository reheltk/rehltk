import { useAuth } from "../conext/AurhContexe";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to={"/admin/login"} />;
    }
    return children;
}
export default ProtectedRoute;
