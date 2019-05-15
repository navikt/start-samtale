import React from 'react';
import './App.less';
import Banner from "./components/banner/Banner";
import Sporsmal from "./pages/Sporsmal";

function App() {
    return <div className="app">
        <Banner/>
        <Sporsmal/>
      </div>
}

export default App;
