import React, { Component } from 'react'
import * as Icons from '../icons/icons'
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Flag from '../../static/bandera.png'
import Congreso from '../../static/elcongreso.png'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'


export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={"container"} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80%" }}>
                <div className={"col"} key={"text1"} style={{ height: "50%", width: "50%", color: "green", textAlign: "center", paddingLeft: "3em" }}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", paddingTop: "0.2em" }}>
                        <img src={Congreso} style={{ height: "7em", paddingRight: "3em" }} alt="fireSpot2" />
                        <img src={Flag} style={{ height: "7em"}} alt="fireSpot" />
                    </div>
                    <h1 style={{ fontVariant: "small-caps", color: "#22264F" }}> Bienvenidos Ciudadanos! </h1>
                    <h2> Les presentamos a <span style={{ fontVariant: "small-caps", fontWeight: "700" }}>"CongresMan!"</span> el nuevo héroe democrático que te enseñará la importancia de particiar en las
                        labores legislativas del congreso. </h2> <br /> <br />
                    <h1>
                        <span style={{ cursor: "pointer" }} onClick={e => { console.log("test") }}> 
                        ¡<Link to="/">Entérate</Link> </span> como puedes empoderarte!
                        </h1>
                </div>
                <div className={"col"} key={"text2"} style={{ height: "40%", width: "40%", textAlign: "center"}}>
                    <div key={"text3"} onClick={(e) => {
                        () => {console.log("ee"); window.location = 'https://www.facebook.com/CongresMan-2054574541523427/'}
                    }}> <Icons.CongresMan2 color={"blue"} /> </div>
                    <a href="https://www.facebook.com/CongresMan-2054574541523427/">Sigue a CongresManBot clickeando aquí </a>
                </div>
            </div>
        )
    }
}
