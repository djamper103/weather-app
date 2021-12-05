import React from 'react'
import {CgArrowRightO} from "react-icons/all";
import { IconContext } from "react-icons";
import style from './pressure.module.css'


export default function Pressure({state}) {
    return (
            <div className={style.container}>
                <IconContext.Provider value={{ color: "#1971bd",size:"1.2em" }}>
                    <CgArrowRightO/>
                </IconContext.Provider>
                <div className={style.containerMain}>
                    <div> {state.list[0].main.pressure} <span>Pa</span></div>
                    <div>Pressure</div>
                </div>   
            </div>
    )
}