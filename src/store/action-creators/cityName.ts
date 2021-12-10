import { CityNameActionTypes, CityNameActions } from "../types/cityName"
import { Dispatch } from "redux"


export const cityNameDefault = (payload: any[]) => {
    return async (dispatch: Dispatch<CityNameActions>) => {
        try {
            dispatch({
                type: CityNameActionTypes.DEFAULT_CITY_NAME,
                payload: payload
            })
        } catch (e) {

        }
    }
}

export const deleteCityName = (payload: "") => {
    return async (dispatch: Dispatch<CityNameActions>) => {
        try {
            dispatch({
                type: CityNameActionTypes.DELETE_CITY_NAME,
                payload: payload
            })
        } catch (e) {

        }
    }
}

export const addCityName = (payload: any[]) => {
    return async (dispatch: Dispatch<CityNameActions>) => {
        try {
            dispatch({
                type: CityNameActionTypes.ADD_CITY_NAME,
                payload: payload
            })
        } catch (e) {

        }
    }
}