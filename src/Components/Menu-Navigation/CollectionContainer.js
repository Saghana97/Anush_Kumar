import React from 'react'

function CollectionContainer(props){
    var description;
    if(props.description.length == 0){
        description = <li className="li-collection-desc">You do not have any {props.tag} yet.</li>
    }
    else{
        var arr= [];
        props.description.map(item=>{
            if(arr.indexOf(item.name) === -1){
                arr.push(item.name)
            }    
        })
        props.description2.map(item=>{
            if(arr.indexOf(item.name) === -1){
                arr.push(item.name)
            }    
        })
        description = arr.map(item=>{
            return <li className="li-collection"><i className="fa fa-user"></i> {item}</li>
        })
    }
    
    return (
        <div className="collection">
            <div className="collection-top-wrap">
                <p>{props.name}</p>
                <div className="collection-margin"><a className="collection-a" href="">+ add</a></div>
            </div>
            <div className="collection-list">
                <ul className="ul-collection">
                    {description}
                </ul>
            </div>
        </div>
    );
}

export default CollectionContainer