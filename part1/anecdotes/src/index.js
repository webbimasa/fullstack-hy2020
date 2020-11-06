import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, label}) => {
    return (
        <button onClick={onClick}>{label}</button>
    )
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(
        new Array(props.anecdotes.length+1).join('0').split('').map(parseFloat)
    )

    const randomNumber = (min, max) => {
        return Math.floor( Math.random() * (max - min) + min );
    }
    const randomAnecdote = () => {
        let random = randomNumber(0, props.anecdotes.length)
        while (random === selected) {
            random = randomNumber(0, props.anecdotes.length)
        }
        setSelected(random)
    }
    const voteAnecdote = () => {
        console.log(votes)
        console.log(selected)
        const copy = [...votes]
        copy[selected] += 1
        console.log(copy)
        setVotes(copy)
    }

    return (
    <div>
        <Button onClick={voteAnecdote} label="Vote" />
        <Button onClick={randomAnecdote} label="New anecdote" />
        <p>{props.anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
    </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)