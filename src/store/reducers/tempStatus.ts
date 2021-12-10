import { TempStatusActions, TempStatusActionTypes, TepmStatusState } from "../types/tempStatus"


const initialState: TepmStatusState = {
    tempStatus: false
}


export const tempStatusReducer = (state = initialState, action: TempStatusActions): TepmStatusState => {
    switch (action.type) {
        case TempStatusActionTypes.TEMP_STATUS:
            return {
                tempStatus: action.payload
            }
        default:
            return state
    }
}