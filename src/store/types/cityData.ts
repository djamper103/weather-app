export enum CityDataActionTypes {
    FETCH_CITY_DATA = "FETCH_CITY_DATA",
}

interface CityDataAction {
    type: CityDataActionTypes.FETCH_CITY_DATA;
    payload: any[];
}


export type CityDataActions = CityDataAction

export interface CityDataState {
    cityData: any[]
}