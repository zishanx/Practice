import { useAuth } from "../contexts/Authcontext";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {

    const { user, token } = useAuth();

    if (user && token) {
        return <Navigate to='/' ></Navigate>
    } else {
        return children
    }


}