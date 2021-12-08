import { cityNameReducer } from './cityNameReducer';
import { combineReducers } from "redux";
import { cityDataReducer } from './cityData';
import { cityNameInputReducer } from './cityNameINput';


export const rootReducer=combineReducers({
    cityName:cityNameReducer,
    cityData:cityDataReducer,
    cityNameInput:cityNameInputReducer
})


export type RootState=ReturnType<typeof rootReducer>