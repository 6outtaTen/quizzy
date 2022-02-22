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
        <div className="register-rect">
            <div className="register-title">Register</div>
            <form>
                <input className="usernameReg-field"
                    type="email"
                    name="email" 
                    value={formData.email}
                    placeholder="Email"
                    onChange={handleChange} 
                    required
                    />
                <input
                    className="passwordReg-field"
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Password"
                    onChange={handleChange}
                    required
                    />

                <input 
                    className="password-confirm"
                    type="password" 
                    name="confirmPassword"
                    value={formData.confirmPassword} 
                    placeholder="Confirm Password" 
                    onChange={handleChange}
                    required
                    />

                <div className="register-button" disabled={loading} onClick={handleSubmit}>Register</div>
            </form>
            
            <Link to="/login" className="go-to-login">I already have an account</Link>
        </div>
    )  
}