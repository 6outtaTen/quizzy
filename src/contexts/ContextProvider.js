import { createContext, useContext, useState } from "react";

const QuizContext = createContext();
const QuestionContext = createContext();
const QuizChangeContext = createContext();
const ChangeContext = createContext();


export function useQuiz() {
    return useContext(QuizContext);
}

export function useQuestions() {
    return useContext(QuestionContext);
}

export function useQuizChange() {
    return useContext(QuizChangeContext);
}

export function useChange() {
    return useContext(ChangeContext);
}

export function ContextProvider({ children }) {
    const [quizData, setQuizData] = useState(
        {
            title: "",
            description: "",
            questions: []
        }
    )
    
    const [questionData, setQuestionData] = useState(
        {
            question: "",
            answerType: "",
            correctAnswer: "",
            answer1: "",
            answer2: "",
            answer3: "",
            answer4: "",
            answer5: "",
            answer6: ""
        }
    )

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
        
        console.log("Something changed")

        setQuestionData(prevQuestionData => {
            return {
                [name]: value
            }
        })

        handleQuizDataChange(questionData)
    }

    return (
        <QuizContext.Provider value={quizData}>
            <QuestionContext.Provider value={questionData}>
                <QuizChangeContext.Provider value={handleQuizDataChange}>
                    <ChangeContext.Provider value={handleChange}>
                        {children}
                    </ChangeContext.Provider>
                </QuizChangeContext.Provider>
            </QuestionContext.Provider>
        </QuizContext.Provider>
    )
}