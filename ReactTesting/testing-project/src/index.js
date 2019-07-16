import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Counter from './components/counter';



ReactDOM.render(
    <Counter initialValue={10} />,
    document.getElementById('root')
)

serviceWorker.unregister();
