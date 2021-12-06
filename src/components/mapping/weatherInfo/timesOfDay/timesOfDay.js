import React from 'react'
import {FaSun,GiNightSleep} from "react-icons/all";
import { IconContext } from "react-icons";
import style from './timeOfDay.module.css'


export default function TimesOfDay({state,type}) {
    return(
        <div>
            {state.list[0].sys.pod.includes('d')?
            <div className={type==='modal'?style.containerModal:style.container}>
                <IconContext.Provider value={{ color: "#ffd55c",size:type==='detailPage'?'2em':'1em'  }}>
                    <FaSun/>
                </IconContext.Provider>
                <div className={style.containerMain}>
                    <div>{`${new Date(state.city.sunset * 1000).getHours()} : ${new Date(state.city.sunset * 1000).getMinutes()}`}</div>
                    <div>{state.list[0].sys.pod.includes('d')?"Sunset":"Sunrise"}</div>
                </div>
            </div>
            :
            <div className={type==='modal'?style.containerModal:style.container}>
                <IconContext.Provider value={{ color: "#1971bd",size:type==='detailPage'?'2em':'1em' }}>
                    <GiNightSleep/>
                </IconContext.Provider>
                <div className={style.containerMain}>
                    <div>{`${new Date(state.city.sunrise * 1000).getHours()} : ${new Date(state.city.sunrise * 1000).getMinutes()}`}</div>
                    <div>{state.list[0].sys.pod.includes('d')?"Sunset":"Sunrise"}</div>
                </div>
            </div>
            }
        </div>
    ) 
}
