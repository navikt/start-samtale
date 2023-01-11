import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {initAmplitude} from "./components/util/amplitude-utils";

if (process.env.REACT_APP_MOCK === 'true') {
    require('./mock');
}

initAmplitude();

ReactDOM.render(<App />, document.getElementById('root'));
