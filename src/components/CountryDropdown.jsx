import React from 'react'
import Select from 'react-select'
import data from '../data.js'

export default function CountryDropdown(props) {

  const sortedData = [...data.countries].sort(function(a, b) {
    return a.country.localeCompare(b.country)
  });

  const options = []

  for(let i = 0; i < sortedData.length; i++) {
    const option = {
      value: sortedData[i].country,
      label: sortedData[i].country
    }
    options.push(option)
  }

  const styles = {
    control: (styles) => ({...styles, backgroundColor: 'white', width: '10rem', height: '1.875rem',
    alignContent: 'center', minHeight: 'auto', borderRadius: '10px', fontSize: '0.875em',
    borderColor: '#C4C5D4', '&:hover': {borderColor: '#5060E9'}, boxShadow: 'none'}),
    indicatorSeparator: () => ({display: 'none'}),
    dropdownIndicator: (styles) => ({...styles, color: '#5060E9', '&:hover': {color: '#5060E9'}}),
    menu: (styles) => ({...styles, width: '16rem'})
  }

  return (
    <Select className='content-dropdown' options={options} onChange={props.handleChange} 
      defaultValue={{ value: "Germany", label: "Germany"}} styles={styles}
    />
  )
}