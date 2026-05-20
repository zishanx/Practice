import { useContext, createContext, useState } from "react";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null)
    const [token, setToken] = useState(localStorage.getItem('token') || null)

    const login = (userData, token) => {
        setUser(userData)
        setToken(token)
        localStorage.setItem('user', userData)
        localStorage.setItem('token', token)
    }

    const logout = () => {
        setUser("")
        setToken("")
        localStorage.removeItem('user')
        localStorage.removeItem("token")
    }

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )

}
//eslint-disable-next-line
export const useAuth = () => {
    return useContext(AuthContext)
}