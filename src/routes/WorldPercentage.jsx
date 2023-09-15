import React from 'react'
import data from '../data.js'
import { BarChart, Bar, ResponsiveContainer, CartesianGrid, Tooltip, YAxis, XAxis } from 'recharts'

const toPercent = (decimal) => `${(decimal * 100).toFixed(0)}%`

const CustomTooltip = ({ active, payload, label }) => {
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
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data.countries}
          margin={{
            top: 62,
            right: 50,
            left: 40,
            bottom: 20
          }}
        >
          <CartesianGrid vertical={false} stroke='#999'/>
          <YAxis stroke='#222' label={{ value: 'World population in %', angle: -90, position: 'left' }} tickFormatter={toPercent}/>
          <XAxis stroke='#222' tick={0}/>
          <Tooltip cursor={{ stroke: '#5060E9' }} content={<CustomTooltip />} 
          wrapperStyle={{outline: "none", border: "1px solid #5060E9", padding: "8px" ,lineHeight: 1.25, backgroundColor: 'white'}}/>
          <Bar dataKey="worldPercentage" fill="#5060E9" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}