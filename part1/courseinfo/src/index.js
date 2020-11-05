import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}
const Part = (props) => {
    return (
        <p>{props.part} {props.exercises}</p>
    )
}
const Content = (props) => {
    return (
        <div>
            <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
            <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
            <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
        </div>
    )
}
const Total = (props) => {
    return (
        <p>Number of exercises {props.numberOfExercises}</p>
    )
}
const App = () => {
    const course = 'Half stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }
    const parts = [];
    parts.push(part1, part2, part3)

    return (
        <div>
            <Header course={course} />
            <Content parts={parts}/>
            <Total numberOfExercises={part1.exercises + part2.exercises + part3.exercises} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));