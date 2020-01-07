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
    function CustomRender(props){
        const dashCurrent = props.viewType.map(item => {
            if(item.dash == "dash-intro" && item.visibility){
                return <DashboardIntro />
            }
            if(item.dash == "dash-outro" && item.visibility){
                return  <DashboardOutro />
            }
            if(item.dash == "dash-exp" && item.visibility){
                return <ExpenseTracker />
            }
        })
        return dashCurrent
    }
    return (
        <>
            <div className="dashboard-content">
                <DashboardHeader method={handleView} viewType={view}/>
                <CustomRender viewType={view}/>
            </div>
            <ModalExpense method={handleView} viewModal={view}/>
            <SettleExpense method={handleView} viewModal={view}/>
        </>
    )
}

export default Dashboard