import React from 'react'
import style from './temp.module.css'
import { useTypesSelector } from "../../../../hooks/useTypeSelector";
import { useActions } from "../../../../hooks/useActions";


export default function Temp({ state }) {

    const { modalCurrentView } = useTypesSelector(modalCurrentView => modalCurrentView.modalView)
    const { tempStatus } = useTypesSelector(modalCurrentView => modalCurrentView.tempStatus)

    const { tempStatusActionCreator } = useActions()


    return (
        <div className={style.container}>

            <div className={style.containerMain}>
                <div style={{ marginRight: "5%" }}>{tempStatus ? Math.trunc(((state ? state : modalCurrentView).list[0].main.temp * (9 / 5)) - 459, 67) : Math.trunc((state ? state : modalCurrentView).list[0].main.temp - 273.15)}</div>
                <div onClick={() => tempStatusActionCreator(!tempStatus)}>{tempStatus ? "°F" : "°C"}</div>
            </div>

            <div className={style.feelsLike}>
                Feels like: {tempStatus ? Math.trunc(((state ? state : modalCurrentView).list[0].main.feels_like * (9 / 5)) - 459, 67) : Math.trunc((state ? state : modalCurrentView).list[0].main.feels_like - 273.15)} {tempStatus ? "°F" : "°C"}
            </div>
        </div>
    )
}
