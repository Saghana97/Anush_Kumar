import React from 'react'
import Button from '../Button'
import InputWrap from './InputWrap'
import LoginExtras from './LoginExtras'

function LoginForm(){
    return(
        <form>
            <h4 className="login-h4">Welcome to splitwise</h4>
            <InputWrap class="login-input" name="Email address" type="text"/>
            <InputWrap class="login-input" name="Password" type="password"/>
            <Button class="log-btn" name="Log in"/>
            <LoginExtras class="small-p" text="Forgot your password? " btnClass="forgot-btn" btnName="click here"/>
            <hr/>
            <LoginExtras class="small-p" text="Or login with " btnClass="google-btn " btnName="Google"/>
        </form>
    )
}

export default LoginForm