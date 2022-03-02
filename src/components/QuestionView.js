import { filterProps } from 'framer-motion'
import React, {useState} from 'react'
import Single from './answer types/Single'
import Multiple from './answer types/Multiple'
import Text from './answer types/Text'
import { useChange, useQuestions, useQuiz, useQuizChange } from '../contexts/ContextProvider'

export default function QuestionView() {
    
    const quizTitle = JSON.parse(localStorage.getItem("title"))[0]
    const quizDescription = JSON.parse(localStorage.getItem("description"))[0]

    // const [quizData, setQuizData] = useState(
    //     {
    //         title: quizTitle,
    //         description: quizDescription,
    //         questions: []
    //     }
    // )

    const handleChange = useChange();
    const quizData = useQuiz();
    const handleQuizChange = useQuizChange();
    const questionData = useQuestions();
    
    // const [questionData, setQuestionData] = useState(
    //     {
    //         question: "",
    //         answerType: "",
    //         correctAnswer: "",
    //         answer1: "",
    //         answer2: "",
    //         answer3: "",
    //         answer4: "",
    //         answer5: "",
    //         answer6: ""
    //     }
    // )

    
    // function handleQuizDataChange(questionData) {
    //     setQuizData(prevQuizData => {
    //         return {
    //             ...prevQuizData,
    //             questions: [...prevQuizData.questions, questionData]
    //         }
    //     })
    // }


    // function handleChange(event) {
    //     const {name, value} = event.target
        
    //     console.log("Something changed")

    //     setQuestionData(prevQuestionData => {
    //         return {
    //             [name]: value
    //         }
    //     })

    //     handleQuizDataChange(questionData)
    // }

    return (
        <>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'></link>  
            <div className="bg-special-black lg:w-[80%] w-[445px] h-[200px] rounded-2xl">

                <div name="header" className="flex text-white items-center justify-between border-b-2 border-special-gray h-[50px]">
                    <span name="question-count" className="font-bold ml-[15px] mt-[5px]">1</span>

                    <button className="bg-special-pink rounded-2xl w-[15%]">Save question</button>

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
                            className="ml-[5%] p-0 h-[30px] bg-special-black text-white w-[60%] text-center border-2 border-special-gray outline-none"
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
                        {questionData.answerType === "single" && <Single
                        // questionData={questionData}
                        // setQuestionData={setQuestionData}

                        // quizData={quizData}
                        // setQuizData={quizData}
                        // handleQuizDataChange={handleQuizDataChange}

                        // update={handleChange}
                        a1Val={questionData.answer1}
                        a2Val={questionData.answer2}
                        a3Val={questionData.answer3}
                        a4Val={questionData.answer4}
                        a5Val={questionData.answer5}
                        a6Val={questionData.answer6}
                        />}
                        {questionData.answerType === "multiple" && <Multiple update={handleChange}/>}
                        {questionData.answerType === "text" && <Text update={handleChange}/>}
                    </div>
                    
                </div>
            </div>
        </>
    )
}
