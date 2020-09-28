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

    const newPerson = persons.find(person => person.name === newName)
    const question = `${newName} is already added to phonebook, replace the old number with a new one?`

    if (newPerson) {
      if (window.confirm(question)) {
        personService
          .update(newPerson.id, { ...newPerson, number: newNumber })
          .then(response => {
            setPersons(persons.map(person => person.id === newPerson.id ? response : person))
            setNewName('')
            setNewNumber('')
          })
      } 
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
        .catch(error => console.log(error))
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
