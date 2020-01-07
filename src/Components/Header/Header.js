import React from 'react'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'

function Header(){
    return(
        <div className="top-nav">
            <div className="margin-top-nav">
                <HeaderLeft />
                <HeaderRight />
            </div>
        </div>
    )
}

export default Header