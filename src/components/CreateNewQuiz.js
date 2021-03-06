import React, { useState } from 'react'
import Navbar from './Navbar';
import QuestionView from './QuestionView';
import { useQuiz, useBasicInfo } from './../contexts/ContextProvider';

export default function CreateNewQuiz() {
    const title = JSON.parse(localStorage.getItem("title"))[0]
    const description = JSON.parse(localStorage.getItem("description"))[0]

    const update = useBasicInfo();

    const [questionCount, setQuestionCount] = useState(1)

    return (
        <>
            <Navbar />

            <div name="container" className="h-[calc(100%-80px)] pl-[180px] pr-[180px] flex flex-col overflow-y-auto items-center">
                <div className="lg:text-[60px] w-[500px] text-center text-[36px] mb-[80px]">Create a new quiz</div>
                <QuestionView key={1}/>

                <div className="bg-special-black rounded-2xl flex lg:w-[80%] h-[150px] mt-[20px] items-center w-[220px] justify-center">
                    <div className="font-bold text-white hover:text-special-white-hover hover:border-special-pink-hover lg:text-[20px] text-[14px] border-b-2 border-special-pink cursor-pointer">+ ADD QUESTION</div>
                </div>
                
            </div>
        </>
    )
}
