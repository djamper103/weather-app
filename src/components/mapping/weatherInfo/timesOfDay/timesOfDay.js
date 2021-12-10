import React from 'react'
import {FaSun,GiNightSleep} from "react-icons/all";
import { IconContext } from "react-icons";
import style from './timeOfDay.module.css'
import { useTypesSelector } from "../../../../hooks/useTypeSelector";


export default function TimesOfDay({state}) {

    const {modalCurrentView}=useTypesSelector(modalCurrentView=>modalCurrentView.modalView)
    const {modalViewType}=useTypesSelector(modalCurrentView=>modalCurrentView.modalView)

    return(
        <div className={modalViewType==='detailPage'?style.containerDetailPage:null}>
            {(state?state:modalCurrentView.stateView).list[0].sys.pod.includes('d')?
            <div className={modalViewType==='modal'?style.containerModal:style.container}>
                <IconContext.Provider value={{ color: "#ffd55c",size:modalViewType==='detailPage'?'2em':'1em'  }}>
                    <FaSun/>
                </IconContext.Provider>
                <div className={style.containerMain}>
                    <div>{`${new Date((state?state:modalCurrentView.stateView).city.sunset * 1000).getHours()} : ${new Date((state?state:modalCurrentView.stateView).city.sunset * 1000).getMinutes()}`}</div>
                    <div>{(state?state:modalCurrentView.stateView).list[0].sys.pod.includes('d')?"Sunset":"Sunrise"}</div>
                </div>
            </div>
            :
            <div className={modalViewType==='modal'?style.containerModal:style.container}>
                <IconContext.Provider value={{ color: "#1971bd",size:modalViewType==='detailPage'?'2em':'1em' }}>
                    <GiNightSleep/>
                </IconContext.Provider>
                <div className={style.containerMain}>
                    <div>{`${new Date((state?state:modalCurrentView.stateView).city.sunrise * 1000).getHours()} : ${new Date((state?state:modalCurrentView.stateView).city.sunrise * 1000).getMinutes()}`}</div>
                    <div>{(state?state:modalCurrentView.stateView).list[0].sys.pod.includes('d')?"Sunset":"Sunrise"}</div>
                </div>
            </div>
            }
        </div>
    ) 
}
