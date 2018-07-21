/* @flow */
import React, { Component } from 'react';
import './App.css';
import * as Icons from './icons/icons'

class App extends Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="title"> 
        <h1> CongresMan is in da house </h1>
        <div style={{height: "50%", width: "50%"}}> {Icons.CongresMan()} </div>
      </div>
    )
  }
}

export default App;
