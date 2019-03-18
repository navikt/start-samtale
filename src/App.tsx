import React from 'react';
import './App.less';
import Banner from "./components/banner/Banner";
import SporsmalManager from "./components/sporsmal/SporsmalManager";

function App() {
    return <div className="app">
        <Banner/>
        <SporsmalManager/>
      </div>
}

export default App;
