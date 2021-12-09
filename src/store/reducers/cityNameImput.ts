import { CityNameInputActions, CityNameInputState, InputNameActionTypes } from "../types/cityNameInput"


const initialState:CityNameInputState={
    cityNameInput:""
}


export const cityNameInputReducer=(state=initialState,action:CityNameInputActions):CityNameInputState=>{
    switch(action.type){
        case InputNameActionTypes.INPUT_CITY_NAME:
            return{
                cityNameInput:action.payload
            }
        default:
            return state
    }
}