import React from 'react'
import SummaryOwnContent from './SummaryOwnContent'
import ProfileImg1 from '../../../../Components/profile1.jpg'

function SummaryOwn(){
    return(
        <div className="you-owe">
            <SummaryOwnContent aClass="sumary-own-inside-p" amount="$33.50" name="Calvin Harris" url={ProfileImg1}/>
        </div>
    )
}

export default SummaryOwn
