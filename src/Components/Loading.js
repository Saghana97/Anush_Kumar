import React from 'react'
import '../index.scss'

function Loading(){
    return (
        <div className="loading">
            <h1>Splitwise</h1>
            <div className="loading-dots">
                <p>.</p>
                <p>.</p>
                <p>.</p>
            </div>
            
        </div>
    )
}

export default Loading