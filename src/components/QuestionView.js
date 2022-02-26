import React from 'react'

export default function QuestionView() {
    return (
        <>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'></link>  
            <div className="bg-special-black w-[80%] h-[200px] rounded-2xl">
                <div name="card-header" className="flex text-white items-center justify-between border-b-2 border-special-gray h-[50px]">
                    <span name="question-count" className="font-bold ml-[15px] mt-[5px]">1</span>
                    <i id="trash" className="fa fa-trash white-color"></i>
                </div>
            </div>
        </>
    )
}
