import React from 'react'



export default function SingleAnswerView(props) {
    return (
        <div className="w-full">
            <textarea
                className="w-[80%] h-[30px] text-center text-white bg-transparent border-2 outline-none resize-none border-special-pink"
                placeholder={props.placeholder}
                name={props.name}
                onChange={props.update}
                value={props.value}                    
            >  
            </textarea>
        </div>

    )
}

