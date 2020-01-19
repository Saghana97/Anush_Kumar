import React from 'react'
import ManImg from '../../man.png'
import SummaryChartYouOwn from './SummaryChartYouOwn'

function SummaryChart(props){
    const summaryChartOwn = props.userData.map(item=>{
        return <SummaryChartYouOwn aClass="chart-you-are-owe-inside"  amount={(item.amount)/2} name={item.name}/>
    })
    const summaryChartYouOwn = props.userDataYou.map(items=>{
        return <SummaryChartYouOwn aClass="chart-you-owe-inside"  amount={(items.amount)/2} name={items.name}/>
    })
    return(
        <div style={{display:props.show.chart?"flex":"none"}} className="summary-chart">
            <div className="chart-you-owe">
                {summaryChartYouOwn}
            </div>
            <div className="image-wrapper">
                <img className="man-img-charts" src={ManImg} alt="man standing alone"/>
            </div>
            <div className="chart-you-owe">
                {summaryChartOwn}
            </div>
        </div>
    )
}

export default SummaryChart