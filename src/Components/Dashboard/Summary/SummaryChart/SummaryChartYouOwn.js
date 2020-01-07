import React from 'react'

function SummaryChartYouOwn(props){
    return(
        <div className={props.aClass}>
            <a href="#" className="chart-a-size">{props.name}</a>
            <a href="#" className="chart-a-small">{props.amount}</a>
        </div>
    )
}

export default SummaryChartYouOwn