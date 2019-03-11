import React, { Component } from 'react';
import './App.less';
import Banner from "./components/banner/Banner";
import SporsmalManager from "./components/sporsmal/SporsmalManager";


// Dette er stilaset
// Rendre spørsmålene om det er relevant
// Trenger hverken context eller redux for denne appen.
class App extends Component {
  render() {
    return (
      <div>
        <Banner/>
        <SporsmalManager/>
      </div>
    );
  }
}

export default App;
