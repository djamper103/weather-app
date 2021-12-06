import React from 'react'
import Charts from '../charts/charts'
import CityName from '../mapping/weatherInfo/cityName/cityName'
import Humidity from '../mapping/weatherInfo/humidity/humidity'
import Pressure from '../mapping/weatherInfo/pressure/pressure'
import TimesOfDay from '../mapping/weatherInfo/timesOfDay/timesOfDay'
import WeatherSky from '../mapping/weatherInfo/weatherSky/weatherSky'
import Widn from '../mapping/weatherInfo/widn/widn'
import style from './detailPage.module.css'
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import {AiFillHome} from "react-icons/all";


const state = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1638770400,
            "main": {
                "temp": 272.05,
                "feels_like": 268.44,
                "temp_min": 272.05,
                "temp_max": 273.26,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 988,
                "humidity": 98,
                "temp_kf": -1.21
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 90
            },
            "wind": {
                "speed": 2.88,
                "deg": 127,
                "gust": 7.81
            },
            "visibility": 2605,
            "pop": 0.77,
            "rain": {
                "3h": 0.46
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-12-06 06:00:00"
        },
        {
            "dt": 1638781200,
            "main": {
                "temp": 272.68,
                "feels_like": 269.58,
                "temp_min": 272.68,
                "temp_max": 273.93,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 988,
                "humidity": 99,
                "temp_kf": -1.25
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13d"
                }
            ],
            "clouds": {
                "all": 93
            },
            "wind": {
                "speed": 2.49,
                "deg": 119,
                "gust": 6.37
            },
            "visibility": 1953,
            "pop": 0.38,
            "snow": {
                "3h": 0.1
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-12-06 09:00:00"
        },
        {
            "dt": 1638792000,
            "main": {
                "temp": 273.42,
                "feels_like": 270.35,
                "temp_min": 273.42,
                "temp_max": 274.1,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 987,
                "humidity": 100,
                "temp_kf": -0.68
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 97
            },
            "wind": {
                "speed": 2.6,
                "deg": 115,
                "gust": 6.48
            },
            "visibility": 232,
            "pop": 0.57,
            "rain": {
                "3h": 0.18
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-12-06 12:00:00"
        },
        {
            "dt": 1638802800,
            "main": {
                "temp": 274.45,
                "feels_like": 271.09,
                "temp_min": 274.45,
                "temp_max": 274.45,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 986,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.15,
                "deg": 110,
                "gust": 7.94
            },
            "visibility": 155,
            "pop": 0.76,
            "rain": {
                "3h": 0.85
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-12-06 15:00:00"
        },
        {
            "dt": 1638813600,
            "main": {
                "temp": 275.01,
                "feels_like": 271.67,
                "temp_min": 275.01,
                "temp_max": 275.01,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 985,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.27,
                "deg": 118,
                "gust": 9.57
            },
            "visibility": 127,
            "pop": 1,
            "rain": {
                "3h": 1.81
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-12-06 18:00:00"
        },
        {
            "dt": 1638824400,
            "main": {
                "temp": 276.02,
                "feels_like": 273.06,
                "temp_min": 276.02,
                "temp_max": 276.02,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 985,
                "humidity": 99,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.05,
                "deg": 152,
                "gust": 10
            },
            "visibility": 121,
            "pop": 0.36,
            "rain": {
                "3h": 0.28
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-12-06 21:00:00"
        },
        {
            "dt": 1638835200,
            "main": {
                "temp": 276.42,
                "feels_like": 274.51,
                "temp_min": 276.42,
                "temp_max": 276.42,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 984,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.99,
                "deg": 196,
                "gust": 6.13
            },
            "visibility": 112,
            "pop": 0.21,
            "rain": {
                "3h": 0.12
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-12-07 00:00:00"
        },
        {
            "dt": 1638846000,
            "main": {
                "temp": 276.04,
                "feels_like": 273.73,
                "temp_min": 276.04,
                "temp_max": 276.04,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 984,
                "humidity": 99,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.31,
                "deg": 240,
                "gust": 6.04
            },
            "visibility": 83,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-12-07 03:00:00"
        },
        {
            "dt": 1638856800,
            "main": {
                "temp": 275.25,
                "feels_like": 273.13,
                "temp_min": 275.25,
                "temp_max": 275.25,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 985,
                "humidity": 97,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.01,
                "deg": 285,
                "gust": 5.12
            },
            "visibility": 4671,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-12-07 06:00:00"
        },
        {
            "dt": 1638867600,
            "main": {
                "temp": 275.07,
                "feels_like": 272.76,
                "temp_min": 275.07,
                "temp_max": 275.07,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 985,
                "humidity": 96,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.15,
                "deg": 330,
                "gust": 4.08
            },
            "visibility": 8387,
            "pop": 0.9,
            "rain": {
                "3h": 0.45
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-12-07 09:00:00"
        },
        {
            "dt": 1638878400,
            "main": {
                "temp": 275.08,
                "feels_like": 272.56,
                "temp_min": 275.08,
                "temp_max": 275.08,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 985,
                "humidity": 96,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.35,
                "deg": 352,
                "gust": 4.55
            },
            "visibility": 10000,
            "pop": 0.91,
            "rain": {
                "3h": 0.36
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-12-07 12:00:00"
        },
        {
            "dt": 1638889200,
            "main": {
                "temp": 274.77,
                "feels_like": 271.32,
                "temp_min": 274.77,
                "temp_max": 274.77,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 986,
                "humidity": 96,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.35,
                "deg": 0,
                "gust": 6.84
            },
            "visibility": 3234,
            "pop": 0.87,
            "rain": {
                "3h": 0.52
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-12-07 15:00:00"
        },
        {
            "dt": 1638900000,
            "main": {
                "temp": 274.43,
                "feels_like": 270.83,
                "temp_min": 274.43,
                "temp_max": 274.43,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 986,
                "humidity": 97,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.45,
                "deg": 9,
                "gust": 7.37
            },
            "visibility": 242,
            "pop": 0.78,
            "rain": {
                "3h": 0.16
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-12-07 18:00:00"
        },
        {
            "dt": 1638910800,
            "main": {
                "temp": 274.28,
                "feels_like": 270.08,
                "temp_min": 274.28,
                "temp_max": 274.28,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 986,
                "humidity": 96,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.27,
                "deg": 10,
                "gust": 8.35
            },
            "visibility": 5089,
            "pop": 0.56,
            "rain": {
                "3h": 0.34
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-12-07 21:00:00"
        },
        {
            "dt": 1638921600,
            "main": {
                "temp": 274.1,
                "feels_like": 269.86,
                "temp_min": 274.1,
                "temp_max": 274.1,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 987,
                "humidity": 93,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.27,
                "deg": 11,
                "gust": 8.8
            },
            "visibility": 10000,
            "pop": 0.55,
            "rain": {
                "3h": 0.4
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-12-08 00:00:00"
        },
        {
            "dt": 1638932400,
            "main": {
                "temp": 273.81,
                "feels_like": 269.1,
                "temp_min": 273.81,
                "temp_max": 273.81,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 987,
                "humidity": 92,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.93,
                "deg": 18,
                "gust": 10.15
            },
            "visibility": 10000,
            "pop": 0.37,
            "snow": {
                "3h": 0.11
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-12-08 03:00:00"
        },
        {
            "dt": 1638943200,
            "main": {
                "temp": 273.51,
                "feels_like": 268.69,
                "temp_min": 273.51,
                "temp_max": 273.51,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 987,
                "humidity": 91,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.99,
                "deg": 20,
                "gust": 10.75
            },
            "visibility": 10000,
            "pop": 0.39,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-12-08 06:00:00"
        },
        {
            "dt": 1638954000,
            "main": {
                "temp": 273.51,
                "feels_like": 268.6,
                "temp_min": 273.51,
                "temp_max": 273.51,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 986,
                "humidity": 94,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.14,
                "deg": 17,
                "gust": 10.9
            },
            "visibility": 6047,
            "pop": 1,
            "rain": {
                "3h": 2.82
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-12-08 09:00:00"
        },
        {
            "dt": 1638964800,
            "main": {
                "temp": 273.32,
                "feels_like": 268.29,
                "temp_min": 273.32,
                "temp_max": 273.32,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 985,
                "humidity": 98,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.28,
                "deg": 11,
                "gust": 11.2
            },
            "visibility": 4103,
            "pop": 1,
            "rain": {
                "3h": 5.58
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-12-08 12:00:00"
        },
        {
            "dt": 1638975600,
            "main": {
                "temp": 273.53,
                "feels_like": 268.88,
                "temp_min": 273.53,
                "temp_max": 273.53,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 985,
                "humidity": 99,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.71,
                "deg": 15,
                "gust": 10.24
            },
            "visibility": 1013,
            "pop": 1,
            "rain": {
                "3h": 4.33
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-12-08 15:00:00"
        },
        {
            "dt": 1638986400,
            "main": {
                "temp": 273.81,
                "feels_like": 269.93,
                "temp_min": 273.81,
                "temp_max": 273.81,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 985,
                "humidity": 98,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.64,
                "deg": 20,
                "gust": 8.03
            },
            "visibility": 674,
            "pop": 1,
            "rain": {
                "3h": 1.59
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-12-08 18:00:00"
        },
        {
            "dt": 1638997200,
            "main": {
                "temp": 273.96,
                "feels_like": 270.25,
                "temp_min": 273.96,
                "temp_max": 273.96,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 985,
                "humidity": 98,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.46,
                "deg": 10,
                "gust": 6.85
            },
            "visibility": 351,
            "pop": 0.92,
            "rain": {
                "3h": 0.68
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-12-08 21:00:00"
        },
        {
            "dt": 1639008000,
            "main": {
                "temp": 273.91,
                "feels_like": 270.31,
                "temp_min": 273.91,
                "temp_max": 273.91,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 986,
                "humidity": 98,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.3,
                "deg": 7,
                "gust": 6.57
            },
            "visibility": 4808,
            "pop": 1,
            "rain": {
                "3h": 0.74
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-12-09 00:00:00"
        },
        {
            "dt": 1639018800,
            "main": {
                "temp": 273.9,
                "feels_like": 270.71,
                "temp_min": 273.9,
                "temp_max": 273.9,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 987,
                "humidity": 98,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.82,
                "deg": 357,
                "gust": 5.58
            },
            "visibility": 8160,
            "pop": 0.54,
            "rain": {
                "3h": 0.51
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-12-09 03:00:00"
        },
        {
            "dt": 1639029600,
            "main": {
                "temp": 274.01,
                "feels_like": 271.51,
                "temp_min": 274.01,
                "temp_max": 274.01,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 988,
                "humidity": 97,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.16,
                "deg": 356,
                "gust": 4.21
            },
            "visibility": 10000,
            "pop": 0.22,
            "rain": {
                "3h": 0.16
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-12-09 06:00:00"
        },
        {
            "dt": 1639040400,
            "main": {
                "temp": 274.23,
                "feels_like": 271.66,
                "temp_min": 274.23,
                "temp_max": 274.23,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 989,
                "humidity": 96,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.26,
                "deg": 330,
                "gust": 3.63
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-12-09 09:00:00"
        },
        {
            "dt": 1639051200,
            "main": {
                "temp": 274.41,
                "feels_like": 272.41,
                "temp_min": 274.41,
                "temp_max": 274.41,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 989,
                "humidity": 94,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.8,
                "deg": 335,
                "gust": 2.75
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-12-09 12:00:00"
        },
        {
            "dt": 1639062000,
            "main": {
                "temp": 274.6,
                "feels_like": 274.6,
                "temp_min": 274.6,
                "temp_max": 274.6,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 990,
                "humidity": 96,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 97
            },
            "wind": {
                "speed": 0.77,
                "deg": 64,
                "gust": 1.32
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-12-09 15:00:00"
        },
        {
            "dt": 1639072800,
            "main": {
                "temp": 274.87,
                "feels_like": 274.87,
                "temp_min": 274.87,
                "temp_max": 274.87,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 991,
                "humidity": 96,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 97
            },
            "wind": {
                "speed": 1.18,
                "deg": 156,
                "gust": 1.41
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-12-09 18:00:00"
        },
        {
            "dt": 1639083600,
            "main": {
                "temp": 275.43,
                "feels_like": 273.48,
                "temp_min": 275.43,
                "temp_max": 275.43,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 990,
                "humidity": 96,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 1.89,
                "deg": 119,
                "gust": 3.71
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-12-09 21:00:00"
        },
        {
            "dt": 1639094400,
            "main": {
                "temp": 275.46,
                "feels_like": 272.74,
                "temp_min": 275.46,
                "temp_max": 275.46,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 990,
                "humidity": 98,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 2.63,
                "deg": 125,
                "gust": 7.61
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-12-10 00:00:00"
        },
        {
            "dt": 1639105200,
            "main": {
                "temp": 275.81,
                "feels_like": 272.22,
                "temp_min": 275.81,
                "temp_max": 275.81,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 989,
                "humidity": 95,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 95
            },
            "wind": {
                "speed": 3.87,
                "deg": 131,
                "gust": 10.93
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-12-10 03:00:00"
        },
        {
            "dt": 1639116000,
            "main": {
                "temp": 276.29,
                "feels_like": 272.21,
                "temp_min": 276.29,
                "temp_max": 276.29,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 989,
                "humidity": 92,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 97
            },
            "wind": {
                "speed": 4.9,
                "deg": 115,
                "gust": 13.35
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-12-10 06:00:00"
        },
        {
            "dt": 1639126800,
            "main": {
                "temp": 277.77,
                "feels_like": 273.7,
                "temp_min": 277.77,
                "temp_max": 277.77,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 988,
                "humidity": 94,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.68,
                "deg": 123,
                "gust": 13.41
            },
            "visibility": 10000,
            "pop": 0.04,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-12-10 09:00:00"
        },
        {
            "dt": 1639137600,
            "main": {
                "temp": 278.84,
                "feels_like": 274.86,
                "temp_min": 278.84,
                "temp_max": 278.84,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 986,
                "humidity": 95,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 6.16,
                "deg": 125,
                "gust": 14.5
            },
            "visibility": 10000,
            "pop": 0.28,
            "rain": {
                "3h": 0.17
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2021-12-10 12:00:00"
        },
        {
            "dt": 1639148400,
            "main": {
                "temp": 280.04,
                "feels_like": 276.36,
                "temp_min": 280.04,
                "temp_max": 280.04,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 985,
                "humidity": 91,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 6.24,
                "deg": 133,
                "gust": 14.81
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-12-10 15:00:00"
        },
        {
            "dt": 1639159200,
            "main": {
                "temp": 280.64,
                "feels_like": 277.34,
                "temp_min": 280.64,
                "temp_max": 280.64,
                "pressure": 1008,
                "sea_level": 1008,
                "grnd_level": 985,
                "humidity": 94,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.65,
                "deg": 136,
                "gust": 14.21
            },
            "visibility": 10000,
            "pop": 0.28,
            "rain": {
                "3h": 0.38
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-12-10 18:00:00"
        },
        {
            "dt": 1639170000,
            "main": {
                "temp": 281.44,
                "feels_like": 279.18,
                "temp_min": 281.44,
                "temp_max": 281.44,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 986,
                "humidity": 91,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.74,
                "deg": 169,
                "gust": 9.49
            },
            "visibility": 10000,
            "pop": 0.38,
            "rain": {
                "3h": 0.17
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-12-10 21:00:00"
        },
        {
            "dt": 1639180800,
            "main": {
                "temp": 279.39,
                "feels_like": 277.92,
                "temp_min": 279.39,
                "temp_max": 279.39,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 988,
                "humidity": 97,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.04,
                "deg": 262,
                "gust": 3.8
            },
            "visibility": 10000,
            "pop": 0.11,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-12-11 00:00:00"
        },
        {
            "dt": 1639191600,
            "main": {
                "temp": 277.47,
                "feels_like": 275.07,
                "temp_min": 277.47,
                "temp_max": 277.47,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 989,
                "humidity": 91,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.71,
                "deg": 290,
                "gust": 4.48
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2021-12-11 03:00:00"
        }
    ],
    "city": {
        "id": 696050,
        "name": "Pushcha-Vodytsya",
        "coord": {
            "lat": 50.4529,
            "lon": 30.5103
        },
        "country": "UA",
        "population": 0,
        "timezone": 7200,
        "sunrise": 1638769389,
        "sunset": 1638798911
    }
}

export default function DetailPage() {

    return (
        <div className={style.container}>
            <div className={Math.trunc(state.list[0].main.temp - 273.15) > 0 ? style.containerMainTemp : style.containerMainTemp1}>
                <div className={style.header}>
                    <h3>Current weather</h3>
                    <div>
                        <NavLink to="/">
                            <IconContext.Provider value={{ color: "#1971bd",size:"1.6em"}}>
                                <AiFillHome/>
                            </IconContext.Provider>
                        </NavLink>
                    </div>
                </div>
                <div className={style.currentWeather}>
                        <CityName state={state} type={'detailPage'}/>
                        <WeatherSky state={state} type={'detailPage'}/>
                        <TimesOfDay state={state} type={'detailPage'}/>
                            <Widn state={state} type={'detailPage'}/>
                            <Humidity state={state} type={'detailPage'}/>
                            <Pressure state={state} type={'detailPage'}/>
                </div>
                <h3>Weather forecast for 7 days </h3>
                <div className={style.chart}>
                    <Charts state={state} type={'detailPage'} />
                </div>
            </div>
        </div>
    )
}
