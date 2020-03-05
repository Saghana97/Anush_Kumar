import React, { useState,useEffect,useCallback} from "react";
import { ReactBingmaps } from 'react-bingmaps';
import car from '../../Assets/car.png'
import bus from '../../Assets/bus.png'
import axios from 'axios';

const HERE_MAPS_KEY ="9a8Wc3VJvFHLF4I2s8Sisj_c2kfQE7ppvF4lzgtmO0I";
const KEY ="AoVMH4fhTFyAXxfjqNVBvLYjGjOxCYN8llWIud4Ro0CgtJ_2b379XxIP3XZsEmT1";

export default function Maps(props) {
    const latLong = [11.790640708130752, 78.09182189856892]   
    const [cars,setCars] = useState([11.0018115,76.9628425])
    const [buss,setBuss] = useState([13.0801721,79.2838331])
    const [gps,setGPS] = useState();
    const [routes,setRoutes] = useState([]);
    useEffect(() => {
        // console.log(cars)
        if(cars[0]<12){
            setCars([cars[0]+0.00003,cars[1]+0.000002])
            setBuss([buss[0]-0.00003,buss[1]-0.000002])
        }
    }, [cars,buss])

    useEffect(() => {
        console.log(gps)
        if(gps){
            console.log(gps,cars,buss)
            if(Math.abs(gps[0]-cars[0]) < Math.abs(gps[0]-buss[0]) && Math.abs(gps[1]-cars[1]) < Math.abs(gps[1]-buss[1])){
                console.log("car")
                console.log(Math.abs(gps[0]-cars[0]) , Math.abs(gps[0]-buss[0]))
                getFromHereMaps(cars)
            }
            else{
                console.log("bus")
                console.log(Math.abs(gps[0]-cars[0]) , Math.abs(gps[0]-buss[0]))
                getFromHereMaps(buss)
            }
        }
                // 
    }, [gps])

    function addPushPinOnClick(coordinates){
        // console.log(coordinates.latitude,coordinates.longitude)
        setGPS([coordinates.latitude,coordinates.longitude])
    }

    async function getFromHereMaps(data){
        await axios.get(`https://route.ls.hereapi.com/routing/7.2/calculateroute.json?waypoint0=${gps[0]}%2C${gps[1]}&waypoint1=${data[0]}%2C${data[1]}&mode=fastest%3Bcar%3Btraffic%3Aenabled&departure=now&apiKey=${HERE_MAPS_KEY}`)
            .then(res=>{
                setRoutes([])
                res.data.response.route[0].leg[0].maneuver.map(items=>{
                    setRoutes(prev=>{
                        prev.push([items.position.latitude,items.position.longitude])
                        return prev
                    })
                })
                console.log(res)
            })
            .catch(err=>{
                console.log(err.message)
            })
        }
    return (
        <div style={{width:"85vw",height:"100vh"}}>
            <ReactBingmaps 
            bingmapKey = {KEY}
            center = {latLong}
            zoom = {8}
            pushPins = {
                [
                    {
                      "location":cars, "option":{ icon: car }
                    },
                    {
                        "location": buss, "option":{icon: bus}
                    }
                ]
            }
            polyline = {{
                "location": routes,
                "option": { strokeColor: 'dodgerBlue', strokeThickness: 5}
            }}
            getLocation = {
                {addHandler: "click", callback:addPushPinOnClick}
            }
        > 
        </ReactBingmaps>
        </div>
    )
}