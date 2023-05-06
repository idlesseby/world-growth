import React, { useState } from 'react'
import data from '../data.js'
import { CartesianGrid, Label, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import CountryDropdown from '../components/CountryDropdown.jsx'

export default function Timeline() {

  let [selectedCountry, setSelectedCountry] = useState("Germany")
  let country = data.countries.filter(word => word.country === selectedCountry)
  let countryData = []
  const years = [1980, 2000, 2010, 2023, 2030, 2050]
  const popCountYears = years.map(year => {
    return 'pop' + year
  })

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

  return <>
    <div>Timeline</div>

    <CountryDropdown handleChange={handleChange}/>

    <ResponsiveContainer width="80%" height="80%">
      <LineChart data={countryData} 
        margin={{
          top: 0,
          right: 50,
          left: 50,
          bottom: 0
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="Year"/>
        <YAxis 
          dataKey="x" 
          type='number' 
          label={{ value: 'Population in millions', angle: -90, position: 'insideLeft' }}
          ticks={selectedCountry === "India" || selectedCountry === "China" ? 
          [0, 100, 500, 1000, 1700] : 
          [0, 10, 50, 100, 400]} 
          domain={selectedCountry === "India" || selectedCountry === "China" ? 
          [0, 1700] :
          [0, 400]} 
        />
        <Tooltip />
        <Line type="monotone" dataKey="Population" stroke="#5060E9" fill="#5060E9"/>
      </LineChart>
    </ResponsiveContainer>
  </>
}