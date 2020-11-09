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
    if (currentFilter !== '' && countries.length <= 10 && countries.length >= 2) {
        return (
            <div>
                {countries.map(country =>
                    <Country key={country.name} country={country} />
                )}
            </div>
        )
    }
    if (currentFilter !== '' && countries.length === 1) {
        return (
            <div>
                {countries.map(country =>
                    <Country key={country.name} country={country} full />
                )}
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
                <Country key={country.name} country={country} />
            )}
        </div>
    )
}

export default Countries