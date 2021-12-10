import { ModalViewActions, ModalViewActionTypes, ModalViewState } from "../types/modalData"

const initialState: ModalViewState = {
    modalIsActive: false,
    modalCurrentView: {},
    modalViewType: ""
}


export const modalViewReducer = (state = initialState, action: ModalViewActions): ModalViewState => {
    switch (action.type) {
        case ModalViewActionTypes.MODAL_ACTIVE:
            return {
                modalIsActive: action.payload,
                modalCurrentView: state.modalCurrentView,
                modalViewType: state.modalViewType
            }
        case ModalViewActionTypes.CURRENT_VIEW:
            return {
                modalIsActive: state.modalIsActive,
                modalCurrentView: action.stateView,
                modalViewType: action.typeView
            }
        default:
            return state
    }
}