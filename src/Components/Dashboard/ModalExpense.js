import React from 'react'
import Button from '../Button'
import Input from '../Input'
import ImgIcon from './general.png'

function ModalExpense(props){
    function handleModalVisibility(){
        const currentViewModal = props.viewModal.map((item) =>{
            item.modal = false
            return item
        })
        props.method(currentViewModal)
    }
    function handleDashVisibility(){
        const currentViewModal = props.viewModal.map((item) =>{
            if(item.visibility === true){
                item.visibility = !item.visibility
            }
            if(item.dash === "dash-exp"){
                item.visibility = !item.visibility
            }
            item.modal = false
            return item
        })
        props.method(currentViewModal)
    }
    
    return(
        <div style={{display:props.viewModal[3].modal?"block":"none"}} className="add-expense-modal">
            <div className="add-expense-1">
                <p>Add an expense</p>
                <Button class="close-btn" name="x" onclickmeth={handleModalVisibility}/>
            </div>
            <div className="add-expense-2">
                <div className="add-expense-3">
                    <p className="add-expense-3-p">With you and:</p>
                    <Input class="input-3" placeHolder="Enter names or email addresses"/>
                </div>
                <div className="add-expense-4">
                    <div style={{display:"flex"}}>
                        <img className="image-icon-exp" src={ImgIcon} />
                        <div className="add-expense-4-inside">
                            <Input class="input-4" placeHolder="Enter a description"/>
                            <input className="input-5" type="number" placeholder="0.00"/><span className="dollar-sym">$</span>
                        </div>
                    </div>
                    <p className="exp-info">Paid by <span>you</span> and split <span>equally.<br/>($</span>0.00<span></span>/person)</p>
                </div>
                <div style={{padding:"10px",textAlign:"right"}}>
                    <Button class="exp-btn" name="Cancel" onclickmeth={handleModalVisibility} />
                    <Button class="exp-btn-2" name="Save" onclickmeth={handleDashVisibility} />
                </div>
                
            </div> 
        </div>
    )
}

export default ModalExpense