import React from "react"
import { useAuth } from "../contexts/AuthContext"
import Navbar from "./Navbar"
import Browse from "./dashboard/Browse"
import MyQuizzes from "./dashboard/MyQuizzes"
import CreateQuiz from "./dashboard/CreateQuiz"

export default function Dashboard(props) {

    const {currentUser} = useAuth()

    return (
        <div name="container" className="flex flex-wrap items-center">
            <Navbar />

            {/* <div name="container" className="flex flex-wrap h-full items-center"> */}
            <div className="flex text-center justify-center ml-[230px] mt-[70px]">
                <div className="text-[50px]">Browse</div>
                <Browse />
            </div>

            <div className="w-[5px] h-[903px] ml-[210px] bg: bg-special-black" />
            {/* <MyQuizzes /> */}

            <div className="horizontal-divider" />
            {/* <CreateQuiz /> */}
        </div>
    )
}
