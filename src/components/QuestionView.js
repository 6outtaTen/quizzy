import React, {useState} from 'react'
import Single from './answer types/Single'
import Multiple from './answer types/Multiple'
import Text from './answer types/Text'
import { useChange, useQuestions, useQuiz, useQuizChange } from '../contexts/ContextProvider'

export default function QuestionView() {
    
    // const quizTitle = JSON.parse(localStorage.getItem("title"))[0]
    // const quizDescription = JSON.parse(localStorage.getItem("description"))[0]

    const [saveClicked, setSaveClicked] = useState(false);

    const handleChange = useChange();
    const quizData = useQuiz();
    const handleQuizChange = useQuizChange();
    const questionData = useQuestions();

    console.log(quizData);
    
    return (
        <>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'></link>  
            <div className="bg-special-black lg:w-[80%] w-[445px] h-[200px] rounded-2xl">

                <div name="header" className="flex text-white items-center justify-between border-b-2 border-special-gray h-[50px]">
                    <span name="question-count" className="font-bold ml-[15px] mt-[5px]">1</span>
                    <i id="trash" className="fa fa-trash white-color"></i>
                </div>

                <div name="body" className="flex h-[calc(100%-50px)] w-full">
                    <div name="left-col" className="flex w-[30%] items-center">
                        <textarea
                            className="w-[90%] ml-[30px] h-[60px] text-center text-white bg-transparent border-2 outline-none resize-none border-special-pink"
                            placeholder="Enter question title"
                            name="question"
                            onChange={handleChange}
                            value={questionData.question}
                        />
                    </div>

                    <div name="center-col" className="flex w-[30%] items-center justify-center flex-col">


                        <select
                            className="ml-[5%] p-0 h-[30px] text-[9px] lg:text-[14px] bg-special-black text-white w-[60%] text-center border-2 border-special-gray outline-none"
                            onChange={handleChange} 
                            name="answerType"
                        >
                            <option value="">Choose the answer type</option>
                            <option value="single">Single choice</option>
                            <option value="multiple">Multiple choice</option>
                            <option value="text">Text answer</option>
                        </select>
                    </div>

                    <div name="right col" className="flex w-[40%]">
                        {questionData.answerType === "single"  && <Single/>}
                        {questionData.answerType === "text"  && <Single/>}
                        {questionData.answerType === "multiple" && <Multiple update={handleChange}/>}
                    </div>
                    
                </div>
            </div>
        </>
    )
}
