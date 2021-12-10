import { Dispatch } from "redux"
import { CityNameInputActions, InputNameActionTypes } from "../types/cityNameInput"


export const cityInput = (payload: string) => {
    return async (dispatch: Dispatch<CityNameInputActions>) => {
        try {
            dispatch({
                type: InputNameActionTypes.INPUT_CITY_NAME,
                payload: payload
            })
        } catch (e) {

        }
    }
}