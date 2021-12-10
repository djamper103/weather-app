export enum InputNameActionTypes{
    INPUT_CITY_NAME="INPUT_CITY_NAME",
}

interface CityNameInputAction{
    type:InputNameActionTypes.INPUT_CITY_NAME;
    payload:string;
}

export type CityNameInputActions=CityNameInputAction

export interface CityNameInputState{
    cityNameInput:string,
}