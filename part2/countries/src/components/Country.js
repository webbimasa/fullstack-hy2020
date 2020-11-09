import React, { useState } from 'react'

const Country = ({country, full}) => {
    const [viewFull, setView] = useState(false)

    const changeView = () => {
        setView(!viewFull)
    }

    if (viewFull || full) {
        return (
            <article>
                <h1>
                    {!full ? <button onClick={changeView}>{viewFull ? 'Close' : 'Open'}</button> : ''}
                    {country.name}
                </h1>
                <p><strong>Capital:</strong> {country.capital}</p>
                <p><strong>Population:</strong> {country.population}</p>
                <h2>Languages</h2>
                <ul>
                    {country.languages.map(language =>
                        <li key={language.iso639_1}>{language.name}</li>
                    )}
                </ul>
                <img src={country.flag} alt={`flag of ${country.name}`}width="200px" height="auto"/>
            </article>
        )
    }
    return (
        <article>
            <p>
                <button onClick={changeView}>{viewFull ? 'Close' : 'Open'}</button> {country.name}
            </p>
        </article>
    )
}

export default Country