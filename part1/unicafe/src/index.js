import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, onClick}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}
const Statistic = (props) => {
    if ( props.text === 'Positive' ) {
        return (
            <tr>
                <td>{props.text}</td>
                <td>{props.value} %</td>
            </tr>
        )
    }
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>
    )
}
const Statistics = ({stats}) => {
    if ( stats.all === 0 ) {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Statistics</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>No feedback given</td>
                    </tr>
                </tbody>
            </table>
        )
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Statistics</th>
                    </tr>
                </thead>
                <tbody>
                    <Statistic text="Good" value={stats.good}/>
                    <Statistic text="Neutral" value={stats.neutral}/>
                    <Statistic text="Bad" value={stats.bad}/>
                    <Statistic text="All" value={stats.all}/>
                    <Statistic text="Average" value={stats.average}/>
                    <Statistic text="Positive" value={stats.positive}/>
                </tbody>
            </table>
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