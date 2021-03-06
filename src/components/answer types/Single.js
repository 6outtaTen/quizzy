import React from 'react'
import SingleAnswers from './SingleAnswers'
import SingleAnswerView from './SingleAnswerView'
import { useQuestions, useQuiz, useUpdate } from '../../contexts/ContextProvider'
import { useQuizChange } from '../../contexts/ContextProvider'
import { useChange } from '../../contexts/ContextProvider'

export default function Single(props) {

    const handleChange = useChange();
    const quizData = useQuiz();
    const handleQuizChange = useQuizChange();
    const updateQuestion = useUpdate();
    const questionData = useQuestions();

    function handle(e) {
        handleChange(e)

        updateQuestion(0, questionData)
    }

    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex w-full h-[50%] items-center justify-center">
                <select
                    className="w-[80%] bg-special-black text-white border-2 border-special-gray h-[40%] text-center"
                    name="correctAnswer"
                    onChange={handle}
                >
                    <option value="">Choose the correct answer</option>
                    <option value="answer1">Answer 1</option>
                    <option value="answer2">Answer 2</option> 
                    <option value="answer3">Answer 3</option> 
                    <option value="answer4">Answer 4</option> 
                    <option value="answer5">Answer 5</option> 
                    <option value="answer6">Answer 6</option> 

                </select>
            </div>

            <div className="flex flex-col w-full h-[50%] justify-center items-center">
                <SingleAnswers/>  
            </div>

        </div>
    )
}
