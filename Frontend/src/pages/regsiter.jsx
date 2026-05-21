import { useState } from "react"
import api from "../utils/api"
import { useNavigate } from "react-router-dom"

export default function Register() {

    const [form, setform] = useState({
        name: "",
        email: "",
        password: "",
    })

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });

    }

    const handleSubmit = async () => {
        setLoading(true)
        try {

            await api.post("/register", form)
            navigate('/login')
        } catch (err) {
            setError(err.response?.data?.message)
        } finally {
            setLoading(false)
        }

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-40">
            <div className="bg-white border border-gray-200 rounded-xl p-10 w-full max-w-md">
                <p className="text-xs font-medium tracking-widest mg-1 text-[#D85A30]">Ziz</p>
                <h1 className="text-2xl font-medium text-gray-900 mb-1">Register</h1>
                <p className="text-sm text-gray-500 mb-8">Register for a new account</p>

                <div className="flex-flex-col gap-4">
                    <div>

                        <label className="text-xs text-gray-500 block mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Zishan"
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-gray-400"
                        />
                    </div>
                    <div>
                        <label  className="text-xs text-gray-500 block mb-1">Email</label>
                        <input 
                            type="text"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example"
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-gray-400"
                        />
                    </div>
                    <div>
                        <label className="text-xs text-gray-500 block mb-1" >Password</label>
                        <input 
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-gray-400"
                        />
                    </div>

                    <button onClick={handleSubmit} className="w-full py-2.5 rounded-lg text-white text-sm font-medium mt-1 bg-[#D85A30]">
                        {loading ? "Registering..": "Register"}
                    </button>
                </div>

                {error && <p className="text-red-500 text-xs text-center mt-3">{error}</p>}
                <p className="text-xs text-gray-400 text-center mt-6">Have an account? <span onClick={()=>{navigate('/login')}} className="font-medium cursor-pointer text-[#D85A30]">Login</span></p>
            </div>
        </div>
    )
}