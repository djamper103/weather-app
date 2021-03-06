import React from 'react'
import { SiTailwindcss } from "react-icons/all";
import { IconContext } from "react-icons";
import style from './widn.module.css'
import { useTypesSelector } from "../../../../hooks/useTypeSelector";


export default function Widn({ state, type = "" }) {

    const { modalCurrentView } = useTypesSelector(modalCurrentView => modalCurrentView.modalView)
    const { modalViewType } = useTypesSelector(modalCurrentView => modalCurrentView.modalView)


    return (
        <div className={modalViewType === 'detailPage' ? style.containerDetailPage : style.container}>
            <IconContext.Provider value={{ color: "#1971bd", size: modalViewType === 'detailPage' ? '2em' : '1.2em' }}>
                <SiTailwindcss />
            </IconContext.Provider>
            <div className={style.containerMain}>
                <div>{(state ? state : modalCurrentView).list[0].wind.speed} <span>m/s</span></div>
                <div>Widn</div>
            </div>
        </div>
    )
}
