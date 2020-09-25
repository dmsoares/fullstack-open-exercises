import React, { useState, useEffect } from 'react'
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY

const Country = ({match}) => {
    const [weather, setWeather] = useState()
    const api_key = '***REMOVED***'
    useEffect(() => {
        axios
            .get(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${api_key}`)
            .then(response => setWeather(response.data))
    }, [match])
    return (
        <>
            <h1>{match.name}</h1>
            <p>capital {match.capital}</p>
            <p>population {match.population}</p>
            <h2>languages</h2>
            <ul>
                {match.languages.map(language => <li key={language.iso639_1}>{language.name}</li>)}
            </ul>
            <img src={match.flag} alt={`The flag of ${match.name}`} style={{width: '100px'}}></img>
            {weather ? (
                <section>
                    <h2>Weather in {match.capital}</h2>
                    <p><strong>temperature:</strong> {weather.main.temp}</p>
                    <p><strong>wind</strong> speed: {weather.wind.speed} deg: {weather.wind.deg}</p>
                </section>)
                : null}
        </>
    )
}

export default Country