import React from 'react'

function InputWarp(props){
    return(
        <div>
            <p>{props.name}</p>
            <input className={props.class} type={props.type} />
        </div>
    )
}

export default InputWarp