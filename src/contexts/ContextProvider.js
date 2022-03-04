import { createContext, useContext, useState } from "react";

const QuizContext = createContext();
const QuestionContext = createContext();
const QuizChangeContext = createContext();
const ChangeContext = createContext();
const SetBasicInfo = createContext();
const UpdateQuestion = createContext();

export function useUpdate() {
    return useContext(UpdateQuestion)
}

export function useBasicInfo() {
    return useContext(SetBasicInfo);
}

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

    

    function handleQuizDataChange(questionData, questionCount) {
        setQuizData(prevQuizData => {
            return {
                ...prevQuizData,
                questions: [...prevQuizData.questions, questionData]
            }
        })
    }

    function updateQuestion(index, newData) {
        const arr = [...quizData.questions]
        arr[index] = newData
        
        console.log("Updating: ", arr[index])

        setQuizData(prevQuizData => {
            return {
                ...prevQuizData,
                questions: arr
            }
        })

        // setQuestionData(arr)

        console.log("After update: ", quizData.questions)
    }

    function setQuizBasicInfo(title, description) {
        setQuizData(prevQuizData => {
            return {
                ...prevQuizData,
                title: title,
                description: description,
            }

        })
    }


    function handleChange(event) {
        const {name, value} = event.target
        
        setQuestionData(prevQuestionData => {
            return {
                ...prevQuestionData,
                [name]: value
            }
        })

        console.log("New question data: ", questionData);

        // handleQuizDataChange(questionData)
    }

    return (
        <QuizContext.Provider value={quizData}>
            <QuestionContext.Provider value={questionData}>
                <QuizChangeContext.Provider value={handleQuizDataChange}>
                    <ChangeContext.Provider value={handleChange}>
                        <SetBasicInfo.Provider value={setQuizBasicInfo}>
                            <UpdateQuestion.Provider value={updateQuestion}>
                                {children}
                            </UpdateQuestion.Provider>
                        </SetBasicInfo.Provider>
                    </ChangeContext.Provider>
                </QuizChangeContext.Provider>
            </QuestionContext.Provider>
        </QuizContext.Provider>
    )
}