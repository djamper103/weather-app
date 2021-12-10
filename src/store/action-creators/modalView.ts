import { Dispatch } from "redux"
import { ModalViewActions, ModalViewActionTypes } from "../types/modalData"


export const modalActive = (payload: boolean) => {
    return async (dispatch: Dispatch<ModalViewActions>) => {
        try {
            dispatch({
                type: ModalViewActionTypes.MODAL_ACTIVE,
                payload: payload
            })
        } catch (e) {

        }
    }
}


export const modalCurrentViewActionCreators = (stateView: Object, typeView: string) => {
    return async (dispatch: Dispatch<ModalViewActions>) => {
        try {
            dispatch({
                type: ModalViewActionTypes.CURRENT_VIEW,
                stateView,
                typeView
            })
        } catch (e) {

        }
    }
}