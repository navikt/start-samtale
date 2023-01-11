import React from 'react';
import './App.less';
import Banner from './components/banner/Banner';
import Sporsmal from './pages/Sporsmal';
import {frontendLogger} from './components/util/frontendlogger';
import {logSkjemaStartet} from "./components/util/amplitude-utils";

function App() {
    frontendLogger('forberede-moete.visit');
    logSkjemaStartet();
    return (
        <div className="app">
            <Banner/>
            <Sporsmal/>
        </div>
    );
}

export default App;
