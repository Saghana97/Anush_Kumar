import React,{useState,useCallback,useEffect,useRef} from 'react'
import { connect } from 'react-redux';
import store from '../../Controllers/Store/store'
import * as actions from '../../Controllers/Actions/Actions'
import axios from 'axios'
import img from './profile3.jpeg'
import {useHistory} from 'react-router-dom'
import HiddenFriendRequestNotifications from './HiddenFriendRequestNotifications'
import Input from '../Input'


function TopNav(props){
    const history = useHistory()
    const inputRef = useRef(null)

    const [settings,setSetting] = useState(false)
    const [friends,setFriends] = useState(false)

    function handleToggleSetting(){
        setSetting(prevSettings=>{
            prevSettings = !prevSettings
            return prevSettings
        })
        setFriends(prevFriends=>{
            prevFriends = false
            return prevFriends
        })
    }
    function handleToggleFriendRequest(){
        setFriends(prevFriends=>{
            prevFriends = !prevFriends
            return prevFriends
        })
        setSetting(prevSettings=>{
            prevSettings = false
            return prevSettings
        })
    }
    const custumRendersettings = useCallback(
        () => {
            if(settings)
                return (
                    <div className="hidden-menu settings">
                        <span className="beacon"></span>
                        <div className="hidden-menu-inside">
                            <p onClick={()=>{sessionStorage.clear();history.push('/')}}>Log Out</p>
                        </div>
                    </div>
                )
        },
        [settings,history],
    )

    var requests = [];
    try{
        requests = store.getState().setFriendsRequsts[0].details.map(items=>{
                return <HiddenFriendRequestNotifications id={items.id} name={items.name} key={items.id} method={acceptFriendRequest}/>
        })
        if(requests.length < 1){
            requests.push(<p className="friend-request-notifications" key="1">No friend requests</p>)
        }
    }
    catch(err){
        console.log(err.message)
    }

    const custumRenderFriend = useCallback(
        () => {
            if(friends)
                return (
                    <div className="hidden-menu friend-requests">
                        <span className="beacon"></span>
                        <div className="friend-requests-header">Friend Requests</div>
                        <div className="friend-requests-alert">Only accept Friend Requests from people you really know.</div>
                        <div className="hidden-menu-inside-friends">
                            {requests}
                        </div>
                        <div className="friend-requests-footer">
                            <p>see all</p>
                        </div>
                    </div>
                )
        },
        [friends],
    )
    
    function acceptFriendRequest(event){
        let details = {}
        details = {
            id:event.target.name
        }
        axios.post('http://localhost:4000/send-friend-request/accept',details)
        .then(res=>console.log(res.data))
        .catch(err=>alert(err.message))
    }

    let notify;
    try{
        notify = requests[0].props.children === "No friend requests"?"":<span className="alert-friends"></span>;
    }
    catch(err){
        console.log(err.message)
    }

    useEffect(() => {        
        inputRef.current.focus();
    }, [])
    return(
        <div className="home-top-nav">
            <div className="top-nav-margin"> 
                <h1>f</h1>
                <div className="top-nav-search-div">
                    <Input inputRef={inputRef} class="top-nav-search" text="Search"/>
                    <button className="search-btn"><i className="fa fa-search" aria-hidden="true"></i></button>
                </div>
                <div className="top-nav-right">
                    <img className="profile-img" src={img} alt="current user profile."/>
                    <p className="profile-name">{props.name}</p>
                    <ul className="home-top-nav-list">
                        <li><i className="fa fa-bell"></i></li>
                        <li onClick={handleToggleFriendRequest}><i className="fa fa-users"></i></li>{notify}
                        <li><i className="fa fa-envelope"></i></li>
                        <li onClick={handleToggleSetting} ><i className="fa fa-caret-down"></i></li>
                    </ul>
                </div>
            </div>
            {custumRendersettings()}
            {custumRenderFriend()}
        </div>
    )
}

export default connect(
    null,
    { actions }
)(TopNav);