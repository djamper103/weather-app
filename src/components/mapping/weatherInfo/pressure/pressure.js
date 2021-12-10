import React from 'react'
import {CgArrowRightO} from "react-icons/all";
import { IconContext } from "react-icons";
import style from './pressure.module.css'
import { useTypesSelector } from "../../../../hooks/useTypeSelector";


export default function Pressure({state,type=""}) {

    const {modalCurrentView}=useTypesSelector(modalCurrentView=>modalCurrentView.modalView)
    const {modalViewType}=useTypesSelector(modalCurrentView=>modalCurrentView.modalView)

    return (
        <div className={modalViewType==='detailPage'?style.containerDetailPage:style.container}>
                <IconContext.Provider value={{ color: "#1971bd",size:modalViewType==='detailPage'?'2em':'1.2em' }}>
                    <CgArrowRightO/>
                </IconContext.Provider>
                <div className={style.containerMain}>
                    <div> {(state?state:modalCurrentView.stateView).list[0].main.pressure} <span>Pa</span></div>
                    <div>Pressure</div>
                </div>   
            </div>
    )
}
