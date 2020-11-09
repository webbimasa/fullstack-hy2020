import React from 'react'
import Country from './Country.js'

const Countries = ({currentFilter, countries}) => {
    if (currentFilter !== '' && countries.length >= 10) {
        return (
            <div>
            </div>
        )
    }
    if (currentFilter !== '' && countries.length <= 10 && countries.length > 1) {
        return (
            <div>
                {countries.map(country =>
                    <Country key={country.name} country={country} style="basic"/>
                )}
            </div>
        )
    }
    if (currentFilter !== '' && countries.length === 1) {
        return (
            <div>
                {countries.map(country =>
                    <Country key={country.name} country={country} style="complex"/>
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
                <Country key={country.name} country={country} style="basic"/>
            )}
        </div>
    )
}

export default Countries