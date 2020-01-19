import React from 'react'
import ExpTrackerBlock from './ExpTrackerBlock';
import Summary from "../Summary/Summary";


function DashboardExpenseTracker(props){
    var diffAmount;
    if(props.method()>props.method2()){
        diffAmount = props.method()-props.method2();
    }
    else{
        diffAmount = props.method2()-props.method();
    }
    return(
        <div>
            <div className="dashboard-exp-track-header">
                <ExpTrackerBlock class="dashboard-exp-track-content" pClass={diffAmount>=0?"exp-track-p":"exp-track-p-2"} expType="total balance" amount={diffAmount} />
                <ExpTrackerBlock class="dashboard-exp-track-content-center" pClass="exp-track-p-2" expType="you owe" amount={props.method2()} />
                <ExpTrackerBlock class="dashboard-exp-track-content" pClass="exp-track-p" expType="you are owed" amount={props.method()} />
            </div>
            <Summary userExpenses={props.expenses} userExpYouOwe={props.expensesYouOwe}/>
        </div>
    )
}

export default DashboardExpenseTracker