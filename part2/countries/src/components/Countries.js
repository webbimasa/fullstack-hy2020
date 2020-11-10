import React from 'react'
import Country from './Country.js'

const Countries = ({currentFilter, countries}) => {
    if (currentFilter !== '' && countries.length >= 10) {
        return (
            <div>
                <p>Too many matches, specify the filter</p>
            </div>
        )
    }
    if (currentFilter !== '' && countries.length === 0) {
        return (
            <div>
                <p>No matches</p>
            </div>
        )
    }
    return (
        <div>
            {countries.map(country =>
                <Country key={country.name} country={country} full={countries.length === 1}/>
            )}
        </div>
    )
}

export default Countries