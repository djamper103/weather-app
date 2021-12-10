import { cityNameReducer } from './cityNameReducer';
import { combineReducers } from "redux";
import { cityDataReducer } from './cityData';
import { cityNameInputReducer } from './cityNameImput';
import { modalViewReducer } from './modalViewReducer';
import { tempStatusReducer } from './tempStatus';


export const rootReducer = combineReducers({
    cityName: cityNameReducer,
    cityData: cityDataReducer,
    cityNameInput: cityNameInputReducer,
    modalView: modalViewReducer,
    tempStatus: tempStatusReducer
})


export type RootState = ReturnType<typeof rootReducer>