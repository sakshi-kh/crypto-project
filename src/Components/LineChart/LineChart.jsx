import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'
const LineChart = ({historicalData}) => {
    const [data,setData]=useState([["Date","prices"]]);
useEffect(()=>{
    let dataCopy=[["Date","prices"]];
    if(historicalData.prices){
       historicalData.prices.map((item)=>{
        dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
       })
       setData(dataCopy);
    }
},[historicalData])
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      legendToggle
    />
  )
}

export default LineChart
