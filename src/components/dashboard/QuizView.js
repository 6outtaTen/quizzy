import React from 'react'

export default function QuizView(props) {

    return (
        <div className="bg-special-black rounded-2xl w-[500px] cursor-pointer">
            <div className="flex items-center justify-between">
                <div className="text-white ml-[15px]">{props.title}</div>
                <img className="w-[30px] mr-[10px] mt-[5px]" src={props.img}/>
            </div>
            
            <div className="text-special-gray ml-[15px]">{props.description}</div>
        </div>
    )
}
