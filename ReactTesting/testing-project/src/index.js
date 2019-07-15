import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import lowerCaseAndSort from './utilities/string-utils';

const data = ['Germany', 'Albania', 'United States'];

lowerCaseAndSort(data);

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

ReactDOM.render(
    <div></div>,
    document.getElementById('root')
)

serviceWorker.unregister();
