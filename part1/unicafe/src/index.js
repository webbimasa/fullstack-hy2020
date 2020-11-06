import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, onClick}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}
const Statistics = ({stats}) => {
    return (
        <div>
            <h2>Statistics</h2>
            <p>Good: {stats.good}</p>
            <p>Neutral: {stats.neutral}</p>
            <p>Bad: {stats.bad}</p>
            <p>All: {stats.all}</p>
            <p>Average: {stats.average}</p>
            <p>Positive: {stats.positive} %</p>
        </div>
    )
}
const App = () => {
    // save clicks of each button to state object
    const [stats, setStats] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
        all: 0,
        average: 0,
        positive: 0,
    })

    const incrementGood = () => {
        const newGood = stats.good + 1
        const newAll = stats.all + 1
        setStats({
            ...stats,
            good: newGood,
            all: newAll,
            average: ( (newGood * 1) + (stats.neutral * 0) + (stats.bad * -1)) / newAll,
            positive: ( newGood / newAll ) * 100
        })
    }
    const incrementNeutral = () => {
        const newNeutral = stats.neutral + 1
        const newAll = stats.all + 1
        setStats({
            ...stats,
            neutral: newNeutral,
            all: newAll,
            average: ( (stats.good * 1) + (newNeutral * 0) + (stats.bad * -1)) / newAll,
            positive: ( stats.good / newAll ) * 100
        })
    }
    const incrementBad = () => {
        const newBad = stats.bad + 1
        const newAll = stats.all + 1
        setStats({
            ...stats,
            bad: newBad,
            all: newAll,
            average: ( (stats.good * 1) + (stats.neutral * 0) + (newBad * -1)) / newAll,
            positive: ( stats.good / newAll ) * 100
        })
    }

    return (
        <div>
            <h1>Give feedback</h1>
            <Button text="good" onClick={incrementGood} />
            <Button text="neutral" onClick={incrementNeutral} />
            <Button text="bad" onClick={incrementBad} />
            <Statistics stats={stats}/>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)