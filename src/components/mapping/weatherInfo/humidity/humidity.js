import React from 'react'
import {WiHumidity} from "react-icons/all";
import { IconContext } from "react-icons";
import style from './humidity.module.css'


export default function Humidity({state}) {
    return (
            <div className={style.container}>
                <IconContext.Provider value={{ color: "#1971bd",size:"1.4em" }}>
                    <WiHumidity/>
                </IconContext.Provider>
                <div className={style.containerMain}>
                    <div>{state.list[0].main.humidity} <span>%</span></div>
                    <div>Humidity</div>
                </div>   
            </div>
    )
}