import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return
    }
    setPersons([...persons, { name: newName }]);
    setNewName('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleOnSubmit}>
        <div>
          name: <input onChange={(event) => setNewName(event.target.value)} value={newName} autoFocus/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name}</p>)}
    </div>
  )
}

export default App
