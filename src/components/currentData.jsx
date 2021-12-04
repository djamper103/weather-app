import React, { useEffect, useState } from "react"
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';
import { usePosition } from 'use-position';
import Input from "./input/input";


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
                        setState([[...response.data.list.slice(0, 8)],...state])
                    } 
                })
        }
    }, [latitude, longitude]);


    useEffect(() => {
        let cityDataAll=[]
        cityNameAll.forEach(el=>{
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${el}&appid=${apiKey}`)
                .then(response => {
                    cityDataAll.push(response.data.list.slice(0, 8))
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
                    setState([[...response.data.list.slice(0, 8)],...state])
                })
        } else {
            console.log("Input city name")
        }
    }

    console.log(cityNameAll,state)

    return (
        <div>
            <div>
                <Input search={search} cityName={cityName} setCityName={setCityName} />
            </div>

            <div>
                {
                    state ? state.map((el,index) => {
                        return <div key={cityNameAll[index]}>
                            {cityNameAll[index]}
                            <div>
                                {el.map(el1=>{
                                    return <div key={uuidv4()}>{el1.dt_txt}  :  {Math.trunc(el1.main.temp - 273.15)} C</div>
                                    })
                                }
                            </div>
                        </div>
                    }) : null
                }
            </div>

        </div>
    );
}