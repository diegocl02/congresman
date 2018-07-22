/* @flow */
import React, { Component } from 'react';
import './App.css';
import * as Icons from './icons/icons'
import ReactFC from 'react-fusioncharts';
import { pieChartConfigs } from './components/PieChar.js'
import { barChartConfigs } from './components/BarChar.js'

class App extends Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="title">
      <div className="Grid-container"> 
        <div className="Grid-item">
          <ReactFC {...pieChartConfigs} />
        </div>
        <div className="Grid-item">
          <ReactFC {...barChartConfigs} />
        </div>
      </div>
        <h1> CongresMan is in da house.adfa </h1>
        <div style={{height: "50%", width: "50%"}}> {Icons.CongresMan()} </div>
      </div>
    )
  }
}

export default App;
