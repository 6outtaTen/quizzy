import React, {useState} from 'react'
import Navbar from './Navbar'

export default function QuizQuestionsPreview(props) {


    const [formData, setFormData] =  useState(
        {
            answer: ""
        }
    )


    function handleChange(event) {
        const {value, name} = event.target

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]:  value
            }
        })
    }

    
    return (
        <div>
            <Navbar />
            <div className= "question-card">
                <div className="question-preview">{props.title}</div>

                <form>
                    <input
                        className="answer1-radio"
                        type="radio"
                        name="answer"
                        id="answer1"
                        value="answer1"
                        checked={formData.answer === "answer1"}
                        onChange={handleChange}
                    />
                    <label className="label-for-answer1" htmlFor="answer1">{props.answer1}</label>
                    <br/>

                    <input
                        className="answer2-radio"
                        type="radio"
                        name="answer"
                        id="answer2"
                        value="answer2"
                        checked={formData.answer === "answer2"}
                        onChange={handleChange}
                        content="AAAAAAAA"
                    />
                    <label className="label-for-answer2" htmlFor="answer2">{props.answer2}</label>
                    <br/>

                    <input
                        className="answer3-radio"
                        type="radio"
                        name="answer"
                        id="answer3"
                        value="answer3"
                        checked={formData.answer === "answer3"}
                        onChange={handleChange}
                    />
                    <label className="label-for-answer3" htmlFor="answer3">{props.answer3}</label>
                    <br/>

                    <input
                        className="answer4-radio"
                        type="radio"
                        name="answer"
                        id="answer4"
                        value="answer4"
                        checked={formData.answer === "answer4"}
                        onChange={handleChange}
                    />
                    <label className="label-for-answer4" htmlFor="answer4">{props.answer4}</label>
                </form>
            </div>
        </div>

        
  )
}
