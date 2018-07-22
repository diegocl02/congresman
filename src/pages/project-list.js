import React, { Component } from 'react'
import { RingLoader } from 'react-spinners';
import * as Icons from '../icons/icons';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

export default class ProjectList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.dataProjects
        }
    }

    componentDidMount() {
        if (this.state.data === undefined) {
            var AjaxPromise = require('ajax-promise');
            AjaxPromise
                .get('/getinitialstate')
                .then((response) => {
                    this.props.setProjectData(response)
                    this.setState({
                        data: response
                    })
                })
        }
    }

    getProjectData() {
        return {
            number: "Numero",
            title: "Titulo",
            state: "Status",
            presentationDate: "Fecha de presentacion",
            period: "Periodo",
            summary: "Resumen",
            fileName: "Nombre de Archivo",
        }
    }

    render() {
        console.log("THIS STATE", this.state)
        if (this.state.data === undefined) {
            return (
                <div style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <RingLoader />
                </div>
            )
        } else {
            return (
                <div style={{ height: "90vh", width: "99vw", display: "flex", overflow: "scroll" }}>

                    <table style={{ justifyContent: "center", alignItems: "center" }}>
                        <thead>
                            <tr key={"header"}>
                                {Object.keys(this.getProjectData()).map((key, index) => {
                                    return <th key={`h${index}`}> {this.getProjectData()[key]} </th>
                                })}
                                <th> Analisis </th>
                                <th> Comentarios </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((row, index) => {
                                return <tr key={`r${index}`}>
                                    {Object.keys(this.getProjectData()).map((key, index) => {
                                        return <td key={`cell${index}`}> {row[key]}</td>
                                    })}
                                    <td> <div style={{height: "3em", width:"3em", display: "inline-block"}}><Link to={"/statistics"}> <Icons.Statistic/></Link> </div></td>
                                    <td> <div style={{height: "3em", width:"3em", display: "inline-block"}}> <Link to={"/comments"}> <Icons.Comment/></Link> </div> </td>
                                </tr>
                            })}
                        </tbody>
                    </table>

                </div>
            )
        }

    }
}
