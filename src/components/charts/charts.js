import React, { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTypesSelector } from "../../hooks/useTypeSelector";


export default function Charts() {

  const { modalCurrentView } = useTypesSelector(modalCurrentView => modalCurrentView.modalView)
  const { modalViewType } = useTypesSelector(modalCurrentView => modalCurrentView.modalView)

  const [data, setData] = useState()


  useEffect(() => {
    let newData = []
    modalCurrentView.stateView.list.forEach((el, index) => {
      if (modalViewType === "detailPage") {
        let a = {
          temp: Math.trunc(el.main.temp - 273.15),
          time: el.dt_txt.slice(5, 11).replace("-", "."),
        }
        newData.push(a)
      } else {
        if (index <= 6) {
          let a = {
            temp: Math.trunc(el.main.temp - 273.15),
            time: el.dt_txt.slice(11, 16).replace("-", "."),
          }
          newData.push(a)
        }
      }

    });
    setData(newData)
  }, [])

  console.log(data)

  return (
    <ResponsiveContainer width="100%" aspect={2}>
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

        <XAxis dataKey="time" tick={{ fill: "black" }} />
        <YAxis tick={{ fill: "black" }} />
        <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false} />
        <Line type="monotone" dataKey="temp" stroke="#8884d8" strokeWidth="5" dot={false} activeDot={false} />

      </LineChart>
    </ResponsiveContainer>
  )
}
