import React from 'react'
import { FaSun, AiFillCloud, BsFillCloudSnowFill, BsFillCloudRainHeavyFill } from "react-icons/all";
import { IconContext } from "react-icons";
import style from './weatherSky.module.css'
import { useTypesSelector } from "../../../../hooks/useTypeSelector";


export default function WeatherSky({ state }) {

    const { modalCurrentView } = useTypesSelector(modalCurrentView => modalCurrentView.modalView)
    const { modalViewType } = useTypesSelector(modalCurrentView => modalCurrentView.modalView)


    return (
        <div className={modalViewType === "detailPage" ? style.containerDatailPage : style.container}>
            {
                (state ? state : modalCurrentView).list[0].weather[0].main === "Clear" ?
                    <div>
                        <IconContext.Provider value={{ color: "#ffd55c", size: "2em" }}>
                            <FaSun />
                        </IconContext.Provider>
                        <div>{"Sunny"}</div>
                    </div>
                    :
                    <div>
                        <IconContext.Provider value={{ color: "#459de9", size: "2em" }}>
                            {
                                (state ? state : modalCurrentView).list[0].weather[0].main === "Snow" ? <BsFillCloudSnowFill />
                                    : (state ? state : modalCurrentView).list[0].weather[0].main === "Rain" ? <BsFillCloudRainHeavyFill />
                                        : <AiFillCloud />
                            }

                        </IconContext.Provider>
                        <div >{(state ? state : modalCurrentView).list[0].weather[0].main}</div>
                    </div>
            }
        </div>
    )
}
