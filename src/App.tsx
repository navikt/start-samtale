import React from 'react';
import './App.less';
import Banner from "./components/banner/Banner";
import SporsmalManager from "./components/sporsmal/SporsmalManager";
import Lenke from 'nav-frontend-lenker';

function App() {
    return <div className="app">
        <Banner/>
        <SporsmalManager/>
        <Lenke href="/dialog">
            Avbryt
        </Lenke>
      </div>
}

export default App;
