import React, { useState, useEffect } from 'react'
import axios from 'axios'

import FilterForm from './FilterForm'
import Countries from './Countries'

const App = () => {
    const [countries, setCountries] = useState([])
    const [currentFilter, setFilter] = useState('')

    const countriesToShow = currentFilter === ''
    ? countries
    : countries.filter(country => country.name.toLowerCase().includes(currentFilter.toLowerCase()))

    useEffect(() => {
        axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => {
            setCountries(response.data)
        })
    }, []);

    const handleFilter = (event) => {
        setFilter(event.target.value)
    }

    return (
        <div>
            <FilterForm value={currentFilter} handleChange={handleFilter} />
            <Countries currentFilter={currentFilter} countries={countriesToShow} />
        </div>
    )
}

export default App