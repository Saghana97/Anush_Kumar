import React from 'react'

function Input(props){
    return (
        <input className={props.class} type="text" placeholder={props.placeHolder} onChange={props.method}/>
    )
}

export default Input