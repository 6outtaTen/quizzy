import React, {useState} from 'react'

export default function SearchBar() {

    const [focus, setFocus] = useState(false)

    function handleFocus(e) {
        e.preventDefault()
        setFocus(prevFocus => !prevFocus)
    }

    return (
        <div>
            <div className="container">
                <input type="text" className={this.state.focus && 'focused'} placeholder="Search"/>
                <button onClick={this.focus} id="search-button" className={
                    this.state.focus && 'active'}>🔍</button>
            </div>
        </div>
    )
}
