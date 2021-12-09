import React, { useState } from 'react'
import style from './input.module.css'
import { useTypesSelector } from "../../hooks/useTypeSelector";
import { useActions } from "../../hooks/useActions";


export default function Input() {


    const {cityNameInput}=useTypesSelector(state=>state.cityNameInput)
    const {cityNameAll}=useTypesSelector(state => state.cityName)

    const {addCityName}=useActions()
    const {cityInput}=useActions()

    const search = () => {
        let cityNameClean=cityNameInput.replace(/\s/g, '').trim().toLowerCase()
        if (cityNameClean.length > 3 && cityNameAll.includes(cityNameClean)===false) {
                    let filteredCityName=[cityNameClean,...cityNameAll]
                    localStorage.setItem('cityNameAll',filteredCityName)
                    addCityName(filteredCityName)
                    cityInput("")
        } else {
            console.log("Input city name")
        }
    }

    return (
        <div className={style.inputContainer}>
            <div className={style.input}>
                <input value={cityNameInput} onChange={(event) => cityInput(event.target.value)} />
            </div>

            <div className={style.inputButton}>
                <button onClick={()=>search()}>Search</button>
            </div>
        </div>
    )
}
