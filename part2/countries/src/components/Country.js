import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({country, full}) => {
    const weatherAPIKey = process.env.REACT_APP_API_KEY
    const [viewFull, setView] = useState(false)
    const [weather, setWeather] = useState({})

    useEffect(() => {
        setView(full);
    }, [full]);

    const changeView = () => {
        setView(!viewFull)
    }

    useEffect(() => {
        // Only Kabul to save API requests
        if (country.capital === 'Kabul') {
            axios
            .get(`http://api.weatherstack.com/current?access_key=${weatherAPIKey}&query=${country.capital}`)
            .then(response => {
                setWeather(
                    {
                        temp: response.data.current.temperature,
                        windspeed: response.data.current.wind_speed,
                        winddir: response.data.current.wind_dir,
                        icon: response.data.current.weather_icons[0],
                        desc: response.data.current.weather_descriptions[0],
                    }
                )
            })
        }
    }, [full]);

    if (viewFull) {
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
                <p><strong>Temperature:</strong> {weather.temp} °C</p>
                <p><strong>Wind:</strong> {weather.windspeed} {weather.winddir}</p>
                <img src={weather.icon} alt={weather.desc} width="100px" height="auto"/>
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