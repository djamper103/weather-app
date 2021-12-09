import React,{useState,useEffect} from 'react'
import style from './mapping.module.css'
import TimesOfDay from './weatherInfo/timesOfDay/timesOfDay';
import Humidity from './weatherInfo/humidity/humidity';
import Pressure from './weatherInfo/pressure/pressure';
import Widn from './weatherInfo/widn/widn';
import Temp from './weatherInfo/temp/temp';
import WeatherSky from './weatherInfo/weatherSky/weatherSky';
import CityName from './weatherInfo/cityName/cityName';
import Modal from '../modal/modal';
import { useTypesSelector } from "../../hooks/useTypeSelector";
import { useActions } from "../../hooks/useActions";



export default function Mapping() {


    const {cityData}=useTypesSelector(state=>state.cityData)

    const {modalActive}=useActions()
    const {modalCurrentView}=useActions()

    const [tempStatus,setTempStatus]=useState(false)



    return (
        <div className={style.container}>
            {
                cityData ? cityData.map((el,index) => {
                        return(
                            <div key={el.city.name} className={Math.trunc(el.list[0].main.temp - 273.15)>0?style.containerMain:style.containerMain1}
                            onClick={()=>{
                                modalCurrentView(el)
                                debugger
                                modalActive(true)
                            }}>
                                <div style={{display:"flex",marginBottom:"2%",justifyContent:"space-between"}}>
                                    <CityName state={el}/>

                                    <WeatherSky state={el}/>
                                </div>

                                
                                    <div className={style.containerFooter}>
                                        <Temp type={"modal"} state={el} tempStatus={tempStatus} setTempStatus={setTempStatus}/>
                                        <div className={style.containerWeatherInfo}>
                                            <TimesOfDay state={el}/>
                                            <Widn state={el}/>
                                            <Humidity state={el}/>
                                            <Pressure state={el}/>
                                        </div>

                                    </div>
                            </div>
                        )
                    }) : null
                }

                {
                    modalActive?<Modal />
                    :null
                }

        </div>
    )
}
