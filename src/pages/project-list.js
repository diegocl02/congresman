import React, { Component } from 'react'
import { RingLoader, MoonLoader } from 'react-spinners';
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
            number: ["Numero", 10],
            title: ["Titulo", 40],
            state: ["Status", 10],
            presentationDate: ["Fecha de presentacion", 8],
            period: ["Periodo", 10],
            summary: ["Resumen", 40],
            fileName: ["Nombre de Archivo", 10]
        }
    }

    render() {
        const cellStyle = {
            wordWrap: "break-word"
        }
        const headerCellStyle = {
            overflow: "hidden",
        }
        const iconsProps = {
            style: { height: "3em", width: "3em", display: "inline-block" },
            className: "icons"
        } 
        if (this.state.data === undefined) {
            return (
                <div style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <MoonLoader />
                </div>
            )
        } else {
            return (
                <div style={{ height: "90vh", width: "99vw", display: "flex", overflow: "scroll", padding: "1em" }}>

                    <table style={{ justifyContent: "center", alignItems: "center" }}>
                        <thead>
                            <tr key={"header"}>
                                {Object.keys(this.getProjectData()).map((key, index) => {
                                    return <th key={`h${index}`} style={{ ...headerCellStyle, width: `${this.getProjectData()[key][1]}%` }}> {this.getProjectData()[key][0]} </th>
                                })}
                                <th style={{ ...headerCellStyle, width: `5%`, wordWrap: "break-word"  }}> Vota </th>
                                <th style={{ ...headerCellStyle, width: `5%`, wordWrap: "break-word"  }}> Comentarios </th>
                                <th style={{ ...headerCellStyle, width: `5%`, wordWrap: "break-word"  }}> Resultados </th>                                
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((row, index) => {
                                return <tr key={`r${index}`}>
                                    {Object.keys(this.getProjectData()).map((key, index) => {
                                        return <td
                                            key={`cell${index}`}
                                            style={{ ...cellStyle }}>
                                            {row[key]}
                                        </td>
                                    })}
                                    <td> <div {...iconsProps}><Link to={"/"}> <Icons.Vote /></Link> </div></td>                                    
                                    <td> <div {...iconsProps}> <Link to={"/comments"}> <Icons.Comment /></Link> </div> </td>
                                    <td> <div {...iconsProps}><Link to={"/statistics"}> <Icons.Statistic /></Link> </div></td>                                    
                                </tr>
                            })}
                        </tbody>
                    </table>

                </div>
            )
        }

    }
}
