import React, { useState, useEffect } from 'react'
import FilterForm from './components/FilterForm'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phonebookService from './services/phonebook'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [currentFilter, setFilter] = useState('')

    const newGUID = () => {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }

    useEffect(() => {
        phonebookService
        .getAll()
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
            id: newGUID(),
            name: newName,
            number: newNumber,
        }

        const matchingPerson = persons.find((person) => person.name === newName)
        if (matchingPerson === undefined) {
            phonebookService
            .create(personObject)
            .then(response => {
                setPersons(persons.concat(response.data))
                setNewName('')
                setNewNumber('')
            })
        } else {
            const updatedPersonObject = {
                ...personObject,
                number: newNumber,
            }
            if (window.confirm(`${newName} has already been added to the phonebook. Update number?`)) {
                phonebookService
                .update(matchingPerson.id, updatedPersonObject)
                .then(response => {
                    setPersons(persons.map(person => person.id !== matchingPerson.id ? person : response.data))
                    setNewName('')
                    setNewNumber('')
                })
            }
        }
    }

    const deleteEntry = (personToDelete, event) => {
        event.preventDefault()
        if (window.confirm(`Delete ${personToDelete.name}?`)) {
            phonebookService
            ._delete(personToDelete.id)
            .then(response => {
                setPersons(persons.filter(person => person.id !== personToDelete.id))
            })
            .catch(error => {
                console.log(error)
            })
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
            <Persons
                persons={personsToShow}
                handleDelete={deleteEntry}
            />
        </div>
    )
}

export default App