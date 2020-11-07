import React, { useState } from 'react'
import Person from './person'

const App = (props) => {
    const [persons, setPersons] = useState(props.persons)
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addNew = (event) => {
        event.preventDefault()

        if (newName === '' || newNumber === '') {
            alert(`Fill out required fields`)
            return false
        }

        const personObject = {
            id: persons.length + 1,
            name: newName,
            number: newNumber,
        }

        const matchingName = persons.find(o => o.name === newName)
        if (matchingName === undefined) {
            setPersons(persons.concat(personObject))
            setNewName('')
            setNewNumber('')
        } else {
            alert(`${newName} has already been added to the phonebook`)
            return
        }
    }

    const handleName = (event) => {
        setNewName(event.target.value)
    }
    const handleNumber = (event) => {
        setNewNumber(event.target.value)
    }

    return (
        <div>
            <h1>Phonebook</h1>
            <form onSubmit={addNew}>
                <div>
                    name:
                    <input value={newName} onChange={handleName} />
                </div>
                <div>
                    number:
                    <input value={newNumber} onChange={handleNumber} />
                </div>
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