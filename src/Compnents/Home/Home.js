import React,{useEffect,useState} from 'react'
import {useHistory} from 'react-router-dom'
import Maps from './Maps'
import { usePosition } from 'use-position';

export default function Home (){
    const { latitude, longitude, timestamp, accuracy, error } = usePosition(false, {enableHighAccuracy: true});
    const [name,setName] = useState("");
    const history = useHistory();
    const[loading,setLoading] = useState(true)
    const [routes,setRoutes] = useState({
        routeOne:[],
        routeTwo:[]
    });
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("token"));
        const users = JSON.parse(localStorage.getItem('Users'));
        // console.log(token)
        if(token){
            const currentUser = users.filter(items=>{
                return items.userName === token.token
            })
            if(currentUser.length>0){
                setName(token.name)
            }
            else if(currentUser.length<0){
                history.push("/")
            }
        }
        else{
            history.push("/")
        }
        setTimeout(() => {
            setLoading(prev=>prev=false)
        }, 2000);
    }, [])

    function loadData(){
        if(loading)
            return(
                <div className="loader">
                    <div className="cssload-thecube">
                        <div className="cssload-cube cssload-c1"></div>
                        <div className="cssload-cube cssload-c2"></div>
                        <div className="cssload-cube cssload-c4"></div>
                        <div className="cssload-cube cssload-c3"></div>
                    </div>
                </div>
            )
        else
            return(
                <div className="main-content">
                    <div className="left-section">
                        <div className="name-section">
                            <p>{name}</p>
                        </div>
                        <div className="logout-section">
                            <p onClick={()=>{localStorage.removeItem("token");history.push("/")}}>Log out</p>
                        </div>
                    </div>
                    <Maps />
                </div>
            )
    }
    return (
        <>
            {loadData()}
        </>
    )
}