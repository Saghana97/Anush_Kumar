import React from 'react'
import ManImg from '../../man.png'
import SummaryChartYouOwn from './SummaryChartYouOwn'

function SummaryChart(props){
    return(
        <div style={{display:props.show.chart?"flex":"none"}} className="summary-chart">
            <div className="chart-you-owe">
                <SummaryChartYouOwn aClass="chart-you-owe-inside" name="Calvin harris" amount="$33.00" />
            </div>
            <div className="image-wrapper">
                <img className="man-img-charts" src={ManImg} alt="man standing alone"/>
            </div>
            <div className="chart-you-owe">
                <SummaryChartYouOwn aClass="chart-you-are-owe-inside" name="Travis Scott" amount="$61.50" />
                <SummaryChartYouOwn aClass="chart-you-are-owe-inside" name="Marshmellow" amount="$23.00" />
            </div>
        </div>
    )
}

export default SummaryChart