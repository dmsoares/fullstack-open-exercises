import React from 'react'

const Search = ({searchString, setSearchString}) => {
    const handleChange = (event) => setSearchString(event.target.value.replace(/[^a-z0-9\W]/gi, ''))
    return (
        <>
            <label>find countries <input onChange={handleChange} value={searchString}></input></label>
        </>
    )
}

export default Search