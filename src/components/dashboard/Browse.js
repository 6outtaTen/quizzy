import React, {useState} from 'react'

export default function Browse() {

    const [resultsAppearing, setResultsAppearing] = useState(false)

    return (
        <div>
            <div className="browse-rect">
                <input 
                    className="browse-input"
                    name="browse"
                    placeholder="                   Search for quizzes"
                />
        
            { !resultsAppearing && <div className="res-hint">Results will appear here</div> }

            </div>
        </div>
    )
}
