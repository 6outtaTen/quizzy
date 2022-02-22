import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom"
import { useAuth } from "../../../contexts/AuthContext";

export default function LoginPage() {

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
        <div>
            <div className="login-app-title">Quizzy</div>
            <div className="login-rect">
                <div className="login-title">Login</div>

                <form onSubmit={handleSubmit}>
                    <input 
                        className="username-field"
                        type="email"
                        name="email"
                        value={formData.email}
                        placeholder="Enter your email"
                        onChange={handleChange}
                        required
                    />

                    <input
                        className="password-field"
                        type="password"
                        name="password"
                        value={formData.password}
                        placeholder="Enter your password"
                        onChange={handleChange}
                        required
                    />

                    <div className="login-button" disabled={loading} type="submit" onClick={handleSubmit}>Login</div>
                </form>            
                
                <Link to="/register" className="create-account-button">Create an account</Link>
            </div>
        </div>
        
  )
}
