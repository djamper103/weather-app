import React from 'react'
import style from './cityName.module.css'
import { useTypesSelector } from "../../../../hooks/useTypeSelector";


export default function CityName({ state }) {

    let options = { weekday: 'short' }
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const { modalCurrentView } = useTypesSelector(modalCurrentView => modalCurrentView.modalView)
    const { modalViewType } = useTypesSelector(modalCurrentView => modalCurrentView.modalView)


    return (
        <div className={modalViewType === 'detailPage' ? style.containerDetailPage : style.container}>
            <div className={modalViewType === 'detailPage' ? style.cityNameDetailPage : style.cityName}>
                {(state ? state : modalCurrentView).city.name} {(state ? state : modalCurrentView).city.country}
            </div>
            <div className={modalViewType === 'detailPage' ? style.dateDetailPage : style.date}>
                {new Intl.DateTimeFormat('en-US', options).format(new Date((state ? state : modalCurrentView).list[0].dt_txt.split("-").join(".")).getDay())},
                {months[(new Date((state ? state : modalCurrentView).list[0].dt_txt.split("-").join(".")).getMonth())]},
                {(state ? state : modalCurrentView).list[0].dt_txt.slice(11, 16)}
            </div>
        </div>
    )
}
