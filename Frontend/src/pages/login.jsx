import { useState } from "react";
import { useAuth } from "../contexts/Authcontext";
import api from "../utils/api";

export default function Login() {

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { login } = useAuth()
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handlesubmit = async () => {
        try {
            setLoading(true)
            const res = await api.post('/login', form);
            login(res.data.user, res.data.token)

        } catch (err) {
            setError(err.response?.data?.message)

        } finally {
            setLoading(false)
        }
    }


    return(
        <>
            <h1>Hello, Welcome Back</h1>
        </>
    )
}