import React from 'react'

const Country = ({match}) => {
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
        </>
    )
}

export default Country