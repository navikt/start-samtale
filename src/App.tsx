import React, { Component } from 'react';
import './App.less';
import Banner from "./components/banner/Banner";
import SporsmalManager from "./components/sporsmal/SporsmalManager";
import Lenke from 'nav-frontend-lenker';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Banner/>
        <SporsmalManager/>
        <Lenke href="/dialog">
            Avbryt
        </Lenke>
      </div>
    );
  }
}

export default App;
