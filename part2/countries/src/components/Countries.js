import React from 'react'
import Country from './Country'

const Countries = ({countries, searchString}) => {
    const matches = countries
        .filter(country => {
            const re = RegExp(searchString, 'gi');
            return country.name.search(re) !== -1;
        })
    const total = matches.length;

    if (total === 0) return <p>no matches, specify another filter</p>
    if (total === 1) return <Country match={matches[0]} />
    if (total <= 10) return matches.map(country => <p key={country.numericCode}>{country.name}</p>)
    return <p>too many matches, specify another filter</p>
}

export default Countries