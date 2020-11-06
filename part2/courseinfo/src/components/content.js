import React from 'react';
import Part from './part';

const Content = ({content}) => {
    return (
        <div>
            {content.map(part =>
                <Part name={part.name} exercises={part.exercises} key={part.id} />
            )}
        </div>
    )
}

export default Content