import React, { usemodalCurrentView } from 'react'
import Charts from '../charts/charts'
import CityName from '../mapping/weatherInfo/cityName/cityName'
import Humidity from '../mapping/weatherInfo/humidity/humidity'
import Pressure from '../mapping/weatherInfo/pressure/pressure'
import TimesOfDay from '../mapping/weatherInfo/timesOfDay/timesOfDay'
import WeatherSky from '../mapping/weatherInfo/weatherSky/weatherSky'
import Widn from '../mapping/weatherInfo/widn/widn'
import style from './modal.module.css'
import { NavLink } from "react-router-dom";
import { useTypesSelector } from "../../hooks/useTypeSelector";
import { useActions } from "../../hooks/useActions";


export default function Modal() {

    const {modalCurrentView}=useTypesSelector(modalCurrentView=>modalCurrentView.modalView)
    debugger
    const {modalIsActive}=useTypesSelector(modalCurrentView=>modalCurrentView.modalView)

    const {modalActive}=useActions()
    const {deleteCityName}=useActions()

    return (
        <div className={modalIsActive ? style.containerActive : style.container} onClick={() => modalActive(false)}>
                <div key={modalCurrentView.city.name} className={Math.trunc(modalCurrentView.list[0].main.temp - 273.15) > 0 ? style.containerMainTemp : style.containerMainTemp1}
                    onClick={(e) => e.stopPropagation()}>
                    <div style={{ display: "flex", marginBottom: "5%", justifyContent: "space-between" }}>
                        <CityName modalCurrentView={modalCurrentView} />
                        <WeatherSky modalCurrentView={modalCurrentView} />
                    </div>
                    
                    <div className={style.chart}>
                        <Charts modalCurrentView={modalCurrentView} />
                    </div>

                    <div className={style.containerMain}>
                        <TimesOfDay modalCurrentView={modalCurrentView} type={'modal'} />
                        <Widn modalCurrentView={modalCurrentView} />
                        <Humidity modalCurrentView={modalCurrentView} />
                        <Pressure modalCurrentView={modalCurrentView} />
                    </div>
                    <div className={style.containerFooter}>
                        <NavLink to="/detailPage">Detail Page</NavLink>
                        <button onClick={() => deleteCityName(modalCurrentView.city.name)}>Delete city</button>
                    </div>
                </div>
        </div>
    )
}
