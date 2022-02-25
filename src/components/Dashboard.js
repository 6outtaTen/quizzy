import React, {useState} from "react";
import { useAuth } from "../contexts/AuthContext";
import Navbar from "./Navbar";
import Browse from "./dashboard/Browse";
import MyQuizzes from "./dashboard/MyQuizzes";
import CreateQuiz from "./dashboard/CreateQuiz";
import Modal from "./dashboard/Modal";

export default function Dashboard(props) {
  const { currentUser } = useAuth();

  const [openModal, setOpenModal] = useState(false)
  
  return (
    <> 
      { openModal && <Modal closeModal={setOpenModal} />}
      <Navbar />
      <div name="container" className="h-[calc(100%-80px)] flex">

        <div className="w-[50%] justify-center items-center flex border-r-[6px] border-r-special-black">
          <Browse />
        </div>
        <div className="w-[50%] justify-between flex flex-col">
          <div className="h-[50%] border-b-[6px] border-b-special-black flex justify-center items-center">
            <span>QUIZZESSS</span>
          </div>

          <div className="h-[50%] flex flex-col items-center justify-center">
            <button onClick={() => {setOpenModal(true)}} className="flex text-white text-center min-w-[50px] min-h-[50px] justify-center text-[50px] rounded-2xl bg-special-black w-[18%] h-[18%]">+</button>
          </div>          
        </div>
      </div>
    </>
  );
}