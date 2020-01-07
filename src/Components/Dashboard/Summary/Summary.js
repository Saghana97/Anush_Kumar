import React,{useState} from 'react'
import SummaryHeader from './SummaryHeader'
import SummaryList from './SummaryList/SummaryList'
import SummaryChart from './SummaryChart/SummaryChart'


function Summary(){
    const [toggle,setToggle] = useState([{
        list:true,
        chart:false
    }])

    function handeToggle(newToggle){
        setToggle(newToggle)
    }
    return(
        <div className="summary">
            <SummaryHeader viewToggle={toggle} handTog={handeToggle}/>
            <SummaryList show={toggle[0]}/>
            <SummaryChart show={toggle[0]}/>
        </div>
    )
}

export default Summary