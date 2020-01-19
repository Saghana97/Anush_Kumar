import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import DashboardHeader from './DashboardHeader'
import DashboardIntro from './DashboardIntro'
import DashboardOutro from './DashboardOutro'
import ExpenseTracker from './Expence/ExpenseTracker'
import ModalExpense from './ModalExpense'
import SettleExpense from './SettleExpense'
import MenuNavActivity from '../Menu-Navigation/MenuNavActivity'
import Promotions from '../Promotions/Promotions'


function Dashboard(props){

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
    ])
    function handleDashVisibility(){
        const currentViewModal = view.map((item) =>{
            if(item.visibility === true){
                item.visibility = !item.visibility
            }
            if(item.dash === "dash-exp"){
                item.visibility = !item.visibility
            }
            item.modal = false
            return item
        })
        handleView(currentViewModal)
    }
    function handleView(newView){
        setView(newView)
    }
    //
    const[expenses,setExpenses] = useState([{
        name:"",
        description: "",
        amount: "",
        time:""
    }]);
    const[expensesYouOwe,setExpensesYouOwe] = useState([{
        name:"",
        description: "",
        amount: "",
        time:""
    }]);
    const[name,setName] = useState("")
    useEffect(() => {
        const token = localStorage.getItem("login-key");

        axios.post(`http://localhost:4000/expense-view`,{"data":token})
        .then(res=>{
            console.log(res.data[0])
            setExpenses(prevExpenses=>{
                prevExpenses= res.data[0]
                return prevExpenses
            })
            setExpensesYouOwe(prevExpensesYouOwe=>{
                prevExpensesYouOwe = res.data[1]
                return prevExpensesYouOwe
            })
            if(res.data[0].length &&res.data[1].length != 0){
                handleDashVisibility()
                // alert("0")
            }
        })
        return () => {
            
        };
    },[]);
    function updateAmount(){
        var amount=0;
        expenses.map(item=>{
            parseFloat(amount+=parseFloat(item.amount/2))
        })
        return amount
    }
    function updateAmountYouOwe(){
        var amount=0;
        expensesYouOwe.map(item=>{
            parseFloat(amount+=parseFloat(item.amount/2))
        })
        return amount
    }

    function CustomRender(props){
        const dashCurrent = props.viewType.map(item => {
            if (item.visibility) {
                if(item.dash == "dash-intro"){
                    return <DashboardIntro key={item.dash} />
                }
                if(item.dash == "dash-outro"){
                    return  <DashboardOutro key={item.dash}/>
                }
                if(item.dash == "dash-exp"){
                    return <ExpenseTracker key={item.dash} method={updateAmount} expenses={expenses} expensesYouOwe={expensesYouOwe} method2={updateAmountYouOwe}/>
                }
            }
        })
        return dashCurrent
    }
    return (
        <>
            <div className="main-content">
                <MenuNavActivity expenses={expenses} expensesYouOwe={expensesYouOwe}/>
                <div className="dashboard-content">
                    <DashboardHeader method={handleView} viewType={view}/>
                    <CustomRender viewType={view}/> 
                    {/* <ExpenseTracker method={updateAmount} expenses={expenses}/> */}
                </div>
                <Promotions/>
                <ModalExpense method={handleView} viewModal={view} user={props.user}/>
                <SettleExpense method={handleView} viewModal={view}/>
            </div>
        </>
    )
}

export default Dashboard