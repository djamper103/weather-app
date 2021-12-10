import React from 'react'
import {WiHumidity} from "react-icons/all";
import { IconContext } from "react-icons";
import style from './humidity.module.css'
import { useTypesSelector } from "../../../../hooks/useTypeSelector";


export default function Humidity({state,type=""}) {

    const {modalCurrentView}=useTypesSelector(modalCurrentView=>modalCurrentView.modalView)
    const {modalViewType}=useTypesSelector(modalCurrentView=>modalCurrentView.modalView)

    return (
            <div className={modalViewType==='detailPage'?style.containerDetailPage:style.container}>
                <IconContext.Provider value={{ color: "#1971bd",size:modalViewType==='detailPage'?'2em':'1.4em'}}>
                    <WiHumidity/>
                </IconContext.Provider>
                <div className={style.containerMain}>
                    <div>{(state?state:modalCurrentView.stateView).list[0].main.humidity} <span>%</span></div>
                    <div>Humidity</div>
                </div>   
            </div>
    )
}
