import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, onClick}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}
const Calculator = (props) => {
    if (isNaN(props.calc)) {
        return (
            <p>{props.label}: 0</p>
        )
    }
    return (
        <p>{props.label}: {props.calc} {props.unit}</p>
    )
}
const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)
    const [average, setAverage] = useState(0)

    const handleGoodFeedback = () => {
        setGood(good + 1)
        updateTotal()
        updateAverage(13)
    }
    const handleNeutralFeedback = () => {
        setNeutral(neutral + 1)
        updateTotal()
        updateAverage()
    }
    const handleBadFeedback = () => {
        setBad(bad + 1)
        updateTotal()
        updateAverage()
    }
    const updateTotal = () => {
        setAll(all + 1)
    }
    const updateAverage = (kusi) => {
        setAverage(average + kusi)
    }

    console.log(good, neutral, bad, all)
    return (
        <div>
            <h1>Give feedback</h1>
            <Button text="good" onClick={handleGoodFeedback} />
            <Button text="neutral" onClick={handleNeutralFeedback} />
            <Button text="bad" onClick={handleBadFeedback} />
            <h2>Statistics</h2>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>All: {all}</p>
            <Calculator label="Average" unit="" calc={( (good * 1) + (neutral * 0) + (bad * -1)) / all}/>
            <Calculator label="Positive feedback" unit="%" calc={( good / all ) * 100 }/>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)