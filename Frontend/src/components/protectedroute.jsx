import { useAuth } from "../contexts/Authcontext"
import { Navigate } from "react-router-dom"

export default function ProtectedRoute({ children }) {

    const { token } = useAuth()


    if (!token) {
        return <Navigate to="/login"></Navigate>
    } else {
        return children
    }

}