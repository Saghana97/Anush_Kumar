import React from 'react'
import openSocket from 'socket.io-client';

function MessageHead(props) {
    const socket = openSocket('http://localhost:5000');
    function setName(){
        props.onclick()
        props.setname(props.name,props.id)
        socket.emit('setUsername', {key:sessionStorage.getItem('key'),id:props.id});
    }
    
    return (
        <div className="message-head" onClick={setName}>
            <img className="message-head-image" src={props.img} alt="chat profile"/>
            <div>
                <p className="message-head-name">{props.name}</p>
            </div>
        </div>
    )
}

export default MessageHead