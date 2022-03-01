import React from 'react'
import SingleAnswerView from './SingleAnswerView'

export default function SingleAnswers(props) {

    return (
        <>
            <section className="flex flex-col w-[80%] overflow-x-hidden overflow-y-visible gap-2 flex-nowrap items-center h-[300px]">
                <SingleAnswerView 
                    placeholder="Answer 1" 
                    name="answer1" 
                    update={props.update} 
                    value={props.a1Val} 

                    questionData={props.questionData}
                    setQuestionData={props.setQuestionData}

                    quizData={props.quizData}
                    setQuizData={props.quizData}
                    handleQuizDataChange={props.handleQuizDataChange}
                />
                <SingleAnswerView placeholder="Answer 2" 
                    name="answer2" 
                    value={props.a2Val}
                    
                    questionData={props.questionData}
                    setQuestionData={props.setQuestionData}

                    quizData={props.quizData}
                    setQuizData={props.quizData}
                    handleQuizDataChange={props.handleQuizDataChange}
                />
                <SingleAnswerView 
                    placeholder="Answer 3 (optional)"
                    name="answer3" update={props.update}
                    value={props.a3Val}
                    
                    questionData={props.questionData}
                    setQuestionData={props.setQuestionData}

                    quizData={props.quizData}
                    setQuizData={props.quizData}
                    handleQuizDataChange={props.handleQuizDataChange}
                    />
                <SingleAnswerView 
                    placeholder="Answer 4 (optional)"
                    name="answer4"
                    update={props.update}
                    value={props.a4Val}
                    
                    questionData={props.questionData}
                    setQuestionData={props.setQuestionData}

                    quizData={props.quizData}
                    setQuizData={props.quizData}
                    handleQuizDataChange={props.handleQuizDataChange}
                    />
                <SingleAnswerView
                    placeholder="Answer 5 (optional)"
                    name="answer5" update={props.update}
                    value={props.a5Val}
                    
                    questionData={props.questionData}
                    setQuestionData={props.setQuestionData}

                    quizData={props.quizData}
                    setQuizData={props.quizData}
                    handleQuizDataChange={props.handleQuizDataChange}
   
                />
                <SingleAnswerView 
                    placeholder="Answer 6 (optional)"
                    name="answer6"
                    update={props.update}
                    value={props.a6Val}

                    questionData={props.questionData}
                    setQuestionData={props.setQuestionData}

                    quizData={props.quizData}
                    setQuizData={props.quizData}
                    handleQuizDataChange={props.handleQuizDataChange}
                    />
            </section> 
        </>
    )
}
