import React, { useEffect, useState } from "react"
import { usePosition } from 'use-position';
import Input from "./input/input";
import Mapping from "./mapping/mapping";
import { useTypesSelector } from "../hooks/useTypeSelector";
import { useActions } from "../hooks/useActions";


export default function Currentdata() {

    const {cityNameAll}=useTypesSelector(state => state.cityName)

    const {cityNameDefault}=useActions()
    const {cityDataFetch}=useActions()

    //Default sity name
    useEffect(()=>{
        if(localStorage.getItem('cityNameAll')){
            let localSityName=localStorage.getItem('cityNameAll').split(",")
            cityNameDefault(localSityName)
        }else{
            localStorage.setItem('cityNameAll', ['kyiv','tokyo', 'berlin', 'london', 'beijing'])
        }
    },[])

    //Data fetch
    useEffect( () => {  
        if(cityNameAll.length>0){
            cityDataFetch(cityNameAll)
        }else{
            localStorage.setItem('cityNameAll', ['kyiv','tokyo', 'berlin', 'london', 'beijing'])
            let localSityName=localStorage.getItem('cityNameAll').split(",")
            cityDataFetch(localSityName)
        }
    }, [cityNameAll]);

    return (
        <div>
                <Input/>
                <Mapping/>
        </div>
    );
}


    // const { latitude, longitude, error } = usePosition();
    

    // useEffect(() => {
    //     if (latitude && longitude && !error) {
    //         axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
    //             .then(response => {
    //                 if(cityNameAll.includes(response.data.city.name)===false){
    //                     setCityNameAll([response.data.city.name.toLowerCase(),...cityNameAll])
    //                     setState([response.data,...state])
    //                 } 
    //             })
    //     }
    // }, [latitude, longitude]);