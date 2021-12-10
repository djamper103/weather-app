export enum ModalViewActionTypes {
    MODAL_ACTIVE = "MODAL_ACTIVE",
    CURRENT_VIEW = "CURRENT_VIEW",
    MODAL_VIEW_TYPE = "MODAL_VIEW_TYPE"
}

interface ModalActiveAction {
    type: ModalViewActionTypes.MODAL_ACTIVE;
    payload: boolean;
}

interface ModalCurrentViewAction {
    type: ModalViewActionTypes.CURRENT_VIEW;
    stateView: Object;
    typeView: string;
}


export type ModalViewActions = ModalActiveAction | ModalCurrentViewAction

export interface ModalViewState {
    modalIsActive: boolean,
    modalCurrentView: Object,
    modalViewType: string
}