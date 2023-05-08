import React, { useState } from 'react'
import data from '../data.js'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import CountryDropdown from '../components/CountryDropdown.jsx'

export default function Timeline() {

  let [noDropdownActive, setNoDropdownActive] = useState(true)
  let [selectedCountry, setSelectedCountry] = useState("Germany")
  let country = data.countries.filter(word => word.country === selectedCountry)
  let countryData = []
  const years = [1980, 2000, 2010, 2023, 2030, 2050]
  const popCountYears = years.map(year => {
    return 'pop' + year
  })

  function disableTooltip() {
    setNoDropdownActive(false)
  }

  function activateTooltip() {
    setNoDropdownActive(true)
  }

  function handleChange(selectedOption) {
    setSelectedCountry(selectedOption.value)
  }

  for(let i = 0; i < years.length; i++) {
    const popAtYear = {
      "Name": country[0].country,
      "Population": country[0][popCountYears[i]] / 1000000,
      "Year": years[i]
    }
    countryData.push(popAtYear)
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">Year {`${label}`}</p>
          <p className="desc">Population:
            {` ${(payload[0].value > 1000 ? (payload[0].value * 0.001).toFixed(1)
            : payload[0].value > 1 ? (payload[0].value).toFixed(1)
            : payload[0].value > 0.001 ? (payload[0].value * 1000).toFixed(1)
            : (payload[0].value * 1000000).toFixed(0))}`}
            {payload[0].value > 1000 ? ' billion' 
            : payload[0].value > 1 ? ' million' 
            : payload[0].value > 0.001 ? ' thousand'
            : ' hundred'}
          </p>
        </div>
      );
    }
  
    return null;
  };

  return <>
    <div className='container'>
      <div className='content-title'>Timeline:</div>

      <CountryDropdown handleChange={handleChange} disableTooltip={disableTooltip} activateTooltip={activateTooltip} />

      <ResponsiveContainer width="100%" height="70%">
        <LineChart data={countryData} 
          margin={{
            top: 0,
            right: 50,
            left: 40,
            bottom: 0
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey="Year"/>
          <YAxis 
            dataKey="x" 
            type='number' 
            label={{ value: 'Population in millions', angle: -90, position: 'left' }}
            ticks={countryData[5].Population > 500 ? [0, 500, 1000, 1500, 2000]
            : countryData[5].Population > 100 && countryData[0].Population < 500 ? [0, 100, 200, 300, 500]
            : countryData[5].Population > 10 && countryData[0].Population < 100 ? [0, 10, 30, 50, 100]
            : countryData[5].Population > 1 && countryData[0].Population < 10 ? [0, 1, 3, 5, 10]
            : [0, 0.1, 0.3, 0.5, 1]} 
            domain={countryData[5].Population > 500 ? [0, 2000]
            : countryData[5].Population > 100 && countryData[0].Population < 500 ? [0, 500]
            : countryData[5].Population > 10 && countryData[0].Population < 100 ? [0, 100]
            : countryData[5].Population > 1 && countryData[0].Population < 10 ? [0, 10]
            : [0, 1]} 
          />
          {noDropdownActive && <Tooltip cursor={{ stroke: '#5060E9' }} content={<CustomTooltip />} 
            wrapperStyle={{outline: "none", border: "1px solid #5060E9", padding: "0.5rem" ,
            lineHeight: 0.5, backgroundColor: 'white'}}
          />}
          <Line type="monotone" dataKey="Population" stroke="#5060E9" fill="#5060E9" isAnimationActive={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </>
}