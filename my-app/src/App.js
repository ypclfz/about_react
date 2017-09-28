import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TicTacToe from './TicTacToe'
import DangerButton from './DangerButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>欢迎来到小小的REACT_GAME小站</h2>
        </div>
        <TicTacToe />
        <DangerButton Text="Godgg"/>
      </div>
    );
  }
}

export default App;
