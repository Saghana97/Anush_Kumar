import React from "react";
import HeaderLeft from "../Header/HeaderLeft";
import Button from '../Button'
import loginLogo from './login-logo.svg'
import LoginForm from './LoginForm'

function SignIn(){
    return(
        <div>
            <div className="top-nav">
                <div className="margin-top-nav">
                    <HeaderLeft />
                    <div className="login-right">
                        <Button class="signup-btn" name="Sign up"/>
                    </div>
                </div>
            </div>
            <div className="center-container">
                <img className="login-logo" src={loginLogo} alt="login-logo" />
                <div className="login-form">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default SignIn