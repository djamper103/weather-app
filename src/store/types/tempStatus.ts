export enum TempStatusActionTypes {
    TEMP_STATUS = "TEMP_STATUS",
}

interface TempStatusAction {
    type: TempStatusActionTypes.TEMP_STATUS;
    payload: boolean;
}


export type TempStatusActions = TempStatusAction

export interface TepmStatusState {
    tempStatus: boolean
}