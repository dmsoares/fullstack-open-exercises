import React from 'react'

const Search = ({searchString, setSearchString}) => {
    const handleChange = (event) => setSearchString(event.target.value.toLowerCase())
    return (
        <>
            <label>find countries <input onChange={handleChange} value={searchString}></input></label>
        </>
    )
}

export default Search