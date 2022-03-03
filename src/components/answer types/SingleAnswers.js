import React from 'react'
import SingleAnswerView from './SingleAnswerView'

export default function SingleAnswers(props) {

    return (
        <>
            <section className="flex flex-col w-[80%] overflow-x-hidden overflow-y-visible gap-2 flex-nowrap items-center h-[300px]">
                <SingleAnswerView 
                    placeholder="Answer 1" 
                    name="answer1" 
                />
                <SingleAnswerView 
                    placeholder="Answer 2" 
                    name="answer2" 
                />
                <SingleAnswerView 
                    placeholder="Answer 3 (optional)"
                    name="answer3"
                />
                <SingleAnswerView 
                    placeholder="Answer 4 (optional)"
                    name="answer4"   
                />
                <SingleAnswerView
                    placeholder="Answer 5 (optional)"
                    name="answer5" 
                />
                <SingleAnswerView 
                    placeholder="Answer 6 (optional)"
                    name="answer6"
                    />
            </section> 
        </>
    )
}
