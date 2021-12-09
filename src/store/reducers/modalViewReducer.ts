import { ModalViewActions, ModalViewActionTypes, ModalViewState } from "../types/modalData"

const initialState:ModalViewState={
    modalIsActive:false,
    modalCurrentView:{}
}


export const modalViewReducer=(state=initialState,action:ModalViewActions):ModalViewState=>{
    switch(action.type){
        case ModalViewActionTypes.MODAL_ACTIVE:
            return{
                modalIsActive:action.payload,
                modalCurrentView:state.modalCurrentView
            }
        case ModalViewActionTypes.CURRENT_VIEW:
            return{
                modalIsActive:state.modalIsActive,
                modalCurrentView:action.payload
            }
        default:
            return state
    }
}