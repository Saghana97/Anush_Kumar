import React from 'react'
import Button from '../Button'
import ProfileImg1 from '../profile1.jpg'
import Arrow from './settle-up-arrow.png'
import ProfileImg2 from '../profile2.jpeg'

function SettleExpense(props){
    function handleSettleVisibility(){
        const currentViewModal = props.viewModal.map((item) =>{
            item.settle = false
            return item
        })
        props.method(currentViewModal)
    }
    function handleSettleDashVisibility(){
        const currentViewModal = props.viewModal.map((item) =>{
            if(item.visibility === true){
                item.visibility = !item.visibility
            }
            if(item.dash === "dash-outro"){
                item.visibility = !item.visibility
            }
            item.settle = false
            return item
        })
        props.method(currentViewModal)
    }
    // var input = document.querySelector('input'); // get the input element
    // input.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
    // resizeInput.call(input); // immediately call the function

    function resizeInput(event) {
        event.target.style.width =  event.target.value.length + "ch";
    }
    
    return(
        <div style={{display:props.viewModal[4].settle?"block":"none"}} className="add-expense-modal">
            <div className="add-expense-1">
                <p>Settle up</p>
                <Button class="close-btn" name="x" onclickmeth={handleSettleVisibility}/>
            </div>
            <div className="add-expense-2">
                <div className="add-expense-5">
                    <div style={{display:"flex",marginLeft:"55px"}}>
                        <img className="settle-img" src={ProfileImg1} />
                        <img className="settle-img-arrow" src={Arrow} />
                        <img className="settle-img" src={ProfileImg2} />
                    </div>
                    <br/>
                    <div style={{display:"flex",marginLeft:"90px"}}>
                        <p>You paid Qwe</p>
                    </div>
                    <br/>
                    <div className="add-expense-5-inside">
                        <input className="input-6" type="number" placeholder="0.00" onChange={resizeInput}/><span className="dollar-sym-2">$</span>
                    </div>
                </div>
                <div style={{padding:"10px",textAlign:"right"}}>
                    <Button class="exp-btn" name="Cancel"/>
                    <Button class="exp-btn-2" name="Save" onclickmeth={handleSettleDashVisibility} />
                </div>
                
            </div> 
        </div>
    )
}

export default SettleExpense