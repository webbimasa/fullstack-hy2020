import React, { useState } from 'react'
import Person from './person'

const App = (props) => {
    const [persons, setPersons] = useState(props.persons)
    const [newName, setNewName] = useState('New name')

    const addNewName = (event) => {
        event.preventDefault()
        const personObject = {
            id: persons.length + 1,
            name: newName,
        }

        const matchingName = persons.find(o => o.name === newName)
        if (matchingName === undefined) {
            setPersons(persons.concat(personObject))
            setNewName('')
        } else {
            alert(`${newName} has already been added to the phonebook`)
            return
        }
    }

    const handleChange = (event) => {
        setNewName(event.target.value)
    }

    return (
        <div>
            <h1>Phonebook</h1>
            <form onSubmit={addNewName}>
                name:
                <input
                    value={newName}
                    onChange={handleChange} />
                <button type="submit">Add</button>
            </form>
            <h2>Numbers</h2>
            <ul>
                {persons.map(person =>
                    <Person key={person.id} person={person} />
                )}
            </ul>
        </div>
    )
}

export default App