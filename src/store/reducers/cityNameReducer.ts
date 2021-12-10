import { CityNameActions, CityNameActionTypes, CityNameAllState } from "../types/cityName"


const initialState: CityNameAllState = {
    cityNameAll: []
}


export const cityNameReducer = (state = initialState, action: CityNameActions): CityNameAllState => {
    switch (action.type) {
        case CityNameActionTypes.DEFAULT_CITY_NAME:
            return {
                cityNameAll: action.payload
            }
        case CityNameActionTypes.DELETE_CITY_NAME:
            let deleteCity = [...state.cityNameAll]
            let filteredCityName = deleteCity.filter(el => el != action.payload.toLowerCase())
            return {
                cityNameAll: filteredCityName
            }
        case CityNameActionTypes.ADD_CITY_NAME:
            return {
                cityNameAll: [action.payload, ...state.cityNameAll]
            }
        default:
            return state
    }
}