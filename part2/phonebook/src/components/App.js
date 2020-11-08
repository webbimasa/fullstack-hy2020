import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FilterForm from './FilterForm'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = (props) => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [currentFilter, setFilter] = useState('')

    useEffect(() => {
        axios
        .get('http://localhost:3001/persons')
        .then(response => {
            setPersons(response.data)
        })
    }, []);

    const personsToShow = currentFilter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(currentFilter.toLowerCase()))

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
    const handleFilter = (event) => {
        setFilter(event.target.value)
    }

    return (
        <div>
            <h1>Phonebook</h1>
            <FilterForm value={currentFilter} handleChange={handleFilter} />
            <h2>Add new</h2>
            <PersonForm handleSubmit={addNew} fields={
                [
                    {
                        label: 'Name',
                        handler: handleName,
                        value: newName
                    },
                    {
                        label: 'Number',
                        handler: handleNumber,
                        value: newNumber
                    }
                ]
            }/>
            <h2>Numbers</h2>
            <Persons persons={personsToShow}/>
        </div>
    )
}

export default App