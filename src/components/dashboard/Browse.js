import React, {useState} from 'react'

export default function Browse() {

    const [resultsAppearing, setResultsAppearing] = useState(false)

    return (
        <div className="flex bg: bg-special-black rounded- h-[640px] w-[550px] mt-[35px] justify-center">
            <input 
                className="h-[16px] w-[55%] mt-[30px] bg-transparent border-none text-white border-b-[55%] border-special-pink"
                name="browse"
                placeholder="                   Search for quizzes"
            />
        
            {/* { !resultsAppearing && <div className="res-hint">Results will appear here</div> } */}

        </div>
    )
}
