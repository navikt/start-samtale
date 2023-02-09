import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {initAmplitude} from "./components/util/amplitude-utils";



if (import.meta.env.DEV) {
    import("./mock").then(() =>
        ReactDOM.render(<App />, document.getElementById('root'))
    );
} else {
    ReactDOM.render(<App />, document.getElementById('root'));
}

if (import.meta.env.PROD) {
    initAmplitude();
}
