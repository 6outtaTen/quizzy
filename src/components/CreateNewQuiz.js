import React from 'react'
import Navbar from './Navbar';
import QuestionView from './QuestionView';

export default function CreateNewQuiz() {
    const title = JSON.parse(localStorage.getItem("title"))[0]
    const description = JSON.parse(localStorage.getItem("description"))[0]

    console.log(title, description)

    return (
        <>
            <Navbar />

            <div name="container" className="h-[calc(100%-80px)] pl-[180px] pr-[180px] flex flex-col overflow-y-auto items-center">
                <div className="text-[60px] mb-[80px]">Create a new quiz</div>
                <QuestionView />

                <div className="bg-special-black rounded-2xl flex lg:w-[80%] h-[150px] mt-[20px] items-center w-full justify-center">
                    <div className="font-bold text-white hover:text-[#ffffffa6] hover:border-special-pink-hover text-[20px] border-b-2 border-special-pink cursor-pointer">+ ADD QUESTION</div>
                </div>
                
            </div>
        </>
    )
}
