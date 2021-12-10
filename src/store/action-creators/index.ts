import * as cityDataFetch from "./cityDataFetch"
import * as cityNameDefault from "./cityName"
import * as deleteCityName from "./cityName"
import * as addCityName from "./cityName"
import * as cityInput from "./cityNameInput"
import * as modalActive from "./modalView"
import * as modalCurrentViewActionCreators from "./modalView"
import * as tempStatusActionCreator from "./tempStatus"



export default {
    ...cityNameDefault,
    ...deleteCityName,
    ...addCityName,
    ...cityDataFetch,
    ...cityInput,
    ...modalActive,
    ...modalCurrentViewActionCreators,
    ...tempStatusActionCreator
}