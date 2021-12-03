import React, { useState } from 'react'
import style from './input.module.css'


export default function Input({ search, cityName, setCityName }) {

    return (
        <div className={style.inputContainer}>
            <div className={style.input}>
                <input value={cityName} onChange={(event) => setCityName(event.target.value)} />
            </div>

            <div className={style.inputButton}>
                <button onClick={search}>Search</button>
            </div>
        </div>
    )
}
