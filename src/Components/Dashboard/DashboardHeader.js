import React from 'react'
import Button from '../Button'

function DashboardHeader(props){
    function handleChangeExp(){
        const currentView = props.viewType.map(item =>{
            item.modal = true
            return item
        })
        props.method(currentView)
    }
    function handleChangeOut(){
        const currentView = props.viewType.map(item =>{
            item.settle = true
            return item
        })
        props.method(currentView)
    }
    
    return (
        <div className="dashboard-header">
            <h3 className="h3-dashboard" >Dashboard</h3>
            <div className="btn-margin">
                <Button class="dashboard-btn-left" name="Add an expense" onclickmeth={handleChangeExp} />
                <Button class="dashboard-btn-right" name="Settle up" onclickmeth={handleChangeOut}/>
            </div>
        </div>
    )
}

export default DashboardHeader