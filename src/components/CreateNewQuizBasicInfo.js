import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreateNewQuizBasicInfo() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState(
    {
      title: "",
      description: ""
    }
  )

  function handleSubmit(e) {
    
    let quizTitle = localStorage.getItem("title") ? JSON.parse(localStorage.getItem("title")) : []
    let quizDescription = localStorage.getItem("description") ? JSON.parse(localStorage.getItem("description")) : []

    e.preventDefault()

    quizTitle.push(formData.title)
    quizDescription.push(formData.description)

    localStorage.setItem("title", JSON.stringify(quizTitle))
    localStorage.setItem("description", JSON.stringify(quizDescription))

    navigate("/create-new-quiz/add-questions")
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


  return (
    <div className="quiz-info-rect">
    
      <div className="quiz-info-title">Basic Info</div>
      <div className="new-quiz-title-label">Quiz Title</div>
      <div className="new-quiz-desc-label">Quiz Description</div>

      <form onSubmit={handleSubmit}>
        <input
          className="new-quiz-title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter your quiz title here"
          required
        />

        <textarea
          className="new-quiz-description"
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter a short description of your quiz here"
        
        />

        <button className="proceed-btn">Next</button>

      </form>
    </div>
  )
}
