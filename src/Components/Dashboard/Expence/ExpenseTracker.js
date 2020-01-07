import React from 'react'
import ExpTrackerBlock from './ExpTrackerBlock';
import Summary from "../Summary/Summary";


function DashboardExpenseTracker(props){
    return(
        <div style={{display: props.viewDash.visibility?"block":"none"}} >
            <div className="dashboard-exp-track-header">
                <ExpTrackerBlock class="dashboard-exp-track-content" pClass="exp-track-p" expType="total balance" amount="+ $28.50" />
                <ExpTrackerBlock class="dashboard-exp-track-content-center" pClass="exp-track-p-2" expType="you owe" amount="- $33.00" />
                <ExpTrackerBlock class="dashboard-exp-track-content" pClass="exp-track-p" expType="you are owed" amount="+ $61.50" />
            </div>
            <Summary />
        </div>
    )
}

export default DashboardExpenseTracker