import React from 'react'

function Input(props){
    return(
        <input ref={props.inputRef} name={props.name} type={props.type} className={props.class} placeholder={props.text} onInput={props.method}/>
    );
}

export default Input