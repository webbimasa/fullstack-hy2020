import React from 'react'

const FilterForm = ({value, handleChange}) => {
    return (
        <div>
            filter:
            <input value={value} onChange={handleChange} />
        </div>
    )
}

export default FilterForm