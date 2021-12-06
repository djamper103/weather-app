import React from 'react'
import {SiTailwindcss} from "react-icons/all";
import { IconContext } from "react-icons";
import style from './widn.module.css'


export default function Widn({state,type}) {
    return (
        <div className={style.container}>
            <IconContext.Provider value={{ color: "#1971bd",size:type==='detailPage'?'2em':'1.2em' }}>
                <SiTailwindcss/>
            </IconContext.Provider>
            <div className={style.containerMain}>
                    <div>{state.list[0].wind.speed} <span>m/s</span></div>
                    <div>Widn</div>
                </div> 
        </div>
    )
}
