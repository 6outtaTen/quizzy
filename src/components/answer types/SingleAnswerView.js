import React from 'react';
import { useQuiz } from '../../contexts/ContextProvider';
import { useQuestions } from '../../contexts/ContextProvider';
import { useQuizChange } from '../../contexts/ContextProvider';
import { useChange } from '../../contexts/ContextProvider';

export default function SingleAnswerView(props) {


    const handleChange = useChange();
    const quizData = useQuiz();
    const handleQuizChange = useQuizChange();
    const questionData = useQuestions();
    let val = "";

    switch (props.name) {
        case "answer1":
            val=questionData.answer1
            break;
        case "answer2":
            val=questionData.answer2
            break;
        case "answer3":
            val=questionData.answer3
            break;
        case "answer4":
            val=questionData.answer4
            break;
        case "answer5":
            val=questionData.answer5
            break;
        case "answer6":
            val=questionData.answer6
            break;
        default:
            break;
    }

    return (
        <div className="w-full">
            <textarea
                className="w-[80%] h-[30px] text-center text-white bg-transparent border-2 outline-none resize-none border-special-pink"
                placeholder={props.placeholder}
                name={props.name}
                onChange={handleChange}
                value={val}                    
            >  
            </textarea>
        </div>

    )
}

