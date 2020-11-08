import React from 'react'

const PersonForm = ({handleSubmit, fields}) => {
  return (

        <form onSubmit={handleSubmit}>
            {fields.map(field =>
                <div key={field.label}>
                    {field.label}:
                    <input value={field.value} onChange={field.handler} />
                </div>
            )}
            <button type="submit">Submit</button>
        </form>
    )
}

export default PersonForm