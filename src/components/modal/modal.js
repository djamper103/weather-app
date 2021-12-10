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

    const { modalCurrentView } = useTypesSelector(modalCurrentView => modalCurrentView.modalView)
    const { modalIsActive } = useTypesSelector(modalCurrentView => modalCurrentView.modalView)
    const { cityNameAll } = useTypesSelector(state => state.cityName)

    const { modalActive } = useActions()
    const { modalCurrentViewActionCreators } = useActions()
    const { deleteCityName } = useActions()

    let deleteCity = (currentName) => {
        let filteredCityName = cityNameAll.filter(el => el != currentName.toLowerCase())
        localStorage.setItem('cityNameAll', filteredCityName)
        deleteCityName(currentName)
        modalActive(false)
        modalCurrentViewActionCreators({
            stateView: {},
            typeView: ""
        })
    }


    return (
        <div className={modalIsActive ? style.containerActive : style.container} onClick={() => modalActive(false)}>
            <div key={modalCurrentView.city.name} className={Math.trunc(modalCurrentView.list[0].main.temp - 273.15) > 0 ? style.containerMainTemp : style.containerMainTemp1}
                onClick={(e) => e.stopPropagation()}>
                <div style={{ display: "flex", marginBottom: "5%", justifyContent: "space-between" }}>
                    <CityName />
                    <WeatherSky />
                </div>

                <div className={style.chart}>
                    <Charts />
                </div>

                <div className={style.containerMain}>
                    <TimesOfDay />
                    <Widn />
                    <Humidity />
                    <Pressure />
                </div>
                <div className={style.containerFooter}>
                    <NavLink to="/detailPage" onClick={() => modalCurrentViewActionCreators(modalCurrentView, "detailPage")}
                    >
                        Detail Page
                    </NavLink>
                    <button onClick={() => deleteCity(modalCurrentView.city.name)}>Delete city</button>
                </div>
            </div>
        </div>
    )
}
