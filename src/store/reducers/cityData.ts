import { CityDataState,CityDataActions,CityDataActionTypes } from "../types/cityData"


const initialState:CityDataState={
    cityData:[]
}


export const cityDataReducer=(state=initialState,action:CityDataActions):CityDataState=>{
    switch(action.type){
        case CityDataActionTypes.FETCH_CITY_DATA:
            return{
                cityData:action.payload
            }
        default:
            return state
    }
}