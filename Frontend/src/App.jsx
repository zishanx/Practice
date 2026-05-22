import Login from "./pages/login"
import Register from "./pages/regsiter"
import Home from './pages/home'
import { BrowserRouter, Routes, Route } from "react-router"
import { AuthProvider } from "./contexts/Authcontext"

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>

  )
}