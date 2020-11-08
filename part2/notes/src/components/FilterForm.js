import React from 'react'

const FilterForm = ({value, handleChange}) => {
    return (
        <div>
            Filter with:
            <input value={value} onChange={handleChange} />
        </div>
    )
}

export default FilterForm