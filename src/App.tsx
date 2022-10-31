import React from 'react';
import './App.less';
import Banner from './components/banner/Banner';
import Sporsmal from './pages/Sporsmal';
import {frontendLogger} from './components/util/frontendlogger';
import {BrowserRouter, HashRouter} from "react-router-dom";

function Router(props: { children?: React.ReactNode }) {
    if (process.env.REACT_APP_USE_HASH_ROUTER === 'true') {
        return <HashRouter>{props.children}</HashRouter>;
    }
    return <BrowserRouter basename={process.env.PUBLIC_URL}>{props.children}</BrowserRouter>;
}

function App() {
    frontendLogger('forberede-moete.visit');
    return (
        <div className="app">
            <Router>
                <Banner/>
                <Sporsmal/>
            </Router>
        </div>
    );
}

export default App;
