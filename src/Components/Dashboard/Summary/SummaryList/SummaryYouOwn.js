import React from "react";
import SummaryOwnContent from './SummaryOwnContent'
import ProfileImg2 from '../../../profile1.jpg'
import ProfileImg3 from '../../../profile3.jpeg'

function SummaryYouOwn(props){
    const summaryOwn = props.userdata.map(item=>{
        return <SummaryOwnContent aClass="sumary-you-own-inside-p" url={ProfileImg3} amount={(item.amount)/2} name={item.name}/>
    })
    return (
        <div className="you-are-owe">
            {summaryOwn}
        </div>
    )
}

export default SummaryYouOwn