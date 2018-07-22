import React, { Component } from 'react'
import * as Icons from '../icons/icons'
import TransitionGroup from 'react-transition-group/TransitionGroup';


export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div key={"text1"} style={{ height: "50%", width: "50%", color: "green", textAlign: "center", paddingLeft: "3em" }}>
                    <h1 style={{ fontVariant: "small-caps", color: "#22264F" }}> ¡Bienvenidos Ciudadanos! </h1>
                    <h2> Les presentamos a <span style={{ fontVariant: "small-caps", fontWeight: "700" }}>"CongresMan"</span>, el nuevo héroe democrático que te enseñará la importancia de participar en las
                        labores legislativas del congreso. </h2> <br /> <br />
                    <h1> ¡Entérate cómo puedes empoderarte! </h1> </div>
                <div key={"text2"} style={{ height: "40%", width: "40%", textAlign: "center", paddingTop: "5em" }}>
                    <div key={"text3"}  onClick={(e) => {
                        () => {console.log("ee"); window.location = 'https://www.facebook.com/CongresMan-2054574541523427/'}
                    }}> <Icons.CongresMan2 color={"blue"} /> </div>
                    <a href="https://www.facebook.com/CongresMan-2054574541523427/">Sigue a CongresManBot clickeando aquí </a>
                </div>
            </div>
        )
    }
}
