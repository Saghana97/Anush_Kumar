import React, { useState } from 'react'
import Button from '../Button'
import Input from '../Input'
import ImgIcon from './general.png'
import axios from 'axios'

function ModalExpense(props){
    const [modalInput,setModalInput] = useState ({
        email:"",
        description:"",
        amount: 0.00
    })
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
    function handleEmail(event){
        setModalInput(prevUsers=>{
            prevUsers.email = event.target.value;
            return prevUsers
          })
    }
    function handleDescrption(event){
        setModalInput(prevUsers=>{
            prevUsers.description = event.target.value;
            return prevUsers
          })
    }
    function handleAmount(event){
        setModalInput(prevUsers=>{
            prevUsers.amount = event.target.value;
            return prevUsers
          })
    }
    function addExpense(){
        // console.log(props.user)
        var arr = []
        for(let i in modalInput){
            arr.push(modalInput[i])
        }
        arr.push(props.user[0])
        arr.push(props.user[1])
        // console.log(arr)
        axios.post(`http://localhost:4000/add-expense`,arr)
            .then(res=>{
                console.log(res)
            })
        window.location.reload(false)
        handleDashVisibility()
    }
    
    return(
        <div style={{display:props.viewModal[3].modal?"block":"none" }} className="add-expense-modal">
            <div className="add-expense-1">
                <p>Add an expense</p>
                <Button class="close-btn" name="x" onclickmeth={handleModalVisibility}/>
            </div>
            <div className="add-expense-2">
                <div className="add-expense-3">
                    <p className="add-expense-3-p">With you and:</p>
                    <Input class="input-3" placeHolder="Enter names or email addresses" method={handleEmail}/>
                </div>
                <div className="add-expense-4">
                    <div style={{display:"flex"}}>
                        <img className="image-icon-exp" src={ImgIcon} />
                        <div className="add-expense-4-inside">
                            <Input class="input-4" placeHolder="Enter a description" method={handleDescrption}/>
                            <input className="input-5" type="number" placeholder="0.00" onChange={handleAmount}/><span className="dollar-sym">$</span>
                        </div>
                    </div>
                <p className="exp-info">Paid by <span>you</span> and split <span>equally.<br/></span>($ /person)</p>
                </div>
                <div style={{padding:"10px",textAlign:"right"}}>
                    <Button class="exp-btn" name="Cancel" onclickmeth={handleModalVisibility} />
                    <Button class="exp-btn-2" name="Save" onclickmeth={addExpense} />
                </div>
                
            </div> 
        </div>
    )
}

export default ModalExpense