import React from 'react'

const Filter = ({applyFilter, filter}) => {
    const handleChange = (event) => {
        applyFilter(event.target.value.toLowerCase());
    }
    return (
    <div>
        filter shown with <input onChange={handleChange} value={filter} />
    </div>
    )
};

export default Filter;