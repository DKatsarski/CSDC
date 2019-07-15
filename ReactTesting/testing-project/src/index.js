import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import lowerCaseAndSort from './utilities/string-utils';

const data = ['Germany', 'Albania', 'United States'];

const modifiedData = lowerCaseAndSort(data);
console.log(modifiedData);

function Header(props) {

    const headerClass = 'header';
    const headerNavClass = `${headerClass}-navigation`;
    return (
        <header>
            <Nav className={headerNavClass} />
        </header>
    );
}

function Nav(props) {
    const {className} = props;
    return (
        <nav className={className}>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
            </ul>
        </nav>
    );
}

function Footer(props) {
    const footerClass = 'footer';
    const footerNavClass = `${footerClass}-navigation`;

    return (
        <footer>
            <Nav className={footerNavClass} />
        </footer>
    )
}



ReactDOM.render(
    <Header />,
    document.getElementById('root')
)

serviceWorker.unregister();
