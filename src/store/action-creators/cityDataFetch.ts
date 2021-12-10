import {Dispatch} from "redux"
import axios from "axios"
import { CityDataActions, CityDataActionTypes } from "../types/cityData"

const apiKey = "82207646ff9e6f42932e9fc60a8799e6"


export const cityDataFetch=(payload: any[])=>{
    return async (dispatch:Dispatch<CityDataActions>)=>{
        try{
            let cityDataAll: any[]=[]
            for(const name of payload){
                await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${apiKey}`)
                .then(response => {
                    cityDataAll.push(response.data)
                })
            }
            dispatch({
                type:CityDataActionTypes.FETCH_CITY_DATA,
                payload:cityDataAll
            })
        }catch(e){

        }
    }
}