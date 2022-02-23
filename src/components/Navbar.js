import React from "react"
import pic from "../images/profile-picture.png"

import { useAuth } from "../contexts/AuthContext"

export default function Navbar() {

    const {currentUser} = useAuth()
    
    return (
        <div className="flex h-[80px] w-full bg-special-black items-center justify-between px-7 py-4">
            <div className="text-white text-[34px]" name="navbar-title">Quizzy</div>
            {/* <div className="navbar-logged-in-as">{currentUser.email}</div> */}
            <img className="w-[48px] h-[48p] cursor-pointer" name="profile-icon" src={pic}/>
        </div>
    )
}