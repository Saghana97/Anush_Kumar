import React,{useEffect,useCallback,useState} from 'react'
import { connect } from 'react-redux';
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import store from '../../Controllers/Store/store'
import * as actions from '../../Controllers/Actions/Actions'
import TopNav from './TopNav'
import FriendRecomendation from './FriendRecomendation';
import Friends from './Friends'

function Home(){
    const history = useHistory()
    const [name,setName] = useState("");
    useEffect(() => {
        var isLoad = true;
        async function loadData (){
            document.title = "Home | Friend Finder";
            await axios.post('http://localhost:4000/log-in/check-login',[sessionStorage.getItem('key')])
            .then(res => {
                if(res.data.message === "jwt expired"){
                    sessionStorage.clear()
                    history.push('/');
                }
                if(res.data.message === "jwt must be provided") {
                    sessionStorage.clear()
                    history.push('/');
                }
                if(res.data.message === "Cannot read property 'toString' of null"){
                    sessionStorage.clear()
                    history.push('/');
                }
                store.dispatch(actions.addUserName(res.data.name))
                store.dispatch(actions.addAllRecommendedFriends(res.data.userData))
                store.dispatch(actions.addFriendRequests(res.data.friendRequests))
                store.dispatch(actions.addFriends(res.data.friends))
                try{
                    if (isLoad) setName(store.getState().setName[0].name)
                }
                catch(err){
                    console.log(err.message);
                }
            })
            .catch( err => {alert(err)}) 
        }
        loadData()
        return( () => {
            isLoad = false
        })
    }, [history])
    // const unsubcribe = store.subscribe(() => console.log(store.getState()))
    
    const names = useCallback(
        () => { return name },
    [name],)

    function sendFriendRequest(id){
        let details = {}
        details = {
            requestFrom:sessionStorage.getItem('key'),
            requestTo:id
        }
        axios.post('http://localhost:4000/send-friend-request',details)
        .then(res=>console.log(res.data))
        .catch(err=>alert(err.message))
    }

    var friendsAvailable;
    try{ 
        friendsAvailable = store.getState().setFriends[0].details.map(items=>{
            return <FriendRecomendation key={items.id} status={items['friendRequests.status']} name={items.userName} mutual="-" method={sendFriendRequest} id={items.id}/>
        })
    }
    catch(err){
        console.log(err.message)
    }

    var friends = [];
    try{ 
        friends = store.getState().setFriendsForUser[0].details.map(items=>{
            return <Friends key={items.id} name={items.userName} id={items.id} mutual={items.mutualFriends} friends={items.friends}/>
        })
        if(friends.length<1){
            friends.push(<p className="friends-inside" key="1">No friends yet. Try to connect with other people.</p>)
        }
    }
    catch(err){
        console.log(err.message)
    }


    return(
        <div className="home">
            <TopNav name={names()}/>            
            <div className="home-main-content">
                <div className="home-friends">
                    <p>Friends</p>
                    <div>
                        {friends}
                    </div>
                </div>
                <div className="home-people-you-may-know">
                    <p>People you may know</p>
                    <div className="people-you-may-know-friends">
                    <div className="loader"></div>
                        {friendsAvailable}
                    </div>
                    <div className="friend-requests-footer">
                        <p>see all</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(
    null,
    { actions }
)(Home);