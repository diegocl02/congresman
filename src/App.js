/* @flow */
import React, { Component } from 'react';
import './App.css';
import * as Icons from './icons/icons'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ProjectList from './pages/project-list'

const ToolBar = (props) => {
  return (<div style={{ display: "flex", flexDirection: "row", alignItems: "start" }}>
    <div style={{fontWeight: "bold", fontVariant: "small-caps", fontSize: "1.2em", paddingRight: "1em"}}>CongresMan</div>
    <div style={{paddingRight: "1em"}} ><Link to="/">Home</Link></div>
    <div style={{paddingRight: "1em"}}><Link to="/about">About</Link></div>
    <div style={{paddingRight: "1em"}}><Link to="/projects">Projects</Link></div>
    <hr />
  </div>
  )
}

const Home = (props) => {
  return <div className="rbody">
    <ToolBar />
    <h1> Bienvenidos </h1>
    <div style={{ height: "50%", width: "50%" }}> {Icons.CongresMan()} </div>
  </div>
}

const StatisticsPage = () => {
  return <div className="rbody">
    <ToolBar />
    <h1> Estadisticas </h1>
    <div style={{ height: "50%", width: "50%" }}> {Icons.CongresMan()} </div>
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
          <Route exact path="/" component={Home} />
          <Route path="/projects" render={() => { return <ProjectListPage {...this.props} /> }} />
          <Route path="/statistics" component={StatisticsPage} />
          <Route path="/comments" component={CommentsPage} />
        </div>
      </Router>
    )
  }
}

export default App;
