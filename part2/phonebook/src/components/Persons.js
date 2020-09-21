import React from 'react';

const Persons = ({ selectPersons }) => {
    return selectPersons()
        .map(person =>
            <p key={person.name}>{person.name} {person.number}</p>
            );
}

export default Persons;