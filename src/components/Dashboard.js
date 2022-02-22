import React from "react"
import { useAuth } from "../contexts/AuthContext"
import Navbar from "./Navbar"
import Browse from "./dashboard/Browse"
import MyQuizzes from "./dashboard/MyQuizzes"
import CreateQuiz from "./dashboard/CreateQuiz"

export default function Dashboard(props) {

    const {currentUser} = useAuth()

    return (
        <div>
            <Navbar />

            <div className="browse">
                <div className="browse-title">Browse</div>
                <Browse />
            </div>

            <div className="vertical-divider" />
            <MyQuizzes />

            <div className="horizontal-divider" />
            <CreateQuiz />
        
        </div>
    )
}
