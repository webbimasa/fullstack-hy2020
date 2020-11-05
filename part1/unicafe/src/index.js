import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, onClick}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}
const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodFeedback = () => {
        setGood(good + 1)
    }
    const handleNeutralFeedback = () => {
        setNeutral(neutral + 1)
    }
    const handleBadFeedback = () => {
        setBad(bad + 1)
    }
    return (
        <div>
            <h1>Give feedback</h1>
            <Button text="good" onClick={handleGoodFeedback} />
            <Button text="neutral" onClick={handleNeutralFeedback} />
            <Button text="bad" onClick={handleBadFeedback} />
            <h2>Statistics</h2>
            <p>Good – {good}</p>
            <p>Neutral – {neutral}</p>
            <p>Bad – {bad}</p>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)