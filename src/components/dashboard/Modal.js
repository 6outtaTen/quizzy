import React, {useState} from 'react'
import { CSSTransition } from 'react-transition-group'

export default function Modal({closeModal}) {

    const [inProp, setInProp] = useState(true)



    return (
        <div className="w-full h-full fixed flex justify-center items-center" name="modal-bg">
            <CSSTransition 
                in={inProp}
                timeout={200}
                classNames="fade"
                unmountOnExit
                onEnter={() => setInProp(false)}
                onExited={() => setInProp(true)}
                >
                <div className="w-[500px] h-[500px] bg-[#0e0f0c] flex flex-col rounded-xl" name="modal-container">
                    
                    <div className="flex justify-end text-white mr-[20px]">
                        <button className="text-[25px]" onClick={() => closeModal(false), () => setInProp(false)}> X </button>
                    </div>

                    <div className="text-white text-center text-4xl inline-block" name="title">
                        <h1>Create a quiz</h1>
                    </div>
                    <div className="text-white" name="body">
                        <div className="flex items-center justify-between">
                            <p className="ml-[50px] mt-[50px]">Quiz title</p>
                            <input 
                                className="bg-transparent border-b-2 outline-none border-b-special-pink mt-[43px] mr-[80px]"
                                placeholder="Enter the quiz title"
                                required
                            />
                        </div>
                        <div className="flex">
                            <p className="ml-[50px] mt-[50px]">Quiz description</p>
                            <textarea
                                className="resize-none ml-[73.5px] mt-[30px] bg-transparent border-2 border-special-pink outline-none w-[40%]"
                                placeholder="Enter the quiz description"
                                required 
                            />
                        </div>
                        
                        
                    </div>
                    <div className="text-white flex-[20%] justify-center items-center" name="footer">
                        <button className="w-[150px] h-[45px] m-[10px] b-none bg-special-pink rounded-xl ml-[17%] mt-[100px]" onClick={() => closeModal(false)}>Cancel</button>
                        <button className="w-[150px] h-[45px] m-[10px] b-none bg-special-pink rounded-xl">Continue</button>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}
