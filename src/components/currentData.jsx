import React, { useEffect, useState } from "react"
import axios from "axios"
import { usePosition } from 'use-position';
import Input from "./input/input";
import Mapping from "./mapping/mapping";


const apiKey = "82207646ff9e6f42932e9fc60a8799e6"


export default function Currentdata() {

    const [state, setState] = useState([])
    const [cityName, setCityName] = useState("")
    const [cityNameAll, setCityNameAll] = useState(['kiev', 'tokyo', 'berlin', 'london', 'beijing'])


    const { latitude, longitude, error } = usePosition();
    

    useEffect(() => {
        if (latitude && longitude && !error) {
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
                .then(response => {
                    if(cityNameAll.includes(response.data.city.name)===false){
                        setCityNameAll([response.data.city.name.toLowerCase(),...cityNameAll])
                        setState([response.data,...state])
                    } 
                })
        }
    }, [latitude, longitude]);


    useEffect(() => {
        let cityDataAll=[]
        cityNameAll.forEach(el=>{
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${el}&appid=${apiKey}`)
                .then(response => {
                    cityDataAll.push(response.data)
            })
        })
        setState(cityDataAll)
    }, []);


    const search = () => {
        let cityNameClean=cityName.replace(/\s/g, '').trim().toLowerCase()
        if (cityNameClean.length > 3 && cityNameAll.includes(cityNameClean)===false) {
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityNameClean}&appid=${apiKey}`)
                .then(response => {
                    setCityNameAll([cityNameClean,...cityNameAll])
                    setState([response.data,...state])
                })
        } else {
            console.log("Input city name")
        }
    }

    console.log(cityNameAll,state)

    return (
        <div>
                <Input search={search} cityName={cityName} setCityName={setCityName} />
                <Mapping state={state}/>
        </div>
    );
}