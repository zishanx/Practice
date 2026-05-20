import Login from "./pages/login"
import { BrowserRouter, Routes, Route } from "react-router"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>

  )
}