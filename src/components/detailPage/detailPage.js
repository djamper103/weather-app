import React from 'react'
import Charts from '../charts/charts'
import CityName from '../mapping/weatherInfo/cityName/cityName'
import Humidity from '../mapping/weatherInfo/humidity/humidity'
import Pressure from '../mapping/weatherInfo/pressure/pressure'
import TimesOfDay from '../mapping/weatherInfo/timesOfDay/timesOfDay'
import WeatherSky from '../mapping/weatherInfo/weatherSky/weatherSky'
import Widn from '../mapping/weatherInfo/widn/widn'
import style from './detailPage.module.css'
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiFillHome } from "react-icons/all";
import { useTypesSelector } from "../../hooks/useTypeSelector";
import { useActions } from "../../hooks/useActions";


export default function DetailPage() {

    const { modalCurrentView } = useTypesSelector(modalCurrentView => modalCurrentView.modalView)
    const { modalCurrentViewActionCreators } = useActions()


    return (
        <div className={style.container}>
            <div className={Math.trunc(modalCurrentView.list[0].main.temp - 273.15) > 0 ? style.containerMainTemp : style.containerMainTemp1}>
                <div className={style.header}>
                    <h3>Current weather</h3>
                    <div>
                        <NavLink to="/" onClick={() =>
                            modalCurrentViewActionCreators(modalCurrentView, "")
                        }>
                            <IconContext.Provider value={{ color: "#1971bd", size: "1.6em" }}>
                                <AiFillHome />
                            </IconContext.Provider>
                        </NavLink>
                    </div>
                </div>
                <div className={style.currentWeather}>
                    <CityName />
                    <WeatherSky />
                    <TimesOfDay />
                    <Widn />
                    <Humidity />
                    <Pressure />
                </div>
                <h3>Weather forecast for 7 days </h3>
                <div className={style.chart}>
                    <Charts />
                </div>
            </div>
        </div>
    )
}
