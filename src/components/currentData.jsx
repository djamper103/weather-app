import React, { useEffect, useState } from "react"
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';
import { usePosition } from 'use-position';
import { VictoryChart, VictoryAxis, VictoryBar, VictoryTheme } from 'victory';


export default function Currentdata() {

    const [state, setState] = useState([])
    const [cityName, setCityName] = useState("")
    const { latitude, longitude, error } = usePosition();

    const data = [
        { day: 1, temp: 5 },
        { day: 2, temp: 2 },
        { day: 3, temp: 1 },
        { day: 5, temp: -2 },
        { day: 6, temp: 3 },
        { day: 7, temp: 5 },
        { day: 8, temp: 6 }
    ];

    // const data = [
    //     {Monday: 1, temp: 5},
    //     {Tuesday: 2, temp: 2},
    //     {Wednesday: 3, temp: 1},
    //     {Thursday: 4, temp: -2},
    //     {Friday: 4, temp: 3},
    //     {Satuday: 4, temp: 5},
    //     {Sunday: 4, temp: 6}
    //   ];

    useEffect(() => {
        if (latitude && longitude && !error) {
            let apiKey = "82207646ff9e6f42932e9fc60a8799e6"
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
                .then(response => {
                    console.log(response)
                    setState(response.data.list)
                })
        }
    }, [latitude, longitude]);

    const search = () => {
        if (cityName.length > 3) {
            let apiKey = "82207646ff9e6f42932e9fc60a8799e6"
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`)
                // axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
                .then(response => {
                    console.log(response)
                    setState(response.data.list.slice(0, 4))
                })
        } else {
            console.log("Input city name")
        }
    }

    console.log(state)

    return (
        <div>
            <div>
                <input value={cityName} onChange={(event) => setCityName(event.target.value)} />
                <button onClick={search}>Search</button>
            </div>
            <div>
                {
                    state ? state.map(el => {
                        return <div key={uuidv4()}>{el.dt_txt}  :  {Math.trunc(el.main.temp - 273.15)} C</div>
                    }) : null
                }
            </div>

            <VictoryChart
                // adding the material theme provided with Victory
                theme={VictoryTheme.material}
                domainPadding={20}
            >
                <VictoryAxis
                    tickFormat={["Monday", "Thuesday", "Wednesday", "Thursday","Friday","Saturday","Sunday"]}
                />
                <VictoryAxis
                    dependentAxis
                    tickFormat={(x) => (`${x} C`)}
                />

                <VictoryBar
                    data={data}
                    x="day"
                    y="temp"
                />
            </VictoryChart>
        </div>
    );
}
