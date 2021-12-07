import React from 'react'
import {CgArrowRightO} from "react-icons/all";
import { IconContext } from "react-icons";
import style from './pressure.module.css'


export default function Pressure({state,type}) {
    return (
        <div className={type==='detailPage'?style.containerDetailPage:style.container}>
                <IconContext.Provider value={{ color: "#1971bd",size:type==='detailPage'?'2em':'1.2em' }}>
                    <CgArrowRightO/>
                </IconContext.Provider>
                <div className={style.containerMain}>
                    <div> {state.list[0].main.pressure} <span>Pa</span></div>
                    <div>Pressure</div>
                </div>   
            </div>
    )
}
