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
        <div className="my-quizzes">
            <div className="my-quizzes-title">My quizzes</div>

            <section className="cards-list">
                {cards}
            </section> 
        </div>
    )
}
