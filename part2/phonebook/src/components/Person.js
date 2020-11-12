import React from 'react'

const Person = ({person, handleDelete}) => {
    return (
        <div>
            <p>{person.name} {person.number} <button onClick={(event) => handleDelete(person, event)}>delete</button></p>
        </div>
    )
}

export default Person