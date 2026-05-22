import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate()

    return (

        <div className="min-h-screen bg-gray-100 flex gap-4 items-center justify-center ">
            <button
                onClick={() => {
                    navigate('/Login')
                }}
                className="p-4 bg-orange-500 rounded font-bold text-white"

            >Login</button>
            <button
                onClick={() => {
                    navigate('/register')
                }}
                className="p-4 border border-2-orange-500 rounded font-bold text-black"
            >Register</button>
        </div>
    )
}