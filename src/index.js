import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import {BrowserRouter} from 'react-router-dom';
import './Resources/Resources/css/app.css';


const App = () => {
    return (
        <BrowserRouter>
            <Routes></Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

