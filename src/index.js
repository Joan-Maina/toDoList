import React from 'react';
import ReactDOM from 'react-dom';
import App from'./App';
//import React, { Component } from 'react';
import './index.css';

//const element = <h1> Hello world </h1>;

ReactDOM.render(
    <React.StrictMode>
        <App />

    </React.StrictMode>,
    document.getElementById('root')
);