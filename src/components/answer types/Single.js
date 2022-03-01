import React, {useState} from 'react'
import SingleAnswers from './SingleAnswers'
import SingleAnswerView from './SingleAnswerView'

export default function Single(props) {

    const [ansCount, setAnsCount] = useState(1)

    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex w-full h-[50%] items-center justify-center">
                <select
                    className="w-[80%] bg-special-black text-white border-2 border-special-gray h-[40%] text-center"
                >
                    <option value="">Choose the correct answer</option>
                    <option value="answer1">Answer 1</option>
                    { ansCount >= 2 && <option value="answer2">Answer 2</option> }
                    { ansCount >= 3 && <option value="answer3">Answer 3</option> }
                    { ansCount >= 4 && <option value="answer4">Answer 4</option> }
                    { ansCount >= 5 && <option value="answer5">Answer 5</option> }
                    { ansCount === 6 && <option value="answer6">Answer 6</option> }

                </select>
            </div>

            <div className="flex flex-col w-full h-[50%] justify-center items-center">
                <SingleAnswers
                    update={props.update}
                    questionData={props.questionData}
                    setQuestionData={props.setQuestionData}

                    quizData={props.quizData}
                    setQuizData={props.quizData}
                    handleQuizDataChange={props.handleQuizDataChange}

                    a1Val={props.a1Val}
                    a2Val={props.a2Val}
                    a3Val={props.a3Val}
                    a4Val={props.a4Val}
                    a5Val={props.a5Val}
                    a6Val={props.a6Val}
                />  
            </div>

        </div>
    )
}
