import React from 'react';
import Part from './part';

const Content = ({content}) => {
    const exercisesInParts = content.map(part => part.exercises)
    const totalNumberOfExercises = exercisesInParts.reduce((total, exercisesInParts) => total + exercisesInParts)

    return (
        <div>
            {content.map(part =>
                <Part name={part.name} exercises={part.exercises} key={part.id} />
            )}
            <strong>total of {totalNumberOfExercises} exercises</strong>
        </div>
    )
}

export default Content