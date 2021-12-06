import React, { useState } from 'react'
import Charts from '../charts/charts'
import CityName from '../mapping/weatherInfo/cityName/cityName'
import Humidity from '../mapping/weatherInfo/humidity/humidity'
import Pressure from '../mapping/weatherInfo/pressure/pressure'
import TimesOfDay from '../mapping/weatherInfo/timesOfDay/timesOfDay'
import WeatherSky from '../mapping/weatherInfo/weatherSky/weatherSky'
import Widn from '../mapping/weatherInfo/widn/widn'
import style from './modal.module.css'
import { NavLink } from "react-router-dom";


export default function Modal({ state, modalActive, setModalActive,deleteCity }) {


    return (
        <div className={modalActive ? style.containerActive : style.container} onClick={() => setModalActive(false)}>
            <div onClick={(e) => e.stopPropagation()}>
                <div key={state.city.name} className={Math.trunc(state.list[0].main.temp - 273.15) > 0 ? style.containerMainTemp : style.containerMainTemp1}>
                    <div style={{ display: "flex", marginBottom: "5%", justifyContent: "space-between" }}>
                        <CityName state={state} />
                        <WeatherSky state={state} />
                    </div>

                    <Charts state={state} />

                    <div className={style.containerFooter}>
                        <TimesOfDay state={state} type={'modal'} />
                        <Widn state={state} />
                        <Humidity state={state} />
                        <Pressure state={state} />
                    </div>
                </div>
                <div>
                    <NavLink to="/detailPage">Detail Page</NavLink>
                    <button onClick={() => deleteCity(state.city.name)}>Delete city</button>
                </div>

            </div>
        </div>
    )
}
