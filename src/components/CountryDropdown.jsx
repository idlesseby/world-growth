import React from 'react'
import Select from 'react-select'
import data from '../data.js'

export default function CountryDropdown(props) {

  data.countries.sort(function(a, b) {
    return a.country.localeCompare(b.country)
  });

  const options = []

  for(let i = 0; i < data.countries.length; i++) {
    const option = {
      value: data.countries[i].country,
      label: data.countries[i].country
    }
    options.push(option)
  }

  return (
    <Select options={options} onChange={props.handleChange} defaultValue={{ value: "Germany", label: "Germany"}}/>
  )
}