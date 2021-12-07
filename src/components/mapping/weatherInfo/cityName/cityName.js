import React from 'react'
import style from './cityName.module.css'


export default function CityName({ state,type }) {

    let options = { weekday: 'short' }
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return (
        <div className={type==='detailPage'?style.containerDetailPage:style.container}>
            <div className={type==='detailPage'?style.cityNameDetailPage:style.cityName}>
                {state.city.name} {state.city.country}
            </div>
            <div className={type==='detailPage'?style.dateDetailPage:style.date}>
                {new Intl.DateTimeFormat('en-US', options).format(new Date(state.list[0].dt_txt.split("-").join(".")).getDay())},
                {months[(new Date(state.list[0].dt_txt.split("-").join(".")).getMonth())]},
                {state.list[0].dt_txt.slice(11, 16)}
            </div>
        </div>
    )
}
