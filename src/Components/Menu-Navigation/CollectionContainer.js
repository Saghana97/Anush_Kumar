import React from 'react'

function CollectionContainer(props){
    return (
        <div className="collection">
            <div className="collection-top-wrap">
                <p>{props.name}</p>
                <div className="collection-margin"><a className="collection-a" href="">+ add</a></div>
            </div>
            <div className="collection-list">{props.description}</div>
        </div>
    );
}

export default CollectionContainer