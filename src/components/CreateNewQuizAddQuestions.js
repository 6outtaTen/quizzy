import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import QuizQuestionsPreview from './QuizQuestionsPreview'
import {
    getFirestore, collection, getDocs, addDoc
} from 'firebase/firestore'
import { colRef } from '../firebase'

export default function CreateNewQuizAddQuestions() { 

    const quizTitle = JSON.parse(localStorage.getItem("title"))[0]
    const quizDescription = JSON.parse(localStorage.getItem("description"))[0]

    const navigate = useNavigate()

    const [quizData, setQuizData] = useState(
        {
            title: quizTitle,
            description: quizDescription,
            questions: []
        }
    )


    const [formData, setFormData] = useState(
        {
            question: "",
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            correctAnswer: ""
        }
    )

    let elements = ""
    
    function goBackToBasicInfo(e) {
        e.preventDefault()
    }

    function handleQuizDataChange(questionData) {
        setQuizData(prevQuizData => {
            return {
                ...prevQuizData,
                questions: [...prevQuizData.questions, questionData]
            }
        })
    }

    
    
    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function saveQuiz(e) {
        e.preventDefault()
        
        // Adding to database
        addDoc(colRef, {
            quizzes: quizData 
        })

    }

    function handleSubmit(e) {
        e.preventDefault()
        handleQuizDataChange(formData)
        console.log(quizData)
    }

    elements = quizData.questions.map(question => {
        console.log(quizData.questions)
        return (
            <QuizQuestionsPreview
                title={question.question}
                answer1={question.answer1}
                answer2={question.answer2}
                answer3={question.answer3}
                answer4={question.answer4}
            />
        )
    })

    return (
        <div>
            <button className="navigate-to-basic-info" onClick={goBackToBasicInfo} >Go back to basic info</button>
            <button className="save-quiz" onClick={saveQuiz} >Save Quiz</button>
            <button className="discard-quiz">Discard Quiz</button>

            <div className="add-questions-rect">
                <div className="add-questions-title">Add a question</div>

                <div className="add-question-text">Question</div>
                <div className="answer1-text">Answer 1</div>
                <div className="answer2-text">Answer 2</div>
                <div className="answer3-text">Answer 3</div>
                <div className="answer4-text">Answer 4</div>
                <div className="correct-answer-text">Correct Answer</div>

                <form onSubmit={handleSubmit}>

                    <input
                        className="question"
                        type="text"
                        name="question"
                        value={formData.question}
                        onChange={handleChange}
                        placeholder="Enter the question title here"
                        required
                    />

                    <input
                        className="answer1"
                        type="text"
                        name="answer1"
                        value={formData.answer1}
                        onChange={handleChange}
                        placeholder="Enter answer 1 here"
                        required
                    />

                    <input
                        className="answer2"
                        type="text"
                        name="answer2"
                        value={formData.answer2}
                        onChange={handleChange}
                        placeholder="Enter answer 2 here"
                        required
                    />

                    <input
                        className="answer3"
                        type="text"
                        name="answer3"
                        value={formData.answer3}
                        onChange={handleChange}
                        placeholder="Enter answer 3 here"
                        required
                    />

                    <input
                        className="answer4"
                        type="text"
                        name="answer4"
                        value={formData.answer4}
                        onChange={handleChange}
                        placeholder="Enter answer 4 here"
                        required
                    />

                    <select
                        className="correct-answer"
                        id="correctAnswer"
                        value={formData.correctAnswer}
                        name="correctAnswer"
                        onChange={handleChange}
                        required
                    >
                        <option value="">Choose the correct answer</option>
                        <option value="answer1">Answer1</option>
                        <option value="answer2">Answer2</option>
                        <option value="answer3">Answer3</option>
                        <option value="answer4">Answer4</option>
                    </select>

                    <button className="add-question-btn">Add question</button>
                </form>

                <div className="quiz-preview-rect">
                    <div className="quiz-preview-title">Quiz Preview</div>
                    <section className="questions-display-preview">
                        {elements}
                    </section>
                </div>
            </div>    
        </div>
    )
}
