import React from 'react'

const Country = ({country, style}) => {
    if (style === 'complex') {
        return (
            <article>
                <h1>{country.name}</h1>
                <p><strong>Capital:</strong> {country.capital}</p>
                <p><strong>Population:</strong> {country.population}</p>
                <h2>Languages</h2>
                <ul>
                    {country.languages.map(language =>
                        <li key={language.iso639_1}>{language.name}</li>
                    )}
                </ul>
                <img src={country.flag} width="200px" height="auto"/>
            </article>
        )
    }
    return (
        <article>
            {country.name}
        </article>
    )
}

export default Country