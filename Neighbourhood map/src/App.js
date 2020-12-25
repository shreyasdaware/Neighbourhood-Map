import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Neighborhood} from './Neighborhood'
class App extends Component {
  render() {
    return (
      <div className="App">
          <Neighborhood/>
      </div>
    );
  }
}

export default App;
