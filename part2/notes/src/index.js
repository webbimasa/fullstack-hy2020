import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const notes = [
    {
      id: 1,
      content: 'HTML is easy',
      date: '2019-05-30T17:30:31.098Z',
      important: true
    },
    {
      id: 2,
      content: 'Browser can execute only Javascript',
      date: '2019-05-30T18:39:34.091Z',
      important: false
    },
    {
      id: 3,
      content: 'GET and POST are the most important methods of HTTP protocol',
      date: '2019-05-30T19:20:14.298Z',
      important: true
    }
]
const persons = [
    { id: 1,name: 'Arto Hellas', number: '040-123456' },
    { id: 2,name: 'Ada Lovelace', number: '39-44-5323523' },
    { id: 3,name: 'Dan Abramov', number: '12-43-234345' },
    { id: 4,name: 'Mary Poppendieck', number: '39-23-6423122' }
]

ReactDOM.render(<App persons={persons} notes={notes} />, document.getElementById('root'));