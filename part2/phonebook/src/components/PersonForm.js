import React from 'react';

const PersonForm = ({handleOnSubmit, handleName, handleNumber, name, number}) => {

  const handleNumberChange = (event) => !/[^\d\-\s]|\s\s+|--+|^-|^\s|\s-+|-\s+/g.test(event.target.value) && handleNumber(event.target.value) 

  return (
    <form onSubmit={(event) => handleOnSubmit(event)}>
      <div>
        name: <input id='name-input' onChange={(event) => handleName(event.target.value)} value={name} autoFocus />
      </div>
      <div>
        number: <input onChange={handleNumberChange} value={number} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm;