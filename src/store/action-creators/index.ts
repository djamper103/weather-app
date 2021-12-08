import * as cityDataFetch from "./cityDataFetch"
import * as cityNameDefault from "./cityName"
import * as deleteCityName from "./cityName"
import * as addCityName from "./cityName"
import * as cityInput from "./cityNameInput"


export default {
    ...cityNameDefault,
    ...deleteCityName,
    ...addCityName,
    ...cityDataFetch,
    ...cityInput
}