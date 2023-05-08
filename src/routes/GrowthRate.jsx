import React from 'react'
import data from '../data.js'
import { BarChart, Bar, ResponsiveContainer, CartesianGrid, Tooltip, YAxis } from 'recharts'

const sortedData = [...data.countries].sort(function(a, b) {
  return a.country.localeCompare(b.country)
});

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">Country: {`${payload[0].payload.country}`}</p>
        <p className="desc">Growth Rate: {`${(payload[0].value * 100).toFixed(2)}`}%</p>
      </div>
    );
  }

  return null;
};

export default function GrowthRate() {
  return (
    <div className='container'>
      <div className='content-title'>Growth Rate:</div>

      <ResponsiveContainer width="100%" height="70%">
        <BarChart data={sortedData}
          margin={{
            top: 62,
            right: 50,
            left: 40,
            bottom: 0
          }}
        >
          <CartesianGrid vertical={false} />
          <YAxis label={{ value: 'Growth rate in %', angle: -90, position: 'left' }}/>
          <Tooltip cursor={{ stroke: '#5060E9' }} content={<CustomTooltip />} 
          wrapperStyle={{outline: "none", border: "1px solid #5060E9", padding: "0.5rem" ,lineHeight: 0.5, backgroundColor: 'white'}}/>
          <Bar dataKey="growthRate" fill="#5060E9" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
