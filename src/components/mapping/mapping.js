import React,{useState,useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import style from './mapping.module.css'


export default function Mapping({state}) {
    
    const [tempStatus,setTempStatus]=useState(false)

    return (
        <div className={style.container}>
            {
                    state ? state.map((el,index) => {
                        return <div key={el.city.name} className={style.containerMain}>
                        <div>
                            {el.city.name} {el.city.country}
                        </div>
                            <div>
                                {el.list.slice(0, 8).map(el1=>{
                                    return <div key={uuidv4()}>
                                        <div>{el1.dt_txt}  :</div>
                                        <div onClick={()=>setTempStatus(!tempStatus)}>  {tempStatus?el1.main.temp:Math.trunc(el1.main.temp - 273.15)} {tempStatus?"F":"C"}</div>
                                    </div>
                                    })
                                }
                            </div>
                        </div>
                    }) : null
                }
        </div>
    )
}
