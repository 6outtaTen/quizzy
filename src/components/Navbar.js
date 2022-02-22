import React from "react"
import pic from "../images/profile-picture.png"

import { useAuth } from "../contexts/AuthContext"

export default function Navbar() {

    const {currentUser} = useAuth()
    
    return (
        <div className="navbar">
            <div className="navbar-title">Quizzy</div>
            {/* <div className="navbar-logged-in-as">{currentUser.email}</div> */}
            <img className="profile-icon" src={pic}/>
        </div>
    )
}