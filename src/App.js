import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Formulaire from './Formulaire';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <body>
          <div className="App">
            <h1>Quete8 le cycle de vie</h1>
            <Formulaire />
          </div>
        </body>
      </div>
    )};
}


export default App;
