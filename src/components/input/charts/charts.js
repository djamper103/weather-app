import React from 'react'
import { VictoryChart, VictoryAxis, VictoryBar, VictoryTheme } from 'victory';


export default function Charts() {

    const data = [
        { day: 1, temp: 5 },
        { day: 2, temp: 2 },
        { day: 3, temp: 1 },
        { day: 5, temp: -2 },
        { day: 6, temp: 3 },
        { day: 7, temp: 5 },
        { day: 8, temp: 6 }
    ];

    // const data = [
    //     {Monday: 1, temp: 5},
    //     {Tuesday: 2, temp: 2},
    //     {Wednesday: 3, temp: 1},
    //     {Thursday: 4, temp: -2},
    //     {Friday: 4, temp: 3},
    //     {Satuday: 4, temp: 5},
    //     {Sunday: 4, temp: 6}
    //   ];
    return (
        <div>
                        {/* <VictoryChart
                // adding the material theme provided with Victory
                theme={VictoryTheme.material}
                domainPadding={20}
            >
                <VictoryAxis
                    tickFormat={["Monday", "Thuesday", "Wednesday", "Thursday","Friday","Saturday","Sunday"]}
                />
                <VictoryAxis
                    dependentAxis
                    tickFormat={(x) => (`${x} C`)}
                />

                <VictoryBar
                    data={data}
                    x="day"
                    y="temp"
                />
            </VictoryChart> */}
        </div>
    )
}
