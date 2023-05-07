import React from 'react'
import data from '../data.js'
import { BarChart, Bar, ResponsiveContainer, CartesianGrid, Tooltip, YAxis } from 'recharts'

const CustomTooltip = ({ active, payload, label }) => {
  console.log(payload[0])
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">Rank {`${label + 1} : ${payload[0].payload.country}`}</p>
        <p className="desc">World Percentage: {`${(payload[0].value * 100).toFixed(2)}`}%</p>
      </div>
    );
  }

  return null;
};

export default function WorldPercentage() {
  return (
    <div className='container'>
      <div className='content-title'>World Percentage:</div>

      <ResponsiveContainer width="100%" height="70%">
        <BarChart data={data.countries}
          margin={{
            top: 50,
            right: 50,
            left: 40,
            bottom: 0
          }}
        >
          <CartesianGrid vertical={false} />
          <YAxis label={{ value: 'Population in percent', angle: -90, position: 'left' }}/>
          <Tooltip cursor={{ stroke: '#5060E9' }} content={<CustomTooltip />} 
          wrapperStyle={{outline: "none", border: "1px solid #5060E9", padding: "0.5rem" ,lineHeight: 0.5}}/>
          <Bar dataKey="worldPercentage" fill="#5060E9" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}