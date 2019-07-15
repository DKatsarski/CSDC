import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import lowerCaseAndSort from './utilities/string-utils';

const data = [
    {
        bookId: 1,
        title: 'Lord of the Rings',
        author = 'Pesho'
    },
    {
        bookId: 2,
        title: 'Kotkata',
        author: 'Todor'
    }
]

function BookList(props) {
    const { books } = props;
    return (
        <ul>
            {books.map(book => (
                <li>
                    <h5>{book.title}</h5>
                    <h6>{book.author}</h6>
                </li>
            ))}
        </ul>
    );
}


ReactDOM.render(
    <BookList books={books} />,
    document.getElementById('root')
)

serviceWorker.unregister();
