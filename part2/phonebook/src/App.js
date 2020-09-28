import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    personService
      .getAll()
      .then(response => setPersons(response))
  }, [])

  const selectPersons = () => {
    return persons.filter(person => person.name.toLowerCase().indexOf(filter) !== -1); 
  }

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return
    }

    personService
      .create(newName, newNumber)
      .then(createdPerson => {
        setPersons([...persons, createdPerson]);
        setNewName('');
        setNewNumber('');
      })


    document.querySelector('#name-input').focus();
  }

  const removePerson = id => {
    const name = persons.find(person => person.id === id).name
    if (window.confirm(`Delete ${name}?`)) {
      personService
        .remove(id)
        .then(response => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter applyFilter={setFilter} filter={filter} />
      <h2>add a new</h2>
      <PersonForm
        handleOnSubmit={addPerson}
        handleName={setNewName}
        handleNumber={setNewNumber}
        name={newName}
        number={newNumber} />
      <h2>Numbers</h2>
      <Persons selectPersons={selectPersons} removePerson={removePerson} />
    </div>
  )
}

export default App
