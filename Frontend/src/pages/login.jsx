import { useState } from "react";
import { useAuth } from "../contexts/Authcontext";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

export default function Login() {

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { login } = useAuth()
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handlesubmit = async (e) => {
        try {
            e.preventDefault();
            setLoading(true)
            const res = await api.post('/login', form);
            login(res.data.user, res.data.token)
            navigate('/')

        } catch (err) {
            setError(err.response?.data?.message)

        } finally {
            setLoading(false)
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="bg-white border border-gray-200 rounded-xl p-10 w-full max-w-md">
                <p className="text-xs font-medium tracking-widest mb-1" style={{ color: '#D85A30' }}>Ziz</p>
                <h1 className="text-2xl font-medium text-gray-900 mb-1">Welcome back</h1>
                <p className="text-sm text-gray-500 mb-8">Sign in to your account</p>

                <div className="flex flex-col gap-4">
                    <div>
                        <label className="text-xs text-gray-500 block mb-1">Email</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-gray-400" />
                    </div>
                    <div>
                        <label className="text-xs text-gray-500 block mb-1">Password</label>
                        <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="••••••••" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-gray-400" />
                    </div>
                    <button onClick={handlesubmit} className="w-full py-2.5 rounded-lg text-white text-sm font-medium mt-1" style={{ background: '#D85A30' }}>
                        {loading ? "Signing in..." : "Sign in"}
                    </button>
                </div>

                {error && <p className="text-red-500 text-xs text-center mt-3">{error}</p>}
                <p className="text-xs text-gray-400 text-center mt-6">Don't have an account? <span onClick={()=>{
                    navigate('/register')
                }} className="font-medium cursor-pointer" style={{ color: '#D85A30' }}>Register</span></p>
            </div>
        </div>
    )
}