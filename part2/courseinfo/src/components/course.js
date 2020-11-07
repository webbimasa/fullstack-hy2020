import React from 'react';
import Header from './header';
import Content from './content';

const Course = ({course}) => {
    return (
        <div>
            <Header title={course.name}/>
            <Content content={course.parts}/>
        </div>
    )
}

export default Course