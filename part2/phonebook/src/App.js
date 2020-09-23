import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const selectPersons = () => {
    const re = new RegExp(filter, 'ig');
    return persons.filter(person => person.name.search(re) !== -1);
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return
    }
    setPersons([...persons, { name: newName, number: newNumber }]);
    setNewName('');
    setNewNumber('');

    document.querySelector('#name-input').focus();
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter applyFilter={setFilter} filter={filter} />
      <h2>add a new</h2>
      <PersonForm
        handleOnSubmit={handleOnSubmit}
        handleName={setNewName}
        handleNumber={setNewNumber}
        name={newName}
        number={newNumber} />
      <h2>Numbers</h2>
      <Persons selectPersons={selectPersons} />
    </div>
  )
}

export default App
