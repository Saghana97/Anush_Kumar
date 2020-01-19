import React,{useState} from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios'
import Button from '../Button'
import InputWrap from './InputWrap'
import LoginExtras from './LoginExtras'

function LoginForm(){
    const [users, setUsers] = useState({
        name:"",
        email:"",
        password:"",
    
        loginEmail:"",
        loginPassword:"",
      });
    const history = useHistory();

    function handleloginEmail(event){
        setUsers(prevUsers=>{
          prevUsers.loginEmail = event.target.value;
          return prevUsers
        })
      }
      function handleloginPassword(event){
        setUsers(prevUsers=>{
          prevUsers.loginPassword = event.target.value;
          return prevUsers
        })
      }
      function loginAuthentication(event){
        event.preventDefault();
        const userCredentials = [];
        userCredentials.push(users.loginEmail);
        userCredentials.push(users.loginPassword)
         axios.post(`http://localhost:4000/post-call-login`,userCredentials)
           .then(res => {
             //console.log(res);
             //console.log(res.data);
            // alert(res.data[0])
             if(res.data[0] === "Email & Password does not match or account does not exist."){
              alert(res.data[0])
             }
             if(res.data[0] === "Password incorrect"){
              alert(res.data[0])
             }
             if(res.data[0] === "login success"){
             localStorage.setItem("login-key",res.data[1])
              history.push("/loading")
              setTimeout(()=>{history.push("/Dashboard")},2000)
             }
         })
        
      }
    return(
        <form>
            <h4 className="login-h4">Welcome to splitwise</h4>
            <InputWrap class="login-input" name="Email address" method={handleloginEmail} type="text"/>
            <InputWrap class="login-input" name="Password" method={handleloginPassword} type="password"/>
            <Button class="log-btn" name="Log in" onclickmeth={loginAuthentication}/>
            <LoginExtras class="small-p" text="Forgot your password? " btnClass="forgot-btn" btnName="click here"/>
            <hr/>
            <LoginExtras class="small-p" text="Or login with " btnClass="google-btn " btnName="Google"/>
        </form>
    )
}

export default LoginForm