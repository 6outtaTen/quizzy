import React from 'react'
import picture from '../../images/profile-picture.png'

export default function QuizView(props) {

    const sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut "

    return (
        <div className="card">
            <div className="card-rect">
                <div className="card-title">{props.title}</div>
                <img className="card-image" src={props.img}/>
                <div className="card-description">{props.description}</div>
            </div>              
        </div>
    )
}
