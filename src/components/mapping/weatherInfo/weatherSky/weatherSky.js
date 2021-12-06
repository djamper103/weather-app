import React from 'react'
import {FaSun,AiFillCloud,BsFillCloudSnowFill,BsFillCloudRainHeavyFill,
}
from "react-icons/all";
import { IconContext } from "react-icons";
import style from './weatherSky.module.css'


export default function WeatherSky({state,type}) {

    return (
        <div className={type==="detailPage"?style.containerDatailPage:style.container}>
                                    {
                                        state.list[0].weather[0].main==="Clear"?
                                        <IconContext.Provider value={{ color: "#ffd55c",size:"1.5em" }}>
                                                <FaSun/>
                                                <div>{"Sunny"}</div>
                                        </IconContext.Provider> 
                                        :
                                        <IconContext.Provider value={{ color: "#459de9",size:"1.5em" }}>
                                                {
                                                    state.list[0].weather[0].main==="Snow"?<BsFillCloudSnowFill/>
                                                    :state.list[0].weather[0].main==="Rain"?<BsFillCloudRainHeavyFill/>
                                                    :<AiFillCloud/>
                                                }
                                                <div >{state.list[0].weather[0].main}</div>
                                        </IconContext.Provider>
                                    }
                            </div>
    )
}
