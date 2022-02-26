import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom"
import { useAuth } from "../../../contexts/AuthContext";

export default function LoginPage() {

    const {user} = useAuth()

    const [formData, setFormData] = useState(
        {
            email: "",
            password: ""
        }
    )

    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    // if (user !== null) {
    //     navigate("/")
    // }
        
    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        
        try {
            setError("")
            setLoading(true)
            await login(formData.email, formData.password)
            
            navigate("/")
        } catch {
            setError("Failed to log in")
        }

        setLoading(false)
    }

    return (
        <>
            <div name="container" className="flex h-full">
                <div className="flex w-[50%] h-full bg-special-pink items-center justify-center">
                    <div className="flex text-[150px]">Quizzy</div>
                </div>

                <div className="flex flex-col w-[50%] h-full items-center bg-special-black">
                    <div className="text-[50px] text-center text-white mt-[40%] mb-[50px]">Login</div>
                    
                    <input 
                        className="flex h-[20px] bg-transparent border-b-2 outline-none text-white border-b-special-pink w-[50%]"
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="Enter your email"
                        onChange={handleChange}
                        required
                    />

                    <input 
                        className="flex h-[20px] bg-transparent border-b-2 outline-none text-white border-b-special-pink w-[50%] mt-[30px]"
                        type="password"
                        name="password"
                        value={formData.password}
                        placeholder="Enter your password"
                        onChange={handleChange}
                        required
                    />

                    <div className="flex items-center">
                        <button className="text-white bg-special-pink hover:bg-special-pink-hover rounded-2xl w-[200px] h-[50px] mt-[40px]" onClick={handleSubmit}>Login</button>
                        <Link to="/register" className="text-[#66707d] border-b-2 border-b-special-pink mt-[55px] ml-[150px]">Create an account</Link>
                    </div>
                    
                </div>
            </div>
        </>  
  )
}
