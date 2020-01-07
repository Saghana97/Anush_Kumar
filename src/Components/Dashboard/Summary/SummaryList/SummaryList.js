import React from 'react'
import SummaryOwn from './SummaryOwn'
import SummaryYouOwn from './SummaryYouOwn'

function SummaryList(props){
    return(
        <div style={{display:props.show.list?"flex":"none"}} className="summary-details">
            <SummaryOwn />
            <div className="border"></div>
            <SummaryYouOwn />
        </div>
    )
}


export default SummaryList