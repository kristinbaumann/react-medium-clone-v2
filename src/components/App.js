import React, { Component } from 'react';
import Section from './Section.js';
import logo from '../img/logo.png';

class App extends Component {
  render() {
    return (
      <div className="app">
        <img src={logo} className="logo" alt="logo" />
        <Section />
      </div>
    );
  }
}

export default App;
