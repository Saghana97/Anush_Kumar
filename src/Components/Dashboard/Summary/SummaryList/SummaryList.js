import React from 'react'
import SummaryOwn from './SummaryOwn'
import SummaryYouOwn from './SummaryYouOwn'

function SummaryList(props){
    return(
        <div style={{display:props.show.list?"flex":"none"}} className="summary-details">
            <SummaryOwn userdata={props.userDataYou}/>
            <div className="border"></div>
            <SummaryYouOwn userdata={props.userData}/>
        </div>
    )
}


export default SummaryList