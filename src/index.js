import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const URL = 'https://demo.iofficeconnect.com/external/api/rest/v2/users';
ReactDOM.render(<App url={URL}/>, document.getElementById('root'));