import React from 'react'
import style from './temp.module.css'
import { useTypesSelector } from "../../../../hooks/useTypeSelector";


export default function Temp({state,tempStatus,setTempStatus}) {

    
    const {modalCurrentView}=useTypesSelector(modalCurrentView=>modalCurrentView.modalView)

    return (
        <div className={style.container}>

            <div className={style.containerMain}>
                <div style={{marginRight:"5%"}}>{tempStatus?Math.trunc(((state?state:modalCurrentView.stateView).list[0].main.temp*(9/5)) - 459,67):Math.trunc((state?state:modalCurrentView.stateView).list[0].main.temp - 273.15)}</div>
                <div onClick={()=>setTempStatus(!tempStatus)}>{tempStatus?"°F":"°C"}</div>
            </div>

            <div className={style.feelsLike}>
                Feels like: {tempStatus?Math.trunc(((state?state:modalCurrentView.stateView).list[0].main.feels_like*(9/5)) - 459,67):Math.trunc((state?state:modalCurrentView.stateView).list[0].main.feels_like - 273.15)} {tempStatus?"°F":"°C"}             
            </div>
        </div>
    )
}
