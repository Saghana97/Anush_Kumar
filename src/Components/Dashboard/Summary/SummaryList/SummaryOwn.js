import React from 'react'
import SummaryOwnContent from './SummaryOwnContent'
import ProfileImg1 from '../../../../Components/profile1.jpg'

function SummaryOwn(props){
    const summaryYouOwn = props.userdata.map(item=>{
        return <SummaryOwnContent aClass="sumary-own-inside-p" url={ProfileImg1} amount={(item.amount)/2} name={item.name}/>
    })
    return(
        <div className="you-owe">
            {summaryYouOwn}
        </div>
    )
}

export default SummaryOwn
