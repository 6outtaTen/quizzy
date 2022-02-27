import React from 'react'
import QuizView from './QuizView'
import data from './data'

export default function MyQuizzes() {
    
    const cards = data.map(item => {
        return (
            <QuizView 
                title={item.title}
                img={item.photo}
                description={item.description}
            />
        )
    })


    return (
        <>
            <section className="flex flex-col overflow-x-hidden overflow-y-visible gap-2 flex-nowrap items-center h-[300px]">
                {cards}
            </section> 
        </>
    )
}
