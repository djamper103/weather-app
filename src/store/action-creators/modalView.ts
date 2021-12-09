import {Dispatch} from "redux"
import { ModalViewActions, ModalViewActionTypes } from "../types/modalData"


export const modalActive=(payload: boolean)=>{
    return async (dispatch:Dispatch<ModalViewActions>)=>{
        try{
            dispatch({
                type:ModalViewActionTypes.MODAL_ACTIVE,
                payload:payload
            })
        }catch(e){

        }
    }
}


export const modalCurrentView=(payload: object)=>{
    return async (dispatch:Dispatch<ModalViewActions>)=>{
        try{
            dispatch({
                type:ModalViewActionTypes.CURRENT_VIEW,
                payload:payload
            })
        }catch(e){

        }
    }
}