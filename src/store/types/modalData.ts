export enum ModalViewActionTypes{
    MODAL_ACTIVE="MODAL_ACTIVE",
    CURRENT_VIEW="CURRENT_VIEW"
}

interface ModalActiveAction{
    type:ModalViewActionTypes.MODAL_ACTIVE;
    payload:boolean;
}

interface ModalCurrentViewAction{
    type:ModalViewActionTypes.CURRENT_VIEW;
    payload:Object;
}


export type ModalViewActions=ModalActiveAction|ModalCurrentViewAction


export interface ModalViewState{
    modalIsActive:boolean,
    modalCurrentView:Object
}