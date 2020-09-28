import React from 'react';

const Persons = ({ selectPersons, removePerson }) => {

    return selectPersons()
        .map(person =>
            <div key={person.name}>
                <label>{person.name} {person.number} </label>
                <button onClick={() => removePerson(person.id)}>delete</button>
            </div>
            );
}

export default Persons;