import React from 'react'
import SingleAnswerView from './SingleAnswerView'

export default function SingleAnswers() {

    return (
        <>
            <section className="flex flex-col w-[80%] overflow-x-hidden overflow-y-visible gap-2 flex-nowrap items-center h-[300px]">
                <SingleAnswerView />
                <SingleAnswerView />
                <SingleAnswerView />
                <SingleAnswerView />
                <SingleAnswerView />
                <SingleAnswerView />
            </section> 
        </>
    )
}
