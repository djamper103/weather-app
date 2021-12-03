import React, { useEffect, useState } from "react"
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';
import { usePosition } from 'use-position';
import Input from "./input/input";


const apiKey = "82207646ff9e6f42932e9fc60a8799e6"


export default function Currentdata() {

    const [state, setState] = useState([])
    const [cityName, setCityName] = useState("")
    const [cityNameAll, setCityNameAll] = useState([])


    const { latitude, longitude, error } = usePosition();
    

    useEffect(() => {
        if (latitude && longitude && !error) {
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
                .then(response => {
                    setState(response.data.list.slice(0, 8))
                })
        }else{
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Kiev&appid=${apiKey}`)
                .then(response => {
                    setState(response.data.list.slice(0, 8))
                })
        }
    }, [latitude, longitude]);

    useEffect(() => {
        localStorage.getItem('cityName') ?
            setCityNameAll(Object.keys(JSON.parse(localStorage.getItem('cityName'))))
            : setCityNameAll(['Kiev', 'Tokyo', 'Berlin', 'London', 'Beijing'])
    }, [localStorage.getItem('cityName')]);

    const search = () => {

        let cityNameClean=cityName.replace(/\s/g, '').trim().toLowerCase()

        if (cityNameClean.length > 3) {
            let allCity = {}
            if (localStorage.getItem('cityName')) {
                let b = JSON.parse(localStorage.getItem('cityName'))
                allCity[cityName] = cityNameClean
                let a = { ...b, ...allCity }
                localStorage.setItem('cityName', JSON.stringify(a))
            } else {
                allCity[cityName] = cityNameClean
                localStorage.setItem('cityName', JSON.stringify(allCity))
            }

            axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityNameClean}&appid=${apiKey}`)
                // axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
                .then(response => {
                    console.log(response)
                    setState(response.data.list.slice(0, 8))
                })
        } else {
            console.log("Input city name")
        }
    }

    return (
        <div>
            <div>
                <Input search={search} cityName={cityName} setCityName={setCityName} />
                <select name="select" onChange={event => { setCityName(event.target.value) }}>
                    {
                        cityNameAll ? cityNameAll.map(item => (
                            <option value={item} key={uuidv4()}>{item}</option>
                        )) : "Data has not been loaded yet"
                    }
                </select>
            </div>

            <div>
                {
                    state ? state.map(el => {
                        return <div key={uuidv4()}>{el.dt_txt}  :  {Math.trunc(el.main.temp - 273.15)} C</div>
                    }) : null
                }
            </div>

        </div>
    );
}
