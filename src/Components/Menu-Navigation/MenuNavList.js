import React from 'react'


function MenuNavList(props){
    return(
        <li className={props.class}><img className={props.imgClass} src={props.url} /><a className="text-left-nav" href="">{props.name}</a></li>
    )
}

export default MenuNavList