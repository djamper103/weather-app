import { Dispatch } from "redux"
import { TempStatusActions, TempStatusActionTypes } from "../types/tempStatus"


export const tempStatusActionCreator = (payload: boolean) => {
    return async (dispatch: Dispatch<TempStatusActions>) => {
        try {
            dispatch({
                type: TempStatusActionTypes.TEMP_STATUS,
                payload: payload
            })
        } catch (e) {

        }
    }
}
