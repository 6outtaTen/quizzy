import React, {useState, forwardRef, useImperativeHandle, useRef} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Navbar from "./Navbar";
import Browse from "./dashboard/Browse";
import MyQuizzes from "./dashboard/MyQuizzes";
import { motion, AnimatePresence } from "framer-motion"
import { useBasicInfo, useQuiz } from "../contexts/ContextProvider";

export default function Dashboard() {

  const navigate = useNavigate()
  const { currentUser } = useAuth();
  const modalRef = useRef()

  const quizData = useQuiz();
  const setQuizData = useBasicInfo();

  const [formData, setFormData] = useState(
    {
      title: "",
      description: ""
    }
  )
  
  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    
    if (formData.title !== "" && formData.description !== "") {
      let quizTitle = []
      let quizDescription = [] 

      quizTitle.push(formData.title)
      quizDescription.push(formData.description)

      localStorage.setItem("title", JSON.stringify(quizTitle))
      localStorage.setItem("description", JSON.stringify(quizDescription)) 

      setQuizData(formData.title, formData.description);
      
      navigate("/create-new-quiz")

    } else {
      alert("Please fill in the fields")
    }
  }

  
  return (
    <> 
      <Modal ref={modalRef}>

      <div className="text-white text-4xl flex justify-center" name="title">
        <h1>Create a quiz</h1>
      </div>
      <div className="text-white" name="body">
        <div className="flex items-center justify-between">
          <p className="ml-[50px] mt-[10%]">Quiz title</p>
          <input 
            className="bg-transparent border-b-2 outline-none border-b-special-pink mt-[43px] mr-[80px]"
            placeholder="Enter the quiz title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
          <div className="flex">
            <p className="ml-[50px] mt-[50px]">Quiz description</p>
            <textarea
              className="resize-none lg:ml-[73.5px] ml-[20px] mt-[30px] bg-transparent border-2 border-special-pink outline-none w-[40%]"
              placeholder="Enter the quiz description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required 
              />
          </div>
        </div>
        <div className="text-white flex justify-center items-center" name="footer">
          <button onClick={handleSubmit} className="w-[150px] lg:h-[45px] h-[40px] lg:mt-[10%] mt-[5%] b-none bg-special-pink rounded-xl hover:bg-special-pink-hover">Continue</button>
        </div>

    </Modal>

    <Navbar />
    <div name="container" className="h-[calc(100%-80px)] flex">

      <div className="w-[50%] justify-center items-center flex border-r-[6px] border-r-special-black">
        <Browse />
      </div>
      <div className="w-[50%] justify-between flex flex-col">
        <div className="h-[50%] border-b-[6px] border-b-special-black flex flex-col justify-center items-center">
          <div className="lg:text-[50px] text-[36px] mb-[20px] text-center">My Quizzes</div>
          <MyQuizzes />
        </div>

        <div className="h-[50%] flex flex-col items-center justify-center">
          <div className="lg:text-[50px] text-[36px] mb-[100px]">Create a quiz</div>
          <button onClick={() => modalRef.current.open()} className="flex text-white text-center min-w-[50px] min-h-[50px] justify-center text-[50px] rounded-2xl bg-special-black hover:bg-special-hover w-[18%] h-[18%]">+</button>
        </div>          
      </div>
    </div>
    </>
  );
}

const Modal = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open: () => setOpen(true),
      close: () => setOpen(false)
    };
  });

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3
              }
            }}
            exit={{
              opacity: 0,
              transition: {
                delay: 0.3
              }
            }}
            onClick={() => setOpen(false)}
            className="w-full h-full fixed justify-center items-center" name="modal-bg"
          />
          <motion.div
            initial={{
              scale: 0
            }}
            animate={{
              scale: 1,
              transition: {
                duration: 0.3
              }
            }}
            exit={{
              scale: 0,
              transition: {
                delay: 0.3
              }
            }}
            className="lg:w-[500px] lg:h-[350px] bg-[#0e0f0c] fixed top-[25%] w-[400px] lg:left-[38%] left-[10%] flex flex-col rounded-xl"
          >
            <motion.div
              className=""
              initial={{
                x: 100,
                opacity: 0
              }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.3
                }
              }}
              exit={{
                x: 100,
                opacity: 0,
                transition: {
                  duration: 0.3
                }
              }}
            ><button className="text-[25px]" onclick={() => setOpen(false)}> X </button>
              {props.children}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});