import React, { useState, useEffect } from 'react'
import Country from './Country'

const Countries = ({countries, searchString}) => {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        setMatches(
            countries
                .filter(country => {
                    const re = new RegExp(searchString, 'gi')
                    return country.name.search(re) !== -1;})
                .map(country => ({...country, show: false}))
        )
    }, [countries, searchString])

    const handleClick = (name) => {
        setMatches(prev => {
            return prev.map(country => country.name === name ? {...country, show: !country.show} : country)
        })
    }

    const total = matches.length;

    if (total === 0) return <p>no matches, specify another filter</p>
    if (total === 1) return <Country match={matches[0]} />
    if (total <= 10) return matches.map(country => (
        <div key={country.numericCode} className={'hideShowCountry'}>
            <label>{country.name} <button onClick={() => handleClick(country.name)}>show</button></label>
            {country.show && <Country match={country} />}
        </div>
        )
    )
    return <p>too many matches, specify another filter</p>
}

export default Countries