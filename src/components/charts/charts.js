import React,{useState,useEffect} from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


export default function Charts({state}) {

    const [data,setData]=useState()

    useEffect(()=>{
        let newData=[]
        state.list.forEach((el,index) => {
            if(index%4===0){
                let a={
                    temp:Math.trunc(el.main.temp - 273.15),
                    time:el.dt_txt.slice(5, 11).replace("-","."),
                }
                newData.push(a)
            }
        });
        setData(newData)
    },[])
    
    console.log(data)

    return (
        <ResponsiveContainer width="90%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 15,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          
          <XAxis dataKey="time" tick={{fill:"black"}}/>
          <YAxis tick={{fill:"black"}} />
          <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false}/>
          <Line type="monotone" dataKey="temp" stroke="#8884d8" strokeWidth="5" dot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 2,r:5}} activeDot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 5,r:10}} />
          
        </LineChart>
      </ResponsiveContainer>
    )
}
