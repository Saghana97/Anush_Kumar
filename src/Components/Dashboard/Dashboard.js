import React,{useState} from 'react'
import DashboardHeader from './DashboardHeader'
import DashboardIntro from './DashboardIntro'
import DashboardOutro from './DashboardOutro'
import ExpenseTracker from './Expence/ExpenseTracker'
import ModalExpense from './ModalExpense'
import SettleExpense from './SettleExpense'


function Dashboard(){
    const [view, setView] = useState([
        {
            dash:"dash-intro",
            visibility: true
        },
        {
            dash:"dash-outro",
            visibility: false
        },
        {
            dash:"dash-exp",
            visibility: false
        },
        {
            modal:false
        },
        {
            settle:false
        }
    ]);
    function handleView(newView){
        setView(newView)
    }
    return (
        <>
            <div className="dashboard-content">
                <DashboardHeader method={handleView} viewType={view}/>
                <DashboardIntro viewDash={view[0]}/>
                <DashboardOutro viewDash={view[1]}/>
                <ExpenseTracker  viewDash={view[2]}/>
            </div>
            <ModalExpense method={handleView} viewModal={view}/>
            <SettleExpense method={handleView} viewModal={view}/>
        </>
    )
}

export default Dashboard