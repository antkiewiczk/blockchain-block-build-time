import React, { Component } from 'react';
import './App.css';
import MainPage from './javascript/containers/mainPage.js';
import NoMetamask from './javascript/components/noMetamask.js';

class App extends Component {
  constructor() {
    super();
  }

  checkMetamask() {
    if (window.web3) {
      return <MainPage />
    } else {
      return <NoMetamask />
    }
  }

  render() {
    return (
      <div className="App">
        {this.checkMetamask()}
      </div>
    );
  }
}

export default App;
