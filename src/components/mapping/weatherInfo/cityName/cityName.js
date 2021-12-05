import React from 'react'
import style from './cityName.module.css'


export default function CityName({state}) {

    let options = { weekday: 'short'}
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return (
        <div className={style.container}>
                                <div className={style.cityName}>
                                    {state.city.name} {state.city.country}
                                </div>
                                <div className={style.date}>
                                    {new Intl.DateTimeFormat('en-US', options).format(new Date(state.list[0].dt_txt.split("-").join(".")).getDay())},
                                    {months[(new Date(state.list[0].dt_txt.split("-").join(".")).getMonth())]},
                                    {state.list[0].dt_txt.slice(11, 16)}
                                </div>
        </div>
    )
}
