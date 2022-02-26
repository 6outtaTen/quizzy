import React, {useState} from "react"
import {Link} from "react-router-dom"
import { useAuth } from "../../../contexts/AuthContext"

export default function RegisterPage() {

    const [formData, setFormData] = useState(
        {
            email: "",
            password: "",
            confirmPassword: ""
        }
    )
    
    const [loading, setLoading] = useState(false)
    const { signup } = useAuth()
    const [error, setError] = useState('')

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

        if (formData.password !== formData.confirmPassword) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(formData.email, formData.password)
        } catch {
            setError('Failed to create an account')
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
                    <div className="text-[50px] text-center text-white mt-[35%] mb-[50px]">Register</div>
                    
                    <input 
                        className="flex h-[20px] bg-transparent border-b-2 outline-none text-white border-b-special-pink w-[50%]"
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="Email"
                        onChange={handleChange}
                        required
                    />

                    <input 
                        className="flex h-[20px] bg-transparent border-b-2 outline-none text-white border-b-special-pink w-[50%] mt-[30px]"
                        type="password"
                        name="password"
                        value={formData.password}
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />

                    <input 
                        className="flex h-[20px] bg-transparent border-b-2 outline-none text-white border-b-special-pink w-[50%] mt-[30px]"
                        type="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        required
                    />

                    <div className="flex items-center">
                        <button className="text-white bg-special-pink hover:bg-special-pink-hover rounded-2xl w-[200px] h-[50px] mt-[40px]" onClick={handleSubmit}>Register</button>
                        <Link to="/login" className="text-[#66707d] border-b-2 border-b-special-pink mt-[55px] ml-[110px]">I already have an account</Link>
                    </div>
                    
                </div>
            </div>
        </>
    )  
}