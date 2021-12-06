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
                                        <div>
                                            <IconContext.Provider value={{ color: "#ffd55c",size:"2em" }}>
                                                    <FaSun/>
                                            </IconContext.Provider>
                                            <div>{"Sunny"}</div>
                                        </div>
                                        :
                                        <div>
                                            <IconContext.Provider value={{ color: "#459de9",size:"2em" }}>
                                                    {
                                                        state.list[0].weather[0].main==="Snow"?<BsFillCloudSnowFill/>
                                                        :state.list[0].weather[0].main==="Rain"?<BsFillCloudRainHeavyFill/>
                                                        :<AiFillCloud/>
                                                    }
                                                    
                                            </IconContext.Provider>
                                            <div >{state.list[0].weather[0].main}</div>
                                        </div>
                                    }
                            </div>
    )
}
