import Login from "./pages/login"
import Register from "./pages/regsiter"
import { BrowserRouter, Routes, Route } from "react-router"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>

  )
}