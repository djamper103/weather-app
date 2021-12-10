export enum CityNameActionTypes {
    DEFAULT_CITY_NAME = "DEFAULT_CITY_NAME",
    DELETE_CITY_NAME = "DELETE_CITY_NAME",
    ADD_CITY_NAME = "ADD_CITY_NAME",
    INPUT_CITY_NAME = "INPUT_CITY_NAME"
}

interface CityNameDefaultAction {
    type: CityNameActionTypes.DEFAULT_CITY_NAME;
    payload: any[];
}

interface DeleteCityAction {
    type: CityNameActionTypes.DELETE_CITY_NAME;
    payload: "";
}

interface AddSityAction {
    type: CityNameActionTypes.ADD_CITY_NAME;
    payload: any[];
}


export type CityNameActions = CityNameDefaultAction | DeleteCityAction | AddSityAction

export interface CityNameAllState {
    cityNameAll: any[],
}