/* @flow */
import React, { Component } from 'react';
import './App.css';
import * as Icons from './icons/icons'
import ReactFC from 'react-fusioncharts';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ProjectList from './pages/project-list'
import Statistics from './pages/Statistics';
import MyWordCloud from './pages/wordcloud'
import Home from './pages/home'

const ToolBar = (props) => {
  return [<div style={{ display: "flex", flexDirection: "row", alignItems: "center", paddingTop: "0.2em" }}>
    <div style={{ height: "2em", width: "2em" }}> <Icons.Congress/> </div>
    <div style={{ height: "2em", width: "2em" }}> <Icons.CongresMan2/> </div>
    <div style={{
      fontWeight: "bold", fontVariant: "small-caps",
      fontSize: "1.1em", paddingLeft: "0.5em", paddingRight: "2em", 
    }}>
      CongresMan</div>
    <div style={{ paddingRight: "1em" }} ><Link to="/">Inicio</Link></div>
    <div style={{ paddingRight: "1em" }}><Link to="/projects">Proyectos Legislativos</Link></div>
    <div style={{ paddingRight: "1em" }}><Link to="/">Acerca</Link></div>
  </div>,
  <hr />  
  ]
}

const HomePage = (props) => {
  return <div className="rbody">
    <ToolBar />
    <Home/>    
  </div>
}

const StatisticsPage = (props) => {
  return <div className="rbody">
    <ToolBar />
    <Statistics {...props}/>
  </div>
}

const ProjectListPage = (props) => {
  return (
    <div className="rbody">
      <ToolBar />
      <ProjectList {...props} />
    </div>)
}

const CommentsPage = (props) => {
  return (
    <div className="rbody">
      <ToolBar />
      <MyWordCloud {...props}/>
    </div>)
}

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("project", this.props)

    return (
      
      <Router>
        <div style={{ height: "100%", width: "100%" }}>
          <Route exact path="/" component={HomePage} />
          <Route path="/projects" render={() => { return <ProjectListPage {...this.props} /> }} />
          <Route path="/statistics" render={() => { return <StatisticsPage {...this.props} />}} />
          <Route path="/comments" component={CommentsPage} />
        </div>
      </Router>
    )
  }
}

export default App;
