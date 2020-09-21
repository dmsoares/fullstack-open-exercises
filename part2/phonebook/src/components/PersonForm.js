import React from 'react';

const PersonForm = ({handleOnSubmit, handleName, handleNumber, name, number}) => {
    return (
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <div>
          name: <input id='name-input' onChange={(event) => handleName(event.target.value)} value={name} autoFocus/>
        </div>
        <div>
          number: <input onChange={(event) => handleNumber(event.target.value)} value={number} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm;