import React, { Component } from 'react';
import './App.less';
import Banner from "./components/banner/Banner";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner/>
      </div>
    );
  }
}

export default App;
